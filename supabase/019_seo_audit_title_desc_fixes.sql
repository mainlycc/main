-- Skrócenie tytułów i opisów meta przekraczających limity z audytu SEO (2026-09-10/11)
-- Tytuły blogowe: renderowany <title> = tytuł + " | Blog Mainly" (14 znaków), cel <= 60 znaków łącznie
-- Opisy meta: cel <= 160 znaków

update blog_posts set title = 'Jak stworzyć stronę internetową w 2025'
where slug = 'jak-stworzyc-nowoczesna-strone-internetowa-2025';

update blog_posts set title = '7 elementów strony, która sprzedaje'
where slug = 'strona-internetowa-ktora-sprzedaje-7-elementow';

update blog_posts set title = 'Strona internetowa dla dentysty w 2026'
where slug = 'strona-internetowa-dla-dentysty-2026';

update blog_posts set title = 'Jak wybrać firmę do budowy <em>aplikacji webowej</em>'
where slug = 'jak-wybrac-firme-do-stworzenia-aplikacji-webowej';

update blog_posts set title = 'Konfigurator 3D dla producenta <em>pergoli i altan</em>'
where slug = 'konfigurator-3d-dla-producenta-pergoli-i-altan';

update blog_posts set title = 'Next.js czy WordPress na stronę firmową?'
where slug = 'nextjs-czy-wordpress-strona-firmowa';

update blog_posts
set meta_description = 'Co powinna zawierać strona internetowa dla gabinetu stomatologicznego w 2026? Podstrony usług, rezerwacja online i schema markup - kompletny poradnik.'
where slug = 'strona-internetowa-dla-dentysty-2026';

update portfolio_projects
set description = 'Projekt własny: ponad 1000 gotowych promptów po polsku do ChatGPT, Claude, Gemini, Midjourney i Stable Diffusion. Wyszukiwarka i kategorie.'
where slug = 'biblioteka-promptow';
