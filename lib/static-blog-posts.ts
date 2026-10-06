/**
 * Static fallback list of blog posts for SSR/SSG when Supabase is unavailable.
 * This ensures blog links are always server-rendered for SEO.
 */
export type StaticBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published_at: string;
  read_time: string;
  image_url: string | null;
  tags: string[];
};

export const STATIC_BLOG_POSTS: StaticBlogPost[] = [
  {
    slug: "nextjs-czy-wordpress-strona-firmowa",
    title: "Next.js czy WordPress na stronę firmową? Szczera opinia programisty",
    excerpt: "WordPress wygrywa tam, gdzie liczy się samodzielna edycja treści i niski budżet startowy. Next.js tam, gdzie liczy się szybkość, bezpieczeństwo i to, że strona ma urosnąć w system.",
    category: "Next.js",
    published_at: "2026-09-10T09:00:00+00:00",
    read_time: "5 min czytania",
    image_url: null,
    tags: ["Next.js", "WordPress", "Technologia", "Porównanie"],
  },
  {
    slug: "konfigurator-3d-dla-producenta-pergoli-i-altan",
    title: "Konfigurator 3D na stronie producenta pergoli i altan",
    excerpt: "Dlaczego akurat ten produkt nadaje się pod konfigurator wzorcowo, co realnie zmienia się w procesie sprzedaży i jaki jest najdroższy błąd przy wdrożeniu.",
    category: "Sprzedaż",
    published_at: "2026-08-27T09:00:00+00:00",
    read_time: "9 min czytania",
    image_url: "/tile-merchant-ireland-lCmZqcHM-OY-unsplash.jpg",
    tags: ["Konfigurator 3D", "Pergole", "Producenci", "Lead generation"],
  },
  {
    slug: "jak-wybrac-firme-do-stworzenia-aplikacji-webowej",
    title: "Jak wybrać firmę do stworzenia aplikacji webowej",
    excerpt: "Dwanaście pytań, które warto zadać przed podpisaniem umowy, sześć sygnałów ostrzegawczych i uczciwe porównanie freelancera, agencji i software house'u.",
    category: "Poradnik",
    published_at: "2026-08-25T09:00:00+00:00",
    read_time: "6 min czytania",
    image_url: null,
    tags: ["Poradnik", "Współpraca", "Umowa", "Wybór wykonawcy"],
  },
  {
    slug: "gotowy-crm-czy-system-na-zamowienie",
    title: "Gotowy CRM czy system na zamówienie?",
    excerpt: "Konkretny rachunek trzyletniego kosztu obu opcji, próg opłacalności zależny od wielkości zespołu i trzecia droga, o której mało kto mówi.",
    category: "Systemy",
    published_at: "2026-08-22T09:00:00+00:00",
    read_time: "6 min czytania",
    image_url: null,
    tags: ["CRM", "Systemy", "Porównanie", "Koszty"],
  },
  {
    slug: "jak-przeniesc-firme-z-excela-do-systemu",
    title: "Jak przenieść firmę z Excela do systemu",
    excerpt: "Sześć kroków, kolejność, która chroni przed katastrofą, i pięć błędów, o które rozbija się większość takich projektów.",
    category: "Automatyzacja",
    published_at: "2026-08-20T09:00:00+00:00",
    read_time: "6 min czytania",
    image_url: null,
    tags: ["Automatyzacja", "Excel", "Migracja danych", "Procesy"],
  },
  {
    slug: "ile-kosztuje-aplikacja-webowa-na-zamowienie",
    title: "Ile kosztuje aplikacja webowa na zamówienie?",
    excerpt: "Od 9 900 zł za wdrożenie startowe, 15–30 tys. za typową aplikację z panelem, 35–80 tys. za rozbudowany system. Rozkładam widełki na czynniki.",
    category: "Cennik",
    published_at: "2026-08-18T09:00:00+00:00",
    read_time: "6 min czytania",
    image_url: null,
    tags: ["Cennik", "Aplikacje webowe", "Wycena", "Budżet"],
  },
  {
    slug: "strona-internetowa-dla-dentysty-2026",
    title: "Strona internetowa dla dentysty - co musi zawierać w 2026",
    excerpt: "72% pacjentów szuka nowego dentysty przez Google przed pierwszą wizytą. Decyzja o telefonie zapada w 8 sekund od wejścia na stronę.",
    category: "Strony dla firm",
    published_at: "2026-07-28T08:00:00+00:00",
    read_time: "8 min czytania",
    image_url: null,
    tags: ["Strony dla firm", "Branże", "SEO", "Stomatologia"],
  },
  {
    slug: "kazda-sekunda-ladowania-to-utracone-leady",
    title: "Każda sekunda ładowania to utracone leady",
    excerpt: "Przeanalizowałem 40 stron moich klientów sprzed redesignu. Mediana czasu ładowania: 5,8 sekundy. Po migracji na mój stack - 0,9 sekundy.",
    category: "Konwersja",
    published_at: "2026-05-28T00:00:00+00:00",
    read_time: "9 min czytania",
    image_url: null,
    tags: ["Konwersja", "Wydajność", "Core Web Vitals", "Next.js"],
  },
  {
    slug: "strona-internetowa-ktora-sprzedaje-7-elementow",
    title: "Strona internetowa, która sprzedaje - 7 elementów, o których większość firm zapomina",
    excerpt: "Twoja strona internetowa może być piękna, szybka i technicznie dopracowana - ale jeśli nie sprzedaje, to jest jak salon samochodowy bez sprzedawców.",
    category: "Marketing",
    published_at: "2025-01-20T00:00:00+00:00",
    read_time: "6 min czytania",
    image_url: "/kowdlo.png",
    tags: ["Marketing", "Konwersja", "UX", "Sprzedaż"],
  },
  {
    slug: "jak-stworzyc-nowoczesna-strone-internetowa-2025",
    title: "Jak stworzyć nowoczesną stronę internetową w 2025 roku",
    excerpt: "Poznaj najnowsze trendy i technologie, które pomogą Ci stworzyć stronę internetową, która przyciąga uwagę i konwertuje w 2025 roku.",
    category: "Web Development",
    published_at: "2025-01-15T00:00:00+00:00",
    read_time: "8 min czytania",
    image_url: "/budowa_strony.jpg",
    tags: ["Web Development", "SEO", "AI", "2025", "Trendy"],
  },
];

/**
 * Map of category/tags to relevant service slugs for "Zobacz usługę" links
 */
export const CATEGORY_TO_SERVICE: Record<string, { slug: string; name: string }> = {
  "Next.js": { slug: "strony-internetowe", name: "Strony internetowe" },
  "Web Development": { slug: "strony-internetowe", name: "Strony internetowe" },
  "Strony dla firm": { slug: "strony-internetowe", name: "Strony internetowe" },
  "Automatyzacja": { slug: "automatyzacja-procesow", name: "Automatyzacja procesów" },
  "Systemy": { slug: "systemy-dla-firm", name: "Systemy dla firm" },
  "CRM": { slug: "systemy-dla-firm", name: "Systemy dla firm" },
  "Cennik": { slug: "aplikacje-webowe", name: "Aplikacje webowe" },
  "Aplikacje webowe": { slug: "aplikacje-webowe", name: "Aplikacje webowe" },
  "Marketing": { slug: "strony-internetowe", name: "Strony internetowe" },
  "Konwersja": { slug: "strony-internetowe", name: "Strony internetowe" },
  "Sprzedaż": { slug: "aplikacje-webowe", name: "Aplikacje webowe" },
  "Poradnik": { slug: "aplikacje-webowe", name: "Aplikacje webowe" },
};

/**
 * Get relevant service for a blog post based on category and tags
 */
export function getServiceForPost(
  category: string,
  tags: string[]
): { slug: string; name: string } | null {
  if (CATEGORY_TO_SERVICE[category]) {
    return CATEGORY_TO_SERVICE[category];
  }
  
  for (const tag of tags) {
    if (CATEGORY_TO_SERVICE[tag]) {
      return CATEGORY_TO_SERVICE[tag];
    }
  }
  
  return null;
}
