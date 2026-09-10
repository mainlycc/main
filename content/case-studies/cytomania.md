---
slug: cytomania
naglowek: Jak przenieść grupę na Facebooku do serwisu, w którym da się cokolwiek znaleźć?
zajawka: Portal z cytatami filmowymi dla społeczności z Facebooka. Dodawanie, ocenianie, kolekcje i wyszukiwarka zamiast przewijania grupy w nieskończoność.
klient: Grupa facebookowa Cytaty filmowe
branza: Społeczności internetowe
obszar: Produkt społecznościowy
zakres: UX, kod, moderacja
rok: 2024
live: https://cytomania.pl
tagi: [Portal społecznościowy, Next.js, UGC]
technologie: [Next.js, React, TypeScript, shadcn/ui, Tailwind CSS]
hero_caption: Katalog cytatów · cytomania.pl
rezultaty:
  - v: 1
    l: wyszukiwarka zamiast przewijania osi czasu
  - v: 3
    l: działania użytkownika: dodawanie, ocenianie, kolekcje
  - v: 1
    l: panel moderacji dla osoby prowadzącej społeczność
dodatkowe:
  - Konta użytkowników pozwalają przypisać treść do autora.
  - Kolekcje działają jak prywatne listy, a nie jak kolejny folder zakładek.
  - Panel administratora pozwala reagować na zgłoszenia bez grzebania w bazie.
opinia:
  cytat:
  autor:
  rola:
cta: Masz społeczność na cudzej platformie i chcesz mieć ją u siebie? [Napisz do mnie](/kontakt). Najtrudniejsza część to nie kod, tylko wybór, które trzy rzeczy użytkownik ma móc zrobić.
obrazy:
  - slot: hero
    typ: screenshot
    opis: Katalog cytatów z kartami, ocenami i filtrem. Widok główny serwisu.
    zasada: Treści muszą być realnymi cytatami z serwisu. Bez dorysowanych liczb polubień, jeśli licznik pokazuje co innego.
    alt: Katalog cytatów Cytomanii z kartami i ocenami
    podpis: "Katalog: cytaty z ocenami i możliwością zapisania do kolekcji"
  - slot: proces-kolekcje
    typ: crop
    opis: Widok kolekcji użytkownika z kilkoma zapisanymi cytatami.
    zasada: Nazwy kolekcji weź z realnego konta testowego.
  - slot: proces-admin
    typ: crop
    opis: Wycinek panelu administratora z listą zgłoszonych treści.
    zasada: Bez wykresów aktywności i statystyk, których w panelu nie ma.
---

Cytomania wyrosła z grupy na Facebooku poświęconej cytatom filmowym. Grupa działała, ale miała wadę wpisaną w medium: treść, która pojawiła się dwa tygodnie temu, w praktyce przestaje istnieć.

Zbudowałem portal, w którym te same treści dają się wyszukać, ocenić i zebrać w kolekcje.

{{REZULTATY}}

## 01 / Wyzwanie · Oś czasu nie jest archiwum

Grupa na Facebooku świetnie nadaje się do rozmowy i fatalnie do gromadzenia. Nie ma sensownego szukania, nie ma kategorii, a najlepszy wpis sprzed roku leży pod tysiącem nowszych.

- Cytat sprzed miesiąca dało się odnaleźć tylko przypadkiem.
- Nie było sposobu, żeby zebrać własną listę ulubionych.
- Ocena treści kończyła się na reakcjach, które znikają razem z wpisem.
- Cała społeczność mieszkała na platformie, na którą jej właściciel nie ma wpływu.

> Grupa jest dobrym miejscem na rozmowę i złym miejscem na archiwum. Wszystko, co warto zachować, znika po tygodniu.

## 02 / Rozwiązanie · Trzy czynności i wyszukiwarka

Świadomie ograniczyłem zakres do trzech rzeczy, które użytkownik może zrobić: dodać cytat, ocenić cudzy, zapisać go do własnej kolekcji. Portal społecznościowy z dziesięcioma funkcjami zwykle nie ma żadnej używanej.

{{IMG:hero}}

### Wyszukiwarka jako główna funkcja

To jest rzecz, której grupa nie ma i nie będzie miała. Znalezienie konkretnego cytatu albo cytatów z jednego filmu jest tu podstawową czynnością, a nie efektem ubocznym przewijania.

{{CALLOUT: Kolekcje zamiast zakładek w przeglądarce | Własna lista zapisanych cytatów daje użytkownikowi powód, żeby wrócić. Bez tego serwis z treścią użytkowników jest miejscem, do którego się wchodzi raz.}}

### Moderacja bez zaglądania do bazy

Panel administratora pozwala osobie prowadzącej społeczność reagować na zgłoszenia i porządkować treści. Przy treściach dodawanych przez użytkowników to nie jest funkcja dodatkowa, tylko warunek działania serwisu.

## 03 / Rezultat · Społeczność z własnym archiwum

Cytomania daje społeczności to, czego grupa dać nie może: wyszukiwanie, kolekcje i trwałość treści. Trzy podstawowe czynności zamiast rozbudowanego portalu, którego nikt nie zdąży poznać.
