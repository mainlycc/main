import type { MetadataRoute } from 'next'
import { SITE_URL } from '../lib/seo'

/**
 * Jedyne źródło robots.txt.
 * Wcześniej istniał równolegle statyczny public/robots.txt, który miał
 * pierwszeństwo i sprawiał, że ten plik był martwym kodem.
 *
 * Trasa /admin została usunięta z projektu, więc nie ma czego blokować.
 *
 * Boty modeli AI są celowo dopuszczone — cytowanie w ChatGPT, Perplexity
 * i Gemini jest dziś osobnym kanałem pozyskiwania klientów.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/kontakt/dziekujemy'],
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-User',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
