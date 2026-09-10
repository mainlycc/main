import { existsSync } from "node:fs";
import { join } from "node:path";

/** Konwencja: /projekty/<slug>/<slot>.jpg → public/projekty/<slug>/<slot>.jpg */
export function projectImage(slug: string, slot = "hero"): string {
  return `/projekty/${slug}/${slot}.jpg`;
}

/** Czy lokalny plik spod public/ faktycznie leży na dysku (dla ścieżek /projekty/...). */
export function projectImageFileExists(src: string): boolean {
  if (!src || src.includes("placeholder")) return false;
  if (/^https?:\/\//i.test(src)) return true;
  if (!src.startsWith("/projekty/")) return !src.includes("placeholder");
  const abs = join(process.cwd(), "public", ...src.slice(1).split("/"));
  return existsSync(abs);
}
