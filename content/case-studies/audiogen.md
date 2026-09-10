---
slug: audiogen
naglowek: Jak startup audiobookowy zbudował listę oczekujących przed premierą produktu?
zajawka: Landing page dla startupu Audiogen z zapisem na whitelistę. Zgłoszenie trafia do bazy i uruchamia powiadomienie, bez ręcznego przepisywania z maili.
klient: Audiogen
branza: Audiobooki
obszar: Pozyskiwanie leadów przed premierą
zakres: Design, wdrożenie, automatyzacja
rok: 2024
live: https://audiogen.framer.website
tagi: [Landing page, Automatyzacja, Framer]
technologie: [Framer, React, TypeScript, Automatyzacja]
hero_caption: Zapis na whitelistę · Audiogen
rezultaty:
  - v: 1
    l: cel strony: zapis na listę oczekujących
  - v: 0
    l: ręcznego przepisywania zgłoszeń ze skrzynki
  - v: auto
    l: powiadomienie o nowym zgłoszeniu bez sprawdzania bazy
dodatkowe:
  - Zgłoszenia lądują w jednej bazie zamiast w skrzynce mailowej.
  - Integracja z systemem mailingowym przygotowuje grunt pod komunikację przed premierą.
  - Strona ma jeden przycisk, więc nie ma czym rozpraszać odwiedzającego.
opinia:
  cytat:
  autor:
  rola:
cta: Zbierasz zapisy przed premierą i wciąż przepisujesz je ze skrzynki do arkusza? [Napisz do mnie](/kontakt). To jeden wieczór pracy, który oszczędza kilka miesięcy klikania.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Sekcja hero landing page'a Audiogen z formularzem zapisu na whitelistę.
    zasada: Realny zrzut ze strony. Bez dopisywania licznika "już 2137 zapisanych", jeśli takiego elementu nie ma.
    alt: Landing page Audiogen z formularzem zapisu na whitelistę
    podpis: "Landing page: jeden komunikat i jeden przycisk"
  - slot: proces-formularz
    typ: crop
    opis: Formularz zapisu w stanie po wysłaniu, z komunikatem potwierdzenia.
    zasada: Pokaż prawdziwy komunikat aplikacji.
  - slot: proces-baza
    typ: crop
    opis: Widok bazy zebranych zgłoszeń z datami.
    zasada: Adresy e-mail zanonimizuj przed zrzutem, ale zostaw realną strukturę danych. Nie generuj listy fikcyjnych adresów, żeby wyglądała dłużej.
---

Audiogen to startup pracujący nad audiobookami. Zgłosił się na etapie, na którym produktu jeszcze nie było, ale były osoby zainteresowane. Zadanie brzmiało: zbudować stronę, która zamienia to zainteresowanie w listę kontaktów.

Zaprojektowałem i wdrożyłem landing page z zapisem na whitelistę oraz automatyzację, która przejmuje zgłoszenia od momentu kliknięcia.

{{REZULTATY}}

## 01 / Wyzwanie · Lista oczekujących w skrzynce mailowej to nie jest lista

Przed premierą jedynym mierzalnym zasobem startupu są ludzie, którzy powiedzieli "dajcie znać". Jeśli te deklaracje leżą w skrzynce, to formalnie są, ale nie da się ich policzyć, posegmentować ani odezwać się do nich jednym ruchem.

- Zgłoszenia trafiały tam, gdzie trafia wszystko inne, czyli do jednej skrzynki.
- Nie było jednego licznika mówiącego, ile osób faktycznie czeka.
- Kontakt z tymi osobami wymagałby ręcznego zebrania adresów.

> Przed premierą lista oczekujących jest jedyną rzeczą, którą da się zmierzyć. Warto, żeby dało się ją też otworzyć.

## 02 / Rozwiązanie · Jedna strona, jeden przycisk, automatyczne przejęcie zgłoszenia

Landing page powstał we Framerze, z jednym celem i jednym wezwaniem do działania. Nie ma tu menu z sześcioma pozycjami ani sekcji o zespole, bo na tym etapie nie mają one nic do zrobienia.

{{IMG:hero}}

### Zgłoszenie idzie dalej samo

Po wysłaniu formularza zgłoszenie trafia do bazy i uruchamia powiadomienie. Nikt nie musi zaglądać do skrzynki, żeby wiedzieć, że coś przyszło, ani przepisywać adresu do arkusza.

{{CALLOUT: Integracja z mailingiem od pierwszego dnia | Baza zapisów jest podpięta do systemu mailingowego, więc komunikacja przed premierą startuje z gotowej listy, a nie z eksportu robionego w ostatniej chwili.}}

## 03 / Rezultat · Zainteresowanie zamienione w listę, z którą da się pracować

Audiogen ma stronę, która zbiera zapisy, i proces, który przejmuje je bez udziału człowieka. Zamiast wiadomości rozsypanych w skrzynce powstaje baza gotowa do komunikacji w dniu premiery.
