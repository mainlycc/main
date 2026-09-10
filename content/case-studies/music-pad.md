---
slug: music-pad
naglowek: Jak zrobić instrument, który działa w przeglądarce i nie wymaga niczego umieć?
zajawka: Projekt własny: pad muzyczny z 16 padami, trzema trybami odtwarzania, wizualizacją dźwięku i nagrywaniem sesji. Wszystko w przeglądarce, bez instalacji.
klient: Projekt własny
branza: Audio i kreatywne narzędzia
obszar: Eksperyment technologiczny
zakres: Koncepcja, UX, kod, warstwa audio
rok: 2024
live: https://musicpad-mainly.vercel.app/
tagi: [Web Audio, Projekt własny, Next.js]
technologie: [Next.js, TypeScript, Web Audio API, Tone.js, Tailwind CSS]
hero_caption: Pad muzyczny · musicpad-mainly.vercel.app
rezultaty:
  - v: 16
    l: programowalnych padów
  - v: 3
    l: tryby odtwarzania: normalny, pulsujący, ciągły
  - v: 0
    l: instalacji potrzebnych do zagrania pierwszego dźwięku
dodatkowe:
  - Sterowanie z klawiatury, więc da się grać obiema rękami.
  - Wizualizacja fali dźwiękowej pokazuje, co się właśnie dzieje.
  - Sesję można nagrać i wyeksportować.
opinia:
  cytat:
  autor:
  rola:
cta: Zastanawiasz się, czy dana rzecz da się zrobić w przeglądarce zamiast w aplikacji do zainstalowania? [Napisz do mnie](/kontakt). Odpowiedź jest częściej twierdząca, niż się wydaje.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Siatka 16 padów w trakcie gry, z podświetlonym aktywnym padem i widoczną wizualizacją fali.
    zasada: Zrzut ma pokazywać aplikację w działaniu, a nie stan spoczynku. Bez dorysowywania świecących efektów w programie graficznym.
    alt: Pad muzyczny z siatką 16 padów i wizualizacją fali dźwiękowej
    podpis: "Interfejs: 16 padów, wybór instrumentu i wizualizacja dźwięku"
  - slot: proces-tryby
    typ: crop
    opis: Wycinek przełącznika trybów odtwarzania i wyboru instrumentu.
    zasada: Realne opcje z aplikacji.
  - slot: proces-wizualizacja
    typ: crop
    opis: Zbliżenie na wizualizację fali dźwiękowej podczas odtwarzania.
    zasada: Prawdziwa fala z aplikacji, nie wygenerowana grafika "equalizera".
---

Interaktywny Pad Muzyczny to mój projekt własny i jednocześnie sprawdzian tego, jak daleko da się zajść z dźwiękiem w przeglądarce. Bez wtyczek, bez instalacji, bez konta.

Powstał instrument z 16 padami, trzema trybami odtwarzania, wizualizacją dźwięku i nagrywaniem sesji, oparty na Web Audio API i Tone.js.

{{REZULTATY}}

## 01 / Wyzwanie · Przeglądarka nie jest oczywistym miejscem na instrument

Dźwięk w przeglądarce ma dwa problemy naraz. Techniczny: opóźnienie między naciśnięciem a dźwiękiem musi być na tyle małe, żeby dało się grać do rytmu. I projektowy: narzędzie muzyczne zwykle zakłada, że użytkownik już coś umie.

- Zbyt duże opóźnienie zamienia instrument w zabawkę, w której nie da się trafić w rytm.
- Interfejs oparty na myszce ogranicza do jednego dźwięku naraz.
- Osoba bez przygotowania muzycznego potrzebuje zagrać coś sensownego w pierwszej minucie, inaczej zamyka kartę.

> Instrument, który wymaga instrukcji, przegrywa z instrumentem, na którym da się przypadkiem zagrać coś, co brzmi dobrze.

## 02 / Rozwiązanie · Szesnaście padów, klawiatura i natychmiastowa reakcja

Warstwa dźwiękowa stoi na Web Audio API z Tone.js, co pozwala trzymać opóźnienie na poziomie akceptowalnym do gry. Interfejs to siatka 16 padów, każdy z przypisanym dźwiękiem.

{{IMG:hero}}

### Trzy tryby zamiast jednego sposobu grania

Tryb normalny odtwarza dźwięk raz. Pulsujący powtarza go w rytmie. Ciągły trzyma go, dopóki pad jest aktywny. Te trzy zachowania wystarczają, żeby z pojedynczych dźwięków dało się złożyć coś, co ma strukturę.

{{CALLOUT: Sterowanie z klawiatury zmienia to, co da się zagrać | Myszka obsługuje jeden pad naraz. Klawiatura pozwala trzymać kilka dźwięków jednocześnie i grać obiema rękami, czyli robić to, po co w ogóle sięga się po pad.}}

### Wizualizacja i nagrywanie

Fala dźwiękowa pokazuje, co dzieje się w danym momencie, a nagrywanie pozwala zapisać sesję i wyeksportować ją. Bez tego drugiego całość zostałaby zabawką, a nie narzędziem.

## 03 / Rezultat · Instrument, który zaczyna się od kliknięcia w link

Pad działa w przeglądarce, na 16 padach, z trzema trybami odtwarzania i nagrywaniem. Nie zastępuje programu do produkcji muzyki, ale kasuje wszystko, co zwykle stoi między pomysłem a pierwszym dźwiękiem.
