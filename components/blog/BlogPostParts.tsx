import Link from "next/link";
import Image from "next/image";
import { formatBlogDate, splitTitleEmphasis } from "@/lib/blog";
import { stripHtml } from "@/lib/seo";
import type { BlogPost } from "@/lib/supabase";

export function BlogTitle({ title }: { title: string }) {
  const parts = splitTitleEmphasis(title);
  if (!parts) return <>{stripHtml(title)}</>;

  return (
    <>
      {parts.before}
      <em>{parts.emphasis}</em>
      {parts.after}
    </>
  );
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

  return (
    <Link href={`/blog/${post.slug}`} className={`rel r${variant}`}>
      <div className="art">
        {post.image_url ? (
          <Image
            src={post.image_url}
            alt={plainTitle}
            fill
            className="object-cover"
            sizes="(max-width: 880px) 100vw, 33vw"
          />
        ) : (
          <div className="glow" />
        )}
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
        <h4>
          <BlogTitle title={post.title} />
        </h4>
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
        Umów bezpłatny audyt <span className="arr">↗</span>
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
