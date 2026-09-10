---
slug: akademia-wiedzy
naglowek: Jak Akademia Wiedzy przestała prowadzić 865 uczniów w arkuszu kalkulacyjnym?
zajawka: System e-korepetycji dla 40 korepetytorów i 865 uczniów. Lekcje generują się z grafiku dostępności, rozliczenia liczą się same, rodzic płaci przez PayU.
klient: Akademia Wiedzy, Kamil Miącz
branza: Edukacja online
obszar: System operacyjny firmy
zakres: UX, kod, baza danych, płatności
rok: 2026
live: https://akademia-kamilmiacz.pl/
tagi: [Aplikacja webowa, EdTech, Supabase]
technologie: [Next.js, TypeScript, Supabase, PostgreSQL, PayU, Resend, Tailwind CSS]
hero_caption: Panel administratora · akademia-kamilmiacz.pl
rezultaty:
  - v: 865+
    l: uczniów prowadzonych w jednym systemie
  - v: 40+
    l: korepetytorów z własnym panelem i grafikiem
  - v: 9
    l: przedmiotów z osobnymi stawkami i przypisaniami
dodatkowe:
  - Nowy korepetytor wchodzi do systemu przez zaproszenie e-mail, bez ręcznego zakładania konta.
  - Rodzic dostaje link płatniczy PayU zamiast numeru konta w wiadomości.
  - Uczeń może zarezerwować pierwszy termin bez zakładania konta.
opinia:
  cytat:
  autor:
  rola:
cta: Prowadzisz firmę usługową, w której grafik, ludzie i rozliczenia siedzą w kilku arkuszach naraz? [Napisz do mnie](/kontakt). Zwykle po jednej rozmowie widać, który fragment warto zautomatyzować najpierw.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Panel administratora, widok listy uczniów z przypisanym korepetytorem, przedmiotem i statusem rozliczenia. Realny zrzut z aplikacji, szerokość 1600 px, obcięty do samej treści bez paska przeglądarki.
    zasada: Nazwiska zanonimizuj w samej aplikacji przed zrzutem (Jan K., Anna W.). Nie podmieniaj liczb w retuszu, nie dorysowuj wykresów ani KPI, których w aplikacji nie ma.
    alt: "Panel administratora Akademii Wiedzy z listą uczniów, przypisanym korepetytorem i statusem rozliczenia"
    podpis: "Panel administratora: uczniowie, przypisania i stan rozliczeń w jednym widoku"
  - slot: proces-dostepnosc
    typ: crop
    opis: Wycinek widoku grafiku dostępności korepetytora, siatka tygodniowa z zaznaczonymi slotami godzinowymi. Sam komponent, bez nawigacji bocznej.
    zasada: Zwykły zrzut, bez cieni i mockupów laptopa. Jeśli slotów jest mało, ustaw realny tydzień, nie wypełniaj siatki na siłę.
  - slot: proces-rozliczenia
    typ: crop
    opis: Wycinek modułu rozliczeń, lista odbytych lekcji z kwotą i przyciskiem wysyłki linku płatniczego.
    zasada: Kwoty zostaw takie, jakie są w bazie testowej. Bez czerwono-zielonych strzałek wzrostu.
---

Akademia Wiedzy uczy online uczniów szkół podstawowych i średnich w całej Polsce. Kiedy Kamil Miącz zgłosił się do mnie, firma miała ponad 40 korepetytorów, 865 uczniów i dziewięć przedmiotów w ofercie. Cała ta operacja stała na arkuszach i pamięci właściciela.

Zbudowałem wewnętrzny system, który przejął grafiki, przypisania uczniów do korepetytorów, generowanie lekcji i rozliczenia. Firma dostała jedno miejsce zamiast pięciu miejsc, w których dane musiały się zgadzać.

{{REZULTATY}}

## 01 / Wyzwanie · Grafik 40 osób nie mieści się w jednym arkuszu

Przy dziesięciu korepetytorach arkusz działa. Przy czterdziestu zaczyna się rozjeżdżać: ktoś zmienia dostępność w czwartek, ktoś inny pracuje na kopii sprzed tygodnia, a uczeń dostaje termin, który już nie istnieje. Rozliczenia były osobnym problemem, bo liczyło się je na koniec miesiąca ręcznie, z listy lekcji, która nie zawsze była kompletna.

- Planowanie lekcji na kolejny miesiąc zajmowało właścicielowi kilka wieczorów.
- Nie było jednego miejsca, w którym widać obłożenie konkretnego korepetytora.
- Nowi uczniowie zapisywali się przez wiadomości, więc pierwszy termin ustalało się w kilku turach.
- Faktury i należności wyliczano ręcznie, na podstawie odbytych lekcji spisanych po fakcie.

> Firma usługowa nie rośnie na tym, że właściciel szybciej klika w arkuszu. Rośnie wtedy, gdy grafik przestaje wymagać jego uwagi.

## 02 / Rozwiązanie · Trzy role i baza, która sama tworzy lekcje

System obsługuje trzy role, każda widzi inny wycinek firmy. Administrator zarządza uczniami, korepetytorami, przedmiotami, stawkami i przypisaniami. Korepetytor ma swój grafik, kalendarz, listę uczniów i raportowanie godzin. Gość, czyli osoba, która dopiero pyta o zajęcia, ma publiczny kalendarz z wolnymi terminami.

{{IMG:hero}}

### Korepetytor ustawia dostępność raz, nie co miesiąc

Zamiast wpisywać konkretne terminy, korepetytor definiuje tygodniową dostępność. Administrator przypisuje do tych slotów uczniów. Resztę robi baza: funkcje i triggery w PostgreSQL tworzą sesje lekcyjne na miesiące wprzód, bez udziału człowieka.

{{CALLOUT: Logika generowania lekcji siedzi w bazie, nie w aplikacji | Lekcje powstają w PostgreSQL, więc powstają tak samo niezależnie od tego, czy zmiana przyszła z panelu administratora, czy z panelu korepetytora. Jedno miejsce z regułami zamiast dwóch, które muszą być zgodne.}}

### Rozliczenia liczą się z tego, co faktycznie się odbyło

Moduł rozliczeń nalicza należność na podstawie odbytych lekcji i stawki przypisanej do przedmiotu. Zamiast numeru konta w wiadomości rodzic dostaje link płatniczy PayU. Właściciel widzi, kto zapłacił, bez zaglądania do bankowości.

### Nowy uczeń rezerwuje termin bez zakładania konta

Publiczny kalendarz pokazuje wolne sloty. Rezerwacja kończy się automatycznym potwierdzeniem e-mail przez Resend. Pierwszy kontakt przestał wymagać wymiany kilku wiadomości.

### Każdy widzi dokładnie tyle, ile powinien

Dostęp do danych kontrolują polityki Row Level Security w Supabase, więc ograniczenie działa na poziomie zapytania do bazy, a nie na poziomie widoku w interfejsie. Korepetytor nie zobaczy uczniów innego korepetytora nawet wtedy, gdy trafi na adres bezpośrednio.

## 03 / Rezultat · Firma zajmuje się uczeniem, nie administracją

Grafik, przypisania i rozliczenia dla 865 uczniów działają w jednym systemie, a lekcje na kolejne miesiące powstają automatycznie z tygodniowej dostępności korepetytorów. Praca, którą właściciel wykonywał wieczorami w arkuszu, jest teraz efektem ubocznym tego, że ktoś zaznaczył wolne godziny.
