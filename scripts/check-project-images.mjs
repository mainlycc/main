#!/usr/bin/env node
/**
 * Checklist brakujących zdjęć projektów.
 *
 *   node scripts/check-project-images.mjs
 *
 * Porównuje sloty z content/case-studies/*.md (oraz hero z każdego slugu)
 * z plikami w public/projekty/<slug>/<slot>.jpg.
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "content", "case-studies");
const IMG_ROOT = join(ROOT, "public", "projekty");

function parseScalar(raw) {
  const v = raw.trim();
  if (v === "") return "";
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

const files = readdirSync(SRC).filter(
  (f) => f.endsWith(".md") && !f.startsWith("_") && f !== "README.md"
);

/** @type {Map<string, Set<string>>} */
const needed = new Map();

function need(slug, slot) {
  if (!needed.has(slug)) needed.set(slug, new Set());
  needed.get(slug).add(slot);
}

for (const file of files) {
  const raw = readFileSync(join(SRC, file), "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) continue;
  const fm = parseYaml(m[1]);
  const slug = fm.slug || basename(file, ".md");
  need(slug, "hero");
  for (const o of fm.obrazy || []) {
    if (o.slot) need(slug, o.slot);
  }
}

const missing = [];
const present = [];

for (const [slug, slots] of [...needed.entries()].sort((a, b) =>
  a[0].localeCompare(b[0], "pl")
)) {
  for (const slot of [...slots].sort()) {
    const rel = `projekty/${slug}/${slot}.jpg`;
    const abs = join(IMG_ROOT, slug, `${slot}.jpg`);
    if (existsSync(abs)) present.push(rel);
    else missing.push(rel);
  }
}

console.log(`Potrzebne: ${present.length + missing.length}`);
console.log(`Jest:     ${present.length}`);
console.log(`Brakuje:  ${missing.length}`);

if (missing.length) {
  console.log("\nBrakujące pliki:");
  for (const p of missing) console.log(`  public/${p}`);
  process.exitCode = 1;
} else {
  console.log("\nWszystkie sloty mają pliki .jpg.");
}
