"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Github,
  Globe,
} from "lucide-react";
import type { Project } from "@/lib/projects";
import { getProjectNeighbors } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/chip";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProjectLayout({ project }: { project: Project }) {
  const { prev, next } = getProjectNeighbors(project.slug);
  const projectImage = PlaceHolderImages.find(p => p.id === `project-${project.slug}`)?.imageUrl || "https://picsum.photos/1200/600";

  return (
    <div className="max-w-4xl mx-auto space-y-16 mt-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4">
           <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {project.title}
          </h1>
          <Badge variant={project.status === "En producción" ? "default" : "secondary"}>
            {project.status}
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">{project.summary}</p>
        <div className="flex flex-wrap items-center gap-4">
          {project.links.repo && (
            <Button variant="outline" asChild>
              <Link href={project.links.repo} target="_blank">
                <Github className="mr-2 h-4 w-4" /> Repositorio
              </Link>
            </Button>
          )}
          {project.links.demo && (
            <Button asChild>
              <Link href={project.links.demo} target="_blank">
                <Globe className="mr-2 h-4 w-4" /> Ver Demo
              </Link>
            </Button>
          )}
        </div>
      </header>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden border shadow-lg">
        <Image
          src={projectImage}
          alt={`Cover image for ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
           data-ai-hint="tech application dashboard"
        />
      </div>

      <section aria-labelledby="role-title">
        <h2 id="role-title" className="text-2xl font-bold mb-4">
          Mi Rol y Responsabilidades
        </h2>
        <p className="text-muted-foreground">{project.role}</p>
      </section>

      <section aria-labelledby="features-title">
        <h2 id="features-title" className="text-2xl font-bold mb-4">
          Características Clave
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
      
       <section aria-labelledby="tech-stack-title">
        <h2 id="tech-stack-title" className="text-2xl font-bold mb-4">
          Tecnologías Utilizadas
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </section>

      <footer className="border-t pt-8 mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
           <Button variant="outline" asChild>
            <Link href="/#proyectos">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Proyectos
            </Link>
          </Button>
          <div className="flex gap-4">
            {prev && (
              <Button variant="ghost" asChild>
                <Link href={`/projects/${prev.slug}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Link>
              </Button>
            )}
            {next && (
              <Button variant="ghost" asChild>
                <Link href={`/projects/${next.slug}`}>
                  Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
