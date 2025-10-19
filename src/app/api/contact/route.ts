import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido.'),
  email: z.string().email('El correo electrónico no es válido.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'Datos de entrada no válidos.', details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;
    const toEmail = process.env.CONTACT_EMAIL_TO;

    if (!process.env.RESEND_API_KEY) {
      console.error('La clave de API de Resend no está configurada.');
      return NextResponse.json({ ok: false, error: 'El servidor no está configurado para enviar correos.' }, { status: 500 });
    }

    if (!toEmail) {
      console.error('El correo de destino no está configurado.');
      return NextResponse.json({ ok: false, error: 'El servidor no está configurado para recibir correos.' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Dominio de envío de Resend
      to: toEmail, 
      subject: `Nuevo mensaje de ${name} desde tu portafolio`,
      reply_to: email,
      html: `
        <p>Has recibido un nuevo mensaje de tu formulario de contacto.</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error al enviar el correo:', error);
      return NextResponse.json({ ok: false, error: 'Hubo un problema al enviar el correo.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, message: 'Mensaje enviado correctamente.' });

  } catch (error) {
    console.error('Error en el endpoint de contacto:', error);
    return NextResponse.json({ ok: false, error: 'Error interno del servidor.' }, { status: 500 });
  }
}