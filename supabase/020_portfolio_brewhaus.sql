-- ============================================================
-- 020: Brewhaus - nowy projekt w portfolio
-- ============================================================

INSERT INTO portfolio_projects (
  legacy_id,
  slug,
  name,
  description,
  full_description,
  image_url,
  fallback_image_url,
  client,
  year,
  project_url,
  technologies,
  features,
  show_on_homepage,
  homepage_featured,
  homepage_tags,
  homepage_preview,
  homepage_sort_order,
  sort_order,
  published
) VALUES (
  20,
  'brewhaus',
  'Brewhaus',
  'Butikowy sklep z ekspresami kolbowymi: filtry parametrów, porównywarka, poradniki SEO i płatności Paynow.',
  'Brewhaus to specjalistyczny sklep internetowy z ekspresami kolbowymi do espresso. Katalog obejmuje 10 modeli (De''Longhi, Sage, Breville, Gaggia, Lelit, Rancilio) z filtrami po średnicy kolby, młynku, systemie grzewczym, spienianiu i poziomie zaawansowania.

Sklep ma porównywarkę parametrów, ulubione, koszyk z Paynow, podstrony kategorii pod frazy zakupowe, poradniki baristyczne oraz słownik z FAQ. SPA na React i Vite, backend Express do płatności, wdrożenie na Vercel.',
  '/projekty/brewhaus/hero.jpg',
  '/projekty/brewhaus/proces-katalog.jpg',
  'Brewhaus',
  2026,
  'https://www.brewhausshop.pl/',
  ARRAY['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'Paynow', 'Motion'],
  ARRAY[
    'Katalog 10 ekspresów kolbowych z kartami porównawczymi',
    'Filtry: kolba, młynek, grzanie, mleko, marka, PID, szerokość',
    'Porównywarka modeli i lista ulubionych',
    'Koszyk i płatności Paynow (API serwerowe)',
    '5 podstron kategorii i 4 poradniki SEO z JSON-LD',
    'Słownik baristy i FAQ'
  ],
  true,
  false,
  ARRAY['Sklep', 'React', 'SEO', '2026'],
  'featured',
  1,
  20,
  true
)
ON CONFLICT (slug) DO UPDATE SET
  legacy_id = EXCLUDED.legacy_id,
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  full_description = EXCLUDED.full_description,
  image_url = EXCLUDED.image_url,
  fallback_image_url = EXCLUDED.fallback_image_url,
  client = EXCLUDED.client,
  year = EXCLUDED.year,
  project_url = EXCLUDED.project_url,
  technologies = EXCLUDED.technologies,
  features = EXCLUDED.features,
  show_on_homepage = EXCLUDED.show_on_homepage,
  homepage_featured = EXCLUDED.homepage_featured,
  homepage_tags = EXCLUDED.homepage_tags,
  homepage_preview = EXCLUDED.homepage_preview,
  homepage_sort_order = EXCLUDED.homepage_sort_order,
  sort_order = EXCLUDED.sort_order,
  published = EXCLUDED.published,
  updated_at = now();
