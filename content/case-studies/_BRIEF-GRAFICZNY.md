# Brief graficzny do case studies

WYGENEROWANE z frontmatterów. Regeneracja: `node scripts/build-case-studies.mjs`

Typy: `screenshot` = zrzut z realnej aplikacji, `crop` = wycinek zrzutu, `foto` = zdjęcie realne,
`generowane` = grafika generowana (tylko abstrakcja albo tekstura, nigdy fałszywe UI ani liczby).

## Zasady obowiązujące wszędzie

Czego nie robimy, żeby to nie wyglądało jak wygenerowana atrapa:

- Żadnych podmienionych liczb na zrzucie. Jeśli w aplikacji jest 7 pozycji, na obrazku jest 7.
- Żadnych dorysowanych wykresów, kółek procentowych, KPI i strzałek wzrostu,
  jeśli aplikacja takich elementów nie ma. To jest pierwsza rzecz, po której poznaje się fejk.
- Żadnych twarzy generowanych AI przy opiniach i awatarach.
- Żadnych renderów laptopa z odbiciem i cieniem. Zwykły, prosty zrzut wygląda poważniej.
- Dane osobowe anonimizujemy w aplikacji przed zrzutem, a nie rozmyciem w Photoshopie.
  Rozmycia czytają się jak zasłanianie braków.
- Puste stany pokazujemy jako puste. Dopisywanie wypełniaczy, żeby lista wyglądała dłużej,
  widać po jednorodnych nazwach.

Co wolno wygenerować: tła, tekstury, abstrakcyjne kształty w sekcjach dekoracyjnych.
Czyli rzeczy, które nie udają zrzutu ekranu ani danych.

Format zrzutów: szerokość 1600 px, obcięte do samej treści, bez paska przeglądarki
i bez paska zadań systemu.

---

## Jak AIRSET przeniósł szkolenia personelu lotniczego z PDF-ów do systemu z audytem?

`/projekty/airset-platforma`

### hero  `screenshot`

plik: `/projekty/airset-platforma/hero.jpg`

Dashboard użytkownika z listą przypisanych szkoleń i postępem nauki. Realny zrzut, tryb ciemny.

> Ograniczenie: Postęp pokaż taki, jaki jest na koncie testowym. Bez dorysowanych kółek procentowych i bez wymyślonych statystyk "ukończeń w tym miesiącu".

### proces-kreator  `screenshot`

plik: `/projekty/airset-platforma/proces-kreator.jpg`

Kreator testu z rozwiniętą listą sześciu typów pytań (jednokrotny wybór, wielokrotny wybór, prawda/fałsz, otwarte, luki, dopasowanie par).

> Ograniczenie: Musi być widocznych sześć realnych typów. To najmocniejszy dowód w całym case study, więc żadnych retuszy.

### proces-raporty  `crop`

plik: `/projekty/airset-platforma/proces-raporty.jpg`

Wycinek widoku raportu miesięcznego z przyciskami eksportu PDF, CSV, XLSX.

> Ograniczenie: Pokaż realne przyciski eksportu. Bez ikon, których w aplikacji nie ma.

### proces-audyt  `crop`

plik: `/projekty/airset-platforma/proces-audyt.jpg`

Wycinek dziennika logów audytowych: kto, co, kiedy, na jakim zasobie.

> Ograniczenie: Nazwiska i adresy e-mail zanonimizuj w danych testowych. Nie zamazuj ich w Photoshopie, bo rozmycia wyglądają jak ukrywanie braków.


---

## Jak Akademia Wiedzy przestała prowadzić 865 uczniów w arkuszu kalkulacyjnym?

`/projekty/akademia-wiedzy`

### hero  `screenshot`

plik: `/projekty/akademia-wiedzy/hero.jpg`

Panel administratora, widok listy uczniów z przypisanym korepetytorem, przedmiotem i statusem rozliczenia. Realny zrzut z aplikacji, szerokość 1600 px, obcięty do samej treści bez paska przeglądarki.

> Ograniczenie: Nazwiska zanonimizuj w samej aplikacji przed zrzutem (Jan K., Anna W.). Nie podmieniaj liczb w retuszu, nie dorysowuj wykresów ani KPI, których w aplikacji nie ma.

### proces-dostepnosc  `crop`

plik: `/projekty/akademia-wiedzy/proces-dostepnosc.jpg`

Wycinek widoku grafiku dostępności korepetytora, siatka tygodniowa z zaznaczonymi slotami godzinowymi. Sam komponent, bez nawigacji bocznej.

> Ograniczenie: Zwykły zrzut, bez cieni i mockupów laptopa. Jeśli slotów jest mało, ustaw realny tydzień, nie wypełniaj siatki na siłę.

### proces-rozliczenia  `crop`

plik: `/projekty/akademia-wiedzy/proces-rozliczenia.jpg`

Wycinek modułu rozliczeń, lista odbytych lekcji z kwotą i przyciskiem wysyłki linku płatniczego.

> Ograniczenie: Kwoty zostaw takie, jakie są w bazie testowej. Bez czerwono-zielonych strzałek wzrostu.


---

## Jak startup audiobookowy zbudował listę oczekujących przed premierą produktu?

`/projekty/audiogen`

### hero  `screenshot`

plik: `/projekty/audiogen/hero.jpg`

Sekcja hero landing page'a Audiogen z formularzem zapisu na whitelistę.

> Ograniczenie: Realny zrzut ze strony. Bez dopisywania licznika "już 2137 zapisanych", jeśli takiego elementu nie ma.

### proces-formularz  `crop`

plik: `/projekty/audiogen/proces-formularz.jpg`

Formularz zapisu w stanie po wysłaniu, z komunikatem potwierdzenia.

> Ograniczenie: Pokaż prawdziwy komunikat aplikacji.

### proces-baza  `crop`

plik: `/projekty/audiogen/proces-baza.jpg`

Widok bazy zebranych zgłoszeń z datami.

> Ograniczenie: Adresy e-mail zanonimizuj przed zrzutem, ale zostaw realną strukturę danych. Nie generuj listy fikcyjnych adresów, żeby wyglądała dłużej.


---

## Jak biuro księgowe dla startupów przestało wyglądać jak biuro księgowe?

`/projekty/bcsc-ksiegowosc`

### hero  `screenshot`

plik: `/projekty/bcsc-ksiegowosc/hero.jpg`

Strona główna bcsc.pl z nagłówkiem adresowanym do startupów i młodych firm.

> Ograniczenie: Realny zrzut z produkcji. Bez dorysowanych logotypów klientów, których na stronie nie ma.

### proces-kalkulator  `screenshot`

plik: `/projekty/bcsc-ksiegowosc/proces-kalkulator.jpg`

Kalkulator wyceny usług księgowych z wybranymi parametrami (forma działalności, liczba dokumentów) i wynikiem.

> Ograniczenie: Kwota musi pochodzić z realnego przeliczenia w narzędziu.

### proces-opinie  `crop`

plik: `/projekty/bcsc-ksiegowosc/proces-opinie.jpg`

Sekcja opinii klientów.

> Ograniczenie: Tylko prawdziwe opinie, z prawdziwymi podpisami. Bez zdjęć twarzy generowanych AI i bez wymyślonych nazwisk.


---

## Jak zbudowałem polską bibliotekę 1000 promptów AI i po co mi to było?

`/projekty/biblioteka-promptow`

### hero  `screenshot`

plik: `/projekty/biblioteka-promptow/hero.jpg`

Widok katalogu z kartami promptów, filtrem kategorii i wyszukiwarką u góry.

> Ograniczenie: Realne prompty z serwisu, czytelne w zrzucie. Bez dorysowanego licznika "1247 promptów", jeśli aplikacja go nie wyświetla.

### proces-kategorie  `crop`

plik: `/projekty/biblioteka-promptow/proces-kategorie.jpg`

Wycinek nawigacji kategorii z widocznym podziałem na prompty tekstowe i graficzne.

> Ograniczenie: Pokaż realną listę kategorii, także jeśli jest długa.

### proces-prompt  `crop`

plik: `/projekty/biblioteka-promptow/proces-prompt.jpg`

Pojedyncza karta promptu w stanie po kliknięciu przycisku kopiowania.

> Ograniczenie: Bez dodawania emoji i konfetti do potwierdzenia skopiowania.


---

## Jak przenieść grupę na Facebooku do serwisu, w którym da się cokolwiek znaleźć?

`/projekty/cytomania`

### hero  `screenshot`

plik: `/projekty/cytomania/hero.jpg`

Katalog cytatów z kartami, ocenami i filtrem. Widok główny serwisu.

> Ograniczenie: Treści muszą być realnymi cytatami z serwisu. Bez dorysowanych liczb polubień, jeśli licznik pokazuje co innego.

### proces-kolekcje  `crop`

plik: `/projekty/cytomania/proces-kolekcje.jpg`

Widok kolekcji użytkownika z kilkoma zapisanymi cytatami.

> Ograniczenie: Nazwy kolekcji weź z realnego konta testowego.

### proces-admin  `crop`

plik: `/projekty/cytomania/proces-admin.jpg`

Wycinek panelu administratora z listą zgłoszonych treści.

> Ograniczenie: Bez wykresów aktywności i statystyk, których w panelu nie ma.


---

## Jak operator stacji ładowania EV dostał stronę, która wygląda jak jego produkt?

`/projekty/elomoto-eco`

### hero  `screenshot`

plik: `/projekty/elomoto-eco/hero.jpg`

Sekcja hero strony głównej z animowanym tłem, w ciemnym motywie. Pełna szerokość desktopu.

> Ograniczenie: Realny zrzut ze strony produkcyjnej elomoto.eco. Żadnych dorysowanych paneli z liczbami ładowań ani wykresów oszczędności.

### proces-widget  `crop`

plik: `/projekty/elomoto-eco/proces-widget.jpg`

Widget ładowania w trakcie animacji, ze wskaźnikiem postępu w okolicach połowy zakresu 0 do 77 kWh.

> Ograniczenie: Wartość na wskaźniku musi być tą, którą widget faktycznie pokazuje. Nie podmieniaj jej na ładniejszą liczbę.

### proces-mapa  `screenshot`

plik: `/projekty/elomoto-eco/proces-mapa.jpg`

Interaktywna mapa stacji ładowania z widocznymi pinezkami i panelem szczegółów jednej stacji.

> Ograniczenie: Pokaż realne lokalizacje z serwisu. Bez zagęszczania mapy pinezkami, których tam nie ma.


---

## Jak akademia piłkarska przeniosła materiały brandingowe z dysku do przeglądarki 3D?

`/projekty/football-academy`

### hero  `screenshot`

plik: `/projekty/football-academy/hero.jpg`

Widok Przegląd z modelem 3D na środku, panelem bocznym (tryby Obróć i Światło, eksport GLB/PNG/SVG) i przełącznikiem ról u góry.

> Ograniczenie: Realny zrzut z aplikacji w trybie ciemnym. Model musi być prawdziwym assetem akademii, nie zastępczą kulą ani sześcianem.

### proces-galeria  `crop`

plik: `/projekty/football-academy/proces-galeria.jpg`

Widok Lista, czyli galeria zasobów 3D z miniaturami i nazwami.

> Ograniczenie: Miniatury generuj z realnych modeli. Jeśli w galerii jest sześć pozycji, pokaż sześć, nie dorabiaj wypełniaczy.

### proces-eksport  `crop`

plik: `/projekty/football-academy/proces-eksport.jpg`

Wycinek panelu eksportu z trzema formatami i widocznym stanem po kliknięciu.

> Ograniczenie: Bez animowanych pasków postępu dorysowanych w retuszu.


---

## Jak Rolety3miasto zamieniło wycenę z Excela na ofertę PDF gotową do wysłania?

`/projekty/generator-ofert-rolety`

### hero  `screenshot`

plik: `/projekty/generator-ofert-rolety/hero.jpg`

Konfigurator oferty: wybór produktu, wymiarów, materiału i wariantów, z widoczną kalkulacją ceny obok.

> Ograniczenie: Ceny i nazwy produktów muszą być realne albo pochodzić z cennika testowego klienta. Nie wpisuj efektownych okrągłych kwot.

### proces-pdf  `screenshot`

plik: `/projekty/generator-ofert-rolety/proces-pdf.jpg`

Wygenerowany dokument PDF otwarty w przeglądarce: nagłówek z danymi firmy, pozycje ze specyfikacją, podsumowanie ceny.

> Ograniczenie: Pokaż prawdziwy wygenerowany plik. Dane klienta w dokumencie zamień na fikcyjne przed zrzutem.

### proces-baza  `crop`

plik: `/projekty/generator-ofert-rolety/proces-baza.jpg`

Wycinek widoku bazy produktów i materiałów z możliwością edycji ceny.

> Ograniczenie: Bez dorysowanych wykresów marży i bez paneli statystyk, których w aplikacji nie ma.


---

## Jak JK Term zastąpił wizualizacje w AutoCAD generatorem, który obsługuje handlowiec?

`/projekty/jkterm-wizualizator`

### hero  `screenshot`

plik: `/projekty/jkterm-wizualizator/hero.jpg`

Interfejs generatora w trybie Scena: panel ustawień po lewej (kąt kamery, kolor, rozmiar), trzy wygenerowane warianty po prawej.

> Ograniczenie: Wygenerowane grzejniki muszą być realnymi produktami JK Term, nie wymyślonym sprzętem. To case study o wiarygodności produktu, więc zniekształcony grzejnik psuje cały przekaz.

### proces-detal  `screenshot`

plik: `/projekty/jkterm-wizualizator/proces-detal.jpg`

Tryb Detal: zbliżenie na fragment grzejnika na jednolitym tle, tak jak wygląda zdjęcie na listingu Allegro.

> Ograniczenie: Pokaż realny output narzędzia. Bez dopisywania na obrazku ceny, gwiazdek ocen ani logotypu Allegro.

### proces-porownanie  `crop`

plik: `/projekty/jkterm-wizualizator/proces-porownanie.jpg`

Zestawienie obok siebie: to samo zdjęcie produktu na wejściu i dwie różne sceny na wyjściu.

> Ograniczenie: Nie podpisuj tego czasami typu "8 godzin kontra 40 sekund", dopóki JK Term nie potwierdzi realnych wartości.


---

## Jak sprzedawać ubezpieczenie GAP, którego klient nie umie sobie wycenić?

`/projekty/kalkulator-gap`

### hero  `screenshot`

plik: `/projekty/kalkulator-gap/hero.jpg`

Kalkulator GAP z wypełnionymi polami (wartość pojazdu, rok produkcji, okres ochrony) i wyliczoną składką.

> Ograniczenie: Kwota składki musi pochodzić z realnego przeliczenia. To case study o kalkulatorze, więc podmieniona liczba podważa wszystko inne.

### proces-mobile  `screenshot`

plik: `/projekty/kalkulator-gap/proces-mobile.jpg`

Ten sam kalkulator na ekranie telefonu, pokazujący, że formularz mieści się bez zoomowania.

> Ograniczenie: Prawdziwy zrzut z urządzenia albo z trybu mobilnego przeglądarki. Bez wklejania ekranu w renderowany model iPhone'a z odbiciami.

### proces-kroki  `crop`

plik: `/projekty/kalkulator-gap/proces-kroki.jpg`

Wycinek pokazujący kolejność pól formularza i sposób prowadzenia użytkownika przez parametry.

> Ograniczenie: Bez dorysowanych numerków przy polach, jeśli aplikacja ich nie ma.


---

## Jak wystawić fakturę VAT bez zakładania konta w kolejnym systemie?

`/projekty/kreator-faktur`

### hero  `screenshot`

plik: `/projekty/kreator-faktur/hero.jpg`

Formularz wystawiania faktury z pozycjami, stawkami VAT i podglądem dokumentu obok.

> Ograniczenie: Dane sprzedawcy i nabywcy mają być fikcyjne, ale wyglądać realistycznie (poprawny format NIP, sensowny adres). Kwoty muszą się zgadzać z przeliczeniem, bo to case study o automatycznych obliczeniach.

### proces-pdf  `screenshot`

plik: `/projekty/kreator-faktur/proces-pdf.jpg`

Wygenerowany PDF faktury otwarty w przeglądarce.

> Ograniczenie: Prawdziwy plik z aplikacji. Bez podmieniania układu w programie graficznym.

### proces-kontrahenci  `crop`

plik: `/projekty/kreator-faktur/proces-kontrahenci.jpg`

Wycinek bazy kontrahentów z listą zapisanych firm.

> Ograniczenie: Nazwy fikcyjne, ale bez żartów typu "Firma Testowa 1". Wygląda to wtedy jak niedokończony projekt.


---

## Jak agencja marketingowa ma pokazać, że umie robić to, co sprzedaje?

`/projekty/kulio-studio`

### hero  `screenshot`

plik: `/projekty/kulio-studio/hero.jpg`

Sekcja hero kuliostudio.pl z interaktywną sceną 3D. Zrzut wykonany w momencie, w którym scena jest w ciekawym ujęciu.

> Ograniczenie: Realny zrzut ze strony. Scena 3D musi być tą ze Spline'a, nie renderem zrobionym osobno na potrzeby portfolio.

### proces-portfolio  `screenshot`

plik: `/projekty/kulio-studio/proces-portfolio.jpg`

Sekcja portfolio z siatką realizacji agencji.

> Ograniczenie: Realizacje muszą być prawdziwymi projektami Kulio Studio. Bez wypełniania siatki zastępczymi kafelkami.

### proces-cms  `crop`

plik: `/projekty/kulio-studio/proces-cms.jpg`

Widok edycji wpisu w CMS-ie, pokazujący, że zespół agencji zarządza treścią samodzielnie.

> Ograniczenie: Zrzut z realnego panelu, nie schemat rysowany w Figmie.


---

## Jak Lease1 obsłużył trzy rynki językowe bez trzech osobnych stron?

`/projekty/lease1-leasing`

### hero  `screenshot`

plik: `/projekty/lease1-leasing/hero.jpg`

Strona główna lease1.pl z widoczną nawigacją i przełącznikiem języka.

> Ograniczenie: Realny zrzut z produkcji. Bez dorysowanych plakietek "zaufało nam X firm", jeśli takich na stronie nie ma.

### proces-kalkulator  `screenshot`

plik: `/projekty/lease1-leasing/proces-kalkulator.jpg`

Kalkulator leasingowy z wypełnionymi polami (wartość przedmiotu, okres, wpłata własna) i wyliczoną ratą.

> Ograniczenie: Wynik ma pochodzić z realnego przeliczenia w narzędziu. Nie wpisuj kwoty ręcznie w grafice.

### proces-jezyki  `crop`

plik: `/projekty/lease1-leasing/proces-jezyki.jpg`

Ten sam fragment strony w trzech wersjach językowych, jeden pod drugim albo obok siebie.

> Ograniczenie: Wszystkie trzy muszą być prawdziwymi zrzutami. Bez tłumaczenia w Photoshopie.


---

## Jak GRUPA DE-PL zamknęła całą obsługę wycieczki w jednym systemie?

`/projekty/magia-podrozowania`

### hero  `screenshot`

plik: `/projekty/magia-podrozowania/hero.jpg`

Panel organizatora, widok pojedynczej wycieczki z listą uczestników, statusem płatności i harmonogramem zaliczka plus dopłata.

> Ograniczenie: Dane uczestników zanonimizuj w bazie testowej przed zrzutem. Nie dorabiaj wykresu sprzedaży ani licznika przychodu, bo takiego widoku nie ma.

### proces-oferta  `screenshot`

plik: `/projekty/magia-podrozowania/proces-oferta.jpg`

Publiczna strona wycieczki z galerią, programem dnia i formularzem rezerwacji. Widok mobilny obok desktopowego.

> Ograniczenie: Zdjęcia w galerii muszą być realnymi zdjęciami z oferty klienta, nie stockiem generowanym AI.

### proces-umowa  `crop`

plik: `/projekty/magia-podrozowania/proces-umowa.jpg`

Wycinek edytora szablonu umowy z widocznymi placeholderami typu nazwa wycieczki, dane klienta, kwota.

> Ograniczenie: Pokaż realny szablon HTML z placeholderami. Bez rozmycia i bez sztucznych podświetleń.

### proces-platnosc  `crop`

plik: `/projekty/magia-podrozowania/proces-platnosc.jpg`

Wycinek widoku płatności: podział na zaliczkę i dopłatę, status transakcji PayNow.

> Ograniczenie: Kwoty ze środowiska testowego. Bez zielonych fajek i konfetti.


---

## Jak zbudować stronę tokena, która wygląda wiarygodnie w kategorii, gdzie nikt nikomu nie ufa?

`/projekty/milei-coin`

### hero  `screenshot`

plik: `/projekty/milei-coin/hero.jpg`

Sekcja hero strony $MILEI z grafiką i wezwaniem do działania.

> Ograniczenie: Realny zrzut ze strony. Portret w hero jest grafiką generowaną AI i tak został zaprojektowany, więc nie podmieniaj go na zdjęcie prawdziwej osoby.

### proces-wykres  `crop`

plik: `/projekty/milei-coin/proces-wykres.jpg`

Osadzony wykres TradingView z kursem tokena.

> Ograniczenie: Zrzut z prawdziwego widgetu. Absolutnie bez retuszowania kształtu wykresu na rosnący.

### proces-statystyki  `crop`

plik: `/projekty/milei-coin/proces-statystyki.jpg`

Sekcja dynamicznych statystyk: liczba posiadaczy, liczba tokenów, płynność, licznik czasu.

> Ograniczenie: To najbardziej kuszące miejsce do podmiany liczb i najgorsze. Zrób zrzut w dowolnym momencie i zostaw wartości takie, jakie były.


---

## Jak zrobić instrument, który działa w przeglądarce i nie wymaga niczego umieć?

`/projekty/music-pad`

### hero  `screenshot`

plik: `/projekty/music-pad/hero.jpg`

Siatka 16 padów w trakcie gry, z podświetlonym aktywnym padem i widoczną wizualizacją fali.

> Ograniczenie: Zrzut ma pokazywać aplikację w działaniu, a nie stan spoczynku. Bez dorysowywania świecących efektów w programie graficznym.

### proces-tryby  `crop`

plik: `/projekty/music-pad/proces-tryby.jpg`

Wycinek przełącznika trybów odtwarzania i wyboru instrumentu.

> Ograniczenie: Realne opcje z aplikacji.

### proces-wizualizacja  `crop`

plik: `/projekty/music-pad/proces-wizualizacja.jpg`

Zbliżenie na wizualizację fali dźwiękowej podczas odtwarzania.

> Ograniczenie: Prawdziwa fala z aplikacji, nie wygenerowana grafika "equalizera".


---

## Jak sprzedawać usługę, którą klient sprawdza na telefonie i porównuje z forum?

`/projekty/prawkoczechy`

### hero  `screenshot`

plik: `/projekty/prawkoczechy/hero.jpg`

Sekcja hero prawkoczechy.pl z komunikatem głównym i wezwaniem do kontaktu, w widoku mobilnym.

> Ograniczenie: Realny zrzut z produkcji. Bez dorysowanych plakietek "500 zadowolonych klientów", jeśli takiej informacji na stronie nie ma.

### proces-faq  `screenshot`

plik: `/projekty/prawkoczechy/proces-faq.jpg`

Sekcja FAQ z rozwiniętymi odpowiedziami dotyczącymi legalności i uznawania dokumentu w Polsce.

> Ograniczenie: Pokaż realne pytania z serwisu. To najważniejsza sekcja tej strony, więc nie zastępuj jej przykładowymi.

### proces-opinie  `crop`

plik: `/projekty/prawkoczechy/proces-opinie.jpg`

Sekcja opinii klientów.

> Ograniczenie: Wyłącznie prawdziwe opinie. Bez portretów generowanych AI przy podpisach.


---

## Jak Qualibase połączył specjalistów IT z firmami, nie budując kolejnej tablicy ogłoszeń?

`/projekty/qualibase`

### hero  `screenshot`

plik: `/projekty/qualibase/hero.jpg`

Lista specjalistów z widocznymi technologiami, poziomem seniority, lokalizacją i statusem dostępności. Widok rekrutera.

> Ograniczenie: Profile w bazie testowej mają wyglądać jak realne profile: prawdziwe stacki technologiczne, sensowne lata doświadczenia. Bez awatarów generowanych AI z twarzami, bo to od razu widać.

### proces-perspektywy  `screenshot`

plik: `/projekty/qualibase/proces-perspektywy.jpg`

Ekran wyboru perspektywy: wejście dla kandydata i wejście dla rekrutera obok siebie.

> Ograniczenie: Realny zrzut sekcji ze strony. Bez dopisywania liczby użytkowników ani "zaufali nam".

### proces-filtry  `crop`

plik: `/projekty/qualibase/proces-filtry.jpg`

Wycinek panelu filtrów: technologia, seniority, dostępność, tryb pracy.

> Ograniczenie: Pokaż filtry, które faktycznie istnieją w aplikacji.

