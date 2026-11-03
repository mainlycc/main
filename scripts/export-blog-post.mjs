/**
 * Pobiera wpis bloga z Supabase do content/blog/<slug>.html + .json,
 * żeby edytować go lokalnie i opublikować przez publish-blog-post.mjs.
 *
 * Uruchom: node scripts/export-blog-post.mjs <slug>
 * Wymaga: SUPABASE_SERVICE_ROLE_KEY w .env.local
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync, writeFileSync } from "fs";
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
  console.error("Użycie: node scripts/export-blog-post.mjs <slug>");
  process.exit(1);
}

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).single();
if (error) {
  console.error("Błąd odczytu:", error.message);
  process.exit(1);
}

const { content, id, created_at, updated_at, ...meta } = data;
writeFileSync(join(root, "content/blog", `${slug}.html`), `${content.trim()}\n`);
writeFileSync(join(root, "content/blog", `${slug}.json`), `${JSON.stringify(meta, null, 2)}\n`);
console.log(`Zapisano content/blog/${slug}.html i .json`);
