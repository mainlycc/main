import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(
  path.join(__dirname, "../../Mainly Website (Standalone).html"),
  "utf8"
);

// Try bundler template
const templateMatch = html.match(
  /script type="__bundler\/template"[^>]*>([\s\S]*?)<\/script>/
);
if (templateMatch) {
  const content = templateMatch[1].trim();
  const parsed = JSON.parse(content.startsWith('"') ? content : `"${content}"`);
  fs.writeFileSync(path.join(__dirname, "../_extracted.html"), parsed);
  console.log("Extracted template:", parsed.length, "chars");
  process.exit(0);
}

// Try line 177 JSON bundle
const lines = html.split("\n");
for (const line of lines) {
  if (line.includes('"html"') && line.length > 10000) {
    try {
      const obj = JSON.parse(line.match(/\{[\s\S]*\}/)?.[0] || line);
      if (obj.html) {
        fs.writeFileSync(path.join(__dirname, "../_extracted.html"), obj.html);
        console.log("Extracted from JSON:", obj.html.length, "chars");
        process.exit(0);
      }
    } catch (e) {
      // continue
    }
  }
}

console.log("Could not extract HTML");
