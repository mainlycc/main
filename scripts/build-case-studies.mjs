#!/usr/bin/env node
/**
 * Buduje case studies z content/case-studies/*.md
 *
 *   node scripts/build-case-studies.mjs
 *
 * Wejście : content/case-studies/<slug>.md  (frontmatter YAML + treść Markdown)
 * Wyjście : supabase/016_case_studies.sql   (UPDATE do portfolio_projects)
 *           lib/case-studies.generated.ts   (fallback lokalny, gdy nie ma bazy)
 *           content/case-studies/_BRIEF-GRAFICZNY.md (zbiorczy brief na zdjęcia)
 *
 * Markdown jest jedynym źródłem prawdy. SQL i TS to artefakty, nie edytuj ich ręcznie.
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "content", "case-studies");

/* ------------------------------------------------------------------ YAML */
// Podzbiór YAML wystarczający dla naszego frontmattera: skalary, listy skalarów,
// listy obiektów, zagnieżdżone mapy, bloki ">" i "|".

function parseScalar(raw) {
  const v = raw.trim();
  if (v === "") return "";
  if (v === "true") return true;
  if (v === "false") return false;
  if (v === "null" || v === "~") return null;
  if (/^-?\d+$/.test(v)) return Number(v);
  if (/^\[.*\]$/.test(v)) {
    const inner = v.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map((s) => parseScalar(s));
  }
  if (/^".*"$/.test(v) || /^'.*'$/.test(v)) return v.slice(1, -1);
  return v;
}

const indentOf = (line) => line.length - line.trimStart().length;

function parseYaml(text) {
  const lines = text
    .split("\n")
    .filter((l) => !/^\s*#/.test(l) && l.trim() !== "");
  let i = 0;

  function parseBlock(minIndent) {
    if (
      i < lines.length &&
      indentOf(lines[i]) === minIndent &&
      /^\s*-\s/.test(lines[i])
    ) {
      const out = [];
      while (
        i < lines.length &&
        indentOf(lines[i]) === minIndent &&
        /^\s*-\s/.test(lines[i])
      ) {
        const rest = lines[i].trimStart().slice(2);
        if (/^[A-Za-z_][\w-]*\s*:/.test(rest)) {
          const childIndent = minIndent + 2;
          lines[i] = " ".repeat(childIndent) + rest;
          out.push(parseBlock(childIndent));
        } else {
          out.push(parseScalar(rest));
          i++;
        }
      }
      return out;
    }

    const obj = {};
    while (i < lines.length && indentOf(lines[i]) === minIndent) {
      const line = lines[i].trim();
      const m = line.match(/^([^:]+):\s*(.*)$/);
      if (!m) {
        i++;
        continue;
      }
      const key = m[1].trim();
      const rawVal = m[2];
      i++;
      if (rawVal === ">" || rawVal === "|") {
        const buf = [];
        while (i < lines.length && indentOf(lines[i]) > minIndent) {
          buf.push(lines[i].trim());
          i++;
        }
        obj[key] = rawVal === ">" ? buf.join(" ") : buf.join("\n");
      } else if (rawVal === "") {
        if (i < lines.length && indentOf(lines[i]) > minIndent) {
          obj[key] = parseBlock(indentOf(lines[i]));
        } else {
          obj[key] = "";
        }
      } else {
        obj[key] = parseScalar(rawVal);
      }
    }
    return obj;
  }

  return parseBlock(0);
}

/* -------------------------------------------------------------- Markdown */
// Podzbiór, który sami autorujemy. Bez zależności zewnętrznych.

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function inline(text) {
  return esc(text)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" class="link">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

const FIG_STYLE =
  "margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);";
const CAP_STYLE = "padding:12px 16px;font-size:13px;color:var(--fg-dim);";

function projectImagePath(slug, slot) {
  return `/projekty/${slug}/${slot}.jpg`;
}

function figure(src, alt, caption) {
  return (
    `<figure style="${FIG_STYLE}">` +
    `<img src="${esc(src)}" alt="${esc(alt)}" style="width:100%;height:auto;display:block;" />` +
    (caption ? `<figcaption style="${CAP_STYLE}">${inline(caption)}</figcaption>` : "") +
    "</figure>"
  );
}

function figureFromSlot(ctx, slot) {
  const meta = (ctx.obrazy || []).find((o) => o.slot === slot);
  if (!meta) {
    throw new Error(`[${ctx.slug}] {{IMG:${slot}}} — brak slotu w frontmatterze obrazy:`);
  }
  if (!meta.alt) {
    throw new Error(`[${ctx.slug}] {{IMG:${slot}}} — brak pola alt w obrazy[].slot=${slot}`);
  }
  return figure(
    projectImagePath(ctx.slug, slot),
    meta.alt,
    meta.podpis || ""
  );
}

function statBand(rows) {
  if (!rows || !rows.length) return "";
  const cells = rows
    .map(
      (r) =>
        `<div class="s"><div class="v">${esc(r.v)}</div><div class="l">${esc(r.l)}</div></div>`
    )
    .join("");
  return `<div class="stat-band">${cells}</div>`;
}

const CALLOUT_ICON =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">' +
  '<path d="M9 11l3 3L22 4"></path>' +
  '<path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg>';

function callout(title, body) {
  return (
    `<div class="callout"><span class="ic">${CALLOUT_ICON}</span>` +
    `<div class="t"><b>${inline(title)}</b><p>${inline(body)}</p></div></div>`
  );
}

function renderMarkdown(md, ctx) {
  const out = [];
  const lines = md.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.trim() === "{{REZULTATY}}") {
      out.push(statBand(ctx.rezultaty));
      i++;
      continue;
    }

    const imgSlot = line.trim().match(/^\{\{IMG:\s*([a-z0-9-]+)\}\}$/);
    if (imgSlot) {
      out.push(figureFromSlot(ctx, imgSlot[1]));
      i++;
      continue;
    }

    const co = line.trim().match(/^\{\{CALLOUT:\s*([^|]+)\|\s*(.+?)\}\}$/);
    if (co) {
      out.push(callout(co[1].trim(), co[2].trim()));
      i++;
      continue;
    }

    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      const parts = h2[1].split("·");
      if (parts.length > 1) {
        out.push(
          `<h2><span class="idx">${esc(parts[0].trim())}</span>${inline(
            parts.slice(1).join("·").trim()
          )}</h2>`
        );
      } else {
        out.push(`<h2>${inline(h2[1].trim())}</h2>`);
      }
      i++;
      continue;
    }

    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      out.push(`<h3>${inline(h3[1])}</h3>`);
      i++;
      continue;
    }

    const img = line
      .trim()
      .match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/);
    if (img) {
      out.push(figure(img[2], img[1], img[3] || ""));
      i++;
      continue;
    }

    if (/^-\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^-\s+/.test(lines[i])) {
        items.push(`<li>${inline(lines[i].replace(/^-\s+/, ""))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      out.push(`<div class="pullquote"><p>${inline(buf.join(" "))}</p></div>`);
      continue;
    }

    const buf = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^(#{2,3}\s|-\s|>|!\[|\{\{)/.test(lines[i])
    ) {
      buf.push(lines[i].trim());
      i++;
    }
    out.push(`<p>${inline(buf.join(" "))}</p>`);
  }

  return out.join("\n");
}

/* ------------------------------------------------------------ Sekcje stałe */

function extrasBlock(items) {
  if (!items || !items.length) return "";
  return (
    '<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2>' +
    `<ul>${items.map((t) => `<li>${inline(t)}</li>`).join("")}</ul>`
  );
}

function quoteBlock(op) {
  if (!op || !op.cytat) return "";
  const kto = [op.autor, op.rola].filter(Boolean).map(esc).join(", ");
  return (
    `<div class="pullquote"><p>${inline(op.cytat)}</p>` +
    (kto
      ? `<p style="margin-top:14px;font-size:14px;color:var(--fg-dim);font-style:normal;">${kto}</p>`
      : "") +
    "</div>"
  );
}

function techTags(list) {
  if (!list || !list.length) return "";
  return `<div class="tech-tags">${list
    .map((t) => `<span>${esc(t)}</span>`)
    .join("")}</div>`;
}

function ctaBlock(cta) {
  const text =
    cta ||
    "Masz podobny proces do ogarnięcia? [Napisz do mnie](/kontakt). Zwykle w 30 minut da się ustalić, co warto zbudować, a czego nie.";
  return `<p>${inline(text)}</p>`;
}

/* -------------------------------------------------------------- Kompozycja */

function buildHtml(fm, body) {
  return [
    renderMarkdown(body.trim(), {
      rezultaty: fm.rezultaty,
      slug: fm.slug,
      obrazy: fm.obrazy || [],
    }),
    extrasBlock(fm.dodatkowe),
    quoteBlock(fm.opinia),
    ctaBlock(fm.cta),
    techTags(fm.technologie),
  ]
    .filter(Boolean)
    .join("\n");
}

/* -------------------------------------------------------------------- SQL */

const sq = (v) =>
  v === null || v === undefined || v === ""
    ? "NULL"
    : `'${String(v).replace(/'/g, "''")}'`;
const sqArr = (a) =>
  !a || !a.length ? "'{}'" : `ARRAY[${a.map((x) => sq(x)).join(", ")}]::text[]`;
const sqJson = (o) =>
  `'${JSON.stringify(o === undefined ? null : o).replace(/'/g, "''")}'::jsonb`;

/* -------------------------------------------------------------------- Main */

const files = readdirSync(SRC).filter(
  (f) => f.endsWith(".md") && !f.startsWith("_") && f !== "README.md"
);
const docs = [];

for (const file of files) {
  const raw = readFileSync(join(SRC, file), "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) {
    console.error(`  [pomijam] ${file}: brak frontmattera`);
    continue;
  }
  const fm = parseYaml(m[1]);
  fm.slug = fm.slug || basename(file, ".md");
  const html = buildHtml(fm, m[2]);
  docs.push({ fm, html });

  const todos = (raw.match(/TODO_METRYKA/g) || []).length;
  console.log(
    `  ok  ${fm.slug.padEnd(24)} ${String(html.length).padStart(6)} zn.` +
      (todos ? `   ${todos}x TODO_METRYKA` : "")
  );
}

docs.sort((a, b) => a.fm.slug.localeCompare(b.fm.slug, "pl"));

const sqlBody = docs
  .map(({ fm, html }) => {
    const data = {
      rezultaty: fm.rezultaty || [],
      proces: fm.proces || [],
      dodatkowe: fm.dodatkowe || [],
      opinia: fm.opinia || null,
    };
    return `-- ${fm.slug}
UPDATE portfolio_projects SET
  headline        = ${sq(fm.naglowek)},
  tags            = ${sqArr(fm.tagi)},
  scope           = ${sq(fm.zakres)},
  branza          = ${sq(fm.branza)},
  obszar          = ${sq(fm.obszar)},
  hero_caption    = ${sq(fm.hero_caption)},
  description     = ${sq(fm.zajawka)},
  case_study_html = ${sq(html)},
  case_study_data = ${sqJson(data)},
  image_brief     = ${sqJson(fm.obrazy || [])}
WHERE slug = ${sq(fm.slug)};`;
  })
  .join("\n\n");

writeFileSync(
  join(ROOT, "supabase", "016_case_studies.sql"),
  "-- ============================================================\n" +
    `-- 016: Treści case studies (${docs.length} projektów)\n` +
    "-- WYGENEROWANE z content/case-studies/*.md - nie edytuj ręcznie.\n" +
    "-- Regeneracja: node scripts/build-case-studies.mjs\n" +
    "-- Wymaga wcześniej: 015_case_study_columns.sql\n" +
    "-- ============================================================\n\nBEGIN;\n\n" +
    sqlBody +
    "\n\nCOMMIT;\n",
  "utf8"
);

const tsBody = docs
  .map(
    ({ fm, html }) => `  ${JSON.stringify(fm.slug)}: {
    headline: ${JSON.stringify(fm.naglowek || "")},
    tags: ${JSON.stringify(fm.tagi || [])},
    scope: ${JSON.stringify(fm.zakres || "")},
    heroCaption: ${JSON.stringify(fm.hero_caption || "")},
    caseStudyHtml: ${JSON.stringify(html)},
  },`
  )
  .join("\n");

writeFileSync(
  join(ROOT, "lib", "case-studies.generated.ts"),
  "// WYGENEROWANE z content/case-studies/*.md - nie edytuj ręcznie.\n" +
    "// Regeneracja: node scripts/build-case-studies.mjs\n\n" +
    "export type GeneratedCaseStudy = {\n" +
    "  headline: string;\n  tags: string[];\n  scope: string;\n" +
    "  heroCaption: string;\n  caseStudyHtml: string;\n};\n\n" +
    `export const generatedCaseStudies: Record<string, GeneratedCaseStudy> = {\n${tsBody}\n};\n`,
  "utf8"
);

const brief = docs
  .map(({ fm }) => {
    const rows = (fm.obrazy || [])
      .map(
        (o) =>
          `### ${o.slot}  \`${o.typ}\`\n\n` +
          `plik: \`/projekty/${fm.slug}/${o.slot}.jpg\`\n\n` +
          `${o.opis}\n` +
          (o.zasada ? `\n> Ograniczenie: ${o.zasada}\n` : "")
      )
      .join("\n");
    return `## ${fm.naglowek || fm.slug}\n\n\`/projekty/${fm.slug}\`\n\n${
      rows || "_brak briefu_"
    }`;
  })
  .join("\n\n---\n\n");

writeFileSync(
  join(SRC, "_BRIEF-GRAFICZNY.md"),
  "# Brief graficzny do case studies\n\n" +
    "WYGENEROWANE z frontmatterów. Regeneracja: `node scripts/build-case-studies.mjs`\n\n" +
    "Typy: `screenshot` = zrzut z realnej aplikacji, `crop` = wycinek zrzutu, `foto` = zdjęcie realne,\n" +
    "`generowane` = grafika generowana (tylko abstrakcja albo tekstura, nigdy fałszywe UI ani liczby).\n\n" +
    "## Zasady obowiązujące wszędzie\n\n" +
    "Czego nie robimy, żeby to nie wyglądało jak wygenerowana atrapa:\n\n" +
    "- Żadnych podmienionych liczb na zrzucie. Jeśli w aplikacji jest 7 pozycji, na obrazku jest 7.\n" +
    "- Żadnych dorysowanych wykresów, kółek procentowych, KPI i strzałek wzrostu,\n" +
    "  jeśli aplikacja takich elementów nie ma. To jest pierwsza rzecz, po której poznaje się fejk.\n" +
    "- Żadnych twarzy generowanych AI przy opiniach i awatarach.\n" +
    "- Żadnych renderów laptopa z odbiciem i cieniem. Zwykły, prosty zrzut wygląda poważniej.\n" +
    "- Dane osobowe anonimizujemy w aplikacji przed zrzutem, a nie rozmyciem w Photoshopie.\n" +
    "  Rozmycia czytają się jak zasłanianie braków.\n" +
    "- Puste stany pokazujemy jako puste. Dopisywanie wypełniaczy, żeby lista wyglądała dłużej,\n" +
    "  widać po jednorodnych nazwach.\n\n" +
    "Co wolno wygenerować: tła, tekstury, abstrakcyjne kształty w sekcjach dekoracyjnych.\n" +
    "Czyli rzeczy, które nie udają zrzutu ekranu ani danych.\n\n" +
    "Format zrzutów: szerokość 1600 px, obcięte do samej treści, bez paska przeglądarki\n" +
    "i bez paska zadań systemu.\n\n---\n\n" +
    brief +
    "\n",
  "utf8"
);

console.log(
  `\n${docs.length} case studies -> supabase/016_case_studies.sql, lib/case-studies.generated.ts, content/case-studies/_BRIEF-GRAFICZNY.md`
);
