import Link from "next/link";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/blog/ReadingProgress";
import {
  ProjectHero,
  ProjectPostCta,
  RelatedProjects,
} from "@/components/projects/ProjectPostParts";
import ProjectExtras from "@/components/projects/ProjectExtras";
import { enrichProjectWithCaseStudy } from "@/lib/case-studies";
import {
  getProjectCaseStudyHtml,
  getProjectHeadline,
  getProjectTags,
  getProjectUrlLabel,
  renderHeadline,
} from "@/lib/project-case-study";
import type { Project } from "@/lib/projects";

type ProjectDetailClientProps = {
  project: Project;
  relatedProjects: Project[];
};

function renderTitle(title: string) {
  const parts = renderHeadline(title);
  if (!parts || typeof parts === "string") return title;

  return (
    <>
      {parts.before}
      <em>{parts.emphasis}</em>
      {parts.after}
    </>
  );
}

export default function ProjectDetailClient({
  project,
  relatedProjects,
}: ProjectDetailClientProps) {
  const enriched = enrichProjectWithCaseStudy(project);
  const tags = getProjectTags(enriched);
  const headline = getProjectHeadline(enriched);
  const caseStudyHtml = getProjectCaseStudyHtml(enriched);
  const scope = enriched.scope ?? "Strategia, UX, kod";
  const heroCaption = enriched.heroCaption;
  const heroDeviceBadge = enriched.heroDeviceBadge;
  const urlLabel = enriched.url ? getProjectUrlLabel(enriched.url) : "";

  // Dane strukturalne (CreativeWork, BreadcrumbList, FAQPage) generuje
  // komponent serwerowy w page.tsx — tutaj celowo ich nie ma, żeby nie
  // duplikować schematu i nie emitować URL-i bez "www".

  return (
    <>
      <ReadingProgress />

      <main id="main">
      <header className="art-head">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <Link href="/projekty">Portfolio</Link>
            <span className="sep">/</span>
            <span aria-current="page">{enriched.name}</span>
          </nav>

          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <h1>{renderTitle(headline)}</h1>
          <p className="standfirst">{enriched.description}</p>

          <div className="proj-meta">
            <div className="m">
              <div className="k">Klient</div>
              <div className="v">{enriched.client}</div>
            </div>
            <div className="m">
              <div className="k">Rok</div>
              <div className="v">{enriched.year}</div>
            </div>
            <div className="m">
              <div className="k">Zakres</div>
              <div className="v">{scope}</div>
            </div>
            {enriched.url ? (
              <div className="m">
                <div className="k">Live</div>
                <div className="v">
                  <a
                    href={enriched.url}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {urlLabel} →
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <div className="wrap">
        <ProjectHero
          caption={heroCaption}
          deviceBadge={heroDeviceBadge}
          image={enriched.image}
          name={enriched.name}
        />
      </div>

      <article className="wrap article">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: caseStudyHtml }}
        />
      </article>

      <ProjectExtras project={enriched} />

      <div className="wrap article">
        <div className="article-end">
          <span className="av" aria-hidden="true" />
          <div className="bio">
            <strong>Stanisław</strong>
            <div className="role">Mainly · custom web development</div>
            <p>
              Buduję aplikacje webowe i systemy dla firm - od projektu po
              wdrożenie. Specjalizuję się w Next.js, Supabase i integracjach
              z zewnętrznymi serwisami. Każdy projekt obsługuję osobiście.
            </p>
          </div>
        </div>
      </div>

      <section className="wrap">
        <RelatedProjects projects={relatedProjects} />
        <ProjectPostCta />
      </section>
      </main>

      <Footer />
    </>
  );
}
