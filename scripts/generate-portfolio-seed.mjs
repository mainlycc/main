import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Load TS data via tsx if available, otherwise parse manually
const projectsPath = path.join(__dirname, "../lib/projects.ts");
const homePath = path.join(__dirname, "../lib/home-content.ts");

const projectsText = fs.readFileSync(projectsPath, "utf8");
const homeText = fs.readFileSync(homePath, "utf8");

const caseBlocks = [
  ...homeText.matchAll(
    /featured:\s*(true|false),\s*title:\s*"([^"]+)",\s*tags:\s*\[([^\]]*)\],\s*slug:\s*"([^"]+)",\s*preview:\s*"([^"]+)"/g
  ),
];

const homepage = Object.fromEntries(
  caseBlocks.map((m) => [
    m[4],
    {
      featured: m[1] === "true",
      tags: m[3].split(",").map((s) => s.trim().replace(/["']/g, "")),
      preview: m[5],
    },
  ])
);

function esc(s) {
  return String(s).replace(/'/g, "''");
}

function sqlArr(items) {
  return `ARRAY[${items.map((i) => `'${esc(i)}'`).join(", ")}]`;
}

const dataMatch = projectsText.match(/export const projects: Project\[\] = (\[[\s\S]*\]);/);
if (!dataMatch) {
  console.error("Could not parse projects.ts");
  process.exit(1);
}

const arrText = dataMatch[1]
  .replace(/(\n\s*)(\w+):/g, '$1"$2":')
  .replace(/,\s*}/g, "}")
  .replace(/,\s*]/g, "]");

const projects = JSON.parse(arrText);

const homepageOrder = Object.keys(homepage);

const values = projects
  .map((p) => {
    const hp = homepage[p.slug];
    const showHome = !!hp;
    return `(
  ${p.id},
  '${esc(p.slug)}',
  '${esc(p.name)}',
  '${esc(p.description)}',
  '${esc(p.fullDescription)}',
  '${esc(p.image)}',
  ${p.fallbackImage ? `'${esc(p.fallbackImage)}'` : "NULL"},
  '${esc(p.client)}',
  ${p.year},
  '${esc(p.url)}',
  ${sqlArr(p.technologies)},
  ${sqlArr(p.features)},
  ${showHome},
  ${hp ? hp.featured : false},
  ${hp ? sqlArr(hp.tags) : "'{}'"},
  ${hp ? `'${esc(hp.preview)}'` : "NULL"},
  ${showHome ? homepageOrder.indexOf(p.slug) + 1 : "NULL"},
  ${p.id},
  true
)`;
  })
  .join(",\n");

const sql = `-- Wygenerowano z lib/projects.ts i lib/home-content.ts
INSERT INTO portfolio_projects (
  legacy_id,
  slug,
  name,
  description,
  full_description,
  image_url,
  fallback_image_url,
  client,
  year,
  project_url,
  technologies,
  features,
  show_on_homepage,
  homepage_featured,
  homepage_tags,
  homepage_preview,
  homepage_sort_order,
  sort_order,
  published
) VALUES
${values}
ON CONFLICT (slug) DO UPDATE SET
  legacy_id = EXCLUDED.legacy_id,
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  full_description = EXCLUDED.full_description,
  image_url = EXCLUDED.image_url,
  fallback_image_url = EXCLUDED.fallback_image_url,
  client = EXCLUDED.client,
  year = EXCLUDED.year,
  project_url = EXCLUDED.project_url,
  technologies = EXCLUDED.technologies,
  features = EXCLUDED.features,
  show_on_homepage = EXCLUDED.show_on_homepage,
  homepage_featured = EXCLUDED.homepage_featured,
  homepage_tags = EXCLUDED.homepage_tags,
  homepage_preview = EXCLUDED.homepage_preview,
  homepage_sort_order = EXCLUDED.homepage_sort_order,
  sort_order = EXCLUDED.sort_order,
  published = EXCLUDED.published,
  updated_at = now();
`;

const outPath = path.join(__dirname, "../supabase/002_portfolio_seed.sql");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, sql, "utf8");
console.log(`Wrote ${projects.length} projects to ${outPath}`);
