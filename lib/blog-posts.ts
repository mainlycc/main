import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { BlogPost } from "./supabase";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createClient(supabaseUrl, supabaseAnonKey);
}

export type BlogPostInput = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  published_at?: string;
  category?: string;
  tags?: string[];
  image_url?: string | null;
  read_time?: string;
  meta_description?: string | null;
  keywords?: string | null;
  published?: boolean;
};

export type BlogPostListItem = Pick<
  BlogPost,
  | "id"
  | "slug"
  | "title"
  | "excerpt"
  | "author"
  | "published_at"
  | "read_time"
  | "category"
  | "image_url"
  | "tags"
  | "published"
>;

const LIST_COLUMNS =
  "id,slug,title,excerpt,author,published_at,read_time,category,image_url,tags,published";

export async function getPublishedBlogPosts(): Promise<BlogPostListItem[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select(LIST_COLUMNS)
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data as BlogPostListItem[];
}

export async function getAllBlogPosts(): Promise<BlogPostListItem[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select(LIST_COLUMNS)
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data as BlogPostListItem[];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error || !data) return null;
  return data as BlogPost;
}

export async function createBlogPost(input: BlogPostInput): Promise<BlogPost | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      slug: input.slug,
      title: input.title,
      excerpt: input.excerpt,
      content: input.content,
      author: input.author ?? "Stanisław Blicharski",
      published_at: input.published_at,
      category: input.category ?? "Ogólne",
      tags: input.tags ?? [],
      image_url: input.image_url ?? null,
      read_time: input.read_time ?? "5 min czytania",
      meta_description: input.meta_description ?? null,
      keywords: input.keywords ?? null,
      published: input.published ?? false,
    })
    .select("*")
    .single();

  if (error || !data) return null;
  return data as BlogPost;
}

export async function updateBlogPost(
  slug: string,
  input: Partial<BlogPostInput>
): Promise<BlogPost | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blog_posts")
    .update(input)
    .eq("slug", slug)
    .select("*")
    .single();

  if (error || !data) return null;
  return data as BlogPost;
}

export async function deleteBlogPost(slug: string): Promise<boolean> {
  const supabase = getSupabase();
  if (!supabase) return false;

  const { error } = await supabase.from("blog_posts").delete().eq("slug", slug);
  return !error;
}

export function slugifyBlogTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
