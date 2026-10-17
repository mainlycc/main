#!/usr/bin/env node
/**
 * Zgłasza adresy do IndexNow (Bing, Copilot, Yandex, Seznam…).
 *
 *   node scripts/indexnow.mjs                    # wszystkie adresy z sitemapy
 *   node scripts/indexnow.mjs /blog/nowy-wpis    # tylko wskazane ścieżki
 *
 * Uruchamiaj PO wdrożeniu na produkcję — wyszukiwarka sprawdza plik klucza
 * https://www.mainly.pl/<KEY>.txt.
 */

const HOST = "www.mainly.pl";
const KEY = "3e0e27158f722f84007e6590d05d6901";
const SITE = `https://${HOST}`;

async function sitemapUrls() {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const paths = process.argv.slice(2);
const urlList = paths.length
  ? paths.map((path) => new URL(path, SITE).toString())
  : await sitemapUrls();

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: ${urlList.length} adresów → HTTP ${res.status}`);
if (!res.ok && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
