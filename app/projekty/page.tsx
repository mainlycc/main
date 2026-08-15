import type { Metadata } from "next";
import DisplayEm from "@/components/DisplayEm";
import { getPublishedProjects } from "@/lib/portfolio";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "../../lib/schema";
import { absoluteUrl, SITE_URL } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Portfolio: 36 wdrożonych stron i aplikacji | Mainly",
  description:
    "36 zrealizowanych projektów w 9 branżach — systemy CRM, platformy e-learningowe, konfiguratory produktów i aplikacje B2B. Każdy działa na żywo.",
  alternates: { canonical: "/projekty" },
  openGraph: {
    title: "Portfolio projektów webowych | Mainly",
    description:
      "36 zrealizowanych projektów - strony firmowe, aplikacje webowe, generatory ofert, kalkulatory.",
    url: absoluteUrl("/projekty"),
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
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Portfolio", url: absoluteUrl("/projekty") },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          "Zrealizowane projekty Mainly",
          projects.map((project) => ({
            name: project.name,
            url: absoluteUrl(`/projekty/${project.slug}`),
          }))
        )}
      />

      <main className="pt-[120px] md:pt-[140px] pb-24">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <span aria-current="page">Portfolio</span>
          </nav>

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
            dostępny na żywo. Szukasz czegoś podobnego dla swojej firmy?{" "}
            <Link href="/uslugi" className="inline-link">
              Zobacz zakres usług
            </Link>{" "}
            albo{" "}
            <Link href="/kontakt" className="inline-link">
              napisz do mnie
            </Link>
            .
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
                        alt={`${project.name} — ${project.technologies
                          .slice(0, 2)
                          .join(", ")} — projekt zrealizowany przez Mainly`}
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
                      <h2>{project.name}</h2>
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
