import { projectImage } from "./project-images";

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
  headline?: string;
  tags?: string[];
  scope?: string;
    heroCaption?: string;
    heroDeviceBadge?: string;
    caseStudyHtml?: string;
}

export const projects: Project[] = [
  {
    id: 19,
    name: "Football Academy System",
    slug: "football-academy",
    image: projectImage("football-academy"),
    fallbackImage: projectImage("football-academy", "proces-galeria"),
    description:
      "System zarządzania akademią piłkarską z przeglądarką modeli 3D, rolami użytkowników i eksportem zasobów - GLB, PNG, SVG.",
    fullDescription:
      "Football Academy System to wewnętrzna aplikacja webowa dla akademii piłkarskiej Football Academy. Centrum produktu stanowi interaktywna przeglądarka modeli 3D - galeria osiągnięć i materiałów brandingowych (np. otwarcie oddziału Football Baby) z kontrolą obrotu i oświetlenia oraz eksportem do GLB, PNG i SVG.\n\nSystem obsługuje trzy role: Zawodnik, Trener i Manager - każda z własnym zakresem uprawnień. Interfejs obejmuje przegląd zasobów, listę oraz panel zarządzania z możliwością usuwania pozycji. Dark UI w stylu dashboardu gamingowego.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "Tailwind CSS",
    ],
    features: [
      "Interaktywna przeglądarka modeli 3D w przeglądarce",
      "Kontrola obrotu i oświetlenia sceny",
      "Eksport zasobów: GLB, PNG, SVG",
      "Role: Zawodnik, Trener, Manager",
      "Przegląd, lista i panel zarządzania zasobami",
      "Galeria osiągnięć i materiałów brandingowych akademii",
    ],
    client: "Football Academy",
    year: 2026,
    url: "",
  },
  {
    id: 18,
    name: "Qualibase",
    slug: "qualibase",
    image: projectImage("qualibase"),
    fallbackImage: projectImage("qualibase", "proces-perspektywy"),
    description:
      "Platforma rekrutacyjna IT łącząca zweryfikowanych specjalistów z firmami - dwie perspektywy, jeden cel: szybsze zatrudnienie i lepsza kariera.",
    fullDescription:
      "Qualibase to platforma rekrutacyjna dla branży IT, która łączy zweryfikowanych kandydatów bezpośrednio z firmami poszukującymi specjalistów. Platforma działa dwutorowo - kandydaci budują anonimowy profil z realnym doświadczeniem, a rekruterzy przeglądają bazę dostępnych specjalistów bez przypadkowych zgłoszeń.\n\nSystem obsługuje React, Python, AWS, TypeScript i PostgreSQL jako kluczowe technologie, wspierając rekrutację w środowisku IT.",
    technologies: ["React", "Python", "AWS", "TypeScript", "PostgreSQL"],
    features: [
      "Baza zweryfikowanych specjalistów IT z oznaczeniem dostępności",
      "Anonimowe profile kandydatów - firma widzi kompetencje, nie dane osobowe",
      "Panel rekrutera z dostępem do bazy i filtrowaniem po technologiach",
      "Panel kandydata z zarządzaniem profilem i ofertami",
      "Dwuperspektywiczny system: kandydat i rekruter",
      "Wsparcie dla pracy Remote i hybrydowej",
    ],
    client: "Qualibase",
    year: 2025,
    url: "https://www.qualibase.pl/",
  },
  {
    id: 17,
    name: "Wizualizator Grzejników JK Term",
    slug: "jkterm-wizualizator",
    image: projectImage("jkterm-wizualizator"),
    fallbackImage: projectImage("jkterm-wizualizator", "proces-detal"),
    description:
      "Generator AI wizualizacji grzejników - zamiast AutoCAD: wgraj zdjęcie produktu, opisz scenę, pobierz zdjęcie do katalogu i Allegro.",
    fullDescription:
      "JK Term to producent grzejników łazienkowych, który do tej pory generował wizualizacje produktów w AutoCAD - proces czasochłonny, wymagający specjalisty i trudny do skalowania przy dużej liczbie wariantów kolorystycznych i rozmiarów.\n\nZbudowałem dedykowany generator AI, który pozwala wgrać zdjęcie produktu, opisać scenę i w kilka sekund otrzymać profesjonalne wizualizacje produktu w realnym otoczeniu łazienki. Generator tworzy też zdjęcia detali do listingów Allegro - bez sesji fotograficznej, bez AutoCAD, bez grafika.",
    technologies: ["Next.js", "TypeScript", "AI Image Generation", "Tailwind CSS"],
    features: [
      "Tryb Scena - produkt w realnym wnętrzu łazienki (3 warianty jednocześnie)",
      "Tryb Detal - profesjonalne zdjęcia detali do Allegro",
      "Konfiguracja kąta kamery, koloru produktu i rozmiaru na scenie",
      "Generowanie wielu wariantów jednym kliknięciem",
      "Pobieranie gotowych zdjęć do katalogu i listingów",
      "Brak potrzeby AutoCAD ani sesji fotograficznej",
    ],
    client: "JK Term",
    year: 2025,
    url: "",
  },
  {
    id: 16,
    name: "Magia Podróżowania",
    slug: "magia-podrozowania",
    image: projectImage("magia-podrozowania"),
    fallbackImage: projectImage("magia-podrozowania", "proces-oferta"),
    description:
      "Kompleksowy system CRM do zarządzania wycieczkami - rezerwacje, płatności PayNow, umowy PDF i integracje z SaldeoSMART oraz HDI.",
    fullDescription:
      "Magia Podróżowania to kompleksowy system CRM do zarządzania wycieczkami dla organizatora turystyki GRUPA DE-PL. Aplikacja obejmuje cały cykl obsługi wycieczki - od tworzenia oferty, przez rezerwacje online i płatności, aż po generowanie umów, faktur i ubezpieczeń.\n\nSystem obejmuje panel organizatora, publiczne strony wycieczek z rezerwacją online, płatności PayNow z podziałem na raty, edytor umów PDF, integrację SaldeoSMART i HDI, komunikację e-mail SMTP oraz panel koordynatora wycieczek.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "PayNow", "Tailwind CSS"],
    features: [
      "Panel organizatora wycieczek",
      "Rezerwacje online z płatnościami PayNow",
      "Generowanie umów i faktur PDF",
      "Integracja SaldeoSMART i HDI",
      "Moduł koordynatora wycieczek",
      "Komunikacja e-mail z uczestnikami",
    ],
    client: "GRUPA DE-PL / Magia Podróżowania",
    year: 2025,
    url: "https://mainly.pl/projekty/magia-podrozowania",
  },
  {
    id: 15,
    name: "Akademia Wiedzy",
    slug: "akademia-wiedzy",
    image: projectImage("akademia-wiedzy"),
    description:
      "System e-korepetycji dla 40+ korepetytorów i 865+ uczniów - automatyczne lekcje, rozliczenia i płatności PayU.",
    fullDescription:
      "Akademia Wiedzy to firma e-korepetycyjna prowadząca zajęcia online dla uczniów w całej Polsce - ponad 40 korepetytorów i 865+ uczniów. Zbudowałem wewnętrzny system webowy, który zastąpił ręczne zarządzanie grafikami, uczniami i rozliczeniami.\n\nAplikacja automatyzuje planowanie lekcji, oferuje panel korepetytora i administratora, publiczny kalendarz rezerwacji dla nowych uczniów, moduł rozliczeń z linkami PayU oraz architekturę Row Level Security w Supabase.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PayU", "Tailwind CSS"],
    features: [
      "Automatyczne generowanie lekcji",
      "Panel korepetytora i administratora",
      "Publiczny kalendarz rezerwacji",
      "Rozliczenia i płatności PayU",
      "Row Level Security",
      "865+ uczniów, 40+ korepetytorów",
    ],
    client: "Akademia Wiedzy - Kamil Miącz",
    year: 2026,
    url: "https://akademia-kamilmiacz.pl/",
  },
  {
    id: 14,
    name: "Platforma Szkoleniowa AIRSET",
    slug: "airset-platforma",
    image: projectImage("airset-platforma"),
    description:
      "Dedykowany system e-learningowy dla linii lotniczych - szkolenia, testy, raporty i logi audytu z Supabase RLS.",
    fullDescription:
      "Platforma Szkoleniowa AIRSET to dedykowany system e-learningowy dla linii lotniczych AIRSET. Obejmuje publikowanie szkoleń z materiałami PDF, PPTX i PNG, kreator testów z sześcioma typami pytań, dashboard postępów, zarządzanie użytkownikami z rolami, raporty miesięczne (PDF, CSV, XLSX) oraz kompleksowe logi audytowe.\n\nBezpieczeństwo oparte jest na Row Level Security - każde zapytanie respektuje uprawnienia użytkownika.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Kreator testów (6 typów pytań)",
      "Dashboard postępów szkoleń",
      "Zarządzanie użytkownikami i rolami",
      "Raporty PDF, CSV, XLSX",
      "Logi audytowe",
      "Row Level Security",
    ],
    client: "AIRSET",
    year: 2025,
    url: "https://airset.pl/",
  },
  {
    id: 13,
    name: "Elomoto.eco",
    slug: "elomoto-eco",
    image: projectImage("elomoto-eco"),
    fallbackImage: projectImage("elomoto-eco", "proces-widget"),
    description:
      "SPA dla operatora stacji ładowania EV - 15+ podstron, interaktywna mapa i widget ładowania 0-77 kWh.",
    fullDescription:
      "Responsywna aplikacja SPA dla polskiego operatora infrastruktury ładowania pojazdów elektrycznych Elomoto (ekosystem Energomix). Projekt obejmuje ponad 15 podstron - od landing page'a, przez podstrony ofertowe i mapę stacji, po blog, FAQ i formularz kontaktowy.\n\nWyróżniający element to interaktywny widget ładowania reagujący na scroll (0-77 kWh), ciemny motyw z glassmorphism oraz routing SPA bez przeładowań.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    features: [
      "15+ podstron ofertowych",
      "Interaktywna mapa stacji EV",
      "Widget ładowania 0-77 kWh",
      "Routing SPA bez przeładowań",
      "Ciemny motyw z glassmorphism",
      "Blog, FAQ, formularz kontaktowy",
    ],
    client: "Elomoto Sp. z o.o. (Energomix)",
    year: 2025,
    url: "https://elomoto.eco/",
  },
  {
    id: 12,
    name: "Biblioteka Promptów AI",
    slug: "biblioteka-promptow",
    image: projectImage("biblioteka-promptow"),
    fallbackImage: projectImage("biblioteka-promptow", "proces-kategorie"),
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
    image: projectImage("music-pad"),
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
    image: projectImage("lease1-leasing"),
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
    image: projectImage("bcsc-ksiegowosc"),
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
    image: projectImage("generator-ofert-rolety"),
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
    image: projectImage("kreator-faktur"),
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
    image: projectImage("audiogen"),
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
    image: projectImage("kalkulator-gap"),
    description: "Kalkulator ubezpieczeniowy z intuicyjnym interfejsem",
    fullDescription: "Kompleksowe narzędzie do obliczania ubezpieczenia GAP z intuicyjnym interfejsem użytkownika. Projekt obejmował pełen proces UX/UI oraz front-end development. Kalkulator umożliwia precyzyjne wyliczenia kosztów ubezpieczenia GAP z uwzględnieniem wszystkich niezbędnych parametrów.",
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
    image: projectImage("cytomania"),
    description: "Portal z cytatami filmowymi",
    fullDescription: "Społecznościowy portal gromadzący cytaty z filmów i seriali. Użytkownicy mogą dodawać, oceniać i komentować cytaty oraz tworzyć własne kolekcje. Portal oferuje zaawansowaną wyszukiwarkę, system oceniania oraz moduł administratora do zarządzania treścią.",
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
    image: projectImage("kulio-studio"),
    description: "Agencja marketingowa",
    fullDescription: "Strona internetowa dla agencji marketingowej Kulio Studio. Projekt obejmował kompleksowy design, development oraz system CMS do zarządzania portfolio i blogiem. Strona prezentuje portfolio projektów agencji, zawiera sekcję blogową oraz formularz kontaktowy.",
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
    image: projectImage("milei-coin"),
    description: "Dynamiczna strona one-pager dla kryptowaluty $MILEI inspirowanej Javierem Milei.",
    fullDescription: "Dynamiczna strona one-pager dla kryptowaluty $MILEI inspirowanej Javierem Milei. Strona prezentuje token oparty na ideologii libertariańskiej, łączący memecoin z komentarzem polityczno-ekonomicznym. Projekt obejmował pełny design i wdrożenie we Framerze, integrację wykresu TradingView, dynamicznych tweetów z Twittera/X, sekcji partnerów oraz liczników statystyk.",
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
    image: projectImage("prawkoczechy"),
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
