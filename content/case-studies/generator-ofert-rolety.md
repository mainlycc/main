---
slug: generator-ofert-rolety
naglowek: Jak Rolety3miasto zamieniło wycenę z Excela na ofertę PDF gotową do wysłania?
zajawka: Generator ofert dla firmy roletowej. Handlowiec wybiera parametry, system liczy cenę i składa gotowy dokument PDF ze specyfikacją.
klient: Rolety3miasto
branza: Rolety i osłony okienne
obszar: Sprzedaż i wyceny
zakres: UX, kod, generowanie PDF
rok: 2024
live: https://oferty.rolety3miasto.pl
tagi: [Generator, Automatyzacja, Next.js]
technologie: [Next.js, TypeScript, React PDF, shadcn/ui, Tailwind CSS]
hero_caption: Konfigurator oferty · oferty.rolety3miasto.pl
rezultaty:
  - v: 1
    l: przejście od parametrów do gotowego PDF-a
  - v: 0
    l: ręcznych przeliczeń ceny po stronie handlowca
  - v: PDF
    l: format wyjściowy z pełną specyfikacją techniczną
dodatkowe:
  - Baza produktów i materiałów siedzi w systemie, więc zmiana cennika idzie w jednym miejscu.
  - Rabaty i promocje są częścią kalkulacji, a nie dopiskiem na końcu oferty.
  - Każda oferta wychodzi w tym samym układzie, niezależnie od tego, kto ją zrobił.
opinia:
  cytat:
  autor:
  rola:
cta: Twoi handlowcy składają oferty ręcznie w Wordzie albo Excelu? [Napisz do mnie](/kontakt). To zwykle pierwszy proces, który warto przenieść do narzędzia.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Konfigurator oferty: wybór produktu, wymiarów, materiału i wariantów, z widoczną kalkulacją ceny obok.
    zasada: Ceny i nazwy produktów muszą być realne albo pochodzić z cennika testowego klienta. Nie wpisuj efektownych okrągłych kwot.
    alt: Generator ofert Rolety3miasto z konfiguratorem parametrów i kalkulacją ceny
    podpis: "Konfigurator: parametry produktu i cena przeliczana na bieżąco"
  - slot: proces-pdf
    typ: screenshot
    opis: Wygenerowany dokument PDF otwarty w przeglądarce: nagłówek z danymi firmy, pozycje ze specyfikacją, podsumowanie ceny.
    zasada: Pokaż prawdziwy wygenerowany plik. Dane klienta w dokumencie zamień na fikcyjne przed zrzutem.
  - slot: proces-baza
    typ: crop
    opis: Wycinek widoku bazy produktów i materiałów z możliwością edycji ceny.
    zasada: Bez dorysowanych wykresów marży i bez paneli statystyk, których w aplikacji nie ma.
---

Rolety3miasto sprzedaje produkt, który praktycznie nigdy nie jest taki sam dwa razy. Inne wymiary, inny materiał, inny mechanizm, inny kolor. Każda wycena była więc osobnym ćwiczeniem z przeliczania i osobnym dokumentem składanym od zera.

Zbudowałem generator ofert, w którym handlowiec ustawia parametry, a system liczy cenę i składa gotowy dokument PDF ze specyfikacją.

{{REZULTATY}}

## 01 / Wyzwanie · Wycena robiona ręcznie kosztuje dwa razy

Ręczna wycena ma dwa koszty. Pierwszy to czas: przeliczenie, sprawdzenie w cenniku, przepisanie do dokumentu. Drugi jest gorszy, bo pojawia się dopiero po fakcie, kiedy okazuje się, że w ofercie była pomyłka albo że dwie oferty od tej samej firmy wyglądają zupełnie inaczej.

- Cena powstawała z arkusza i pamięci, więc pomyłka w jednym mnożeniu szła prosto do klienta.
- Dokument składano ręcznie, przez co oferta z poniedziałku i oferta z piątku wyglądały inaczej.
- Zmiana cennika oznaczała aktualizację w kilku miejscach naraz.
- Klient czekał na wycenę, zamiast dostać ją w trakcie rozmowy.

> Klient rzadko porównuje oferty pod kątem ceny w pierwszej minucie. Najpierw porównuje to, czy dokument wygląda na przygotowany, czy na sklecony.

## 02 / Rozwiązanie · Konfigurator, kalkulacja i dokument w jednym przebiegu

Narzędzie prowadzi przez parametry: produkt, wymiary, materiał, warianty wykonania. Kalkulacja liczy się na bieżąco z bazy produktów, a nie z arkusza na dysku handlowca.

{{IMG:hero}}

### Cennik żyje w jednym miejscu

Produkty, materiały i ceny są w systemie. Zmiana stawki wchodzi od razu do wszystkich nowych ofert, więc nie ma sytuacji, w której ktoś wycenia ze starej wersji arkusza.

{{CALLOUT: PDF jest wyjściem procesu, a nie osobnym zadaniem | Dokument powstaje z tych samych danych, na których liczyła się cena. Nie ma etapu przepisywania wyniku do szablonu, więc nie ma też miejsca na literówkę w kwocie.}}

### Rabaty jako część kalkulacji

System rabatów i promocji jest wbudowany w wyliczenie, zamiast być odręcznym dopiskiem na końcu. Dzięki temu na dokumencie widać, skąd wzięła się końcowa kwota.

## 03 / Rezultat · Oferta powstaje w trakcie rozmowy, nie po niej

Rolety3miasto ma narzędzie, w którym wycena i dokument to jedna czynność. Handlowiec ustawia parametry i wysyła gotowy PDF, a każda oferta wychodzi w tym samym układzie, niezależnie od tego, kto ją przygotował.
