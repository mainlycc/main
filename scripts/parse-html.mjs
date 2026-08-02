import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const h = fs.readFileSync(path.join(__dirname, "../_extracted.html"), "utf8");

const sections = [
  "hero",
  "manifesto",
  "benefits",
  "trust",
  "process",
  "apps",
  "portfolio",
  "tech",
  "pricing",
  "testimonials",
  "faq",
  "cta",
  "footer",
];

for (const s of sections) {
  const re = new RegExp(`<section[^>]*(?:id="${s}"|class="[^"]*${s}[^"]*")[^>]*>[\\s\\S]*?(?=<section|<footer|$)`, "i");
  const m = h.match(re);
  if (m) {
    fs.writeFileSync(path.join(__dirname, `../_sections/${s}.html`), m[0].slice(0, 8000));
    console.log(s, "found", m[0].length);
  } else {
    console.log(s, "NOT FOUND");
  }
}

// Extract body content structure
const bodyMatch = h.match(/<body[^>]*>([\s\S]*)<\/body>/);
if (bodyMatch) {
  const tags = [...bodyMatch[1].matchAll(/<(section|header|nav|footer)[^>]*(?:id|class)="([^"]*)"/g)];
  tags.forEach((t) => console.log(t[1], t[2]));
}
