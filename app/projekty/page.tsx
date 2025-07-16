"use client";

import { projects } from "../../components/ProjectsCarousel";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { ArrowBigRightIcon } from "../../components/ui/arrow-big-right";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <div className="container mx-auto px-6 py-24 flex-1 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Nasze Projekty</h1>
        <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Odkryj nasze portfolio zrealizowanych projektów. Każdy z nich to unikalne rozwiązanie 
          dostosowane do potrzeb naszych klientów.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-zinc-950 border border-[#FA6503]/20 rounded-xl overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-1">{project.name}</h2>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span key={index} className="bg-zinc-800 text-xs px-2 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/projekty/${project.slug}`}
                  className="inline-flex items-center text-[#FA6503] hover:text-[#FA6503]/80 text-sm"
                >
                  Zobacz szczegóły <ArrowBigRightIcon className="ml-1" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 