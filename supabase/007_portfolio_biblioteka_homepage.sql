-- Włącza Bibliotekę Promptów na stronie głównej (sekcja „Wybrane prace”)
UPDATE portfolio_projects
SET
  show_on_homepage = true,
  homepage_tags = ARRAY['AI', 'Next.js', '2025'],
  homepage_preview = 'featured',
  homepage_sort_order = 4,
  fallback_image_url = '/bibliotekapromptow.png',
  updated_at = now()
WHERE slug = 'biblioteka-promptow';
