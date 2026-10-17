import type { MetadataRoute } from 'next'
import { getSupabase } from '../lib/supabase'
import { industries } from '../lib/industries'
import { projects } from '../lib/projects'
import { services } from '../lib/services'
import { SITE_URL } from '../lib/seo'
import { STATIC_BLOG_POSTS } from '../lib/static-blog-posts'
import lastmod from '../lib/lastmod.generated.json'

type BlogSitemapPost = {
  slug: string
  updated_at?: string
  published_at: string
}

export const revalidate = 3600

// Daty z `node scripts/build-lastmod.mjs` (ostatni commit zmieniający treść strony).
const LASTMOD = lastmod as Record<string, string>

function lastModified(key: string) {
  const date = LASTMOD[key]
  return date ? { lastModified: new Date(date) } : {}
}

/**
 * updated_at artykułu, chyba że to znacznik zbiorczej aktualizacji
 * (ten sam co do milisekundy w kilku wpisach) — wtedy data publikacji.
 */
function blogLastModified(posts: BlogSitemapPost[]) {
  const counts = new Map<string, number>()
  for (const post of posts) {
    if (post.updated_at) counts.set(post.updated_at, (counts.get(post.updated_at) ?? 0) + 1)
  }
  return (post: BlogSitemapPost) => {
    const updated =
      post.updated_at && (counts.get(post.updated_at) ?? 0) === 1 ? post.updated_at : undefined
    const date = updated && updated > post.published_at ? updated : post.published_at
    return date ? { lastModified: new Date(date) } : {}
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: BlogSitemapPost[] = []
  const supabase = getSupabase()
  if (supabase) {
    try {
      const { data } = await supabase
        .from('blog_posts')
        .select('slug, updated_at, published_at')
        .eq('published', true)
        .order('published_at', { ascending: false })
      if (data && data.length > 0) {
        blogPosts = data as BlogSitemapPost[]
      }
    } catch {
      // Jeśli Supabase niedostępny podczas buildu, użyj statycznych danych
    }
  }

  if (blogPosts.length === 0) {
    blogPosts = STATIC_BLOG_POSTS.map((post) => ({
      slug: post.slug,
      published_at: post.published_at,
    }))
  }

  const latestBlogDate = blogPosts[0]?.published_at
    ? new Date(blogPosts[0].published_at)
    : undefined

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, ...lastModified('/'), changeFrequency: 'monthly', priority: 1.0 },
    {
      url: `${SITE_URL}/uslugi`,
      ...lastModified('/uslugi'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/branze`,
      ...lastModified('/branze'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/cennik`,
      ...lastModified('/cennik'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/proces`,
      ...lastModified('/proces'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/o-mnie`,
      ...lastModified('/o-mnie'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/tworzenie-stron-internetowych-warszawa`,
      ...lastModified('/tworzenie-stron-internetowych-warszawa'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/aplikacje-webowe-warszawa`,
      ...lastModified('/aplikacje-webowe-warszawa'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projekty`,
      ...lastModified('/projekty'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      ...(latestBlogDate && { lastModified: latestBlogDate }),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/kontakt`,
      ...lastModified('/kontakt'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/opinie`,
      ...lastModified('/opinie'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/polityka-prywatnosci`,
      ...lastModified('/polityka-prywatnosci'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/uslugi/${service.slug}`,
    ...lastModified('/uslugi/*'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${SITE_URL}/branze/${industry.slug}`,
    ...lastModified('/branze/*'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projekty/${project.slug}`,
    ...lastModified(`/projekty/${project.slug}`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPostLastModified = blogLastModified(blogPosts)
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    ...blogPostLastModified(post),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ]
}
