import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getPublishedProjects } from "@/lib/portfolio";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  const projects = await getPublishedProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Projekt nie znaleziony | Mainly" };
  }

  return {
    title: `${project.name} - Case Study | Mainly`,
    description: project.description,
    alternates: { canonical: `/projekty/${project.slug}` },
    openGraph: {
      title: `${project.name} | Mainly`,
      description: project.description,
      url: `https://mainly.pl/projekty/${project.slug}`,
      type: "website",
      images: [{ url: project.image, width: 1200, height: 630, alt: project.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Mainly`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getPublishedProjects();
  const relatedProjects = allProjects
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return <ProjectDetailClient project={project} relatedProjects={relatedProjects} />;
}
