import type { MetadataRoute } from 'next'
import { getSupabase } from '../lib/supabase'
import { industries } from '../lib/industries'
import { projects } from '../lib/projects'
import { services } from '../lib/services'
import { SITE_URL } from '../lib/seo'

type BlogSitemapPost = {
  slug: string
  updated_at: string
  published_at: string
}

export const revalidate = 3600

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
      blogPosts = (data ?? []) as BlogSitemapPost[]
    } catch {
      // Jeśli Supabase niedostępny podczas buildu, sitemap nadal działa
    }
  }

  const latestBlogDate = blogPosts[0]?.published_at
    ? new Date(blogPosts[0].published_at)
    : undefined

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1.0 },
    {
      url: `${SITE_URL}/uslugi`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/branze`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/cennik`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/proces`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/o-mnie`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/tworzenie-stron-internetowych-warszawa`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projekty`,
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
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/opinie`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/polityka-prywatnosci`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/uslugi/${service.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${SITE_URL}/branze/${industry.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projekty/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
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
