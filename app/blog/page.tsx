import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import { BlogPostCard } from "@/components/blog/BlogPostParts";
import Footer from "@/components/Footer";
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  resolveImageUrl,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  stripHtml,
} from "@/lib/seo";
import { getSupabase, type BlogPost } from "@/lib/supabase";

export const revalidate = 3600;

const blogDescription =
  "Wiedza, porady i najnowsze trendy z branży technologicznej. Tworzenie stron internetowych, SEO, marketing i automatyzacje dla firm.";

export const metadata: Metadata = {
  title: "Blog | Mainly - Tworzenie Stron i Aplikacji Webowych",
  description: blogDescription,
  keywords: [
    "blog web development",
    "porady SEO",
    "tworzenie stron internetowych",
    "marketing cyfrowy",
    "automatyzacja biznesu",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Mainly",
    description:
      "Porady z web developmentu, SEO i marketingu cyfrowego dla polskich firm.",
    url: absoluteUrl("/blog"),
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Blog Mainly - Web Development i SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Mainly",
    description:
      "Porady z web developmentu, SEO i marketingu cyfrowego dla polskich firm.",
    images: [DEFAULT_OG_IMAGE],
  },
};

async function getPosts(): Promise<BlogPost[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id,slug,title,excerpt,author,published_at,read_time,category,image_url,tags"
    )
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data as BlogPost[];
}

function buildBlogJsonLd(posts: BlogPost[]) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
    ],
  };

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Mainly",
    description: blogDescription,
    url: absoluteUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(DEFAULT_OG_IMAGE),
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: stripHtml(post.title),
      description: post.excerpt,
      datePublished: post.published_at,
      url: absoluteUrl(`/blog/${post.slug}`),
      ...(post.image_url && { image: resolveImageUrl(post.image_url) }),
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Artykuły na blogu Mainly",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/blog/${post.slug}`),
      name: stripHtml(post.title),
    })),
  };

  return [breadcrumbJsonLd, blogJsonLd, itemListJsonLd];
}

export default async function BlogPage() {
  const posts = await getPosts();
  const jsonLdBlocks = buildBlogJsonLd(posts);

  return (
    <>
      {jsonLdBlocks.map((jsonLd) => (
        <script
          key={jsonLd["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}

      <main>
        <section className="wrap blog-index">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <span aria-current="page">Blog</span>
          </nav>

          <div className="intro">
            <div className="sec-label">
              <span className="num">Blog</span>
              <span>Wiedza i praktyka</span>
            </div>
            <h1>
              Artykuły, które <DisplayEm>przyspieszają</DisplayEm> Twój biznes
            </h1>
            <p className="lead">{blogDescription}</p>
          </div>

          {posts.length === 0 ? (
            <p className="lead" style={{ marginTop: 48, marginBottom: 96 }}>
              Brak opublikowanych artykułów.
            </p>
          ) : (
            <div className="blog-grid">
              {posts.map((post, index) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  variant={((index % 3) + 1) as 1 | 2 | 3}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
