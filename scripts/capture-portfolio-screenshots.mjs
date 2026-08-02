import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "../public");

const shots = [
  {
    slug: "airset-platforma",
    url: "https://airset.pl/",
    file: "airset-platforma.png",
  },
  {
    slug: "akademia-wiedzy",
    url: "https://akademia-kamilmiacz.pl/",
    file: "akademia-wiedzy.png",
  },
  {
    slug: "magia-podrozowania",
    url: "https://magia-pod.vercel.app/trip/130426",
    file: "magia-podrozowania-ui.png",
  },
  {
    slug: "magia-podrozowania-rezerwacja",
    url: "https://magia-pod.vercel.app/trip/130426/reserve",
    file: "magia-podrozowania-rezerwacja.png",
  },
];

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});

for (const shot of shots) {
  try {
    await page.goto(shot.url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(publicDir, shot.file),
      fullPage: false,
    });
    console.log(`OK ${shot.file}`);
  } catch (error) {
    console.error(`FAIL ${shot.slug}:`, error);
  }
}

await browser.close();
