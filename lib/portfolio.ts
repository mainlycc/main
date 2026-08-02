import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { portfolioCases } from "./home-content";
import { projects, type Project } from "./projects";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createClient(supabaseUrl, supabaseAnonKey);
}

export type PortfolioProjectRow = {
  id: string;
  legacy_id: number | null;
  slug: string;
  name: string;
  description: string;
  full_description: string;
  image_url: string;
  fallback_image_url: string | null;
  client: string;
  year: number;
  project_url: string;
  technologies: string[];
  features: string[];
  show_on_homepage: boolean;
  homepage_featured: boolean;
  homepage_tags: string[];
  homepage_preview: "featured" | "airset" | "akademia" | null;
  homepage_sort_order: number | null;
  sort_order: number;
  published: boolean;
  meta_description: string | null;
};

export type HomepagePortfolioCase = {
  featured: boolean;
  title: string;
  tags: string[];
  slug: string;
  preview: "featured" | "airset" | "akademia";
  image: string;
};

export type HeroPortfolioSlide = {
  slug: string;
  title: string;
  label: string;
  image: string;
  urlLabel: string;
};

function getProjectUrlLabel(slug: string): string {
  const project = projects.find((p) => p.slug === slug);
  if (!project?.url) return slug;

  try {
    const { hostname, pathname } = new URL(project.url);
    const host = hostname.replace(/^www\./, "");
    if (host === "mainly.pl") return `mainly.pl${pathname}`;
    return host;
  } catch {
    return slug;
  }
}

function rowToProject(row: PortfolioProjectRow): Project {
  return {
    id: row.legacy_id ?? 0,
    name: row.name,
    slug: row.slug,
    image: resolveImageUrl(row.slug, row.image_url),
    fallbackImage: row.fallback_image_url ?? undefined,
    description: row.description,
    fullDescription: row.full_description,
    technologies: row.technologies,
    features: row.features,
    client: row.client,
    year: row.year,
    url: row.project_url,
  };
}

function resolveImageUrl(slug: string, imageUrl: string | null | undefined): string {
  const localImage = projects.find((p) => p.slug === slug)?.image;
  const hasRealLocalImage = localImage && !localImage.includes("placeholder");
  const hasRealRemoteImage = imageUrl && !imageUrl.includes("placeholder");

  // Lokalny screenshot w projects.ts ma pierwszeństwo - pozwala podmienić
  // obraz bez czekania na UPDATE w Supabase (RLS często blokuje anon).
  if (hasRealLocalImage) return localImage;
  if (hasRealRemoteImage) return imageUrl;
  return imageUrl || localImage || "/placeholder.svg?height=600&width=800";
}

function staticPublishedProjects(): Project[] {
  return projects.map((project) => ({
    ...project,
    image: resolveImageUrl(project.slug, project.image),
  }));
}

function mergePublishedProjects(dbProjects: Project[]): Project[] {
  const bySlug = new Map(dbProjects.map((item) => [item.slug, item]));

  for (const local of staticPublishedProjects()) {
    if (!bySlug.has(local.slug)) bySlug.set(local.slug, local);
  }

  return [...bySlug.values()].sort((a, b) => {
    if (b.id !== a.id) return b.id - a.id;
    return b.year - a.year;
  });
}

const HOMEPAGE_SHOWCASE_LIMIT = 5;

function projectToHomepageCase(
  project: Project,
  index: number
): HomepagePortfolioCase {
  const curated = portfolioCases.find((item) => item.slug === project.slug);

  return {
    featured: curated?.featured ?? index === 0,
    title: project.name,
    tags: curated?.tags?.length
      ? curated.tags
      : [...project.technologies.slice(0, 3), String(project.year)],
    slug: project.slug,
    preview: curated?.preview ?? "featured",
    image: project.image,
  };
}

/** Projekty z curated listy home-content (kolejność showcase), z fallbackiem na top N. */
function pickHomepageProjects(published: Project[]): Project[] {
  const bySlug = new Map(published.map((item) => [item.slug, item]));
  const curated = portfolioCases
    .map((item) => bySlug.get(item.slug))
    .filter((item): item is Project => Boolean(item));

  if (curated.length > 0) {
    return curated.slice(0, HOMEPAGE_SHOWCASE_LIMIT);
  }

  return published.slice(0, HOMEPAGE_SHOWCASE_LIMIT);
}

/** Wybrane prace na homepage - curated zestaw ze screenshotami. */
export async function getHomepagePortfolioCases(): Promise<HomepagePortfolioCase[]> {
  const published = await getPublishedProjects();
  return pickHomepageProjects(published).map((project, index) =>
    projectToHomepageCase(project, index)
  );
}

/** Slajdy hero - te same projekty co w sekcji prac (ze screenshotami). */
export async function getHeroPortfolioSlides(): Promise<HeroPortfolioSlide[]> {
  const published = await getPublishedProjects();

  return pickHomepageProjects(published)
    .filter((item) => item.image && !item.image.includes("placeholder"))
    .map((item) => ({
      slug: item.slug,
      title: item.name,
      label: item.name,
      image: item.image,
      urlLabel: getProjectUrlLabel(item.slug),
    }));
}

export async function getPublishedProjects(): Promise<Project[]> {
  const fallback = staticPublishedProjects();
  const supabase = getSupabase();
  if (!supabase) return fallback;

  const { data, error } = await supabase
    .from("portfolio_projects")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: false })
    .order("year", { ascending: false });

  if (error || !data?.length) return fallback;

  return mergePublishedProjects(
    (data as PortfolioProjectRow[]).map(rowToProject)
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = getSupabase();
  const fallback = projects.find((p) => p.slug === slug) ?? null;

  if (!supabase) {
    return fallback
      ? { ...fallback, image: resolveImageUrl(fallback.slug, fallback.image) }
      : null;
  }

  const { data, error } = await supabase
    .from("portfolio_projects")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error || !data) {
    return fallback
      ? { ...fallback, image: resolveImageUrl(fallback.slug, fallback.image) }
      : null;
  }
  return rowToProject(data as PortfolioProjectRow);
}

export { projects };
