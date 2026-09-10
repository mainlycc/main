---
slug: elomoto-eco
naglowek: Jak operator stacji ładowania EV dostał stronę, która wygląda jak jego produkt?
zajawka: Strona dla operatora infrastruktury ładowania aut elektrycznych. Ponad 15 podstron, mapa stacji i widget ładowania reagujący na przewijanie.
klient: Elomoto Sp. z o.o., ekosystem Energomix
branza: Elektromobilność
obszar: Strona firmowa i prezentacja oferty
zakres: Design, kod, animacje
rok: 2025
live: https://elomoto.eco/
tagi: [Strona firmowa, React, Animacje]
technologie: [React 19, TypeScript, Vite, Tailwind CSS]
hero_caption: Strona główna · elomoto.eco
rezultaty:
  - v: 15+
    l: podstron: oferta, mapa, realizacje, blog, FAQ
  - v: 5
    l: osobnych podstron ofertowych zamiast jednej listy usług
  - v: 0
    l: przeładowań strony przy nawigacji (routing SPA)
dodatkowe:
  - Interaktywna mapa pokazuje stacje ładowania zamiast opisywać je w tabeli.
  - Formularz kontaktowy ma wybór tematu, więc zapytania trafiają od razu we właściwe miejsce.
  - Ciemny motyw z efektami szkła nawiązuje do interfejsów ładowarek EV.
opinia:
  cytat:
  autor:
  rola:
cta: Sprzedajesz coś, czego nie da się pokazać zdjęciem produktu? [Napisz do mnie](/kontakt). Zwykle da się to pokazać interakcją.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Sekcja hero strony głównej z animowanym tłem, w ciemnym motywie. Pełna szerokość desktopu.
    zasada: Realny zrzut ze strony produkcyjnej elomoto.eco. Żadnych dorysowanych paneli z liczbami ładowań ani wykresów oszczędności.
    alt: Strona główna elomoto.eco z sekcją hero w ciemnym motywie
    podpis: "Strona główna: ciemny interfejs nawiązujący do wyglądu ładowarek EV"
  - slot: proces-widget
    typ: crop
    opis: Widget ładowania w trakcie animacji, ze wskaźnikiem postępu w okolicach połowy zakresu 0 do 77 kWh.
    zasada: Wartość na wskaźniku musi być tą, którą widget faktycznie pokazuje. Nie podmieniaj jej na ładniejszą liczbę.
    alt: Widget ładowania elomoto.eco ze wskaźnikiem postępu 0 do 77 kWh
    podpis: "Widget ładowania: animacja postępu reagująca na przewijanie"
  - slot: proces-mapa
    typ: screenshot
    opis: Interaktywna mapa stacji ładowania z widocznymi pinezkami i panelem szczegółów jednej stacji.
    zasada: Pokaż realne lokalizacje z serwisu. Bez zagęszczania mapy pinezkami, których tam nie ma.
---

Elomoto to polski operator infrastruktury ładowania pojazdów elektrycznych, część ekosystemu Energomix. Firma sprzedaje coś, czego nie widać na zdjęciu produktu: infrastrukturę, dostępność i obsługę.

Zbudowałem stronę, która pokazuje to interakcją, a nie opisem. Aplikacja SPA na React i Vite, ponad 15 podstron, interaktywna mapa i animowany wskaźnik ładowania.

{{REZULTATY}}

## 01 / Wyzwanie · Trudno pokazać usługę, której nie da się sfotografować

Operator stacji ładowania nie ma jednego zdjęcia, które tłumaczy, czym się zajmuje. Ma ofertę dla wspólnot, firm i inwestorów, sieć punktów w terenie oraz temat, który dla dużej części odbiorców wciąż jest nowy.

- Oferta rozbija się na kilka różnych grup odbiorców, a każda pyta o co innego.
- Lista lokalizacji w tabeli nie mówi nic o tym, czy stacja jest blisko.
- Strona miała wyglądać jak produkt z branży EV, a nie jak dowolna strona usługowa z ciemnym tłem.

> Kiedy usługa jest niewidoczna, jedyne, co zostaje, to sposób, w jaki strona się zachowuje.

## 02 / Rozwiązanie · SPA z ciemnym interfejsem i jedną mocną interakcją

Całość działa jako aplikacja jednostronicowa z klienckim routingiem, więc przechodzenie między podstronami odbywa się bez przeładowania. Ciemny motyw z efektami szkła nawiązuje do wyglądu interfejsów w ładowarkach.

{{IMG:hero}}

### Widget ładowania jako element narracji

Wskaźnik postępu reaguje na przewijanie i symuluje ładowanie baterii od 0 do 77 kWh. To jedyna ozdobna rzecz na stronie, która robi coś więcej niż wygląda: tłumaczy, o czym jest ta firma, zanim odwiedzający przeczyta zdanie o ofercie.

{{IMG:proces-widget}}

### Pięć podstron ofertowych zamiast jednej listy

Zamiast jednej strony z sześcioma akapitami oferta rozeszła się na osobne podstrony, każda pisana pod inną grupę. Dzięki temu z reklamy albo z wyszukiwarki da się trafić od razu na właściwy kontekst.

{{CALLOUT: Mapa zamiast tabeli lokalizacji | Interaktywna mapa stacji odpowiada na jedyne pytanie, które naprawdę zadaje odwiedzający: czy jest coś blisko mnie. Tabela z adresami tego nie robi.}}

### Reszta struktury, czyli rzeczy, które muszą być

Realizacje, blog, FAQ i formularz kontaktowy z wyborem tematu zapytania. Formularz z wyborem tematu jest drobiazgiem, ale kieruje zapytanie od razu we właściwe miejsce, zamiast zostawiać segregację człowiekowi.

## 03 / Rezultat · Strona zachowuje się jak produkt, o którym opowiada

Elomoto ma serwis z rozbudowaną strukturą oferty, mapą stacji i interakcją, która tłumaczy branżę bez akapitu wprowadzającego. Nawigacja działa bez przeładowań, a każda grupa odbiorców ma własne wejście.
