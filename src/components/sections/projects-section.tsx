import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "Project Alpha",
    description: "A comprehensive dashboard for real-time data analytics, built with a modern tech stack.",
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    technologies: ["FastAPI", "Angular", "MySQL"],
  },
  {
    title: "Mobile First Initiative",
    description: "A cross-platform mobile application to enhance user engagement on the go.",
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    technologies: ["Ionic", "Vue.js", "Firebase"],
  },
  {
    title: "Smart Home Hub",
    description: "An IoT project to control and monitor home devices remotely using Arduino and cloud services.",
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    technologies: ["Arduino", "Python", "Firebase"],
  },
   {
    title: "Data Visualization Platform",
    description: "Web application for creating interactive charts and graphs from various data sources.",
    image: PlaceHolderImages.find((img) => img.id === 'project-4'),
    technologies: ["Vue.js", "Flask", "D3.js"],
  },
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 sm:py-32 bg-muted/50 dark:bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {project.image && (
                <div className="relative h-60 w-full">
                    <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.image.imageHint}
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Content can go here if needed */}
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
