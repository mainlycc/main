import Image from "next/image";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import type { LandingPageData } from "@/lib/landing";
import { getPublishedProjects } from "@/lib/portfolio";

function formatPrice(value: number) {
  return new Intl.NumberFormat("pl-PL").format(value);
}

export default async function LandingPageView({
  data,
  breadcrumb,
}: {
  data: LandingPageData;
  breadcrumb: { label: string; href: string };
}) {
  const allProjects = await getPublishedProjects();
  const proof = data.relatedProjects
    .map((slug) => allProjects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <>
      <main id="main">
        <section className="wrap page-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            <span className="sep">/</span>
            <span aria-current="page">{data.navLabel}</span>
          </nav>

          <div className="sec-label">
            <span className="num">{data.eyebrow}</span>
            <span>{data.navLabel}</span>
          </div>

          <h1 className="sec-title">{data.h1}</h1>

          {/* Definicja 40–60 słów — fragment wyciągany przez wyszukiwarki i modele AI */}
          <p className="sec-lead" style={{ marginBottom: 32 }}>
            {data.intro}
          </p>

          {data.priceFrom && (
            <p className="prose-block">
              <strong>Od {formatPrice(data.priceFrom)} zł netto.</strong>{" "}
              {data.priceNote} Pełne widełki znajdziesz na stronie{" "}
              <Link href="/cennik" className="inline-link">
                cennika
              </Link>
              .
            </p>
          )}

          <div className="hero-actions" style={{ marginBottom: 24 }}>
            <Link href="/kontakt" className="btn-primary">
              Umów rozmowę
            </Link>
            <Link href="/projekty" className="btn-ghost">
              Zobacz realizacje
            </Link>
          </div>
        </section>

        {data.sections.map((section) => (
          <section key={section.heading} className="wrap page-section">
            <h2 className="sec-title" style={{ fontSize: 30 }}>
              {section.heading}
            </h2>
            <p className="prose-block">{section.body}</p>
            {section.bullets && (
              <ul className="checklist">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {proof.length > 0 && (
          <section className="wrap page-section">
            <h2 className="sec-title" style={{ fontSize: 30 }}>
              Zrealizowane projekty z tego obszaru
            </h2>
            <p className="prose-block">
              Każdy z tych projektów działa na żywo. Kliknij, żeby zobaczyć
              zakres prac i użyte technologie.
            </p>
            <div className="showcase showcase--projects">
              {proof.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projekty/${project.slug}`}
                  className="case"
                >
                  <div className="thumb relative has-image">
                    <Image
                      src={project.image}
                      alt={`${project.name} — projekt zrealizowany przez Mainly`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 980px) 50vw, 33vw"
                    />
                  </div>
                  <div className="meta">
                    <div>
                      <h3>{project.name}</h3>
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
              ))}
            </div>
          </section>
        )}

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Najczęstsze pytania
          </h2>
          <div className="faq-list" style={{ maxWidth: 860, marginBottom: 64 }}>
            {data.faq.map((item) => (
              <div key={item.question} className="faq-item open">
                <h3 className="faq-q" style={{ cursor: "default" }}>
                  <span>{item.question}</span>
                </h3>
                <div className="faq-a">{item.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {data.relatedLinks.length > 0 && (
          <section className="wrap page-section">
            <h2 className="sec-title" style={{ fontSize: 30 }}>
              Zobacz również
            </h2>
            <div className="link-cards">
              {data.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="link-card">
                  <h3>{link.label}</h3>
                  <p>{link.description}</p>
                  <span className="arr">Przejdź ↗</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="wrap page-section" style={{ paddingBottom: 96 }}>
          <div className="cta-banner">
            <div>
              <div className="cta-label">
                <span className="pulse" />
                <span>Bezpłatna konsultacja · Odpowiadam w 24 h</span>
              </div>
              <h2>
                Opisz problem, a powiem wprost{" "}
                <DisplayEm>ile to kosztuje</DisplayEm>.
              </h2>
              <p>
                30 minut rozmowy online. Bez prezentacji, bez zobowiązań. Jeśli
                Twój problem da się rozwiązać taniej niż wdrożeniem — powiem to.
              </p>
            </div>
            <div className="cta-right">
              <Link href="/kontakt" className="btn-primary">
                Umów rozmowę <span className="arr">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
