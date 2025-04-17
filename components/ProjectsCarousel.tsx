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
    id: 1,
    name: "Kalkulator GAP",
    slug: "kalkulator-gap",
    image: "/kalkulator.png",
    fallbackImage: "/placeholder.svg?height=600&width=400",
    description: "Kalkulator ubezpieczeniowy z intuicyjnym interfejsem",
    fullDescription: "Kompleksowe narzędzie do obliczania ubezpieczenia GAP z intuicyjnym interfejsem użytkownika. Projekt obejmował pełen proces UX/UI oraz front-end development.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Intuicyjny interfejs użytkownika",
      "Responsywny design",
      "Zaawansowane algorytmy kalkulacyjne",
      "Integracja z API ubezpieczeniowym"
    ],
    client: "Firma Ubezpieczeniowa Bussiness Care",
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
    technologies: ["Next.js", "MongoDB", "Express", "Node.js"],
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
    technologies: ["WordPress", "PHP", "SCSS", "JavaScript"],
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
    <section className="w-full py-12 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Karuzela */}
          <div className="relative h-[600px] overflow-hidden rounded-xl">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                  index === currentIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                  placeholder="blur"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (project.fallbackImage) {
                      target.src = project.fallbackImage;
                    }
                  }}
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAQUBAQAAAAAAAAAAAAAAAQIDBAUSEyFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwb/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADBBIh/9oADAMBAAIRAxEAPwCvxXd2uiwU01NQ06c1Fxk9RTSafD55JSrIaAYF3naZ+IfRERVd3H//2Q=="
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <p className="text-gray-200">{project.description}</p>
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