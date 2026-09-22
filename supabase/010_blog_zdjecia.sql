-- ============================================================
--  Zdjęcia dla artykułów na blogu — ustawienie image_url
-- ============================================================
--
--  JAK UŻYWAĆ:
--  1. Wgraj pliki graficzne (patrz nazwy poniżej) do katalogu mainly/public/
--  2. Zrób commit i push  →  Vercel przebuduje stronę
--  3. Dopiero wtedy uruchom ten plik w SQL Editorze w Supabase
--
--  Kolejność ma znaczenie: jeśli uruchomisz SQL przed wgraniem plików,
--  artykuły przez chwilę będą miały odnośniki do nieistniejących obrazów.
--
--  Każdą sekcję możesz uruchomić osobno — nie musisz mieć od razu
--  wszystkich sześciu zdjęć. Zakomentuj (--) te, których jeszcze nie masz.
-- ============================================================


-- ---- 1. Jev / model decyzyjny --------------------------------
-- Zdjęcie: zwrotnica kolejowa ALBO sortownia listów (wybierz jedno)
UPDATE blog_posts
SET image_url = '/blog/jev-zwrotnica-kolejowa.jpg'
WHERE slug = 'jev-typesafe-model-decyzyjny-co-oznacza-dla-firm';


-- ---- 2. Konfigurator 3D dla producenta pergoli ---------------
-- Pomysł: trzy próbki profilu aluminiowego (antracyt, biały, drewnopodobny)
-- ułożone obok siebie, widok z góry. Albo ta sama pergola w dzień i o zmierzchu.
UPDATE blog_posts
SET image_url = '/blog/konfigurator-probki-profili.jpg'
WHERE slug = 'konfigurator-3d-dla-producenta-pergoli-i-altan';


-- ---- 3. Ile kosztuje aplikacja webowa ------------------------
-- Pomysł: centymetr krawiecki, kreda i papierowa metka na ciemnej tkaninie
UPDATE blog_posts
SET image_url = '/blog/ile-kosztuje-aplikacja-krawiectwo.jpg'
WHERE slug = 'ile-kosztuje-aplikacja-webowa-na-zamowienie';


-- ---- 4. Jak przenieść firmę z Excela do systemu --------------
-- Pomysł: człowiek za stosem wydruków — widać tylko czubek głowy i dłonie
UPDATE blog_posts
SET image_url = '/blog/excel-stos-wydrukow.jpg'
WHERE slug = 'jak-przeniesc-firme-z-excela-do-systemu';


-- ---- 5. Gotowy CRM czy system na zamówienie ------------------
-- Pomysł: marynarka z sieciówki, która wyraźnie nie leży, odbicie w lustrze
UPDATE blog_posts
SET image_url = '/blog/crm-marynarka-nie-w-rozmiarze.jpg'
WHERE slug = 'gotowy-crm-czy-system-na-zamowienie';


-- ---- 6. Jak wybrać firmę do stworzenia aplikacji -------------
-- Pomysł: dłoń z długopisem zawieszona nad linią podpisu
UPDATE blog_posts
SET image_url = '/blog/wybor-firmy-chwila-przed-podpisem.jpg'
WHERE slug = 'jak-wybrac-firme-do-stworzenia-aplikacji-webowej';


-- ============================================================
--  WERYFIKACJA — uruchom po wszystkim, żeby zobaczyć stan
-- ============================================================
SELECT
  slug,
  CASE WHEN image_url IS NULL THEN 'BRAK ZDJĘCIA' ELSE image_url END AS zdjecie,
  published_at::date AS data
FROM blog_posts
WHERE published = true
ORDER BY published_at DESC;


-- ============================================================
--  WARIANT ALTERNATYWNY: zdjęcia w Supabase Storage
-- ============================================================
--  Jeśli wolisz nie wrzucać grafik do repozytorium (i nie robić
--  deployu przy każdym nowym artykule), użyj Storage:
--
--  1. Supabase → Storage → New bucket → nazwa: blog → zaznacz "Public bucket"
--  2. Wgraj pliki przez interfejs
--  3. Kliknij plik → Copy URL
--  4. Wklej pełny adres zamiast ścieżki lokalnej, np.:
--
--     UPDATE blog_posts
--     SET image_url = 'https://TWOJ-PROJEKT.supabase.co/storage/v1/object/public/blog/jev.jpg'
--     WHERE slug = 'jev-typesafe-model-decyzyjny-co-oznacza-dla-firm';
--
--  Działa bez zmian w kodzie — next.config.ts ma już włączone
--  zdalne źródła obrazów. Zaleta: nowe zdjęcie = sam UPDATE, bez pushu.
-- ============================================================
