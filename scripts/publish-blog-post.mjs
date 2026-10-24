/**
 * Publikuje (lub aktualizuje) wpis bloga w Supabase.
 * Treść: content/blog/<slug>.html, metadane: content/blog/<slug>.json.
 *
 * Uruchom: node scripts/publish-blog-post.mjs <slug>
 * Wymaga: SUPABASE_SERVICE_ROLE_KEY w .env.local
 * Opcjonalnie: REVALIDATE_SECRET w .env.local, wtedy od razu odświeża cache produkcji.
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const env = Object.fromEntries(
  readFileSync(join(root, ".env.local"), "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const idx = l.indexOf("=");
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
    })
);

const slug = process.argv[2];
if (!slug) {
  console.error("Użycie: node scripts/publish-blog-post.mjs <slug>");
  process.exit(1);
}

const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("Brak NEXT_PUBLIC_SUPABASE_URL lub SUPABASE_SERVICE_ROLE_KEY w .env.local");
  process.exit(1);
}

const meta = JSON.parse(readFileSync(join(root, "content/blog", `${slug}.json`), "utf8"));
const content = readFileSync(join(root, "content/blog", `${slug}.html`), "utf8").trim();
if (meta.slug !== slug) {
  console.error(`Slug w JSON (${meta.slug}) różni się od argumentu (${slug})`);
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const { data, error } = await supabase
  .from("blog_posts")
  .upsert({ ...meta, content }, { onConflict: "slug" })
  .select("slug, title, published, updated_at")
  .single();

if (error) {
  console.error("Błąd zapisu:", error.message);
  process.exit(1);
}
console.log("Zapisano:", data);

if (env.REVALIDATE_SECRET) {
  const res = await fetch("https://www.mainly.pl/api/revalidate", {
    method: "POST",
    headers: { "x-revalidate-secret": env.REVALIDATE_SECRET },
  });
  console.log("Revalidate:", res.status, await res.text());
} else {
  console.log("Brak REVALIDATE_SECRET: lista bloga i sitemapa odświeżą się do 1 h.");
}
