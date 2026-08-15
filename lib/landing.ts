export type LandingFaq = { question: string; answer: string };

export type LandingSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type LandingLink = {
  href: string;
  label: string;
  description: string;
};

export type LandingPageData = {
  slug: string;
  /** Nazwa w nawigacji i na stronach hub */
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /**
   * Definicja w 40–60 słowach, umieszczana bezpośrednio pod H1.
   * To jest fragment, który Google wyciąga do featured snippet,
   * a modele AI cytują w odpowiedziach. Nie rozbijaj go na listę.
   */
  intro: string;
  /** Krótkie zdanie na kafelku na stronie hub */
  teaser: string;
  sections: LandingSection[];
  priceFrom?: number;
  priceNote?: string;
  faq: LandingFaq[];
  /** Slugi projektów z portfolio, które stanowią dowód */
  relatedProjects: string[];
  relatedLinks: LandingLink[];
};
