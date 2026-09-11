import DisplayEm from "@/components/DisplayEm";
import Link from "next/link";
import Image from "next/image";
import { getHomepagePortfolioCases } from "@/lib/portfolio";
import SectionLabel from "./SectionLabel";

function isPlaceholderImage(src: string) {
  return src.includes("placeholder");
}

function CasePreview({ variant }: { variant: "featured" | "airset" | "akademia" }) {
  if (variant === "featured") {
    return (
      <div className="preview">
        <div className="h" />
        <div className="sh" />
        <div className="sh s" />
        <div className="row">
          <div className="card" />
          <div className="card" />
          <div className="card" />
        </div>
      </div>
    );
  }

  if (variant === "airset") {
    return (
      <div className="preview">
        <div className="h" style={{ width: "40%" }} />
        <div className="sh" />
        <div className="row">
          <div className="card" style={{ background: "#222" }} />
          <div
            className="card"
            style={{ background: "linear-gradient(135deg,#ff8a6e,#c41e1e)" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="preview">
      <div className="h" style={{ width: "70%" }} />
      <div className="sh" />
      <div className="sh s" />
      <div className="row">
        <div className="card" style={{ background: "#e6e1d8" }} />
        <div className="card" style={{ background: "#222" }} />
        <div className="card" style={{ background: "#e6e1d8" }} />
      </div>
    </div>
  );
}

export default async function PortfolioSection() {
  const portfolioCases = await getHomepagePortfolioCases();

  return (
    <section id="prace">
      <div className="wrap">
        <SectionLabel num="03" label="Wybrane prace" />
        <h2 className="sec-title">
          Nie mockupy. <DisplayEm>Działające produkty</DisplayEm>.
        </h2>
        <p className="sec-lead">
          36+ projektów - systemy CRM, platformy e-learningowe, generatory AI,
          aplikacje B2B. Każdy projekt to wdrożony, działający produkt.
        </p>

        <div className="showcase">
          {portfolioCases.map((project) => {
            const hasScreenshot = project.image && !isPlaceholderImage(project.image);

            return (
              <Link
                key={project.slug}
                href={`/projekty/${project.slug}`}
                className={`case${project.featured ? " featured" : ""}`}
              >
                <div className={`thumb relative${hasScreenshot ? " has-image" : ""}`}>
                  {hasScreenshot ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 880px) 100vw, 50vw"
                      priority={project.featured}
                    />
                  ) : (
                    <div className="device">
                      <div className="topbar">
                        <i />
                        <i />
                        <i />
                      </div>
                      <CasePreview variant={project.preview} />
                    </div>
                  )}
                </div>
                <div className="meta">
                  <div>
                    <h3>{project.title}</h3>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="arr">↗</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
