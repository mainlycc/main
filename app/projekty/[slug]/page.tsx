"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { projects } from "../../../components/ProjectsCarousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle } from "lucide-react";

// Definiujemy interfejs dla projektu
interface Project {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  client: string;
  year: number;
  url?: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const foundProject = projects.find(p => p.slug === params.slug);
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-6">Projekt nie znaleziony</h1>
          <p className="text-xl text-gray-400 mb-8">Niestety, nie mogliśmy znaleźć projektu, którego szukasz.</p>
          <Link 
            href="/projekty"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Wróć do listy projektów
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24 max-w-5xl">
        <Link 
          href="/projekty"
          className="inline-flex items-center text-gray-400 hover:text-white mb-12"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Wróć do wszystkich projektów
        </Link>

        {/* Nagłówek projektu */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl text-gray-400">{project.description}</p>
        </div>

        {/* Główny obraz projektu */}
        <div className="relative h-[600px] rounded-xl overflow-hidden mb-16">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Informacje o projekcie */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">O projekcie</h2>
            <p className="text-gray-300 text-lg mb-8">{project.fullDescription}</p>

            <h3 className="text-2xl font-bold mb-4">Główne funkcjonalności</h3>
            <ul className="space-y-3 mb-8">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-950 border border-[#FA6503]/20 p-8 rounded-xl h-fit">
            <h3 className="text-xl font-bold mb-6 border-b border-zinc-800 pb-4">Szczegóły projektu</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-gray-400">Klient</h4>
                <p className="text-lg">{project.client}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Rok realizacji</h4>
                <p className="text-lg">{project.year}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Technologie</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span key={index} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.url && (
                <div>
                  <h4 className="text-sm text-gray-400">Link do projektu</h4>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FA6503] hover:text-[#FA6503]/80 inline-flex items-center mt-1"
                  >
                    Odwiedź stronę <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sekcja innych projektów */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Inne projekty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <div key={p.id} className="bg-zinc-950 border border-[#FA6503]/20 rounded-xl overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                    <p className="text-gray-400 mb-4">{p.description}</p>
                    <Link 
                      href={`/projekty/${p.slug}`}
                      className="inline-flex items-center text-[#FA6503] hover:text-[#FA6503]/80"
                    >
                      Zobacz szczegóły <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 