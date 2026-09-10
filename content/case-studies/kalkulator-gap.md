---
slug: kalkulator-gap
naglowek: Jak sprzedawać ubezpieczenie GAP, którego klient nie umie sobie wycenić?
zajawka: Kalkulator ubezpieczenia GAP z pełnym procesem UX i front-endem. Klient podaje dane pojazdu i widzi składkę, zanim porozmawia z agentem.
klient: Business Care, ubezpieczenia
branza: Ubezpieczenia
obszar: Sprzedaż online
zakres: UX, UI, front-end
rok: 2025
live: https://gapauto.pl
tagi: [Kalkulator, InsurTech, Next.js]
technologie: [Next.js, React, TypeScript, shadcn/ui, Tailwind CSS]
hero_caption: Kalkulator składki · gapauto.pl
rezultaty:
  - v: 1
    l: ekran od danych pojazdu do wysokości składki
  - v: 0
    l: kontaktu z agentem potrzebnego do poznania ceny
  - v: API
    l: wyliczenie po stronie systemu ubezpieczyciela, nie w arkuszu
dodatkowe:
  - Formularz prowadzi przez parametry w kolejności, w jakiej klient je zna.
  - Wyliczenie idzie do API ubezpieczyciela, więc kwota jest tą, którą klient faktycznie zapłaci.
  - Interfejs działa tak samo na telefonie, gdzie zaczyna się większość takich wyszukiwań.
opinia:
  cytat:
  autor:
  rola:
cta: Sprzedajesz produkt, którego cena zależy od kilku parametrów i dlatego nie ma jej na stronie? [Napisz do mnie](/kontakt). Kalkulator zwykle zarabia na siebie szybciej niż kolejna podstrona z opisem.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Kalkulator GAP z wypełnionymi polami (wartość pojazdu, rok produkcji, okres ochrony) i wyliczoną składką.
    zasada: Kwota składki musi pochodzić z realnego przeliczenia. To case study o kalkulatorze, więc podmieniona liczba podważa wszystko inne.
    alt: Kalkulator ubezpieczenia GAP z wyliczoną składką
    podpis: "Kalkulator: parametry pojazdu i wyliczona składka na jednym ekranie"
  - slot: proces-mobile
    typ: screenshot
    opis: Ten sam kalkulator na ekranie telefonu, pokazujący, że formularz mieści się bez zoomowania.
    zasada: Prawdziwy zrzut z urządzenia albo z trybu mobilnego przeglądarki. Bez wklejania ekranu w renderowany model iPhone'a z odbiciami.
  - slot: proces-kroki
    typ: crop
    opis: Wycinek pokazujący kolejność pól formularza i sposób prowadzenia użytkownika przez parametry.
    zasada: Bez dorysowanych numerków przy polach, jeśli aplikacja ich nie ma.
---

Ubezpieczenie GAP pokrywa różnicę między wartością fakturową pojazdu a odszkodowaniem wypłaconym przy szkodzie całkowitej. Produkt jest sensowny, ale ma jedną wadę sprzedażową: prawie nikt nie umie sam oszacować, ile powinien za niego zapłacić.

Odpowiadałem za proces UX i front-end kalkulatora, który zamienia to pytanie w konkretną kwotę na ekranie.

{{REZULTATY}}

## 01 / Wyzwanie · Produkt bez ceny na stronie sprzedaje się gorzej niż produkt drogi

Składka GAP zależy od wartości pojazdu, jego wieku i okresu ochrony. Ponieważ tych parametrów jest kilka, wiele stron ubezpieczeniowych rezygnuje z podawania ceny i zastępuje ją formularzem kontaktowym. Klient, który dopiero sprawdza, czy go na to stać, w tym miejscu wychodzi.

- Kupujący nie wie, czy mówimy o kwocie rzędu kilkuset, czy kilku tysięcy złotych.
- Kontakt z agentem jest zbyt dużym zobowiązaniem jak na etap "sprawdzam, czy to ma sens".
- Większość takich wyszukiwań zaczyna się na telefonie, często przy salonie samochodowym.

> Formularz kontaktowy zamiast ceny działa jak zamknięte drzwi z napisem "zapytaj o klucz".

## 02 / Rozwiązanie · Jeden ekran od danych pojazdu do składki

Kalkulator prowadzi przez parametry w kolejności, w jakiej klient je zna: najpierw wartość pojazdu, potem rok, potem okres ochrony. Nic, czego trzeba szukać w dokumentach, nie stoi na początku formularza.

{{IMG:hero}}

### Wyliczenie z systemu ubezpieczyciela

Kwota nie pochodzi z uproszczonego wzoru wbudowanego w stronę, tylko z integracji z API ubezpieczeniowym. Klient widzi więc tę składkę, którą faktycznie zapłaci, a nie orientacyjny szacunek do zweryfikowania później.

{{CALLOUT: Telefon jest tu urządzeniem podstawowym, nie wersją zapasową | O GAP klienci pytają najczęściej w trakcie zakupu auta, czyli poza biurkiem. Formularz musi się mieścić na ekranie telefonu bez powiększania i przewijania w bok.}}

## 03 / Rezultat · Cena przestała być powodem do wyjścia ze strony

Business Care ma kalkulator, w którym klient dostaje wysokość składki od razu, bez kontaktu z agentem i bez wysyłania zapytania. Wyliczenie pochodzi z systemu ubezpieczyciela, więc rozmowa z klientem zaczyna się od decyzji, a nie od podawania ceny.
