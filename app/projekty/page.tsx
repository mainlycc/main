import type { Metadata } from "next";
import DisplayEm from "@/components/DisplayEm";
import { getPublishedProjects } from "@/lib/portfolio";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Portfolio projektów webowych | Mainly Warszawa",
  description:
    "Zobacz 36+ zrealizowanych stron i aplikacji webowych. Każdy projekt to indywidualne podejście, nowoczesny design i mierzalne efekty.",
  alternates: { canonical: "/projekty" },
  openGraph: {
    title: "Portfolio projektów webowych | Mainly",
    description:
      "36+ zrealizowanych projektów - strony firmowe, aplikacje webowe, generatory ofert, kalkulatory.",
    url: "https://mainly.pl/projekty",
    type: "website",
  },
};

function hasRealImage(src: string) {
  return src && !src.includes("placeholder");
}

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <>
      <main className="pt-[120px] md:pt-[140px] pb-24">
        <div className="wrap">
          <div className="sec-label">
            <span className="num">Portfolio</span>
            <span>Wybrane prace</span>
          </div>
          <h1 className="sec-title">
            Projekty, które <DisplayEm>działają</DisplayEm>.
          </h1>
          <p className="sec-lead">
            36+ wdrożonych projektów - systemy CRM, platformy e-learningowe,
            generatory AI, aplikacje B2B. Każdy projekt to działający produkt
            dostępny na żywo.
          </p>

          <div className="showcase showcase--projects">
            {projects.map((project) => {
              const showImage = hasRealImage(project.image);

              return (
                <Link
                  key={project.id}
                  href={`/projekty/${project.slug}`}
                  className="case"
                >
                  <div className={`thumb relative${showImage ? " has-image" : ""}`}>
                    {showImage ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 980px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#1a1816] text-sm text-[var(--fg-mute)]">
                        {project.name}
                      </div>
                    )}
                  </div>
                  <div className="meta">
                    <div>
                      <h4>{project.name}</h4>
                      <div className="tags">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <div className="arr">↗</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
