import { projects } from '../lib/projects';
import { enrichProjectWithCaseStudy } from '../lib/case-studies';
import { getProjectCaseStudyHtml } from '../lib/project-case-study';
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

function htmlToMd(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/h2>/gi, '\n\n')
    .replace(/<\/h3>/gi, '\n\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/?(ul|ol)[^>]*>/gi, '\n')
    .replace(/<h2[^>]*>/gi, '## ')
    .replace(/<h3[^>]*>/gi, '### ')
    .replace(/<strong>/gi, '**').replace(/<\/strong>/gi, '**')
    .replace(/<b>/gi, '**').replace(/<\/b>/gi, '**')
    .replace(/<em>/gi, '_').replace(/<\/em>/gi, '_')
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    .replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, '\n*$1*\n')
    .replace(/<figure[\s\S]*?<\/figure>/gi, '')
    .replace(/<img[^>]*>/gi, '')
    .replace(/<div class="stat-band">[\s\S]*?<\/div>(?=\s*<h2|\s*<h3|\s*<p|\s*<div class="pull|\s*<div class="call|\s*<div class="tech)/gi, (m) => {
      const vals = [...m.matchAll(/<div class="v">([\s\S]*?)<\/div>/g)].map(x => x[1].replace(/<[^>]+>/g,'').trim());
      const labs = [...m.matchAll(/<div class="l">([\s\S]*?)<\/div>/g)].map(x => x[1].replace(/<[^>]+>/g,'').trim());
      return '\n' + vals.map((v,i) => `- **${v}** — ${labs[i]||''}`).join('\n') + '\n\n';
    })
    .replace(/<div class="pullquote">[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<\/div>/gi, '\n> $1\n\n')
    .replace(/<div class="callout">[\s\S]*?<b>([\s\S]*?)<\/b>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<\/div>/gi, '\n**$1**\n\n$2\n\n')
    .replace(/<div class="tech-tags">([\s\S]*?)<\/div>/gi, (_: string, inner: string) => {
      const tags = [...inner.matchAll(/<span>([\s\S]*?)<\/span>/g)].map(x => x[1].trim());
      return '\n**Technologie:** ' + tags.join(', ') + '\n';
    })
    .replace(/<span class="idx">([\s\S]*?)<\/span>/gi, '$1 ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function main() {
  const env = readFileSync('.env.local', 'utf8');
  const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)?.[1]?.trim()?.replace(/^"|"$/g, '');
  const key = (env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.+)/)?.[1] || env.match(/NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=(.+)/)?.[1])?.trim()?.replace(/^"|"$/g, '');

  let dbProjects: any[] = [];
  let supabaseOk = false;
  if (url && key) {
    const sb = createClient(url, key);
    const { data, error } = await sb.from('portfolio_projects').select('*').eq('published', true).order('sort_order', { ascending: false });
    if (error) {
      console.error('supabase error', error);
    } else {
      dbProjects = data || [];
      supabaseOk = true;
    }
    console.log('supabase projects', dbProjects.length);
  } else {
    console.error('Missing Supabase URL or key in .env.local');
  }

  const outDir = resolve('..', 'portfolio-teksty');
  mkdirSync(outDir, { recursive: true });

  const bySlug = new Map(projects.map(p => [p.slug, p as any]));
  for (const row of dbProjects) {
    const existing = bySlug.get(row.slug);
    bySlug.set(row.slug, {
      ...(existing || {}),
      id: row.legacy_id ?? existing?.id ?? 0,
      name: row.name,
      slug: row.slug,
      description: row.description,
      fullDescription: row.full_description,
      technologies: row.technologies || [],
      features: row.features || [],
      client: row.client,
      year: row.year,
      url: row.project_url,
      image: row.image_url,
    });
  }

  const all = [...bySlug.values()].sort((a, b) => (b.year - a.year) || (b.id - a.id));

  let md = '# Teksty portfolio — Mainly\n\n';
  md += `Wyeksportowano: ${new Date().toISOString().slice(0, 10)}\n\n`;
  md += `Liczba projektów: ${all.length}\n\n`;
  md += '---\n\n';
  md += '## Teksty strony /projekty (lista)\n\n';
  md += '- Etykieta: Portfolio / Wybrane prace\n';
  md += '- Tytuł: Projekty, które działają.\n';
  md += '- Lead: 36+ wdrożonych projektów - systemy CRM, platformy e-learningowe, generatory AI, aplikacje B2B. Każdy projekt to działający produkt dostępny na żywo.\n\n';
  md += '## Teksty sekcji portfolio na homepage (#prace)\n\n';
  md += '- Etykieta: 03 / Wybrane prace\n';
  md += '- Tytuł: Nie mockupy. Działające produkty.\n';
  md += '- Lead: 36+ projektów - systemy CRM, platformy e-learningowe, generatory AI, aplikacje B2B. Każdy projekt to wdrożony, działający produkt.\n\n';
  md += '---\n\n';

  for (const [i, project] of all.entries()) {
    const enriched = enrichProjectWithCaseStudy(project);
    const html = getProjectCaseStudyHtml(enriched);
    const body = htmlToMd(html);
    const headline = (enriched.headline || project.name).replace(/<\/?em>/g, '');

    md += `## ${i + 1}. ${project.name}\n\n`;
    md += `**Slug:** \`${project.slug}\`\n\n`;
    if (project.client) md += `**Klient:** ${project.client}\n\n`;
    if (project.year) md += `**Rok:** ${project.year}\n\n`;
    if (project.url) md += `**URL projektu:** ${project.url}\n\n`;
    md += `**Strona case study:** https://mainly.pl/projekty/${project.slug}\n\n`;
    if (project.description) md += `### Krótki opis (karta / meta)\n\n${project.description}\n\n`;
    if (enriched.scope) md += `**Zakres:** ${enriched.scope}\n\n`;
    if (enriched.tags?.length) md += `**Tagi:** ${enriched.tags.join(', ')}\n\n`;
    if (enriched.heroCaption) md += `**Podpis hero:** ${enriched.heroCaption}\n\n`;
    md += `### Nagłówek case study\n\n${headline}\n\n`;
    if (project.fullDescription) md += `### Pełny opis (baza / fallback)\n\n${project.fullDescription}\n\n`;
    if (project.features?.length) {
      md += `### Funkcje\n\n`;
      for (const f of project.features) md += `- ${f}\n`;
      md += '\n';
    }
    if (project.technologies?.length) {
      md += `### Technologie (lista)\n\n${project.technologies.join(', ')}\n\n`;
    }
    md += `### Treść case study (tekst ze strony)\n\n${body}\n\n`;
    md += '---\n\n';
  }

  const outPath = resolve(outDir, 'portfolio-teksty.md');
  writeFileSync(outPath, md, 'utf8');
  console.log('WROTE', outPath, 'bytes', Buffer.byteLength(md));
  console.log('PROJECTS', all.length);
  console.log('SUPABASE_OK', supabaseOk);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
