import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "../../components/ProjectCaseStudy";
import { projects } from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const projectSlugAliases: Record<string, string> = {
  "local-lens": "findty",
  "find-ty": "findty",
};

function findProject(slug: string) {
  const resolvedSlug = projectSlugAliases[slug] ?? slug;
  return projects.find((item) => item.slug === resolvedSlug);
}

export function generateStaticParams() {
  return [
    ...projects.map((project) => ({ slug: project.slug })),
    ...Object.keys(projectSlugAliases).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  return project
    ? { title: `${project.title} — Case Study`, description: project.description }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
