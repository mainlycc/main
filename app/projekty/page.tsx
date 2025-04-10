"use client";

import { projects } from "../../components/ProjectsCarousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-12 text-center">Nasze Projekty</h1>
        <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
          Odkryj nasze portfolio zrealizowanych projektów. Każdy z nich to unikalne rozwiązanie 
          dostosowane do potrzeb naszych klientów.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-zinc-950 border border-[#FA6503]/20 rounded-xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-zinc-800 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/projekty/${project.slug}`}
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
  );
} 