import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

/** Szerokości dozwolone w next.config.ts → images.deviceSizes. */
const WIDTHS = [640, 750, 828, 1080, 1200, 1920];
const QUALITY = 60;

/**
 * Ilustracje w case study są surowym HTML-em (`<img src="/projekty/...">`),
 * więc omijają next/image. Tu zamieniamy je na adres optymalizatora,
 * srcset pod realną szerokość kolumny (780px) i wymiary, żeby nie skakał układ.
 */
export function optimizeCaseStudyImages(html: string): string {
  return html.replace(/<img\b([^>]*?)\/?>/gi, (full, attrs: string) => {
    const src = readAttr(attrs, "src");
    if (!src || !src.startsWith("/projekty/") || src.includes("/_next/image")) {
      return full;
    }

    const file = publicFile(src);
    if (!file) return full;

    let size: { width: number; height: number } | null = null;
    try {
      size = imageSize(readFileSync(/*turbopackIgnore: true*/ file));
    } catch {
      return full;
    }
    if (!size) return full;

    const widths = WIDTHS.filter((w) => w <= size.width);
    if (widths.length === 0) widths.push(WIDTHS[0]);

    const srcset = widths
      .map(
        (w) =>
          `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${QUALITY} ${w}w`
      )
      .join(", ");
    const fallbackW = widths[widths.length - 1];
    const fallback = `/_next/image?url=${encodeURIComponent(src)}&w=${fallbackW}&q=${QUALITY}`;
    const alt = readAttr(attrs, "alt") ?? "";

    return (
      `<img src="${fallback}" srcset="${srcset}" sizes="(max-width: 900px) calc(100vw - 48px), 780px" ` +
      `width="${size.width}" height="${size.height}" alt="${alt}" loading="lazy" decoding="async" ` +
      `style="width:100%;height:auto;display:block;aspect-ratio:${size.width}/${size.height};" />`
    );
  });
}

function readAttr(attrs: string, name: string): string | null {
  const match = attrs.match(
    new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i")
  );
  if (!match) return null;
  return match[1] ?? match[2] ?? "";
}

function publicFile(src: string): string | null {
  const pathOnly = src.split("?")[0];
  if (!pathOnly.startsWith("/projekty/")) return null;
  let rel: string;
  try {
    rel = decodeURIComponent(pathOnly.slice(1));
  } catch {
    return null;
  }
  if (rel.split("/").some((part) => part === ".." || part === "")) return null;
  const abs = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "public",
    rel
  );
  return existsSync(/*turbopackIgnore: true*/ abs) ? abs : null;
}

function imageSize(buf: Buffer): { width: number; height: number } | null {
  if (buf.length >= 24 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;

  let i = 2;
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) {
      i += 1;
      continue;
    }
    const marker = buf[i + 1];
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      return {
        height: buf.readUInt16BE(i + 5),
        width: buf.readUInt16BE(i + 7),
      };
    }
    // SOI, EOI i markery RST nie mają pola długości.
    if (marker === 0xd8 || marker === 0xd9 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    const len = buf.readUInt16BE(i + 2);
    if (len < 2) return null;
    i += 2 + len;
  }

  return null;
}
