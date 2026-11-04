-- 023: SEO Lever A — kanibalizacja: blog kosztowy → linki do usługi
-- Cel: wyraźnie oddzielić intent cenowy (blog) od usługowego (usługa)
-- Dodaje jasne CTA w intro bloga do strony usługi

UPDATE blog_posts
SET content = replace(
      content,
      '<p>To pytanie dostaję na pierwszej rozmowie w jakichś dziewięciu przypadkach na dziesięć — i najczęściej pada zaraz po zdaniu „wiem, że to zależy, ale…". Zależy. Ale to nie znaczy, że nie da się podać widełek i wytłumaczyć, co je przesuwa. Większość agencji odpowiada „wycena indywidualna", bo tak jest wygodniej. Mnie to zawsze wkurzało jako klienta, więc u siebie robię inaczej.</p>',
      '<p>To pytanie dostaję na pierwszej rozmowie w jakichś dziewięciu przypadkach na dziesięć — i najczęściej pada zaraz po zdaniu „wiem, że to zależy, ale…". Zależy. Ale to nie znaczy, że nie da się podać widełek i wytłumaczyć, co je przesuwa. Większość agencji odpowiada „wycena indywidualna", bo tak jest wygodniej. Mnie to zawsze wkurzało jako klienta, więc u siebie robię inaczej.</p>

<p><strong>Ten artykuł = widełki i czynniki ceny.</strong> Jeśli interesuje Cię opis usługi, procesu i co dostajesz — przejdź do <a href="/uslugi/aplikacje-webowe" class="link">Aplikacja webowa na zamówienie — usługa</a>.</p>'
    ),
    updated_at = now()
WHERE slug = 'ile-kosztuje-aplikacja-webowa-na-zamowienie'
  AND content LIKE '%To pytanie dostaję na pierwszej rozmowie%'
  AND content NOT LIKE '%Ten artykuł = widełki i czynniki ceny%';

-- Dodaj również link do usługi w podsumowaniu (sekcja 07)
UPDATE blog_posts
SET content = replace(
      content,
      '<p>Jeśli chcesz przejść od widełek do konkretnej liczby — <a href="/kontakt" class="link">opisz swój proces</a>. Odpowiadam w 24 h, rozmowa jest bezpłatna, a wycenę z harmonogramem dostajesz w 48 h po niej. Możesz też najpierw zajrzeć do <a href="/cennik" class="link">pełnego cennika</a> albo zobaczyć <a href="/projekty" class="link">zrealizowane projekty</a> — wszystkie działają na żywo.</p>',
      '<p>Jeśli chcesz przejść od widełek do konkretnej liczby — <a href="/kontakt" class="link">opisz swój proces</a>. Odpowiadam w 24 h, rozmowa jest bezpłatna, a wycenę z harmonogramem dostajesz w 48 h po niej. Możesz też najpierw zajrzeć do <a href="/cennik" class="link">pełnego cennika</a>, zobaczyć <a href="/projekty" class="link">zrealizowane projekty</a> albo przeczytać szczegóły <a href="/uslugi/aplikacje-webowe" class="link">usługi aplikacji webowych na zamówienie</a>.</p>'
    ),
    updated_at = now()
WHERE slug = 'ile-kosztuje-aplikacja-webowa-na-zamowienie'
  AND content LIKE '%Możesz też najpierw zajrzeć do%pełnego cennika%'
  AND content NOT LIKE '%usługi aplikacji webowych na zamówienie%';
