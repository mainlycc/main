---
slug: lease1-leasing
naglowek: Jak Lease1 obsłużył trzy rynki językowe bez trzech osobnych stron?
zajawka: Platforma dla firmy leasingowej działającej międzynarodowo. Trzy wersje językowe, kalkulatory rat i ścieżka od wyliczenia do złożenia wniosku.
klient: Lease1
branza: Leasing i finansowanie
obszar: Prezentacja oferty i pozyskiwanie wniosków
zakres: Design, kod, wielojęzyczność
rok: 2024
live: https://lease1.pl
tagi: [Platforma, i18n, Next.js]
technologie: [Next.js, TypeScript, shadcn/ui, i18n, Tailwind CSS]
hero_caption: Strona główna · lease1.pl
rezultaty:
  - v: 3
    l: wersje językowe: polska, angielska, niemiecka
  - v: 3
    l: obsługiwane rodzaje leasingu: maszyny, samochody, nieruchomości
  - v: 1
    l: ścieżka od kalkulatora do złożenia wniosku
dodatkowe:
  - Kalkulatory leasingowe zamieniają pytanie "ile to kosztuje" w konkretną liczbę.
  - FAQ ma własną wyszukiwarkę, bo pytania o leasing są bardzo szczegółowe.
  - Blog z poradami finansowymi obsługuje wejścia z wyszukiwarki.
opinia:
  cytat:
  autor:
  rola:
cta: Sprzedajesz produkt finansowy, w którym klient najpierw chce policzyć, a dopiero potem porozmawiać? [Napisz do mnie](/kontakt). Kalkulator na stronie zwykle robi tu więcej niż formularz kontaktowy.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Strona główna lease1.pl z widoczną nawigacją i przełącznikiem języka.
    zasada: Realny zrzut z produkcji. Bez dorysowanych plakietek "zaufało nam X firm", jeśli takich na stronie nie ma.
    alt: Strona główna Lease1 z prezentacją form leasingu
    podpis: "Strona główna: trzy formy leasingu i wejście do kalkulatora"
  - slot: proces-kalkulator
    typ: screenshot
    opis: Kalkulator leasingowy z wypełnionymi polami (wartość przedmiotu, okres, wpłata własna) i wyliczoną ratą.
    zasada: Wynik ma pochodzić z realnego przeliczenia w narzędziu. Nie wpisuj kwoty ręcznie w grafice.
  - slot: proces-jezyki
    typ: crop
    opis: Ten sam fragment strony w trzech wersjach językowych, jeden pod drugim albo obok siebie.
    zasada: Wszystkie trzy muszą być prawdziwymi zrzutami. Bez tłumaczenia w Photoshopie.
---

Lease1 zajmuje się leasingiem maszyn, samochodów i nieruchomości, i robi to poza jednym rynkiem. Strona miała obsłużyć klienta polskiego, angielskojęzycznego i niemieckiego, nie rozpadając się przy tym na trzy osobne serwisy do utrzymania.

Zbudowałem platformę z wielojęzycznością na poziomie architektury i z kalkulatorami, które pozwalają policzyć ratę przed rozmową z kimkolwiek.

{{REZULTATY}}

## 01 / Wyzwanie · Klient leasingowy chce najpierw policzyć, a nie porozmawiać

W leasingu pierwsze pytanie brzmi zawsze tak samo: ile to będzie miesięcznie. Strona, która na to pytanie odpowiada formularzem kontaktowym, traci osobę, która dopiero szacuje możliwości.

- Trzy rynki językowe oznaczały ryzyko trzech osobnych serwisów rozjeżdżających się z czasem.
- Trzy rodzaje leasingu mają inne parametry, więc jeden ogólny opis nie wystarczał.
- Bez kalkulatora każde zapytanie o wysokość raty musiałby obsłużyć człowiek.
- Pytania o leasing są szczegółowe, a lista FAQ bez wyszukiwarki staje się nieczytelna po dwudziestej pozycji.

> Formularz kontaktowy nie jest odpowiedzią na pytanie "ile to kosztuje". Jest odłożeniem tej odpowiedzi na później.

## 02 / Rozwiązanie · Jedna platforma, trzy języki, policzalna oferta

Wielojęzyczność (polski, angielski, niemiecki) jest wbudowana w strukturę serwisu, a nie doklejona przez tłumaczenie osobnych kopii. Jedna zmiana w układzie strony wchodzi we wszystkich wersjach.

{{IMG:hero}}

### Kalkulatory jako pierwszy krok, nie jako dodatek

Odwiedzający ustawia parametry i widzi ratę. Dopiero potem pojawia się wniosek. Ta kolejność jest odwrotna niż na większości stron finansowych i to jest cała różnica.

### Trzy rodzaje leasingu, trzy osobne konteksty

Maszyny, samochody i nieruchomości mają inne parametry i innego odbiorcę. Każda forma dostała własną prezentację zamiast wspólnego akapitu z wyliczeniem.

{{CALLOUT: FAQ z wyszukiwarką, bo pytania o leasing są bardzo konkretne | Ktoś pyta o wykup, ktoś o wcześniejsze zakończenie umowy, ktoś o zdolność. Wyszukiwarka w FAQ zamienia długą listę w coś, czego da się użyć.}}

## 03 / Rezultat · Klient wchodzi na stronę i wychodzi z liczbą

Lease1 ma serwis, który obsługuje trzy rynki językowe z jednej struktury i prowadzi odwiedzającego od wyliczenia raty do złożenia wniosku. Pytanie o koszt dostaje odpowiedź na miejscu, zamiast wracać do zespołu jako kolejne zapytanie do obsłużenia.
