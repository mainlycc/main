---
slug: magia-podrozowania
naglowek: Jak GRUPA DE-PL zamknęła całą obsługę wycieczki w jednym systemie?
zajawka: CRM dla organizatora turystyki. Oferta, rezerwacja, płatność PayNow, umowa PDF, faktura w SaldeoSMART i polisa HDI w jednym przebiegu.
klient: GRUPA DE-PL, Magia Podróżowania
branza: Turystyka
obszar: Sprzedaż i obsługa posprzedażowa
zakres: UX, kod, baza danych, integracje
rok: 2025
live:
tagi: [CRM, Integracje, Supabase]
technologie: [Next.js, React, TypeScript, Supabase, PayNow, SaldeoSMART, HDI, Tailwind CSS]
hero_caption: Panel organizatora · Magia Podróżowania
rezultaty:
  - v: 9
    l: modułów obsługujących wycieczkę od oferty do polisy
  - v: 3
    l: integracje zewnętrzne: PayNow, SaldeoSMART, HDI
  - v: 2
    l: role z osobnym zakresem: organizator i koordynator
dodatkowe:
  - Wygląd strony oferty edytuje organizator, bez zgłoszenia do programisty.
  - Szablony umów są edytowalne, z placeholderami na dane wycieczki i klienta.
  - Przypomnienia o dopłacie wychodzą automatycznie, zamiast z listy do obdzwonienia.
opinia:
  cytat:
  autor:
  rola:
cta: Prowadzisz sprzedaż, w której po zamówieniu zaczyna się druga praca (umowa, faktura, polisa, przypomnienia)? [Napisz do mnie](/kontakt). To zwykle najtańszy fragment firmy do zautomatyzowania.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Panel organizatora, widok pojedynczej wycieczki z listą uczestników, statusem płatności i harmonogramem zaliczka plus dopłata.
    zasada: Dane uczestników zanonimizuj w bazie testowej przed zrzutem. Nie dorabiaj wykresu sprzedaży ani licznika przychodu, bo takiego widoku nie ma.
    alt: Panel organizatora Magii Podróżowania z listą uczestników i statusem płatności
    podpis: "Panel organizatora: uczestnicy, harmonogram płatności i stan rezerwacji dla jednej wycieczki"
  - slot: proces-oferta
    typ: screenshot
    opis: Publiczna strona wycieczki z galerią, programem dnia i formularzem rezerwacji. Widok mobilny obok desktopowego.
    zasada: Zdjęcia w galerii muszą być realnymi zdjęciami z oferty klienta, nie stockiem generowanym AI.
    alt: Formularz rezerwacji wycieczki z danymi uczestników
    podpis: "Rezerwacja online: dane kontaktowe, lista uczestników i przejście do płatności"
  - slot: proces-umowa
    typ: crop
    opis: Wycinek edytora szablonu umowy z widocznymi placeholderami typu nazwa wycieczki, dane klienta, kwota.
    zasada: Pokaż realny szablon HTML z placeholderami. Bez rozmycia i bez sztucznych podświetleń.
  - slot: proces-platnosc
    typ: crop
    opis: Wycinek widoku płatności: podział na zaliczkę i dopłatę, status transakcji PayNow.
    zasada: Kwoty ze środowiska testowego. Bez zielonych fajek i konfetti.
---

Magia Podróżowania to marka organizatora turystyki GRUPA DE-PL. Sprzedaż wycieczki wygląda tam inaczej niż sprzedaż produktu: po rezerwacji zaczyna się druga część pracy, czyli umowa, zaliczka, dopłata, faktura, polisa i komunikacja z uczestnikami przez kilka tygodni przed wyjazdem.

Zbudowałem system, który prowadzi wycieczkę przez cały ten cykl. Organizator tworzy ofertę, publikuje stronę, przyjmuje rezerwacje i płatności, generuje umowę, wystawia fakturę i obsługuje ubezpieczenie, nie wychodząc do innego narzędzia.

{{REZULTATY}}

## 01 / Wyzwanie · Jedna wycieczka rozsypana na siedem miejsc

Przy jednym wyjeździe da się to prowadzić ręcznie. Przy kilku równolegle zaczyna się szukanie: kto wpłacił zaliczkę, komu wysłano umowę, który uczestnik ma polisę, czy faktura już poszła. Każda z tych informacji mieszkała gdzie indziej, więc żeby odpowiedzieć na jedno pytanie klienta, trzeba było otworzyć trzy rzeczy.

- Oferta powstawała osobno, więc każda zmiana ceny albo programu wymagała poprawki w kilku miejscach.
- Płatności w ratach (zaliczka plus dopłata) trzeba było pilnować z listy i przypominać ręcznie.
- Umowy składano z szablonu w edytorze tekstu, wpisując dane uczestnika za każdym razem od nowa.
- Faktury i polisy obsługiwano w zewnętrznych systemach, bez powiązania z rezerwacją.

> W turystyce sprzedaż nie kończy się na przycisku "rezerwuję". Kończy się kilka tygodni później, po ostatniej dopłacie i ostatniej polisie.

## 02 / Rozwiązanie · Jeden panel prowadzący wycieczkę od oferty do polisy

Podstawą jest panel organizatora: wycieczka, ceny, liczba miejsc, harmonogram płatności, przypisany koordynator. Z tych samych danych powstaje publiczna strona oferty, więc nie ma drugiego miejsca, które trzeba pamiętać zaktualizować.

{{IMG:hero}}

### Strona oferty, którą organizator składa sam

Wygląd oferty jest edytowalny: galeria, program, sekcje informacyjne i formularz rezerwacji. Organizator zmienia opis wyjazdu bez zgłaszania tego programiście.

{{IMG:proces-oferta}}

### Płatności w ratach, bez pilnowania w kalendarzu

Rezerwacja przechodzi do bramki PayNow. System obsługuje podział na zaliczkę i dopłatę oraz sam wysyła przypomnienia o zbliżającym się terminie. Organizator patrzy na status, nie na wyciąg z konta.

{{CALLOUT: Umowa powstaje z szablonu, nie z kopiuj-wklej | Szablony umów są edytowalne w HTML i zawierają placeholdery na dane wycieczki i klienta. Wygenerowanie umowy dla nowego uczestnika to jedno kliknięcie, a nie przepisywanie danych do dokumentu.}}

### Faktury i polisy podpięte do rezerwacji

Faktury wystawiane są przez API SaldeoSMART, ubezpieczenia obsługuje integracja z HDI. Obie rzeczy startują z danych, które już są w rezerwacji, więc nie ma etapu przepisywania.

### Koordynator widzi tylko swoje wyjazdy

Osobny panel koordynatora daje dostęp do przypisanych wycieczek i ich uczestników, bez wglądu w resztę firmy. Komunikacja z uczestnikami idzie e-mailem przez SMTP, z szablonami i wysyłką masową.

## 03 / Rezultat · Odpowiedź na pytanie klienta zajmuje jedno spojrzenie

Organizator otwiera wycieczkę i widzi komplet: uczestników, wpłaty, umowy, faktury i polisy. Dziewięć rzeczy, które wcześniej żyły osobno, jest podpiętych do jednego rekordu. Nowa wycieczka nie oznacza nowego zestawu plików do pilnowania.
