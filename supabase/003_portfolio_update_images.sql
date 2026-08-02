-- ============================================================
-- 003: Aktualizacja ścieżek screenshotów portfolio
-- Uruchom po 002_portfolio_seed.sql (gdy w bazie są placeholdery)
-- ============================================================

UPDATE portfolio_projects SET image_url = '/magia-podrozowania.png', updated_at = now()
WHERE slug = 'magia-podrozowania';

UPDATE portfolio_projects SET image_url = '/airset-platforma.png', updated_at = now()
WHERE slug = 'airset-platforma';

UPDATE portfolio_projects SET image_url = '/akademia-wiedzy.png', updated_at = now()
WHERE slug = 'akademia-wiedzy';

UPDATE portfolio_projects SET image_url = '/biblioteka-promptow2.png', updated_at = now()
WHERE slug = 'biblioteka-promptow';

UPDATE portfolio_projects SET image_url = '/musicpad.png', updated_at = now()
WHERE slug = 'music-pad';

UPDATE portfolio_projects SET image_url = '/lease1.png', updated_at = now()
WHERE slug = 'lease1-leasing';

UPDATE portfolio_projects SET image_url = '/bcsc.png', updated_at = now()
WHERE slug = 'bcsc-ksiegowosc';

UPDATE portfolio_projects SET image_url = '/rolety-generator.png', updated_at = now()
WHERE slug = 'generator-ofert-rolety';

UPDATE portfolio_projects SET image_url = '/faktury.png', updated_at = now()
WHERE slug = 'kreator-faktur';

UPDATE portfolio_projects SET image_url = '/audiogen.png', updated_at = now()
WHERE slug = 'audiogen';

UPDATE portfolio_projects SET image_url = '/kalkulator2.png', updated_at = now()
WHERE slug = 'kalkulator-gap';

UPDATE portfolio_projects SET image_url = '/cytomania1.png', updated_at = now()
WHERE slug = 'cytomania';

UPDATE portfolio_projects SET image_url = '/kulio2.png', updated_at = now()
WHERE slug = 'kulio-studio';

UPDATE portfolio_projects SET image_url = '/milei.png', updated_at = now()
WHERE slug = 'milei-coin';

UPDATE portfolio_projects SET image_url = '/prawkoczechy.png', updated_at = now()
WHERE slug = 'prawkoczechy';
