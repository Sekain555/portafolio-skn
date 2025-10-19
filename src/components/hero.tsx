import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden py-24 sm:py-32 lg:py-40 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-lg font-semibold text-primary tracking-wider">
              VÍCTOR SEPÚLVEDA "SEKAIN"
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Desarrollador Full-Stack y Analista de Sistemas
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
              Apasionado por transformar ideas en soluciones de software robustas y
              escalables. Mi objetivo es construir tecnología que sea tan elegante
              en su interior como intuitiva en su uso.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="#proyectos">
                  Ver Mis Proyectos <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contacto">Contáctame</a>
              </Button>
            </div>
            <div className="mt-10 flex gap-6 justify-center lg:justify-start">
              <Link
                href="https://github.com/vicho-s"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Perfil de Github"
              >
                <Github className="h-7 w-7" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/victorsepulvedasala/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Perfil de LinkedIn"
              >
                <Linkedin className="h-7 w-7" />
              </Link>
              {/* Si tienes Twitter, puedes descomentar esto */}
              {/* 
              <Link
                href="#"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Perfil de Twitter"
              >
                <Twitter className="h-7 w-7" />
              </Link>
              */}
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="relative h-[50vh] lg:h-full flex items-center justify-center">
            <div className="w-full max-w-sm lg:max-w-none lg:w-[500px] h-full lg:h-[750px] relative">
               <Image
                src="/profile-image.png"
                alt="Ilustración de perfil de Víctor Sepúlveda"
                fill
                className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
