import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import { ProjectLayout } from "@/components/project-layout";
import { Breadcrumbs } from "@/components/breadcrumbs";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Víctor Sepúlveda`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
       <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Proyectos", href: "/#proyectos" },
          { label: project.title, href: `/projects/${project.slug}` },
        ]}
      />
      <ProjectLayout project={project} />
    </main>
  );
}
