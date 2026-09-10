---
slug: kreator-faktur
naglowek: Jak wystawić fakturę VAT bez zakładania konta w kolejnym systemie?
zajawka: Projekt własny: aplikacja do wystawiania faktur VAT w PDF. Automatyczne przeliczenia, baza kontrahentów i własny szablon dokumentu.
klient: Projekt własny
branza: Narzędzia dla firm
obszar: Dokumenty sprzedażowe
zakres: Koncepcja, UX, kod, generowanie PDF
rok: 2024
live: https://faktury.mainly.pl
tagi: [Narzędzie, Projekt własny, Next.js]
technologie: [Next.js, TypeScript, React PDF, Tailwind CSS]
hero_caption: Kreator faktury · faktury.mainly.pl
rezultaty:
  - v: PDF
    l: gotowy dokument na wyjściu, bez konwersji
  - v: 0
    l: ręcznych przeliczeń VAT i kwot brutto
  - v: 1
    l: baza kontrahentów wielokrotnego użytku
dodatkowe:
  - Szablon faktury da się dostosować do własnej identyfikacji.
  - Dane kontrahenta wystarczy wpisać raz.
  - Dokument powstaje w przeglądarce, bez instalowania programu.
opinia:
  cytat:
  autor:
  rola:
cta: Masz w firmie czynność, którą wszyscy robią w Wordzie, bo "to tylko chwila"? [Napisz do mnie](/kontakt). Te chwile najlepiej się liczą w skali miesiąca.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Formularz wystawiania faktury z pozycjami, stawkami VAT i podglądem dokumentu obok.
    zasada: Dane sprzedawcy i nabywcy mają być fikcyjne, ale wyglądać realistycznie (poprawny format NIP, sensowny adres). Kwoty muszą się zgadzać z przeliczeniem, bo to case study o automatycznych obliczeniach.
    alt: Kreator faktur z formularzem pozycji i podglądem dokumentu
    podpis: "Kreator: pozycje faktury, przeliczenia i podgląd dokumentu"
  - slot: proces-pdf
    typ: screenshot
    opis: Wygenerowany PDF faktury otwarty w przeglądarce.
    zasada: Prawdziwy plik z aplikacji. Bez podmieniania układu w programie graficznym.
  - slot: proces-kontrahenci
    typ: crop
    opis: Wycinek bazy kontrahentów z listą zapisanych firm.
    zasada: Nazwy fikcyjne, ale bez żartów typu "Firma Testowa 1". Wygląda to wtedy jak niedokończony projekt.
---

Kreator Faktur to mój projekt własny. Powstał z obserwacji, którą zna każdy, kto prowadzi małą firmę: faktury wystawia się albo w rozbudowanym systemie księgowym, którego używa się w pięciu procentach, albo w szablonie w edytorze tekstu, przepisując dane i licząc VAT ręcznie.

Zbudowałem coś pomiędzy: aplikację, która robi jedną rzecz i generuje gotowy dokument PDF.

{{REZULTATY}}

## 01 / Wyzwanie · Szablon w Wordzie działa, dopóki nie policzysz, ile kosztuje

Faktura z szablonu wygląda w porządku, ale każda pozycja to okazja do pomyłki. Trzeba przeliczyć netto na brutto, dobrać stawkę, przepisać dane kontrahenta i pamiętać o numeracji.

- Przeliczenia VAT robione ręcznie prędzej czy później się mylą.
- Dane stałego kontrahenta przepisuje się przy każdej fakturze od nowa.
- Eksport do PDF jest osobnym krokiem, o którym łatwo zapomnieć.

> Czynność, która zajmuje "tylko pięć minut", wykonywana dwadzieścia razy w miesiącu przestaje być drobiazgiem.

## 02 / Rozwiązanie · Formularz, przeliczenia i dokument w jednym miejscu

Aplikacja prowadzi przez wystawienie faktury: dane stron, pozycje, stawki. Kwoty netto, VAT i brutto liczą się w trakcie, a dokument powstaje jako PDF bez dodatkowego kroku eksportu.

{{IMG:hero}}

### Kontrahent wpisany raz zostaje w bazie

Dane stałych klientów zapisują się do bazy kontrahentów, więc kolejna faktura dla tej samej firmy zaczyna się od wyboru z listy.

{{CALLOUT: Szablon dopasowany do firmy, nie do aplikacji | Wygląd dokumentu da się dostosować, więc faktura wychodzi w identyfikacji firmy, a nie w domyślnym układzie narzędzia.}}

## 03 / Rezultat · Narzędzie, które robi jedną rzecz i nie wymaga wdrożenia

Kreator Faktur wystawia dokument VAT w PDF z automatycznymi przeliczeniami i bazą kontrahentów, działając w przeglądarce. Nie zastępuje systemu księgowego, tylko usuwa etap, na którym ktoś liczy VAT w kalkulatorze i przepisuje wynik do szablonu.
