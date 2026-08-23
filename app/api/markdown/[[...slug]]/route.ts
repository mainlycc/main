import { MARKDOWN_HEADERS } from "@/lib/accept";
import { getMarkdownForPath, notFoundMarkdown } from "@/lib/markdown-pages";

function pathFromSlug(slug?: string[]): string {
  if (!slug || slug.length === 0) return "/";
  return `/${slug.join("/")}`;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params;
  const pathname = pathFromSlug(slug);
  const content = await getMarkdownForPath(pathname);

  if (content === null) {
    return new Response(notFoundMarkdown(pathname), {
      status: 404,
      headers: MARKDOWN_HEADERS,
    });
  }

  return new Response(content, {
    headers: MARKDOWN_HEADERS,
  });
}
