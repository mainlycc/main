-- ============================================================
-- 013: Elomoto - pocięte screenshoty + widoczność na homepage
-- ============================================================

UPDATE portfolio_projects
SET
  image_url = '/elomoto-eco.png',
  fallback_image_url = '/elomoto-app.png',
  show_on_homepage = true,
  homepage_featured = false,
  homepage_tags = ARRAY['SPA', 'React', 'EV', '2025'],
  homepage_preview = 'featured',
  homepage_sort_order = 2,
  updated_at = now()
WHERE slug = 'elomoto-eco';
