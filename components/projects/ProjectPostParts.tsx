import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

function hasRealImage(src: string) {
  return src && !src.includes("placeholder");
}

type ProjectHeroProps = {
  caption?: string;
  deviceBadge?: string;
  image: string;
  name: string;
};

export function ProjectHero({
  caption,
  deviceBadge,
  image,
  name,
}: ProjectHeroProps) {
  const showImage = hasRealImage(image);

  if (!showImage) {
    return (
      <div className="art-hero">
        {caption ? <span className="cap">{caption}</span> : null}
        <div className="device">
          <div className="topbar">
            <i />
            <i />
            <i />
          </div>
          <div className="screen">
            <div className="row1">
              <div className="h" />
              {deviceBadge ? <div className="badge">{deviceBadge}</div> : null}
            </div>
            <div className="cards">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="card">
                  <div className="cimg" />
                  <div className="cl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="art-hero has-image">
      <Image
        src={image}
        alt={name}
        fill
        className="object-contain object-center"
        priority
        sizes="(max-width: 1320px) 100vw, 1320px"
      />
      {caption ? <span className="cap">{caption}</span> : null}
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
  variant?: 1 | 2 | 3;
};

export function ProjectCard({ project, variant = 1 }: ProjectCardProps) {
  const showImage = hasRealImage(project.image);
  const meta = [project.technologies[0], project.client.split("-")[0]?.trim()]
    .filter(Boolean)
    .join(" · ");

  return (
    <Link href={`/projekty/${project.slug}`} className={`rel r${variant}`}>
      <div className="art">
        {showImage ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 880px) 100vw, 33vw"
          />
        ) : (
          <div className="glow" />
        )}
      </div>
      <div className="body">
        <div className="meta">{meta || project.name}</div>
        <h3>{project.description}</h3>
      </div>
    </Link>
  );
}

type RelatedProjectsProps = {
  projects: Project[];
};

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="related">
      <div className="sec-label">
        <span className="num">→</span> Zobacz też
      </div>
      <div className="rel-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            variant={((index % 3) + 1) as 1 | 2 | 3}
          />
        ))}
      </div>
    </section>
  );
}

type ProjectPostCtaProps = {
  href?: string;
};

export function ProjectPostCta({ href = "/kontakt" }: ProjectPostCtaProps) {
  return (
    <div className="post-cta">
      <h3>
        Masz podobny <em>proces do zautomatyzowania</em>?
      </h3>
      <p>
        Bezpłatna rozmowa - 30 minut. Powiem wprost, czy warto budować
        system i ile by to kosztowało w Twoim przypadku.
      </p>
      <Link href={href} className="btn-primary">
        Umów rozmowę <span className="arr">↗</span>
      </Link>
    </div>
  );
}
