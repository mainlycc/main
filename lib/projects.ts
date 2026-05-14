export interface Project {
  id: number;
  name: string;
  slug: string;
  image: string;
  fallbackImage?: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  client: string;
  year: number;
  url: string;
}

export const projects: Project[] = [
  {
    id: 12,
    name: "Biblioteka Promptów AI",
    slug: "biblioteka-promptow",
    image: "/bcsc.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Polskojęzyczna platforma z ponad 1000 gotowych promptów dla ChatGPT, Claude, Midjourney i innych narzędzi AI",
    fullDescription: "Biblioteka Promptów to polskojęzyczna platforma internetowa oferująca ponad 1000 gotowych, szablonowych promptów (poleceń) do popularnych narzędzi sztucznej inteligencji. Projekt ma na celu ułatwić pracę z narzędziami AI, dostarczając sprawdzone prompty, które oszczędzają czas i poprawiają jakość wyników. Platforma obsługuje najpopularniejsze narzędzia AI: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Midjourney, DALL·E oraz Stable Diffusion. Prompty są zorganizowane w sekcje: prompty tekstowe (dla chatbotów i asystentów AI) oraz prompty graficzne (dla narzędzi do generowania obrazów), podzielone na 15+ kategorii tematycznych obejmujących marketing, copywriting, programowanie, analizę danych biznesowych, content creation na social media i inne specjalistyczne obszary. Wszystkie prompty są całkowicie darmowe i mogą być używane zarówno do celów osobistych, jak i komercyjnych.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Claude API"],
    features: [
      "Ponad 1000 gotowych, sprawdzonych promptów",
      "Obsługa ChatGPT, Claude, Gemini, Midjourney, DALL·E, Stable Diffusion",
      "15+ kategorii tematycznych (marketing, copywriting, programowanie, analiza danych)",
      "Prompty tekstowe i graficzne w osobnych sekcjach",
      "Zaawansowana wyszukiwarka umożliwiająca szybkie znalezienie promptu",
      "Kopiowanie promptów jednym kliknięciem",
      "Sprawdzone i przetestowane prompty gwarantujące najlepsze wyniki",
      "Intuicyjny interfejs dostępny dla początkujących i zaawansowanych",
      "Całkowicie darmowe - do użytku osobistego i komercyjnego",
      "Responsywny design dostosowany do wszystkich urządzeń"
    ],
    client: "Projekt własny",
    year: 2025,
    url: "https://bibliotekapromptow.pl/"
  },
  {
    id: 9,
    name: "Interaktywny Pad Muzyczny",
    slug: "music-pad",
    image: "/musicpad.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Kreatywne narzędzie do tworzenia muzyki w przeglądarce",
    fullDescription: "Innowacyjna aplikacja webowa umożliwiająca tworzenie muzyki w czasie rzeczywistym. Użytkownicy mogą komponować własne utwory wykorzystując 16 programowalnych padów z różnymi trybami odtwarzania (normalny, pulsujący, ciągły). Aplikacja oferuje bogaty wybór instrumentów i melodii, zaawansowaną wizualizację dźwięku oraz możliwość nagrywania sesji. Intuicyjne sterowanie za pomocą klawiatury oraz interaktywny interfejs sprawiają, że tworzenie muzyki staje się dostępne dla każdego.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API", "Tone.js"],
    features: [
      "16 programowalnych padów muzycznych",
      "Trzy tryby odtwarzania dźwięków",
      "Biblioteka instrumentów i melodii",
      "Wizualizacja fali dźwiękowej",
      "System nagrywania i eksportu do MP3",
      "Sterowanie za pomocą klawiatury",
      "Interaktywny interfejs użytkownika",
      "Responsywny design"
    ],
    client: "Projekt własny",
    year: 2024,
    url: "https://musicpad-mainly.vercel.app/"
  },
  {
    id: 8,
    name: "Lease1 - Partner Leasingowy",
    slug: "lease1-leasing",
    image: "/lease1.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Platforma dla globalnego partnera leasingowego",
    fullDescription: "Nowoczesna platforma internetowa dla firmy Lease1, specjalizującej się w kompleksowych rozwiązaniach leasingowych na skalę międzynarodową. Strona oferuje przejrzystą prezentację różnych form leasingu (maszyn, samochodów, nieruchomości) wraz z intuicyjnym procesem składania wniosków. Zaimplementowano wielojęzyczność (PL, EN, DE) oraz zaawansowany system kalkulatorów leasingowych. Projekt wyróżnia się profesjonalnym designem i płynną ścieżką użytkownika od pierwszego kontaktu do finalizacji umowy.",
    technologies: ["Next.js", "TypeScript", "Shadcn/ui", "Tailwind CSS", "i18n"],
    features: [
      "System wielojęzyczności (PL, EN, DE)",
      "Kalkulatory leasingowe",
      "Interaktywne formularze wniosków",
      "Panel klienta",
      "Prezentacja ofert leasingowych",
      "Blog z poradami finansowymi",
      "Moduł FAQ z wyszukiwarką",
      "Responsywny design dostosowany do wszystkich urządzeń"
    ],
    client: "Lease1",
    year: 2024,
    url: "https://lease1.pl"
  },
  {
    id: 7,
    name: "Business Care SC",
    slug: "bcsc-ksiegowosc",
    image: "/bcsc.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Nowoczesna strona dla biura księgowego specjalizującego się w startupach",
    fullDescription: "Profesjonalna strona internetowa dla biura księgowego Business Care SC, zaprojektowana z myślą o startupach i młodych firmach. Strona charakteryzuje się nowoczesnym designem, przejrzystą prezentacją usług oraz intuicyjną nawigacją. Zaimplementowano system formularzy kontaktowych, automatyczne kalkulatory oraz sekcję z opiniami klientów. Projekt wyróżnia się elegancką typografią, spójną kolorystyką oraz płynną responsywnością na wszystkich urządzeniach.",
    technologies: ["Next.js", "TypeScript", "Shadcn/ui", "Tailwind CSS"],
    features: [
      "Nowoczesny, responsywny design",
      "Interaktywne formularze kontaktowe",
      "Sekcja opinii klientów",
      "Automatyczne kalkulatory wycen",
      "Blog z poradami księgowymi",
      "Optymalizacja SEO",
      "System CMS do zarządzania treścią"
    ],
    client: "Business Care SC",
    year: 2024,
    url: "https://bcsc.pl"
  },
  {
    id: 6,
    name: "Generator Ofert Rolety3miasto",
    slug: "generator-ofert-rolety",
    image: "/rolety-generator.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "System automatyzacji wycen i generowania ofert dla firmy roletowej",
    fullDescription: "Zaawansowane narzędzie do tworzenia spersonalizowanych ofert dla klientów firmy Rolety3miasto. System umożliwia błyskawiczne kalkulacje cen na podstawie wybranych parametrów, automatycznie generuje profesjonalne dokumenty PDF z ofertą, uwzględniając wszystkie specyfikacje techniczne i preferencje klienta. Dzięki temu rozwiązaniu firma może szybko przedstawić dokładną i profesjonalną wycenę dostosowaną do indywidualnych potrzeb każdego klienta.",
    technologies: ["Next.js", "TypeScript", "Shadcn/ui", "React PDF", "Tailwind CSS"],
    features: [
      "Automatyczne kalkulacje cenowe",
      "Generowanie spersonalizowanych ofert PDF",
      "Zarządzanie bazą produktów i materiałów",
      "Konfiguracja różnych wariantów produktów",
      "System rabatów i promocji",
      "Eksport danych do różnych formatów"
    ],
    client: "Rolety3miasto",
    year: 2024,
    url: "https://oferty.rolety3miasto.pl"
  },
  {
    id: 5,
    name: "Kreator Faktur",
    slug: "kreator-faktur",
    image: "/faktury.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Intuicyjne narzędzie do generowania faktur VAT",
    fullDescription: "Nowoczesna aplikacja webowa do tworzenia i zarządzania fakturami. Umożliwia szybkie generowanie profesjonalnych faktur VAT w formacie PDF z możliwością personalizacji. System oferuje automatyczne obliczenia, zarządzanie kontrahentami oraz eksport dokumentów.",
    technologies: ["Next.js", "TypeScript", "React PDF", "Tailwind CSS"],
    features: [
      "Generowanie faktur VAT w PDF",
      "Automatyczne obliczenia podatku",
      "Zarządzanie bazą kontrahentów",
      "Personalizacja szablonów faktur",
      "Eksport do różnych formatów",
      "Intuicyjny interfejs użytkownika"
    ],
    client: "Projekt własny",
    year: 2024,
    url: "https://faktury.mainly.pl"
  },
  {
    id: 4,
    name: "Audiogen",
    slug: "audiogen",
    image: "/audiogen.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "System automatyzacji zbierania leadów dla startupu",
    fullDescription: "Strona typu landing page dla innowacyjnego startupu Audiogen, specjalizującego się w tworzeniu audiobooków. Projekt obejmował stworzenie systemu automatycznego zbierania i zarządzania bazą potencjalnych klientów poprzez formularz zapisu na whitelistę. Zaimplementowano zaawansowaną automatyzację procesu wraz z systemem powiadomień.",
    technologies: ["Framer", "React", "TypeScript", "Automation"],
    features: [
      "System zapisu na whitelistę",
      "Automatyzacja zbierania leadów",
      "Integracja z systemem mailingowym",
      "Responsywny design",
      "Animacje i efekty interaktywne"
    ],
    client: "Audiogen",
    year: 2024,
    url: "https://audiogen.framer.website"
  },
  {
    id: 1,
    name: "Kalkulator GAP",
    slug: "kalkulator-gap",
    image: "/kalkulator.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Kalkulator ubezpieczeniowy z intuicyjnym interfejsem",
    fullDescription: "Kompleksowe narzędzie do obliczania ubezpieczenia GAP z intuicyjnym interfejsem użytkownika. Projekt obejmował pełen proces UX/UI oraz front-end development.",
    technologies: ["Next.js", "Shadcn", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Intuicyjny interfejs użytkownika",
      "Responsywny design",
      "Zaawansowane algorytmy kalkulacyjne",
      "Integracja z API ubezpieczeniowym"
    ],
    client: "Firma Ubezpieczeniowa Business Care",
    year: 2025,
    url: "https://gapauto.pl"
  },
  {
    id: 2,
    name: "Cytomania",
    slug: "cytomania",
    image: "/cytomania.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Portal z cytatami filmowymi",
    fullDescription: "Społecznościowy portal gromadzący cytaty z filmów i seriali. Użytkownicy mogą dodawać, oceniać i komentować cytaty oraz tworzyć własne kolekcje.",
    technologies: ["Next.js", "Shadcn", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "System użytkowników i kont",
      "Wyszukiwarka cytatów",
      "System oceniania i komentarzy",
      "Personalizowane kolekcje cytatów",
      "Moduł administratora"
    ],
    client: "Grupa facebookowa Cytaty filmowe",
    year: 2024,
    url: "https://cytomania.pl"
  },
  {
    id: 3,
    name: "Kulio Studio",
    slug: "kulio-studio",
    image: "/kulio.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Agencja marketingowa",
    fullDescription: "Strona internetowa dla agencji marketingowej Kulio Studio. Projekt obejmował kompleksowy design, development oraz system CMS do zarządzania portfolio i blogiem.",
    technologies: ["Framer", "Spline"],
    features: [
      "Portfolio projektów",
      "System blogowy",
      "Formularz kontaktowy",
      "Integracja z mediami społecznościowymi",
      "Panel administracyjny"
    ],
    client: "Kulio Studio",
    year: 2024,
    url: "https://kuliostudio.pl"
  },
  {
    id: 10,
    name: "Coin Milei",
    slug: "milei-coin",
    image: "/milei.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Dynamiczna strona one-pager dla kryptowaluty $MILEI inspirowanej Javierem Milei.",
    fullDescription: "Strona internetowa dla tokena $MILEI – kryptowaluty opartej na ideologii libertariańskiej, łączącej memecoin z komentarzem polityczno-ekonomicznym. Projekt obejmował pełny design i wdrożenie we Framerze, integrację wykresu TradingView, dynamicznych tweetów z Twittera/X, sekcji partnerów oraz liczników statystyk. Strona została zaprojektowana tak, aby przyciągać potencjalnych klientów i zachęcać ich do kontaktu.",
    technologies: ["Framer", "TradingView", "Twitter/X embed", "SVG", "Responsywny design"],
    features: [
      "Sekcja Hero z AI-generowanym portretem Javiera Milei i CTA",
      "Osadzony wykres TradingView kursu $MILEI",
      "Interaktywne karty funkcjonalności tokena (tokenomics, decentralizacja, memiczność)",
      "Instrukcja zakupu (iOS/Android)",
      "Sekcja partnerów (Telegram, CoinMarketCap, Uniswap)",
      "Dynamiczne statystyki: licznik czasu, liczba holderów, tokenów, liquidity",
      "Wbudowane tweety z Twittera/X",
      "Opis ideologii tokena i motywów politycznych",
      "Pełna responsywność i optymalizacja UX",
      "Szybkość ładowania (SVG, brak backendu)",
      "Animacje i mikrointerakcje w stylu Framera"
    ],
    client: "Projekt komercyjny (Web3/Crypto)",
    year: 2024,
    url: "https://milei.framer.ai/"
  },
  {
    id: 11,
    name: "Prawo Jazdy w Czechach",
    slug: "prawkoczechy",
    image: "/prawkoczechy.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Strona dla firmy świadczącej usługi zdawania egzaminów na prawo jazdy w Czechach, zintegrowana z Google Ads i zoptymalizowana pod kątem konwersji.",
    fullDescription: "Strona internetowa dla firmy oferującej kompleksowe usługi związane z egzaminami na prawo jazdy w Czechach. W ramach współpracy zapewniliśmy nie tylko nowoczesny design i responsywność, ale również wsparcie w zakresie Google Ads oraz optymalizację pod kątem maksymalizacji konwersji. Strona została zaprojektowana tak, aby przyciągać potencjalnych klientów i zachęcać ich do kontaktu.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Ads", "SEO"],
    features: [
      "Responsywny design",
      "Integracja z Google Ads",
      "Optymalizacja pod kątem konwersji",
      "Szybki czas ładowania",
      "Intuicyjna nawigacja",
      "Formularz kontaktowy",
      "Sekcja FAQ",
      "Testimonials"
    ],
    client: "Prawo Jazdy w Czechach",
    year: 2024,
    url: "https://www.prawkoczechy.pl/"
  }
];
