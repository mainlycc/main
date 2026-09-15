import Link from "next/link";
import Image from "next/image";
import { formatBlogDate } from "@/lib/blog";
import { blogHeroImageUrl } from "@/lib/blog-hero-content";
import { stripHtml } from "@/lib/seo";
import type { BlogPost } from "@/lib/supabase";

export function BlogTitle({ title }: { title: string }) {
  return <>{stripHtml(title)}</>;
}

type BlogPostCardProps = {
  post: Pick<
    BlogPost,
    | "slug"
    | "title"
    | "excerpt"
    | "category"
    | "read_time"
    | "image_url"
    | "published_at"
  >;
  variant?: 1 | 2 | 3;
};

export function BlogPostCard({ post, variant = 1 }: BlogPostCardProps) {
  const plainTitle = stripHtml(post.title);
  const heroImageUrl = post.image_url ?? blogHeroImageUrl(post.slug);

  return (
    <Link href={`/blog/${post.slug}`} className={`rel r${variant}`}>
      <div className="art">
        <Image
          src={heroImageUrl}
          alt={plainTitle}
          fill
          className="object-cover"
          sizes="(max-width: 880px) 100vw, 33vw"
        />
      </div>
      <div className="body">
        <div className="meta">
          {post.category} · {post.read_time}
          {post.published_at ? (
            <>
              {" "}
              ·{" "}
              <time dateTime={post.published_at}>
                {formatBlogDate(post.published_at)}
              </time>
            </>
          ) : null}
        </div>
        <h3>
          <BlogTitle title={post.title} />
        </h3>
        {post.excerpt ? <p className="excerpt">{post.excerpt}</p> : null}
      </div>
    </Link>
  );
}

type BlogPostCtaProps = {
  href?: string;
};

export function BlogPostCta({ href = "/kontakt" }: BlogPostCtaProps) {
  return (
    <div className="post-cta">
      <h3>
        Sprawdźmy, ile <em>kosztuje Cię</em> wolna strona.
      </h3>
      <p>
        Bezpłatny audyt prędkości i konwersji. Pokażemy konkretne liczby i
        powiemy, co poprawić w pierwszej kolejności.
      </p>
      <Link href={href} className="btn-primary">
        Umów rozmowę <span className="arr">↗</span>
      </Link>
    </div>
  );
}

type RelatedPostsProps = {
  posts: Pick<
    BlogPost,
    | "slug"
    | "title"
    | "excerpt"
    | "category"
    | "read_time"
    | "image_url"
    | "published_at"
  >[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="related">
      <div className="sec-label">
        <span className="num">→</span> Czytaj dalej
      </div>
      <div className="rel-grid">
        {posts.map((post, index) => (
          <BlogPostCard
            key={post.slug}
            post={post}
            variant={((index % 3) + 1) as 1 | 2 | 3}
          />
        ))}
      </div>
    </section>
  );
}
