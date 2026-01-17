"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interfejs dla projektu
interface Project {
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

// Rozszerzona struktura danych projektów
export const projects: Project[] = [
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
        image: "/rolety-generator.png",    fallbackImage: "/placeholder.svg?height=600&width=400",
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
    fullDescription: "Strona internetowa dla tokena $MILEI – kryptowaluty opartej na ideologii libertariańskiej, łączącej memecoin z komentarzem polityczno-ekonomicznym. Projekt obejmował pełny design i wdrożenie we Framerze, integrację wykresu TradingView, dynamicznych tweetów z Twittera/X, sekcji partnerów oraz liczników statystyk. Strona zoptymalizowana pod urządzenia mobilne i desktopowe, z nowoczesną grafiką, AI-generowanym portretem oraz neonowymi akcentami. Wyróżnia się pełną responsywnością, szybkością ładowania i animacjami w stylu Framera.",
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

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-8 bg-gray-500/30 backdrop-blur-lg rounded-3xl border border-white/10 border-[0.5px]">
      <div className="container mx-auto px-8">
        <div className="relative max-w-6xl mx-auto">
          {/* Karuzela */}
          <div className="relative h-[600px] overflow-hidden rounded-xl backdrop-blur-sm bg-black/5">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                  index === currentIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden backdrop-blur-sm">
                  <div className="relative w-full h-full p-8 rounded-xl overflow-hidden bg-gray-500/20">
                    <Image
                      src={project.image}
                      alt={`${project.name} - projekt strony internetowej stworzonej przez agencję Mainly. ${project.description}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                      priority={index === currentIndex}
                      quality={100}
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (project.fallbackImage) {
                          target.src = project.fallbackImage;
                        }
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-gray-200 text-lg">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Przyciski nawigacji */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Poprzedni projekt"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Następny projekt"
          >
            <ChevronRight size={24} />
          </button>

          {/* Wskaźniki */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-7" : "bg-gray-900"
                }`}
                aria-label={`Przejdź do projektu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 