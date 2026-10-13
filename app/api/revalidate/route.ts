import { revalidatePath } from "next/cache";
import { timingSafeEqual } from "node:crypto";

/**
 * On-demand revalidation po publikacji/edycji wpisu w Supabase.
 * Bez tego nowy artykuł czeka do 1 h na wygaśnięcie cache ISR
 * (lista bloga, sitemap, RSS, sekcje "Z bloga" na stronie głównej i usługach).
 *
 * Wywołanie: POST /api/revalidate z nagłówkiem `x-revalidate-secret: <REVALIDATE_SECRET>`
 * (np. z Database Webhook w Supabase na tabeli blog_posts) albo
 * `?secret=<REVALIDATE_SECRET>` przy ręcznym wywołaniu.
 */
function isAuthorized(provided: string | null): boolean {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected || !provided) return false;

  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(req: Request) {
  const url = new URL(req.url);
  const secret =
    req.headers.get("x-revalidate-secret") ?? url.searchParams.get("secret");

  if (!isAuthorized(secret)) {
    return Response.json({ revalidated: false }, { status: 401 });
  }

  // Cała witryna: posty bloga są linkowane z wielu szablonów (home, usługi,
  // branże, sitemap, feed), a serwis jest na tyle mały, że to tani wybór.
  revalidatePath("/", "layout");

  return Response.json({ revalidated: true, at: new Date().toISOString() });
}
