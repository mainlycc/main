---
slug: football-academy
naglowek: Jak akademia piłkarska przeniosła materiały brandingowe z dysku do przeglądarki 3D?
zajawka: Wewnętrzny system akademii piłkarskiej z przeglądarką modeli 3D. Manager obraca model, ustawia światło i eksportuje go do GLB, PNG albo SVG.
klient: Football Academy
branza: Sport
obszar: Zarządzanie zasobami marki
zakres: UX, design, kod, 3D
rok: 2026
live:
tagi: [3D, Aplikacja webowa, Next.js]
technologie: [Next.js, TypeScript, Three.js, React Three Fiber, Tailwind CSS]
hero_caption: Przeglądarka 3D · Football Academy System
rezultaty:
  - v: 3
    l: role użytkowników: Zawodnik, Trener, Manager
  - v: 3
    l: formaty eksportu z jednego modelu: GLB, PNG, SVG
  - v: 1
    l: miejsce zamiast dysku, Discorda i skrzynki mailowej
dodatkowe:
  - Model ogląda się w przeglądarce, bez instalowania Blendera.
  - Kontrola światła pozwala dobrać ujęcie pod konkretny kanał publikacji.
  - Manager może usuwać i porządkować zasoby bez proszenia o to programisty.
opinia:
  cytat:
  autor:
  rola:
cta: Masz materiały marki rozrzucone po dysku, czacie i mailach, a ktoś ciągle pyta "gdzie jest ta wersja"? [Napisz do mnie](/kontakt). Galeria z uprawnieniami i eksportem to zwykle mniejszy projekt, niż się wydaje.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Widok Przegląd z modelem 3D na środku, panelem bocznym (tryby Obróć i Światło, eksport GLB/PNG/SVG) i przełącznikiem ról u góry.
    zasada: Realny zrzut z aplikacji w trybie ciemnym. Model musi być prawdziwym assetem akademii, nie zastępczą kulą ani sześcianem.
    alt: "Football Academy System: przeglądarka modelu 3D z panelem Obróć i Światło oraz eksportem GLB, PNG, SVG"
    podpis: "Widok Przegląd: model, kontrola światła i eksport w jednym ekranie"
  - slot: proces-galeria
    typ: crop
    opis: Widok Lista, czyli galeria zasobów 3D z miniaturami i nazwami.
    zasada: Miniatury generuj z realnych modeli. Jeśli w galerii jest sześć pozycji, pokaż sześć, nie dorabiaj wypełniaczy.
  - slot: proces-eksport
    typ: crop
    opis: Wycinek panelu eksportu z trzema formatami i widocznym stanem po kliknięciu.
    zasada: Bez animowanych pasków postępu dorysowanych w retuszu.
---

Football Academy prowadzi akademię piłkarską i traktuje własną markę jak produkt: otwarcia oddziałów, osiągnięcia i materiały graficzne mają swoją oprawę. Problem był banalny i typowy. Wszystko to leżało w plikach rozrzuconych po Dysku, Discordzie i skrzynkach.

Zbudowałem wewnętrzną aplikację, w której te materiały żyją jako zasoby, a nie jako pliki. Centralnym elementem jest przeglądarka modeli 3D.

{{REZULTATY}}

## 01 / Wyzwanie · Materiały marki leżą wszędzie i nigdzie

Akademia rośnie, więc rośnie też liczba rzeczy do ogarnięcia: nowe oddziały, wydarzenia, materiały dla trenerów i zawodników. Bez wspólnego miejsca każdy plik ma własną historię i własną najnowszą wersję.

- Model 3D dało się obejrzeć tylko po zainstalowaniu Blendera, więc w praktyce oglądała go jedna osoba.
- Zawodnik, trener i manager potrzebują różnych rzeczy, ale dostawali ten sam folder.
- Ten sam materiał trzeba było wyeksportować osobno do social mediów, osobno do prezentacji i osobno do druku.

> Marka przestaje być folderem na dysku w momencie, w którym ktoś może ją obejrzeć i pobrać bez pytania kogokolwiek o plik.

## 02 / Rozwiązanie · Dashboard z viewerem 3D i podziałem na role

Aplikacja stoi na Next.js, a warstwę 3D obsługuje Three.js z React Three Fiber. Widok Przegląd pokazuje aktualny zasób w ciemnym interfejsie, strzałki przełączają galerię, a panel boczny daje tryby Obróć i Światło oraz eksport.

{{IMG:hero}}

### Trzy role, jeden produkt

Przełącznik ról (Zawodnik, Trener, Manager) rozdziela to, co w folderze było wspólne. Manager zarządza zasobami, pozostali korzystają z przeglądu w swoim zakresie. Nawigacja dzieli się na Przegląd, Listę i Zarządzanie, więc korzystanie i administrowanie to dwa różne miejsca, a nie jeden ekran do wszystkiego.

{{CALLOUT: Jeden model, trzy wyjścia | GLB do dalszej pracy w 3D, PNG do social mediów, SVG do materiałów drukowanych. Konwersja dzieje się w aplikacji, więc nie ma etapu przerzucania pliku do innego programu.}}

## 03 / Rezultat · Zasób marki da się obejrzeć i pobrać w kilkanaście sekund

Akademia ma wewnętrzny system, w którym materiały brandingowe są katalogiem z uprawnieniami i eksportem, a nie zestawem plików do odnalezienia. Przygotowanie assetu pod konkretny kanał sprowadza się do wybrania formatu.
