---
slug: jkterm-wizualizator
naglowek: Jak JK Term zastąpił wizualizacje w AutoCAD generatorem, który obsługuje handlowiec?
zajawka: Generator wizualizacji dla producenta grzejników. Wgrywasz zdjęcie produktu, opisujesz scenę i dostajesz zdjęcie do katalogu albo listing na Allegro.
klient: JK Term
branza: Produkcja grzejników
obszar: Materiały produktowe i sprzedaż
zakres: Koncepcja, UX, kod, warstwa AI
rok: 2025
live:
tagi: [Generator AI, Next.js, E-commerce]
technologie: [Next.js, TypeScript, AI Image Generation, Tailwind CSS]
hero_caption: Tryb Scena · Wizualizator JK Term
rezultaty:
  - v: 2
    l: tryby pracy: Scena (wnętrze) i Detal (listing)
  - v: 3
    l: warianty generowane jednocześnie z jednego opisu
  - v: 0
    l: sesji fotograficznych potrzebnych do nowego wariantu koloru
dodatkowe:
  - Kąt kamery, kolor produktu i jego rozmiar w scenie ustawia się przed generowaniem.
  - Gotowe pliki idą prosto do katalogu i do listingów, bez obróbki w programie graficznym.
  - Nowy wariant kolorystyczny nie wymaga angażowania osoby znającej AutoCAD.
opinia:
  cytat:
  autor:
  rola:
cta: Sprzedajesz produkt w wielu wariantach i każdy wariant potrzebuje własnego zdjęcia? [Napisz do mnie](/kontakt). To zwykle da się przenieść z sesji zdjęciowej do narzędzia, które obsługuje handlowiec.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Interfejs generatora w trybie Scena: panel ustawień po lewej (kąt kamery, kolor, rozmiar), trzy wygenerowane warianty po prawej.
    zasada: Wygenerowane grzejniki muszą być realnymi produktami JK Term, nie wymyślonym sprzętem. To case study o wiarygodności produktu, więc zniekształcony grzejnik psuje cały przekaz.
    alt: Generator wizualizacji JK Term w trybie Scena z panelem ustawień i wygenerowanymi wariantami
    podpis: "Tryb Scena: ustawienia kamery, koloru i rozmiaru oraz trzy warianty wnętrza"
  - slot: proces-detal
    typ: screenshot
    opis: Tryb Detal: zbliżenie na fragment grzejnika na jednolitym tle, tak jak wygląda zdjęcie na listingu Allegro.
    zasada: Pokaż realny output narzędzia. Bez dopisywania na obrazku ceny, gwiazdek ocen ani logotypu Allegro.
    alt: Tryb Detal generatora JK Term ze zbliżeniem na fragment grzejnika
    podpis: "Tryb Detal: ujęcia produktowe przygotowane pod listingi sprzedażowe"
  - slot: proces-porownanie
    typ: crop
    opis: Zestawienie obok siebie: to samo zdjęcie produktu na wejściu i dwie różne sceny na wyjściu.
    zasada: Nie podpisuj tego czasami typu "8 godzin kontra 40 sekund", dopóki JK Term nie potwierdzi realnych wartości.
---

JK Term produkuje grzejniki łazienkowe. Każdy model ma kilka rozmiarów i kilka wariantów kolorystycznych, a każdy z tych wariantów potrzebuje zdjęcia do katalogu i do listingu sprzedażowego. Do tej pory wizualizacje powstawały w AutoCAD.

Zbudowałem generator, który robi to samo z poziomu przeglądarki. Wgrywasz zdjęcie produktu, opisujesz scenę, ustawiasz kąt i kolor, dostajesz gotowe pliki.

{{REZULTATY}}

## 01 / Wyzwanie · Wizualizacja w AutoCAD nie skaluje się na liczbę wariantów

Problem nie polegał na tym, że wizualizacji nie dało się zrobić. Polegał na tym, że każda wymagała osoby z odpowiednim programem i odpowiednimi umiejętnościami. Przy katalogu, w którym jeden model rozchodzi się na kilkanaście kombinacji rozmiaru i koloru, ta ścieżka staje się wąskim gardłem.

- Nową wizualizację mógł zrobić tylko ktoś obsługujący AutoCAD.
- Zdjęcia produktu w realnym wnętrzu wymagały albo renderu, albo sesji w łazience pokazowej.
- Listingi na Allegro potrzebują innych ujęć niż katalog, więc materiał robiło się dwa razy.
- Przy zmianie kolorystyki cały proces zaczynał się od nowa.

> Kiedy każdy nowy wariant produktu wymaga specjalisty, katalog przestaje rosnąć w tempie, w jakim rośnie oferta.

## 02 / Rozwiązanie · Dwa tryby, jedno zdjęcie wejściowe

Generator ma dwa tryby, bo katalog i listing to dwa różne zadania. W obu punktem wyjścia jest to samo: zdjęcie produktu i opis tego, co ma się z nim stać.

{{IMG:hero}}

### Tryb Scena, czyli grzejnik w prawdziwej łazience

Użytkownik opisuje wnętrze, ustawia kąt kamery, kolor produktu i jego rozmiar w kadrze. Generator zwraca trzy warianty naraz, więc jest z czego wybierać bez powtarzania całej operacji.

### Tryb Detal, czyli zdjęcie pod listing

Drugi tryb generuje ujęcia detali na czystym tle, w formie, jakiej oczekuje karta produktu w sklepie i na Allegro. Ten sam plik wejściowy, inne wyjście.

{{IMG:proces-detal}}

{{CALLOUT: Narzędzie obsługuje handlowiec, nie grafik | Cała konfiguracja to kilka pól i suwaków. Osoba, która przygotowuje ofertę, nie musi znać AutoCAD-a ani programu graficznego, żeby dostać materiał nadający się do wysłania klientowi.}}

## 03 / Rezultat · Nowy wariant produktu nie czeka na wolny termin grafika

JK Term ma narzędzie, które zamienia zdjęcie produktu na materiał do katalogu i na listing, w dwóch trybach i w trzech wariantach na jedno podejście. Wąskie gardło przestało być kwestią dostępności specjalisty od AutoCAD-a.
