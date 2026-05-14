"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../lib/projects";

export type { Project } from "../lib/projects";
export { projects };

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
      <div className="container mx-auto px-4 sm:px-8">
        <div className="relative max-w-[1920px] mx-auto">
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
                  <div className="relative w-full h-full p-4 rounded-xl overflow-hidden bg-gray-500/20">
                    <Image
                      src={project.image}
                      alt={`${project.name} - projekt strony internetowej stworzonej przez agencję Mainly. ${project.description}`}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                      priority={index === currentIndex}
                      quality={100}
                      sizes="(max-width: 1920px) 100vw, 1920px"
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
