import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "../../components/ProjectCaseStudy";
import { projects } from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return project
    ? { title: `${project.title} — Case Study`, description: project.description }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
