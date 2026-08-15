import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import LandingPageView from "@/components/seo/LandingPageView";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/schema";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { getServiceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return { title: "Usługa nie znaleziona | Mainly" };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/uslugi/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/uslugi/${service.slug}`),
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: service.h1 }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.navLabel,
          description: service.intro,
          path: `/uslugi/${service.slug}`,
          priceFrom: service.priceFrom,
        })}
      />
      <JsonLd data={faqPageSchema(service.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Usługi", url: absoluteUrl("/uslugi") },
          { name: service.navLabel, url: absoluteUrl(`/uslugi/${service.slug}`) },
        ])}
      />
      <LandingPageView
        data={service}
        breadcrumb={{ label: "Usługi", href: "/uslugi" }}
      />
    </>
  );
}
