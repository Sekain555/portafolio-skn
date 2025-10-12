import { NextResponse } from 'next/server';
import { z } from 'zod';

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

    // TODO: Integrar reCAPTCHA v3 para verificar el token
    // const recaptchaToken = body.recaptchaToken;
    // const secretKey = process.env.RECAPTCHA_SECRET;
    // if (!secretKey || !recaptchaToken) {
    //   console.warn("reCAPTCHA no está configurado.");
    // } else {
    //   const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    //   const response = await fetch(verificationUrl, { method: "POST" });
    //   const verificationData = await response.json();
    //   if (!verificationData.success || verificationData.score < 0.5) {
    //     return NextResponse.json({ ok: false, error: 'Falló la verificación reCAPTCHA.' }, { status: 403 });
    //   }
    // }

    console.log('Nuevo mensaje de contacto recibido:');
    console.log({ name, email, message });

    // TODO: Guardar en Firestore si está configurado
    // if (process.env.FIREBASE_CONFIG) {
    //   try {
    //     // const { db } = await initializeFirebaseAdmin();
    //     // await db.collection('contacts').add({
    //     //   name,
    //     //   email,
    //     //   message,
    //     //   createdAt: new Date(),
    //     // });
    //     console.log('Mensaje guardado en Firestore (simulación).');
    //   } catch (dbError) {
    //     console.error('Error al guardar en Firestore:', dbError);
    //     // No fallar la solicitud si solo la base de datos falla
    //   }
    // }


    // Por ahora, solo devolvemos una respuesta exitosa
    return NextResponse.json({ ok: true, message: 'Mensaje recibido correctamente.' });

  } catch (error) {
    console.error('Error en el endpoint de contacto:', error);
    return NextResponse.json({ ok: false, error: 'Error interno del servidor.' }, { status: 500 });
  }
}
