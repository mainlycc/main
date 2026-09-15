# Brief graficzny: miniatury/hero artykułów na blogu

Stan na 2026-09-15: **9 z 10 gotowe.** Wygenerowane zdjęcia (wariant
symboliczny/alegoryczny z tabeli niżej) leżą w `public/blog/<slug>.png`,
SQL do wgrania `image_url` w `supabase/019_blog_hero_images.sql` (jeszcze
nie uruchomiony w Supabase). Jedyny brakujący: `konfigurator-3d-dla-producenta-pergoli-i-altan`
— czeka na prawdziwe zdjęcie pergoli/altany od klienta JK Term.

Poprzednia wersja (commit `cf50bba`) generowała jeden uniwersalny szablon
tekstowy (`.art-hero` / `/blog-hero/[slug]`, ciemny gradient ember + liczba
z artykułu) identyczny dla każdego wpisu — to NIE jest to, o co chodziło w
tym briefie. Ten endpoint zostaje jako fallback tylko dla przyszłych
artykułów bez ustawionego `image_url`, patrz `app/blog/[slug]/page.tsx`.

## Zasada

Miniatura/hero ma być inna niż zdjęcia wewnątrz artykułu (te będą realnymi
zrzutami ekranu z projektów, patrz sekcja na dole). Miniatura ma być jedną
wyrazistą rzeczą, czytelną nawet w małym kafelku na `/blog`.

Zero AI slopu:
- Żadnych wygenerowanych twarzy ani ludzi.
- Żadnych renderów laptopa z cieniem i odbiciem.
- Żadnych generycznych stockowych "biznes" zdjęć (uścisk dłoni, wskazywanie na ekran).
- Wariant typograficzny: spójny z istniejącą stylistyką strony (ciemne tło,
  gradient ember, duży kursywny display-font jak w `.stat-band .v`).
- Wariant symboliczny: prawdziwe, fizyczne przedmioty do sfotografowania
  telefonem, nie generowane.

Do każdego artykułu wybrać JEDEN z dwóch pomysłów (albo własny) — obie
kolumny zostają jako opcje.

## Tabela pomysłów

| Artykuł (slug) | Typograficzna | Alegoryczna / symboliczna |
|---|---|---|
| `nextjs-czy-wordpress-strona-firmowa` | wielkie „0" (0 wtyczek do aktualizowania) | kłódka z wieloma kluczykami na kółku (WordPress, każdy klucz to jedna wtyczka) obok jednego nowoczesnego zamka szyfrowego (Next.js) |
| `kazda-sekunda-ladowania-to-utracone-leady` | „0,9s" vs przekreślone „5,8s" | deska rozdzielcza samochodu z prędkościomierzem, albo biegacz w blokach startowych |
| `ile-kosztuje-aplikacja-webowa-na-zamowienie` | widełki „15-30 tys." | waga szalkowa (klasyczna, metalowa) — dosłowne „ważenie" kosztu i wartości |
| `strona-internetowa-dla-dentysty-2026` | „8 sek" | klepsydra z przesypującym się piaskiem — okno decyzyjne pacjenta |
| `strona-internetowa-ktora-sprzedaje-7-elementow` | wielka cyfra „7" | otwarta skrzynka narzędziowa z konkretnymi, dobranymi narzędziami |
| `jak-przeniesc-firme-z-excela-do-systemu` | abstrakcyjna siatka cienkich linii | stos papierowych segregatorów/teczek na półce, ciasno upchanych |
| `gotowy-crm-czy-system-na-zamowienie` | rozwidlające się linie (motyw wyboru) | garnitur z wieszaka (konfekcja) obok krawieckiej miary i szpilek (szyty na miarę) |
| `jak-wybrac-firme-do-stworzenia-aplikacji-webowej` | checklist z kropek/ptaszków | lupa położona na umowie/dokumencie |
| `jak-stworzyc-nowoczesna-strone-internetowa-2025` | wielkie „2025" | poziomica na drewnianej desce |
| `konfigurator-3d-dla-producenta-pergoli-i-altan` | nie dotyczy | realne zdjęcie fizycznej pergoli/altany od klienta JK Term — jedyny wyjątek, tu prawdziwy produkt bije każdą metaforę |

## Osobno: zdjęcia WEWNĄTRZ artykułów (nie miniatury)

To realne zrzuty ekranu z istniejących projektów, część już jest na dysku:

- **Gotowy CRM czy system na zamówienie** → zrzut panelu Magia Podróżowania
  (`public/projekty/magia-podrozowania/hero.jpg`, już istnieje)
- **Jak przenieść firmę z Excela do systemu** → zrzut panelu BCSC albo Lease1
  (już istnieją w `public/projekty/`)
- **Każda sekunda ładowania to utracone leady** → realny zrzut PageSpeed
  Insights / Lighthouse dla jednego z projektów (np. bcsc.pl), zielone wyniki
  — nowy zrzut, 5 minut roboty
- **Next.js czy WordPress** → zrzut WP admin z „23 aktualizacje dostępne"
  (testowa instalacja WP) obok czystego terminala po `next build` — nowe
  zrzuty
- **Strona internetowa, która sprzedaje — 7 elementów** → wycinki (crop)
  z realnych wdrożeń: sekcja opinii z bcsc.pl, CTA z gapauto.pl, cennik
  z dowolnego projektu
- **Strona dla dentysty 2026** → zrzut realnego systemu rezerwacji (np.
  kalendarz z Akademii Wiedzy) z uczciwym podpisem „przykład systemu
  rezerwacji, który buduję", bez sugerowania że to konkretnie dla dentysty

## Do zrobienia, jak wrócisz do tematu

1. Wybrać kolumnę (typograficzna / symboliczna / mix) dla każdego artykułu.
2. Dla wariantu symbolicznego: zrobić zdjęcia telefonem (wszystkie przedmioty
   są zwykłe, dostępne w domu/biurze).
3. Dla wariantu typograficznego: zaprojektować w Figma/Canva albo poprosić
   o gotowe SVG/HTML.
4. Wgrać jako `image_url` w SQL insertach blog_posts (patrz
   `supabase/blog_insert_template.sql` i `supabase/018_blog_nextjs_vs_wordpress.sql`
   jako przykład).
