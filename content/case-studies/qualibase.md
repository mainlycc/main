---
slug: qualibase
naglowek: Jak Qualibase połączył specjalistów IT z firmami, nie budując kolejnej tablicy ogłoszeń?
zajawka: Platforma rekrutacyjna IT z anonimowymi profilami kandydatów. Firma widzi technologie, doświadczenie i dostępność, dane osobowe dopiero po decyzji kandydata.
klient: Qualibase
branza: HR Tech
obszar: Rekrutacja IT
zakres: Strategia, UX, kod, infrastruktura
rok: 2025
live: https://www.qualibase.pl/
tagi: [Platforma, HR Tech, React]
technologie: [React, TypeScript, Python, AWS, PostgreSQL]
hero_caption: Baza specjalistów · qualibase.pl
rezultaty:
  - v: 2
    l: perspektywy w jednym produkcie: kandydat i rekruter
  - v: 0
    l: pośredników między firmą a specjalistą
  - v: 3
    l: tryby pracy w filtrach: zdalnie, hybrydowo, stacjonarnie
dodatkowe:
  - Kandydat decyduje, kiedy odsłania dane osobowe.
  - Filtrowanie po technologii, seniority i dostępności zamiast przeglądania CV.
  - Osobne panele dla obu stron, na tej samej bazie danych.
opinia:
  cytat:
  autor:
  rola:
cta: Budujesz produkt, w którym dwie grupy użytkowników muszą wygrać jednocześnie, żeby cokolwiek zadziałało? [Napisz do mnie](/kontakt). Ta klasa projektów rozstrzyga się na etapie architektury, nie na etapie designu.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Lista specjalistów z widocznymi technologiami, poziomem seniority, lokalizacją i statusem dostępności. Widok rekrutera.
    zasada: Profile w bazie testowej mają wyglądać jak realne profile: prawdziwe stacki technologiczne, sensowne lata doświadczenia. Bez awatarów generowanych AI z twarzami, bo to od razu widać.
    alt: "Qualibase: lista dostępnych specjalistów IT z technologiami i dostępnością"
    podpis: "Baza kandydatów: technologie, seniority, lokalizacja i dostępność w jednym widoku"
  - slot: proces-perspektywy
    typ: screenshot
    opis: Ekran wyboru perspektywy: wejście dla kandydata i wejście dla rekrutera obok siebie.
    zasada: Realny zrzut sekcji ze strony. Bez dopisywania liczby użytkowników ani "zaufali nam".
    alt: "Qualibase: dwie perspektywy, dla kandydata i dla rekrutera"
    podpis: Dwie ścieżki wejścia do tego samego produktu
  - slot: proces-filtry
    typ: crop
    opis: Wycinek panelu filtrów: technologia, seniority, dostępność, tryb pracy.
    zasada: Pokaż filtry, które faktycznie istnieją w aplikacji.
---

Rekrutacja IT nie działa dobrze z żadnej strony. Firmy dostają zgłoszenia od kandydatów, którzy nie znają wymaganych technologii. Dobrzy specjaliści przestają czytać wiadomości od rekruterów, bo dostają ich za dużo i żadna nie wygląda poważnie.

Qualibase powstał, żeby rozciąć ten węzeł: łączy zweryfikowanych specjalistów bezpośrednio z firmami. Moim zadaniem było zbudować to jako produkt, a nie jako tablicę ogłoszeń z lepszym wyglądem.

{{REZULTATY}}

## 01 / Wyzwanie · Dwie grupy użytkowników, dwa różne problemy

Platformy rekrutacyjne zwykle obsługują jedną stronę lepiej niż drugą i na tym się kończą. Tutaj obie musiały dostać coś od pierwszego dnia, bo bez kandydatów nie ma rekruterów, a bez rekruterów kandydaci odchodzą po tygodniu.

- Specjalista IT nie chce być w bazie, z której ktokolwiek może wysłać mu masową wiadomość.
- Rekruter nie chce filtrować zgłoszeń od osób, które nie znają wymaganej technologii.
- Baza ma wartość tylko wtedy, gdy profile są prawdziwe, więc system musi wymuszać konkret zamiast opisu "komunikatywny, szybko się uczę".

> Platforma, która nie rozwiązuje problemu kandydata, nigdy nie zbierze bazy na tyle dobrej, żeby rekruter chciał za nią zapłacić.

## 02 / Rozwiązanie · Jedna baza, dwa zupełnie różne doświadczenia

Qualibase działa na React z backendem w Pythonie, na AWS i PostgreSQL. Ta sama baza obsługuje dwie ścieżki, które widzą i mogą co innego.

{{IMG:hero}}

### Kandydat, czyli anonimowość i kontrola

Profil kandydata pokazuje technologie, lata doświadczenia, dostępność i tryb pracy. Nie pokazuje imienia ani CV, dopóki kandydat sam tego nie odsłoni. Selekcja zaczyna się więc od kompetencji, a specjalista decyduje, komu się ujawnia.

{{IMG:proces-perspektywy}}

### Rekruter, czyli baza zamiast stosu CV

Rekruter przegląda skondensowane profile z filtrem po technologii, poziomie seniority i dostępności. Zamiast czytać dokumenty, zawęża listę i kontaktuje się z osobami, które pasują do roli.

{{CALLOUT: Anonimowość jest funkcją produktu, nie ustawieniem prywatności | Domyślne ukrycie danych osobowych zmienia to, kto zgłasza się do bazy. Specjalista, który nie szuka aktywnie pracy, może w niej być bez ryzyka, że zobaczy go obecny pracodawca.}}

## 03 / Rezultat · Produkt, w którym obie strony mają powód, żeby zostać

Qualibase ma działającą architekturę dwustronną: kandydat kontroluje swoją widoczność, rekruter dostaje bazę z filtrami zamiast skrzynki pełnej załączników. To jedna platforma, ale dwie osobne odpowiedzi na dwa osobne problemy.
