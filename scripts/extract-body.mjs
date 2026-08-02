import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const h = fs.readFileSync(path.join(__dirname, "../_extracted.html"), "utf8");

// Get body inner HTML start
const bodyStart = h.indexOf("<nav class=\"top\"");
const bodyEnd = h.lastIndexOf("</footer>");
const body = h.slice(bodyStart, bodyEnd + 9);
fs.writeFileSync(path.join(__dirname, "../_body.html"), body);
console.log("Body length:", body.length);

// Extract text content snippets
const texts = [
  "Strony, które",
  "Jestem Stanisław",
  "Projektujemy z intencją",
  "Cztery rzeczy",
  "Zaufali nam",
  "Cztery etapy",
  "Przestajesz zatrzy",
  "Świeże",
  "Narzędzia, które",
  "Przejrzyste pakiety",
  "Co mówią",
  "Zamieńmy twój",
  "Elomoto",
  "Akademia Wiedzy",
  "AIRSET",
];
for (const t of texts) {
  const i = h.indexOf(t);
  if (i >= 0) console.log("\n---", t, "---\n", h.slice(i, i + 500).replace(/\s+/g, " "));
}
