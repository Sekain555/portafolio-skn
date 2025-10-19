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
            Soy Víctor Sepúlveda, programador con una
            profunda pasión por el desarrollo de sistemas y la innovación
            tecnológica. Mi camino comenzó con la curiosidad de entender cómo
            funcionan las cosas, y hoy esa misma curiosidad me impulsa a diseñar
            soluciones que conecten eficiencia, lógica y experiencia humana.
          </p>
          <p>
            Mi enfoque está en convertir ideas en sistemas funcionales, donde la
            precisión técnica y la visión integral se combinan para crear
            herramientas útiles, escalables y bien estructuradas. Creo que la
            ingeniería no solo trata de código, sino de resolver problemas
            reales con pensamiento crítico y claridad.
          </p>
          <p>
            Más allá del trabajo, disfruto explorar temas ligados a la cultura
            digital, la música y el anime, que me inspiran a mantener una mente
            abierta y adaptable frente a los cambios tecnológicos y humanos del
            mundo moderno.
          </p>
        </div>
      </div>
    </section>
  );
}
