import type { MetadataRoute } from 'next'
import { supabase } from '../lib/supabase'
import { projects } from '../lib/projects'

const baseUrl = 'https://mainly.pl'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Pobierz opublikowane posty z Supabase
  let blogSlugs: string[] = []
  try {
    const { data } = await supabase
      .from('blog_posts')
      .select('slug, updated_at')
      .eq('published', true)
      .order('published_at', { ascending: false })
    blogSlugs = (data ?? []).map((p: { slug: string }) => p.slug)
  } catch {
    // Jeśli Supabase niedostępny podczas buildu, sitemap nadal działa
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projekty`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projekty/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
