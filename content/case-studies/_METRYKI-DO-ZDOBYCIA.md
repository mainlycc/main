# Metryki do zdobycia od klientów

## Po co ten plik

Case studies automation.house działają, bo w pasku liczb mają rezultaty biznesowe:
"20 godzin oszczędności miesięcznie na handlowca", "98,2% dokładności", "86% niższe koszty IT".
To są liczby, które klient zmierzył i podał.

Ja takich liczb dla większości projektów nie mam, więc w paskach są liczby sprawdzalne
z samego produktu: ilu użytkowników obsługuje system, ile ma ról, ile formatów eksportu,
ile podstron. To jest uczciwe i lepsze niż nic, ale słabsze niż rezultat biznesowy.

Nie wpisałem nigdzie liczb wymyślonych. Żaden "wzrost konwersji o 40%" w tych tekstach
nie istnieje i nie powinien się pojawić, dopóki ktoś go nie zmierzy.

## Jak to zdobyć

Napisać do klienta krótką wiadomość. Wzór:

> Cześć, opisuję nasz projekt jako case study na stronie.
> Miałbym jedno pytanie: czy dałoby się orientacyjnie powiedzieć, ile czasu
> [konkretna czynność] zajmowała wcześniej, a ile zajmuje teraz?
> Wystarczy szacunek. Jeśli wolisz, mogę opisać to bez nazwy firmy.

Pytanie o jedną liczbę ma dużo wyższą odpowiadalność niż prośba o "opinię o współpracy".
A przy okazji często dostaje się cytat, którego można użyć w sekcji opinii.

## Co pytać, projekt po projekcie

### akademia-wiedzy (Kamil Miącz)
- Ile czasu miesięcznie zajmowało układanie grafiku przed systemem, a ile teraz?
- Ile trwa domknięcie rozliczeń na koniec miesiąca?
- Czy zmieniła się liczba uczniów albo korepetytorów od wdrożenia?

### magia-podrozowania (GRUPA DE-PL)
- Ile czasu zajmowało przygotowanie umowy dla uczestnika przed systemem?
- Ile wycieczek obsłużono w systemie w pierwszym sezonie?
- Jaki procent płatności idzie teraz przez PayNow zamiast przelewem?

### airset-platforma (AIRSET)
- Ilu pracowników przeszło szkolenia w systemie?
- Ile szkoleń opublikowano?
- Czy raport miesięczny zastąpił coś, co robiło się ręcznie? Ile to zajmowało?

### jkterm-wizualizator (JK Term)
- Ile czasu zajmowała jedna wizualizacja w AutoCAD, a ile w generatorze?
- Ile wizualizacji powstało od wdrożenia?
- Ile wariantów produktu dało się dzięki temu dodać do katalogu?

To akurat najmocniejszy kandydat na twarde porównanie w całym portfolio.
Warto o to zapytać w pierwszej kolejności.

### generator-ofert-rolety (Rolety3miasto)
- Ile trwało przygotowanie oferty przed generatorem, a ile teraz?
- Ile ofert wychodzi miesięcznie?
- Czy zmienił się czas odpowiedzi na zapytanie klienta?

### kalkulator-gap (Business Care)
- Ile osób korzysta z kalkulatora miesięcznie?
- Jaki procent kończy wyliczenie?
- Ile zapytań o cenę przestało trafiać do agentów?

Uwaga: przy tym projekcie w notatkach jest analiza lejka pokazująca problem
z konwersją (505 wejść, 57 przejść dalej, 0 zakupów). Zanim wystawisz twarde liczby,
sprawdź aktualny stan. Lepiej zostawić pasek z liczbami produktowymi niż wystawić
metrykę, która wygląda źle.

### lease1-leasing (Lease1)
- Ilu użytkowników korzysta z kalkulatora?
- Ile wniosków przychodzi przez stronę miesięcznie?
- Jak rozkłada się ruch na trzy wersje językowe?

### prawkoczechy
- Jaki jest koszt pozyskania kontaktu z Google Ads?
- Jaki procent wejść kończy się kontaktem?
- Czy po wdrożeniu zmienił się koszt kliknięcia albo liczba zapytań?

### bcsc-ksiegowosc (Business Care SC)
- Ilu klientów przyszło ze strony?
- Ile osób korzysta z kalkulatora wyceny?

### elomoto-eco (Elomoto)
- Ile zapytań przychodzi przez formularz?
- Które podstrony ofertowe generują najwięcej kontaktów?

### audiogen
- Ile zapisów zebrała whitelista?

### qualibase
- Ilu kandydatów i ilu rekruterów jest w bazie?
- Ile kontaktów zakończyło się zatrudnieniem?

### cytomania, kulio-studio, milei-coin, music-pad, kreator-faktur, biblioteka-promptow
Projekty własne albo bez kontaktu do klienta. Tu wystarczą liczby produktowe,
które już są w tekstach. Dla biblioteki promptów da się dołożyć realny ruch
z Google Search Console, jeśli chcesz go pokazywać.

## Cytaty klientów

W żadnym case study nie ma opinii, bo nie mam prawdziwych. Pole `opinia.cytat`
jest wszędzie puste, więc sekcja się nie renderuje. Po zdobyciu cytatu wystarczy
wypełnić trzy pola w frontmatterze i przebudować:

```yaml
opinia:
  cytat: Treść wypowiedzi klienta.
  autor: Imię Nazwisko
  rola: Stanowisko, Firma
```

Cztery, pięć prawdziwych cytatów zrobi dla wiarygodności więcej niż wszystkie
liczby produktowe razem wzięte.
