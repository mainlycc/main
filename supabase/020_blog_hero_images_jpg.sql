-- Aktualizacja ścieżek do obrazów blog hero: PNG → JPG
-- Obrazy zostały skompresowane z ~900KB PNG do <200KB JPG (1200x630).

UPDATE blog_posts SET image_url = '/blog/ile-kosztuje-aplikacja-webowa-na-zamowienie.jpg', updated_at = now()
WHERE slug = 'ile-kosztuje-aplikacja-webowa-na-zamowienie';

UPDATE blog_posts SET image_url = '/blog/strona-internetowa-dla-dentysty-2026.jpg', updated_at = now()
WHERE slug = 'strona-internetowa-dla-dentysty-2026';

UPDATE blog_posts SET image_url = '/blog/nextjs-czy-wordpress-strona-firmowa.jpg', updated_at = now()
WHERE slug = 'nextjs-czy-wordpress-strona-firmowa';

UPDATE blog_posts SET image_url = '/blog/kazda-sekunda-ladowania-to-utracone-leady.jpg', updated_at = now()
WHERE slug = 'kazda-sekunda-ladowania-to-utracone-leady';

UPDATE blog_posts SET image_url = '/blog/strona-internetowa-ktora-sprzedaje-7-elementow.jpg', updated_at = now()
WHERE slug = 'strona-internetowa-ktora-sprzedaje-7-elementow';

UPDATE blog_posts SET image_url = '/blog/jak-przeniesc-firme-z-excela-do-systemu.jpg', updated_at = now()
WHERE slug = 'jak-przeniesc-firme-z-excela-do-systemu';

UPDATE blog_posts SET image_url = '/blog/gotowy-crm-czy-system-na-zamowienie.jpg', updated_at = now()
WHERE slug = 'gotowy-crm-czy-system-na-zamowienie';

UPDATE blog_posts SET image_url = '/blog/jak-wybrac-firme-do-stworzenia-aplikacji-webowej.jpg', updated_at = now()
WHERE slug = 'jak-wybrac-firme-do-stworzenia-aplikacji-webowej';

UPDATE blog_posts SET image_url = '/blog/jak-stworzyc-nowoczesna-strone-internetowa-2025.jpg', updated_at = now()
WHERE slug = 'jak-stworzyc-nowoczesna-strone-internetowa-2025';
