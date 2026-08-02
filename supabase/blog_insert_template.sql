-- ============================================================
-- Szablon: dodawanie nowego wpisu na blogu
-- Skopiuj, uzupełnij pola i uruchom w Supabase SQL Editor
-- ============================================================

INSERT INTO blog_posts (
  slug,
  title,
  excerpt,
  content,
  author,
  published_at,
  category,
  tags,
  image_url,
  read_time,
  meta_description,
  keywords,
  published
) VALUES (
  'twoj-unikalny-slug-url',                    -- tylko małe litery, cyfry i myślniki
  'Tytuł artykułu - możesz użyć <em>akcentu</em> w nagłówku',
  'Krótki lead widoczny na liście bloga i pod tytułem artykułu (2-3 zdania).',
  '<p>Pierwszy akapit treści w HTML.</p>
<h2>Nagłówek sekcji</h2>
<p>Kolejny akapit. Używaj klas z blog.css: .stat-band, .pullquote, .callout, .idx.</p>',
  'Stanisław Blicharski',
  now(),                                       -- lub konkretna data: '2026-07-12 00:00:00+00'
  'Web Development',                           -- kategoria (wyświetlana w breadcrumb)
  ARRAY['SEO', 'Next.js', 'Konwersja'],        -- tagi
  '/twoj-obraz.jpg',                           -- NULL jeśli bez hero
  '7 min czytania',
  'Meta description pod Google (max ~160 znaków).',
  'fraza kluczowa 1, fraza kluczowa 2',
  false                                        -- true = opublikowany na /blog
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  author = EXCLUDED.author,
  published_at = EXCLUDED.published_at,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  image_url = EXCLUDED.image_url,
  read_time = EXCLUDED.read_time,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  updated_at = now();
