-- 022: Ujednolicenie ceny w krótkiej odpowiedzi artykułu (audyt SEO 17.10.2026, zadanie #3)
-- Reszta serwisu podaje próg 9 900 zł, artykuł mówił „od 10 000 zł”.
UPDATE blog_posts
SET content = replace(
      content,
      'kosztuje w Polsce od 10 000 do 80 000 zł netto',
      'kosztuje u mnie od 9 900 do 80 000 zł netto'
    ),
    updated_at = now()
WHERE slug = 'ile-kosztuje-aplikacja-webowa-na-zamowienie'
  AND content LIKE '%kosztuje w Polsce od 10 000 do 80 000 zł netto%';

-- Audyt 17.10.2026, zadanie #10: artykuł jest jedyną stroną docelową dla „ile kosztuje aplikacja webowa”.
-- SERP to poradniki z rokiem i widełkami w tytule.
UPDATE blog_posts
SET title = 'Ile kosztuje <em>aplikacja webowa</em> w 2026? Widełki cen',
    updated_at = now()
WHERE slug = 'ile-kosztuje-aplikacja-webowa-na-zamowienie';
