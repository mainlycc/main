export const projectCaseStudies: Record<
  string,
  {
    headline: string;
    tags: string[];
    scope: string;
    heroCaption: string;
    heroDeviceBadge?: string;
    caseStudyHtml: string;
  }
> = {
  "football-academy": {
    headline: "System akademii piłkarskiej z <em>przeglądarką 3D</em> - role, galeria i eksport zasobów",
    tags: ["3D", "Aplikacja webowa", "Next.js"],
    scope: "UX, design, kod, 3D",
    heroCaption: "Przeglądarka 3D · Football Academy System",
    caseStudyHtml: `<p><strong>Football Academy to akademia piłkarska, która buduje markę nie tylko na boisku</strong> - otwarcia oddziałów, osiągnięcia i materiały brandingowe muszą żyć w jednym, spójnym systemie. Zamiast rozproszonych plików i ręcznego przygotowywania grafik powstał Football Academy System: wewnętrzna aplikacja webowa z interaktywną przeglądarką modeli 3D.</p>
<p>Centrum produktu to galeria zasobów 3D - od symbolicznych „kluczy” po materiały związane z wydarzeniami (np. otwarcie oddziału Football Baby). Manager może obracać model, zmieniać oświetlenie i od razu eksportować plik do GLB, PNG lub SVG.</p>
<div class="stat-band">
  <div class="s"><div class="v">3</div><div class="l">Role użytkowników: Zawodnik, Trener, Manager</div></div>
  <div class="s"><div class="v">3</div><div class="l">Formaty eksportu: GLB, PNG, SVG</div></div>
  <div class="s"><div class="v">3D</div><div class="l">Interaktywny viewer z kontrolą obrotu i światła</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Marka akademii potrzebuje narzędzi, nie tylko strony wizytówki</h2>
<p>Akademia rośnie - nowe oddziały, wydarzenia, materiały dla trenerów i zawodników. Bez centralnego systemu każdy plik żyje osobno: w Discordzie, na dysku, w mailu. Brakuje wspólnego miejsca do przeglądania zasobów 3D, kontroli dostępu i szybkiego eksportu pod social media, prezentacje czy print.</p>
<ul>
  <li><strong>Zasoby 3D w przeglądarce.</strong> Modele muszą dać się obejrzeć bez Blendera i bez instalacji - z sensowną kontrolą kamery i światła.</li>
  <li><strong>Role i uprawnienia.</strong> Zawodnik, trener i manager mają inne potrzeby - system musi to odzwierciedlać.</li>
  <li><strong>Eksport pod wiele kanałów.</strong> Ten sam asset ma wyjść jako GLB (3D), PNG (grafika) i SVG (wektor), bez osobnego pipeline'u.</li>
</ul>
<div class="pullquote">
  <p>Gdy akademia traktuje branding jak produkt - a nie jak folder na dysku - potrzebuje aplikacji, która łączy galerię, uprawnienia i eksport w jednym miejscu.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Dashboard z viewerem Three.js i panelem zarządzania</h2>
<p>Aplikacja oparta na Next.js z przeglądarką 3D (Three.js / React Three Fiber). Widok „Przegląd” pokazuje aktualny model w ciemnym, gamingowym UI; strzałki przełączają galerię. Panel boczny daje tryby Obróć i Światło, eksport GLB/PNG/SVG oraz akcje zarządzania (m.in. usuwanie) dla roli Manager.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/football-academy-ui.png" alt="Football Academy System - przeglądarka modelu 3D z panelem Obróć / Światło i eksportem GLB, PNG, SVG" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Przegląd zasobu 3D - otwarcie oddziału Football Baby, role i eksport w jednym ekranie</figcaption>
</figure>
<h3>Trzy role, jeden produkt</h3>
<p>Przełącznik ról (Zawodnik / Trener / Manager) pokazuje, że system nie jest tylko galerią - to narzędzie operacyjne akademii. Manager zarządza zasobami, trener i zawodnik korzystają z przeglądu w zakresie swoich uprawnień. Nawigacja: Przegląd, Lista, Zarządzaj - jasny podział między konsumpcją a administracją.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
  </span>
  <div class="t">
    <b>Eksport GLB · PNG · SVG z jednego modelu</b>
    <p>Jeden asset, trzy wyjścia: model 3D do dalszej pracy, raster do social mediów i wektor do materiałów drukowanych - bez ręcznego konwertowania poza systemem.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>System, który pokazuje markę akademii w 3D</h2>
<p>Football Academy dostała wewnętrzny system z nowoczesnym UI, przeglądarką 3D i rolami użytkowników - miejsce, w którym osiągnięcia i materiały brandingowe żyją jako produkt, a nie jako luźne pliki. Viewer z kontrolą światła i eksportem sprawia, że przygotowanie assetu pod konkretny kanał zajmuje sekundy, nie godziny.</p>
<p>Budujesz aplikację z WebGL, galerią assetów albo systemem ról dla organizacji sportowej? <a href="/kontakt" class="link">Porozmawiajmy</a> - łączę UX dashboardu z technologią 3D w przeglądarce.</p>
<div class="tech-tags">
  <span>Next.js</span><span>TypeScript</span><span>Three.js</span>
  <span>React Three Fiber</span><span>Tailwind CSS</span>
</div>`,
  },

  "qualibase": {
    headline: "Platforma rekrutacyjna IT - <em>zweryfikowani specjaliści</em> bez przypadkowych zgłoszeń",
    tags: ["Platforma", "HR Tech", "React"],
    scope: "Strategia, UX, kod, infrastruktura",
    heroCaption: "Strona główna · qualibase.pl",
    caseStudyHtml: `<p><strong>Rekrutacja IT jest zepsuta z obu stron.</strong> Firmy toną w CV od kandydatów, którzy nie spełniają wymagań - a dobrzy specjaliści nie odpisują na wiadomości rekruterów, bo mają ich za dużo i żadna nie brzmi poważnie. Qualibase powstał, żeby przeciąć ten węzeł: platforma łączy zweryfikowanych specjalistów bezpośrednio z firmami - bez pośredników, bez spamu, bez przypadkowych zgłoszeń.</p>
<p>Zadanie: zbudować dwustronną platformę rekrutacyjną, która działa jak produkt technologiczny, nie jak tablica ogłoszeń. Z autentykacją, profilami, panelami i bazą kandydatów gotową do przeszukiwania po technologiach i dostępności.</p>
<div class="stat-band">
  <div class="s"><div class="v">2</div><div class="l">Perspektywy w jednym produkcie: kandydat i rekruter</div></div>
  <div class="s"><div class="v">5+</div><div class="l">Technologii: React, Python, AWS, TypeScript, PostgreSQL</div></div>
  <div class="s"><div class="v">Direct</div><div class="l">Połączenie firma-specjalista bez agencji i pośredników</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Dwa różne problemy, jedna platforma musi je obu rozwiązać</h2>
<p>Platformy rekrutacyjne zazwyczaj służą jednej stronie lepiej niż drugiej. Qualibase musiał być wartościowy dla obu grup jednocześnie - inaczej żadna nie zostaje: bez kandydatów nie ma rekruterów, bez rekruterów kandydaci szybko odchodzą.</p>
<ul>
  <li><strong>Kandydaci nie chcą spamu.</strong> Dobry specjalista IT nie szuka pracy przez platformę pełną masowych wiadomości - chce anonimowości i kontaktu tylko od firm, które realnie pasują.</li>
  <li><strong>Rekruterzy nie chcą CV bez kompetencji.</strong> Filtrowanie dziesiątek zgłoszeń od kandydatów, którzy nie znają wymaganych technologii, to strata czasu i pieniędzy.</li>
  <li><strong>Weryfikacja kompetencji.</strong> Baza ma wartość tylko wtedy, gdy profile są prawdziwe - system musi wymuszać podawanie realnych, sprawdzalnych informacji.</li>
</ul>
<div class="pullquote">
  <p>Platforma rekrutacyjna, która nie rozwiązuje problemu kandydata, nigdy nie zbuduje bazy wystarczająco dobrej, żeby przyciągnąć rekruterów gotowych zapłacić. Obie strony muszą wygrywać od dnia pierwszego.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Dwuperspektywiczny system z anonimowymi profilami i panelami</h2>
<p>Qualibase zbudowany w React z backendem Python na AWS i bazą PostgreSQL. Architektura dwuperspektywiczna: ta sama platforma, dwa zupełnie różne doświadczenia użytkownika w zależności od roli.</p>
<h3>Perspektywa kandydata - anonimowość i kontrola</h3>
<p>Kandydat buduje profil bez podawania danych osobowych widocznych publicznie - firma widzi technologie, lata doświadczenia, dostępność i lokalizację (Remote/hybrydowo/stacjonarnie), ale nie imię i CV dopóki sam się nie zdecyduje ujawnić. Podejście eliminuje bias na etapie shortlistowania i daje specjaliście pełną kontrolę nad tym, kto go widzi.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/qualibase-hero.png" alt="Qualibase - lista dostępnych specjalistów IT z technologiami i dostępnością" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Baza kandydatów - technologie, seniority, lokalizacja i dostępność w jednym widoku</figcaption>
</figure>
<h3>Perspektywa rekrutera - baza bez szumu</h3>
<p>Rekruter przegląda bazę specjalistów przefiltrowaną po technologiach, poziomie seniority i dostępności. Zamiast przeglądać stosy CV, widzi skondensowane profile z realnym doświadczeniem i może kontaktować się bezpośrednio z kandydatami, którzy faktycznie pasują do roli.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/qualibase-perspectives.png" alt="Qualibase - dwie perspektywy: dla kandydata i dla rekrutera" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Dwie perspektywy, jeden cel - platforma zaprojektowana z myślą o obu stronach rekrutacji</figcaption>
</figure>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg>
  </span>
  <div class="t">
    <b>Wspierane technologie - React, Python, AWS, TypeScript, PostgreSQL</b>
    <p>Stack dobrany pod skalowalność platformy: React po stronie frontendu, Python z frameworkiem backendowym, PostgreSQL jako relacyjna baza danych, infrastruktura na AWS. Architektura gotowa na wzrost bazy użytkowników bez przepisywania systemu.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Platforma, która działa jak produkt, nie jak tablica ogłoszeń</h2>
<p>Qualibase działa jako pełnoprawna platforma SaaS - z rejestracją, profilami, panelami dla obu ról i bazą zweryfikowanych specjalistów IT gotową do przeszukiwania. Dwuperspektywiczna architektura rozwiązuje rzeczywisty problem obu stron rekrutacji, zamiast tylko agregować oferty i CV jak tradycyjne portale.</p>
<p>Budujesz marketplace, platformę dwustronną lub aplikację SaaS z różnymi rolami użytkowników? <a href="/kontakt" class="link">Porozmawiajmy</a> - to typ projektu, który znam od strony produktowej i technicznej.</p>
<div class="tech-tags">
  <span>React</span><span>Python</span><span>AWS</span><span>TypeScript</span><span>PostgreSQL</span>
</div>`,
  },

  "jkterm-wizualizator": {
    headline: "Generator AI dla <em>producenta grzejników</em> - wizualizacje zamiast AutoCAD",
    tags: ["AI", "E-commerce", "Next.js"],
    scope: "Strategia, UX, kod, AI",
    heroCaption: "Generator wizualizacji · JK Term",
    heroDeviceBadge: "Generuj obrazki",
    caseStudyHtml: `<p><strong>JK Term produkuje grzejniki łazienkowe i drabinkowe</strong> - dziesiątki modeli, każdy dostępny w kilku kolorach i rozmiarach. Żeby pokazać produkt w katalogu lub na Allegro w realnym wnętrzu, trzeba było albo zlecić sesję fotograficzną, albo przygotować wizualizację w AutoCAD. Oba podejścia: drogie, powolne i nie do przeskalowania przy dużej liczbie wariantów.</p>
<p>Zbudowałem dedykowany generator AI, który zamknął cały ten proces w jednej aplikacji webowej - wgraj zdjęcie produktu, opisz scenę, kliknij generuj. Gotowe wizualizacje do pobrania w kilkadziesiąt sekund.</p>
<div class="stat-band">
  <div class="s"><div class="v">3</div><div class="l">Warianty wizualizacji sceny generowane jednocześnie do wyboru</div></div>
  <div class="s"><div class="v">2</div><div class="l">Tryby: Scena (wnętrze) i Detal (zdjęcia produktowe do Allegro)</div></div>
  <div class="s"><div class="v">0</div><div class="l">Potrzeba AutoCAD, grafika ani sesji fotograficznej</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Dziesiątki wariantów, każdy wymaga osobnej wizualizacji</h2>
<p>Producent grzejników stoi przed konkretnym problemem skali: jeden model to kilka kolorów, kilka rozmiarów i kilka wariantów stylistycznych. Każdy wymaga osobnego zdjęcia do katalogu, strony produktowej i listingu na Allegro. Tradycyjne podejście - AutoCAD lub sesja foto - nie nadaje się do obsługi takiego wolumenu bez ogromnych kosztów i opóźnień.</p>
<ul>
  <li><strong>AutoCAD jest za wolny.</strong> Przygotowanie jednej wizualizacji to praca specjalisty na kilka godzin - przy dziesiątkach wariantów to niemożliwe do utrzymania.</li>
  <li><strong>Sesja fotograficzna jest za droga.</strong> Każdy nowy kolor lub rozmiar to kolejny koszt i termin fotografa.</li>
  <li><strong>Allegro wymaga zdjęć w kontekście.</strong> Produkty pokazane w realnym wnętrzu łazienkowym konwertują lepiej niż zdjęcia na białym tle - ale ich produkcja dotychczas była kosztowna.</li>
  <li><strong>Trudna komunikacja z grafikiem.</strong> Opisanie scenerii słowami i czekanie na efekt, poprawki, kolejne iteracje - każdy producent zna ten ból.</li>
</ul>
<div class="pullquote">
  <p>Zamiast tłumaczyć grafikowi, jak ma wyglądać łazienka na wizualizacji - po prostu ją opisujesz i model AI sam ją tworzy. Kilka sekund, trzy warianty do wyboru.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Dwutryby generator: Scena i Detal</h2>
<p>Aplikacja webowa w Next.js z integracją modelu AI do generowania obrazów. Interfejs zaprojektowany specjalnie pod workflow producenta - minimum kliknięć, maksimum kontroli nad wynikiem.</p>
<h3>Tryb Scena - grzejnik w realnej łazience</h3>
<p>Użytkownik wgrywa zdjęcie produktu, wybiera kolor produktu, kąt kamery (trzy niezależne ustawienia) i rozmiar produktu na scenie. Wpisuje opis scenerii - styl łazienki, oświetlenie, materiały ścian - i klika „Generuj". System zwraca trzy warianty kompozycji jednocześnie, gotowe do pobrania. Każdy wariant to realistyczna fotografia produktu umieszczonego w opisanym wnętrzu.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/jkterm-wizualizator2.png" alt="Tryb Scena - wygenerowane warianty wizualizacji grzejnika" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Tryb Scena - trzy warianty kompozycji wygenerowane jednocześnie</figcaption>
</figure>
<h3>Tryb Detal - profesjonalne zdjęcia produktowe do Allegro</h3>
<p>Drugi tryb generuje zbliżenia detali produktu: połączenia rur, wykończenie powierzchni, elementy mocujące. To zdjęcia, które na Allegro robią różnicę - kupujący chcą zobaczyć jakość wykonania przed zakupem, a tradycyjna sesja makro jest kosztowna i czasochłonna.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/jkterm-wizualizator1.png" alt="Tryb Detal - zbliżenia elementów grzejnika do katalogu i Allegro" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Tryb Detal - zbliżenia produktu gotowe do listingów Allegro</figcaption>
</figure>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"></path></svg>
  </span>
  <div class="t">
    <b>Konfiguracja w czasie rzeczywistym</b>
    <p>Kąt kamery, kolor produktu, rozmiar na scenie - każdy parametr ustawiany przed generowaniem. Jeśli wynik nie satysfakcjonuje, zmiana jednego parametru i regeneracja zajmuje kilkanaście sekund, nie kilka godzin jak w przypadku korekty w AutoCAD.</p>
  </div>
</div>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/jkterm-wizualizator3.png" alt="Panel konfiguracji sceny - kąty kamery, kolor, rozmiar" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Panel konfiguracji - kąt kamery, kolor produktu i rozmiar na scenie</figcaption>
</figure>
<h2><span class="idx">03 / Rezultat</span>Wizualizacje produktowe w kilkadziesiąt sekund, nie dni</h2>
<p>JK Term może teraz samodzielnie generować profesjonalne zdjęcia produktowe dla każdego wariantu - bez grafika, bez AutoCAD, bez sesji fotograficznej. Nowy kolor grzejnika oznacza nowe zdjęcia w ciągu pięciu minut, nie pięciu dni. Listing na Allegro z realnym wnętrzem łazienkowym zamiast białego tła - taki sam standard zdjęć jak największe sklepy, przy ułamku kosztu.</p>
<p>Masz produkty, które wymagają wizualizacji w różnych wariantach, kolorach lub otoczeniach? Generator AI to jedno z najszybszych zwrotów z inwestycji, jakie można zbudować dla e-commerce. <a href="/kontakt" class="link">Porozmawiajmy o Twoim przypadku</a>.</p>
<div class="tech-tags">
  <span>Next.js</span><span>TypeScript</span><span>AI Image Generation</span><span>Tailwind CSS</span>
</div>`,
  },

  "magia-podrozowania": {
    headline: "System do zarządzania <em>wycieczkami</em> od zapytania do faktury",
    tags: ["CRM", "Turystyka", "Next.js"],
    scope: "Strategia, UX, kod",
    heroCaption: "Publiczna oferta wycieczki · program, świadczenia i rezerwacja",
    heroDeviceBadge: "Zarezerwuj",
    caseStudyHtml: `<p><strong>Grupa DE-PL organizuje kilkadziesiąt wycieczek rocznie</strong> - i do niedawna każda z nich żyła osobno: w arkuszu kalkulacyjnym, w skrzynce mailowej, w segregatorze umów. Rezerwacje wpadały przez formularz na starej stronie, ale dalej wszystko robiono ręcznie - wysyłka umowy, pilnowanie zaliczki, wystawienie faktury, zgłoszenie ubezpieczenia. Przy większej liczbie uczestników łatwo było coś przeoczyć.</p>
<p>Zadanie było jasne: zbudować jeden system, w którym cały cykl obsługi wycieczki - od publikacji oferty po rozliczenie - dzieje się w jednym miejscu, z automatyzacją tam, gdzie wcześniej był ręczny czyn.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/magia-podrozowania-oferta.png" alt="Publiczna strona oferty wycieczki Magia Podróżowania - program, zakwaterowanie, świadczenia i cena" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Publiczna oferta wycieczki - galeria, program dnia po dniu, świadczenia i CTA do rezerwacji</figcaption>
</figure>
<div class="stat-band">
  <div class="s"><div class="v">7</div><div class="l">Modułów systemu połączonych w jeden spójny panel</div></div>
  <div class="s"><div class="v">4</div><div class="l">Integracje zewnętrzne: PayNow, SaldeoSMART, HDI, SMTP</div></div>
  <div class="s"><div class="v">3</div><div class="l">Role użytkowników: organizator, koordynator, uczestnik</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Siedem arkuszy, jedna prawda</h2>
<p>Największym problemem nie był brak narzędzi - był ich nadmiar, żaden ze sobą niepołączony. Dane o uczestniku istniały w arkuszu rezerwacji, osobno w mailu z umową, osobno w systemie księgowym. Przy każdej zmianie terminu czy liczby uczestników trzeba było poprawić to ręcznie w kilku miejscach naraz.</p>
<ul>
  <li><strong>Rezerwacje bez struktury.</strong> Zgłoszenia przychodziły mailem lub telefonicznie, bez jednego źródła prawdy o statusie płatności.</li>
  <li><strong>Umowy pisane od zera.</strong> Każda umowa i faktura przygotowywana ręcznie, na podstawie szablonu Worda.</li>
  <li><strong>Zero widoczności dla koordynatorów.</strong> Osoby prowadzące wyjazd nie miały dostępu do aktualnej listy uczestników.</li>
  <li><strong>Ubezpieczenia na telefon.</strong> Zgłoszenia do ubezpieczyciela odbywały się poza systemem, bez śladu w dokumentacji.</li>
</ul>
<div class="pullquote">
  <p>Nie potrzebowali kolejnej aplikacji do zarządzania projektami. Potrzebowali systemu, który myśli tak, jak myśli branża turystyczna - w wycieczkach, terminach i ratach.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Jeden panel, cały cykl życia wycieczki</h2>
<p>Zbudowałem system modułowo - każdy etap obsługi wycieczki ma swoje miejsce, ale wszystkie moduły dzielą tę samą bazę danych, więc nic nie trzeba przepisywać dwa razy.</p>
<h3>Panel organizatora i publiczne strony ofert</h3>
<p>Organizator tworzy wycieczkę raz - cenę, miejsca, harmonogram płatności (zaliczka + dopłata) - a system generuje z tego edytowalną, publiczną stronę oferty z galerią i formularzem rezerwacji online.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/magia-podrozowania-rezerwacja.png" alt="Wielokrokowy formularz rezerwacji Magia Podróżowania - dane kontaktowe, uczestnicy, usługi i zgody" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Rezerwacja online w 4 krokach - kontakt, uczestnicy, usługi dodatkowe, zgody i podsumowanie</figcaption>
</figure>
<h3>Płatności, umowy i faktury bez ręcznej roboty</h3>
<p>Rezerwacja online uruchamia całą resztę automatycznie: integracja z <strong>PayNow</strong> obsługuje płatności i przypomnienia o ratach, edytor szablonów HTML wypełnia umowę danymi klienta i eksportuje do PDF, a <strong>SaldeoSMART API</strong> wystawia fakturę bez udziału księgowości.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"></path></svg>
  </span>
  <div class="t">
    <b>Szczegół, który robi różnicę</b>
    <p>Integracja z HDI oznacza, że ubezpieczenie uczestnika jest zgłaszane automatycznie w momencie potwierdzenia rezerwacji - nie trzeba już o tym pamiętać osobno.</p>
  </div>
</div>
<h3>Panel koordynatora i komunikacja masowa</h3>
<p>Koordynatorzy wyjazdów dostali ograniczony dostęp z podglądem wyłącznie przypisanych wycieczek i list uczestników. Do komunikacji z grupą wbudowano wysyłkę e-maili SMTP z szablonami wiadomości - bez przełączania się na osobne narzędzie.</p>
<h2><span class="idx">03 / Rezultat</span>Od zapytania do faktury bez przepisywania</h2>
<p>System zastąpił komplet arkuszy, szablonów Worda i ręcznych zgłoszeń jednym panelem. Dane uczestnika wpisuje się raz - przy rezerwacji - a dalej płyną same przez płatność, umowę, fakturę i ubezpieczenie. Zespół Grupy DE-PL odzyskał czas, który wcześniej szedł na przepisywanie tych samych informacji w kółko.</p>
<p>Jeśli Twoja firma też żongluje danymi klientów między arkuszem, mailem i fakturownią - to dokładnie ten typ projektu, który buduję najchętniej. <a href="/kontakt" class="link">Porozmawiajmy o Twoim procesie</a> i sprawdźmy, co dałoby się zautomatyzować jako pierwsze.</p>
<div class="tech-tags">
  <span>Next.js</span><span>React</span><span>TypeScript</span><span>Tailwind CSS</span>
  <span>Supabase (PostgreSQL, Auth, Storage)</span><span>shadcn/ui</span>
  <span>PayNow</span><span>SaldeoSMART API</span><span>HDI</span><span>Vercel</span>
</div>`,
  },
  "biblioteka-promptow": {
    headline: "Polska <em>biblioteka promptów</em> dla ChatGPT, Claude i Midjourney",
    tags: ["AI", "Next.js", "Platforma"],
    scope: "Strategia, UX, kod",
    heroCaption: "Landing page · bibliotekapromptow.pl",
    caseStudyHtml: `<p><strong>Biblioteka Promptów</strong> to polskojęzyczna platforma z ponad 1000 gotowych szablonów poleceń do popularnych narzędzi AI. Celem projektu było skrócenie czasu potrzebnego na pisanie skutecznych promptów i ułatwienie pracy zarówno początkującym, jak i zaawansowanym użytkownikom.</p>
<p>Strona łączy landing page sprzedażowy z aplikacją do przeglądania biblioteki - użytkownik może szybko znaleźć prompt, skopiować go jednym kliknięciem i od razu użyć w ChatGPT, Claude, Gemini, Midjourney lub DALL·E.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/biblioteka-promptow2.png" alt="Landing page Biblioteki Promptów AI" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Landing page z sekcjami funkcji, statystyk i CTA</figcaption>
</figure>
<h2><span class="idx">01 / Wyzwanie</span>Prompty rozproszone, brak jednego źródła</h2>
<p>Użytkownicy AI korzystali z przypadkowych promptów znalezionych w social mediach, bez kategoryzacji, wyszukiwarki i pewności, że dany szablon faktycznie działa. Brakowało jednego miejsca, które grupuje sprawdzone prompty tekstowe i graficzne w logiczne kategorie.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/bibliotekapromptow.png" alt="Panel aplikacji Biblioteka Promptów" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Aplikacja z kategoriami, wyszukiwarką i kartami promptów</figcaption>
</figure>
<h2><span class="idx">02 / Rozwiązanie</span>Platforma z wyszukiwarką i kategoriami</h2>
<ul>
  <li><strong>1000+ promptów</strong> podzielonych na sekcje tekstowe i graficzne.</li>
  <li><strong>15+ kategorii</strong> - marketing, copywriting, programowanie, social media i inne.</li>
  <li><strong>Kopiowanie jednym kliknięciem</strong> - bez ręcznego przepisywania treści.</li>
  <li><strong>Responsywny interfejs</strong> - landing i aplikacja działają na mobile i desktop.</li>
</ul>
<h2><span class="idx">03 / Rezultat</span>Gotowa baza promptów pod polski rynek AI</h2>
<p>Platforma uporządkowała pracę z narzędziami AI i dała użytkownikom szybki dostęp do sprawdzonych szablonów. Projekt pokazuje, jak połączyć landing sprzedażowy z użyteczną aplikacją webową w jednym produkcie.</p>
<div class="tech-tags">
  <span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span>
  <span>OpenAI API</span><span>Claude API</span>
</div>`,
  },

  "akademia-wiedzy": {
    headline: "System e-korepetycji dla <em>40 nauczycieli i 865 uczniów</em> - automatyczny, skalowalny",
    tags: ["CRM", "E-learning", "Next.js"],
    scope: "Strategia, UX, kod",
    heroCaption: "Panel administratora · grafik lekcji i rozliczenia",
    heroDeviceBadge: "+ Nowa lekcja",
    caseStudyHtml: `<p><strong>Akademia Wiedzy obsługiwała ponad 865 uczniów i 40 korepetytorów</strong> - i każdą zmianę grafiku, rozliczenie za miesiąc i przypomnienie do rodzica ktoś musiał zrobić ręcznie. Arkusze Excela puchły, błędy się pojawiały, a czas, który powinien iść na nauczanie, znikał w mailach i SMS-ach.</p>
<p>Potrzebowali systemu, który sam planuje lekcje, sam nalicza należności i sam wysyła linki płatnicze - bez żadnej dodatkowej pracy po stronie biura.</p>
<div class="stat-band">
  <div class="s"><div class="v">865+</div><div class="l">Aktywnych uczniów obsługiwanych przez system</div></div>
  <div class="s"><div class="v">40+</div><div class="l">Korepetytorów z własnymi panelami dostępu</div></div>
  <div class="s"><div class="v">3</div><div class="l">Role użytkowników: administrator, korepetytor, gość</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>865 uczniów w jednym arkuszu kalkulacyjnym</h2>
<p>Firma działała sprawnie, ale jej operacje opierały się na ręcznej pracy: grafiki tworzone co tydzień od zera, rozliczenia obliczane ręcznie pod koniec miesiąca, przypomnienia o płatnościach wysyłane jeden po jednym. Przy tej skali każdy błąd kosztował czas i zaufanie rodziców.</p>
<ul>
  <li><strong>Grafiki bez automatyzacji.</strong> Korepetytorzy zgłaszali dostępność mailem, admin układał plan ręcznie - co tydzień od nowa.</li>
  <li><strong>Rozliczenia bez jednego źródła prawdy.</strong> Należności obliczane z arkusza, pomyłki trudne do wychwycenia.</li>
  <li><strong>Brak publicznego kalendarza.</strong> Nowi uczniowie musieli dzwonić, żeby sprawdzić wolne terminy.</li>
  <li><strong>Płatności przez przelew z ręcznym opisem.</strong> Brak automatycznych linków płatniczych, brak historii w systemie.</li>
</ul>
<div class="pullquote">
  <p>Celem nie była kolejna aplikacja do zarządzania - był to silnik operacyjny, który działa sam, a firma skupia się na nauczaniu, nie na administracji.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Jeden system dla trzech ról - i automatyczne lekcje na miesiące wprzód</h2>
<p>Zbudowałem wewnętrzny system webowy z trzema poziomami dostępu, oparty na Next.js i Supabase. Serce systemu to silnik automatycznego generowania lekcji - korepetytor definiuje raz, kiedy jest dostępny, administrator przypisuje uczniów do slotów, a baza danych (triggery PostgreSQL) tworzy sesje lekcyjne automatycznie na wiele tygodni wprzód.</p>
<h3>Panel administratora</h3>
<p>Pełna widoczność: uczniowie, korepetytorzy, przypisania, stawki. Moduł rozliczeń nalicza należności na podstawie odbytych lekcji i generuje link PayU, który administrator wysyła rodzicom jednym kliknięciem.</p>
<h3>Panel korepetytora</h3>
<p>Własny kalendarz lekcji, lista uczniów, grafik dostępności i narzędzia do raportowania przepracowanych godzin - bez dostępu do danych innych nauczycieli czy rozliczeń całej firmy.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"></path></svg>
  </span>
  <div class="t">
    <b>Szczegół, który robi różnicę</b>
    <p>Publiczny kalendarz rezerwacji pozwala nowym uczniom samodzielnie wybrać wolny termin i zarezerwować lekcję - bez dzwonienia do biura. Potwierdzenie przychodzi automatycznie mailem przez Resend.</p>
  </div>
</div>
<h3>Bezpieczeństwo danych z Row Level Security</h3>
<p>Każde zapytanie do bazy danych przechodzi przez polityki RLS - korepetytor widzi tylko swoje dane, rodzic tylko swoje dziecko, administrator całość. Zero wycieków danych przez nieuwagę.</p>
<h2><span class="idx">03 / Rezultat</span>Firma skupia się na nauczaniu, nie na administracji</h2>
<p>System zastąpił arkusze, telefony i ręczne obliczenia. Lekcje planują się same, rozliczenia generują się automatycznie, a linki PayU trafiają do rodziców bez udziału biura. Akademia może rosnąć - dodawanie kolejnych uczniów i korepetytorów to kwestia kilku kliknięć, nie godzin pracy administracyjnej.</p>
<p>Jeśli Twoja firma edukacyjna, szkoleniowa lub usługowa działa wciąż na arkuszach i mailach - wiem, jak to zmienić. <a href="/kontakt" class="link">Porozmawiajmy o Twoim systemie</a> i sprawdźmy, co da się zautomatyzować jako pierwsze.</p>
<div class="tech-tags">
  <span>Next.js</span><span>React</span><span>TypeScript</span><span>Tailwind CSS</span>
  <span>Supabase (PostgreSQL, Auth, RLS, Triggers)</span><span>shadcn/ui</span>
  <span>Resend</span><span>PayU</span><span>Vercel</span>
</div>`,
  },

  "airset-platforma": {
    headline: "Platforma e-learningowa dla <em>linii lotniczych</em> - szkolenia, testy, audyt",
    tags: ["E-learning", "Lotnictwo", "Next.js"],
    scope: "Strategia, UX, kod",
    heroCaption: "Dashboard szkoleń · AIRSET Learning Platform",
    heroDeviceBadge: "Szkolenie aktywne",
    caseStudyHtml: `<p><strong>W branży lotniczej szkolenia pracowników to wymóg operacyjny, nie opcja.</strong> AIRSET potrzebował dedykowanego systemu e-learningowego, który nie tylko udostępnia materiały, ale też weryfikuje wiedzę, śledzi postępy i generuje raporty zgodności - wszystko w jednym miejscu, dostępnym dla całego personelu.</p>
<p>Gotowe platformy SaaS były zbyt generyczne i zbyt drogie w utrzymaniu. Potrzebne było rozwiązanie szyte na miarę: dostosowane do specyfiki branży, z kontrolą dostępu na poziomie każdego materiału i automatycznym raportowaniem.</p>
<div class="stat-band">
  <div class="s"><div class="v">6</div><div class="l">Typów pytań w kreatorze testów (wybór, prawda/fałsz, luki, pary…)</div></div>
  <div class="s"><div class="v">3</div><div class="l">Poziomy uprawnień: Super Admin, Admin, Użytkownik</div></div>
  <div class="s"><div class="v">PDF+CSV+XLSX</div><div class="l">Formaty eksportu raportów miesięcznych</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Szkolenia na papierze, certyfikaty w segregatorze</h2>
<p>Przed wdrożeniem systemu szkolenia odbywały się w tradycyjnej formie: materiały drukowane lub rozsyłane mailem, testy przeprowadzane stacjonarnie, wyniki zbierane ręcznie. Trudno było śledzić, kto kiedy ukończył jakie szkolenie, a przygotowanie raportów na potrzeby audytów zajmowało wiele godzin.</p>
<ul>
  <li><strong>Zero widoczności postępów.</strong> Nie było jednego miejsca, gdzie widać, kto ukończył wymagane szkolenia.</li>
  <li><strong>Materiały rozsiane po e-mailach.</strong> Aktualizacja treści oznaczała ponowne rozsyłanie plików do wszystkich pracowników.</li>
  <li><strong>Testy bez automatycznej weryfikacji.</strong> Każdy egzamin wymagał ręcznego sprawdzenia i oceny.</li>
  <li><strong>Audyty = przeszukiwanie papierowych akt.</strong> Brak cyfrowej historii szkoleń spowalniał każdą kontrolę.</li>
</ul>
<div class="pullquote">
  <p>W lotnictwie „nie pamiętam" nie wystarczy - system musi wiedzieć, kto, co i kiedy przeszkolił, i udowodnić to podczas audytu w pięć minut.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Kompletny system LMS z audytem i raportami</h2>
<p>Zbudowałem dedykowaną platformę LMS opartą na Next.js i Supabase, która obsługuje cały cykl szkoleniowy - od publikacji materiałów po eksport raportów. Każde działanie w systemie jest logowane, każdy wynik testu zapisany z datą i przypisaniem do konkretnego użytkownika.</p>
<h3>Publikowanie szkoleń i materiałów</h3>
<p>Administratorzy przesyłają pliki PDF, PPTX i PNG bezpośrednio do systemu - z wbudowanym podglądem w przeglądarce, bez potrzeby pobierania. Szkolenia można przypisywać indywidualnie lub grupowo, z kontrolą, kto ma dostęp do których materiałów.</p>
<h3>Kreator testów z sześcioma typami pytań</h3>
<p>Testy buduje się wizualnie: pytania jednokrotnego i wielokrotnego wyboru, prawda/fałsz, pytania otwarte, uzupełnianie luk i dopasowywanie par. Każdy test można ograniczyć czasowo, ustawić próg zaliczenia i włączyć losową kolejność pytań.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </span>
  <div class="t">
    <b>Kompletne logi audytowe</b>
    <p>System rejestruje każde logowanie, każde uruchomienie szkolenia, każdy wynik testu i każdą zmianę w konfiguracji. Audytor dostaje pełną historię w formacie CSV lub PDF - bez żadnego przygotowania ręcznego.</p>
  </div>
</div>
<h3>Raporty i eksport danych</h3>
<p>Raporty miesięczne generowane automatycznie - kto ukończył jakie szkolenia, z wynikami testów, datami i statusem certyfikacji. Export do PDF, CSV i XLSX jednym kliknięciem. Tryb ciemny/jasny dostępny dla każdego użytkownika.</p>
<h2><span class="idx">03 / Rezultat</span>Szkolenia pod kontrolą, audyt gotowy w pięć minut</h2>
<p>Platforma zastąpiła papierowe procedury cyfrowym, audytowalnym systemem. Każdy pracownik ma własne konto z historią szkoleń, każdy wynik testu jest zapisany z timestampem, a administrator może wygenerować raport dla audytora w kilka sekund - nie w kilka godzin.</p>
<p>Szukasz dedykowanego systemu szkoleniowego dla swojej firmy? Niezależnie od branży - jeśli masz przepisy, procedury i potrzebę weryfikacji wiedzy, <a href="/kontakt" class="link">porozmawiajmy o Twoim przypadku</a>.</p>
<div class="tech-tags">
  <span>Next.js 16</span><span>React 19</span><span>TypeScript</span><span>Tailwind CSS</span>
  <span>shadcn/ui</span><span>Supabase (Auth, PostgreSQL, Storage, RLS)</span>
  <span>Zod</span><span>React Hook Form</span><span>jsPDF</span><span>Resend</span><span>Vitest</span>
</div>`,
  },

  "elomoto-eco": {
    headline: "Strona operatora <em>stacji ładowania EV</em> - 15+ podstron, mapa, widget",
    tags: ["SPA", "React", "EV"],
    scope: "UX, design, kod",
    heroCaption: "Landing page · elomoto.eco",
    heroDeviceBadge: "77 kWh ↑",
    caseStudyHtml: `<p><strong>Elomoto wchodzi na rynek infrastruktury ładowania EV</strong> jako część ekosystemu Energomix - i potrzebowała strony, która prezentuje kompleksową ofertę B2B: od stacji do montażu, od case studies po mapę realizacji. Nie prosty landing, ale rozbudowana witryna biznesowa z własnym charakterem wizualnym.</p>
<p>Kluczowy wymóg: strona ma wyglądać jak produkt technologiczny, nie jak broszura. Ciemny motyw, interaktywność i szybkość ładowania - bez kompromisów.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/elomoto-about.png" alt="Sekcja O nas Elomoto - elektromobilność jako specjalizacja" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Sekcja O nas - ciemny motyw, zdjęcie realizacji i checklista kompetencji</figcaption>
</figure>
<div class="stat-band">
  <div class="s"><div class="v">15+</div><div class="l">Podstron: oferta, case studies, blog, FAQ, kontakt</div></div>
  <div class="s"><div class="v">0-77 kWh</div><div class="l">Animowany widget ładowania reagujący na scroll</div></div>
  <div class="s"><div class="v">SPA</div><div class="l">Routing bez przeładowań - płynna nawigacja między podstronami</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Techniczna oferta B2B w atrakcyjnej formie wizualnej</h2>
<p>Branża EV często grzeszy nudnymi stronami korporacyjnymi - schematyczny design, stock photo, brak emocji. Elomoto chciało czegoś odwrotnego: strony, która sama w sobie jest argumentem sprzedażowym, bo pokazuje, że firma rozumie technologię i estetykę nowoczesnych produktów.</p>
<ul>
  <li><strong>Rozbudowana oferta, trudna do skondensowania.</strong> Stacje AC i DC, serwis, instalacje, monitoring - każdy segment wymagał osobnej podstrony z detalami.</li>
  <li><strong>Mapa realizacji jako element zaufania.</strong> Klienci B2B chcą widzieć, gdzie już działają stacje - interaktywna mapa była kluczowym elementem.</li>
  <li><strong>Szybkość na mobile.</strong> Wiele zapytań B2B zaczyna się od telefonu - strona musiała ładować się błyskawicznie nawet przy słabym zasięgu.</li>
</ul>
<div class="pullquote">
  <p>Strona firmowa w branży EV to nie wizytówka - to pierwszy krok w długim procesie sprzedaży B2B. Każdy element musi budować zaufanie i kompetencję.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>SPA z ciemnym motywem, glassmorphism i interaktywnym widgetem</h2>
<p>Zbudowałem aplikację SPA w React 19 z Vite i Tailwind CSS - bez backendu, z klienckim routingiem, który zapewnia płynne przejścia między sekcjami bez przeładowania strony. Ciemny motyw z efektami glassmorphism i animacjami glow nadaje stronie charakter produktu premium.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/elomoto-uslugi.png" alt="Siatka usług Elomoto - dzierżawa, montaż, ekspertyza, usługa operatorska" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Infrastruktura jutra - cztery usługi w spójnych kartach oferty</figcaption>
</figure>
<h3>Widget ładowania - animacja, która sprzedaje</h3>
<p>Wyróżniający element to interaktywny widget dashboardu EV: animowany wskaźnik postępu ładowania (0-77 kWh) reagujący na scroll strony. Użytkownik widzi „ładowanie baterii" w czasie, gdy przewija treść - metafora, która działa na poziomie emocjonalnym i technicznym jednocześnie.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/elomoto-app.png" alt="Sekcja aplikacji Elomoto z mockupem telefonu i widgetem ładowania 0-77 kWh" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Aplikacja mobilna + widget 0-77 kWh - wizualny haczyk oferty</figcaption>
</figure>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/elomoto-proces.png" alt="Proces wdrożenia Elomoto krok po kroku - analiza, projekt, montaż, go live" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Proces wdrożenia - cztery kroki od analizy do go live</figcaption>
</figure>
<h3>15+ podstron z pełną spójnością</h3>
<p>Landing page z sekcją Hero, pięć podstron ofertowych (stacje AC, DC, serwis, instalacje, monitoring), interaktywna mapa stacji z pinezkami, sekcja case studies, blog, FAQ i formularz kontaktowy z wyborem tematu zapytania. Każda podstrona zachowuje spójny język wizualny.</p>
<figure style="margin:28px 0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:var(--bg-2);">
  <img src="/elomoto-blog.png" alt="Sekcja bloga Elomoto - siatka wpisów o elektromobilności" style="width:100%;height:auto;display:block;" />
  <figcaption style="padding:12px 16px;font-size:13px;color:var(--fg-dim);">Blog i aktualności - content wspierający SEO i sprzedaż B2B</figcaption>
</figure>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"></path></svg>
  </span>
  <div class="t">
    <b>SPA zamiast MPA - dlaczego to ważne</b>
    <p>Routing po stronie klienta oznacza, że przejście między podstronami jest natychmiastowe - bez białego ekranu, bez oczekiwania. W kontekście prezentacji oferty B2B to różnica między „profesjonalne" a „wolne i archaiczne".</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Strona, która wygląda jak produkt, nie jak broszura</h2>
<p>Elomoto.eco wyróżnia się wizualnie w branży, gdzie dominuje korporacyjna szarość. Interaktywny widget ładowania zostaje w pamięci odwiedzającego, a rozbudowana struktura podstron pozwala każdemu segmentowi klientów znaleźć odpowiednie informacje bez scrollowania przez całą stronę główną.</p>
<p>Planujesz stronę dla firmy technicznej lub B2B? Wiem, jak połączyć estetykę z konwersją. <a href="/kontakt" class="link">Porozmawiaj ze mną o swoim projekcie</a>.</p>
<div class="tech-tags">
  <span>React 19</span><span>TypeScript</span><span>Vite</span><span>Tailwind CSS</span>
</div>`,
  },

  "music-pad": {
    headline: "Twórz muzykę w przeglądarce - <em>interaktywny pad muzyczny</em> bez instalacji",
    tags: ["Web Audio", "Next.js", "Narzędzie"],
    scope: "Koncepcja, UX, kod",
    heroCaption: "Pad muzyczny · 16 programowalnych padów",
    caseStudyHtml: `<p><strong>Muzyka w przeglądarce to wciąż nisza</strong> - większość narzędzi wymaga instalacji aplikacji, zakupu subskrypcji albo fizycznego sprzętu. Interaktywny Pad Muzyczny to projekt własny, który udowadnia, że przeglądarka wystarczy do stworzenia pełnoprawnego instrumentu cyfrowego.</p>
<p>Projekt powstał jako demonstracja możliwości Web Audio API i jako naprawdę użyteczne narzędzie: 16 programowalnych padów, bogata biblioteka brzmień, nagrywanie sesji, eksport do MP3 i sterowanie klawiaturą - wszystko bez jednej linii kodu backendowego.</p>
<div class="stat-band">
  <div class="s"><div class="v">16</div><div class="l">Programowalnych padów z trzema trybami odtwarzania</div></div>
  <div class="s"><div class="v">3</div><div class="l">Tryby dźwięku: normalny, pulsujący, ciągły</div></div>
  <div class="s"><div class="v">0 ms</div><div class="l">Latencja dźwięku dzięki Web Audio API</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Muzyka online bez kompromisów wydajnościowych</h2>
<p>Tworzenie aplikacji muzycznych w przeglądarce wiąże się z jednym kluczowym wyzwaniem: latencja dźwięku. Użytkownik klika pad - i dźwięk musi zabrzmieć natychmiast, nie po 200 ms. Do tego wizualizacja fali w czasie rzeczywistym, nagrywanie sesji i responsywny design na mobile.</p>
<ul>
  <li><strong>Latencja zero tolerancji.</strong> Każde opóźnienie między kliknięciem a dźwiękiem niszczy wrażenie grania.</li>
  <li><strong>Wiele trybów odtwarzania.</strong> Jeden dźwięk powinien zachowywać się inaczej w trybie normalnym, pulsującym i ciągłym.</li>
  <li><strong>Nagrywanie bez backendu.</strong> Cała sesja musi być rejestrowana i eksportowana po stronie klienta, bez wysyłania plików na serwer.</li>
</ul>
<div class="pullquote">
  <p>Przeglądarka to dziś pełnoprawna platforma aplikacyjna - i Web Audio API to dowód, że ograniczenia, które znamy ze starych webaplikacji, dawno przestały istnieć.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Web Audio API + Tone.js = instrument bez instalacji</h2>
<p>Aplikacja oparta na Next.js z biblioteką Tone.js, która abstrahuje Web Audio API do wygodnego interfejsu wysokiego poziomu. Każdy pad ma własny kanał audio z kontrolą głośności, panoramy i trybu odtwarzania. Wizualizacja fali renderowana na Canvas w czasie rzeczywistym.</p>
<h3>16 padów, 3 tryby, nieograniczone kombinacje</h3>
<p>Użytkownik może przypisać dowolny dźwięk do każdego z 16 padów i wybrać tryb: normalny (jednorazowe odtworzenie), pulsujący (automatyczne powtarzanie w rytmie) lub ciągły (dźwięk trwa, dopóki trzymasz klawisz). Sterowanie klawiaturą sprawia, że instrument gra się jak prawdziwy kontroler MIDI.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 012-2h6a2 2 0 012 2v1.662"></path></svg>
  </span>
  <div class="t">
    <b>Nagrywanie i eksport do MP3</b>
    <p>Sesja nagrywa się w tle - użytkownik gra, system rejestruje. Po zakończeniu jeden przycisk eksportuje gotowy plik MP3 bezpośrednio z przeglądarki, bez żadnego uploadu na serwer.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Narzędzie, które pokazuje możliwości nowoczesnego webu</h2>
<p>Projekt demonstruje, że złożone aplikacje multimedialne mogą działać w przeglądarce bez kompromisów. Zerowa latencja, nagrywanie po stronie klienta, bogata biblioteka brzmień i intuicyjny interfejs - wszystko w jednej aplikacji Next.js, bez backendu, bez instalacji.</p>
<p>Masz pomysł na narzędzie webowe, które wykracza poza typowe strony? <a href="/kontakt" class="link">Porozmawiajmy</a> - lubię projekty, gdzie technologia jest częścią produktu.</p>
<div class="tech-tags">
  <span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span>
  <span>Web Audio API</span><span>Tone.js</span>
</div>`,
  },

  "lease1-leasing": {
    headline: "Platforma leasingowa dla <em>rynku międzynarodowego</em> - PL, EN, DE",
    tags: ["Fintech", "Leasing", "Next.js"],
    scope: "UX, design, kod",
    heroCaption: "Strona główna · lease1.pl",
    caseStudyHtml: `<p><strong>Lease1 specjalizuje się w kompleksowych rozwiązaniach leasingowych na skalę międzynarodową</strong> - maszyny, samochody, nieruchomości. Firma obsługuje klientów w Polsce, Niemczech i UK, więc strona internetowa musiała działać w trzech językach i jednocześnie budować wizerunek solidnego, globalnego partnera finansowego.</p>
<p>Wyzwanie: połączyć profesjonalny design z funkcjonalnymi kalkulatorami leasingowymi i wielojęzycznością - tak, żeby strona była zarówno sprzedażowym narzędziem, jak i wizytówką firmy na rynkach zagranicznych.</p>
<div class="stat-band">
  <div class="s"><div class="v">3</div><div class="l">Języki: polski, angielski, niemiecki (i18n)</div></div>
  <div class="s"><div class="v">3</div><div class="l">Segmenty leasingu: maszyny, samochody, nieruchomości</div></div>
  <div class="s"><div class="v">100%</div><div class="l">Responsywność - mobile, tablet, desktop</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Trzy rynki, trzy języki, jeden spójny przekaz</h2>
<p>Strona leasingowa to nie zwykła wizytówka - klient musi zrozumieć warunki, sprawdzić kalkulator i złożyć wniosek. Każdy z tych kroków musi działać w trzech językach, bez utraty kontekstu ani błędów tłumaczeń, które podważają zaufanie do instytucji finansowej.</p>
<ul>
  <li><strong>Wielojęzyczność bez kompromisów UX.</strong> Przełączanie języka nie może powodować przeładowania strony ani utraty wypełnionych formularzy.</li>
  <li><strong>Kalkulatory leasingowe.</strong> Każdy segment (maszyny, auta, nieruchomości) ma inną logikę obliczeniową i inne parametry.</li>
  <li><strong>Wiarygodność na rynku finansowym.</strong> Design musi sygnalizować stabilność i profesjonalizm - fintech ma wyższe wymagania estetyczne niż przeciętna firma usługowa.</li>
</ul>
<div class="pullquote">
  <p>Strona firmy leasingowej działającej na trzech rynkach to pierwszy punkt kontaktu z potencjalnym klientem, który w ciągu 10 sekund decyduje, czy warto dalej rozmawiać.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Next.js z i18n, kalkulatorami i profesjonalnym designem</h2>
<p>Platforma zbudowana w Next.js z biblioteką i18n do zarządzania tłumaczeniami - przełączanie języka działa bez przeładowania, a SEO każdej wersji językowej obsługuje osobna ścieżka URL (np. /en, /de). Kalkulatory leasingowe zbudowane w React z dynamicznym przeliczaniem rat w czasie rzeczywistym.</p>
<h3>Intuicyjny proces składania wniosków</h3>
<p>Ścieżka klienta prowadzi od landing page'a przez wybór rodzaju leasingu, kalkulator z symulacją rat, aż do formularza wniosku - z walidacją pól i automatycznym potwierdzeniem przyjęcia zgłoszenia. Każdy krok jest intuicyjny i nie wymaga kontaktu z doradcą, żeby ruszyć dalej.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  </span>
  <div class="t">
    <b>SEO wielojęzyczne - trzy rynki, trzy indeksy</b>
    <p>Każda wersja językowa ma własne meta tagi, canonical URL i hreflang - strona jest indeksowana osobno dla PL, EN i DE, co przekłada się na widoczność w każdym z tych rynków organicznie.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Platforma gotowa na ekspansję międzynarodową</h2>
<p>Lease1 dostał stronę, która obsługuje trzy rynki bez dodatkowych wdrożeń: jeden kod, trzy języki, trzy zestawy meta tagów SEO. Kalkulatory leasingowe skracają ścieżkę decyzyjną klienta, a profesjonalny design buduje zaufanie od pierwszej sekundy.</p>
<p>Rozwijasz firmę na kilku rynkach i potrzebujesz strony, która obsługuje wielojęzyczność bez bólu głowy? <a href="/kontakt" class="link">Napisz do mnie</a> - to dokładnie mój typ projektu.</p>
<div class="tech-tags">
  <span>Next.js</span><span>TypeScript</span><span>shadcn/ui</span>
  <span>Tailwind CSS</span><span>i18n</span>
</div>`,
  },

  "bcsc-ksiegowosc": {
    headline: "Strona biura <em>księgowego</em> dla startupów - nowoczesny design, wysoka konwersja",
    tags: ["Strona firmowa", "Fintech", "Next.js"],
    scope: "UX, design, kod",
    heroCaption: "Strona główna · bcsc.pl",
    caseStudyHtml: `<p><strong>Business Care SC to biuro księgowe z wyraźnie określoną niszą</strong> - startup i młode firmy. To klienci, którzy cenią szybkość, przejrzystość i nowoczesne podejście. Stara, statyczna strona nie komunikowała tego przekazu - wyglądała jak każde inne biuro rachunkowe, co oznaczało walkę o klientów na cenę, a nie na wartość.</p>
<p>Potrzebna była strona, która od pierwszego spojrzenia mówi: „rozumiemy Twój świat, jesteśmy tu dla startupów, nie dla korporacji".</p>
<div class="stat-band">
  <div class="s"><div class="v">100%</div><div class="l">Responsywność - identyczne doświadczenie na mobile i desktop</div></div>
  <div class="s"><div class="v">CMS</div><div class="l">System zarządzania treścią do aktualizacji usług bez dewelopera</div></div>
  <div class="s"><div class="v">SEO</div><div class="l">Optymalizacja pod frazy lokalne i branżowe</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Biuro księgowe, które wygląda jak startup, a nie jak urząd</h2>
<p>Branża księgowa nie słynie z odważnego designu. Większość biur rachunkowych w Polsce ma strony, które wyglądają identycznie: ciężka czcionka, zielony kolor, stockowe zdjęcie uścisku dłoni. Business Care SC chciało być inne - i ich strona musiała to pokazać natychmiast, bez czytania.</p>
<ul>
  <li><strong>Komunikacja propozycji wartości.</strong> Startup założony wczoraj ma inne potrzeby niż firma z 20-letnią historią - strona musiała to adresować bezpośrednio.</li>
  <li><strong>Formularze kontaktowe z niskim progiem.</strong> Klienci biura to często założyciele startupów, często przytłoczeni - formularz musi być krótki i konkretny.</li>
  <li><strong>Opinie i social proof.</strong> Zaufanie do biura księgowego buduje się na referencjach, nie na opisach usług.</li>
</ul>
<div class="pullquote">
  <p>Każda wizyta na stronie biura księgowego to moment, w którym potencjalny klient pyta sobie: „Czy tej firmie można zaufać z moją księgowością?" - design musi odpowiedzieć „tak" zanim przeczytają cokolwiek.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Nowoczesny design z elementami konwersji</h2>
<p>Zaprojektowałem i zbudowałem stronę w Next.js z shadcn/ui - z elegancką typografią, spójną paletą kolorów i układem, który prowadzi użytkownika od propozycji wartości przez usługi do formularza kontaktowego. Każda sekcja ma jeden jasny cel.</p>
<h3>Sekcja opinii klientów</h3>
<p>Widoczne opinie z imionami i nazwami firm - nie anonimowe gwiazdki, ale konkretne referencje od konkretnych klientów. To jeden z najmocniejszych elementów konwersji na stronach usługowych.</p>
<h3>Kalkulatory i formularze</h3>
<p>Prosty kalkulator szacunkowej wyceny usług księgowych (na podstawie formy prawnej, liczby dokumentów i pracowników) obniża próg pierwszego kontaktu - klient wychodzi ze strony ze wstępną kwotą, nie z pytaniem „ile to kosztuje".</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
  </span>
  <div class="t">
    <b>Elastyczny CMS</b>
    <p>Klient może samodzielnie aktualizować opisy usług, ceny i opinie klientów bez angażowania dewelopera - zmiany widoczne na stronie od razu po zapisaniu.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Strona, która konwertuje odwiedzających w klientów biura</h2>
<p>Business Care SC dostało stronę, która wyróżnia się w branży, komunikuje wyspecjalizowaną propozycję wartości i prowadzi użytkownika do kontaktu w naturalny sposób. Nowoczesny design i konkretne opinie klientów skracają czas decyzji - odwiedzający nie muszą szukać firmy gdzie indziej.</p>
<p>Prowadzisz firmę usługową i Twoja strona nie odzwierciedla tego, co naprawdę oferujesz? <a href="/kontakt" class="link">Porozmawiajmy</a> - wiem, jak to zmienić.</p>
<div class="tech-tags">
  <span>Next.js</span><span>TypeScript</span><span>shadcn/ui</span><span>Tailwind CSS</span>
</div>`,
  },

  "generator-ofert-rolety": {
    headline: "Generator ofert PDF dla firmy roletowej - <em>wycena w minutę</em>",
    tags: ["Automatyzacja", "PDF", "Next.js"],
    scope: "UX, kod, automatyzacja",
    heroCaption: "Generator wycen · oferty.rolety3miasto.pl",
    heroDeviceBadge: "Generuj PDF",
    caseStudyHtml: `<p><strong>Rolety3miasto obsługuje setki klientów miesięcznie</strong> - i każda wycena to osobny proces: zmierz okno, dobierz produkt, policz cenę, przygotuj ofertę w Wordzie, wyślij mailem. Handlowiec spędzał godziny tygodniowo na tworzeniu dokumentów, zamiast rozmawiać z klientami.</p>
<p>Rozwiązanie było jedno: zautomatyzować generowanie ofert i zamknąć cały proces w jednym narzędziu webowym - od wyboru produktu do gotowego PDF z logo firmy.</p>
<div class="stat-band">
  <div class="s"><div class="v">1 min</div><div class="l">Czas generowania profesjonalnej oferty PDF (wcześniej: godziny)</div></div>
  <div class="s"><div class="v">100%</div><div class="l">Automatyzacja obliczeń cenowych na podstawie wymiarów i wariantu</div></div>
  <div class="s"><div class="v">PDF</div><div class="l">Spersonalizowany dokument z logo firmy gotowy do wysyłki</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Każda oferta to ręczna robota - i każda może się różnić</h2>
<p>Oferty roletowe brzmią prosto, ale mają mnóstwo zmiennych: typ rolety, materiał, wymiary (szerokość × wysokość), system prowadnic, kolor, montaż zewnętrzny lub wewnętrzny. Każda kombinacja daje inną cenę. Ręczne wyliczanie i wklejanie do Worda to prosta droga do błędów i reklamacji.</p>
<ul>
  <li><strong>Logika cenowa w głowie handlowca.</strong> Nie było jednego miejsca z aktualnymi cenami i zasadami rabatowania - każdy liczył po swojemu.</li>
  <li><strong>Brak standaryzacji wyglądu ofert.</strong> Dokumenty wyglądały różnie, brakowało spójnego brandingu.</li>
  <li><strong>Długi czas przygotowania oferty.</strong> Klient czekał - a im dłużej czeka, tym bardziej rozgląda się za konkurencją.</li>
</ul>
<div class="pullquote">
  <p>W branży budowlanej i wykończeniowej szybkość ofertowania to argument sprzedażowy sam w sobie - klient, który dostaje wycenę w ciągu godziny, często nie czeka na kolejną.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Konfigurator + silnik cenowy + generator PDF</h2>
<p>Zbudowałem aplikację webową w Next.js z React PDF, która łączy konfigurator produktu z silnikiem cenowym i generatorem dokumentów. Handlowiec wybiera parametry, system przelicza cenę w czasie rzeczywistym i generuje ofertę PDF jednym kliknięciem.</p>
<h3>Konfigurator produktu</h3>
<p>Krok po kroku: typ rolety, materiał, wymiary, prowadnice, kolor, opcje montażu. Każdy wybór natychmiast aktualizuje podgląd ceny. Logika cenowa zakodowana w jednym miejscu - zmiany cen to aktualizacja pliku konfiguracyjnego, nie przerabianie ofert ręcznie.</p>
<h3>Generator PDF z brandingiem</h3>
<p>Gotowa oferta to dokument z logo firmy, danymi klienta, szczegółową specyfikacją produktu, ceną jednostkową i łączną oraz warunkami oferty. Wygląd identyczny przy każdym generowaniu - brak wpływu ludzkiego błędu na estetykę dokumentu.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
  </span>
  <div class="t">
    <b>System rabatów i wariantów</b>
    <p>Aplikacja obsługuje rabaty indywidualne, promocyjne i sezonowe - handlowiec może wygenerować ofertę z rabatem klienta bez ręcznego przeliczania każdej pozycji.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Wycena w minutę zamiast godziny</h2>
<p>Generator ofert skrócił czas przygotowania dokumentu z kilkudziesięciu minut do jednej minuty. Oferty są spójne wizualnie, ceny zawsze aktualne, a handlowcy mogą skupić się na rozmowie z klientem - nie na klepaniu w Worda.</p>
<p>Masz powtarzalny proces w firmie, który można zautomatyzować? <a href="/kontakt" class="link">Porozmawiajmy</a> - generatory ofert, kalkulatory i narzędzia wewnętrzne to jeden z moich ulubionych typów projektów.</p>
<div class="tech-tags">
  <span>Next.js</span><span>TypeScript</span><span>shadcn/ui</span>
  <span>React PDF</span><span>Tailwind CSS</span>
</div>`,
  },

  "kreator-faktur": {
    headline: "Kreator faktur VAT online - <em>profesjonalny PDF w 60 sekund</em>",
    tags: ["Faktury", "PDF", "Next.js"],
    scope: "Koncepcja, UX, kod",
    heroCaption: "Kreator faktur · faktury.mainly.pl",
    heroDeviceBadge: "Generuj fakturę",
    caseStudyHtml: `<p><strong>Wystawianie faktur to jeden z tych procesów, który powinien zajmować sekundy</strong> - a zajmuje minuty, bo większość narzędzi jest albo zbyt skomplikowana, albo płatna, albo wymaga zakładania konta i logowania za każdym razem. Kreator Faktur to projekt własny, który rozwiązuje ten problem: wejdź, wypełnij, pobierz PDF.</p>
<p>Bez rejestracji, bez abonamentu, bez zbędnych pól. Tylko to, czego faktycznie potrzebujesz, żeby wystawić profesjonalną fakturę VAT.</p>
<div class="stat-band">
  <div class="s"><div class="v">60 s</div><div class="l">Czas od otwarcia strony do gotowego PDF</div></div>
  <div class="s"><div class="v">0</div><div class="l">Wymaganych kroków rejestracji - działasz od razu</div></div>
  <div class="s"><div class="v">Auto</div><div class="l">Automatyczne obliczenia VAT dla każdej stawki</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Faktura to nie raketologia - ale aplikacje robią z niej raketologię</h2>
<p>Freelancerzy, drobni przedsiębiorcy i osoby wystawiające faktury okazjonalnie mają do wyboru: drogi program do fakturowania z mnóstwem funkcji, których nie potrzebują, lub ręczne wpisywanie w arkuszu kalkulacyjnym z ryzykiem błędów obliczeniowych. Brakuje prostego, darmowego narzędzia, które działa bez rejestracji.</p>
<ul>
  <li><strong>Zbyt wiele pól, za mało jasności.</strong> Standardowe programy pytają o dziesiątki danych przy pierwszym uruchomieniu.</li>
  <li><strong>Brak mobilności.</strong> Wystawienie faktury podczas spotkania z klientem na telefonie to wyzwanie w większości narzędzi.</li>
  <li><strong>Błędy obliczeniowe przy ręcznym wpisywaniu VAT.</strong> Automatyczne przeliczanie eliminuje pomyłki.</li>
</ul>
<div class="pullquote">
  <p>Najlepsze narzędzie to takie, z którego korzystasz - a nie takie, które masz subskrybowane, ale uruchamiasz raz na kwartał.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Minimum pól, maksimum wartości</h2>
<p>Kreator Faktur zaprojektowany z zasadą progressive disclosure: wyświetlaj tylko to, czego użytkownik potrzebuje w danym kroku. Dane sprzedawcy, dane nabywcy, pozycje faktury - każda sekcja rozszerza się naturalnie, bez przytłaczania.</p>
<h3>Automatyczne obliczenia</h3>
<p>Wpisz cenę netto i stawkę VAT - aplikacja natychmiast przelicza kwotę podatku, cenę brutto i sumę pozycji. Wiele pozycji na jednej fakturze, różne stawki VAT, automatyczne zsumowanie - zero ręcznego liczenia.</p>
<h3>Baza kontrahentów</h3>
<p>Często wystawiasz faktury tym samym klientom? Dane kontrahenta zapisują się lokalnie - przy następnej fakturze wystarczy wybrać z listy, nie wpisywać od nowa. Wszystko w przeglądarce, bez serwera.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  </span>
  <div class="t">
    <b>Personalizacja szablonu</b>
    <p>Logo firmy, dane bankowe, termin płatności, numer faktury - wszystko konfigurowalne. PDF wygląda jak dokument z prawdziwego biura, nie jak wydruk z Excela.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Faktura gotowa zanim skończy się kawa</h2>
<p>Narzędzie działa - bez rejestracji, bez abonamentu, bez czekania. Projekt pokazuje, jak prostota UX przekłada się na realną wartość dla użytkownika. Czasem najlepsza aplikacja to ta, która robi jedną rzecz perfekcyjnie.</p>
<p>Potrzebujesz podobnego narzędzia wewnętrznego dla swojej firmy - kalkulatora, generatora dokumentów, automatyzacji? <a href="/kontakt" class="link">Napisz do mnie</a>.</p>
<div class="tech-tags">
  <span>Next.js</span><span>TypeScript</span><span>React PDF</span><span>Tailwind CSS</span>
</div>`,
  },

  "audiogen": {
    headline: "Landing page i automatyzacja <em>zbierania leadów</em> dla Audiogen",
    tags: ["Landing Page", "Automatyzacja", "Framer"],
    scope: "Design, automatyzacja",
    heroCaption: "Landing page · audiogen.framer.website",
    caseStudyHtml: `<p><strong>Audiogen to startup tworzący audiobooki nowej generacji</strong> - i jak każdy startup, potrzebował jednej rzeczy zanim cokolwiek innego: listy potencjalnych klientów gotowych na premierę. Whitelist przed oficjalnym startem to klasyczna taktyka walidacji produktu, ale żeby zadziałała, strona musi konwertować dobrze i automatycznie zbierać, segmentować i powiadamiać o nowych zapisach.</p>
<p>Projekt obejmował zaprojektowanie landing page'a we Framerze oraz wdrożenie automatyzacji procesu zbierania leadów z systemem powiadomień i zarządzania bazą zainteresowanych.</p>
<div class="stat-band">
  <div class="s"><div class="v">1</div><div class="l">Formularz, który robi całą robotę zbierania leadów</div></div>
  <div class="s"><div class="v">Auto</div><div class="l">Automatyczne powiadomienia i zarządzanie bazą bez ręcznej pracy</div></div>
  <div class="s"><div class="v">0</div><div class="l">Ręcznych kroków po stronie startupu przy każdym nowym zapisie</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Startup przed startem - jak zbudować bazę zanim jest produkt</h2>
<p>Audiogen był przed premierą. Nie miał gotowego produktu do pokazania, tylko wizję i wczesną wersję dema. Landing page musiał zbudować zainteresowanie i zebrać kontakty osób, które chcą być pierwsze - bez możliwości pokazania działającej aplikacji.</p>
<ul>
  <li><strong>Przekonać bez gotowego produktu.</strong> Użytkownik zapisuje się na coś, czego jeszcze nie może używać - tekst i design muszą wystarczyć.</li>
  <li><strong>Automatyzacja od dnia zero.</strong> Startup nie ma zasobów na ręczne zarządzanie bazą - każdy zapis musi trafiać automatycznie we właściwe miejsce.</li>
  <li><strong>Szybkie wdrożenie.</strong> Framer pozwala na deployment gotowej strony bez dewelopera backendowego - priorytet przy ograniczonym budżecie.</li>
</ul>
<div class="pullquote">
  <p>Landing page przed premierą to nie tylko narzędzie zbierania leadów - to dowód, że produkt ma rynek. 1000 zapisów przed startem to argument dla inwestora, nie tylko dla marketera.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Framer + automatyzacja procesu - design i logika w jednym</h2>
<p>Strona zaprojektowana i wdrożona we Framerze - elastyczne narzędzie, które pozwala na zaawansowane animacje i interakcje bez pisania kodu frontendowego. Formularz whitelist zintegrowany z automatyzacją, która przy każdym zapisie wykonuje ciąg akcji bez żadnej ręcznej ingerencji.</p>
<h3>Automatyzacja po zapisie</h3>
<p>Każdy zapis na whitelist uruchamia sekwencję: dane trafiają do bazy, użytkownik dostaje e-mail z potwierdzeniem i numerem kolejki, team Audiogen otrzymuje powiadomienie z danymi kontaktowymi. Segmentacja na podstawie odpowiedzi w formularzu (typ użytkownika, zainteresowania) pozwala na personalizację komunikacji przy premierze.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"></path></svg>
  </span>
  <div class="t">
    <b>System powiadomień dla zespołu</b>
    <p>Founder Audiogen dostawał powiadomienie przy każdym nowym zapisie - w czasie rzeczywistym, z danymi kontaktowymi i odpowiedziami na pytania formularza. Zero ręcznego sprawdzania bazy.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Gotowa maszyna do zbierania leadów przed startem</h2>
<p>Audiogen zyskał działający system pozyskiwania zainteresowanych użytkowników - w pełni zautomatyzowany, bez potrzeby zatrudniania osoby do zarządzania bazą. Każdy nowy zapis to ciepły lead gotowy na wiadomość o premierze.</p>
<p>Uruchamiasz produkt i chcesz zbudować bazę przed startem? <a href="/kontakt" class="link">Porozmawiajmy</a> - wiem, jak zbudować stronę, która zbiera leady zanim masz co sprzedawać.</p>
<div class="tech-tags">
  <span>Framer</span><span>Automatyzacja</span><span>E-mail marketing</span>
</div>`,
  },

  "kalkulator-gap": {
    headline: "Kalkulator <em>ubezpieczenia GAP</em> - precyzyjna wycena online dla klientów i agentów",
    tags: ["Fintech", "Kalkulator", "Next.js"],
    scope: "UX/UI, front-end development",
    heroCaption: "Kalkulator GAP · gapauto.pl",
    heroDeviceBadge: "Oblicz GAP",
    caseStudyHtml: `<p><strong>Ubezpieczenie GAP jest kluczowym produktem dla każdego, kto bierze auto w leasing lub kredyt</strong> - ale jego sprzedaż kuleje, bo klienci nie rozumieją, ile zapłacą i co dokładnie dostają. Firma ubezpieczeniowa Business Care potrzebowała narzędzia, które tłumaczy skomplikowany produkt na konkretne liczby - szybko, przejrzyście, bez pośredników.</p>
<p>Kalkulator GAP to aplikacja front-end, która pozwala zarówno klientom indywidualnym, jak i agentom ubezpieczeniowym błyskawicznie wyliczyć koszt polisy na podstawie wartości pojazdu, okresu ubezpieczenia i wybranego wariantu ochrony.</p>
<div class="stat-band">
  <div class="s"><div class="v">60 s</div><div class="l">Czas od wejścia na stronę do gotowej wyceny ubezpieczenia</div></div>
  <div class="s"><div class="v">100%</div><div class="l">Parametrów uwzględnionych automatycznie w obliczeniach</div></div>
  <div class="s"><div class="v">UX/UI</div><div class="l">Pełen proces projektowy od wireframe'u do wdrożenia</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Skomplikowany produkt finansowy w prostym formularzu</h2>
<p>GAP to ubezpieczenie, które pokrywa różnicę między wartością rynkową pojazdu a kwotą pozostałą do spłaty leasingu lub kredytu. Dla klienta brzmi abstrakcyjnie - dopóki nie zobaczy konkretnej liczby w złotówkach. Największe wyzwanie to projektowe: jak zebrać wszystkie niezbędne dane bez przytłaczania użytkownika długim formularzem.</p>
<ul>
  <li><strong>Złożona logika cenowa.</strong> Cena polisy zależy od wartości auta, okresu ochrony, wariantu i rodzaju finansowania - każda kombinacja daje inny wynik.</li>
  <li><strong>Dwie grupy użytkowników.</strong> Klient indywidualny chce prostej odpowiedzi, agent ubezpieczeniowy - szczegółów i możliwości porównania wariantów.</li>
  <li><strong>Zaufanie do wyniku.</strong> Kalkulator finansowy musi wyglądać profesjonalnie - błędny design podważa zaufanie do samego wyniku.</li>
</ul>
<div class="pullquote">
  <p>Kalkulator ubezpieczeniowy, który wygląda tanio, jest tak samo zły jak kalkulator, który daje złe wyniki - bo klient w obu przypadkach nie ufa wynikom i szuka gdzie indziej.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Progresywny formularz z natychmiastową wyceną</h2>
<p>Zbudowałem kalkulator jako progresywny formularz wielokrokowy - użytkownik odpowiada na jedno pytanie naraz, wynik aktualizuje się w czasie rzeczywistym. Interface oparty na shadcn/ui z niestandardowym stylem dopasowanym do brandingu klienta.</p>
<h3>Silnik kalkulacyjny</h3>
<p>Logika cenowa zakodowana w TypeScript z pełnym pokryciem wszystkich kombinacji parametrów. Zmiany taryfy przez klienta to aktualizacja konfiguracji, nie przepisywanie kodu. Wynik wyświetlany natychmiast po wybraniu ostatniego parametru.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  </span>
  <div class="t">
    <b>Pełen proces UX/UI</b>
    <p>Projekt zaczął się od wireframe'ów i user flow - zanim napisałem pierwszą linię kodu, cały formularz był zaprojektowany i zaakceptowany. Dzięki temu implementacja przebiegła bez zaskoczeń i zmian w trakcie.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Narzędzie, które sprzedaje zamiast agenta</h2>
<p>Kalkulator GAP przelicza skomplikowany produkt finansowy na konkretną, zrozumiałą liczbę - i robi to w ciągu minuty, bez udziału agenta. Klient widzi wynik, rozumie, co płaci i za co, i może natychmiast przejść do zakupu lub kontaktu. Narzędzie działa 24/7, obsługując klientów nawet poza godzinami pracy biura.</p>
<p>Masz produkt lub usługę z cenami zależnymi od wielu zmiennych? Kalkulator to jeden z najlepszych narzędzi konwersji na stronie firmowej. <a href="/kontakt" class="link">Porozmawiajmy</a> o Twoim przypadku.</p>
<div class="tech-tags">
  <span>Next.js</span><span>React</span><span>TypeScript</span>
  <span>shadcn/ui</span><span>Tailwind CSS</span>
</div>`,
  },

  "cytomania": {
    headline: "Portal z <em>cytatami filmowymi</em> - społeczność, oceny i kolekcje",
    tags: ["Portal", "Community", "Next.js"],
    scope: "UX, kod, baza danych",
    heroCaption: "Portal cytatów · cytomania.pl",
    caseStudyHtml: `<p><strong>Cytomania wyrosła z grupy facebookowej skupiającej miłośników cytatów filmowych</strong> - i ta społeczność potrzebowała własnego miejsca w sieci. Miejsca, gdzie cytaty można nie tylko czytać, ale też oceniać, komentować, zbierać w tematyczne kolekcje i wyszukiwać po filmie, aktorze czy nastroju.</p>
<p>Projekt to pełnoprawny portal społecznościowy zbudowany od podstaw: system użytkowników, wyszukiwarka pełnotekstowa, mechanizm oceniania, kolekcje i panel administracyjny do zarządzania treścią.</p>
<div class="stat-band">
  <div class="s"><div class="v">5</div><div class="l">Kluczowych funkcji: oceny, komentarze, kolekcje, wyszukiwarka, admin</div></div>
  <div class="s"><div class="v">3</div><div class="l">Role użytkowników: gość, zalogowany, administrator</div></div>
  <div class="s"><div class="v">Full-stack</div><div class="l">Aplikacja Next.js z bazą danych i autentykacją</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Społeczność filmowa potrzebuje więcej niż grupy na Facebooku</h2>
<p>Grupa facebookowa ma swoje ograniczenia: brak wyszukiwarki po cytatach, brak możliwości tworzenia własnych kolekcji, algorytm który decyduje, co zobaczysz. Cytomania miała to zmienić - dać społeczności własne narzędzie z pełną kontrolą nad treścią.</p>
<ul>
  <li><strong>Wyszukiwanie bez ograniczeń.</strong> Facebook nie pozwala szukać po starych postach - portal musi mieć szybką, pełnotekstową wyszukiwarkę cytatów.</li>
  <li><strong>System zaangażowania.</strong> Sam wyświetlacz cytatów nie wystarczy - użytkownicy muszą móc oceniać, komentować i zbierać ulubione.</li>
  <li><strong>Moderacja treści.</strong> Portal otwarty na dodawanie cytatów przez użytkowników potrzebuje solidnego panelu admina do zarządzania jakością.</li>
</ul>
<div class="pullquote">
  <p>Portal społecznościowy to suma wielu małych elementów, które razem tworzą powód do powrotu - bez mechanizmów zaangażowania zostaje tylko statyczna lista cytatów.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Full-stack portal z systemem użytkowników i moderacji</h2>
<p>Aplikacja zbudowana w Next.js z Supabase jako backendem - autentykacja, baza danych i polityki dostępu w jednym miejscu. Trzy poziomy uprawnień: gość widzi cytaty i kolekcje publiczne, zalogowany użytkownik dodaje cytaty i tworzy własne kolekcje, administrator moderuje całą treść.</p>
<h3>Wyszukiwarka i filtrowanie</h3>
<p>Pełnotekstowa wyszukiwarka przeszukuje cytaty, tytuły filmów i nazwiska aktorów jednocześnie. Filtrowanie po kategorii, roku, ocenie i popularności - użytkownik zawsze znajdzie to, czego szuka.</p>
<h3>System oceniania i kolekcji</h3>
<p>Każdy cytat można ocenić i skomentować. Kolekcje to spersonalizowane listy - użytkownik grupuje ulubione cytaty tematycznie i może udostępniać je publicznie lub trzymać prywatnie.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  </span>
  <div class="t">
    <b>Panel administratora</b>
    <p>Moderator zatwierdza lub odrzuca cytaty dodawane przez użytkowników, zarządza kategoriami i usuwa treści naruszające regulamin - wszystko z jednego panelu, bez dostępu do kodu.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Własna platforma społecznościowa zamiast grupy na Facebooku</h2>
<p>Cytomania dała społeczności filmowej niezależną przestrzeń z narzędziami, których Facebook nie oferuje: wyszukiwarkę, kolekcje, system oceniania i panel moderatora. Projekt pokazuje, jak zamienić społeczność z mediów społecznościowych we własny, kontrolowany produkt webowy.</p>
<p>Masz społeczność w social mediach i chcesz zbudować dla niej własną platformę? <a href="/kontakt" class="link">Porozmawiajmy</a> - to projekt, który znam od podszewki.</p>
<div class="tech-tags">
  <span>Next.js</span><span>React</span><span>TypeScript</span>
  <span>shadcn/ui</span><span>Tailwind CSS</span><span>Supabase</span>
</div>`,
  },

  "kulio-studio": {
    headline: "Strona agencji <em>marketingowej</em> z portfolio i CMS - Framer + Spline 3D",
    tags: ["Agencja", "Framer", "3D"],
    scope: "Design, development",
    heroCaption: "Strona agencji · kuliostudio.pl",
    caseStudyHtml: `<p><strong>Kulio Studio to agencja marketingowa, która musi sprzedawać siebie tak samo dobrze, jak sprzedaje swoich klientów.</strong> Strona agencji marketingowej to jednocześnie portfolio, oferta i dowód kompetencji - jeśli strona wygląda przeciętnie, to dlaczego klient miałby wierzyć, że agencja zrobi coś lepszego dla niego?</p>
<p>Projekt wymagał połączenia nowoczesnego narzędzia (Framer) z efektami 3D (Spline), które wyróżniają stronę w branży, gdzie wizualne „wow" jest równie ważne jak lista usług.</p>
<div class="stat-band">
  <div class="s"><div class="v">3D</div><div class="l">Interaktywne elementy Spline zintegrowane z layoutem Framer</div></div>
  <div class="s"><div class="v">CMS</div><div class="l">System zarządzania portfolio i blogiem bez dewelopera</div></div>
  <div class="s"><div class="v">0</div><div class="l">Kodu backendowego - deployment i edycja bez serwera</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Strona agencji, która sama jest dziełem agencji</h2>
<p>Agencja marketingowa ma wyższe standardy niż przeciętny klient - strona musi wyglądać jak projekt, który wygrałby nagrodę, nie jak szablon z marketu. Jednocześnie musi być funkcjonalna: portfolio, blog, formularz kontaktowy i możliwość samodzielnej aktualizacji treści.</p>
<ul>
  <li><strong>Efekt pierwszego wrażenia.</strong> Odwiedzający stronę agencji ocenia ją jako próbkę jej pracy - pierwsze sekundy decydują.</li>
  <li><strong>Dynamiczne portfolio.</strong> Agencja dodaje nowe projekty regularnie - CMS musi być na tyle prosty, żeby zespół contentowy korzystał bez szkoleń.</li>
  <li><strong>Wydajność przy efektach 3D.</strong> Spline to ciężkie elementy - integracja musi być zoptymalizowana pod Core Web Vitals.</li>
</ul>
<div class="pullquote">
  <p>Strona agencji marketingowej to jej najważniejszy case study - i jedyny, który każdy potencjalny klient zobaczy przed podjęciem decyzji o kontakcie.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Framer z Spline 3D - design premium bez backendu</h2>
<p>Wybrałem Framer jako główne środowisko - daje pełną kontrolę nad animacjami, layoutem i responsywnością, bez pisania kodu frontendowego. Interaktywne elementy 3D ze Spline osadzone w kluczowych sekcjach strony tworzą efekt, który trudno uzyskać standardowymi narzędziami webowymi.</p>
<h3>Portfolio i blog z CMS Framer</h3>
<p>Wbudowany CMS Framer pozwala dodawać projekty i wpisy blogowe przez interfejs wizualny - bez dewelopera, bez deploymentu, bez FTP. Nowy case study pojawia się na stronie od razu po opublikowaniu.</p>
<h3>Efekty 3D ze Spline</h3>
<p>Interaktywne sceny 3D - logo agencji, elementy dekoracyjne, animacje hover - załadowane leniwie, żeby nie wpływać na czas pierwszego renderowania. Użytkownik widzi treść natychmiast, efekty 3D doładowują się w tle.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  </span>
  <div class="t">
    <b>Formularz kontaktowy z integracją</b>
    <p>Formularz kontaktowy podłączony do powiadomień e-mail - każde zgłoszenie trafia do skrzynki agencji w czasie rzeczywistym, z pełnymi danymi klienta i tematem zapytania.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Strona, która sama jest argumentem sprzedażowym</h2>
<p>Kulio Studio dostało stronę, która wygląda jak produkt z górnej półki - bo jest. Efekty 3D przykuwają uwagę, portfolio prezentuje prace w profesjonalny sposób, a CMS daje zespołowi pełną autonomię w aktualizacji treści. Strona sama w sobie jest najlepszym dowodem kompetencji agencji.</p>
<p>Prowadzisz agencję lub studio i potrzebujesz strony, która robi wrażenie? <a href="/kontakt" class="link">Porozmawiajmy</a> - wiem, jak budować strony, które sprzedają przez sam wygląd.</p>
<div class="tech-tags">
  <span>Framer</span><span>Spline</span><span>Framer CMS</span>
</div>`,
  },

  "milei-coin": {
    headline: "One-pager kryptowaluty <em>$MILEI</em> - TradingView, tokenomics i neonowy design",
    tags: ["Web3", "Crypto", "Framer"],
    scope: "Design, development",
    heroCaption: "Landing page · $MILEI coin",
    caseStudyHtml: `<p><strong>Kryptowaluta $MILEI to memecoin z politycznym komentarzem</strong> - zainspirowany libertariańskim prezydentem Argentyny Javierem Milei. Takie projekty mają jedno okno czasowe na zdobycie uwagi i zaufania: kilka sekund, zanim użytkownik opuści stronę. Strona musiała działać jak wstrząs wizualny - i jednocześnie przekonać, że token jest więcej niż żartem.</p>
<p>Projekt obejmował pełny design i wdrożenie we Framerze, z integracją wykresu TradingView, dynamicznych tweetów, liczników statystyk i sekcji tokenomics - wszystko bez backendu.</p>
<div class="stat-band">
  <div class="s"><div class="v">TradingView</div><div class="l">Osadzony wykres kursu $MILEI w czasie rzeczywistym</div></div>
  <div class="s"><div class="v">Live</div><div class="l">Dynamiczne liczniki holderów, tokenów i liquidity</div></div>
  <div class="s"><div class="v">0</div><div class="l">Linii kodu backendowego - statyczny deployment</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Memecoin, który ma wyglądać poważnie - jednocześnie</h2>
<p>Projekty Web3 mają specyficzny dylemat designerski: zbyt profesjonalnie - traci się energię memecoin'ową, zbyt absurdalnie - nikt nie kupuje. $MILEI musiał trafić w punkt pomiędzy: neonowe kolory i polityczna ironia, ale z realnym wykresem kursu i transparentnymi tokenomics.</p>
<ul>
  <li><strong>Zaufanie bez audytu.</strong> W świecie crypto zaufanie buduje się przez przejrzystość - tokenomics, linki do giełd, dane liquidity muszą być widoczne od razu.</li>
  <li><strong>Dynamiczne dane bez backendu.</strong> Kurs, liczba holderów, liquidity - to dane zmieniające się w czasie rzeczywistym, a strona jest statyczna.</li>
  <li><strong>Szybkość deployu.</strong> Projekty crypto mają wąskie okno czasowe - od decyzji do live site musi minąć jak najmniej czasu.</li>
</ul>
<div class="pullquote">
  <p>Strona kryptowaluty to nie landing page firmy - to manifest. Każdy element ma przekonać użytkownika, że ten projekt jest realny, transparentny i wart uwagi w ciągu pierwszych 5 sekund.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Framer + integracje zewnętrzne = live data bez serwera</h2>
<p>Strona zbudowana we Framerze z kilkoma kluczowymi integracjami zewnętrznymi: wykres TradingView osadzony jako iframe z parametrami dopasowanymi do dark theme strony, tweety z Twittera/X ładowane przez embed widget, liczniki statystyk zasilane przez zewnętrzne API blockchain.</p>
<h3>Sekcje produktowe</h3>
<p>Hero z AI-generowanym portretem Milei i głównym CTA, sekcja tokenomics z tabelą dystrybucji tokenów, interaktywne karty funkcjonalności (libertariańska narracja, decentralizacja, memiczność), instrukcja zakupu krok po kroku (iOS/Android), sekcja partnerów i linków do giełd.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
  </span>
  <div class="t">
    <b>Dynamiczne tweety z Twittera/X</b>
    <p>Sekcja z osadzonymi tweetami o $MILEI - budują social proof w czasie rzeczywistym, bez potrzeby ręcznego aktualizowania treści strony. Użytkownik widzi aktywność społeczności.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Strona krypto, która przekonuje wizualnie i dane-owo</h2>
<p>Coin Milei dostał landing page, który wygląda premium, działa jak narzędzie sprzedażowe i pokazuje dane na żywo bez backendu. Neonowy design przyciąga uwagę, a przejrzyste tokenomics i live wykres TradingView budują zaufanie inwestorów - ten balans jest kluczowy dla każdego projektu Web3.</p>
<p>Masz projekt Web3, NFT lub token, który potrzebuje landing page'a? <a href="/kontakt" class="link">Napisz do mnie</a> - znam specyfikę tej branży i wiem, co działa.</p>
<div class="tech-tags">
  <span>Framer</span><span>TradingView</span><span>Twitter/X embed</span>
  <span>SVG</span><span>Responsywny design</span>
</div>`,
  },

  "prawkoczechy": {
    headline: "Strona dla firmy <em>prawo jazdy w Czechach</em> - SEO, Google Ads i konwersja",
    tags: ["Strona firmowa", "SEO", "Google Ads"],
    scope: "UX, kod, SEO, Google Ads",
    heroCaption: "Strona firmowa · prawkoczechy.pl",
    caseStudyHtml: `<p><strong>Zdawanie egzaminu na prawo jazdy w Czechach to nisza z rosnącym popytem</strong> - Polacy coraz częściej korzystają z tej możliwości ze względu na niższe koszty i krótszy czas oczekiwania. Firma potrzebowała strony, która nie tylko prezentuje usługę, ale aktywnie pozyskuje klientów przez Google Ads i organiczne SEO.</p>
<p>Projekt obejmował design, development, konfigurację kampanii Google Ads i optymalizację strony pod konwersję - bo ładna strona bez klientów to tylko wydatek, nie inwestycja.</p>
<div class="stat-band">
  <div class="s"><div class="v">SEO</div><div class="l">Optymalizacja pod frazy lokalne i niszowe</div></div>
  <div class="s"><div class="v">Google Ads</div><div class="l">Kampanie płatne skonfigurowane i zoptymalizowane pod leady</div></div>
  <div class="s"><div class="v">CRO</div><div class="l">Każdy element strony zaprojektowany z myślą o konwersji</div></div>
</div>
<h2><span class="idx">01 / Wyzwanie</span>Nisza z dużym popytem, ale bez widoczności online</h2>
<p>Rynek „prawo jazdy w Czechach" w Polsce to nisza z realnym, rosnącym popytem i ograniczoną liczbą dostawców. Problem: bez widoczności w Google ten popyt trafia do konkurencji. Sama obecność online nie wystarczy - strona musi być zoptymalizowana pod frazy, którymi szukają potencjalni klienci, i musi konwertować tych, którzy trafią na stronę z reklam.</p>
<ul>
  <li><strong>Frazy niszowe z intencją zakupową.</strong> „Prawo jazdy w Czechach", „egzamin na prawo jazdy Czechy", „jak zdać prawo jazdy za granicą" - każda fraza ma inną intencję i wymaga innej treści.</li>
  <li><strong>Konwersja z ruchu płatnego.</strong> Google Ads kosztuje - każda złotówka za klik musi mieć szansę zamienić się w kontakt. Landing page musi być zaprojektowany pod ten cel.</li>
  <li><strong>Odpowiedzi na obiekcje.</strong> Klienci mają wiele pytań i wątpliwości przed decyzją - FAQ, testimonials i jasna ścieżka kontaktu są krytyczne.</li>
</ul>
<div class="pullquote">
  <p>Strona usługowa w niszy to nie projekt estetyczny - to maszyna do zamieniania odwiedzających w klientów. Każdy element ma jeden cel: skłonić do kontaktu.</p>
</div>
<h2><span class="idx">02 / Rozwiązanie</span>Strona zoptymalizowana pod leady + kampanie Google Ads</h2>
<p>Zaprojektowałem stronę z myślą o dwóch źródłach ruchu: organicznym SEO i płatnych reklamach Google. Dla SEO - zoptymalizowane nagłówki, meta tagi, struktura treści pod kluczowe frazy i szybkość ładowania. Dla Google Ads - dedykowane landing page'e z jasnym CTA i minimalną liczbą elementów rozpraszających uwagę.</p>
<h3>Optymalizacja konwersji</h3>
<p>Każda sekcja strony prowadzi użytkownika do jednej akcji: kontaktu. Formularz kontaktowy widoczny bez scrollowania, numer telefonu w menu i sticky header, opinie klientów w kluczowych miejscach, FAQ odpowiadające na najczęstsze obiekcje przed decyzją.</p>
<h3>Konfiguracja Google Ads</h3>
<p>Kampanie skonfigurowane pod frazy z wysoką intencją zakupową, z wykluczeniami fraz informacyjnych, które nie konwertują. Śledzenie konwersji przez Google Tag Manager - każdy formularz i kliknięcie w telefon zarejestrowane jako konwersja.</p>
<div class="callout">
  <span class="ic">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  </span>
  <div class="t">
    <b>SEO lokalne i niszowe</b>
    <p>Strona zoptymalizowana pod frazy dla użytkowników z całej Polski (nisza ogólnopolska), ze szczególnym naciskiem na frazy z intencją „chcę zdać" vs „chcę wiedzieć" - te pierwsze konwertują, te drugie nie.</p>
  </div>
</div>
<h2><span class="idx">03 / Rezultat</span>Strona, która pozyskuje klientów - nie tylko ich informuje</h2>
<p>Firma Prawo Jazdy w Czechach dostała kompletne rozwiązanie: nowoczesną, responsywną stronę zoptymalizowaną pod konwersję, SEO pod kluczowe frazy i skonfigurowane kampanie Google Ads. Połączenie tych trzech elementów przekłada się na stały napływ zapytań - zarówno z ruchu organicznego, jak i płatnego.</p>
<p>Masz niszową usługę i chcesz pozyskiwać klientów przez Google? <a href="/kontakt" class="link">Porozmawiajmy</a> - łączę development, SEO i kampanie Google Ads w jeden projekt.</p>
<div class="tech-tags">
  <span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span>
  <span>Google Ads</span><span>Google Tag Manager</span><span>SEO</span>
</div>`,
  },
};

export function enrichProjectWithCaseStudy<T extends { slug: string }>(project: T) {
  const caseStudy = projectCaseStudies[project.slug];
  if (!caseStudy) return project;
  return { ...project, ...caseStudy };
}
