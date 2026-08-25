-- Artykuły 1-4 z kalendarza treści (sekcja 11 planu SEO)
-- Klaster C (cena) i E (procesowe) — frazy z realną luką w polskim SERP-ie
-- Wygenerowane przez Claude. Przed uruchomieniem przejrzyj treść.

-- ile-kosztuje-aplikacja-webowa-na-zamowienie  (1282 słów, 6 min czytania)
INSERT INTO blog_posts (
  slug, title, excerpt, category, author, published_at,
  read_time, tags, image_url, meta_description, keywords, published, content
) VALUES (
  'ile-kosztuje-aplikacja-webowa-na-zamowienie',
  'Ile kosztuje <em>aplikacja webowa</em> na zamówienie?',
  'Od 9 900 zł za wdrożenie startowe, 15–30 tys. za typową aplikację z panelem, 35–80 tys. za rozbudowany system. Rozkładam widełki na czynniki i pokazuję, co naprawdę przesuwa cenę — bo nie jest to liczba ekranów.',
  'Cennik',
  'Stanisław',
  '2026-08-18 09:00:00+00',
  '6 min czytania',
  ARRAY['Cennik', 'Aplikacje webowe', 'Wycena', 'Budżet'],
  NULL,
  'Ile kosztuje aplikacja webowa na zamówienie w 2026? Realne widełki: 9 900–80 000 zł. Od czego zależy cena, ukryte koszty i jak wygląda wycena.',
  'ile kosztuje aplikacja webowa, cena aplikacji webowej, aplikacja webowa na zamówienie cena, wycena aplikacji webowej, koszt oprogramowania dedykowanego',
  true,
  '<p><strong>Krótka odpowiedź: aplikacja webowa na zamówienie kosztuje w Polsce od 10 000 do 80 000 zł netto.</strong> Prosta aplikacja z jednym procesem i panelem administracyjnym mieści się zwykle w przedziale 15 000–30 000 zł. Rozbudowany system z płatnościami online, wieloma rolami użytkowników i integracjami — 35 000–80 000 zł. Poniżej rozkładam na części, co dokładnie generuje tę różnicę.</p>

<p>To pytanie dostaję na pierwszej rozmowie w jakichś dziewięciu przypadkach na dziesięć — i najczęściej pada zaraz po zdaniu „wiem, że to zależy, ale…". Zależy. Ale to nie znaczy, że nie da się podać widełek i wytłumaczyć, co je przesuwa. Większość agencji odpowiada „wycena indywidualna", bo tak jest wygodniej. Mnie to zawsze wkurzało jako klienta, więc u siebie robię inaczej.</p>

<div class="stat-band">
  <div class="s"><div class="v">9 900 zł</div><div class="l">Próg wejścia dla aplikacji na zamówienie</div></div>
  <div class="s"><div class="v">15–30 tys.</div><div class="l">Typowa aplikacja z jednym procesem i panelem</div></div>
  <div class="s"><div class="v">48 h</div><div class="l">Czas na przygotowanie wyceny po rozmowie</div></div>
</div>

<h2><span class="idx">01 / Widełki</span>Ile kosztuje aplikacja webowa — konkretne przedziały</h2>

<p>Poniżej realne widełki dla wdrożeń, które robię najczęściej. To nie są ceny katalogowe wyssane z palca, tylko przedziały, w których faktycznie lądują moje wyceny — razem z tym, co najbardziej wpływa na końcową kwotę.</p>

<table>
  <thead>
    <tr><th>Rodzaj wdrożenia</th><th>Widełki (netto)</th><th>Co decyduje o cenie</th></tr>
  </thead>
  <tbody>
    <tr><td>Kalkulator lub konfigurator produktu</td><td>8 000 – 25 000 zł</td><td>Złożoność reguł cenowych, obecność wizualizacji</td></tr>
    <tr><td>Panel klienta do istniejącej strony</td><td>12 000 – 30 000 zł</td><td>Liczba typów danych, które klient ma widzieć</td></tr>
    <tr><td>System CRM na zamówienie</td><td>12 000 – 90 000 zł</td><td>Liczba ról i integracji z systemami zewnętrznymi</td></tr>
    <tr><td>Aplikacja z płatnościami online</td><td>15 000 – 80 000 zł</td><td>Model płatności: jednorazowe, abonament, zaliczki</td></tr>
    <tr><td>Platforma B2B z integracją ERP</td><td>40 000 – 120 000 zł</td><td>Integracja z magazynem i ERP — najbardziej pracochłonna</td></tr>
    <tr><td>Automatyzacja pojedynczego procesu</td><td>2 900 – 8 000 zł</td><td>Liczba łączonych narzędzi, złożoność logiki</td></tr>
  </tbody>
</table>

<p>Zwróć uwagę na jedną rzecz: w kolumnie „co decyduje o cenie" ani razu nie pojawia się <em>liczba ekranów</em>. To najczęstsze nieporozumienie przy wycenach.</p>

<h2><span class="idx">02 / Czynniki</span>Od czego naprawdę zależy cena aplikacji</h2>

<p>Klienci zwykle opisują projekt liczbą widoków: „to będzie jakieś dziesięć ekranów". Tymczasem dziesięć ekranów pokazujących te same dane w różnych układach to kilka dni pracy, a trzy ekrany z rozliczeniami, uprawnieniami i integracją z systemem księgowym to kilka tygodni. Kosztuje logika, nie interfejs.</p>

<h3>Liczba ról użytkowników</h3>
<p>To zwykle czynnik numer jeden. Każda dodatkowa rola — administrator, pracownik, klient, księgowa — to nie tylko nowy zestaw ekranów. To zestaw reguł: kto co widzi, kto co może zmienić, co się dzieje, gdy dwie osoby edytują ten sam rekord. Aplikacja z jedną rolą i aplikacja z czterema rolami różnią się kosztem bardziej niż dwukrotnie.</p>

<h3>Integracje z systemami zewnętrznymi</h3>
<p>Podpięcie płatności to zwykle kilka dni. Podpięcie systemu ERP, który ma dokumentację z 2014 roku i API zwracające XML — to może być kilka tygodni. Przed wyceną zawsze sprawdzam dokumentację systemu, z którym mamy się integrować, żeby nie okazało się w połowie projektu, że coś jest niemożliwe.</p>

<h3>Migracja danych</h3>
<p>Jeśli firma ma pięć lat historii w arkuszach, dane trzeba nie tylko przenieść, ale wyczyścić: ujednolicić formaty, wyłapać duplikaty, zdecydować, co zrobić z rekordami, w których brakuje połowy pól. To bywa 10–20% budżetu projektu i praktycznie zawsze jest niedoszacowane.</p>

<h3>Płatności online</h3>
<p>Jednorazowa płatność za zamówienie to standardowa integracja. Płatności cykliczne z automatycznym odnawianiem, obsługą nieudanych obciążeń, zaliczkami i dopłatami — to osobny moduł z własną logiką błędów.</p>

<div class="pullquote">
  <p>Nie płacisz za ekrany. Płacisz za reguły, które muszą działać poprawnie także wtedy, gdy dwie osoby zrobią coś nieoczekiwanego w tej samej sekundzie.</p>
</div>

<h2><span class="idx">03 / Porównanie</span>Aplikacja na zamówienie czy gotowe narzędzie z abonamentem?</h2>

<p>To pytanie warto zadać przed pytaniem o cenę. Gotowe narzędzie wygrywa, gdy Twój proces jest typowy i mieści się w tym, co przewidział producent. Aplikacja na zamówienie zaczyna się opłacać w dwóch sytuacjach.</p>

<p><strong>Pierwsza: proces jest Twoją przewagą.</strong> Jeśli robisz coś inaczej niż konkurencja i właśnie na tym zarabiasz, dopasowanie się do cudzego oprogramowania oznacza rezygnację z tej przewagi.</p>

<p><strong>Druga: arytmetyka abonamentu.</strong> Narzędzie za 150 zł miesięcznie za użytkownika przy zespole piętnastu osób to 27 000 zł rocznie. W trzy lata — 81 000 zł, i to przy założeniu, że cennik nie wzrośnie, a zespół nie urośnie. W tym samym budżecie mieści się rozbudowana aplikacja, która jest Twoją własnością.</p>

<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"></path></svg>
  </span>
  <div class="t">
    <b>Rachunek, który warto zrobić przed rozmową</b>
    <p>Policz: (miesięczny koszt abonamentu × liczba użytkowników × 36) + (godziny ręcznej pracy miesięcznie × koszt godziny × 36). Jeśli wynik przekracza widełki z tabeli powyżej, aplikacja na zamówienie zwraca się w trzy lata.</p>
  </div>
</div>

<h2><span class="idx">04 / Ukryte koszty</span>Czego nie ma w wycenie, a trzeba uwzględnić</h2>

<p>Cena wdrożenia to nie całość budżetu. Uczciwa rozmowa o kosztach obejmuje też to, co przychodzi później — i tu akurat dobra wiadomość, bo w aplikacjach webowych te kwoty są niskie.</p>

<ul>
  <li><strong>Hosting.</strong> Dla większości aplikacji firmowych to 0–100 USD miesięcznie. Infrastruktura skaluje się automatycznie, więc nie płacisz z góry za ruch, którego nie masz.</li>
  <li><strong>Baza danych.</strong> Przy typowych wolumenach firmowych — od zera do kilkudziesięciu złotych miesięcznie.</li>
  <li><strong>Domena i certyfikat SSL.</strong> Domena 60–120 zł rocznie, certyfikat w standardzie za darmo.</li>
  <li><strong>Prowizje od płatności.</strong> Jeśli aplikacja przyjmuje płatności — zwykle 1–2% transakcji po stronie operatora, nie po mojej.</li>
  <li><strong>Opieka techniczna.</strong> Opcjonalna, od 290 zł miesięcznie: monitoring, kopie zapasowe, aktualizacje i poprawki na zgłoszenie.</li>
  <li><strong>Rozwój po starcie.</strong> Najczęściej pomijana pozycja. Dobra aplikacja generuje pomysły na kolejne funkcje — warto zarezerwować budżet na pierwszy rok po wdrożeniu.</li>
</ul>

<h2><span class="idx">05 / Proces</span>Jak wygląda droga od pomysłu do wyceny</h2>

<p>Nie da się wycenić aplikacji z jednego zdania w mailu. Ale nie potrzebuję też specyfikacji na czterdzieści stron — jej przygotowanie to praca, za którą i tak ktoś musiałby zapłacić.</p>

<ul>
  <li><strong>Rozmowa (30 minut, bezpłatnie).</strong> Opisujesz proces tak, jak wygląda dziś — z całym bałaganem. Nie musisz wiedzieć, jakiego rozwiązania potrzebujesz.</li>
  <li><strong>Mapowanie zakresu.</strong> Rozkładam proces na role, dane i zdarzenia. Zwykle na tym etapie okazuje się, że część rzeczy da się załatwić prościej i taniej, niż zakładałeś.</li>
  <li><strong>Wycena z harmonogramem (48 h).</strong> Konkretna kwota, kamienie milowe i terminy. Ważna 14 dni.</li>
  <li><strong>Decyzja.</strong> Zaliczka 50%, reszta po wdrożeniu i akceptacji.</li>
</ul>

<p>Jeśli na etapie mapowania wyjdzie, że Twój problem rozwiąże gotowe narzędzie za 200 zł miesięcznie albo jedna automatyzacja za 4 000 zł — powiem to wprost. Sprzedanie projektu, którego klient nie potrzebował, kończy się złą opinią, a ta kosztuje więcej niż jedno zlecenie.</p>

<h2><span class="idx">06 / FAQ</span>Najczęstsze pytania o koszt aplikacji webowej</h2>

<h3>Czy będę właścicielem kodu?</h3>
<p>Tak. Po opłaceniu ostatniej faktury przekazuję pełne prawa do kodu i dostęp do repozytorium. Możesz rozwijać aplikację samodzielnie albo z innym zespołem — nie uzależniam klientów od siebie.</p>

<h3>Ile trwa budowa aplikacji webowej?</h3>
<p>Prosta aplikacja z jednym procesem i panelem administracyjnym to zwykle 6–8 tygodni. Rozbudowany system z wieloma rolami, płatnościami i integracjami — od 3 do 5 miesięcy. Harmonogram z kamieniami milowymi ustalam przed startem.</p>

<h3>Czy da się to zrobić etapami, żeby rozłożyć koszt?</h3>
<p>Tak i często to rekomenduję. Pierwszy etap obejmuje rdzeń procesu, który daje najwięcej oszczędności, kolejne dokładają moduły. Architekturę projektuję pod rozbudowę, więc dokładanie funkcji nie wymaga przepisywania aplikacji od zera.</p>

<h3>Dlaczego widełki są tak szerokie?</h3>
<p>Bo „aplikacja webowa" to kategoria równie pojemna jak „samochód". Kalkulator z jednym formularzem i platforma obsługująca kilkuset użytkowników z płatnościami to dwa różne produkty o dziesięciokrotnie różnym nakładzie pracy. Po 30-minutowej rozmowie widełki zwężają się do konkretnej kwoty.</p>

<h2><span class="idx">07 / Podsumowanie</span>Co z tym zrobić dalej</h2>

<p>Jeśli szukasz orientacji budżetowej: aplikacja na zamówienie zaczyna się od 9 900 zł netto, typowe wdrożenie to 15 000–30 000 zł, a rozbudowany system 35 000–80 000 zł. Największy wpływ na cenę mają role użytkowników i integracje, nie liczba ekranów.</p>

<p>Jeśli chcesz przejść od widełek do konkretnej liczby — <a href="/kontakt" class="link">opisz swój proces</a>. Odpowiadam w 24 h, rozmowa jest bezpłatna, a wycenę z harmonogramem dostajesz w 48 h po niej. Możesz też najpierw zajrzeć do <a href="/cennik" class="link">pełnego cennika</a> albo zobaczyć <a href="/projekty" class="link">zrealizowane projekty</a> — wszystkie działają na żywo.</p>'
) ON CONFLICT (slug) DO NOTHING;

-- jak-przeniesc-firme-z-excela-do-systemu  (1240 słów, 6 min czytania)
INSERT INTO blog_posts (
  slug, title, excerpt, category, author, published_at,
  read_time, tags, image_url, meta_description, keywords, published, content
) VALUES (
  'jak-przeniesc-firme-z-excela-do-systemu',
  'Jak przenieść firmę z Excela <em>do systemu</em>',
  'Sześć kroków, kolejność, która chroni przed katastrofą, i pięć błędów, o które rozbija się większość takich projektów. Plus rachunek, który powie Ci, czy w ogóle warto zaczynać.',
  'Automatyzacja',
  'Stanisław',
  '2026-08-20 09:00:00+00',
  '6 min czytania',
  ARRAY['Automatyzacja', 'Excel', 'Migracja danych', 'Procesy'],
  NULL,
  'Jak przenieść firmę z Excela do dedykowanego systemu — 6 kroków, koszty, czas realizacji i błędy, które psują takie wdrożenia.',
  'migracja z Excela, jak przenieść dane z Excela, system zamiast Excela, automatyzacja procesów w firmie, dedykowany system dla firmy',
  true,
  '<p><strong>Migracja z Excela do dedykowanego systemu przebiega w sześciu krokach: audyt arkuszy, wybór jednego procesu na start, oczyszczenie danych, wdrożenie równoległe, przełączenie i wygaszenie arkuszy.</strong> Kluczowa zasada: nie przenosisz wszystkiego naraz i nie wyłączasz Excela, dopóki nowy system nie udowodni, że liczy tak samo. Poniżej opisuję każdy krok razem z pułapkami, o które najczęściej rozbijają się takie projekty.</p>

<p>Excel jest świetny — dopóki nie przestaje być. Granicę widać zwykle wtedy, gdy plik ma pięć zakładek, trzy osoby edytują go jednocześnie, a nazwa brzmi <code>klienci_FINAL_v3_poprawione_NOWE.xlsx</code>. Wtedy arkusz przestaje być narzędziem, a zaczyna być ryzykiem.</p>

<h2><span class="idx">01 / Diagnoza</span>Kiedy Excel przestaje wystarczać</h2>

<p>Nie ma jednego progu. Jest za to kilka sygnałów, które w praktyce oznaczają, że koszt utrzymywania arkusza przekroczył koszt zbudowania czegoś właściwego.</p>

<ul>
  <li><strong>Dwie osoby nie mogą pracować równocześnie</strong> bez ryzyka, że jedna nadpisze zmiany drugiej.</li>
  <li><strong>Ktoś przepisuje dane</strong> z arkusza do systemu księgowego, z maila do arkusza, z arkusza do oferty.</li>
  <li><strong>Nie wiesz, kto co zmienił</strong> — historia zmian kończy się na „chyba Kasia w zeszłym tygodniu".</li>
  <li><strong>Wersje żyją w mailach</strong> i nikt nie ma pewności, która jest aktualna.</li>
  <li><strong>Raport miesięczny zajmuje dzień pracy</strong>, bo trzeba pozbierać dane z kilku plików.</li>
  <li><strong>Boisz się otworzyć plik</strong>, żeby czegoś nie zepsuć. To najbardziej niedoceniany sygnał.</li>
</ul>

<p>Skala problemu jest lepiej udokumentowana, niż mogłoby się wydawać. Z badań audytowych zebranych przez prof. Raymonda Panko wynika, że <strong>około 94% arkuszy używanych operacyjnie w firmach zawiera co najmniej jeden błąd</strong>, a średni wskaźnik błędów na poziomie pojedynczej komórki sięga kilku procent. Arkusz nie wybacza pomyłek — po prostu je przechowuje i powiela w każdym kolejnym miesiącu.</p>

<div class="pullquote">
  <p>Excel nie jest zły. Zły jest moment, w którym firma zaczyna go używać jako bazy danych, systemu uprawnień i narzędzia raportowego jednocześnie.</p>
</div>

<h2><span class="idx">02 / Krok 1</span>Audyt: policz, co naprawdę masz</h2>

<p>Zanim cokolwiek zaczniesz przenosić, zrób inwentaryzację. Nie chodzi o listę plików, tylko o listę <em>procesów</em>, które te pliki obsługują.</p>

<p>Dla każdego arkusza zapisz cztery rzeczy: kto go używa, jak często, co z niego wynika i ile czasu miesięcznie zajmuje jego obsługa. Ta ostatnia liczba jest najważniejsza — to ona zdecyduje o kolejności migracji i pozwoli policzyć zwrot z inwestycji.</p>

<p>W tym momencie prawie zawsze wychodzi na jaw coś zaskakującego: arkusz, który ktoś aktualizuje co tydzień od dwóch lat, a nikt z niego nie korzysta. Albo trzy pliki opisujące ten sam proces w trzech działach.</p>

<h2><span class="idx">03 / Krok 2</span>Wybierz jeden proces na start</h2>

<p>Najczęstszy błąd przy migracji to próba przeniesienia wszystkiego naraz. Projekt puchnie, terminy się przesuwają, zespół traci cierpliwość, a po pół roku firma wraca do arkuszy — bo one przynajmniej działały.</p>

<p>Wybierz jeden proces, który spełnia trzy warunki: pochłania najwięcej czasu, ma jasny początek i koniec, oraz dotyka niewielu osób. Pierwsze wdrożenie ma udowodnić, że to działa — nie ma naprawić całej firmy.</p>

<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
  </span>
  <div class="t">
    <b>Dobry kandydat na pierwszy proces</b>
    <p>Obieg zamówień, rejestr zgłoszeń serwisowych, ewidencja szkoleń, lista rezerwacji. Zły kandydat: „cała księgowość" albo „wszystko, co robi dział handlowy".</p>
  </div>
</div>

<h2><span class="idx">04 / Krok 3</span>Oczyść dane, zanim je przeniesiesz</h2>

<p>To etap, który wszyscy niedoszacowują — łącznie ze mną na początku kariery. Przeniesienie bałaganu do nowego systemu daje ten sam bałagan, tylko w ładniejszym interfejsie i za większe pieniądze.</p>

<p>Typowe rzeczy do uporządkowania przed migracją:</p>

<ul>
  <li><strong>Niespójne formaty.</strong> Daty jako <code>12.03.2025</code>, <code>2025-03-12</code> i <code>12 marca</code> w jednej kolumnie.</li>
  <li><strong>Duplikaty.</strong> Ten sam klient jako „Kowalski Sp. z o.o.", „Kowalski sp. z o. o." i „KOWALSKI".</li>
  <li><strong>Dane w komentarzach.</strong> Kluczowe ustalenia zapisane w żółtych dymkach zamiast w kolumnach.</li>
  <li><strong>Kolumny-śmietniki.</strong> Pole „uwagi", w którym siedzi termin płatności, numer telefonu i nazwisko opiekuna naraz.</li>
  <li><strong>Puste rekordy i wiersze testowe</strong>, które ktoś dodał w 2021 roku i zapomniał usunąć.</li>
</ul>

<p>To praca, którą najlepiej wykonać po stronie firmy — bo tylko ktoś, kto zna kontekst, wie, czy „Kowalski" i „KOWALSKI" to ten sam klient. Skrypty pomogą wyłapać kandydatów, ale decyzja jest biznesowa.</p>

<h2><span class="idx">05 / Krok 4</span>Wdrożenie równoległe — Excel zostaje włączony</h2>

<p>Przez kilka tygodni nowy system i arkusz działają jednocześnie. To wygląda na marnowanie czasu i jest jedyną rzeczą, która chroni przed katastrofą.</p>

<p>Zespół wprowadza dane w obu miejscach, a Ty na koniec każdego tygodnia porównujesz wyniki. Jeśli system i arkusz liczą to samo — rośnie zaufanie. Jeśli liczą inaczej — masz szansę znaleźć błąd, zanim ktoś podejmie na jego podstawie decyzję.</p>

<p>W praktyce ten etap prawie zawsze wykrywa dwie kategorie rozbieżności: błędy w nowym systemie (do naprawy) oraz błędy, które od lat siedziały w arkuszu i nikt ich nie zauważył. Ta druga kategoria bywa dla firm najbardziej pouczająca.</p>

<h2><span class="idx">06 / Krok 5</span>Przełączenie i szkolenie</h2>

<p>Przełączenie robi się w spokojnym momencie miesiąca — nigdy w tygodniu zamknięcia okresu ani w szczycie sezonu. Arkusz przechodzi w tryb tylko do odczytu, ale zostaje dostępny. Nikt niczego nie kasuje.</p>

<p>Szkolenie powinno być krótkie i praktyczne. Nie prezentacja o funkcjach systemu, tylko przejście ścieżki, którą dana osoba wykonuje codziennie. Jeśli po piętnastu minutach ktoś nie potrafi samodzielnie dodać rekordu, problem leży w interfejsie, nie w użytkowniku — i to interfejs trzeba poprawić.</p>

<h2><span class="idx">07 / Krok 6</span>Wygaszenie arkuszy i pierwsze usprawnienia</h2>

<p>Po miesiącu stabilnej pracy arkusze można zarchiwizować. Dopiero teraz zaczyna się część, dla której cały projekt miał sens: system, w którym dane są uporządkowane, pozwala robić rzeczy niemożliwe w arkuszu.</p>

<ul>
  <li>Automatyczne przypomnienia o terminach zamiast pilnowania ich w głowie.</li>
  <li>Powiadomienia, gdy coś wymaga reakcji — zamiast codziennego zaglądania „czy coś przyszło".</li>
  <li>Raporty generowane w sekundę zamiast składane ręcznie raz w miesiącu.</li>
  <li>Panel, w którym klient sam sprawdza status — zamiast dzwonienia do biura.</li>
</ul>

<p>To zwykle moment, w którym pojawia się pytanie „a czy dałoby się jeszcze…". I dobrze — architekturę projektuję pod dokładanie modułów, nie pod przepisywanie od zera.</p>

<h2><span class="idx">08 / Koszty</span>Ile trwa i ile kosztuje taka migracja</h2>

<p>Dla pojedynczego procesu z jasnym początkiem i końcem realny zakres to <strong>6–10 tygodni i 15 000–35 000 zł netto</strong>. Sama migracja danych to zwykle 10–20% tej kwoty, w zależności od tego, ile porządkowania wymagają arkusze.</p>

<p>Zwrot policzysz z liczby, którą zebrałeś w kroku 1: godziny miesięcznie × koszt godziny × 12. Jeśli proces pochłania 30 godzin miesięcznie przy koszcie 60 zł za godzinę, to 21 600 zł rocznie — czyli wdrożenie zwraca się w pierwszym roku, zanim policzysz cokolwiek po stronie uniknięcia błędów.</p>

<div class="stat-band">
  <div class="s"><div class="v">6–10 tyg.</div><div class="l">Typowy czas migracji jednego procesu</div></div>
  <div class="s"><div class="v">94%</div><div class="l">Arkuszy operacyjnych zawiera co najmniej jeden błąd (badania Panko)</div></div>
  <div class="s"><div class="v">10–20%</div><div class="l">Budżetu projektu pochłania samo oczyszczenie danych</div></div>
</div>

<h2><span class="idx">09 / Błędy</span>Pięć rzeczy, które psują takie projekty</h2>

<ul>
  <li><strong>Migracja wszystkiego naraz.</strong> Projekt puchnie, zespół się zniechęca, firma wraca do arkuszy.</li>
  <li><strong>Odwzorowanie arkusza jeden do jednego.</strong> Jeśli nowy system wygląda jak Excel, po co go budować? Migracja to moment na uproszczenie procesu, nie na jego zabetonowanie.</li>
  <li><strong>Pominięcie osoby, która faktycznie używa arkusza.</strong> Decyzję podejmuje zarząd, a codziennie klika ktoś inny. Bez rozmowy z tą osobą system trafi obok potrzeb.</li>
  <li><strong>Brak wdrożenia równoległego.</strong> Oszczędność dwóch tygodni, która potrafi kosztować miesiąc gaszenia pożarów.</li>
  <li><strong>Brak właściciela po stronie firmy.</strong> Ktoś musi podejmować decyzje o zakresie. Jeśli nie ma takiej osoby, projekt stoi.</li>
</ul>

<h2><span class="idx">10 / Podsumowanie</span>Od czego zacząć w tym tygodniu</h2>

<p>Nie od wyboru technologii i nie od rozmowy z wykonawcą. Od kartki i jednej liczby: <strong>ile godzin miesięcznie Twój zespół spędza na obsłudze arkuszy</strong>. Ta liczba powie Ci, czy w ogóle warto, a potem zdecyduje o kolejności działań.</p>

<p>Jeśli wyjdzie, że warto — <a href="/kontakt" class="link">opisz mi swój proces</a> tak, jak wygląda dziś, z całym bałaganem. Nie musisz wiedzieć, jakiego systemu potrzebujesz. Na bezpłatnej konsultacji rozłożymy go na części i wybierzemy najtańsze rozwiązanie, które go załatwia — czasem to system, a czasem <a href="/uslugi/automatyzacja-procesow" class="link">jedna automatyzacja</a> za ułamek tej kwoty.</p>'
) ON CONFLICT (slug) DO NOTHING;

-- gotowy-crm-czy-system-na-zamowienie  (1177 słów, 6 min czytania)
INSERT INTO blog_posts (
  slug, title, excerpt, category, author, published_at,
  read_time, tags, image_url, meta_description, keywords, published, content
) VALUES (
  'gotowy-crm-czy-system-na-zamowienie',
  'Gotowy CRM czy system <em>na zamówienie</em>?',
  'Konkretny rachunek trzyletniego kosztu obu opcji, próg opłacalności zależny od wielkości zespołu i trzecia droga, o której mało kto mówi — a która często rozwiązuje 80% problemu za 10% kosztu.',
  'Systemy',
  'Stanisław',
  '2026-08-22 09:00:00+00',
  '6 min czytania',
  ARRAY['CRM', 'Systemy', 'Porównanie', 'Koszty'],
  NULL,
  'Gotowy CRM czy system na zamówienie? Porównanie kosztów w 3 lata, próg opłacalności i rozwiązanie hybrydowe. Konkretne liczby, nie ogólniki.',
  'gotowy CRM czy własny system, system CRM na zamówienie, ile kosztuje CRM, dedykowany CRM, CRM dla firmy porównanie',
  true,
  '<p><strong>Gotowy CRM opłaca się, gdy Twój proces sprzedaży jest typowy, zespół nie przekracza kilkunastu osób, a wdrożenie ma ruszyć w tym miesiącu. System na zamówienie zaczyna wygrywać, gdy proces jest nietypowy, zespół rośnie albo roczny koszt abonamentów przekracza kilkanaście tysięcy złotych.</strong> Poniżej rozkładam obie opcje na czynniki, z konkretnym rachunkiem, w którym momencie następuje przecięcie.</p>

<p>To pytanie pada zwykle po kilku miesiącach walki z gotowym narzędziem, gdy okazuje się, że firma dopasowała proces do oprogramowania zamiast odwrotnie. Odpowiadam na nie uczciwie także wtedy, gdy odpowiedź brzmi „zostań przy gotowcu" — sprzedanie projektu, którego klient nie potrzebował, kończy się złą opinią.</p>

<h2><span class="idx">01 / Zestawienie</span>Gotowy CRM kontra system na zamówienie</h2>

<table>
  <thead>
    <tr><th>Kryterium</th><th>Gotowy CRM (abonament)</th><th>System na zamówienie</th></tr>
  </thead>
  <tbody>
    <tr><td>Koszt startowy</td><td>0–2 000 zł (konfiguracja)</td><td>12 000–90 000 zł</td></tr>
    <tr><td>Koszt bieżący</td><td>50–300 zł / użytkownik / mies.</td><td>0–300 zł / mies. (hosting, opieka)</td></tr>
    <tr><td>Czas do startu</td><td>Dni</td><td>Od 6 tygodni</td></tr>
    <tr><td>Dopasowanie do procesu</td><td>Proces dopasowuje się do narzędzia</td><td>Narzędzie dopasowuje się do procesu</td></tr>
    <tr><td>Własność danych</td><td>Na serwerach dostawcy</td><td>Twoja baza, Twoja infrastruktura</td></tr>
    <tr><td>Koszt przy wzroście zespołu</td><td>Rośnie liniowo z liczbą osób</td><td>Nie zmienia się</td></tr>
    <tr><td>Zależność od dostawcy</td><td>Zmiana cennika lub warunków poza Twoją kontrolą</td><td>Kod jest Twój</td></tr>
    <tr><td>Nietypowe wymagania</td><td>Obejścia albo brak możliwości</td><td>Wbudowane od początku</td></tr>
  </tbody>
</table>

<h2><span class="idx">02 / Rachunek</span>Gdzie dokładnie jest próg opłacalności</h2>

<p>Najprostszy sposób na podjęcie tej decyzji to policzenie trzyletniego kosztu posiadania. Trzy lata, bo to realny horyzont życia takiego narzędzia w firmie.</p>

<p><strong>Wzór dla gotowca:</strong> miesięczny koszt za użytkownika × liczba użytkowników × 36 miesięcy, plus czas poświęcany na obejścia ograniczeń narzędzia.</p>

<p><strong>Wzór dla systemu na zamówienie:</strong> koszt wdrożenia + (hosting i opieka × 36 miesięcy).</p>

<p>Przykład dla piętnastoosobowego zespołu i narzędzia po 150 zł miesięcznie za użytkownika:</p>

<ul>
  <li><strong>Gotowiec:</strong> 150 × 15 × 36 = <strong>81 000 zł</strong> w trzy lata. Przy założeniu, że cennik nie wzrośnie i zespół nie urośnie — a zwykle dzieje się jedno i drugie.</li>
  <li><strong>System na zamówienie:</strong> 35 000 zł wdrożenia + (290 zł × 36) = <strong>45 440 zł</strong>, i po tym okresie system nadal jest Twój.</li>
</ul>

<p>Przy zespole trzyosobowym ten sam rachunek wygląda odwrotnie: 16 200 zł za gotowca wobec 45 440 zł za własny system. Dlatego liczba użytkowników jest tu zmienną krytyczną — dużo ważniejszą niż branża czy wielkość obrotów.</p>

<div class="pullquote">
  <p>Abonament wygląda tanio, dopóki patrzysz na jeden miesiąc i jednego użytkownika. Decyzję podejmuje się na trzy lata i cały zespół.</p>
</div>

<h2><span class="idx">03 / Gotowiec</span>Kiedy gotowy CRM jest lepszym wyborem</h2>

<p>Są sytuacje, w których odradzam budowanie własnego systemu — nawet jeśli oznacza to, że nie zarobię na projekcie.</p>

<ul>
  <li><strong>Proces jest standardowy.</strong> Lejek sprzedaży, kontakty, zadania, notatki. Jeśli to opisuje Twoją potrzebę w całości, gotowe narzędzia robią to dobrze od lat.</li>
  <li><strong>Potrzebujesz tego na już.</strong> Gotowiec uruchomisz w tydzień. System na zamówienie to minimum sześć tygodni.</li>
  <li><strong>Nie wiesz jeszcze, jak ma wyglądać proces.</strong> Jeśli firma dopiero szuka swojego sposobu pracy, budowanie pod nieustalony proces to droga do przepisywania po roku.</li>
  <li><strong>Mały zespół bez planów wzrostu.</strong> Przy kilku osobach abonament długo pozostaje tańszy.</li>
  <li><strong>Budżet inwestycyjny jest niedostępny.</strong> Abonament to koszt operacyjny, wdrożenie to wydatek jednorazowy — dla części firm to różnica księgowa, która przesądza sprawę.</li>
</ul>

<h2><span class="idx">04 / Custom</span>Kiedy warto zbudować własny system</h2>

<ul>
  <li><strong>Proces jest Twoją przewagą konkurencyjną.</strong> Jeśli zarabiasz na tym, że robisz coś inaczej, dopasowanie się do cudzego oprogramowania oznacza rezygnację z tej przewagi.</li>
  <li><strong>Płacisz za moduły, których nie używasz.</strong> Typowa sytuacja: firma korzysta z 20% funkcji narzędzia i płaci za 100%.</li>
  <li><strong>Obejścia stały się procesem.</strong> Gdy w instrukcji dla nowego pracownika pojawia się zdanie „to pole wypełniamy inaczej, niż sugeruje nazwa" — narzędzie już nie pasuje.</li>
  <li><strong>Potrzebujesz integracji, której nie ma.</strong> Połączenie z polskim systemem magazynowym albo branżową bazą bywa niemożliwe w zamkniętym narzędziu.</li>
  <li><strong>Klienci mają dostać własny panel.</strong> Większość gotowych CRM-ów projektowana jest dla zespołu wewnętrznego, nie dla klientów końcowych.</li>
  <li><strong>Dane muszą zostać u Ciebie.</strong> Wymóg regulacyjny albo umowny, którego abonament nie spełni.</li>
</ul>

<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"></path></svg>
  </span>
  <div class="t">
    <b>Test jednego zdania</b>
    <p>Opisz swój proces w jednym zdaniu. Jeśli brzmi jak opis dowolnej firmy z Twojej branży — bierz gotowca. Jeśli musisz dodać „ale u nas jeszcze…" — policz trzyletni koszt obu opcji.</p>
  </div>
</div>

<h2><span class="idx">05 / Trzecia droga</span>Rozwiązanie hybrydowe, o którym mało kto mówi</h2>

<p>Wybór nie jest binarny. W praktyce najczęściej sprawdza się wariant pośredni: zostawiasz gotowe narzędzie tam, gdzie działa dobrze, i dobudowujesz tylko brakujący fragment.</p>

<p>Typowe przykłady, które wdrażam najczęściej:</p>

<ul>
  <li><strong>Panel klienta podpięty do istniejącego CRM-a.</strong> Zespół pracuje jak dotąd, klient dostaje własny widok. Koszt: ułamek pełnego systemu.</li>
  <li><strong>Automatyzacja przepływu między narzędziami.</strong> Dane przestają wędrować ręcznie między CRM-em, fakturowaniem i pocztą.</li>
  <li><strong>Własny moduł raportowy.</strong> Gdy narzędzie ma dane, ale nie pokazuje ich w sposób, jakiego potrzebujesz do decyzji.</li>
  <li><strong>Formularz albo konfigurator</strong>, który zbiera zapytania z pełnym kompletem danych i wrzuca je prosto do gotowego CRM-a.</li>
</ul>

<p>Taka <a href="/uslugi/automatyzacja-procesow" class="link">automatyzacja pojedynczego procesu</a> zaczyna się od 2 900 zł i często rozwiązuje 80% problemu za 10% kosztu pełnego wdrożenia. To pierwsza rzecz, którą sprawdzam na konsultacji.</p>

<h2><span class="idx">06 / Migracja</span>Co, jeśli już masz gotowy CRM i chcesz go zmienić</h2>

<p>Najważniejsze pytanie brzmi: czy da się wyeksportować dane i w jakim formacie. Sprawdź to <em>zanim</em> podejmiesz decyzję — nie po. Część narzędzi udostępnia pełny eksport przez API, część tylko okrojony plik CSV, a niektóre robią z tego procedurę na wniosek.</p>

<p>Sama migracja przebiega tak samo jak przy przejściu z arkuszy: eksport, oczyszczenie danych, import, okres pracy równoległej, dopiero potem przełączenie. Historii nie kasuje się nigdy — stary system zostaje w trybie tylko do odczytu przez co najmniej kilka miesięcy.</p>

<h2><span class="idx">07 / FAQ</span>Najczęstsze pytania</h2>

<h3>Czy własny system jest bezpieczniejszy niż gotowy CRM?</h3>
<p>Niekoniecznie — duzi dostawcy mają zespoły bezpieczeństwa, których pojedyncza firma nie ma. Własny system daje za to kontrolę: wiesz, gdzie leżą dane, kto ma do nich dostęp i co się stanie przy zmianie warunków. Buduję z szyfrowaniem transmisji, dostępem opartym na rolach i bazą na serwerach w Unii Europejskiej.</p>

<h3>Co się stanie, jeśli przestaniemy współpracować?</h3>
<p>Kod i repozytorium są Twoje po opłaceniu ostatniej faktury. Możesz rozwijać system samodzielnie albo z innym zespołem. To zasadnicza różnica wobec abonamentu, w którym przerwanie płatności oznacza utratę dostępu.</p>

<h3>Ile kosztuje utrzymanie własnego systemu?</h3>
<p>Hosting dla typowej aplikacji firmowej to 0–100 USD miesięcznie, baza danych zwykle kilkadziesiąt złotych. Opcjonalna opieka techniczna — od 290 zł miesięcznie za monitoring, kopie zapasowe i poprawki na zgłoszenie. Razem zwykle mniej niż abonament za trzech użytkowników.</p>

<h3>Czy da się zacząć od małego systemu i rozbudowywać?</h3>
<p>Tak i to najczęstszy scenariusz. Pierwszy etap obejmuje rdzeń procesu, kolejne dokładają moduły. Architekturę projektuję pod rozbudowę, więc dołożenie płatności czy raportowania nie wymaga przepisywania aplikacji od zera.</p>

<h2><span class="idx">08 / Podsumowanie</span>Jak podjąć tę decyzję w tydzień</h2>

<p>Policz trzyletni koszt obu opcji dla swojej liczby użytkowników. Do kosztu gotowca doliczyć trzeba godziny, które zespół traci na obchodzenie ograniczeń — to pozycja, która w arkuszach porównawczych nigdy się nie pojawia, a bywa większa niż sam abonament.</p>

<p>Jeśli wynik jest bliski, wybierz gotowca. Przewaga własnego systemu musi być wyraźna, żeby uzasadniła dłuższy czas wdrożenia i większe zaangażowanie po Twojej stronie.</p>

<p>Jeśli chcesz przejść ten rachunek z kimś, kto nie zarabia na jednej z odpowiedzi bardziej niż na drugiej — <a href="/kontakt" class="link">umów bezpłatną konsultację</a>. Zobacz też, jak wyglądają <a href="/uslugi/systemy-dla-firm" class="link">systemy, które buduję</a>, i <a href="/projekty" class="link">wdrożenia, które działają na żywo</a>.</p>'
) ON CONFLICT (slug) DO NOTHING;

-- jak-wybrac-firme-do-stworzenia-aplikacji-webowej  (1113 słów, 6 min czytania)
INSERT INTO blog_posts (
  slug, title, excerpt, category, author, published_at,
  read_time, tags, image_url, meta_description, keywords, published, content
) VALUES (
  'jak-wybrac-firme-do-stworzenia-aplikacji-webowej',
  'Jak wybrać firmę do stworzenia <em>aplikacji webowej</em>',
  'Dwanaście pytań, które warto zadać przed podpisaniem umowy, sześć sygnałów ostrzegawczych i uczciwe porównanie freelancera, agencji i software house''u — z minusami każdej opcji.',
  'Poradnik',
  'Stanisław',
  '2026-08-25 09:00:00+00',
  '6 min czytania',
  ARRAY['Poradnik', 'Współpraca', 'Umowa', 'Wybór wykonawcy'],
  NULL,
  'Jak wybrać firmę do stworzenia aplikacji webowej — 12 pytań przed podpisaniem umowy, sygnały ostrzegawcze i porównanie typów wykonawców.',
  'jak wybrać firmę do stworzenia aplikacji, wybór software house, pytania do agencji webowej, umowa na aplikację webową, prawa autorskie do kodu',
  true,
  '<p><strong>Firmę do stworzenia aplikacji webowej wybiera się na podstawie czterech rzeczy: działających wdrożeń, których możesz dotknąć, jasnych zasad rozliczenia, zapisanych praw do kodu oraz odpowiedzi na pytanie, kto konkretnie napisze Twój kod.</strong> Portfolio ze zrzutami ekranu, wycena bez zakresu i umowa bez klauzuli o przeniesieniu praw autorskich to trzy najczęstsze sygnały ostrzegawcze. Poniżej dwanaście pytań, które warto zadać przed podpisaniem.</p>

<p>Piszę to jako osoba po drugiej stronie stołu — i świadoma, że część tych pytań jest niewygodna także dla mnie. Ale klient, który wie, o co pytać, jest lepszym klientem: rozmowa jest krótsza, oczekiwania realne, a projekt rzadziej kończy się rozczarowaniem.</p>

<h2><span class="idx">01 / Kompetencje</span>Pytania o to, czy potrafią</h2>

<h3>1. Czy mogę zobaczyć trzy działające wdrożenia z ostatniego roku?</h3>
<p>Nie zrzuty ekranu — adresy. Wejdź na nie, kliknij, sprawdź na telefonie, zmierz czas ładowania w PageSpeed Insights. Portfolio złożone wyłącznie z grafik oznacza jedno z dwóch: projekty nie powstały albo nie przetrwały. Zapytaj też, które części danego wdrożenia robiła ta firma — bywa, że „realizacja" oznacza podmianę kolorów w cudzym projekcie.</p>

<h3>2. Kto konkretnie będzie pisał mój kod?</h3>
<p>W większych agencjach rozmawiasz z handlowcem, a kod pisze ktoś, kogo nigdy nie poznasz — czasem podwykonawca z innego kraju. To nie musi być złe, ale musisz to wiedzieć. Zapytaj wprost o imię, doświadczenie i o to, ile projektów ta osoba prowadzi równolegle.</p>

<h3>3. Czy realizowaliście coś w mojej branży?</h3>
<p>Przydatne, ale nie decydujące. Procesy powtarzają się między branżami częściej, niż się wydaje — obieg dokumentów w kancelarii i w firmie transportowej wygląda podobnie. Ważniejsze od branży jest doświadczenie z podobnym <em>typem</em> problemu: płatnościami, rolami użytkowników, integracją z systemem zewnętrznym.</p>

<h3>4. Co poszło źle w ostatnim projekcie i jak to rozwiązaliście?</h3>
<p>Najlepsze pytanie z całej listy. Każdy, kto zrobił kilkanaście wdrożeń, ma taką historię. Odpowiedź „u nas nigdy nic nie idzie źle" oznacza albo brak doświadczenia, albo brak szczerości — i obie możliwości są kosztowne.</p>

<div class="pullquote">
  <p>Wykonawca, który potrafi opowiedzieć o swojej pomyłce, prawdopodobnie powie Ci też, gdy projekt zacznie się sypać. Ten drugi moment jest znacznie ważniejszy.</p>
</div>

<h2><span class="idx">02 / Pieniądze</span>Pytania o rozliczenie</h2>

<h3>5. Co dokładnie zawiera ta kwota i czego w niej nie ma?</h3>
<p>Wycena bez zakresu jest bezwartościowa. Poproś o rozbicie na etapy z terminami i o listę rzeczy wyraźnie wyłączonych: hosting, licencje, teksty, zdjęcia, integracje, szkolenie. Najczęstsze niespodzianki biorą się nie z tego, co w wycenie jest, tylko z tego, czego w niej nie było.</p>

<h3>6. Jak wyceniacie zmiany w trakcie projektu?</h3>
<p>Zmiany będą — to normalne. Nienormalne jest dowiadywanie się o ich koszcie z faktury. Ustal zasadę: każda zmiana zakresu wyceniana przed wykonaniem, na piśmie, z decyzją po Twojej stronie. Zapytaj też, co firma traktuje jako „drobną korektę w cenie", a co jako zmianę zakresu.</p>

<h3>7. Jak wygląda harmonogram płatności?</h3>
<p>Standard rynkowy to zaliczka 30–50% i reszta po odbiorze, a przy większych projektach podział na etapy powiązane z kamieniami milowymi. Żądanie 100% z góry jest sygnałem ostrzegawczym. Płatność w całości po wykonaniu też bywa podejrzana — zwykle oznacza, że koszt ryzyka jest wliczony gdzie indziej.</p>

<h3>8. Ile kosztuje utrzymanie po wdrożeniu?</h3>
<p>Zapytaj o to <em>przed</em> podpisaniem, nie po. Hosting, domena, opieka techniczna, stawka za prace poza abonamentem. Dla typowej aplikacji firmowej realny koszt utrzymania to kilkaset złotych rocznie plus opcjonalna opieka — jeśli słyszysz kwoty rzędu kilku tysięcy miesięcznie, dopytaj, co dokładnie za nie dostajesz.</p>

<h2><span class="idx">03 / Prawo</span>Pytania, które chronią Cię po projekcie</h2>

<h3>9. Czy dostanę pełne prawa autorskie do kodu?</h3>
<p>To musi być zapisane w umowie, a nie ustalone ustnie. Bez przeniesienia praw majątkowych możesz zapłacić za aplikację, której formalnie nie wolno Ci rozwijać u kogoś innego. Sprawdź też, czy przeniesienie obejmuje wszystkie pola eksploatacji i czy nie jest warunkowe.</p>

<h3>10. Czy dostanę dostęp do repozytorium i infrastruktury?</h3>
<p>Kod, baza danych, domena, hosting, konta w usługach zewnętrznych — wszystko powinno być zarejestrowane na Ciebie albo przekazane po zakończeniu. Klasyczna pułapka: domena zarejestrowana na wykonawcę „dla wygody", która staje się kartą przetargową przy rozstaniu.</p>

<h3>11. Co się stanie, jeśli przestaniemy współpracować?</h3>
<p>Zadaj to pytanie na pierwszym spotkaniu i obserwuj reakcję. Dobra odpowiedź opisuje procedurę: przekazanie kodu, dokumentacji i dostępów. Zła odpowiedź to zmiana tematu. Aplikacja, której nikt poza autorem nie potrafi rozwijać, to nie aktywo, tylko zobowiązanie.</p>

<h3>12. Czy kod będzie udokumentowany i w jakim stopniu?</h3>
<p>Nie potrzebujesz opasłej dokumentacji technicznej. Potrzebujesz tyle, żeby inny programista mógł przejąć projekt bez archeologii: opis architektury, instrukcja uruchomienia, wyjaśnienie nieoczywistych decyzji. Zapytaj, czy to wchodzi w cenę.</p>

<h2><span class="idx">04 / Ostrzeżenia</span>Sześć sygnałów, przy których warto się wycofać</h2>

<ul>
  <li><strong>Wycena bez rozmowy o zakresie.</strong> Kwota podana w odpowiedzi na trzy zdania w mailu jest zgadywana. Albo zostanie zrewidowana w trakcie, albo zawiera ogromny bufor.</li>
  <li><strong>Portfolio bez adresów.</strong> Same grafiki, żadnych działających wdrożeń.</li>
  <li><strong>Presja czasowa.</strong> „Ta cena obowiązuje do piątku" przy projekcie na kilkadziesiąt tysięcy złotych to technika sprzedażowa, nie oferta.</li>
  <li><strong>Brak pytań o Twój biznes.</strong> Jeśli wykonawca nie pyta, jak działa Twój proces, zbuduje to, co buduje zawsze.</li>
  <li><strong>Obietnica bez zastrzeżeń.</strong> „Zrobimy wszystko" oznacza, że nikt nie przeanalizował, czy dana integracja jest w ogóle możliwa.</li>
  <li><strong>Umowa bez klauzuli o prawach autorskich.</strong> Punkt bez dyskusji — bez tego nie podpisuj.</li>
</ul>

<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
  </span>
  <div class="t">
    <b>Jak porównywać oferty od różnych firm</b>
    <p>Wyślij wszystkim dokładnie ten sam opis procesu i poproś o rozbicie wyceny na etapy. Jeśli oferty różnią się kilkukrotnie, to zwykle nie kwestia stawek, tylko tego, że każda firma zrozumiała zakres inaczej. Wtedy dopytaj — różnica w rozumieniu zakresu jest ważniejsza niż różnica w cenie.</p>
  </div>
</div>

<h2><span class="idx">05 / Freelancer</span>Jedna osoba, agencja czy software house?</h2>

<table>
  <thead>
    <tr><th></th><th>Freelancer</th><th>Mała agencja</th><th>Software house</th></tr>
  </thead>
  <tbody>
    <tr><td>Koszt</td><td>Najniższy</td><td>Średni</td><td>Najwyższy</td></tr>
    <tr><td>Kontakt</td><td>Bezpośrednio z wykonawcą</td><td>Zwykle opiekun projektu</td><td>Handlowiec, potem project manager</td></tr>
    <tr><td>Ryzyko przy nieobecności</td><td>Wysokie</td><td>Średnie</td><td>Niskie</td></tr>
    <tr><td>Elastyczność</td><td>Wysoka</td><td>Średnia</td><td>Niska</td></tr>
    <tr><td>Duże, wieloletnie projekty</td><td>Trudne</td><td>Możliwe</td><td>Naturalne środowisko</td></tr>
  </tbody>
</table>

<p>Uczciwie: pracuję sam, więc mam tu interes. Dlatego powiem też o minusie — jedna osoba to jeden punkt awarii. Jeśli zachoruję, projekt czeka. Rekompensuję to przekazywaniem kodu i dokumentacji na bieżąco, tak żeby dowolny programista mógł przejąć projekt, ale ryzyko nie znika i warto je uwzględnić przy dużych, krytycznych wdrożeniach.</p>

<p>W drugą stronę: przy projekcie za 20–50 tysięcy złotych software house często oznacza, że Twoje zlecenie jest u niego najmniejsze — z odpowiadającym temu priorytetem.</p>

<h2><span class="idx">06 / Podsumowanie</span>Trzy pytania, jeśli masz czas tylko na trzy</h2>

<ul>
  <li><strong>„Pokażcie trzy działające wdrożenia z ostatniego roku."</strong> Weryfikuje kompetencje w minutę.</li>
  <li><strong>„Co dokładnie zawiera ta kwota i czego w niej nie ma?"</strong> Eliminuje 90% późniejszych sporów.</li>
  <li><strong>„Czy dostanę pełne prawa do kodu i dostęp do repozytorium?"</strong> Decyduje o tym, czy kupujesz aktywo, czy uzależnienie.</li>
</ul>

<p>Jeśli chcesz sprawdzić te odpowiedzi u mnie — <a href="/projekty" class="link">wszystkie moje wdrożenia mają adresy i działają na żywo</a>, <a href="/cennik" class="link">widełki cenowe są publiczne</a>, a prawa do kodu przechodzą na klienta po ostatniej fakturze. <a href="/kontakt" class="link">Umów bezpłatną konsultację</a> i zadaj mi te dwanaście pytań. Odpowiadam w 24 h w dni robocze.</p>'
) ON CONFLICT (slug) DO NOTHING;
