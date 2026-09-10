---
slug: airset-platforma
naglowek: Jak AIRSET przeniósł szkolenia personelu lotniczego z PDF-ów do systemu z audytem?
zajawka: Platforma e-learningowa dla linii lotniczych. Sześć typów pytań w kreatorze testów, raporty miesięczne w PDF, CSV i XLSX oraz pełne logi audytowe.
klient: AIRSET
branza: Lotnictwo
obszar: Szkolenia wewnętrzne i zgodność
zakres: UX, kod, baza danych, bezpieczeństwo
rok: 2025
live: https://airset.pl/
tagi: [E-learning, Supabase, Next.js]
technologie: [Next.js 16, React 19, TypeScript, Supabase, Zod, React Hook Form, jsPDF, Resend, Vitest, Tailwind CSS]
hero_caption: Dashboard szkoleń · Platforma AIRSET
rezultaty:
  - v: 6
    l: typów pytań w kreatorze testów
  - v: 3
    l: formaty eksportu raportów: PDF, CSV, XLSX
  - v: 3
    l: poziomy uprawnień: Super Admin, Admin, Użytkownik
dodatkowe:
  - Materiały PDF, PPTX i PNG otwierają się w przeglądarce, bez pobierania na dysk.
  - Nowy pracownik dostaje zaproszenie e-mail zamiast konta zakładanego ręcznie.
  - Interfejs ma tryb jasny i ciemny, bo część szkoleń odbywa się poza biurem.
opinia:
  cytat:
  autor:
  rola:
cta: Masz w firmie szkolenia, które trzeba udokumentować, a nie tylko przeprowadzić? [Napisz do mnie](/kontakt). Różnica między platformą a folderem z PDF-ami zaczyna się przy pierwszym audycie.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Dashboard użytkownika z listą przypisanych szkoleń i postępem nauki. Realny zrzut, tryb ciemny.
    zasada: Postęp pokaż taki, jaki jest na koncie testowym. Bez dorysowanych kółek procentowych i bez wymyślonych statystyk "ukończeń w tym miesiącu".
    alt: Dashboard szkoleń platformy AIRSET z listą kursów i postępem nauki
    podpis: "Dashboard użytkownika: przypisane szkolenia i postęp nauki"
  - slot: proces-kreator
    typ: screenshot
    opis: Kreator testu z rozwiniętą listą sześciu typów pytań (jednokrotny wybór, wielokrotny wybór, prawda/fałsz, otwarte, luki, dopasowanie par).
    zasada: Musi być widocznych sześć realnych typów. To najmocniejszy dowód w całym case study, więc żadnych retuszy.
  - slot: proces-raporty
    typ: crop
    opis: Wycinek widoku raportu miesięcznego z przyciskami eksportu PDF, CSV, XLSX.
    zasada: Pokaż realne przyciski eksportu. Bez ikon, których w aplikacji nie ma.
  - slot: proces-audyt
    typ: crop
    opis: Wycinek dziennika logów audytowych: kto, co, kiedy, na jakim zasobie.
    zasada: Nazwiska i adresy e-mail zanonimizuj w danych testowych. Nie zamazuj ich w Photoshopie, bo rozmycia wyglądają jak ukrywanie braków.
---

AIRSET to linie lotnicze, w których szkolenia personelu nie są dodatkiem do pracy, tylko wymogiem operacyjnym. Trzeba je przeprowadzić, sprawdzić wiedzę i umieć później pokazać, że się odbyły.

Zbudowałem platformę e-learningową, która obsługuje wszystkie trzy rzeczy: publikowanie materiałów, testy końcowe i dokumentację tego, kto co przerobił i kiedy.

{{REZULTATY}}

## 01 / Wyzwanie · Szkolenie da się przeprowadzić na PDF-ie, udowodnić już nie

Materiały szkoleniowe rozsyłane mailem docierają do ludzi, ale nie zostawiają śladu. Nie wiadomo, kto otworzył prezentację, kto rozwiązał test i z jakim wynikiem. W branży, w której regularne szkolenia i weryfikacja wiedzy są wymogiem, brak tego śladu jest realnym problemem, a nie niedogodnością.

- Materiały (PDF, PPTX, PNG) krążyły w załącznikach, bez wersjonowania i bez wiedzy, kto z nich korzystał.
- Testy sprawdzano ręcznie, więc wyniki trafiały do arkusza z opóźnieniem albo wcale.
- Nie było raportu miesięcznego, który dałoby się przekazać dalej bez ręcznego składania.
- Dostęp do szkoleń nadawano na zasadzie "wyślij temu, kto powinien to mieć".

> Szkolenie, którego nie da się odtworzyć po fakcie, w praktyce nie istnieje. Liczy się nie tylko to, że ktoś je przeszedł, ale też to, że można to pokazać.

## 02 / Rozwiązanie · Materiały, testy i dziennik zdarzeń w jednym systemie

Platforma stoi na Next.js 16 i Supabase. Administrator publikuje szkolenie razem z materiałami, buduje test końcowy i przypisuje dostęp. Pracownik widzi swój dashboard z postępem, otwiera materiały w przeglądarce i rozwiązuje test.

{{IMG:hero}}

### Kreator testów z sześcioma typami pytań

Test końcowy to nie tylko wybór A, B, C. Kreator obsługuje jednokrotny i wielokrotny wybór, prawdę i fałsz, pytania otwarte, uzupełnianie luk oraz dopasowywanie par. Dzięki temu ten sam mechanizm obsługuje szkolenie proceduralne i szkolenie ze znajomości sprzętu.

### Dostęp przypisywany, a nie rozsyłany

Kontrola dostępu opiera się na przypisaniach indywidualnych i grupowych. Nowy pracownik dostaje zaproszenie e-mail i od razu widzi tylko te szkolenia, które go dotyczą.

{{CALLOUT: Uprawnienia egzekwuje baza, nie interfejs | Dostęp do danych kontrolują polityki Row Level Security w Supabase, więc ograniczenie działa przy każdym zapytaniu. Użytkownik nie zobaczy cudzych wyników nawet wtedy, gdy trafi na adres bezpośrednio.}}

### Raporty i logi, czyli część, o której zwykle się zapomina

System generuje raporty miesięczne z eksportem do PDF, CSV i XLSX, a każda operacja zapisuje się w logu audytowym. To ten fragment, który przy kontroli odróżnia platformę szkoleniową od folderu z plikami.

## 03 / Rezultat · Szkolenie zostawia ślad, którego można użyć

AIRSET ma jedno miejsce na materiały, testy i wyniki, z dostępem przypisywanym per osoba lub grupa i z dziennikiem zdarzeń pod spodem. Raport za miesiąc powstaje w trzech formatach jednym kliknięciem, zamiast być składanym ręcznie z kilku źródeł.
