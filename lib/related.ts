import { industries } from "./industries";
import type { Project } from "./projects";

// Technologie obecne prawie wszędzie — nie mówią nic o podobieństwie projektów.
const GENERIC_TECH = new Set(
  [
    "next.js",
    "react",
    "typescript",
    "tailwind css",
    "shadcn",
    "shadcn/ui",
    "supabase",
  ].map((t) => t.toLowerCase())
);

function lower(items: string[] = []) {
  return items.map((item) => item.toLowerCase());
}

function overlap(a: string[], b: string[]) {
  const set = new Set(a);
  return b.filter((item) => set.has(item)).length;
}

function industriesOf(slug: string) {
  return industries
    .filter((industry) => industry.relatedProjects.includes(slug))
    .map((industry) => industry.slug);
}

/**
 * Dobiera podobne projekty: wspólna branża, tagi, nietypowe technologie.
 * Przy remisie bierze sąsiadów z listy (po kolei w obie strony), żeby
 * linki „Zobacz też” rozkładały się na wszystkie realizacje, a nie
 * zawsze na te same trzy.
 */
export function pickRelatedProjects(
  current: Project,
  all: Project[],
  count = 3
): Project[] {
  const index = all.findIndex((item) => item.slug === current.slug);
  const currentIndustries = industriesOf(current.slug);
  const currentTags = lower(current.tags);
  const currentTech = lower(current.technologies).filter(
    (tech) => !GENERIC_TECH.has(tech)
  );

  return all
    .map((project, i) => {
      if (project.slug === current.slug) return null;
      const score =
        overlap(currentIndustries, industriesOf(project.slug)) * 3 +
        overlap(currentTags, lower(project.tags)) * 2 +
        overlap(currentTech, lower(project.technologies));
      const distance =
        index < 0
          ? i
          : Math.min(
              Math.abs(i - index),
              all.length - Math.abs(i - index)
            );
      return { project, score, distance };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => b.score - a.score || a.distance - b.distance)
    .slice(0, count)
    .map((item) => item.project);
}

type RelatablePost = {
  slug: string;
  category: string;
  tags?: string[] | null;
};

/**
 * Dobiera podobne artykuły: ta sama kategoria i wspólne tagi.
 * Przy remisie — sąsiedzi w kolejności publikacji, zamiast zawsze
 * trzech najnowszych wpisów.
 */
export function pickRelatedPosts<T extends RelatablePost>(
  current: RelatablePost,
  all: T[],
  count = 3
): T[] {
  const index = all.findIndex((post) => post.slug === current.slug);
  const currentTags = lower(current.tags ?? []);

  return all
    .map((post, i) => {
      if (post.slug === current.slug) return null;
      const score =
        (post.category === current.category ? 3 : 0) +
        overlap(currentTags, lower(post.tags ?? []));
      const distance =
        index < 0
          ? i
          : Math.min(
              Math.abs(i - index),
              all.length - Math.abs(i - index)
            );
      return { post, score, distance };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => b.score - a.score || a.distance - b.distance)
    .slice(0, count)
    .map((item) => item.post);
}
