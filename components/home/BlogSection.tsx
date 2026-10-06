import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPublishedBlogPosts, type BlogPostListItem } from "@/lib/blog-posts";
import { formatBlogDate } from "@/lib/blog";

export default async function BlogSection() {
  const posts = await getPublishedBlogPosts();
  const latestPosts = posts.slice(0, 3);

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section className="wrap page-section" id="blog">
      <div className="sec-label">
        <span className="num">Blog</span>
        <span>Wiedza i praktyka</span>
      </div>

      <h2 className="sec-title" style={{ fontSize: 36, marginBottom: 16 }}>
        Najnowsze artykuły
      </h2>
      <p className="sec-lead" style={{ marginBottom: 40 }}>
        Praktyczne porady o stronach, aplikacjach i systemach dla firm — bez
        marketingowego bełkotu.
      </p>

      <div className="blog-grid">
        {latestPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Link href="/blog" className="btn-ghost">
          Wszystkie artykuły
          <ArrowRight size={18} strokeWidth={2} className="arr" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: BlogPostListItem }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-meta">
        <span className="blog-card-category">{post.category}</span>
        <span className="blog-card-time">{post.read_time}</span>
      </div>
      <h3 className="blog-card-title">{stripHtml(post.title)}</h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-footer">
        <time dateTime={post.published_at}>
          {formatBlogDate(post.published_at)}
        </time>
        <span className="arr">Czytaj →</span>
      </div>
    </Link>
  );
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, "").trim();
}
