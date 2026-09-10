# Zdjęcia projektów

Konwencja ścieżek:

```
public/projekty/<slug>/<slot>.jpg
→ URL: /projekty/<slug>/<slot>.jpg
```

- `<slug>` = slug projektu (np. `airset-platforma`), ten sam co w `lib/projects.ts` i `content/case-studies/<slug>.md`
- `<slot>` = wartość `obrazy[].slot` z frontmattera (np. `hero`, `proces-kreator`)
- Format: JPEG (`.jpg`), szerokość ok. 1600 px, obcięte do treści (bez paska przeglądarki)
- Listing, karta projektu i OG = zawsze plik `hero.jpg`

## Przykład

```
public/projekty/airset-platforma/hero.jpg
public/projekty/airset-platforma/proces-kreator.jpg
```

W Markdownie case study:

```md
{{IMG:hero}}
{{IMG:proces-kreator}}
```

`alt` i `podpis` bierz builder z frontmattera (`obrazy[].alt`, `obrazy[].podpis`).

## Zasady zrzutów

Jak w `content/case-studies/_BRIEF-GRAFICZNY.md`: realne UI, bez mockupów laptopa,
bez podmienionych liczb, dane osobowe anonimizuj w aplikacji przed zrzutem.

## Checklist braków

```bash
node scripts/check-project-images.mjs
```
