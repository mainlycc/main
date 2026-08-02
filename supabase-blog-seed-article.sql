-- PRZENIESIONO do supabase/006_blog_seed.sql (artykuł o czasie ładowania)

-- Artykuł z designu Blog Post (Standalone).html
INSERT INTO blog_posts (
  slug, title, excerpt, category, author, published_at,
  read_time, tags, image_url, meta_description, keywords, published,
  content
) VALUES (
  'kazda-sekunda-ladowania-to-utracone-leady',
  'Każda sekunda ładowania to <em>utracone leady</em>',
  'Przeanalizowałem 40 stron moich klientów sprzed redesignu. Mediana czasu ładowania: 5,8 sekundy. Po migracji na mój stack - 0,9 sekundy. Oto co ten jeden parametr zrobił z liczbą zapytań.',
  'Konwersja',
  'Stanisław',
  '2026-05-28 00:00:00+00',
  '9 min czytania',
  ARRAY['Konwersja', 'Wydajność', 'Core Web Vitals', 'Next.js'],
  NULL,
  'Każda sekunda ładowania to utracone leady. Jak prędkość strony wpływa na konwersję - dane z 40 realnych projektów Mainly.',
  'szybkość strony, czas ładowania, konwersja, Core Web Vitals, LCP, wydajność strony internetowej',
  true,
  '<p><strong>Zacznijmy od liczby, która boli.</strong> Według danych Google, gdy czas ładowania strony rośnie z 1 do 3 sekund, prawdopodobieństwo, że użytkownik ją opuści, rośnie o 32%. Przy 6 sekundach - o ponad 100%. To nie jest abstrakcja dla działu IT. To są konkretni ludzie, którzy mieli zostawić zapytanie, ale zamknęli kartę, zanim cokolwiek się załadowało.</p>
<p>Kiedy zaczynaliśmy audyty u nowych klientów, postanowiliśmy zmierzyć to u siebie - na realnych projektach, które przejmowaliśmy do redesignu. Wynik nas nie zaskoczył, ale i tak zrobił wrażenie.</p>
<div class="stat-band">
  <div class="s"><div class="v">5,8s</div><div class="l">Mediana czasu ładowania przed redesignem (40 stron)</div></div>
  <div class="s"><div class="v">0,9s</div><div class="l">Mediana po migracji na nasz stack</div></div>
  <div class="s"><div class="v">+143%</div><div class="l">Średni wzrost liczby zapytań w 60 dni po starcie</div></div>
</div>
<h2><span class="idx">01 / Diagnoza</span>Skąd się bierze te 6 sekund?</h2>
<p>W zdecydowanej większości przypadków winowajca nie jest jeden. To suma drobnych zaniedbań, które razem tworzą ścianę. Oto co najczęściej spowalniało strony, które przejmowaliśmy:</p>
<ul>
  <li><strong>Nieoptymalizowane obrazy.</strong> Zdjęcia hero w formacie 4000 px szerokości, serwowane bez kompresji i bez nowoczesnych formatów (WebP/AVIF).</li>
  <li><strong>Ciężkie buildery.</strong> Strony na page-builderach ładowały po 1,5 MB samego CSS i JS, zanim pokazały pierwszy piksel treści.</li>
  <li><strong>Brak lazy-loadingu.</strong> Wszystko ładowane od razu, łącznie z trzecim ekranem, którego 70% odwiedzających nigdy nie zobaczy.</li>
  <li><strong>Pluginy widmo.</strong> Skrypty do funkcji, które dawno usunięto z designu, ale nikt nie wyczyścił ich z kodu.</li>
</ul>
<div class="pullquote">
  <p>Prędkość to nie cecha techniczna. To pierwsze, niewypowiedziane wrażenie o tym, jak poważnie traktujesz swojego klienta.</p>
</div>
<h2><span class="idx">02 / Podejście</span>Co realnie zmienia obraz</h2>
<p>Nie ma jednej magicznej poprawki. Jest dyscyplina na każdym etapie. Przy każdym wdrożeniu trzymamy się tej samej kolejności - od rzeczy o największym wpływie do detali.</p>
<h3>Najpierw: obrazy i fonty</h3>
<p>To zwykle 70% problemu. Konwertujemy obrazy do AVIF z fallbackiem, definiujemy precyzyjne rozmiary, by przeglądarka nie musiała przeliczać układu, i ładujemy fonty z <code>font-display: swap</code>, żeby tekst był widoczny natychmiast.</p>
<h3>Potem: mniej kodu, nie więcej</h3>
<p>Budujemy w Next.js z renderowaniem po stronie serwera. Użytkownik dostaje gotowy HTML, a JavaScript doładowuje się w tle. Pierwszy ekran jest widoczny, zanim cokolwiek innego zdąży się wczytać.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"></path></svg>
  </span>
  <div class="t">
    <b>Szybki test, który możesz zrobić teraz</b>
    <p>Wpisz adres swojej strony w PageSpeed Insights i spójrz na metrykę LCP. Jeśli przekracza 2,5 sekundy - tracisz część odwiedzających, zanim zobaczą Twoją ofertę.</p>
  </div>
</div>
<h2><span class="idx">03 / Wynik</span>Co to dało klientom</h2>
<p>Liczby z początku artykułu nie wzięły się z laboratorium. To realne projekty. Sklep kosmetyczny, który przejęliśmy z czasem ładowania 6,2 s, po redesignie schodzi do 0,8 s - i w pierwszym miesiącu odnotował <strong>trzykrotnie więcej zapytań</strong> przez formularz. Nie zmieniliśmy oferty ani cen. Zmieniliśmy to, ile osób w ogóle do niej dotarło.</p>
<p>Jeśli czytasz to i podejrzewasz, że Twoja strona też jest po „złej" stronie tej statystyki - prawdopodobnie masz rację. Dobra wiadomość: to jeden z najszybciej zwracających się obszarów, w jakie można zainwestować. <a href="/kontakt" class="link">Zróbmy bezpłatny audyt prędkości</a> i pokażemy Ci konkretne liczby dla Twojej strony.</p>'
)
ON CONFLICT (slug) DO NOTHING;
