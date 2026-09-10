# Case studies: jak to działa

Treści case studies mieszkają w Markdownie. SQL i TypeScript są z niego generowane.

```
content/case-studies/<slug>.md     <- piszesz tutaj
        |
        |  node scripts/build-case-studies.mjs
        v
supabase/016_case_studies.sql          <- wklejasz do Supabase SQL Editor
lib/case-studies.generated.ts          <- fallback, gdy baza nie odpowiada
content/case-studies/_BRIEF-GRAFICZNY.md  <- lista zdjęć do zrobienia
```

## Dlaczego tak, a nie od razu w SQL

SQL z treścią w środku jest nieedytowalny. Po dwóch poprawkach nikt nie wie,
która wersja jest aktualna: ta w bazie, ta w repo, czy ta w `lib/case-studies.ts`.
Markdown jest jednym źródłem prawdy, resztę da się odtworzyć jedną komendą.

## Pierwsze uruchomienie

1. W Supabase SQL Editor odpal `supabase/015_case_study_columns.sql` (raz).
2. Odpal `supabase/016_case_studies.sql`.

## Kolejne zmiany

1. Popraw plik `.md`.
2. `node scripts/build-case-studies.mjs`
3. Wklej `supabase/016_case_studies.sql` do Supabase.

Jeśli pominiesz krok 3, strona i tak pokaże nową treść, bo
`lib/case-studies.generated.ts` działa jako fallback. Kolejność źródeł:
Supabase > wygenerowany TypeScript > stare `lib/case-studies.ts`.

## Nowy case study

Skopiuj `_SZABLON.md` na `<slug>.md`. Slug musi się zgadzać ze slugiem
w `lib/projects.ts` i w tabeli `portfolio_projects`, inaczej `UPDATE` nie trafi
w żaden wiersz.

Pliki zaczynające się od `_` są pomijane przez builder.

## Struktura tekstu

Wzorowana na case studies automation.house, bo ten układ działa:

1. Nagłówek jako pytanie z konkretem: "Jak X zrobił Y?"
2. Dwa akapity wprowadzenia: kto to jest i co powstało.
3. Pasek trzech liczb.
4. `01 / Wyzwanie` - stan przed, plus lista konkretnych bólów.
5. `02 / Rozwiązanie` - co powstało, z podsekcjami i zrzutami.
6. `03 / Rezultat` - stan po.
7. `Dodatkowo` - rzeczy poboczne (generowane z frontmattera).
8. Opinia klienta, jeśli jest prawdziwa.
9. CTA i tagi technologii (generowane).

## Zasady pisania

- Nagłówek zawsze jako pytanie i zawsze z konkretem w środku.
- Liczby tylko sprawdzalne. Skala systemu i policzalne cechy produktu są w porządku.
  Wymyślone procenty i oszczędności nie są.
- Cytat klienta tylko prawdziwy. Puste pole `cytat:` nie renderuje sekcji.
- Bez myślników em i en. Przecinek, kropka, dwukropek albo nawias.
- Bez słów typu kompleksowy, innowacyjny, nowoczesny, kluczowy, wyróżnia się.
- Krótkie akapity, zmienna długość zdań.

## Składnia w treści

| Zapis | Efekt |
|---|---|
| `## 01 / Wyzwanie · Podtytuł` | nagłówek z numerkiem sekcji |
| `### Podtytuł` | podnagłówek |
| `{{REZULTATY}}` | pasek liczb z pola `rezultaty` |
| `{{CALLOUT: Tytuł \| treść}}` | wyróżniona ramka |
| `{{IMG:hero}}` | zdjęcie ze slotu `obrazy` → `/projekty/<slug>/<slot>.jpg` |
| `> tekst` | pullquote |
| `- pozycja` | lista |
| `**pogrubienie**`, `[link](/adres)` | formatowanie w linii |

## Zdjęcia projektów

Pliki: `public/projekty/<slug>/<slot>.jpg` (JPEG, ~1600 px szerokości).

W frontmatterze każdy osadzony slot potrzebuje `alt` i `podpis`. Listing / OG bierze zawsze `hero`.

Checklist braków: `node scripts/check-project-images.mjs`.
Szczegóły konwencji: `public/projekty/README.md`.
