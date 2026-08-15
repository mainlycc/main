import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import LandingPageView from "@/components/seo/LandingPageView";
import { getIndustryBySlug, industries } from "@/lib/industries";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) return { title: "Branża nie znaleziona | Mainly" };

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/branze/${industry.slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: absoluteUrl(`/branze/${industry.slug}`),
      type: "website",
      images: [
        { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: industry.h1 },
      ],
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: industry.h1,
          description: industry.intro,
          path: `/branze/${industry.slug}`,
        })}
      />
      <JsonLd data={faqPageSchema(industry.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Branże", url: absoluteUrl("/branze") },
          {
            name: industry.navLabel,
            url: absoluteUrl(`/branze/${industry.slug}`),
          },
        ])}
      />
      <LandingPageView
        data={industry}
        breadcrumb={{ label: "Branże", href: "/branze" }}
      />
    </>
  );
}
