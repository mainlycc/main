import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mainly.pl'
  
  const routes = [
    '',
    '/kontakt',
    '/projekty',
    '/polityka-prywatnosci',
  ]

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : route === '/polityka-prywatnosci' ? 0.5 : 0.8,
    })),
  ]
} 