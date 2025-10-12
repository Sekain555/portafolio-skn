import React from 'react';
import { ContactForm } from '@/components/contact-form';
import { SocialLinks } from '@/components/social-links';

export function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            id="contacto-title"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            Hablemos.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            ¿Tienes una idea o proyecto en mente? ¡Genial! Estoy aquí para
            convertirla en realidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col h-full">
             <ContactForm />
          </div>
          <div className="flex flex-col gap-8 pt-8">
            <h3 className="text-xl font-bold">Otras formas de conectar</h3>
             <p className="text-muted-foreground">
              También puedes encontrarme en estas plataformas o escribirme directamente a mi correo.
            </p>
            <SocialLinks />
          </div>
        </div>
         <p className="text-center text-sm text-muted-foreground mt-24">
          – Víctor ‘Sekain’ Sepúlveda –
        </p>
      </div>
    </section>
  );
}
