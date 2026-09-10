-- ============================================================
-- 016: Treści case studies (19 projektów)
-- WYGENEROWANE z content/case-studies/*.md - nie edytuj ręcznie.
-- Regeneracja: node scripts/build-case-studies.mjs
-- Wymaga wcześniej: 015_case_study_columns.sql
-- ============================================================

BEGIN;

-- airset-platforma
UPDATE portfolio_projects SET
  headline        = 'Jak AIRSET przeniósł szkolenia personelu lotniczego z PDF-ów do systemu z audytem?',
  tags            = ARRAY['E-learning', 'Supabase', 'Next.js']::text[],
  scope           = 'UX, kod, baza danych, bezpieczeństwo',
  branza          = 'Lotnictwo',
  obszar          = 'Szkolenia wewnętrzne i zgodność',
  hero_caption    = 'Dashboard szkoleń · Platforma AIRSET',
  description     = 'Platforma e-learningowa dla linii lotniczych. Sześć typów pytań w kreatorze testów, raporty miesięczne w PDF, CSV i XLSX oraz pełne logi audytowe.',
  case_study_html = '<p>AIRSET to linie lotnicze, w których szkolenia personelu nie są dodatkiem do pracy, tylko wymogiem operacyjnym. Trzeba je przeprowadzić, sprawdzić wiedzę i umieć później pokazać, że się odbyły.</p>
<p>Zbudowałem platformę e-learningową, która obsługuje wszystkie trzy rzeczy: publikowanie materiałów, testy końcowe i dokumentację tego, kto co przerobił i kiedy.</p>
<div class="stat-band"><div class="s"><div class="v">6</div><div class="l">typów pytań w kreatorze testów</div></div><div class="s"><div class="v">3</div><div class="l">formaty eksportu raportów: PDF, CSV, XLSX</div></div><div class="s"><div class="v">3</div><div class="l">poziomy uprawnień: Super Admin, Admin, Użytkownik</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Szkolenie da się przeprowadzić na PDF-ie, udowodnić już nie</h2>
<p>Materiały szkoleniowe rozsyłane mailem docierają do ludzi, ale nie zostawiają śladu. Nie wiadomo, kto otworzył prezentację, kto rozwiązał test i z jakim wynikiem. W branży, w której regularne szkolenia i weryfikacja wiedzy są wymogiem, brak tego śladu jest realnym problemem, a nie niedogodnością.</p>
<ul><li>Materiały (PDF, PPTX, PNG) krążyły w załącznikach, bez wersjonowania i bez wiedzy, kto z nich korzystał.</li><li>Testy sprawdzano ręcznie, więc wyniki trafiały do arkusza z opóźnieniem albo wcale.</li><li>Nie było raportu miesięcznego, który dałoby się przekazać dalej bez ręcznego składania.</li><li>Dostęp do szkoleń nadawano na zasadzie "wyślij temu, kto powinien to mieć".</li></ul>
<div class="pullquote"><p>Szkolenie, którego nie da się odtworzyć po fakcie, w praktyce nie istnieje. Liczy się nie tylko to, że ktoś je przeszedł, ale też to, że można to pokazać.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Materiały, testy i dziennik zdarzeń w jednym systemie</h2>
<p>Platforma stoi na Next.js 16 i Supabase. Administrator publikuje szkolenie razem z materiałami, buduje test końcowy i przypisuje dostęp. Pracownik widzi swój dashboard z postępem, otwiera materiały w przeglądarce i rozwiązuje test.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/airset-platforma/hero.jpg" alt="Dashboard szkoleń platformy AIRSET z listą kursów i postępem nauki" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Dashboard użytkownika: przypisane szkolenia i postęp nauki</figcaption></figure>
<h3>Kreator testów z sześcioma typami pytań</h3>
<p>Test końcowy to nie tylko wybór A, B, C. Kreator obsługuje jednokrotny i wielokrotny wybór, prawdę i fałsz, pytania otwarte, uzupełnianie luk oraz dopasowywanie par. Dzięki temu ten sam mechanizm obsługuje szkolenie proceduralne i szkolenie ze znajomości sprzętu.</p>
<h3>Dostęp przypisywany, a nie rozsyłany</h3>
<p>Kontrola dostępu opiera się na przypisaniach indywidualnych i grupowych. Nowy pracownik dostaje zaproszenie e-mail i od razu widzi tylko te szkolenia, które go dotyczą.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Uprawnienia egzekwuje baza, nie interfejs</b><p>Dostęp do danych kontrolują polityki Row Level Security w Supabase, więc ograniczenie działa przy każdym zapytaniu. Użytkownik nie zobaczy cudzych wyników nawet wtedy, gdy trafi na adres bezpośrednio.</p></div></div>
<h3>Raporty i logi, czyli część, o której zwykle się zapomina</h3>
<p>System generuje raporty miesięczne z eksportem do PDF, CSV i XLSX, a każda operacja zapisuje się w logu audytowym. To ten fragment, który przy kontroli odróżnia platformę szkoleniową od folderu z plikami.</p>
<h2><span class="idx">03 / Rezultat</span>Szkolenie zostawia ślad, którego można użyć</h2>
<p>AIRSET ma jedno miejsce na materiały, testy i wyniki, z dostępem przypisywanym per osoba lub grupa i z dziennikiem zdarzeń pod spodem. Raport za miesiąc powstaje w trzech formatach jednym kliknięciem, zamiast być składanym ręcznie z kilku źródeł.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Materiały PDF, PPTX i PNG otwierają się w przeglądarce, bez pobierania na dysk.</li><li>Nowy pracownik dostaje zaproszenie e-mail zamiast konta zakładanego ręcznie.</li><li>Interfejs ma tryb jasny i ciemny, bo część szkoleń odbywa się poza biurem.</li></ul>
<p>Masz w firmie szkolenia, które trzeba udokumentować, a nie tylko przeprowadzić? <a href="/kontakt" class="link">Napisz do mnie</a>. Różnica między platformą a folderem z PDF-ami zaczyna się przy pierwszym audycie.</p>
<div class="tech-tags"><span>Next.js 16</span><span>React 19</span><span>TypeScript</span><span>Supabase</span><span>Zod</span><span>React Hook Form</span><span>jsPDF</span><span>Resend</span><span>Vitest</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":6,"l":"typów pytań w kreatorze testów"},{"v":3,"l":"formaty eksportu raportów: PDF, CSV, XLSX"},{"v":3,"l":"poziomy uprawnień: Super Admin, Admin, Użytkownik"}],"proces":[],"dodatkowe":["Materiały PDF, PPTX i PNG otwierają się w przeglądarce, bez pobierania na dysk.","Nowy pracownik dostaje zaproszenie e-mail zamiast konta zakładanego ręcznie.","Interfejs ma tryb jasny i ciemny, bo część szkoleń odbywa się poza biurem."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Dashboard użytkownika z listą przypisanych szkoleń i postępem nauki. Realny zrzut, tryb ciemny.","zasada":"Postęp pokaż taki, jaki jest na koncie testowym. Bez dorysowanych kółek procentowych i bez wymyślonych statystyk \"ukończeń w tym miesiącu\".","alt":"Dashboard szkoleń platformy AIRSET z listą kursów i postępem nauki","podpis":"Dashboard użytkownika: przypisane szkolenia i postęp nauki"},{"slot":"proces-kreator","typ":"screenshot","opis":"Kreator testu z rozwiniętą listą sześciu typów pytań (jednokrotny wybór, wielokrotny wybór, prawda/fałsz, otwarte, luki, dopasowanie par).","zasada":"Musi być widocznych sześć realnych typów. To najmocniejszy dowód w całym case study, więc żadnych retuszy."},{"slot":"proces-raporty","typ":"crop","opis":"Wycinek widoku raportu miesięcznego z przyciskami eksportu PDF, CSV, XLSX.","zasada":"Pokaż realne przyciski eksportu. Bez ikon, których w aplikacji nie ma."},{"slot":"proces-audyt","typ":"crop","opis":"Wycinek dziennika logów audytowych: kto, co, kiedy, na jakim zasobie.","zasada":"Nazwiska i adresy e-mail zanonimizuj w danych testowych. Nie zamazuj ich w Photoshopie, bo rozmycia wyglądają jak ukrywanie braków."}]'::jsonb
WHERE slug = 'airset-platforma';

-- akademia-wiedzy
UPDATE portfolio_projects SET
  headline        = 'Jak Akademia Wiedzy przestała prowadzić 865 uczniów w arkuszu kalkulacyjnym?',
  tags            = ARRAY['Aplikacja webowa', 'EdTech', 'Supabase']::text[],
  scope           = 'UX, kod, baza danych, płatności',
  branza          = 'Edukacja online',
  obszar          = 'System operacyjny firmy',
  hero_caption    = 'Panel administratora · akademia-kamilmiacz.pl',
  description     = 'System e-korepetycji dla 40 korepetytorów i 865 uczniów. Lekcje generują się z grafiku dostępności, rozliczenia liczą się same, rodzic płaci przez PayU.',
  case_study_html = '<p>Akademia Wiedzy uczy online uczniów szkół podstawowych i średnich w całej Polsce. Kiedy Kamil Miącz zgłosił się do mnie, firma miała ponad 40 korepetytorów, 865 uczniów i dziewięć przedmiotów w ofercie. Cała ta operacja stała na arkuszach i pamięci właściciela.</p>
<p>Zbudowałem wewnętrzny system, który przejął grafiki, przypisania uczniów do korepetytorów, generowanie lekcji i rozliczenia. Firma dostała jedno miejsce zamiast pięciu miejsc, w których dane musiały się zgadzać.</p>
<div class="stat-band"><div class="s"><div class="v">865+</div><div class="l">uczniów prowadzonych w jednym systemie</div></div><div class="s"><div class="v">40+</div><div class="l">korepetytorów z własnym panelem i grafikiem</div></div><div class="s"><div class="v">9</div><div class="l">przedmiotów z osobnymi stawkami i przypisaniami</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Grafik 40 osób nie mieści się w jednym arkuszu</h2>
<p>Przy dziesięciu korepetytorach arkusz działa. Przy czterdziestu zaczyna się rozjeżdżać: ktoś zmienia dostępność w czwartek, ktoś inny pracuje na kopii sprzed tygodnia, a uczeń dostaje termin, który już nie istnieje. Rozliczenia były osobnym problemem, bo liczyło się je na koniec miesiąca ręcznie, z listy lekcji, która nie zawsze była kompletna.</p>
<ul><li>Planowanie lekcji na kolejny miesiąc zajmowało właścicielowi kilka wieczorów.</li><li>Nie było jednego miejsca, w którym widać obłożenie konkretnego korepetytora.</li><li>Nowi uczniowie zapisywali się przez wiadomości, więc pierwszy termin ustalało się w kilku turach.</li><li>Faktury i należności wyliczano ręcznie, na podstawie odbytych lekcji spisanych po fakcie.</li></ul>
<div class="pullquote"><p>Firma usługowa nie rośnie na tym, że właściciel szybciej klika w arkuszu. Rośnie wtedy, gdy grafik przestaje wymagać jego uwagi.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Trzy role i baza, która sama tworzy lekcje</h2>
<p>System obsługuje trzy role, każda widzi inny wycinek firmy. Administrator zarządza uczniami, korepetytorami, przedmiotami, stawkami i przypisaniami. Korepetytor ma swój grafik, kalendarz, listę uczniów i raportowanie godzin. Gość, czyli osoba, która dopiero pyta o zajęcia, ma publiczny kalendarz z wolnymi terminami.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/akademia-wiedzy/hero.jpg" alt="Panel administratora Akademii Wiedzy z listą uczniów, przypisanym korepetytorem i statusem rozliczenia" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Panel administratora: uczniowie, przypisania i stan rozliczeń w jednym widoku</figcaption></figure>
<h3>Korepetytor ustawia dostępność raz, nie co miesiąc</h3>
<p>Zamiast wpisywać konkretne terminy, korepetytor definiuje tygodniową dostępność. Administrator przypisuje do tych slotów uczniów. Resztę robi baza: funkcje i triggery w PostgreSQL tworzą sesje lekcyjne na miesiące wprzód, bez udziału człowieka.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Logika generowania lekcji siedzi w bazie, nie w aplikacji</b><p>Lekcje powstają w PostgreSQL, więc powstają tak samo niezależnie od tego, czy zmiana przyszła z panelu administratora, czy z panelu korepetytora. Jedno miejsce z regułami zamiast dwóch, które muszą być zgodne.</p></div></div>
<h3>Rozliczenia liczą się z tego, co faktycznie się odbyło</h3>
<p>Moduł rozliczeń nalicza należność na podstawie odbytych lekcji i stawki przypisanej do przedmiotu. Zamiast numeru konta w wiadomości rodzic dostaje link płatniczy PayU. Właściciel widzi, kto zapłacił, bez zaglądania do bankowości.</p>
<h3>Nowy uczeń rezerwuje termin bez zakładania konta</h3>
<p>Publiczny kalendarz pokazuje wolne sloty. Rezerwacja kończy się automatycznym potwierdzeniem e-mail przez Resend. Pierwszy kontakt przestał wymagać wymiany kilku wiadomości.</p>
<h3>Każdy widzi dokładnie tyle, ile powinien</h3>
<p>Dostęp do danych kontrolują polityki Row Level Security w Supabase, więc ograniczenie działa na poziomie zapytania do bazy, a nie na poziomie widoku w interfejsie. Korepetytor nie zobaczy uczniów innego korepetytora nawet wtedy, gdy trafi na adres bezpośrednio.</p>
<h2><span class="idx">03 / Rezultat</span>Firma zajmuje się uczeniem, nie administracją</h2>
<p>Grafik, przypisania i rozliczenia dla 865 uczniów działają w jednym systemie, a lekcje na kolejne miesiące powstają automatycznie z tygodniowej dostępności korepetytorów. Praca, którą właściciel wykonywał wieczorami w arkuszu, jest teraz efektem ubocznym tego, że ktoś zaznaczył wolne godziny.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Nowy korepetytor wchodzi do systemu przez zaproszenie e-mail, bez ręcznego zakładania konta.</li><li>Rodzic dostaje link płatniczy PayU zamiast numeru konta w wiadomości.</li><li>Uczeń może zarezerwować pierwszy termin bez zakładania konta.</li></ul>
<p>Prowadzisz firmę usługową, w której grafik, ludzie i rozliczenia siedzą w kilku arkuszach naraz? <a href="/kontakt" class="link">Napisz do mnie</a>. Zwykle po jednej rozmowie widać, który fragment warto zautomatyzować najpierw.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>Supabase</span><span>PostgreSQL</span><span>PayU</span><span>Resend</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":"865+","l":"uczniów prowadzonych w jednym systemie"},{"v":"40+","l":"korepetytorów z własnym panelem i grafikiem"},{"v":9,"l":"przedmiotów z osobnymi stawkami i przypisaniami"}],"proces":[],"dodatkowe":["Nowy korepetytor wchodzi do systemu przez zaproszenie e-mail, bez ręcznego zakładania konta.","Rodzic dostaje link płatniczy PayU zamiast numeru konta w wiadomości.","Uczeń może zarezerwować pierwszy termin bez zakładania konta."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Panel administratora, widok listy uczniów z przypisanym korepetytorem, przedmiotem i statusem rozliczenia. Realny zrzut z aplikacji, szerokość 1600 px, obcięty do samej treści bez paska przeglądarki.","zasada":"Nazwiska zanonimizuj w samej aplikacji przed zrzutem (Jan K., Anna W.). Nie podmieniaj liczb w retuszu, nie dorysowuj wykresów ani KPI, których w aplikacji nie ma.","alt":"Panel administratora Akademii Wiedzy z listą uczniów, przypisanym korepetytorem i statusem rozliczenia","podpis":"Panel administratora: uczniowie, przypisania i stan rozliczeń w jednym widoku"},{"slot":"proces-dostepnosc","typ":"crop","opis":"Wycinek widoku grafiku dostępności korepetytora, siatka tygodniowa z zaznaczonymi slotami godzinowymi. Sam komponent, bez nawigacji bocznej.","zasada":"Zwykły zrzut, bez cieni i mockupów laptopa. Jeśli slotów jest mało, ustaw realny tydzień, nie wypełniaj siatki na siłę."},{"slot":"proces-rozliczenia","typ":"crop","opis":"Wycinek modułu rozliczeń, lista odbytych lekcji z kwotą i przyciskiem wysyłki linku płatniczego.","zasada":"Kwoty zostaw takie, jakie są w bazie testowej. Bez czerwono-zielonych strzałek wzrostu."}]'::jsonb
WHERE slug = 'akademia-wiedzy';

-- audiogen
UPDATE portfolio_projects SET
  headline        = 'Jak startup audiobookowy zbudował listę oczekujących przed premierą produktu?',
  tags            = ARRAY['Landing page', 'Automatyzacja', 'Framer']::text[],
  scope           = 'Design, wdrożenie, automatyzacja',
  branza          = 'Audiobooki',
  obszar          = 'Pozyskiwanie leadów przed premierą',
  hero_caption    = 'Zapis na whitelistę · Audiogen',
  description     = 'Landing page dla startupu Audiogen z zapisem na whitelistę. Zgłoszenie trafia do bazy i uruchamia powiadomienie, bez ręcznego przepisywania z maili.',
  case_study_html = '<p>Audiogen to startup pracujący nad audiobookami. Zgłosił się na etapie, na którym produktu jeszcze nie było, ale były osoby zainteresowane. Zadanie brzmiało: zbudować stronę, która zamienia to zainteresowanie w listę kontaktów.</p>
<p>Zaprojektowałem i wdrożyłem landing page z zapisem na whitelistę oraz automatyzację, która przejmuje zgłoszenia od momentu kliknięcia.</p>
<div class="stat-band"><div class="s"><div class="v">1</div><div class="l">cel strony: zapis na listę oczekujących</div></div><div class="s"><div class="v">0</div><div class="l">ręcznego przepisywania zgłoszeń ze skrzynki</div></div><div class="s"><div class="v">auto</div><div class="l">powiadomienie o nowym zgłoszeniu bez sprawdzania bazy</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Lista oczekujących w skrzynce mailowej to nie jest lista</h2>
<p>Przed premierą jedynym mierzalnym zasobem startupu są ludzie, którzy powiedzieli "dajcie znać". Jeśli te deklaracje leżą w skrzynce, to formalnie są, ale nie da się ich policzyć, posegmentować ani odezwać się do nich jednym ruchem.</p>
<ul><li>Zgłoszenia trafiały tam, gdzie trafia wszystko inne, czyli do jednej skrzynki.</li><li>Nie było jednego licznika mówiącego, ile osób faktycznie czeka.</li><li>Kontakt z tymi osobami wymagałby ręcznego zebrania adresów.</li></ul>
<div class="pullquote"><p>Przed premierą lista oczekujących jest jedyną rzeczą, którą da się zmierzyć. Warto, żeby dało się ją też otworzyć.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Jedna strona, jeden przycisk, automatyczne przejęcie zgłoszenia</h2>
<p>Landing page powstał we Framerze, z jednym celem i jednym wezwaniem do działania. Nie ma tu menu z sześcioma pozycjami ani sekcji o zespole, bo na tym etapie nie mają one nic do zrobienia.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/audiogen/hero.jpg" alt="Landing page Audiogen z formularzem zapisu na whitelistę" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Landing page: jeden komunikat i jeden przycisk</figcaption></figure>
<h3>Zgłoszenie idzie dalej samo</h3>
<p>Po wysłaniu formularza zgłoszenie trafia do bazy i uruchamia powiadomienie. Nikt nie musi zaglądać do skrzynki, żeby wiedzieć, że coś przyszło, ani przepisywać adresu do arkusza.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Integracja z mailingiem od pierwszego dnia</b><p>Baza zapisów jest podpięta do systemu mailingowego, więc komunikacja przed premierą startuje z gotowej listy, a nie z eksportu robionego w ostatniej chwili.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Zainteresowanie zamienione w listę, z którą da się pracować</h2>
<p>Audiogen ma stronę, która zbiera zapisy, i proces, który przejmuje je bez udziału człowieka. Zamiast wiadomości rozsypanych w skrzynce powstaje baza gotowa do komunikacji w dniu premiery.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Zgłoszenia lądują w jednej bazie zamiast w skrzynce mailowej.</li><li>Integracja z systemem mailingowym przygotowuje grunt pod komunikację przed premierą.</li><li>Strona ma jeden przycisk, więc nie ma czym rozpraszać odwiedzającego.</li></ul>
<p>Zbierasz zapisy przed premierą i wciąż przepisujesz je ze skrzynki do arkusza? <a href="/kontakt" class="link">Napisz do mnie</a>. To jeden wieczór pracy, który oszczędza kilka miesięcy klikania.</p>
<div class="tech-tags"><span>Framer</span><span>React</span><span>TypeScript</span><span>Automatyzacja</span></div>',
  case_study_data = '{"rezultaty":[{"v":1,"l":"cel strony: zapis na listę oczekujących"},{"v":0,"l":"ręcznego przepisywania zgłoszeń ze skrzynki"},{"v":"auto","l":"powiadomienie o nowym zgłoszeniu bez sprawdzania bazy"}],"proces":[],"dodatkowe":["Zgłoszenia lądują w jednej bazie zamiast w skrzynce mailowej.","Integracja z systemem mailingowym przygotowuje grunt pod komunikację przed premierą.","Strona ma jeden przycisk, więc nie ma czym rozpraszać odwiedzającego."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Sekcja hero landing page''a Audiogen z formularzem zapisu na whitelistę.","zasada":"Realny zrzut ze strony. Bez dopisywania licznika \"już 2137 zapisanych\", jeśli takiego elementu nie ma.","alt":"Landing page Audiogen z formularzem zapisu na whitelistę","podpis":"Landing page: jeden komunikat i jeden przycisk"},{"slot":"proces-formularz","typ":"crop","opis":"Formularz zapisu w stanie po wysłaniu, z komunikatem potwierdzenia.","zasada":"Pokaż prawdziwy komunikat aplikacji."},{"slot":"proces-baza","typ":"crop","opis":"Widok bazy zebranych zgłoszeń z datami.","zasada":"Adresy e-mail zanonimizuj przed zrzutem, ale zostaw realną strukturę danych. Nie generuj listy fikcyjnych adresów, żeby wyglądała dłużej."}]'::jsonb
WHERE slug = 'audiogen';

-- bcsc-ksiegowosc
UPDATE portfolio_projects SET
  headline        = 'Jak biuro księgowe dla startupów przestało wyglądać jak biuro księgowe?',
  tags            = ARRAY['Strona firmowa', 'SEO', 'Next.js']::text[],
  scope           = 'Design, kod, treść, SEO',
  branza          = 'Księgowość',
  obszar          = 'Pozyskiwanie klientów',
  hero_caption    = 'Strona główna · bcsc.pl',
  description     = 'Strona dla Business Care SC, biura rachunkowego obsługującego młode firmy. Kalkulator wyceny zamiast cennika na zapytanie i blog pod wyszukiwarkę.',
  case_study_html = '<p>Strony biur rachunkowych wyglądają niemal identycznie: te same zdjęcia kalkulatora i segregatorów, ta sama lista usług, ta sama informacja, że cenę ustala się indywidualnie. Business Care SC obsługuje startupy i młode firmy, czyli grupę, która wybiera księgowość zupełnie inaczej niż spółka z dwudziestoletnim stażem.</p>
<p>Zbudowałem stronę, która jest napisana do tej jednej grupy, i dołożyłem kalkulator, który odpowiada na pytanie o cenę.</p>
<div class="stat-band"><div class="s"><div class="v">1</div><div class="l">kalkulator wyceny zamiast "cena do ustalenia"</div></div><div class="s"><div class="v">1</div><div class="l">grupa docelowa, do której napisana jest cała strona</div></div><div class="s"><div class="v">CMS</div><div class="l">treści i wpisy blogowe edytowalne bez programisty</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Wszyscy piszą to samo, więc nikt niczego nie mówi</h2>
<p>Kiedy każda strona w branży obiecuje rzetelność, doświadczenie i indywidualne podejście, żadna z tych rzeczy nie jest już argumentem. Zostaje cena, której nikt nie podaje, i odległość od biura, która przy zdalnej księgowości nie ma znaczenia.</p>
<ul><li>Oferta pisana do wszystkich nie mówiła nic konkretnego założycielowi jednoosobowej działalności.</li><li>Brak ceny na stronie oznaczał, że każde zapytanie o koszt musiał obsłużyć człowiek.</li><li>Nie było powodu, dla którego ktoś miałby trafić na tę stronę z wyszukiwarki.</li></ul>
<div class="pullquote"><p>W branży, w której wszyscy mówią to samo, wygrywa ten, kto mówi do kogoś konkretnego.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Strona napisana do startupów, z ceną i z treścią</h2>
<p>Punktem wyjścia było zawężenie: cała komunikacja mówi do osoby, która niedawno założyła firmę albo właśnie się do tego przymierza. Reszta decyzji wynika z tego jednego wyboru.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/bcsc-ksiegowosc/hero.jpg" alt="Strona główna Business Care SC" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Strona główna: komunikacja adresowana do startupów i młodych firm</figcaption></figure>
<h3>Kalkulator zamiast "cena do ustalenia"</h3>
<p>Wycena liczy się na stronie, na podstawie formy działalności i skali dokumentów. Zapytanie o cenę przestało być powodem do wysyłania maila, a stało się czymś, co odwiedzający sprawdza sam.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Blog jest tu narzędziem pozyskiwania, nie ozdobą</b><p>Założyciel firmy szuka odpowiedzi na bardzo konkretne pytania: jaka forma opodatkowania, kiedy VAT, co z ZUS-em na starcie. Wpisy na te tematy to najtańszy sposób, żeby trafić na stronę zanim ktoś zacznie szukać biura.</p></div></div>
<h3>Opinie na stronie, a nie w podpisie maila</h3>
<p>Sekcja z opiniami klientów jest częścią strony, więc dowód wiarygodności działa również dla kogoś, kto nigdy nie napisze pierwszej wiadomości.</p>
<h2><span class="idx">03 / Rezultat</span>Strona, która filtruje zamiast przyciągać wszystkich</h2>
<p>Business Care SC ma serwis mówiący do jednej grupy, z policzalną wyceną i z treścią, która obsługuje wejścia z wyszukiwarki. Treści i wpisy da się edytować bez kontaktu z programistą.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Opinie klientów są na stronie, a nie w podpisie maila.</li><li>Blog z poradami księgowymi obsługuje wejścia z wyszukiwarki.</li><li>Formularze kontaktowe rozdzielają typ sprawy, więc zapytanie od razu trafia we właściwe ręce.</li></ul>
<p>Prowadzisz usługi profesjonalne i konkurujesz z firmami, które wyglądają identycznie? <a href="/kontakt" class="link">Napisz do mnie</a>. Zawężenie grupy docelowej zwykle robi więcej niż zmiana kolorów.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>shadcn/ui</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":1,"l":"kalkulator wyceny zamiast \"cena do ustalenia\""},{"v":1,"l":"grupa docelowa, do której napisana jest cała strona"},{"v":"CMS","l":"treści i wpisy blogowe edytowalne bez programisty"}],"proces":[],"dodatkowe":["Opinie klientów są na stronie, a nie w podpisie maila.","Blog z poradami księgowymi obsługuje wejścia z wyszukiwarki.","Formularze kontaktowe rozdzielają typ sprawy, więc zapytanie od razu trafia we właściwe ręce."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Strona główna bcsc.pl z nagłówkiem adresowanym do startupów i młodych firm.","zasada":"Realny zrzut z produkcji. Bez dorysowanych logotypów klientów, których na stronie nie ma.","alt":"Strona główna Business Care SC","podpis":"Strona główna: komunikacja adresowana do startupów i młodych firm"},{"slot":"proces-kalkulator","typ":"screenshot","opis":"Kalkulator wyceny usług księgowych z wybranymi parametrami (forma działalności, liczba dokumentów) i wynikiem.","zasada":"Kwota musi pochodzić z realnego przeliczenia w narzędziu."},{"slot":"proces-opinie","typ":"crop","opis":"Sekcja opinii klientów.","zasada":"Tylko prawdziwe opinie, z prawdziwymi podpisami. Bez zdjęć twarzy generowanych AI i bez wymyślonych nazwisk."}]'::jsonb
WHERE slug = 'bcsc-ksiegowosc';

-- biblioteka-promptow
UPDATE portfolio_projects SET
  headline        = 'Jak zbudowałem polską bibliotekę 1000 promptów AI i po co mi to było?',
  tags            = ARRAY['Projekt własny', 'Next.js', 'SEO']::text[],
  scope           = 'Koncepcja, treść, UX, kod, SEO',
  branza          = 'Narzędzia AI',
  obszar          = 'Produkt treściowy',
  hero_caption    = 'Katalog promptów · bibliotekapromptow.pl',
  description     = 'Projekt własny: ponad 1000 gotowych promptów po polsku do ChatGPT, Claude, Gemini, Midjourney, DALL-E i Stable Diffusion. Wyszukiwarka, kategorie, kopiowanie jednym kliknięciem.',
  case_study_html = '<p>Biblioteka Promptów to mój projekt własny. Powstał z prostej obserwacji: polskich materiałów o pracy z narzędziami AI było dużo, ale prawie wszystkie tłumaczyły, czym jest prompt, zamiast dawać gotowy do użycia.</p>
<p>Zbudowałem katalog ponad 1000 promptów po polsku, podzielony na kategorie i przeszukiwalny. Bez logowania, bez opłat, bez rejestracji.</p>
<div class="stat-band"><div class="s"><div class="v">1000+</div><div class="l">gotowych promptów w katalogu</div></div><div class="s"><div class="v">15+</div><div class="l">kategorii tematycznych</div></div><div class="s"><div class="v">6</div><div class="l">obsługiwanych narzędzi AI</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Poradnik o promptach to nie to samo co prompt</h2>
<p>Osoba, która otwiera ChatGPT po raz piąty, nie potrzebuje artykułu o inżynierii promptów. Potrzebuje zdania, które może wkleić i zobaczyć wynik. To jest cała różnica między treścią edukacyjną a narzędziem.</p>
<ul><li>Materiały po polsku najczęściej tłumaczyły teorię zamiast dawać gotowy tekst.</li><li>Prompty do generatorów obrazów rządzą się innymi regułami niż prompty do czatu, a leżały wymieszane.</li><li>Znalezienie promptu pod konkretne zadanie wymagało przeczytania całego artykułu.</li></ul>
<div class="pullquote"><p>Użytkownik narzędzia AI nie szuka wiedzy o promptach. Szuka jednego zdania, które można wkleić i zobaczyć, czy działa.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Katalog zbudowany wokół szukania, nie czytania</h2>
<p>Cała struktura serwisu jest podporządkowana jednej czynności: znaleźć i skopiować. Wyszukiwarka na górze, kategorie z boku, prompt w karcie z przyciskiem kopiowania.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/biblioteka-promptow/hero.jpg" alt="Katalog promptów na bibliotekapromptow.pl z kartami i filtrem kategorii" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Katalog: wyszukiwarka, kategorie i karty promptów gotowe do skopiowania</figcaption></figure>
<h3>Podział na prompty tekstowe i graficzne</h3>
<p>To dwie osobne sekcje, bo to dwa różne rzemiosła. Prompt do Midjourney opisuje kadr, styl i światło. Prompt do Claude opisuje rolę, zadanie i format odpowiedzi. Trzymanie ich razem tylko utrudniałoby szukanie.</p>
<h3>Piętnaście kategorii zamiast jednej długiej listy</h3>
<p>Marketing, copywriting, programowanie, analiza danych, treści na social media i kolejne obszary. Podział działa jak spis treści: użytkownik trafia do właściwej półki, zanim zacznie czytać cokolwiek.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Sześć narzędzi, jeden katalog</b><p>ChatGPT, Claude, Gemini, Midjourney, DALL-E i Stable Diffusion. Prompt przypisany do narzędzia oszczędza etap zgadywania, czy zadziała tam, gdzie ma zadziałać.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Produkt treściowy, który działa jak narzędzie</h2>
<p>Biblioteka Promptów ma ponad 1000 pozycji w 15 kategoriach, dla sześciu narzędzi, z wyszukiwarką i kopiowaniem jednym kliknięciem. Cały katalog jest darmowy, także komercyjnie, więc nie ma bariery między wejściem na stronę a użyciem tego, po co ktoś przyszedł.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Prompty tekstowe i graficzne mają osobne sekcje, bo służą do czego innego.</li><li>Kopiowanie jednym kliknięciem, bez zaznaczania tekstu myszką.</li><li>Cały katalog jest darmowy, także do użytku komercyjnego.</li></ul>
<p>Planujesz produkt treściowy, który ma się bronić w wyszukiwarce, a nie tylko ładnie wyglądać? <a href="/kontakt" class="link">Napisz do mnie</a>. Struktura katalogu decyduje o tym więcej niż warstwa graficzna.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>OpenAI API</span><span>Claude API</span></div>',
  case_study_data = '{"rezultaty":[{"v":"1000+","l":"gotowych promptów w katalogu"},{"v":"15+","l":"kategorii tematycznych"},{"v":6,"l":"obsługiwanych narzędzi AI"}],"proces":[],"dodatkowe":["Prompty tekstowe i graficzne mają osobne sekcje, bo służą do czego innego.","Kopiowanie jednym kliknięciem, bez zaznaczania tekstu myszką.","Cały katalog jest darmowy, także do użytku komercyjnego."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Widok katalogu z kartami promptów, filtrem kategorii i wyszukiwarką u góry.","zasada":"Realne prompty z serwisu, czytelne w zrzucie. Bez dorysowanego licznika \"1247 promptów\", jeśli aplikacja go nie wyświetla.","alt":"Katalog promptów na bibliotekapromptow.pl z kartami i filtrem kategorii","podpis":"Katalog: wyszukiwarka, kategorie i karty promptów gotowe do skopiowania"},{"slot":"proces-kategorie","typ":"crop","opis":"Wycinek nawigacji kategorii z widocznym podziałem na prompty tekstowe i graficzne.","zasada":"Pokaż realną listę kategorii, także jeśli jest długa."},{"slot":"proces-prompt","typ":"crop","opis":"Pojedyncza karta promptu w stanie po kliknięciu przycisku kopiowania.","zasada":"Bez dodawania emoji i konfetti do potwierdzenia skopiowania."}]'::jsonb
WHERE slug = 'biblioteka-promptow';

-- cytomania
UPDATE portfolio_projects SET
  headline        = 'Jak przenieść grupę na Facebooku do serwisu, w którym da się cokolwiek znaleźć?',
  tags            = ARRAY['Portal społecznościowy', 'Next.js', 'UGC']::text[],
  scope           = 'UX, kod, moderacja',
  branza          = 'Społeczności internetowe',
  obszar          = 'Produkt społecznościowy',
  hero_caption    = 'Katalog cytatów · cytomania.pl',
  description     = 'Portal z cytatami filmowymi dla społeczności z Facebooka. Dodawanie, ocenianie, kolekcje i wyszukiwarka zamiast przewijania grupy w nieskończoność.',
  case_study_html = '<p>Cytomania wyrosła z grupy na Facebooku poświęconej cytatom filmowym. Grupa działała, ale miała wadę wpisaną w medium: treść, która pojawiła się dwa tygodnie temu, w praktyce przestaje istnieć.</p>
<p>Zbudowałem portal, w którym te same treści dają się wyszukać, ocenić i zebrać w kolekcje.</p>
<div class="stat-band"><div class="s"><div class="v">1</div><div class="l">wyszukiwarka zamiast przewijania osi czasu</div></div><div class="s"><div class="v">3</div><div class="l">działania użytkownika: dodawanie, ocenianie, kolekcje</div></div><div class="s"><div class="v">1</div><div class="l">panel moderacji dla osoby prowadzącej społeczność</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Oś czasu nie jest archiwum</h2>
<p>Grupa na Facebooku świetnie nadaje się do rozmowy i fatalnie do gromadzenia. Nie ma sensownego szukania, nie ma kategorii, a najlepszy wpis sprzed roku leży pod tysiącem nowszych.</p>
<ul><li>Cytat sprzed miesiąca dało się odnaleźć tylko przypadkiem.</li><li>Nie było sposobu, żeby zebrać własną listę ulubionych.</li><li>Ocena treści kończyła się na reakcjach, które znikają razem z wpisem.</li><li>Cała społeczność mieszkała na platformie, na którą jej właściciel nie ma wpływu.</li></ul>
<div class="pullquote"><p>Grupa jest dobrym miejscem na rozmowę i złym miejscem na archiwum. Wszystko, co warto zachować, znika po tygodniu.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Trzy czynności i wyszukiwarka</h2>
<p>Świadomie ograniczyłem zakres do trzech rzeczy, które użytkownik może zrobić: dodać cytat, ocenić cudzy, zapisać go do własnej kolekcji. Portal społecznościowy z dziesięcioma funkcjami zwykle nie ma żadnej używanej.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/cytomania/hero.jpg" alt="Katalog cytatów Cytomanii z kartami i ocenami" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Katalog: cytaty z ocenami i możliwością zapisania do kolekcji</figcaption></figure>
<h3>Wyszukiwarka jako główna funkcja</h3>
<p>To jest rzecz, której grupa nie ma i nie będzie miała. Znalezienie konkretnego cytatu albo cytatów z jednego filmu jest tu podstawową czynnością, a nie efektem ubocznym przewijania.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Kolekcje zamiast zakładek w przeglądarce</b><p>Własna lista zapisanych cytatów daje użytkownikowi powód, żeby wrócić. Bez tego serwis z treścią użytkowników jest miejscem, do którego się wchodzi raz.</p></div></div>
<h3>Moderacja bez zaglądania do bazy</h3>
<p>Panel administratora pozwala osobie prowadzącej społeczność reagować na zgłoszenia i porządkować treści. Przy treściach dodawanych przez użytkowników to nie jest funkcja dodatkowa, tylko warunek działania serwisu.</p>
<h2><span class="idx">03 / Rezultat</span>Społeczność z własnym archiwum</h2>
<p>Cytomania daje społeczności to, czego grupa dać nie może: wyszukiwanie, kolekcje i trwałość treści. Trzy podstawowe czynności zamiast rozbudowanego portalu, którego nikt nie zdąży poznać.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Konta użytkowników pozwalają przypisać treść do autora.</li><li>Kolekcje działają jak prywatne listy, a nie jak kolejny folder zakładek.</li><li>Panel administratora pozwala reagować na zgłoszenia bez grzebania w bazie.</li></ul>
<p>Masz społeczność na cudzej platformie i chcesz mieć ją u siebie? <a href="/kontakt" class="link">Napisz do mnie</a>. Najtrudniejsza część to nie kod, tylko wybór, które trzy rzeczy użytkownik ma móc zrobić.</p>
<div class="tech-tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>shadcn/ui</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":1,"l":"wyszukiwarka zamiast przewijania osi czasu"},{"v":3,"l":"działania użytkownika: dodawanie, ocenianie, kolekcje"},{"v":1,"l":"panel moderacji dla osoby prowadzącej społeczność"}],"proces":[],"dodatkowe":["Konta użytkowników pozwalają przypisać treść do autora.","Kolekcje działają jak prywatne listy, a nie jak kolejny folder zakładek.","Panel administratora pozwala reagować na zgłoszenia bez grzebania w bazie."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Katalog cytatów z kartami, ocenami i filtrem. Widok główny serwisu.","zasada":"Treści muszą być realnymi cytatami z serwisu. Bez dorysowanych liczb polubień, jeśli licznik pokazuje co innego.","alt":"Katalog cytatów Cytomanii z kartami i ocenami","podpis":"Katalog: cytaty z ocenami i możliwością zapisania do kolekcji"},{"slot":"proces-kolekcje","typ":"crop","opis":"Widok kolekcji użytkownika z kilkoma zapisanymi cytatami.","zasada":"Nazwy kolekcji weź z realnego konta testowego."},{"slot":"proces-admin","typ":"crop","opis":"Wycinek panelu administratora z listą zgłoszonych treści.","zasada":"Bez wykresów aktywności i statystyk, których w panelu nie ma."}]'::jsonb
WHERE slug = 'cytomania';

-- elomoto-eco
UPDATE portfolio_projects SET
  headline        = 'Jak operator stacji ładowania EV dostał stronę, która wygląda jak jego produkt?',
  tags            = ARRAY['Strona firmowa', 'React', 'Animacje']::text[],
  scope           = 'Design, kod, animacje',
  branza          = 'Elektromobilność',
  obszar          = 'Strona firmowa i prezentacja oferty',
  hero_caption    = 'Strona główna · elomoto.eco',
  description     = 'Strona dla operatora infrastruktury ładowania aut elektrycznych. Ponad 15 podstron, mapa stacji i widget ładowania reagujący na przewijanie.',
  case_study_html = '<p>Elomoto to polski operator infrastruktury ładowania pojazdów elektrycznych, część ekosystemu Energomix. Firma sprzedaje coś, czego nie widać na zdjęciu produktu: infrastrukturę, dostępność i obsługę.</p>
<p>Zbudowałem stronę, która pokazuje to interakcją, a nie opisem. Aplikacja SPA na React i Vite, ponad 15 podstron, interaktywna mapa i animowany wskaźnik ładowania.</p>
<div class="stat-band"><div class="s"><div class="v">15+</div><div class="l">podstron: oferta, mapa, realizacje, blog, FAQ</div></div><div class="s"><div class="v">5</div><div class="l">osobnych podstron ofertowych zamiast jednej listy usług</div></div><div class="s"><div class="v">0</div><div class="l">przeładowań strony przy nawigacji (routing SPA)</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Trudno pokazać usługę, której nie da się sfotografować</h2>
<p>Operator stacji ładowania nie ma jednego zdjęcia, które tłumaczy, czym się zajmuje. Ma ofertę dla wspólnot, firm i inwestorów, sieć punktów w terenie oraz temat, który dla dużej części odbiorców wciąż jest nowy.</p>
<ul><li>Oferta rozbija się na kilka różnych grup odbiorców, a każda pyta o co innego.</li><li>Lista lokalizacji w tabeli nie mówi nic o tym, czy stacja jest blisko.</li><li>Strona miała wyglądać jak produkt z branży EV, a nie jak dowolna strona usługowa z ciemnym tłem.</li></ul>
<div class="pullquote"><p>Kiedy usługa jest niewidoczna, jedyne, co zostaje, to sposób, w jaki strona się zachowuje.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>SPA z ciemnym interfejsem i jedną mocną interakcją</h2>
<p>Całość działa jako aplikacja jednostronicowa z klienckim routingiem, więc przechodzenie między podstronami odbywa się bez przeładowania. Ciemny motyw z efektami szkła nawiązuje do wyglądu interfejsów w ładowarkach.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/elomoto-eco/hero.jpg" alt="Strona główna elomoto.eco z sekcją hero w ciemnym motywie" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Strona główna: ciemny interfejs nawiązujący do wyglądu ładowarek EV</figcaption></figure>
<h3>Widget ładowania jako element narracji</h3>
<p>Wskaźnik postępu reaguje na przewijanie i symuluje ładowanie baterii od 0 do 77 kWh. To jedyna ozdobna rzecz na stronie, która robi coś więcej niż wygląda: tłumaczy, o czym jest ta firma, zanim odwiedzający przeczyta zdanie o ofercie.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/elomoto-eco/proces-widget.jpg" alt="Widget ładowania elomoto.eco ze wskaźnikiem postępu 0 do 77 kWh" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Widget ładowania: animacja postępu reagująca na przewijanie</figcaption></figure>
<h3>Pięć podstron ofertowych zamiast jednej listy</h3>
<p>Zamiast jednej strony z sześcioma akapitami oferta rozeszła się na osobne podstrony, każda pisana pod inną grupę. Dzięki temu z reklamy albo z wyszukiwarki da się trafić od razu na właściwy kontekst.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Mapa zamiast tabeli lokalizacji</b><p>Interaktywna mapa stacji odpowiada na jedyne pytanie, które naprawdę zadaje odwiedzający: czy jest coś blisko mnie. Tabela z adresami tego nie robi.</p></div></div>
<h3>Reszta struktury, czyli rzeczy, które muszą być</h3>
<p>Realizacje, blog, FAQ i formularz kontaktowy z wyborem tematu zapytania. Formularz z wyborem tematu jest drobiazgiem, ale kieruje zapytanie od razu we właściwe miejsce, zamiast zostawiać segregację człowiekowi.</p>
<h2><span class="idx">03 / Rezultat</span>Strona zachowuje się jak produkt, o którym opowiada</h2>
<p>Elomoto ma serwis z rozbudowaną strukturą oferty, mapą stacji i interakcją, która tłumaczy branżę bez akapitu wprowadzającego. Nawigacja działa bez przeładowań, a każda grupa odbiorców ma własne wejście.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Interaktywna mapa pokazuje stacje ładowania zamiast opisywać je w tabeli.</li><li>Formularz kontaktowy ma wybór tematu, więc zapytania trafiają od razu we właściwe miejsce.</li><li>Ciemny motyw z efektami szkła nawiązuje do interfejsów ładowarek EV.</li></ul>
<p>Sprzedajesz coś, czego nie da się pokazać zdjęciem produktu? <a href="/kontakt" class="link">Napisz do mnie</a>. Zwykle da się to pokazać interakcją.</p>
<div class="tech-tags"><span>React 19</span><span>TypeScript</span><span>Vite</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":"15+","l":"podstron: oferta, mapa, realizacje, blog, FAQ"},{"v":5,"l":"osobnych podstron ofertowych zamiast jednej listy usług"},{"v":0,"l":"przeładowań strony przy nawigacji (routing SPA)"}],"proces":[],"dodatkowe":["Interaktywna mapa pokazuje stacje ładowania zamiast opisywać je w tabeli.","Formularz kontaktowy ma wybór tematu, więc zapytania trafiają od razu we właściwe miejsce.","Ciemny motyw z efektami szkła nawiązuje do interfejsów ładowarek EV."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Sekcja hero strony głównej z animowanym tłem, w ciemnym motywie. Pełna szerokość desktopu.","zasada":"Realny zrzut ze strony produkcyjnej elomoto.eco. Żadnych dorysowanych paneli z liczbami ładowań ani wykresów oszczędności.","alt":"Strona główna elomoto.eco z sekcją hero w ciemnym motywie","podpis":"Strona główna: ciemny interfejs nawiązujący do wyglądu ładowarek EV"},{"slot":"proces-widget","typ":"crop","opis":"Widget ładowania w trakcie animacji, ze wskaźnikiem postępu w okolicach połowy zakresu 0 do 77 kWh.","zasada":"Wartość na wskaźniku musi być tą, którą widget faktycznie pokazuje. Nie podmieniaj jej na ładniejszą liczbę.","alt":"Widget ładowania elomoto.eco ze wskaźnikiem postępu 0 do 77 kWh","podpis":"Widget ładowania: animacja postępu reagująca na przewijanie"},{"slot":"proces-mapa","typ":"screenshot","opis":"Interaktywna mapa stacji ładowania z widocznymi pinezkami i panelem szczegółów jednej stacji.","zasada":"Pokaż realne lokalizacje z serwisu. Bez zagęszczania mapy pinezkami, których tam nie ma."}]'::jsonb
WHERE slug = 'elomoto-eco';

-- football-academy
UPDATE portfolio_projects SET
  headline        = 'Jak akademia piłkarska przeniosła materiały brandingowe z dysku do przeglądarki 3D?',
  tags            = ARRAY['3D', 'Aplikacja webowa', 'Next.js']::text[],
  scope           = 'UX, design, kod, 3D',
  branza          = 'Sport',
  obszar          = 'Zarządzanie zasobami marki',
  hero_caption    = 'Przeglądarka 3D · Football Academy System',
  description     = 'Wewnętrzny system akademii piłkarskiej z przeglądarką modeli 3D. Manager obraca model, ustawia światło i eksportuje go do GLB, PNG albo SVG.',
  case_study_html = '<p>Football Academy prowadzi akademię piłkarską i traktuje własną markę jak produkt: otwarcia oddziałów, osiągnięcia i materiały graficzne mają swoją oprawę. Problem był banalny i typowy. Wszystko to leżało w plikach rozrzuconych po Dysku, Discordzie i skrzynkach.</p>
<p>Zbudowałem wewnętrzną aplikację, w której te materiały żyją jako zasoby, a nie jako pliki. Centralnym elementem jest przeglądarka modeli 3D.</p>
<div class="stat-band"><div class="s"><div class="v">3</div><div class="l">role użytkowników: Zawodnik, Trener, Manager</div></div><div class="s"><div class="v">3</div><div class="l">formaty eksportu z jednego modelu: GLB, PNG, SVG</div></div><div class="s"><div class="v">1</div><div class="l">miejsce zamiast dysku, Discorda i skrzynki mailowej</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Materiały marki leżą wszędzie i nigdzie</h2>
<p>Akademia rośnie, więc rośnie też liczba rzeczy do ogarnięcia: nowe oddziały, wydarzenia, materiały dla trenerów i zawodników. Bez wspólnego miejsca każdy plik ma własną historię i własną najnowszą wersję.</p>
<ul><li>Model 3D dało się obejrzeć tylko po zainstalowaniu Blendera, więc w praktyce oglądała go jedna osoba.</li><li>Zawodnik, trener i manager potrzebują różnych rzeczy, ale dostawali ten sam folder.</li><li>Ten sam materiał trzeba było wyeksportować osobno do social mediów, osobno do prezentacji i osobno do druku.</li></ul>
<div class="pullquote"><p>Marka przestaje być folderem na dysku w momencie, w którym ktoś może ją obejrzeć i pobrać bez pytania kogokolwiek o plik.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Dashboard z viewerem 3D i podziałem na role</h2>
<p>Aplikacja stoi na Next.js, a warstwę 3D obsługuje Three.js z React Three Fiber. Widok Przegląd pokazuje aktualny zasób w ciemnym interfejsie, strzałki przełączają galerię, a panel boczny daje tryby Obróć i Światło oraz eksport.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/football-academy/hero.jpg" alt="Football Academy System: przeglądarka modelu 3D z panelem Obróć i Światło oraz eksportem GLB, PNG, SVG" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Widok Przegląd: model, kontrola światła i eksport w jednym ekranie</figcaption></figure>
<h3>Trzy role, jeden produkt</h3>
<p>Przełącznik ról (Zawodnik, Trener, Manager) rozdziela to, co w folderze było wspólne. Manager zarządza zasobami, pozostali korzystają z przeglądu w swoim zakresie. Nawigacja dzieli się na Przegląd, Listę i Zarządzanie, więc korzystanie i administrowanie to dwa różne miejsca, a nie jeden ekran do wszystkiego.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Jeden model, trzy wyjścia</b><p>GLB do dalszej pracy w 3D, PNG do social mediów, SVG do materiałów drukowanych. Konwersja dzieje się w aplikacji, więc nie ma etapu przerzucania pliku do innego programu.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Zasób marki da się obejrzeć i pobrać w kilkanaście sekund</h2>
<p>Akademia ma wewnętrzny system, w którym materiały brandingowe są katalogiem z uprawnieniami i eksportem, a nie zestawem plików do odnalezienia. Przygotowanie assetu pod konkretny kanał sprowadza się do wybrania formatu.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Model ogląda się w przeglądarce, bez instalowania Blendera.</li><li>Kontrola światła pozwala dobrać ujęcie pod konkretny kanał publikacji.</li><li>Manager może usuwać i porządkować zasoby bez proszenia o to programisty.</li></ul>
<p>Masz materiały marki rozrzucone po dysku, czacie i mailach, a ktoś ciągle pyta "gdzie jest ta wersja"? <a href="/kontakt" class="link">Napisz do mnie</a>. Galeria z uprawnieniami i eksportem to zwykle mniejszy projekt, niż się wydaje.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>Three.js</span><span>React Three Fiber</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":3,"l":"role użytkowników: Zawodnik, Trener, Manager"},{"v":3,"l":"formaty eksportu z jednego modelu: GLB, PNG, SVG"},{"v":1,"l":"miejsce zamiast dysku, Discorda i skrzynki mailowej"}],"proces":[],"dodatkowe":["Model ogląda się w przeglądarce, bez instalowania Blendera.","Kontrola światła pozwala dobrać ujęcie pod konkretny kanał publikacji.","Manager może usuwać i porządkować zasoby bez proszenia o to programisty."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Widok Przegląd z modelem 3D na środku, panelem bocznym (tryby Obróć i Światło, eksport GLB/PNG/SVG) i przełącznikiem ról u góry.","zasada":"Realny zrzut z aplikacji w trybie ciemnym. Model musi być prawdziwym assetem akademii, nie zastępczą kulą ani sześcianem.","alt":"Football Academy System: przeglądarka modelu 3D z panelem Obróć i Światło oraz eksportem GLB, PNG, SVG","podpis":"Widok Przegląd: model, kontrola światła i eksport w jednym ekranie"},{"slot":"proces-galeria","typ":"crop","opis":"Widok Lista, czyli galeria zasobów 3D z miniaturami i nazwami.","zasada":"Miniatury generuj z realnych modeli. Jeśli w galerii jest sześć pozycji, pokaż sześć, nie dorabiaj wypełniaczy."},{"slot":"proces-eksport","typ":"crop","opis":"Wycinek panelu eksportu z trzema formatami i widocznym stanem po kliknięciu.","zasada":"Bez animowanych pasków postępu dorysowanych w retuszu."}]'::jsonb
WHERE slug = 'football-academy';

-- generator-ofert-rolety
UPDATE portfolio_projects SET
  headline        = 'Jak Rolety3miasto zamieniło wycenę z Excela na ofertę PDF gotową do wysłania?',
  tags            = ARRAY['Generator', 'Automatyzacja', 'Next.js']::text[],
  scope           = 'UX, kod, generowanie PDF',
  branza          = 'Rolety i osłony okienne',
  obszar          = 'Sprzedaż i wyceny',
  hero_caption    = 'Konfigurator oferty · oferty.rolety3miasto.pl',
  description     = 'Generator ofert dla firmy roletowej. Handlowiec wybiera parametry, system liczy cenę i składa gotowy dokument PDF ze specyfikacją.',
  case_study_html = '<p>Rolety3miasto sprzedaje produkt, który praktycznie nigdy nie jest taki sam dwa razy. Inne wymiary, inny materiał, inny mechanizm, inny kolor. Każda wycena była więc osobnym ćwiczeniem z przeliczania i osobnym dokumentem składanym od zera.</p>
<p>Zbudowałem generator ofert, w którym handlowiec ustawia parametry, a system liczy cenę i składa gotowy dokument PDF ze specyfikacją.</p>
<div class="stat-band"><div class="s"><div class="v">1</div><div class="l">przejście od parametrów do gotowego PDF-a</div></div><div class="s"><div class="v">0</div><div class="l">ręcznych przeliczeń ceny po stronie handlowca</div></div><div class="s"><div class="v">PDF</div><div class="l">format wyjściowy z pełną specyfikacją techniczną</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Wycena robiona ręcznie kosztuje dwa razy</h2>
<p>Ręczna wycena ma dwa koszty. Pierwszy to czas: przeliczenie, sprawdzenie w cenniku, przepisanie do dokumentu. Drugi jest gorszy, bo pojawia się dopiero po fakcie, kiedy okazuje się, że w ofercie była pomyłka albo że dwie oferty od tej samej firmy wyglądają zupełnie inaczej.</p>
<ul><li>Cena powstawała z arkusza i pamięci, więc pomyłka w jednym mnożeniu szła prosto do klienta.</li><li>Dokument składano ręcznie, przez co oferta z poniedziałku i oferta z piątku wyglądały inaczej.</li><li>Zmiana cennika oznaczała aktualizację w kilku miejscach naraz.</li><li>Klient czekał na wycenę, zamiast dostać ją w trakcie rozmowy.</li></ul>
<div class="pullquote"><p>Klient rzadko porównuje oferty pod kątem ceny w pierwszej minucie. Najpierw porównuje to, czy dokument wygląda na przygotowany, czy na sklecony.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Konfigurator, kalkulacja i dokument w jednym przebiegu</h2>
<p>Narzędzie prowadzi przez parametry: produkt, wymiary, materiał, warianty wykonania. Kalkulacja liczy się na bieżąco z bazy produktów, a nie z arkusza na dysku handlowca.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/generator-ofert-rolety/hero.jpg" alt="Generator ofert Rolety3miasto z konfiguratorem parametrów i kalkulacją ceny" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Konfigurator: parametry produktu i cena przeliczana na bieżąco</figcaption></figure>
<h3>Cennik żyje w jednym miejscu</h3>
<p>Produkty, materiały i ceny są w systemie. Zmiana stawki wchodzi od razu do wszystkich nowych ofert, więc nie ma sytuacji, w której ktoś wycenia ze starej wersji arkusza.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>PDF jest wyjściem procesu, a nie osobnym zadaniem</b><p>Dokument powstaje z tych samych danych, na których liczyła się cena. Nie ma etapu przepisywania wyniku do szablonu, więc nie ma też miejsca na literówkę w kwocie.</p></div></div>
<h3>Rabaty jako część kalkulacji</h3>
<p>System rabatów i promocji jest wbudowany w wyliczenie, zamiast być odręcznym dopiskiem na końcu. Dzięki temu na dokumencie widać, skąd wzięła się końcowa kwota.</p>
<h2><span class="idx">03 / Rezultat</span>Oferta powstaje w trakcie rozmowy, nie po niej</h2>
<p>Rolety3miasto ma narzędzie, w którym wycena i dokument to jedna czynność. Handlowiec ustawia parametry i wysyła gotowy PDF, a każda oferta wychodzi w tym samym układzie, niezależnie od tego, kto ją przygotował.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Baza produktów i materiałów siedzi w systemie, więc zmiana cennika idzie w jednym miejscu.</li><li>Rabaty i promocje są częścią kalkulacji, a nie dopiskiem na końcu oferty.</li><li>Każda oferta wychodzi w tym samym układzie, niezależnie od tego, kto ją zrobił.</li></ul>
<p>Twoi handlowcy składają oferty ręcznie w Wordzie albo Excelu? <a href="/kontakt" class="link">Napisz do mnie</a>. To zwykle pierwszy proces, który warto przenieść do narzędzia.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>React PDF</span><span>shadcn/ui</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":1,"l":"przejście od parametrów do gotowego PDF-a"},{"v":0,"l":"ręcznych przeliczeń ceny po stronie handlowca"},{"v":"PDF","l":"format wyjściowy z pełną specyfikacją techniczną"}],"proces":[],"dodatkowe":["Baza produktów i materiałów siedzi w systemie, więc zmiana cennika idzie w jednym miejscu.","Rabaty i promocje są częścią kalkulacji, a nie dopiskiem na końcu oferty.","Każda oferta wychodzi w tym samym układzie, niezależnie od tego, kto ją zrobił."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Konfigurator oferty: wybór produktu, wymiarów, materiału i wariantów, z widoczną kalkulacją ceny obok.","zasada":"Ceny i nazwy produktów muszą być realne albo pochodzić z cennika testowego klienta. Nie wpisuj efektownych okrągłych kwot.","alt":"Generator ofert Rolety3miasto z konfiguratorem parametrów i kalkulacją ceny","podpis":"Konfigurator: parametry produktu i cena przeliczana na bieżąco"},{"slot":"proces-pdf","typ":"screenshot","opis":"Wygenerowany dokument PDF otwarty w przeglądarce: nagłówek z danymi firmy, pozycje ze specyfikacją, podsumowanie ceny.","zasada":"Pokaż prawdziwy wygenerowany plik. Dane klienta w dokumencie zamień na fikcyjne przed zrzutem."},{"slot":"proces-baza","typ":"crop","opis":"Wycinek widoku bazy produktów i materiałów z możliwością edycji ceny.","zasada":"Bez dorysowanych wykresów marży i bez paneli statystyk, których w aplikacji nie ma."}]'::jsonb
WHERE slug = 'generator-ofert-rolety';

-- jkterm-wizualizator
UPDATE portfolio_projects SET
  headline        = 'Jak JK Term zastąpił wizualizacje w AutoCAD generatorem, który obsługuje handlowiec?',
  tags            = ARRAY['Generator AI', 'Next.js', 'E-commerce']::text[],
  scope           = 'Koncepcja, UX, kod, warstwa AI',
  branza          = 'Produkcja grzejników',
  obszar          = 'Materiały produktowe i sprzedaż',
  hero_caption    = 'Tryb Scena · Wizualizator JK Term',
  description     = 'Generator wizualizacji dla producenta grzejników. Wgrywasz zdjęcie produktu, opisujesz scenę i dostajesz zdjęcie do katalogu albo listing na Allegro.',
  case_study_html = '<p>JK Term produkuje grzejniki łazienkowe. Każdy model ma kilka rozmiarów i kilka wariantów kolorystycznych, a każdy z tych wariantów potrzebuje zdjęcia do katalogu i do listingu sprzedażowego. Do tej pory wizualizacje powstawały w AutoCAD.</p>
<p>Zbudowałem generator, który robi to samo z poziomu przeglądarki. Wgrywasz zdjęcie produktu, opisujesz scenę, ustawiasz kąt i kolor, dostajesz gotowe pliki.</p>
<div class="stat-band"><div class="s"><div class="v">2</div><div class="l">tryby pracy: Scena (wnętrze) i Detal (listing)</div></div><div class="s"><div class="v">3</div><div class="l">warianty generowane jednocześnie z jednego opisu</div></div><div class="s"><div class="v">0</div><div class="l">sesji fotograficznych potrzebnych do nowego wariantu koloru</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Wizualizacja w AutoCAD nie skaluje się na liczbę wariantów</h2>
<p>Problem nie polegał na tym, że wizualizacji nie dało się zrobić. Polegał na tym, że każda wymagała osoby z odpowiednim programem i odpowiednimi umiejętnościami. Przy katalogu, w którym jeden model rozchodzi się na kilkanaście kombinacji rozmiaru i koloru, ta ścieżka staje się wąskim gardłem.</p>
<ul><li>Nową wizualizację mógł zrobić tylko ktoś obsługujący AutoCAD.</li><li>Zdjęcia produktu w realnym wnętrzu wymagały albo renderu, albo sesji w łazience pokazowej.</li><li>Listingi na Allegro potrzebują innych ujęć niż katalog, więc materiał robiło się dwa razy.</li><li>Przy zmianie kolorystyki cały proces zaczynał się od nowa.</li></ul>
<div class="pullquote"><p>Kiedy każdy nowy wariant produktu wymaga specjalisty, katalog przestaje rosnąć w tempie, w jakim rośnie oferta.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Dwa tryby, jedno zdjęcie wejściowe</h2>
<p>Generator ma dwa tryby, bo katalog i listing to dwa różne zadania. W obu punktem wyjścia jest to samo: zdjęcie produktu i opis tego, co ma się z nim stać.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/jkterm-wizualizator/hero.jpg" alt="Generator wizualizacji JK Term w trybie Scena z panelem ustawień i wygenerowanymi wariantami" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Tryb Scena: ustawienia kamery, koloru i rozmiaru oraz trzy warianty wnętrza</figcaption></figure>
<h3>Tryb Scena, czyli grzejnik w prawdziwej łazience</h3>
<p>Użytkownik opisuje wnętrze, ustawia kąt kamery, kolor produktu i jego rozmiar w kadrze. Generator zwraca trzy warianty naraz, więc jest z czego wybierać bez powtarzania całej operacji.</p>
<h3>Tryb Detal, czyli zdjęcie pod listing</h3>
<p>Drugi tryb generuje ujęcia detali na czystym tle, w formie, jakiej oczekuje karta produktu w sklepie i na Allegro. Ten sam plik wejściowy, inne wyjście.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/jkterm-wizualizator/proces-detal.jpg" alt="Tryb Detal generatora JK Term ze zbliżeniem na fragment grzejnika" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Tryb Detal: ujęcia produktowe przygotowane pod listingi sprzedażowe</figcaption></figure>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Narzędzie obsługuje handlowiec, nie grafik</b><p>Cała konfiguracja to kilka pól i suwaków. Osoba, która przygotowuje ofertę, nie musi znać AutoCAD-a ani programu graficznego, żeby dostać materiał nadający się do wysłania klientowi.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Nowy wariant produktu nie czeka na wolny termin grafika</h2>
<p>JK Term ma narzędzie, które zamienia zdjęcie produktu na materiał do katalogu i na listing, w dwóch trybach i w trzech wariantach na jedno podejście. Wąskie gardło przestało być kwestią dostępności specjalisty od AutoCAD-a.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Kąt kamery, kolor produktu i jego rozmiar w scenie ustawia się przed generowaniem.</li><li>Gotowe pliki idą prosto do katalogu i do listingów, bez obróbki w programie graficznym.</li><li>Nowy wariant kolorystyczny nie wymaga angażowania osoby znającej AutoCAD.</li></ul>
<p>Sprzedajesz produkt w wielu wariantach i każdy wariant potrzebuje własnego zdjęcia? <a href="/kontakt" class="link">Napisz do mnie</a>. To zwykle da się przenieść z sesji zdjęciowej do narzędzia, które obsługuje handlowiec.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>AI Image Generation</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":2,"l":"tryby pracy: Scena (wnętrze) i Detal (listing)"},{"v":3,"l":"warianty generowane jednocześnie z jednego opisu"},{"v":0,"l":"sesji fotograficznych potrzebnych do nowego wariantu koloru"}],"proces":[],"dodatkowe":["Kąt kamery, kolor produktu i jego rozmiar w scenie ustawia się przed generowaniem.","Gotowe pliki idą prosto do katalogu i do listingów, bez obróbki w programie graficznym.","Nowy wariant kolorystyczny nie wymaga angażowania osoby znającej AutoCAD."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Interfejs generatora w trybie Scena: panel ustawień po lewej (kąt kamery, kolor, rozmiar), trzy wygenerowane warianty po prawej.","zasada":"Wygenerowane grzejniki muszą być realnymi produktami JK Term, nie wymyślonym sprzętem. To case study o wiarygodności produktu, więc zniekształcony grzejnik psuje cały przekaz.","alt":"Generator wizualizacji JK Term w trybie Scena z panelem ustawień i wygenerowanymi wariantami","podpis":"Tryb Scena: ustawienia kamery, koloru i rozmiaru oraz trzy warianty wnętrza"},{"slot":"proces-detal","typ":"screenshot","opis":"Tryb Detal: zbliżenie na fragment grzejnika na jednolitym tle, tak jak wygląda zdjęcie na listingu Allegro.","zasada":"Pokaż realny output narzędzia. Bez dopisywania na obrazku ceny, gwiazdek ocen ani logotypu Allegro.","alt":"Tryb Detal generatora JK Term ze zbliżeniem na fragment grzejnika","podpis":"Tryb Detal: ujęcia produktowe przygotowane pod listingi sprzedażowe"},{"slot":"proces-porownanie","typ":"crop","opis":"Zestawienie obok siebie: to samo zdjęcie produktu na wejściu i dwie różne sceny na wyjściu.","zasada":"Nie podpisuj tego czasami typu \"8 godzin kontra 40 sekund\", dopóki JK Term nie potwierdzi realnych wartości."}]'::jsonb
WHERE slug = 'jkterm-wizualizator';

-- kalkulator-gap
UPDATE portfolio_projects SET
  headline        = 'Jak sprzedawać ubezpieczenie GAP, którego klient nie umie sobie wycenić?',
  tags            = ARRAY['Kalkulator', 'InsurTech', 'Next.js']::text[],
  scope           = 'UX, UI, front-end',
  branza          = 'Ubezpieczenia',
  obszar          = 'Sprzedaż online',
  hero_caption    = 'Kalkulator składki · gapauto.pl',
  description     = 'Kalkulator ubezpieczenia GAP z pełnym procesem UX i front-endem. Klient podaje dane pojazdu i widzi składkę, zanim porozmawia z agentem.',
  case_study_html = '<p>Ubezpieczenie GAP pokrywa różnicę między wartością fakturową pojazdu a odszkodowaniem wypłaconym przy szkodzie całkowitej. Produkt jest sensowny, ale ma jedną wadę sprzedażową: prawie nikt nie umie sam oszacować, ile powinien za niego zapłacić.</p>
<p>Odpowiadałem za proces UX i front-end kalkulatora, który zamienia to pytanie w konkretną kwotę na ekranie.</p>
<div class="stat-band"><div class="s"><div class="v">1</div><div class="l">ekran od danych pojazdu do wysokości składki</div></div><div class="s"><div class="v">0</div><div class="l">kontaktu z agentem potrzebnego do poznania ceny</div></div><div class="s"><div class="v">API</div><div class="l">wyliczenie po stronie systemu ubezpieczyciela, nie w arkuszu</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Produkt bez ceny na stronie sprzedaje się gorzej niż produkt drogi</h2>
<p>Składka GAP zależy od wartości pojazdu, jego wieku i okresu ochrony. Ponieważ tych parametrów jest kilka, wiele stron ubezpieczeniowych rezygnuje z podawania ceny i zastępuje ją formularzem kontaktowym. Klient, który dopiero sprawdza, czy go na to stać, w tym miejscu wychodzi.</p>
<ul><li>Kupujący nie wie, czy mówimy o kwocie rzędu kilkuset, czy kilku tysięcy złotych.</li><li>Kontakt z agentem jest zbyt dużym zobowiązaniem jak na etap "sprawdzam, czy to ma sens".</li><li>Większość takich wyszukiwań zaczyna się na telefonie, często przy salonie samochodowym.</li></ul>
<div class="pullquote"><p>Formularz kontaktowy zamiast ceny działa jak zamknięte drzwi z napisem "zapytaj o klucz".</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Jeden ekran od danych pojazdu do składki</h2>
<p>Kalkulator prowadzi przez parametry w kolejności, w jakiej klient je zna: najpierw wartość pojazdu, potem rok, potem okres ochrony. Nic, czego trzeba szukać w dokumentach, nie stoi na początku formularza.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/kalkulator-gap/hero.jpg" alt="Kalkulator ubezpieczenia GAP z wyliczoną składką" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Kalkulator: parametry pojazdu i wyliczona składka na jednym ekranie</figcaption></figure>
<h3>Wyliczenie z systemu ubezpieczyciela</h3>
<p>Kwota nie pochodzi z uproszczonego wzoru wbudowanego w stronę, tylko z integracji z API ubezpieczeniowym. Klient widzi więc tę składkę, którą faktycznie zapłaci, a nie orientacyjny szacunek do zweryfikowania później.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Telefon jest tu urządzeniem podstawowym, nie wersją zapasową</b><p>O GAP klienci pytają najczęściej w trakcie zakupu auta, czyli poza biurkiem. Formularz musi się mieścić na ekranie telefonu bez powiększania i przewijania w bok.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Cena przestała być powodem do wyjścia ze strony</h2>
<p>Business Care ma kalkulator, w którym klient dostaje wysokość składki od razu, bez kontaktu z agentem i bez wysyłania zapytania. Wyliczenie pochodzi z systemu ubezpieczyciela, więc rozmowa z klientem zaczyna się od decyzji, a nie od podawania ceny.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Formularz prowadzi przez parametry w kolejności, w jakiej klient je zna.</li><li>Wyliczenie idzie do API ubezpieczyciela, więc kwota jest tą, którą klient faktycznie zapłaci.</li><li>Interfejs działa tak samo na telefonie, gdzie zaczyna się większość takich wyszukiwań.</li></ul>
<p>Sprzedajesz produkt, którego cena zależy od kilku parametrów i dlatego nie ma jej na stronie? <a href="/kontakt" class="link">Napisz do mnie</a>. Kalkulator zwykle zarabia na siebie szybciej niż kolejna podstrona z opisem.</p>
<div class="tech-tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>shadcn/ui</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":1,"l":"ekran od danych pojazdu do wysokości składki"},{"v":0,"l":"kontaktu z agentem potrzebnego do poznania ceny"},{"v":"API","l":"wyliczenie po stronie systemu ubezpieczyciela, nie w arkuszu"}],"proces":[],"dodatkowe":["Formularz prowadzi przez parametry w kolejności, w jakiej klient je zna.","Wyliczenie idzie do API ubezpieczyciela, więc kwota jest tą, którą klient faktycznie zapłaci.","Interfejs działa tak samo na telefonie, gdzie zaczyna się większość takich wyszukiwań."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Kalkulator GAP z wypełnionymi polami (wartość pojazdu, rok produkcji, okres ochrony) i wyliczoną składką.","zasada":"Kwota składki musi pochodzić z realnego przeliczenia. To case study o kalkulatorze, więc podmieniona liczba podważa wszystko inne.","alt":"Kalkulator ubezpieczenia GAP z wyliczoną składką","podpis":"Kalkulator: parametry pojazdu i wyliczona składka na jednym ekranie"},{"slot":"proces-mobile","typ":"screenshot","opis":"Ten sam kalkulator na ekranie telefonu, pokazujący, że formularz mieści się bez zoomowania.","zasada":"Prawdziwy zrzut z urządzenia albo z trybu mobilnego przeglądarki. Bez wklejania ekranu w renderowany model iPhone''a z odbiciami."},{"slot":"proces-kroki","typ":"crop","opis":"Wycinek pokazujący kolejność pól formularza i sposób prowadzenia użytkownika przez parametry.","zasada":"Bez dorysowanych numerków przy polach, jeśli aplikacja ich nie ma."}]'::jsonb
WHERE slug = 'kalkulator-gap';

-- kreator-faktur
UPDATE portfolio_projects SET
  headline        = 'Jak wystawić fakturę VAT bez zakładania konta w kolejnym systemie?',
  tags            = ARRAY['Narzędzie', 'Projekt własny', 'Next.js']::text[],
  scope           = 'Koncepcja, UX, kod, generowanie PDF',
  branza          = 'Narzędzia dla firm',
  obszar          = 'Dokumenty sprzedażowe',
  hero_caption    = 'Kreator faktury · faktury.mainly.pl',
  description     = 'Projekt własny: aplikacja do wystawiania faktur VAT w PDF. Automatyczne przeliczenia, baza kontrahentów i własny szablon dokumentu.',
  case_study_html = '<p>Kreator Faktur to mój projekt własny. Powstał z obserwacji, którą zna każdy, kto prowadzi małą firmę: faktury wystawia się albo w rozbudowanym systemie księgowym, którego używa się w pięciu procentach, albo w szablonie w edytorze tekstu, przepisując dane i licząc VAT ręcznie.</p>
<p>Zbudowałem coś pomiędzy: aplikację, która robi jedną rzecz i generuje gotowy dokument PDF.</p>
<div class="stat-band"><div class="s"><div class="v">PDF</div><div class="l">gotowy dokument na wyjściu, bez konwersji</div></div><div class="s"><div class="v">0</div><div class="l">ręcznych przeliczeń VAT i kwot brutto</div></div><div class="s"><div class="v">1</div><div class="l">baza kontrahentów wielokrotnego użytku</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Szablon w Wordzie działa, dopóki nie policzysz, ile kosztuje</h2>
<p>Faktura z szablonu wygląda w porządku, ale każda pozycja to okazja do pomyłki. Trzeba przeliczyć netto na brutto, dobrać stawkę, przepisać dane kontrahenta i pamiętać o numeracji.</p>
<ul><li>Przeliczenia VAT robione ręcznie prędzej czy później się mylą.</li><li>Dane stałego kontrahenta przepisuje się przy każdej fakturze od nowa.</li><li>Eksport do PDF jest osobnym krokiem, o którym łatwo zapomnieć.</li></ul>
<div class="pullquote"><p>Czynność, która zajmuje "tylko pięć minut", wykonywana dwadzieścia razy w miesiącu przestaje być drobiazgiem.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Formularz, przeliczenia i dokument w jednym miejscu</h2>
<p>Aplikacja prowadzi przez wystawienie faktury: dane stron, pozycje, stawki. Kwoty netto, VAT i brutto liczą się w trakcie, a dokument powstaje jako PDF bez dodatkowego kroku eksportu.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/kreator-faktur/hero.jpg" alt="Kreator faktur z formularzem pozycji i podglądem dokumentu" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Kreator: pozycje faktury, przeliczenia i podgląd dokumentu</figcaption></figure>
<h3>Kontrahent wpisany raz zostaje w bazie</h3>
<p>Dane stałych klientów zapisują się do bazy kontrahentów, więc kolejna faktura dla tej samej firmy zaczyna się od wyboru z listy.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Szablon dopasowany do firmy, nie do aplikacji</b><p>Wygląd dokumentu da się dostosować, więc faktura wychodzi w identyfikacji firmy, a nie w domyślnym układzie narzędzia.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Narzędzie, które robi jedną rzecz i nie wymaga wdrożenia</h2>
<p>Kreator Faktur wystawia dokument VAT w PDF z automatycznymi przeliczeniami i bazą kontrahentów, działając w przeglądarce. Nie zastępuje systemu księgowego, tylko usuwa etap, na którym ktoś liczy VAT w kalkulatorze i przepisuje wynik do szablonu.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Szablon faktury da się dostosować do własnej identyfikacji.</li><li>Dane kontrahenta wystarczy wpisać raz.</li><li>Dokument powstaje w przeglądarce, bez instalowania programu.</li></ul>
<p>Masz w firmie czynność, którą wszyscy robią w Wordzie, bo "to tylko chwila"? <a href="/kontakt" class="link">Napisz do mnie</a>. Te chwile najlepiej się liczą w skali miesiąca.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>React PDF</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":"PDF","l":"gotowy dokument na wyjściu, bez konwersji"},{"v":0,"l":"ręcznych przeliczeń VAT i kwot brutto"},{"v":1,"l":"baza kontrahentów wielokrotnego użytku"}],"proces":[],"dodatkowe":["Szablon faktury da się dostosować do własnej identyfikacji.","Dane kontrahenta wystarczy wpisać raz.","Dokument powstaje w przeglądarce, bez instalowania programu."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Formularz wystawiania faktury z pozycjami, stawkami VAT i podglądem dokumentu obok.","zasada":"Dane sprzedawcy i nabywcy mają być fikcyjne, ale wyglądać realistycznie (poprawny format NIP, sensowny adres). Kwoty muszą się zgadzać z przeliczeniem, bo to case study o automatycznych obliczeniach.","alt":"Kreator faktur z formularzem pozycji i podglądem dokumentu","podpis":"Kreator: pozycje faktury, przeliczenia i podgląd dokumentu"},{"slot":"proces-pdf","typ":"screenshot","opis":"Wygenerowany PDF faktury otwarty w przeglądarce.","zasada":"Prawdziwy plik z aplikacji. Bez podmieniania układu w programie graficznym."},{"slot":"proces-kontrahenci","typ":"crop","opis":"Wycinek bazy kontrahentów z listą zapisanych firm.","zasada":"Nazwy fikcyjne, ale bez żartów typu \"Firma Testowa 1\". Wygląda to wtedy jak niedokończony projekt."}]'::jsonb
WHERE slug = 'kreator-faktur';

-- kulio-studio
UPDATE portfolio_projects SET
  headline        = 'Jak agencja marketingowa ma pokazać, że umie robić to, co sprzedaje?',
  tags            = ARRAY['Strona firmowa', '3D', 'Framer']::text[],
  scope           = 'Design, wdrożenie, 3D',
  branza          = 'Marketing',
  obszar          = 'Portfolio i pozyskiwanie klientów',
  hero_caption    = 'Strona główna · kuliostudio.pl',
  description     = 'Strona dla agencji Kulio Studio z portfolio, blogiem i sceną 3D. Treści aktualizuje zespół agencji, bez pośrednictwa programisty.',
  case_study_html = '<p>Kulio Studio to agencja marketingowa, czyli firma, w której strona internetowa jest jednocześnie ofertą i próbką pracy. Klient, który ją ogląda, ocenia nie tylko to, co jest napisane, ale też to, jak zrobione.</p>
<p>Zaprojektowałem i wdrożyłem stronę z interaktywną sceną 3D, portfolio i blogiem, z systemem CMS pozwalającym zespołowi aktualizować treści samodzielnie.</p>
<div class="stat-band"><div class="s"><div class="v">3D</div><div class="l">interaktywna scena zamiast statycznej grafiki</div></div><div class="s"><div class="v">CMS</div><div class="l">portfolio i blog aktualizowane przez zespół agencji</div></div><div class="s"><div class="v">1</div><div class="l">strona pełniąca funkcję pierwszego portfolio</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Agencja jest oceniana po własnej stronie, zanim pokaże portfolio</h2>
<p>W usługach kreatywnych strona jest pierwszym dowodem. Jeśli wygląda przeciętnie, opis kompetencji już tego nie odrobi. Drugi problem jest mniej widoczny, ale kosztowniejszy: portfolio, którego nie da się samodzielnie zaktualizować, po pół roku pokazuje nieaktualną wersję firmy.</p>
<ul><li>Strona miała się wyróżniać wizualnie, bo to jest w tej branży argument sprzedażowy.</li><li>Nowe realizacje muszą trafiać na stronę bez zamawiania tego u wykonawcy.</li><li>Sam katalog projektów nie daje powodu, żeby wrócić na stronę drugi raz.</li></ul>
<div class="pullquote"><p>Agencja, która musi zamawiać aktualizację własnego portfolio, publikuje je raz w roku.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Scena 3D na wejściu, CMS pod spodem</h2>
<p>Strona powstała we Framerze, ze sceną 3D zbudowaną w Spline. Interaktywna grafika w sekcji otwierającej robi to, czego nie zrobi zdjęcie: pokazuje, że agencja pracuje z narzędziami, o których mówi w ofercie.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/kulio-studio/hero.jpg" alt="Strona główna Kulio Studio z interaktywną sceną 3D" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Sekcja otwierająca z interaktywną sceną 3D</figcaption></figure>
<h3>Portfolio i blog w rękach zespołu</h3>
<p>System zarządzania treścią obejmuje realizacje i wpisy blogowe. Nowy projekt trafia na stronę wtedy, kiedy się skończy, a nie wtedy, kiedy ktoś znajdzie czas, żeby to zgłosić.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Blog jako powód do powrotu</b><p>Portfolio ogląda się raz. Blog daje odwiedzającemu powód, żeby wrócić, i daje wyszukiwarce coś, co można zaindeksować poza stroną główną.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Strona, która sama jest argumentem</h2>
<p>Kulio Studio ma serwis, w którym warstwa wizualna działa jak próbka pracy, a portfolio i blog utrzymuje zespół agencji. Aktualizacja treści przestała wymagać kontaktu z wykonawcą.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Nowa realizacja trafia na stronę bez zgłoszenia do wykonawcy.</li><li>Blog obsługuje wejścia z wyszukiwarki i daje powód do powrotu.</li><li>Formularz kontaktowy prowadzi z portfolio prosto do rozmowy.</li></ul>
<p>Sprzedajesz usługi kreatywne i twoja strona ma być pierwszą próbką pracy? <a href="/kontakt" class="link">Napisz do mnie</a>. Portfolio, którego nie da się samodzielnie zaktualizować, starzeje się w kilka miesięcy.</p>
<div class="tech-tags"><span>Framer</span><span>Spline</span></div>',
  case_study_data = '{"rezultaty":[{"v":"3D","l":"interaktywna scena zamiast statycznej grafiki"},{"v":"CMS","l":"portfolio i blog aktualizowane przez zespół agencji"},{"v":1,"l":"strona pełniąca funkcję pierwszego portfolio"}],"proces":[],"dodatkowe":["Nowa realizacja trafia na stronę bez zgłoszenia do wykonawcy.","Blog obsługuje wejścia z wyszukiwarki i daje powód do powrotu.","Formularz kontaktowy prowadzi z portfolio prosto do rozmowy."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Sekcja hero kuliostudio.pl z interaktywną sceną 3D. Zrzut wykonany w momencie, w którym scena jest w ciekawym ujęciu.","zasada":"Realny zrzut ze strony. Scena 3D musi być tą ze Spline''a, nie renderem zrobionym osobno na potrzeby portfolio.","alt":"Strona główna Kulio Studio z interaktywną sceną 3D","podpis":"Sekcja otwierająca z interaktywną sceną 3D"},{"slot":"proces-portfolio","typ":"screenshot","opis":"Sekcja portfolio z siatką realizacji agencji.","zasada":"Realizacje muszą być prawdziwymi projektami Kulio Studio. Bez wypełniania siatki zastępczymi kafelkami."},{"slot":"proces-cms","typ":"crop","opis":"Widok edycji wpisu w CMS-ie, pokazujący, że zespół agencji zarządza treścią samodzielnie.","zasada":"Zrzut z realnego panelu, nie schemat rysowany w Figmie."}]'::jsonb
WHERE slug = 'kulio-studio';

-- lease1-leasing
UPDATE portfolio_projects SET
  headline        = 'Jak Lease1 obsłużył trzy rynki językowe bez trzech osobnych stron?',
  tags            = ARRAY['Platforma', 'i18n', 'Next.js']::text[],
  scope           = 'Design, kod, wielojęzyczność',
  branza          = 'Leasing i finansowanie',
  obszar          = 'Prezentacja oferty i pozyskiwanie wniosków',
  hero_caption    = 'Strona główna · lease1.pl',
  description     = 'Platforma dla firmy leasingowej działającej międzynarodowo. Trzy wersje językowe, kalkulatory rat i ścieżka od wyliczenia do złożenia wniosku.',
  case_study_html = '<p>Lease1 zajmuje się leasingiem maszyn, samochodów i nieruchomości, i robi to poza jednym rynkiem. Strona miała obsłużyć klienta polskiego, angielskojęzycznego i niemieckiego, nie rozpadając się przy tym na trzy osobne serwisy do utrzymania.</p>
<p>Zbudowałem platformę z wielojęzycznością na poziomie architektury i z kalkulatorami, które pozwalają policzyć ratę przed rozmową z kimkolwiek.</p>
<div class="stat-band"><div class="s"><div class="v">3</div><div class="l">wersje językowe: polska, angielska, niemiecka</div></div><div class="s"><div class="v">3</div><div class="l">obsługiwane rodzaje leasingu: maszyny, samochody, nieruchomości</div></div><div class="s"><div class="v">1</div><div class="l">ścieżka od kalkulatora do złożenia wniosku</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Klient leasingowy chce najpierw policzyć, a nie porozmawiać</h2>
<p>W leasingu pierwsze pytanie brzmi zawsze tak samo: ile to będzie miesięcznie. Strona, która na to pytanie odpowiada formularzem kontaktowym, traci osobę, która dopiero szacuje możliwości.</p>
<ul><li>Trzy rynki językowe oznaczały ryzyko trzech osobnych serwisów rozjeżdżających się z czasem.</li><li>Trzy rodzaje leasingu mają inne parametry, więc jeden ogólny opis nie wystarczał.</li><li>Bez kalkulatora każde zapytanie o wysokość raty musiałby obsłużyć człowiek.</li><li>Pytania o leasing są szczegółowe, a lista FAQ bez wyszukiwarki staje się nieczytelna po dwudziestej pozycji.</li></ul>
<div class="pullquote"><p>Formularz kontaktowy nie jest odpowiedzią na pytanie "ile to kosztuje". Jest odłożeniem tej odpowiedzi na później.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Jedna platforma, trzy języki, policzalna oferta</h2>
<p>Wielojęzyczność (polski, angielski, niemiecki) jest wbudowana w strukturę serwisu, a nie doklejona przez tłumaczenie osobnych kopii. Jedna zmiana w układzie strony wchodzi we wszystkich wersjach.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/lease1-leasing/hero.jpg" alt="Strona główna Lease1 z prezentacją form leasingu" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Strona główna: trzy formy leasingu i wejście do kalkulatora</figcaption></figure>
<h3>Kalkulatory jako pierwszy krok, nie jako dodatek</h3>
<p>Odwiedzający ustawia parametry i widzi ratę. Dopiero potem pojawia się wniosek. Ta kolejność jest odwrotna niż na większości stron finansowych i to jest cała różnica.</p>
<h3>Trzy rodzaje leasingu, trzy osobne konteksty</h3>
<p>Maszyny, samochody i nieruchomości mają inne parametry i innego odbiorcę. Każda forma dostała własną prezentację zamiast wspólnego akapitu z wyliczeniem.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>FAQ z wyszukiwarką, bo pytania o leasing są bardzo konkretne</b><p>Ktoś pyta o wykup, ktoś o wcześniejsze zakończenie umowy, ktoś o zdolność. Wyszukiwarka w FAQ zamienia długą listę w coś, czego da się użyć.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Klient wchodzi na stronę i wychodzi z liczbą</h2>
<p>Lease1 ma serwis, który obsługuje trzy rynki językowe z jednej struktury i prowadzi odwiedzającego od wyliczenia raty do złożenia wniosku. Pytanie o koszt dostaje odpowiedź na miejscu, zamiast wracać do zespołu jako kolejne zapytanie do obsłużenia.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Kalkulatory leasingowe zamieniają pytanie "ile to kosztuje" w konkretną liczbę.</li><li>FAQ ma własną wyszukiwarkę, bo pytania o leasing są bardzo szczegółowe.</li><li>Blog z poradami finansowymi obsługuje wejścia z wyszukiwarki.</li></ul>
<p>Sprzedajesz produkt finansowy, w którym klient najpierw chce policzyć, a dopiero potem porozmawiać? <a href="/kontakt" class="link">Napisz do mnie</a>. Kalkulator na stronie zwykle robi tu więcej niż formularz kontaktowy.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>shadcn/ui</span><span>i18n</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":3,"l":"wersje językowe: polska, angielska, niemiecka"},{"v":3,"l":"obsługiwane rodzaje leasingu: maszyny, samochody, nieruchomości"},{"v":1,"l":"ścieżka od kalkulatora do złożenia wniosku"}],"proces":[],"dodatkowe":["Kalkulatory leasingowe zamieniają pytanie \"ile to kosztuje\" w konkretną liczbę.","FAQ ma własną wyszukiwarkę, bo pytania o leasing są bardzo szczegółowe.","Blog z poradami finansowymi obsługuje wejścia z wyszukiwarki."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Strona główna lease1.pl z widoczną nawigacją i przełącznikiem języka.","zasada":"Realny zrzut z produkcji. Bez dorysowanych plakietek \"zaufało nam X firm\", jeśli takich na stronie nie ma.","alt":"Strona główna Lease1 z prezentacją form leasingu","podpis":"Strona główna: trzy formy leasingu i wejście do kalkulatora"},{"slot":"proces-kalkulator","typ":"screenshot","opis":"Kalkulator leasingowy z wypełnionymi polami (wartość przedmiotu, okres, wpłata własna) i wyliczoną ratą.","zasada":"Wynik ma pochodzić z realnego przeliczenia w narzędziu. Nie wpisuj kwoty ręcznie w grafice."},{"slot":"proces-jezyki","typ":"crop","opis":"Ten sam fragment strony w trzech wersjach językowych, jeden pod drugim albo obok siebie.","zasada":"Wszystkie trzy muszą być prawdziwymi zrzutami. Bez tłumaczenia w Photoshopie."}]'::jsonb
WHERE slug = 'lease1-leasing';

-- magia-podrozowania
UPDATE portfolio_projects SET
  headline        = 'Jak GRUPA DE-PL zamknęła całą obsługę wycieczki w jednym systemie?',
  tags            = ARRAY['CRM', 'Integracje', 'Supabase']::text[],
  scope           = 'UX, kod, baza danych, integracje',
  branza          = 'Turystyka',
  obszar          = 'Sprzedaż i obsługa posprzedażowa',
  hero_caption    = 'Panel organizatora · Magia Podróżowania',
  description     = 'CRM dla organizatora turystyki. Oferta, rezerwacja, płatność PayNow, umowa PDF, faktura w SaldeoSMART i polisa HDI w jednym przebiegu.',
  case_study_html = '<p>Magia Podróżowania to marka organizatora turystyki GRUPA DE-PL. Sprzedaż wycieczki wygląda tam inaczej niż sprzedaż produktu: po rezerwacji zaczyna się druga część pracy, czyli umowa, zaliczka, dopłata, faktura, polisa i komunikacja z uczestnikami przez kilka tygodni przed wyjazdem.</p>
<p>Zbudowałem system, który prowadzi wycieczkę przez cały ten cykl. Organizator tworzy ofertę, publikuje stronę, przyjmuje rezerwacje i płatności, generuje umowę, wystawia fakturę i obsługuje ubezpieczenie, nie wychodząc do innego narzędzia.</p>
<div class="stat-band"><div class="s"><div class="v">9</div><div class="l">modułów obsługujących wycieczkę od oferty do polisy</div></div><div class="s"><div class="v">3</div><div class="l">integracje zewnętrzne: PayNow, SaldeoSMART, HDI</div></div><div class="s"><div class="v">2</div><div class="l">role z osobnym zakresem: organizator i koordynator</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Jedna wycieczka rozsypana na siedem miejsc</h2>
<p>Przy jednym wyjeździe da się to prowadzić ręcznie. Przy kilku równolegle zaczyna się szukanie: kto wpłacił zaliczkę, komu wysłano umowę, który uczestnik ma polisę, czy faktura już poszła. Każda z tych informacji mieszkała gdzie indziej, więc żeby odpowiedzieć na jedno pytanie klienta, trzeba było otworzyć trzy rzeczy.</p>
<ul><li>Oferta powstawała osobno, więc każda zmiana ceny albo programu wymagała poprawki w kilku miejscach.</li><li>Płatności w ratach (zaliczka plus dopłata) trzeba było pilnować z listy i przypominać ręcznie.</li><li>Umowy składano z szablonu w edytorze tekstu, wpisując dane uczestnika za każdym razem od nowa.</li><li>Faktury i polisy obsługiwano w zewnętrznych systemach, bez powiązania z rezerwacją.</li></ul>
<div class="pullquote"><p>W turystyce sprzedaż nie kończy się na przycisku "rezerwuję". Kończy się kilka tygodni później, po ostatniej dopłacie i ostatniej polisie.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Jeden panel prowadzący wycieczkę od oferty do polisy</h2>
<p>Podstawą jest panel organizatora: wycieczka, ceny, liczba miejsc, harmonogram płatności, przypisany koordynator. Z tych samych danych powstaje publiczna strona oferty, więc nie ma drugiego miejsca, które trzeba pamiętać zaktualizować.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/magia-podrozowania/hero.jpg" alt="Panel organizatora Magii Podróżowania z listą uczestników i statusem płatności" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Panel organizatora: uczestnicy, harmonogram płatności i stan rezerwacji dla jednej wycieczki</figcaption></figure>
<h3>Strona oferty, którą organizator składa sam</h3>
<p>Wygląd oferty jest edytowalny: galeria, program, sekcje informacyjne i formularz rezerwacji. Organizator zmienia opis wyjazdu bez zgłaszania tego programiście.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/magia-podrozowania/proces-oferta.jpg" alt="Formularz rezerwacji wycieczki z danymi uczestników" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Rezerwacja online: dane kontaktowe, lista uczestników i przejście do płatności</figcaption></figure>
<h3>Płatności w ratach, bez pilnowania w kalendarzu</h3>
<p>Rezerwacja przechodzi do bramki PayNow. System obsługuje podział na zaliczkę i dopłatę oraz sam wysyła przypomnienia o zbliżającym się terminie. Organizator patrzy na status, nie na wyciąg z konta.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Umowa powstaje z szablonu, nie z kopiuj-wklej</b><p>Szablony umów są edytowalne w HTML i zawierają placeholdery na dane wycieczki i klienta. Wygenerowanie umowy dla nowego uczestnika to jedno kliknięcie, a nie przepisywanie danych do dokumentu.</p></div></div>
<h3>Faktury i polisy podpięte do rezerwacji</h3>
<p>Faktury wystawiane są przez API SaldeoSMART, ubezpieczenia obsługuje integracja z HDI. Obie rzeczy startują z danych, które już są w rezerwacji, więc nie ma etapu przepisywania.</p>
<h3>Koordynator widzi tylko swoje wyjazdy</h3>
<p>Osobny panel koordynatora daje dostęp do przypisanych wycieczek i ich uczestników, bez wglądu w resztę firmy. Komunikacja z uczestnikami idzie e-mailem przez SMTP, z szablonami i wysyłką masową.</p>
<h2><span class="idx">03 / Rezultat</span>Odpowiedź na pytanie klienta zajmuje jedno spojrzenie</h2>
<p>Organizator otwiera wycieczkę i widzi komplet: uczestników, wpłaty, umowy, faktury i polisy. Dziewięć rzeczy, które wcześniej żyły osobno, jest podpiętych do jednego rekordu. Nowa wycieczka nie oznacza nowego zestawu plików do pilnowania.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Wygląd strony oferty edytuje organizator, bez zgłoszenia do programisty.</li><li>Szablony umów są edytowalne, z placeholderami na dane wycieczki i klienta.</li><li>Przypomnienia o dopłacie wychodzą automatycznie, zamiast z listy do obdzwonienia.</li></ul>
<p>Prowadzisz sprzedaż, w której po zamówieniu zaczyna się druga praca (umowa, faktura, polisa, przypomnienia)? <a href="/kontakt" class="link">Napisz do mnie</a>. To zwykle najtańszy fragment firmy do zautomatyzowania.</p>
<div class="tech-tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>Supabase</span><span>PayNow</span><span>SaldeoSMART</span><span>HDI</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":9,"l":"modułów obsługujących wycieczkę od oferty do polisy"},{"v":3,"l":"integracje zewnętrzne: PayNow, SaldeoSMART, HDI"},{"v":2,"l":"role z osobnym zakresem: organizator i koordynator"}],"proces":[],"dodatkowe":["Wygląd strony oferty edytuje organizator, bez zgłoszenia do programisty.","Szablony umów są edytowalne, z placeholderami na dane wycieczki i klienta.","Przypomnienia o dopłacie wychodzą automatycznie, zamiast z listy do obdzwonienia."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Panel organizatora, widok pojedynczej wycieczki z listą uczestników, statusem płatności i harmonogramem zaliczka plus dopłata.","zasada":"Dane uczestników zanonimizuj w bazie testowej przed zrzutem. Nie dorabiaj wykresu sprzedaży ani licznika przychodu, bo takiego widoku nie ma.","alt":"Panel organizatora Magii Podróżowania z listą uczestników i statusem płatności","podpis":"Panel organizatora: uczestnicy, harmonogram płatności i stan rezerwacji dla jednej wycieczki"},{"slot":"proces-oferta","typ":"screenshot","opis":"Publiczna strona wycieczki z galerią, programem dnia i formularzem rezerwacji. Widok mobilny obok desktopowego.","zasada":"Zdjęcia w galerii muszą być realnymi zdjęciami z oferty klienta, nie stockiem generowanym AI.","alt":"Formularz rezerwacji wycieczki z danymi uczestników","podpis":"Rezerwacja online: dane kontaktowe, lista uczestników i przejście do płatności"},{"slot":"proces-umowa","typ":"crop","opis":"Wycinek edytora szablonu umowy z widocznymi placeholderami typu nazwa wycieczki, dane klienta, kwota.","zasada":"Pokaż realny szablon HTML z placeholderami. Bez rozmycia i bez sztucznych podświetleń."},{"slot":"proces-platnosc","typ":"crop","opis":"Wycinek widoku płatności: podział na zaliczkę i dopłatę, status transakcji PayNow.","zasada":"Kwoty ze środowiska testowego. Bez zielonych fajek i konfetti."}]'::jsonb
WHERE slug = 'magia-podrozowania';

-- milei-coin
UPDATE portfolio_projects SET
  headline        = 'Jak zbudować stronę tokena, która wygląda wiarygodnie w kategorii, gdzie nikt nikomu nie ufa?',
  tags            = ARRAY['Web3', 'One-pager', 'Framer']::text[],
  scope           = 'Design, wdrożenie, integracje',
  branza          = 'Kryptowaluty',
  obszar          = 'Strona produktowa tokena',
  hero_caption    = 'Strona główna · milei.framer.ai',
  description     = 'Strona one-pager dla tokena $MILEI. Wykres TradingView, statystyki, wpisy z X i instrukcja zakupu na jednym ekranie, bez backendu.',
  case_study_html = '<p>$MILEI to token inspirowany Javierem Milei, łączący memecoin z komentarzem polityczno-ekonomicznym. Strona miała za zadanie zebrać w jednym miejscu wszystko, czego szuka ktoś, kto właśnie usłyszał o tokenie i sprawdza, czy to jest cokolwiek warte.</p>
<p>Zaprojektowałem i wdrożyłem one-pager we Framerze, z osadzonym wykresem TradingView, dynamicznymi statystykami, wpisami z X i instrukcją zakupu.</p>
<div class="stat-band"><div class="s"><div class="v">1</div><div class="l">strona zamiast rozproszonych linków do Telegrama i giełd</div></div><div class="s"><div class="v">3</div><div class="l">źródła danych na żywo: wykres, statystyki, wpisy z X</div></div><div class="s"><div class="v">0</div><div class="l">backendu, dzięki czemu strona ładuje się natychmiast</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Odbiorca zaczyna od założenia, że to oszustwo</h2>
<p>W kryptowalutach domyślnym nastawieniem jest nieufność i jest to nastawienie uzasadnione. Strona, która obiecuje wzrosty i pokazuje wykresy bez źródła, potwierdza podejrzenie zamiast je rozwiewać.</p>
<ul><li>Informacje o tokenie były porozrzucane po Telegramie, giełdach i wpisach w mediach społecznościowych.</li><li>Deklaracje o płynności i liczbie posiadaczy nie znaczą nic bez danych, które da się sprawdzić.</li><li>Osoba bez doświadczenia w krypto nie wie, jak fizycznie kupić token.</li></ul>
<div class="pullquote"><p>W kategorii, w której wszyscy obiecują to samo, jedynym argumentem są dane pochodzące skądinąd niż z twojej strony.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Dane z zewnętrznych źródeł zamiast obietnic</h2>
<p>Podstawowa decyzja projektowa: liczby na stronie mają pochodzić z widgetów, a nie z pola tekstowego. Wykres kursu to osadzony TradingView. Wpisy pochodzą bezpośrednio z X. Linki prowadzą do CoinMarketCap i Uniswapa, czyli do miejsc, gdzie odbiorca sprawdzi to niezależnie.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/milei-coin/hero.jpg" alt="Strona tokena $MILEI z sekcją hero i wykresem" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">One-pager: hero, wykres i statystyki tokena</figcaption></figure>
<h3>Instrukcja zakupu rozpisana krok po kroku</h3>
<p>Osobne ścieżki dla iOS i Androida. To brzmi trywialnie, ale w tej kategorii jest to najczęstszy moment, w którym zainteresowana osoba się poddaje.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Brak backendu jako decyzja, nie ograniczenie</b><p>Cała strona to statyczne wdrożenie z osadzonymi widgetami i grafiką SVG. Ładuje się natychmiast, nie ma czego zhakować i nie zbiera żadnych danych użytkownika.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Jedno miejsce, w którym da się to sprawdzić</h2>
<p>Token ma stronę, która zbiera kurs, statystyki, komunikację i instrukcję zakupu, opierając liczby na zewnętrznych źródłach. Zainteresowana osoba nie musi szukać po trzech platformach, żeby wyrobić sobie zdanie.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Instrukcja zakupu rozpisana osobno dla iOS i Androida.</li><li>Sekcja partnerów prowadzi do Telegrama, CoinMarketCap i Uniswapa.</li><li>Grafika oparta na SVG, więc skaluje się bez utraty ostrości.</li></ul>
<p>Wchodzisz na rynek, na którym odbiorca domyślnie zakłada, że próbujesz go naciągnąć? <a href="/kontakt" class="link">Napisz do mnie</a>. Wtedy strona ma jedno zadanie: pokazać dane, których nie da się podrobić.</p>
<div class="tech-tags"><span>Framer</span><span>TradingView</span><span>Twitter/X embed</span><span>SVG</span></div>',
  case_study_data = '{"rezultaty":[{"v":1,"l":"strona zamiast rozproszonych linków do Telegrama i giełd"},{"v":3,"l":"źródła danych na żywo: wykres, statystyki, wpisy z X"},{"v":0,"l":"backendu, dzięki czemu strona ładuje się natychmiast"}],"proces":[],"dodatkowe":["Instrukcja zakupu rozpisana osobno dla iOS i Androida.","Sekcja partnerów prowadzi do Telegrama, CoinMarketCap i Uniswapa.","Grafika oparta na SVG, więc skaluje się bez utraty ostrości."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Sekcja hero strony $MILEI z grafiką i wezwaniem do działania.","zasada":"Realny zrzut ze strony. Portret w hero jest grafiką generowaną AI i tak został zaprojektowany, więc nie podmieniaj go na zdjęcie prawdziwej osoby.","alt":"Strona tokena $MILEI z sekcją hero i wykresem","podpis":"One-pager: hero, wykres i statystyki tokena"},{"slot":"proces-wykres","typ":"crop","opis":"Osadzony wykres TradingView z kursem tokena.","zasada":"Zrzut z prawdziwego widgetu. Absolutnie bez retuszowania kształtu wykresu na rosnący."},{"slot":"proces-statystyki","typ":"crop","opis":"Sekcja dynamicznych statystyk: liczba posiadaczy, liczba tokenów, płynność, licznik czasu.","zasada":"To najbardziej kuszące miejsce do podmiany liczb i najgorsze. Zrób zrzut w dowolnym momencie i zostaw wartości takie, jakie były."}]'::jsonb
WHERE slug = 'milei-coin';

-- music-pad
UPDATE portfolio_projects SET
  headline        = 'Jak zrobić instrument, który działa w przeglądarce i nie wymaga niczego umieć?',
  tags            = ARRAY['Web Audio', 'Projekt własny', 'Next.js']::text[],
  scope           = 'Koncepcja, UX, kod, warstwa audio',
  branza          = 'Audio i kreatywne narzędzia',
  obszar          = 'Eksperyment technologiczny',
  hero_caption    = 'Pad muzyczny · musicpad-mainly.vercel.app',
  description     = 'Projekt własny: pad muzyczny z 16 padami, trzema trybami odtwarzania, wizualizacją dźwięku i nagrywaniem sesji. Wszystko w przeglądarce, bez instalacji.',
  case_study_html = '<p>Interaktywny Pad Muzyczny to mój projekt własny i jednocześnie sprawdzian tego, jak daleko da się zajść z dźwiękiem w przeglądarce. Bez wtyczek, bez instalacji, bez konta.</p>
<p>Powstał instrument z 16 padami, trzema trybami odtwarzania, wizualizacją dźwięku i nagrywaniem sesji, oparty na Web Audio API i Tone.js.</p>
<div class="stat-band"><div class="s"><div class="v">16</div><div class="l">programowalnych padów</div></div><div class="s"><div class="v">3</div><div class="l">tryby odtwarzania: normalny, pulsujący, ciągły</div></div><div class="s"><div class="v">0</div><div class="l">instalacji potrzebnych do zagrania pierwszego dźwięku</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Przeglądarka nie jest oczywistym miejscem na instrument</h2>
<p>Dźwięk w przeglądarce ma dwa problemy naraz. Techniczny: opóźnienie między naciśnięciem a dźwiękiem musi być na tyle małe, żeby dało się grać do rytmu. I projektowy: narzędzie muzyczne zwykle zakłada, że użytkownik już coś umie.</p>
<ul><li>Zbyt duże opóźnienie zamienia instrument w zabawkę, w której nie da się trafić w rytm.</li><li>Interfejs oparty na myszce ogranicza do jednego dźwięku naraz.</li><li>Osoba bez przygotowania muzycznego potrzebuje zagrać coś sensownego w pierwszej minucie, inaczej zamyka kartę.</li></ul>
<div class="pullquote"><p>Instrument, który wymaga instrukcji, przegrywa z instrumentem, na którym da się przypadkiem zagrać coś, co brzmi dobrze.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Szesnaście padów, klawiatura i natychmiastowa reakcja</h2>
<p>Warstwa dźwiękowa stoi na Web Audio API z Tone.js, co pozwala trzymać opóźnienie na poziomie akceptowalnym do gry. Interfejs to siatka 16 padów, każdy z przypisanym dźwiękiem.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/music-pad/hero.jpg" alt="Pad muzyczny z siatką 16 padów i wizualizacją fali dźwiękowej" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Interfejs: 16 padów, wybór instrumentu i wizualizacja dźwięku</figcaption></figure>
<h3>Trzy tryby zamiast jednego sposobu grania</h3>
<p>Tryb normalny odtwarza dźwięk raz. Pulsujący powtarza go w rytmie. Ciągły trzyma go, dopóki pad jest aktywny. Te trzy zachowania wystarczają, żeby z pojedynczych dźwięków dało się złożyć coś, co ma strukturę.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Sterowanie z klawiatury zmienia to, co da się zagrać</b><p>Myszka obsługuje jeden pad naraz. Klawiatura pozwala trzymać kilka dźwięków jednocześnie i grać obiema rękami, czyli robić to, po co w ogóle sięga się po pad.</p></div></div>
<h3>Wizualizacja i nagrywanie</h3>
<p>Fala dźwiękowa pokazuje, co dzieje się w danym momencie, a nagrywanie pozwala zapisać sesję i wyeksportować ją. Bez tego drugiego całość zostałaby zabawką, a nie narzędziem.</p>
<h2><span class="idx">03 / Rezultat</span>Instrument, który zaczyna się od kliknięcia w link</h2>
<p>Pad działa w przeglądarce, na 16 padach, z trzema trybami odtwarzania i nagrywaniem. Nie zastępuje programu do produkcji muzyki, ale kasuje wszystko, co zwykle stoi między pomysłem a pierwszym dźwiękiem.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Sterowanie z klawiatury, więc da się grać obiema rękami.</li><li>Wizualizacja fali dźwiękowej pokazuje, co się właśnie dzieje.</li><li>Sesję można nagrać i wyeksportować.</li></ul>
<p>Zastanawiasz się, czy dana rzecz da się zrobić w przeglądarce zamiast w aplikacji do zainstalowania? <a href="/kontakt" class="link">Napisz do mnie</a>. Odpowiedź jest częściej twierdząca, niż się wydaje.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>Web Audio API</span><span>Tone.js</span><span>Tailwind CSS</span></div>',
  case_study_data = '{"rezultaty":[{"v":16,"l":"programowalnych padów"},{"v":3,"l":"tryby odtwarzania: normalny, pulsujący, ciągły"},{"v":0,"l":"instalacji potrzebnych do zagrania pierwszego dźwięku"}],"proces":[],"dodatkowe":["Sterowanie z klawiatury, więc da się grać obiema rękami.","Wizualizacja fali dźwiękowej pokazuje, co się właśnie dzieje.","Sesję można nagrać i wyeksportować."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Siatka 16 padów w trakcie gry, z podświetlonym aktywnym padem i widoczną wizualizacją fali.","zasada":"Zrzut ma pokazywać aplikację w działaniu, a nie stan spoczynku. Bez dorysowywania świecących efektów w programie graficznym.","alt":"Pad muzyczny z siatką 16 padów i wizualizacją fali dźwiękowej","podpis":"Interfejs: 16 padów, wybór instrumentu i wizualizacja dźwięku"},{"slot":"proces-tryby","typ":"crop","opis":"Wycinek przełącznika trybów odtwarzania i wyboru instrumentu.","zasada":"Realne opcje z aplikacji."},{"slot":"proces-wizualizacja","typ":"crop","opis":"Zbliżenie na wizualizację fali dźwiękowej podczas odtwarzania.","zasada":"Prawdziwa fala z aplikacji, nie wygenerowana grafika \"equalizera\"."}]'::jsonb
WHERE slug = 'music-pad';

-- prawkoczechy
UPDATE portfolio_projects SET
  headline        = 'Jak sprzedawać usługę, którą klient sprawdza na telefonie i porównuje z forum?',
  tags            = ARRAY['Strona firmowa', 'Google Ads', 'Next.js']::text[],
  scope           = 'Design, kod, SEO, wsparcie Google Ads',
  branza          = 'Usługi motoryzacyjne',
  obszar          = 'Konwersja ruchu płatnego',
  hero_caption    = 'Strona główna · prawkoczechy.pl',
  description     = 'Strona dla firmy organizującej egzaminy na prawo jazdy w Czechach, zbudowana pod ruch z Google Ads. Struktura, FAQ i formularz nastawione na kontakt.',
  case_study_html = '<p>Prawo Jazdy w Czechach obsługuje osoby, które chcą zdawać egzamin za granicą. Usługa jest legalna, ale klient trafia na nią z dużym bagażem wątpliwości, najczęściej zebranych na forach internetowych.</p>
<p>Zbudowałem stronę nastawioną na jedno: doprowadzić odwiedzającego z reklamy do kontaktu, odpowiadając po drodze na pytania, które i tak by zadał.</p>
<div class="stat-band"><div class="s"><div class="v">1</div><div class="l">cel strony: doprowadzenie do kontaktu</div></div><div class="s"><div class="v">FAQ</div><div class="l">sekcja odpowiadająca na wątpliwości prawne przed formularzem</div></div><div class="s"><div class="v">Ads</div><div class="l">struktura strony przygotowana pod ruch płatny</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Ruch płatny nie wybacza strony, która zwleka z odpowiedzią</h2>
<p>Przy reklamach płaci się za każde wejście, także za te, które kończą się po pięciu sekundach. W tej branży odwiedzający przychodzi z konkretnym pytaniem i najczęściej z telefonu. Jeśli strona zaczyna od historii firmy, pytanie zostaje bez odpowiedzi, a kliknięcie jest opłacone.</p>
<ul><li>Pierwsze pytanie brzmi zawsze tak samo: czy to jest legalne i czy dokument będzie uznany w Polsce.</li><li>Odwiedzający porównuje stronę z tym, co przeczytał na forum, więc ogólniki tylko wzmacniają nieufność.</li><li>Większość wejść z reklam pochodzi z telefonu, gdzie wolna strona kosztuje podwójnie.</li></ul>
<div class="pullquote"><p>Przy ruchu płatnym każda sekunda zwłoki w odpowiedzi na główne pytanie ma cenę wyrażoną w złotówkach.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Struktura ustawiona pod jedno pytanie i jeden cel</h2>
<p>Strona ma krótką nawigację i prowadzi do jednej czynności, czyli do kontaktu. Wszystko, co po drodze, jest usuwaniem powodów do wyjścia.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/prawkoczechy/hero.jpg" alt="Strona główna prawkoczechy.pl" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Strona główna: komunikat, wyjaśnienie procesu i wejście do kontaktu</figcaption></figure>
<h3>FAQ postawione przed formularzem, nie za nim</h3>
<p>Sekcja pytań i odpowiedzi zajmuje się dokładnie tym, z czym odwiedzający przychodzi: legalnością, uznawaniem dokumentu, przebiegiem procesu. Umieszczenie jej przed formularzem sprawia, że osoba wypełniająca kontakt ma już rozwiane wątpliwości, a nie dopiero je zgłasza.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Opinie tam, gdzie pojawia się nieufność</b><p>Referencje umieszczone przy sekcjach budzących wątpliwości działają inaczej niż te na dole strony. Odpowiadają na obawę w momencie, w którym ona powstaje.</p></div></div>
<h3>Szybkość jako pozycja w budżecie reklamowym</h3>
<p>Strona jest lekka i ładuje się szybko. Przy kampanii płatnej to nie jest kwestia estetyki, tylko tego, ile wejść w ogóle dotrwa do treści.</p>
<h2><span class="idx">03 / Rezultat</span>Kliknięcie z reklamy ma dokąd trafić</h2>
<p>Firma ma stronę zbudowaną wokół jednego celu, z sekcją FAQ odpowiadającą na główne wątpliwości i z krótką ścieżką do kontaktu. Wsparcie po stronie Google Ads i optymalizacja pod wyszukiwarkę były częścią tej samej pracy, a nie osobnym etapem po wdrożeniu.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Opinie klientów są na stronie, w miejscu, w którym pojawia się nieufność.</li><li>Nawigacja jest krótka, bo odwiedzający przychodzi z jednym pytaniem.</li><li>Strona ładuje się szybko, co przy ruchu płatnym z telefonu przekłada się na koszt.</li></ul>
<p>Płacisz za ruch z reklam i tracisz go na stronie, która nie odpowiada na pierwsze pytanie? <a href="/kontakt" class="link">Napisz do mnie</a>. To zwykle nie jest problem budżetu, tylko struktury strony.</p>
<div class="tech-tags"><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>Google Ads</span><span>SEO</span></div>',
  case_study_data = '{"rezultaty":[{"v":1,"l":"cel strony: doprowadzenie do kontaktu"},{"v":"FAQ","l":"sekcja odpowiadająca na wątpliwości prawne przed formularzem"},{"v":"Ads","l":"struktura strony przygotowana pod ruch płatny"}],"proces":[],"dodatkowe":["Opinie klientów są na stronie, w miejscu, w którym pojawia się nieufność.","Nawigacja jest krótka, bo odwiedzający przychodzi z jednym pytaniem.","Strona ładuje się szybko, co przy ruchu płatnym z telefonu przekłada się na koszt."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Sekcja hero prawkoczechy.pl z komunikatem głównym i wezwaniem do kontaktu, w widoku mobilnym.","zasada":"Realny zrzut z produkcji. Bez dorysowanych plakietek \"500 zadowolonych klientów\", jeśli takiej informacji na stronie nie ma.","alt":"Strona główna prawkoczechy.pl","podpis":"Strona główna: komunikat, wyjaśnienie procesu i wejście do kontaktu"},{"slot":"proces-faq","typ":"screenshot","opis":"Sekcja FAQ z rozwiniętymi odpowiedziami dotyczącymi legalności i uznawania dokumentu w Polsce.","zasada":"Pokaż realne pytania z serwisu. To najważniejsza sekcja tej strony, więc nie zastępuj jej przykładowymi."},{"slot":"proces-opinie","typ":"crop","opis":"Sekcja opinii klientów.","zasada":"Wyłącznie prawdziwe opinie. Bez portretów generowanych AI przy podpisach."}]'::jsonb
WHERE slug = 'prawkoczechy';

-- qualibase
UPDATE portfolio_projects SET
  headline        = 'Jak Qualibase połączył specjalistów IT z firmami, nie budując kolejnej tablicy ogłoszeń?',
  tags            = ARRAY['Platforma', 'HR Tech', 'React']::text[],
  scope           = 'Strategia, UX, kod, infrastruktura',
  branza          = 'HR Tech',
  obszar          = 'Rekrutacja IT',
  hero_caption    = 'Baza specjalistów · qualibase.pl',
  description     = 'Platforma rekrutacyjna IT z anonimowymi profilami kandydatów. Firma widzi technologie, doświadczenie i dostępność, dane osobowe dopiero po decyzji kandydata.',
  case_study_html = '<p>Rekrutacja IT nie działa dobrze z żadnej strony. Firmy dostają zgłoszenia od kandydatów, którzy nie znają wymaganych technologii. Dobrzy specjaliści przestają czytać wiadomości od rekruterów, bo dostają ich za dużo i żadna nie wygląda poważnie.</p>
<p>Qualibase powstał, żeby rozciąć ten węzeł: łączy zweryfikowanych specjalistów bezpośrednio z firmami. Moim zadaniem było zbudować to jako produkt, a nie jako tablicę ogłoszeń z lepszym wyglądem.</p>
<div class="stat-band"><div class="s"><div class="v">2</div><div class="l">perspektywy w jednym produkcie: kandydat i rekruter</div></div><div class="s"><div class="v">0</div><div class="l">pośredników między firmą a specjalistą</div></div><div class="s"><div class="v">3</div><div class="l">tryby pracy w filtrach: zdalnie, hybrydowo, stacjonarnie</div></div></div>
<h2><span class="idx">01 / Wyzwanie</span>Dwie grupy użytkowników, dwa różne problemy</h2>
<p>Platformy rekrutacyjne zwykle obsługują jedną stronę lepiej niż drugą i na tym się kończą. Tutaj obie musiały dostać coś od pierwszego dnia, bo bez kandydatów nie ma rekruterów, a bez rekruterów kandydaci odchodzą po tygodniu.</p>
<ul><li>Specjalista IT nie chce być w bazie, z której ktokolwiek może wysłać mu masową wiadomość.</li><li>Rekruter nie chce filtrować zgłoszeń od osób, które nie znają wymaganej technologii.</li><li>Baza ma wartość tylko wtedy, gdy profile są prawdziwe, więc system musi wymuszać konkret zamiast opisu "komunikatywny, szybko się uczę".</li></ul>
<div class="pullquote"><p>Platforma, która nie rozwiązuje problemu kandydata, nigdy nie zbierze bazy na tyle dobrej, żeby rekruter chciał za nią zapłacić.</p></div>
<h2><span class="idx">02 / Rozwiązanie</span>Jedna baza, dwa zupełnie różne doświadczenia</h2>
<p>Qualibase działa na React z backendem w Pythonie, na AWS i PostgreSQL. Ta sama baza obsługuje dwie ścieżki, które widzą i mogą co innego.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/qualibase/hero.jpg" alt="Qualibase: lista dostępnych specjalistów IT z technologiami i dostępnością" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Baza kandydatów: technologie, seniority, lokalizacja i dostępność w jednym widoku</figcaption></figure>
<h3>Kandydat, czyli anonimowość i kontrola</h3>
<p>Profil kandydata pokazuje technologie, lata doświadczenia, dostępność i tryb pracy. Nie pokazuje imienia ani CV, dopóki kandydat sam tego nie odsłoni. Selekcja zaczyna się więc od kompetencji, a specjalista decyduje, komu się ujawnia.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);"><img src="/projekty/qualibase/proces-perspektywy.jpg" alt="Qualibase: dwie perspektywy, dla kandydata i dla rekrutera" style="width:100%;height:auto;display:block;" /><figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Dwie ścieżki wejścia do tego samego produktu</figcaption></figure>
<h3>Rekruter, czyli baza zamiast stosu CV</h3>
<p>Rekruter przegląda skondensowane profile z filtrem po technologii, poziomie seniority i dostępności. Zamiast czytać dokumenty, zawęża listę i kontaktuje się z osobami, które pasują do roli.</p>
<div class="callout"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg></span><div class="t"><b>Anonimowość jest funkcją produktu, nie ustawieniem prywatności</b><p>Domyślne ukrycie danych osobowych zmienia to, kto zgłasza się do bazy. Specjalista, który nie szuka aktywnie pracy, może w niej być bez ryzyka, że zobaczy go obecny pracodawca.</p></div></div>
<h2><span class="idx">03 / Rezultat</span>Produkt, w którym obie strony mają powód, żeby zostać</h2>
<p>Qualibase ma działającą architekturę dwustronną: kandydat kontroluje swoją widoczność, rekruter dostaje bazę z filtrami zamiast skrzynki pełnej załączników. To jedna platforma, ale dwie osobne odpowiedzi na dwa osobne problemy.</p>
<h2><span class="idx">Dodatkowo</span>Co jeszcze przy okazji się udało</h2><ul><li>Kandydat decyduje, kiedy odsłania dane osobowe.</li><li>Filtrowanie po technologii, seniority i dostępności zamiast przeglądania CV.</li><li>Osobne panele dla obu stron, na tej samej bazie danych.</li></ul>
<p>Budujesz produkt, w którym dwie grupy użytkowników muszą wygrać jednocześnie, żeby cokolwiek zadziałało? <a href="/kontakt" class="link">Napisz do mnie</a>. Ta klasa projektów rozstrzyga się na etapie architektury, nie na etapie designu.</p>
<div class="tech-tags"><span>React</span><span>TypeScript</span><span>Python</span><span>AWS</span><span>PostgreSQL</span></div>',
  case_study_data = '{"rezultaty":[{"v":2,"l":"perspektywy w jednym produkcie: kandydat i rekruter"},{"v":0,"l":"pośredników między firmą a specjalistą"},{"v":3,"l":"tryby pracy w filtrach: zdalnie, hybrydowo, stacjonarnie"}],"proces":[],"dodatkowe":["Kandydat decyduje, kiedy odsłania dane osobowe.","Filtrowanie po technologii, seniority i dostępności zamiast przeglądania CV.","Osobne panele dla obu stron, na tej samej bazie danych."],"opinia":{"cytat":"","autor":"","rola":""}}'::jsonb,
  image_brief     = '[{"slot":"hero","typ":"screenshot","opis":"Lista specjalistów z widocznymi technologiami, poziomem seniority, lokalizacją i statusem dostępności. Widok rekrutera.","zasada":"Profile w bazie testowej mają wyglądać jak realne profile: prawdziwe stacki technologiczne, sensowne lata doświadczenia. Bez awatarów generowanych AI z twarzami, bo to od razu widać.","alt":"Qualibase: lista dostępnych specjalistów IT z technologiami i dostępnością","podpis":"Baza kandydatów: technologie, seniority, lokalizacja i dostępność w jednym widoku"},{"slot":"proces-perspektywy","typ":"screenshot","opis":"Ekran wyboru perspektywy: wejście dla kandydata i wejście dla rekrutera obok siebie.","zasada":"Realny zrzut sekcji ze strony. Bez dopisywania liczby użytkowników ani \"zaufali nam\".","alt":"Qualibase: dwie perspektywy, dla kandydata i dla rekrutera","podpis":"Dwie ścieżki wejścia do tego samego produktu"},{"slot":"proces-filtry","typ":"crop","opis":"Wycinek panelu filtrów: technologia, seniority, dostępność, tryb pracy.","zasada":"Pokaż filtry, które faktycznie istnieją w aplikacji."}]'::jsonb
WHERE slug = 'qualibase';

COMMIT;
