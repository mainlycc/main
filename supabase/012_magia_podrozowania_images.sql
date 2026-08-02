-- ============================================================
-- 012: Magia Podróżowania - screenshoty oferty i rezerwacji
-- ============================================================

UPDATE portfolio_projects
SET
  image_url = '/magia-podrozowania-ui.png',
  fallback_image_url = '/magia-podrozowania-rezerwacja.png',
  updated_at = now()
WHERE slug = 'magia-podrozowania';
