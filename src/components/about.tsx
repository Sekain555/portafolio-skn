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
            Uniendo Código y Creatividad
          </h2>
          <blockquote className="mt-6 max-w-3xl mx-auto text-lg italic text-muted-foreground border-l-4 border-primary pl-4 text-left">
            “La tecnología, en su máxima expresión, es una forma de arte.”
          </blockquote>
        </div>
        <div className="mt-12 space-y-6 text-muted-foreground text-lg text-justify">
          <p>
            Soy Víctor Sepúlveda, un ingeniero y programador chileno apasionado
            por la intersección entre tecnología y creatividad. Mi viaje comenzó
            con una curiosidad innata por entender cómo funcionan las cosas, y
            esa misma curiosidad me impulsa hoy a construir soluciones
            innovadoras y efectivas.
          </p>
          <p>
            Mi enfoque es transformar ideas en realidades tangibles, combinando
            la precisión de la ingeniería con la expresividad del arte. Creo
            firmemente que la tecnología es una herramienta poderosa para crear
            experiencias significativas y resolver problemas reales.
          </p>
          <p>
            Más allá de mi trabajo, soy un entusiasta de la música, el anime y la
            cultura digital. Estas pasiones alimentan mi creatividad y me
            inspiran a abordar los desafíos desde perspectivas únicas.
          </p>
        </div>
      </div>
    </section>
  );
}
