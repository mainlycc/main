import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { getPublishedBlogPosts, type BlogPostListItem } from "@/lib/blog-posts";

type RelatedArticlesProps = {
  serviceSlug?: string;
  industrySlug?: string;
  keywords?: string[];
  maxArticles?: number;
};

const SERVICE_ARTICLE_MAP: Record<string, string[]> = {
  "aplikacje-webowe": [
    "ile-kosztuje-aplikacja-webowa-na-zamowienie",
    "jak-wybrac-firme-do-stworzenia-aplikacji-webowej",
  ],
  "systemy-dla-firm": [
    "gotowy-crm-czy-system-na-zamowienie",
    "jak-przeniesc-firme-z-excela-do-systemu",
  ],
  "strony-internetowe": [
    "jak-stworzyc-nowoczesna-strone-internetowa-2025",
    "strona-internetowa-ktora-sprzedaje-7-elementow",
    "kazda-sekunda-ladowania-to-utracone-leady",
  ],
  "automatyzacja-procesow": [
    "jak-przeniesc-firme-z-excela-do-systemu",
  ],
  "sklepy-i-platformy-b2b": [],
  "opieka-techniczna": [
    "kazda-sekunda-ladowania-to-utracone-leady",
  ],
};

const INDUSTRY_ARTICLE_MAP: Record<string, string[]> = {
  "gabinety-stomatologiczne": [
    "strona-internetowa-dla-dentysty-2026",
  ],
  "biura-rachunkowe": [],
  "kancelarie-prawne": [],
  "biura-podrozy": [],
  "kluby-i-akademie-sportowe": [],
  "leasing-i-finanse": [],
  "producenci-i-przemysl": [
    "konfigurator-3d-dla-producenta-pergoli-i-altan",
  ],
  "szkoly-i-edukacja": [],
};

export default async function RelatedArticles({
  serviceSlug,
  industrySlug,
  keywords = [],
  maxArticles = 3,
}: RelatedArticlesProps) {
  const posts = await getPublishedBlogPosts();
  
  if (posts.length === 0) {
    return null;
  }

  const mappedSlugs = serviceSlug
    ? SERVICE_ARTICLE_MAP[serviceSlug] ?? []
    : industrySlug
      ? INDUSTRY_ARTICLE_MAP[industrySlug] ?? []
      : [];

  let relatedPosts: BlogPostListItem[] = [];

  if (mappedSlugs.length > 0) {
    relatedPosts = mappedSlugs
      .map((slug) => posts.find((p) => p.slug === slug))
      .filter((p): p is BlogPostListItem => Boolean(p));
  }

  if (relatedPosts.length < maxArticles && keywords.length > 0) {
    const keywordMatches = posts.filter((post) => {
      if (relatedPosts.some((rp) => rp.slug === post.slug)) return false;
      const postText = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
      return keywords.some((kw) => postText.includes(kw.toLowerCase()));
    });
    relatedPosts = [...relatedPosts, ...keywordMatches].slice(0, maxArticles);
  }

  if (relatedPosts.length < maxArticles) {
    const remaining = posts
      .filter((p) => !relatedPosts.some((rp) => rp.slug === p.slug))
      .slice(0, maxArticles - relatedPosts.length);
    relatedPosts = [...relatedPosts, ...remaining];
  }

  relatedPosts = relatedPosts.slice(0, maxArticles);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="related-articles">
      <h3 className="related-articles-title">Powiązane artykuły</h3>
      <div className="related-articles-list">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="related-article-link"
          >
            <span className="icon">
              <FileText size={16} />
            </span>
            <span className="text">
              <h4>{stripHtml(post.title)}</h4>
              <p>{post.read_time}</p>
            </span>
            <ArrowRight size={16} className="arr" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, "").trim();
}
