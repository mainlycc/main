import { BUSINESS, SOCIAL_PROFILES } from "./site";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./seo";

export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.street,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  postalCode: BUSINESS.postalCode,
  addressCountry: BUSINESS.country,
};

/**
 * Osoba stojąca za firmą. Kluczowe dla E-E-A-T przy jednoosobowej działalności
 * oraz dla powiązania encji w modelach AI.
 */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: BUSINESS.personName,
  description: BUSINESS.personDescription,
  jobTitle: BUSINESS.jobTitle,
  email: `mailto:${BUSINESS.email}`,
  telephone: BUSINESS.telephone,
  url: absoluteUrl("/o-mnie"),
  worksFor: { "@id": ORG_ID },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "aplikacje webowe",
    "systemy CRM na zamówienie",
    "automatyzacja procesów biznesowych",
    "optymalizacja SEO",
  ],
  address: postalAddress,
  ...(SOCIAL_PROFILES.length > 0 && { sameAs: SOCIAL_PROFILES }),
};

/**
 * Encja firmy. ProfessionalService jest precyzyjniejszym typem niż LocalBusiness
 * dla usług IT, a jednocześnie dziedziczy po LocalBusiness (adres, godziny, mapa).
 */
export function organizationSchema(reviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: BUSINESS.legalName,
    description:
      "Aplikacje webowe, systemy na zamówienie i strony internetowe dla firm. Od projektu po wdrożenie, bez podwykonawców.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(DEFAULT_OG_IMAGE),
      width: 1200,
      height: 630,
    },
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    vatID: BUSINESS.vatID,
    taxID: BUSINESS.taxID,
    foundingDate: BUSINESS.foundingDate,
    founder: { "@id": PERSON_ID },
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...BUSINESS.openingHours.days],
        opens: BUSINESS.openingHours.opens,
        closes: BUSINESS.openingHours.closes,
      },
    ],
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "PLN",
    areaServed: [
      { "@type": "City", name: "Warszawa" },
      { "@type": "Country", name: "Polska" },
    ],
    knowsLanguage: ["pl", "en"],
    /**
     * Uwaga: Google nie wyświetla gwiazdek dla opinii o własnej firmie
     * umieszczonych na własnej stronie. Ten fragment działa na rzecz
     * zrozumienia encji przez modele AI i Bing — gwiazdki w Google
     * pochodzą z Profilu Firmy, nie stąd.
     */
    ...(reviewCount > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        reviewCount,
      },
    }),
    ...(SOCIAL_PROFILES.length > 0 && { sameAs: SOCIAL_PROFILES }),
  };
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "pl-PL",
  publisher: { "@id": ORG_ID },
};

export type Crumb = { name: string; url: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export type FaqEntry = { question: string; answer: string };

export function faqPageSchema(items: readonly FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  priceFrom,
}: {
  name: string;
  description: string;
  path: string;
  priceFrom?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "Warszawa" },
      { "@type": "Country", name: "Polska" },
    ],
    ...(priceFrom && {
      offers: {
        "@type": "Offer",
        priceCurrency: "PLN",
        price: priceFrom,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "PLN",
          minPrice: priceFrom,
          valueAddedTaxIncluded: false,
        },
        availability: "https://schema.org/InStock",
        url: absoluteUrl(path),
      },
    }),
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
