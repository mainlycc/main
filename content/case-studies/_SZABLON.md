---
# ============================================================
# SZABLON case study. Skopiuj do <slug>.md i wypełnij.
# Ten plik zaczyna się od "_", więc builder go pomija.
# ============================================================

slug: przyklad-projektu

# Nagłówek zawsze jako pytanie z konkretem w środku.
# Wzór z automation.house: "Jak <klient> <zrobił X> <w Y>?"
naglowek: Jak przykładowa firma skróciła wycenę z dwóch dni do dziesięciu minut?

# Zdanie pod nagłówkiem. Trafia też do description i do meta w Google.
# 120-165 znaków, bez przymiotników marketingowych.
zajawka: Krótkie, konkretne zdanie o tym, co system robi i dla kogo.

klient: Nazwa klienta
branza: Nazwa branży
obszar: Czego dotyczyło wdrożenie
zakres: UX, kod, baza danych
rok: 2025
live: https://przyklad.pl
tagi: [Aplikacja webowa, Next.js, Supabase]
technologie: [Next.js, TypeScript, Supabase, Tailwind CSS]
hero_caption: Panel administratora · przyklad.pl

# Pasek liczb. WSTAWIAJ TYLKO LICZBY, KTÓRE DA SIĘ SPRAWDZIĆ.
# Dopuszczalne: skala systemu (ilu użytkowników, ile modułów, ile formatów),
# policzalne cechy produktu, dane od klienta.
# Niedopuszczalne: wymyślone procenty, oszczędności "z sufitu", ROI bez źródła.
rezultaty:
  - v: 865+
    l: uczniów prowadzonych w jednym systemie
  - v: 3
    l: role z osobnym zakresem uprawnień
  - v: 9
    l: przedmiotów z własnymi stawkami

# Rzeczy poboczne, które wyszły przy okazji. Bez liczb, krótkie zdania.
dodatkowe:
  - Pierwsza rzecz.
  - Druga rzecz.
  - Trzecia rzecz.

# Cytat klienta. Zostaw pusty, jeśli nie masz prawdziwego.
# Nigdy nie pisz cytatu za klienta.
opinia:
  cytat:
  autor:
  rola:

# Ostatni akapit przed tagami technologii. Zostaw puste = domyślne CTA.
cta:

# Brief graficzny. Trafia do content/case-studies/_BRIEF-GRAFICZNY.md
# typ: screenshot | crop | foto | generowane
# Plik: public/projekty/<slug>/<slot>.jpg  →  {{IMG:<slot>}}
obrazy:
  - slot: hero
    typ: screenshot
    opis: Co dokładnie ma być na zrzucie.
    zasada: Realne UI, dane zanonimizowane, żadnych podmienionych liczb.
    alt: Opis alternatywny dla czytnika ekranu
    podpis: Podpis widoczny pod zdjęciem
---

Dwa akapity wprowadzenia. Pierwszy mówi, kim jest klient i co miał na wejściu.
Drugi mówi, co zostało zbudowane. Bez rozgrzewki, bez "w dzisiejszych czasach".

Drugi akapit wprowadzenia.

{{REZULTATY}}

## 01 / Wyzwanie · Podtytuł opisujący realny problem

Akapit, który opisuje stan przed. Konkretnie: co ktoś robił ręcznie, ile to zajmowało,
gdzie ginęły dane.

- Pierwszy konkretny ból, najlepiej z liczbą albo nazwą narzędzia.
- Drugi ból.
- Trzeci ból.

> Jedno zdanie, które wyciąga sedno problemu. Nie slogan, tylko obserwacja.

## 02 / Rozwiązanie · Podtytuł mówiący, co powstało

Akapit o architekturze albo o głównej decyzji projektowej.

{{IMG:hero}}

### Podsekcja

Akapit.

{{CALLOUT: Tytuł ramki | Jedno albo dwa zdania o czymś, co warto wyróżnić.}}

## 03 / Rezultat · Podtytuł mówiący, co się zmieniło

Akapit o stanie po. Tylko to, co da się obronić.
