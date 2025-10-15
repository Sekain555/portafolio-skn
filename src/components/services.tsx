import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FaGlobe,
  FaMicrochip,
  FaServer,
  FaFileAlt,
  FaRocket,
  FaArrowRight,
} from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaGlobe className="h-10 w-10 text-primary" />,
    title: 'Desarrollo Web y Móvil',
    description: 'Aplicaciones modernas, responsivas y optimizadas.',
    tags: ['Angular', 'Ionic', 'Vue', 'Vite', 'Vuetify'],
  },
  {
    icon: <FaMicrochip className="h-10 w-10 text-primary" />,
    title: 'Integraciones IoT',
    description: 'Conexión hardware–software con ESP32 y Arduino.',
    tags: ['ESP32', 'Arduino'],
  },
  {
    icon: <FaServer className="h-10 w-10 text-primary" />,
    title: 'APIs y Automatización',
    description: 'Backends escalables y conectividad entre sistemas.',
    tags: ['Python', 'FastAPI', 'REST/JSON'],
  },
  {
    icon: <FaFileAlt className="h-10 w-10 text-primary" />,
    title: 'Consultoría Técnica',
    description: 'Análisis, documentación y planificación de sistemas.',
    tags: ['Arquitectura', 'Documentación', 'Roadmap'],
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="py-24 sm:py-32 bg-secondary/50 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            id="servicios-title"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            Servicios Ofrecidos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Soluciones tecnológicas a medida para llevar tus ideas al siguiente
            nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((service) => (
            <Card
              key={service.title}
              className="flex flex-col shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader className="flex flex-col items-start gap-4">
                {service.icon}
                <div className="space-y-1">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#contacto">
                    Solicitar <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          {/*
          <Card
            key="consultoria-tecnica"
            className="flex flex-col shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <CardHeader className="flex flex-col items-start gap-4">
              <FaFileAlt className="h-10 w-10 text-primary" />
              <div className="space-y-1">
                <CardTitle className="text-xl">Consultoría Técnica</CardTitle>
                <CardDescription>Análisis, documentación y planificación de sistemas.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {['Arquitectura', 'Documentación', 'Roadmap'].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="#contacto">
                  Solicitar <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card
            key="soporte-innovacion"
            className="flex flex-col shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <CardHeader className="flex flex-col items-start gap-4">
              <FaRocket className="h-10 w-10 text-primary" />
              <div className="space-y-1">
                <CardTitle className="text-xl">Soporte e Innovación</CardTitle>
                <CardDescription>Mejora de rendimiento y evolución de proyectos existentes.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {['Refactor', 'Optimización', 'Deploy'].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="#contacto">
                  Solicitar <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          */}
        </div>
      </div>
    </section>
  );
}
