export type BlogHeroContent = {
  main: string;
  sub?: string;
};

/**
 * Teksty do wygenerowanych obrazków hero/OG dla artykułów bloga
 * (app/blog-hero/[slug]/route.tsx). Liczby pochodzą z realnej treści
 * artykułu (excerpt/tytuł) - patrz content/blog-miniatury-brief.md.
 */
export const BLOG_HERO_CONTENT: Record<string, BlogHeroContent> = {
  "jak-stworzyc-nowoczesna-strone-internetowa-2025": { main: "2025" },
  "strona-internetowa-ktora-sprzedaje-7-elementow": {
    main: "7",
    sub: "elementów strony, która sprzedaje",
  },
  "kazda-sekunda-ladowania-to-utracone-leady": {
    main: "0,9s",
    sub: "zamiast 5,8 sekundy ładowania",
  },
  "strona-internetowa-dla-dentysty-2026": {
    main: "8 sek",
    sub: "na decyzję o telefonie do gabinetu",
  },
  "ile-kosztuje-aplikacja-webowa-na-zamowienie": {
    main: "15–30 tys.",
    sub: "zł za aplikację z panelem",
  },
  "jak-przeniesc-firme-z-excela-do-systemu": {
    main: "Excel → System",
  },
  "gotowy-crm-czy-system-na-zamowienie": {
    main: "Gotowy / Na miarę",
  },
  "jak-wybrac-firme-do-stworzenia-aplikacji-webowej": {
    main: "Jak wybrać?",
  },
  "konfigurator-3d-dla-producenta-pergoli-i-altan": {
    main: "3D",
    sub: "konfigurator dla JK Term",
  },
  "nextjs-czy-wordpress-strona-firmowa": {
    main: "0",
    sub: "wtyczek do aktualizowania",
  },
};

const FALLBACK: BlogHeroContent = { main: "Mainly" };

export function getBlogHeroContent(slug: string): BlogHeroContent {
  return BLOG_HERO_CONTENT[slug] ?? FALLBACK;
}

/** Ścieżka do wygenerowanego obrazu hero/OG dla danego artykułu. */
export function blogHeroImageUrl(slug: string): string {
  return `/blog-hero/${slug}`;
}
