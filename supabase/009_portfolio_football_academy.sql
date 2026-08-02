-- ============================================================
-- 009: Football Academy System - nowy projekt w portfolio
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
  19,
  'football-academy',
  'Football Academy System',
  'System zarządzania akademią piłkarską z przeglądarką modeli 3D, rolami użytkowników i eksportem zasobów - GLB, PNG, SVG.',
  'Football Academy System to wewnętrzna aplikacja webowa dla akademii piłkarskiej Football Academy. Centrum produktu stanowi interaktywna przeglądarka modeli 3D - galeria osiągnięć i materiałów brandingowych (np. otwarcie oddziału Football Baby) z kontrolą obrotu i oświetlenia oraz eksportem do GLB, PNG i SVG.

System obsługuje trzy role: Zawodnik, Trener i Manager - każda z własnym zakresem uprawnień. Interfejs obejmuje przegląd zasobów, listę oraz panel zarządzania z możliwością usuwania pozycji. Dark UI w stylu dashboardu gamingowego.',
  '/football-academy-ui.png',
  '/football-academy-ui.png',
  'Football Academy',
  2026,
  '',
  ARRAY['Next.js', 'TypeScript', 'Three.js', 'React Three Fiber', 'Tailwind CSS'],
  ARRAY[
    'Interaktywna przeglądarka modeli 3D w przeglądarce',
    'Kontrola obrotu i oświetlenia sceny',
    'Eksport zasobów: GLB, PNG, SVG',
    'Role: Zawodnik, Trener, Manager',
    'Przegląd, lista i panel zarządzania zasobami',
    'Galeria osiągnięć i materiałów brandingowych akademii'
  ],
  true,
  true,
  ARRAY['3D', 'Next.js', 'Three.js', '2026'],
  'featured',
  0,
  19,
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
