import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BlogPostCta,
  BlogTitle,
  RelatedPosts,
} from "@/components/blog/BlogPostParts";
import ReadingProgress from "@/components/blog/ReadingProgress";
import Footer from "@/components/Footer";
import { formatBlogDate } from "@/lib/blog";
import { blogHeroImageUrl } from "@/lib/blog-hero-content";
import { blogPostingSchema } from "@/lib/schema";
import {
  absoluteUrl,
  postOgImages,
  resolveImageUrl,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  stripHtml,
} from "@/lib/seo";
import { BUSINESS } from "@/lib/site";
import { getActiveOwnerProfiles } from "@/lib/site-profiles";
import { getSupabase, type BlogPost } from "@/lib/supabase";

export const revalidate = 3600;

export async function generateStaticParams() {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("published", true);

  return (data ?? []).map((post: { slug: string }) => ({ slug: post.slug }));
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !data) return null;
  return data as BlogPost;
}

async function getRelatedPosts(
  slug: string,
  category: string
): Promise<BlogPost[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug,title,excerpt,category,read_time,image_url,published_at")
    .eq("published", true)
    .neq("slug", slug)
    .order("published_at", { ascending: false })
    .limit(6);

  if (error || !data) return [];

  const sameCategory = data.filter((post) => post.category === category);
  const others = data.filter((post) => post.category !== category);
  return [...sameCategory, ...others].slice(0, 3) as BlogPost[];
}

function AuthorBox() {
  const profiles = getActiveOwnerProfiles();

  return (
    <div className="article-end">
      <span className="av" aria-hidden="true" />
      <div className="bio">
        <strong>{BUSINESS.personName}</strong>
        <div className="role">Założyciel Mainly</div>
        <p>
          Web developer z Warszawy. Buduję aplikacje webowe, systemy CRM i
          strony dla firm — od projektu po wdrożenie, bez podwykonawców.
        </p>
        <div className="author-links" style={{ display: "flex", gap: "0.75rem", marginTop: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/o-mnie" className="author-link">
            Więcej o mnie
          </Link>
          {profiles.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel={profile.relMe ? "me noopener" : "noopener"}
              className="author-link"
            >
              {profile.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Artykuł nie znaleziony | Blog Mainly" };
  }

  const plainTitle = stripHtml(post.title);
  const description = post.meta_description ?? post.excerpt;
  const heroImageUrl = post.image_url ?? blogHeroImageUrl(post.slug);
  const ogImages = postOgImages(heroImageUrl, plainTitle);
  const twitterImages = [heroImageUrl];

  return {
    title: `${plainTitle} | Blog Mainly`,
    description,
    keywords: post.keywords ?? undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: plainTitle,
      description,
      url: absoluteUrl(`/blog/${post.slug}`),
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "article",
      section: post.category,
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      authors: [BUSINESS.personName],
      tags: post.tags,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: plainTitle,
      description,
      images: twitterImages,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(slug, post.category);
  const tagItems =
    post.tags.length > 0 ? post.tags : [post.category].filter(Boolean);
  const plainTitle = stripHtml(post.title);
  const description = post.meta_description ?? post.excerpt;
  const postUrl = absoluteUrl(`/blog/${post.slug}`);
  const heroImageUrl = post.image_url ?? blogHeroImageUrl(post.slug);

  const blogPostingJsonLd = blogPostingSchema({
    headline: plainTitle,
    description,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    articleSection: post.category,
    url: postUrl,
    imageUrl: resolveImageUrl(heroImageUrl),
  });

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
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ReadingProgress />

      <main id="main">
      <header className="art-head">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span aria-current="page">{post.category}</span>
          </nav>

          <div className="tags">
            {tagItems.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <h1>
            <BlogTitle title={post.title} />
          </h1>
          <p className="standfirst">{post.excerpt}</p>

          <div className="byline">
            <span className="av" aria-hidden="true" />
            <div className="who">
              <strong>{BUSINESS.personName}</strong>
              <span>Mainly</span>
            </div>
            <div className="when">
              <time dateTime={post.published_at}>
                {formatBlogDate(post.published_at)}
              </time>
              <br />
              {post.read_time}
            </div>
          </div>
        </div>
      </header>

      <div className="wrap">
        <div className="art-hero has-image">
          <Image
            src={heroImageUrl}
            alt={plainTitle}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1320px) 100vw, 1320px"
          />
          <span className="cap">
            {post.category} · {post.read_time}
          </span>
        </div>
      </div>

      <article className="wrap article">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <AuthorBox />
      </article>

      <section className="wrap">
        <RelatedPosts posts={relatedPosts} />
        <BlogPostCta />
      </section>
      </main>

      <Footer />
    </>
  );
}
