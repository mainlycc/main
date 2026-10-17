#!/usr/bin/env node
/**
 * Zapisuje daty ostatniej zmiany treści stron do lib/lastmod.generated.json
 * (używane jako <lastmod> w sitemapie).
 *
 *   node scripts/build-lastmod.mjs
 *
 * Data strony = data ostatniego commita, który zmienił jej pliki źródłowe.
 * Plik zmieniony, ale jeszcze niezacommitowany, dostaje dzisiejszą datę.
 * Uruchamiaj przed commitem — Vercel klonuje repo płytko, więc nie liczymy
 * tego podczas buildu.
 */

import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function git(args) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();
}

const today = new Date().toISOString().slice(0, 10);

function lastChange(files) {
  const existing = files.filter((file) => existsSync(join(ROOT, file)));
  if (existing.length === 0) return null;
  if (git(["status", "--porcelain", "--", ...existing])) return today;
  const date = git(["log", "-1", "--format=%cs", "--", ...existing]);
  return date || today;
}

// Ścieżka strony → pliki, z których powstaje jej treść.
const routes = {
  "/": ["app/page.tsx", "components/home", "lib/home-content.ts"],
  "/uslugi": ["app/uslugi/page.tsx"],
  "/branze": ["app/branze/page.tsx"],
  "/cennik": ["app/cennik/page.tsx"],
  "/proces": ["app/proces/page.tsx"],
  "/o-mnie": ["app/o-mnie/page.tsx"],
  "/tworzenie-stron-internetowych-warszawa": [
    "app/tworzenie-stron-internetowych-warszawa/page.tsx",
  ],
  "/aplikacje-webowe-warszawa": ["app/aplikacje-webowe-warszawa/page.tsx"],
  "/projekty": ["app/projekty/page.tsx", "lib/projects.ts"],
  "/kontakt": ["app/kontakt/page.tsx"],
  "/opinie": ["app/opinie/page.tsx"],
  "/polityka-prywatnosci": ["app/polityka-prywatnosci/page.tsx"],
};

const out = {};
for (const [route, files] of Object.entries(routes)) {
  const date = lastChange(files);
  if (date) out[route] = date;
}

const servicesDate = lastChange(["lib/services.ts", "app/uslugi/[slug]/page.tsx"]);
const industriesDate = lastChange(["lib/industries.ts", "app/branze/[slug]/page.tsx"]);
if (servicesDate) out["/uslugi/*"] = servicesDate;
if (industriesDate) out["/branze/*"] = industriesDate;

const casesDir = join(ROOT, "content", "case-studies");
for (const file of readdirSync(casesDir)) {
  if (!file.endsWith(".md") || file.startsWith("_") || file === "README.md") continue;
  const slug = file.replace(/\.md$/, "");
  const date = lastChange([`content/case-studies/${file}`]);
  if (date) out[`/projekty/${slug}`] = date;
}

writeFileSync(
  join(ROOT, "lib", "lastmod.generated.json"),
  JSON.stringify(out, null, 2) + "\n"
);
console.log(`lastmod: ${Object.keys(out).length} stron`);
