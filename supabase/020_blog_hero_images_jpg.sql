-- Aktualizacja ścieżek do obrazów blog hero: PNG → JPG
-- Obrazy zostały skompresowane z ~900KB PNG do <200KB JPG (1200x630).
-- UWAGA: Nie aktualizujemy updated_at, żeby nie zmieniać dateModified w JSON-LD i lastmod w sitemapie.

UPDATE blog_posts SET image_url = '/blog/ile-kosztuje-aplikacja-webowa-na-zamowienie.jpg'
WHERE slug = 'ile-kosztuje-aplikacja-webowa-na-zamowienie';

UPDATE blog_posts SET image_url = '/blog/strona-internetowa-dla-dentysty-2026.jpg'
WHERE slug = 'strona-internetowa-dla-dentysty-2026';

UPDATE blog_posts SET image_url = '/blog/nextjs-czy-wordpress-strona-firmowa.jpg'
WHERE slug = 'nextjs-czy-wordpress-strona-firmowa';

UPDATE blog_posts SET image_url = '/blog/kazda-sekunda-ladowania-to-utracone-leady.jpg'
WHERE slug = 'kazda-sekunda-ladowania-to-utracone-leady';

UPDATE blog_posts SET image_url = '/blog/strona-internetowa-ktora-sprzedaje-7-elementow.jpg'
WHERE slug = 'strona-internetowa-ktora-sprzedaje-7-elementow';

UPDATE blog_posts SET image_url = '/blog/jak-przeniesc-firme-z-excela-do-systemu.jpg'
WHERE slug = 'jak-przeniesc-firme-z-excela-do-systemu';

UPDATE blog_posts SET image_url = '/blog/gotowy-crm-czy-system-na-zamowienie.jpg'
WHERE slug = 'gotowy-crm-czy-system-na-zamowienie';

UPDATE blog_posts SET image_url = '/blog/jak-wybrac-firme-do-stworzenia-aplikacji-webowej.jpg'
WHERE slug = 'jak-wybrac-firme-do-stworzenia-aplikacji-webowej';

UPDATE blog_posts SET image_url = '/blog/jak-stworzyc-nowoczesna-strone-internetowa-2025.jpg'
WHERE slug = 'jak-stworzyc-nowoczesna-strone-internetowa-2025';
