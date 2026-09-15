-- Ustawia prawdziwe miniatury/hero dla artykułów bloga (zdjęcia symboliczne
-- wg content/blog-miniatury-brief.md), zamiast dotychczasowego fallbacku
-- /blog-hero/[slug] (ciemna plansza z liczbą/hasłem).
-- Pliki leżą w public/blog/<slug>.png.

UPDATE blog_posts SET image_url = '/blog/ile-kosztuje-aplikacja-webowa-na-zamowienie.png', updated_at = now()
  WHERE slug = 'ile-kosztuje-aplikacja-webowa-na-zamowienie';

UPDATE blog_posts SET image_url = '/blog/strona-internetowa-dla-dentysty-2026.png', updated_at = now()
  WHERE slug = 'strona-internetowa-dla-dentysty-2026';

UPDATE blog_posts SET image_url = '/blog/nextjs-czy-wordpress-strona-firmowa.png', updated_at = now()
  WHERE slug = 'nextjs-czy-wordpress-strona-firmowa';

UPDATE blog_posts SET image_url = '/blog/kazda-sekunda-ladowania-to-utracone-leady.png', updated_at = now()
  WHERE slug = 'kazda-sekunda-ladowania-to-utracone-leady';

UPDATE blog_posts SET image_url = '/blog/strona-internetowa-ktora-sprzedaje-7-elementow.png', updated_at = now()
  WHERE slug = 'strona-internetowa-ktora-sprzedaje-7-elementow';

UPDATE blog_posts SET image_url = '/blog/jak-przeniesc-firme-z-excela-do-systemu.png', updated_at = now()
  WHERE slug = 'jak-przeniesc-firme-z-excela-do-systemu';

UPDATE blog_posts SET image_url = '/blog/gotowy-crm-czy-system-na-zamowienie.png', updated_at = now()
  WHERE slug = 'gotowy-crm-czy-system-na-zamowienie';

UPDATE blog_posts SET image_url = '/blog/jak-wybrac-firme-do-stworzenia-aplikacji-webowej.png', updated_at = now()
  WHERE slug = 'jak-wybrac-firme-do-stworzenia-aplikacji-webowej';

UPDATE blog_posts SET image_url = '/blog/jak-stworzyc-nowoczesna-strone-internetowa-2025.png', updated_at = now()
  WHERE slug = 'jak-stworzyc-nowoczesna-strone-internetowa-2025';

-- konfigurator-3d-dla-producenta-pergoli-i-altan celowo pominięty: wg briefu
-- to jedyny wyjątek, potrzebne jest prawdziwe zdjęcie pergoli/altany od
-- klienta JK Term, nie wygenerowane.
