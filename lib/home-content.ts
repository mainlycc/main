export const stats = [
  { value: "50", suffix: "+", label: "Klientów i zleceń" },
  { value: "36", suffix: "+", label: "Wdrożonych aplikacji i stron" },
  { value: "865", suffix: "+", label: "Użytkowników największego systemu" },
  { value: "9", suffix: null, label: "Obsłużonych branż" },
];

export const manifestoItems = [
  "Projektujemy z intencją",
  "Kodujemy z dyscypliną",
  "Wdrażamy z impetem",
  "Mierzymy każdy klik",
  "Bez szablonów",
  "Bez zbędnych słów",
];

export const benefits = [
  {
    idx: "01",
    title: "Kod pisany pod Twój proces",
    description:
      "Nie dostosowujesz firmy do oprogramowania. System robi dokładnie to, co robi Twój biznes - tylko bez ręcznej pracy.",
    icon: "zap",
  },
  {
    idx: "02",
    title: "Szybkość, którą widać w wynikach",
    description:
      "Strony z gotowców ładują się wolno i wypadają z Google. Każdy projekt przechodzi audyt wydajności - czas ładowania poniżej sekundy to standard.",
    icon: "shield",
  },
  {
    idx: "03",
    title: "Budujesz raz, rozwijasz bez limitu",
    description:
      "Dziś system do rezerwacji, za rok moduł płatności i raportowanie? Architektura jest gotowa - dokładam funkcje zamiast przepisywać od zera.",
    icon: "clock",
  },
  {
    idx: "04",
    title: "Jeden punkt kontaktu",
    description:
      "Projekt, kod, wdrożenie i wsparcie - to ja. Żadnego „to wina grafika” ani przerzucania między ludźmi. Jedno miejsce, jedna odpowiedzialność.",
    icon: "grid",
  },
];

export const trustClients = [
  "Magia Podróżowania",
  "AIRSET",
  "Akademia Wiedzy",
  "Elomoto.eco",
  "Lease1",
];

export const processSteps = [
  {
    num: "01",
    title: "Strategia & brief",
    description:
      "Spotkanie, analiza konkurencji, mapowanie celów biznesowych i ścieżek użytkownika.",
    duration: "3-5 dni",
    position: { left: "6%", top: "45%" },
    node: { left: "10%", top: "38%" },
  },
  {
    num: "02",
    title: "Projekt UX/UI",
    description:
      "Wireframy, system designu, makiety hi-fi w Figmie. Dwie rundy poprawek wliczone w cenę.",
    duration: "1-2 tygodnie",
    position: { left: "30%", top: "57%" },
    node: { left: "30%", top: "50%" },
  },
  {
    num: "03",
    title: "Kod & wdrożenie",
    description:
      "Implementacja w Next.js, integracje, CMS, optymalizacja, testy na realnych urządzeniach.",
    duration: "2-4 tygodnie",
    position: { left: "55%", top: "33%" },
    node: { left: "55%", top: "26%" },
  },
  {
    num: "04",
    title: "Start & opieka",
    description:
      "Wdrożenie produkcyjne, szkolenie, wsparcie techniczne, monitoring i drobne poprawki.",
    duration: "bez limitu",
    position: { left: "78%", top: "15%", width: "20%" },
    node: { left: "90%", top: "8%" },
  },
];

export const beforeItems = [
  { text: "Każdy nowy klient oznacza ", strong: "więcej pracy" },
  { text: "Zespół wykonuje setki powtarzalnych czynności" },
  { text: "Dane trzeba ręcznie przepisywać między systemami" },
  { text: "Błędy pojawiają się przez obsługę „na piechotę”" },
  { text: "Nie wiesz, gdzie uciekają pieniądze i czas" },
];

export const afterItems = [
  { text: "Klient ", strong: "sam wykonuje część procesu", suffix: " online" },
  { text: "System pilnuje terminów i przypomnień za Ciebie" },
  { text: "Integracje eliminują ręczne przepisywanie danych" },
  { text: "Mniej błędów i mniej reklamacji" },
  { text: "Widzisz dane i wyniki ", strong: "w czasie rzeczywistym" },
];

export const portfolioCases = [
  {
    featured: true,
    title: "Football Academy System",
    tags: ["3D", "Next.js", "Three.js", "2026"],
    slug: "football-academy",
    preview: "featured" as const,
  },
  {
    featured: false,
    title: "Magia Podróżowania",
    tags: ["CRM", "PayNow", "Next.js", "2025"],
    slug: "magia-podrozowania",
    preview: "featured" as const,
  },
  {
    featured: false,
    title: "Elomoto.eco",
    tags: ["SPA", "React", "EV", "2025"],
    slug: "elomoto-eco",
    preview: "featured" as const,
  },
  {
    featured: false,
    title: "Wizualizator Grzejników JK Term",
    tags: ["AI", "Next.js", "Generator", "2025"],
    slug: "jkterm-wizualizator",
    preview: "featured" as const,
  },
  {
    featured: false,
    title: "Akademia Wiedzy",
    tags: ["System e-korepetycji", "PayU", "2026"],
    slug: "akademia-wiedzy",
    preview: "akademia" as const,
  },
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Supabase",
  "PostgreSQL",
  "Tailwind",
  "Framer",
  "Vercel",
  "GraphQL",
  "Figma",
];

export const pricingPlans = [
  {
    tag: "Strony",
    name: "Start",
    description: "Strona, która pracuje na Twój biznes.",
    price: "2 900",
    featured: false,
    features: [
      "Do 5 podstron, formularz kontaktowy, SEO techniczne",
      "Realizacja 1-2 tyg.",
    ],
  },
  {
    tag: "⭐ najczęściej wybierany",
    name: "Rozwój",
    description: "Firma rosnąca z Google i reklam.",
    price: "4 900",
    featured: true,
    features: [
      "Do 10 podstron, blog, analityka konwersji, integracje",
      "Realizacja 3-4 tyg.",
    ],
  },
  {
    tag: "Systemy B2B",
    name: "Skala",
    description: "Aplikacja lub system szyty na miarę Twojej firmy.",
    price: "9 900",
    featured: false,
    features: [
      "Panel admin, role użytkowników, integracje zewnętrzne",
      "Płatności, automatyczne powiadomienia, raportowanie",
      "Realizacja od 6 tyg.",
    ],
  },
];

export const pricingCare = {
  title: "Opieka techniczna - od 290 zł/mies.",
  description:
    "Aktualizacje, kopie zapasowe, monitoring, drobne poprawki w 48 h. Twoja strona nie jest projektem - jest procesem. Zajmę się nim.",
};

export const pricingNote =
  "Każda wycena jest indywidualna i ważna 14 dni. Zaliczka 50%, reszta po wdrożeniu.";

export const testimonials = [
  {
    text: "„Strona gotowa w umówionym czasie, bez niespodzianek. Widać, że Stanisław wie co robi - i nie trzeba mu tłumaczyć wszystkiego dwa razy.”",
    name: "Anna N.",
    avatar: "/18.jpg",
  },
  {
    text: "„Dobry kontakt przez cały projekt, szybko odpowiada i nie zostawia w niepewności. Polecam szczególnie tym, którzy mieli złe doświadczenia z innymi.”",
    name: "Michał K.",
    avatar: "/75.jpg",
  },
  {
    text: "„Strona ładuje się szybko i dobrze widać ją w Google. Efekty pojawiły się szybciej niż się spodziewałam.”",
    name: "Katarzyna Z.",
    avatar: "/7.jpg",
  },
  {
    text: "„Elastyczny i konkretny - powiedział co ile kosztuje, kiedy będzie gotowe i dotrzymał słowa. Takich ludzi szukam.”",
    name: "Tomasz U.",
    avatar: "/avatars/default.png",
  },
  {
    text: "„Wiedziałam co i kiedy będzie gotowe - bez nerwów i niespodzianek w połowie projektu. Efekt końcowy lepszy niż zakładałam.”",
    name: "Ewelina M.",
    avatar: "/avatars/default.png",
  },
  {
    text: "„Sprawna realizacja, bez zbędnego gadania. Strona działa dobrze i wygląda profesjonalnie. Kolejny projekt też tu zostawię.”",
    name: "Paweł L.",
    avatar: "/avatars/default.png",
  },
  {
    text: "„Nasz portal działa teraz znacznie sprawniej i obsługuje go każdy bez szkoleń. Dobra robota.”",
    name: "Joanna K.",
    avatar: "/avatars/default.png",
  },
  {
    text: "„Projekt zrealizowany tak jak ustaliliśmy. Szybka reakcja na zgłoszenia - to ważne, gdy strona to narzędzie pracy.”",
    name: "Grzegorz W.",
    avatar: "/avatars/default.png",
  },
  {
    text: "„Polecam do współpracy firmę Mainly. Byłem w kropce z czasem, moje kłopoty rozwiązał ów człowiek. Mój zarys i pomysł i materiały obrobił łącząc kropki ...dodał elementy AI i wyszedł materiał który wywołał łzy wzruszenia, uśmiech, okrzyki radości. Czas operacyjny to bardzo szybka realizacja. Polecam jeśli brak Ci czasu i chcesz wzbogacić swój materiał o materiały z AI”",
    name: "Marcin C.",
    avatar: "/avatars/default.png",
  },
  {
    text: "„Chciałabym serdecznie podziękować za współpracę. Pan Stanislaw jest niezwykle uprzejmy i pomocny. Efekt pracy przerósł moje najśmielsze oczekiwania. Zdecydowanie polecam współpracę.”",
    name: "Paulina O.",
    avatar: "/avatars/default.png",
  },
];

export const faqItems = [
  {
    question: "Jak długo trwa realizacja projektu?",
    answer:
      "Standardowo 2-6 tygodni w zależności od zakresu. Pakiet Start wdrażam w 1-2 tyg., Rozwój w 3-4 tyg., a Skala od 6 tyg. Harmonogram ustalam przed startem.",
  },
  {
    question: "Czy mogę wprowadzać zmiany w trakcie realizacji?",
    answer:
      "Tak. Każdy etap kończy się review - wtedy zbieramy uwagi i poprawki. Większe zmiany zakresu wyceniamy oddzielnie, drobne korekty są w cenie.",
  },
  {
    question: "Czy zajmujesz się hostingiem i utrzymaniem strony?",
    answer:
      "Tak. Strony w Next.js hostuję na Vercel - jedna z najszybszych platform, z automatycznym deploymentem i SSL w cenie. Oferuję też opiekę techniczną: monitoring, kopie zapasowe i reakcja na zgłoszenia w 48 h.",
  },
  {
    question: "Jak wygląda proces współpracy?",
    answer:
      "Zaczynamy od briefu i ustalenia zakresu, potem projekt UX/UI, implementacja i wdrożenie na serwer. Komunikacja przez Slack lub e-mail, pokazuję progres co tydzień - każdy etap wymaga Twojej akceptacji zanim przejdziemy dalej.",
  },
  {
    question: "Czy pomagasz w optymalizacji SEO?",
    answer:
      "Tak - SEO techniczne (Core Web Vitals, schema, sitemap, meta) wchodzi w skład każdego pakietu. Prowadzę też kampanie Google Ads i optymalizację konwersji.",
  },
  {
    question: "Co jeśli nie jestem zadowolony z efektów?",
    answer:
      "Pracujemy iteracyjnie i każdy etap wymaga twojego OK przed przejściem dalej. Jeśli mimo wszystko coś nie gra - masz 14 dni od wdrożenia na poprawki w cenie.",
  },
];
