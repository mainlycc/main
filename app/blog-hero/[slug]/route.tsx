import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getBlogHeroContent } from "@/lib/blog-hero-content";

export const runtime = "nodejs";

const WIDTH = 1600;
const HEIGHT = 1000;

const EMBER = "#ff2a14";
const EMBER_SOFT = "#ff6644";
const EMBER_DEEP = "#c41e1e";
const BG_3 = "#1a1816";

let fontsPromise: Promise<{ display: Buffer; mono: Buffer }> | null = null;

function loadFonts() {
  if (!fontsPromise) {
    const dir = join(process.cwd(), "assets", "fonts");
    fontsPromise = Promise.all([
      readFile(join(dir, "InstrumentSerif-Italic.woff")),
      readFile(join(dir, "JetBrainsMono-SemiBold.woff")),
    ]).then(([display, mono]) => ({ display, mono }));
  }
  return fontsPromise;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { main, sub } = getBlogHeroContent(slug);
  const { display, mono } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: BG_3,
          backgroundImage: `radial-gradient(ellipse 640px 520px at 12% 10%, ${EMBER_SOFT} 0%, ${EMBER} 20%, ${EMBER_DEEP} 45%, transparent 72%), linear-gradient(165deg, #1a1816 0%, #241410 45%, #4a160c 100%)`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            padding: "0 110px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "display",
              fontStyle: "italic",
              fontSize: main.length > 8 ? 88 : 176,
              lineHeight: 1,
              color: "#f5f1ec",
              textShadow: "0 4px 40px rgba(0,0,0,0.45)",
            }}
          >
            {main}
          </div>
          {sub ? (
            <div
              style={{
                display: "flex",
                fontFamily: "mono",
                fontSize: 30,
                color: "#d8d2ca",
                marginTop: 28,
                maxWidth: 1050,
              }}
            >
              {sub}
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 110px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: 3,
              marginBottom: 26,
              backgroundColor: EMBER,
              boxShadow: `0 0 36px 6px ${EMBER}`,
            }}
          />
          <div
            style={{
              display: "flex",
              fontFamily: "mono",
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: EMBER_SOFT,
            }}
          >
            Mainly · Blog
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        { name: "display", data: display, style: "italic", weight: 400 },
        { name: "mono", data: mono, style: "normal", weight: 600 },
      ],
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
