import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/projects";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FaArrowRight } from "react-icons/fa";

export function Projects() {
  const projects = getProjects();
  const projectImages = new Map(
    PlaceHolderImages.map((img) => [img.id, img.imageUrl])
  );

  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="py-24 sm:py-32 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            id="proyectos-title"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            Proyectos Destacados
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Una selección de proyectos que demuestran mi experiencia en
            desarrollo y mi pasión por la tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <div className="relative h-48 w-full">
                  <Image
                    src={projectImages.get(`project-${project.slug}`) || "https://picsum.photos/600/400"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    data-ai-hint="tech application"
                  />
                   <div className="absolute top-2 right-2">
                    <Badge variant={project.status === 'En producción' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="pt-4 text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                  {project.stack.length > 3 && (
                    <Badge variant="outline">+{project.stack.length - 3}</Badge>
                  )}
                </div>
                <div className="mt-auto">
                   <Button asChild className="w-full">
                    <Link href={`/projects/${project.slug}`}>
                      Ver más <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
