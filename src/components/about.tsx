import React from "react";

export function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      className="py-24 sm:py-32 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center">
          <h2
            id="sobre-mi-title"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            Construyendo Soluciones con Propósito
          </h2>
          <blockquote className="mt-6 max-w-3xl mx-auto text-lg italic text-muted-foreground border-l-4 border-primary pl-4 text-left">
            “La tecnología, en su máxima expresión, es una forma de arte.”
          </blockquote>
        </div>
        <div className="mt-12 space-y-6 text-muted-foreground text-lg text-justify">
          <p>
            Soy Víctor Sepúlveda, desarrollador full-stack chileno especializado
            en construir sistemas completos: desde el backend con FastAPI y
            Python hasta aplicaciones móviles con Angular e Ionic, pasando por
            firmware en ESP32 para proyectos IoT.
          </p>
          <p>
            Trabajo en Rucaray, donde desarrollo y mantengo sistemas internos en
            producción que optimizan la operación diaria del equipo. En
            paralelo, construyo productos propios — TacticalTray, un monitor de
            sistema open source para Windows, y TechFlow, una plataforma SaaS
            para servicios técnicos — porque creo que la mejor forma de crecer
            como desarrollador es resolver problemas reales con tus propias
            manos.
          </p>
          <p>
            Me muevo con comodidad entre el frontend, el backend y el hardware.
            Esa amplitud no es accidental — viene de una curiosidad genuina por
            entender cómo funcionan las cosas en todos sus niveles, algo que
            también encuentro en la música, el anime y la cultura digital que me
            rodea.
          </p>
        </div>
      </div>
    </section>
  );
}
