import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { buildProjectFaq } from "@/components/projects/ProjectExtras";
import { getProjectBySlug, getPublishedProjects } from "@/lib/portfolio";
import { projectImageFileExists } from "@/lib/project-images";
import { getProjectMetaTitle } from "@/lib/project-meta";
import { breadcrumbSchema, faqPageSchema, ORG_ID } from "@/lib/schema";
import { absoluteUrl, DEFAULT_OG_IMAGE, resolveImageUrl, SITE_URL } from "@/lib/seo";
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

  const metaTitle = getProjectMetaTitle(slug, project.name);
  const ogImage = isValidOgImage(project.image) ? project.image : DEFAULT_OG_IMAGE;

  return {
    title: metaTitle,
    description: project.description,
    alternates: { canonical: `/projekty/${project.slug}` },
    openGraph: {
      title: metaTitle,
      description: project.description,
      url: absoluteUrl(`/projekty/${project.slug}`),
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.name} — projekt zrealizowany przez Mainly`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: project.description,
      images: [ogImage],
    },
  };
}

function isValidOgImage(url: string): boolean {
  if (!url) return false;
  if (url.includes("placeholder")) return false;
  if (url.endsWith(".svg")) return false;
  return projectImageFileExists(url);
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

  const projectUrl = absoluteUrl(`/projekty/${project.slug}`);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: `${project.name} — case study`,
    description: project.fullDescription || project.description,
    url: projectUrl,
    image: resolveImageUrl(project.image),
    dateCreated: String(project.year),
    creator: { "@id": ORG_ID },
    provider: { "@id": ORG_ID },
    keywords: project.technologies.join(", "),
    about: {
      "@type": "Service",
      name: "Tworzenie aplikacji webowych i stron internetowych",
      provider: { "@id": ORG_ID },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": projectUrl },
  };

  const projectFaq = buildProjectFaq(project);

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <JsonLd data={faqPageSchema(projectFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Portfolio", url: absoluteUrl("/projekty") },
          { name: project.name, url: projectUrl },
        ])}
      />
      <ProjectDetailClient project={project} relatedProjects={relatedProjects} />
    </>
  );
}
