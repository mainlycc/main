-- ============================================================
-- 011: Football Academy - nowa ścieżka obrazu (bez przycinania)
-- ============================================================

UPDATE portfolio_projects
SET
  image_url = '/football-academy-ui.png',
  fallback_image_url = '/football-academy-ui.png',
  updated_at = now()
WHERE slug = 'football-academy';
