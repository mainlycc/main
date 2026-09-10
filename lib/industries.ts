import type { LandingPageData } from "./landing";

export const industries: LandingPageData[] = [
  {
    slug: "biura-rachunkowe",
    navLabel: "Biura rachunkowe",
    metaTitle: "Strona i system dla biura rachunkowego | Mainly",
    metaDescription:
      "Strona internetowa i panel klienta dla biura rachunkowego: bezpieczna wymiana dokumentów, przypomnienia o terminach, wycena usług online.",
    eyebrow: "Branża",
    h1: "Strona internetowa i system dla biura rachunkowego",
    teaser:
      "Panel klienta, wymiana dokumentów i przypomnienia o terminach zamiast maili z załącznikami.",
    intro:
      "Biuro rachunkowe potrzebuje od strony internetowej dwóch rzeczy: wzbudzenia zaufania u przedsiębiorcy, który powierza komuś swoje finanse, oraz odciążenia zespołu z obsługi dokumentów. Największa oszczędność czasu nie leży w samej stronie, tylko w panelu, w którym klient sam wrzuca dokumenty i sam sprawdza status rozliczenia.",
    sections: [
      {
        heading: "Co musi zawierać strona biura rachunkowego",
        body: "Przedsiębiorca wybierający księgowość porównuje zwykle trzy–cztery biura i decyduje na podstawie tego, czy rozumie, co dostanie i ile to kosztuje. Brak cennika to najczęstszy powód, dla którego zapytanie idzie do konkurencji.",
        bullets: [
          "Jasny zakres usług rozbity na formy działalności (JDG, spółka z o.o., pełna księgowość)",
          "Widełki cenowe albo kalkulator — bez tego zapytanie trafia tam, gdzie ceny są",
          "Certyfikaty, uprawnienia i ubezpieczenie OC widoczne, nie ukryte w stopce",
          "Zespół z imionami i twarzami — powierzasz komuś finanse firmy",
          "Formularz wyceny pytający o formę działalności i liczbę dokumentów",
          "Treści o zmianach w przepisach — najlepsze źródło ruchu z Google w tej branży",
        ],
      },
      {
        heading: "Panel klienta, który realnie oszczędza czas",
        body: "W typowym biurze największym pożeraczem czasu jest obieg dokumentów: maile z załącznikami, telefony z pytaniem „czy dostaliście”, przypomnienia o brakujących fakturach. Panel klienta zdejmuje to z zespołu — klient wrzuca dokumenty w jedno miejsce, widzi, czego brakuje, i sam pobiera deklaracje.",
        bullets: [
          "Bezpieczne wrzucanie dokumentów z automatycznym potwierdzeniem",
          "Status rozliczenia widoczny dla klienta bez dzwonienia do biura",
          "Automatyczne przypomnienia o terminach i brakujących dokumentach",
          "Udostępnianie deklaracji i zestawień do pobrania",
          "Integracja z programem księgowym, jeśli udostępnia API",
        ],
      },
    ],
    faq: [
      {
        question: "Ile kosztuje strona dla biura rachunkowego?",
        answer:
          "Strona z ofertą, cennikiem i formularzem wyceny mieści się w pakiecie od 2 900 zł netto. Wersja z blogiem i rozbudowanym kalkulatorem — od 4 900 zł. Panel klienta z wymianą dokumentów to osobne wdrożenie od 9 900 zł.",
      },
      {
        question: "Czy panel klienta jest zgodny z RODO?",
        answer:
          "Dane trzymam w bazie na serwerach w Unii Europejskiej, dostęp jest kontrolowany rolami, a operacje logowane. Przygotowuję też rejestr czynności i informacje potrzebne do polityki prywatności, ale ostateczna ocena zgodności należy do Twojego inspektora lub prawnika.",
      },
      {
        question: "Czy da się to połączyć z naszym programem księgowym?",
        answer:
          "Jeśli program udostępnia API lub eksport plików — tak. Sprawdzam dokumentację przed wyceną, żeby nie obiecywać integracji, która okaże się niemożliwa.",
      },
    ],
    relatedProjects: ["bcsc-ksiegowosc", "kreator-faktur"],
    relatedLinks: [
      {
        href: "/uslugi/systemy-dla-firm",
        label: "Systemy i CRM na zamówienie",
        description: "Panel klienta i obieg dokumentów.",
      },
      {
        href: "/uslugi/strony-internetowe",
        label: "Tworzenie stron internetowych",
        description: "Strona z cennikiem i formularzem wyceny.",
      },
    ],
  },
  {
    slug: "gabinety-stomatologiczne",
    navLabel: "Gabinety stomatologiczne",
    metaTitle: "Strona internetowa dla dentysty i gabinetu | Mainly",
    metaDescription:
      "Strona dla gabinetu stomatologicznego z rezerwacją wizyt online, cennikiem zabiegów i przypomnieniami SMS. Mniej telefonów, mniej pustych terminów.",
    eyebrow: "Branża",
    h1: "Strona internetowa dla gabinetu stomatologicznego",
    teaser:
      "Rezerwacja wizyt online i automatyczne przypomnienia zamiast telefonów do recepcji.",
    intro:
      "Pacjent szukający dentysty sprawdza trzy rzeczy: czy gabinet jest blisko, ile kosztuje zabieg i czy da się umówić bez dzwonienia. Strona, która odpowiada na wszystkie trzy, wygrywa z ładniejszą stroną, która każe zadzwonić w godzinach pracy recepcji. Rezerwacja online to w tej branży najmocniejszy element konwersji.",
    sections: [
      {
        heading: "Co przekonuje pacjenta do wyboru gabinetu",
        body: "W stomatologii decyzja jest w dużej mierze emocjonalna — pacjent szuka poczucia bezpieczeństwa. Zdjęcia realnego wnętrza i realnego zespołu robią więcej niż stockowe zdjęcia idealnych uśmiechów.",
        bullets: [
          "Rezerwacja wizyty online, dostępna też wieczorem i w weekend",
          "Cennik zabiegów — choćby widełkowy, z zaznaczeniem, od czego zależy cena",
          "Zdjęcia gabinetu i zespołu, nie zdjęcia z banku zdjęć",
          "Opis zabiegów językiem pacjenta, nie nomenklaturą medyczną",
          "Efekty leczenia (przed/po) tam, gdzie przepisy na to pozwalają",
          "Dojazd, parking i najbliższy przystanek — realne pytania pacjenta",
          "Informacja o znieczuleniu i o tym, jak wygląda pierwsza wizyta",
        ],
      },
      {
        heading: "System rezerwacji, który zmniejsza liczbę pustych terminów",
        body: "Nieodwołane wizyty to w gabinecie czysta strata. System rezerwacji z automatycznym przypomnieniem SMS i e-mail dzień przed wizytą zauważalnie ogranicza liczbę pacjentów, którzy się nie pojawiają, a możliwość samodzielnego przełożenia terminu zdejmuje pracę z recepcji.",
        bullets: [
          "Kalendarz z dostępnością per lekarz i per typ zabiegu",
          "Automatyczne przypomnienia SMS i e-mail przed wizytą",
          "Samodzielne przekładanie i odwoływanie terminu przez pacjenta",
          "Lista rezerwowa na zwolnione terminy",
          "Formularz ankiety medycznej wypełniany przed wizytą",
        ],
      },
    ],
    faq: [
      {
        question: "Ile kosztuje strona dla gabinetu stomatologicznego?",
        answer:
          "Strona z ofertą, cennikiem i formularzem kontaktowym zaczyna się od 2 900 zł netto. Wersja z blogiem i rozbudowanym opisem zabiegów — od 4 900 zł. System rezerwacji wizyt z przypomnieniami to osobny moduł wyceniany indywidualnie.",
      },
      {
        question: "Czy mogę publikować zdjęcia przed i po leczeniu?",
        answer:
          "Przepisy o reklamie usług medycznych w Polsce są w tym zakresie restrykcyjne i bywają różnie interpretowane. Technicznie przygotuję galerię z odpowiednim oznaczeniem i zgodami pacjentów, ale zakres publikacji warto skonsultować z prawnikiem — nie jestem prawnikiem i nie zastąpię takiej opinii.",
      },
      {
        question: "Czy rezerwacja połączy się z naszym systemem gabinetowym?",
        answer:
          "Jeśli używany system ma API — tak. Jeśli nie, rezerwacja może działać jako osobny moduł z eksportem do kalendarza, żeby recepcja miała jedno miejsce z terminami.",
      },
    ],
    relatedProjects: [],
    relatedLinks: [
      {
        href: "/uslugi/strony-internetowe",
        label: "Tworzenie stron internetowych",
        description: "Strona gabinetu z cennikiem i formularzem.",
      },
      {
        href: "/uslugi/systemy-dla-firm",
        label: "System rezerwacji",
        description: "Kalendarz wizyt z przypomnieniami.",
      },
    ],
  },
  {
    slug: "kancelarie-prawne",
    navLabel: "Kancelarie prawne",
    metaTitle: "Strona internetowa dla kancelarii prawnej | Mainly",
    metaDescription:
      "Strona dla kancelarii, która buduje zaufanie i pozyskuje zapytania: specjalizacje, zespół, treści eksperckie i bezpieczny kontakt z klientem.",
    eyebrow: "Branża",
    h1: "Strona internetowa dla kancelarii prawnej",
    teaser:
      "Specjalizacje, dowody kompetencji i treści eksperckie — najskuteczniejszy kanał pozyskiwania klientów w tej branży.",
    intro:
      "Klient szukający prawnika ocenia kompetencje, których nie potrafi zweryfikować merytorycznie. Ocenia więc sygnały zastępcze: specjalizację, konkretne doświadczenie, czytelność języka i to, czy kancelaria potrafi wytłumaczyć problem prosto. Strona kancelarii ma za zadanie dostarczyć te sygnały i zamienić je w kontakt.",
    sections: [
      {
        heading: "Osiem elementów, które budują zaufanie",
        body: "Ogólna strona „kancelaria prawna, pomoc we wszystkich sprawach” nie konwertuje i nie rankuje. Wygrywa specjalizacja — również w Google, gdzie klient szuka nie prawnika, tylko rozwiązania swojego konkretnego problemu.",
        bullets: [
          "Osobne podstrony dla każdej specjalizacji, nie jedna lista usług",
          "Sylwetki prawników z wykształceniem, uprawnieniami i publikacjami",
          "Opisane sprawy i obszary doświadczenia, na ile pozwala tajemnica zawodowa",
          "Wyjaśnienie modelu rozliczeń — stawka godzinowa, ryczałt, success fee",
          "Treści eksperckie odpowiadające na realne pytania klientów",
          "Bezpieczny formularz kontaktowy z informacją o poufności",
          "Wersja językowa, jeśli obsługujesz klientów zagranicznych",
          "Adres, mapa i informacja o możliwości konsultacji online",
        ],
      },
      {
        heading: "Blog ekspercki jako główny kanał pozyskiwania",
        body: "W branży prawnej treść jest najskuteczniejszym kanałem pozyskiwania klientów. Osoba z problemem najpierw szuka odpowiedzi, a dopiero potem prawnika — i najczęściej wybiera tego, którego artykuł przeczytała. Jeden dobrze napisany tekst o konkretnym problemie potrafi pracować latami.",
      },
    ],
    faq: [
      {
        question: "Czy strona kancelarii może zawierać ceny?",
        answer:
          "Zasady etyki zawodowej ograniczają reklamę usług prawnych, ale informowanie o modelu rozliczeń i orientacyjnych widełkach jest zwykle dopuszczalne. Zakres warto potwierdzić z radą, do której należysz — jako wykonawca przygotuję dowolny wariant, ale nie zastąpię opinii samorządu.",
      },
      {
        question: "Ile kosztuje strona dla kancelarii?",
        answer:
          "Strona z podstronami specjalizacji, sylwetkami zespołu i formularzem kontaktowym zaczyna się od 4 900 zł netto — ze względu na liczbę podstron zwykle nie mieści się w pakiecie podstawowym. Wersja z blogiem i wielojęzycznością wyceniana indywidualnie.",
      },
      {
        question: "Czy formularz kontaktowy jest bezpieczny dla danych klienta?",
        answer:
          "Formularz działa po HTTPS, ma ochronę antybotową, a treść trafia bezpośrednio na skrzynkę kancelarii bez przechowywania na serwerze pośredniczącym. Dla spraw wymagających wyższego poziomu poufności rekomenduję dodatkowo panel z logowaniem zamiast zwykłego formularza.",
      },
    ],
    relatedProjects: [],
    relatedLinks: [
      {
        href: "/uslugi/strony-internetowe",
        label: "Tworzenie stron internetowych",
        description: "Strona kancelarii z podstronami specjalizacji.",
      },
      {
        href: "/uslugi/automatyzacja-procesow",
        label: "Automatyzacja dokumentów",
        description: "Generowanie umów i pism z formularza.",
      },
    ],
  },
  {
    slug: "biura-podrozy",
    navLabel: "Biura podróży",
    metaTitle: "System rezerwacji dla biura podróży | Mainly",
    metaDescription:
      "Strona i system rezerwacji dla biura podróży: oferty wyjazdów, zapisy online, płatności i zaliczki, panel uczestnika. Case study Magia Podróżowania.",
    eyebrow: "Branża",
    h1: "Strona i system rezerwacji dla biura podróży",
    teaser:
      "Zapisy na wyjazd online z zaliczką i dokumentami — zamiast obiegu maili i tabelek.",
    intro:
      "Biuro podróży traci najwięcej czasu nie na sprzedaży, lecz na obsłudze zapisanych uczestników: zbieraniu danych, pilnowaniu zaliczek, wysyłaniu dokumentów i odpowiadaniu na te same pytania. System rezerwacji przenosi tę obsługę na stronę — klient zapisuje się sam, płaci online i widzi wszystko w swoim panelu.",
    sections: [
      {
        heading: "Co daje system zapisów online",
        body: "Zbudowałem taki system dla biura Magia Podróżowania — z zapisami, płatnościami PayNow i panelem uczestnika. Największa zmiana nie polega na wygodzie klienta, tylko na tym, że dane wpisuje raz i od razu poprawnie, a biuro przestaje je przepisywać.",
        bullets: [
          "Katalog wyjazdów z terminami, dostępnością miejsc i programem dnia",
          "Zapisy online z formularzem uczestnika i danymi do umowy",
          "Płatności zaliczek i dopłat online, z automatycznym potwierdzeniem",
          "Panel uczestnika: dokumenty, harmonogram, informacje przed wyjazdem",
          "Automatyczne przypomnienia o terminach dopłat",
          "Lista uczestników i raporty po stronie biura",
        ],
      },
      {
        heading: "Strona, która sprzedaje wyjazd",
        body: "Zdjęcia i opisy mają zadanie sprzedażowe, ale decyzja zapada zwykle przy szczegółach: co dokładnie jest w cenie, jak wygląda dzień po dniu, kto prowadzi wyjazd i co się dzieje, gdy trzeba zrezygnować. Strona, która odpowiada na to wprost, generuje mniej telefonów i więcej zapisów.",
      },
    ],
    faq: [
      {
        question: "Czy system obsłuży płatności online?",
        answer:
          "Tak. Integruję najczęściej PayNow, Przelewy24 lub Stripe — łącznie z obsługą zaliczek, dopłat i automatycznych potwierdzeń. Wybór operatora zależy od prowizji i tego, czy potrzebujesz płatności ratalnych.",
      },
      {
        question: "Ile kosztuje system rezerwacji dla biura podróży?",
        answer:
          "Strona z katalogiem wyjazdów i formularzem zapisu zaczyna się od 4 900 zł netto. Pełny system z płatnościami online, panelem uczestnika i obsługą dokumentów to wdrożenie od 9 900 zł, zwykle w przedziale 15–40 tys. zł.",
      },
      {
        question: "Czy poradzi sobie z sezonowymi skokami ruchu?",
        answer:
          "Tak. Strony i systemy hostuję na infrastrukturze skalującej się automatycznie, więc nagły ruch po publikacji nowej oferty nie kładzie serwisu ani nie wymaga zmiany planu hostingowego z wyprzedzeniem.",
      },
    ],
    relatedProjects: ["magia-podrozowania", "prawkoczechy"],
    relatedLinks: [
      {
        href: "/uslugi/systemy-dla-firm",
        label: "Systemy na zamówienie",
        description: "Rezerwacje, płatności i panel uczestnika.",
      },
      {
        href: "/projekty/magia-podrozowania",
        label: "Case study: Magia Podróżowania",
        description: "System rezerwacji z płatnościami online.",
      },
    ],
  },
  {
    slug: "kluby-i-akademie-sportowe",
    navLabel: "Kluby i akademie sportowe",
    metaTitle: "System dla klubu i akademii sportowej | Mainly",
    metaDescription:
      "System zarządzania akademią sportową: zapisy zawodników, składki, obecności, komunikacja z rodzicami i grafik treningów. Case study Football Academy.",
    eyebrow: "Branża",
    h1: "System zarządzania klubem i akademią sportową",
    teaser:
      "Zapisy, składki, obecności i komunikacja z rodzicami w jednym miejscu zamiast w arkuszu i na grupie.",
    intro:
      "Akademia sportowa prowadzi zwykle kilkanaście grup, kilkuset zawodników i comiesięczne składki — a obsługuje to arkuszem, grupą na komunikatorze i pamięcią trenerów. System zbiera to w jedno miejsce: rodzic zapisuje dziecko i płaci online, trener odhacza obecność z telefonu, a zarząd widzi, kto zalega ze składką.",
    sections: [
      {
        heading: "Co obejmuje system dla akademii",
        body: "Zbudowałem taki system dla Football Academy. Punktem wyjścia było proste pytanie: ile godzin miesięcznie zajmuje ściąganie zaległych składek i odpowiadanie rodzicom na pytanie, czy trening się odbędzie.",
        bullets: [
          "Zapisy zawodników z danymi, zgodami i oświadczeniami rodziców",
          "Składki miesięczne z płatnością online i automatycznymi przypomnieniami",
          "Lista obecności odhaczana przez trenera z telefonu",
          "Grafik treningów z powiadomieniem o zmianie lub odwołaniu",
          "Panel rodzica: płatności, obecności, informacje o grupie",
          "Zapisy na turnieje, obozy i wydarzenia dodatkowe",
          "Raporty frekwencji i rozliczeń dla zarządu",
        ],
      },
      {
        heading: "Strona, która pozyskuje nowych zawodników",
        body: "Rodzic szukający zajęć dla dziecka porównuje kluby w okolicy i decyduje w kilka minut. Wygrywa ten, u którego widzi terminy grup wiekowych, cenę, lokalizację i możliwość zapisania się na trening próbny bez dzwonienia.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje system dla akademii sportowej?",
        answer:
          "Strona klubu z opisem grup i formularzem zapisu na trening próbny zaczyna się od 2 900 zł netto. System z obsługą składek, obecności i panelem rodzica to wdrożenie od 9 900 zł, zwykle w przedziale 15–35 tys. zł.",
      },
      {
        question: "Czy trenerzy poradzą sobie z obsługą?",
        answer:
          "Panel trenera projektuję pod jeden scenariusz: wejść z telefonu i odhaczyć obecność w kilkanaście sekund. Po wdrożeniu przeprowadzam krótkie szkolenie, a w cenie jest 14 dni na poprawki, gdy coś okaże się niewygodne w praktyce.",
      },
      {
        question: "Czy rodzice mogą płacić składki online?",
        answer:
          "Tak, przez operatora płatności z automatycznym przypisaniem wpłaty do zawodnika. System sam wysyła przypomnienie o zbliżającym się terminie i o zaległości — to zwykle największa oszczędność czasu w całym wdrożeniu.",
      },
    ],
    relatedProjects: ["football-academy", "akademia-wiedzy"],
    relatedLinks: [
      {
        href: "/uslugi/systemy-dla-firm",
        label: "Systemy na zamówienie",
        description: "Składki, obecności i panel rodzica.",
      },
      {
        href: "/projekty/football-academy",
        label: "Case study: Football Academy",
        description: "System zarządzania akademią piłkarską.",
      },
    ],
  },
  {
    slug: "leasing-i-finanse",
    navLabel: "Leasing i finanse",
    metaTitle: "Aplikacja webowa dla firmy leasingowej | Mainly",
    metaDescription:
      "Platformy i kalkulatory dla firm leasingowych i pośredników finansowych: wnioski online, symulacje rat, obieg dokumentów. Case study Lease1.",
    eyebrow: "Branża",
    h1: "Aplikacja webowa dla firmy leasingowej i pośrednika finansowego",
    teaser:
      "Kalkulator rat, wniosek online i obieg dokumentów zamiast wymiany skanów mailem.",
    intro:
      "W leasingu i pośrednictwie finansowym o wyniku decyduje szybkość obsługi wniosku. Klient, który musi czekać dwa dni na symulację raty, w tym czasie dostanie ofertę od trzech konkurentów. Kalkulator liczący ratę na stronie i wniosek składany online skracają ten cykl z dni do minut.",
    sections: [
      {
        heading: "Co buduję dla firm z tej branży",
        body: "Zrealizowałem platformę dla Lease1 oraz kalkulator ubezpieczenia GAP. W obu przypadkach sedno było to samo: przenieść liczenie i zbieranie danych z rozmowy handlowej na stronę.",
        bullets: [
          "Kalkulator raty leasingowej z parametrami wkładu, okresu i wykupu",
          "Wniosek online z walidacją danych i przesyłaniem dokumentów",
          "Panel klienta ze statusem wniosku i harmonogramem spłat",
          "Panel handlowca z kolejką wniosków i historią kontaktu",
          "Automatyczne generowanie ofert i dokumentów w PDF",
          "Integracje z systemami scoringowymi i bazami pojazdów",
        ],
      },
      {
        heading: "Kalkulator jako narzędzie pozyskiwania klientów",
        body: "Kalkulator to w tej branży najskuteczniejsza pojedyncza funkcja na stronie. Osoba licząca ratę deklaruje realne zainteresowanie, więc kontakt zebrany na tym etapie jest dużo wartościowszy niż zapytanie z ogólnego formularza. Dodatkowo kalkulatory zbierają linki i ruch organiczny latami.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje kalkulator finansowy na stronę?",
        answer:
          "Kalkulator z jednym zestawem parametrów i formularzem kontaktowym to zwykle 4 900–12 000 zł netto. Kalkulator zintegrowany z tabelami prowizji, bazą pojazdów i generowaniem oferty PDF wyceniam indywidualnie.",
      },
      {
        question: "Czy aplikacja spełni wymogi bezpieczeństwa danych finansowych?",
        answer:
          "Buduję z szyfrowaniem transmisji, kontrolą dostępu opartą na rolach i logowaniem operacji, a dane trzymam na serwerach w UE. Przy wymogach regulacyjnych specyficznych dla Twojej instytucji zakres uzgadniamy przed wdrożeniem — nie deklaruję zgodności, której nie mogę zweryfikować.",
      },
      {
        question: "Czy da się to połączyć z naszym systemem sprzedażowym?",
        answer:
          "Tak, jeśli system udostępnia API. Sprawdzam dokumentację na etapie wyceny, żeby integracja nie okazała się niespodzianką w połowie projektu.",
      },
    ],
    relatedProjects: ["lease1-leasing", "kalkulator-gap"],
    relatedLinks: [
      {
        href: "/uslugi/aplikacje-webowe",
        label: "Aplikacje webowe",
        description: "Wnioski online i panele klienta.",
      },
      {
        href: "/projekty/lease1-leasing",
        label: "Case study: Lease1",
        description: "Platforma dla firmy leasingowej.",
      },
    ],
  },
  {
    slug: "producenci-i-przemysl",
    navLabel: "Producenci i przemysł",
    metaTitle: "Konfigurator produktu i strona dla producenta | Mainly",
    metaDescription:
      "Konfiguratory produktów, wizualizatory i generatory ofert dla producentów. Klient sam składa produkt i pobiera wycenę. Case study JK Term.",
    eyebrow: "Branża",
    h1: "Konfigurator produktu i generator ofert dla producenta",
    teaser:
      "Klient sam składa produkt z opcji, widzi cenę i pobiera ofertę — handlowiec dostaje gotowe zapytanie.",
    intro:
      "Producent z konfigurowalnym asortymentem traci czas handlowców na liczenie tych samych wycen w arkuszu. Konfigurator produktu przenosi to na stronę: klient wybiera parametry, widzi wizualizację i cenę, a firma dostaje zapytanie z kompletem danych zamiast maila „proszę o ofertę na rolety”.",
    sections: [
      {
        heading: "Konfiguratory i wizualizatory, które zbudowałem",
        body: "Dla JK Term powstał wizualizator grzejników pokazujący produkt w kontekście wnętrza, a dla producenta rolet — generator ofert liczący cenę na podstawie wymiarów i wykończenia. Oba rozwiązują ten sam problem: skrócić drogę od zainteresowania do konkretnej wyceny.",
        bullets: [
          "Wybór parametrów produktu z natychmiastowym przeliczeniem ceny",
          "Wizualizacja produktu w wariantach kolorystycznych i wymiarowych",
          "Generowanie oferty w PDF do pobrania i wysyłki",
          "Zapytanie trafiające do handlowca z kompletem parametrów",
          "Cenniki i marże zarządzane z panelu, bez ingerencji w kod",
          "Wersja dla dystrybutorów z indywidualnymi rabatami",
        ],
      },
      {
        heading: "Strona producenta a strona sklepu",
        body: "Producent zwykle nie sprzedaje bezpośrednio końcowemu klientowi, więc celem strony nie jest koszyk, tylko dwie rzeczy: przekonać projektanta lub wykonawcę, że produkt spełnia wymagania, oraz zebrać zapytanie handlowe. Karty produktów z pełną specyfikacją i plikami do pobrania robią tu więcej niż rozbudowany katalog.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje konfigurator produktu?",
        answer:
          "Prosty konfigurator z kilkoma parametrami i wyceną to zwykle 8 000–20 000 zł netto. Konfigurator z wizualizacją 3D, wieloma grupami produktów i integracją z cennikiem — 25–60 tys. zł. Wycena zależy głównie od złożoności reguł cenowych.",
      },
      {
        question: "Kto będzie aktualizował ceny i produkty?",
        answer:
          "Ty. Cenniki, warianty i reguły przeliczania siedzą w panelu administracyjnym, a nie w kodzie — zmiana cennika nie wymaga kontaktu ze mną ani wdrożenia nowej wersji.",
      },
      {
        question: "Czy konfigurator zadziała na telefonie?",
        answer:
          "Tak. Interfejs projektuję responsywnie, z osobnym układem dla małych ekranów — w praktyce spora część zapytań przychodzi z telefonu, często prosto z placu budowy lub od wykonawcy u klienta.",
      },
    ],
    relatedProjects: ["jkterm-wizualizator", "generator-ofert-rolety"],
    relatedLinks: [
      {
        href: "/uslugi/sklepy-i-platformy-b2b",
        label: "Platformy B2B",
        description: "Sprzedaż do dystrybutorów i wykonawców.",
      },
      {
        href: "/projekty/jkterm-wizualizator",
        label: "Case study: JK Term",
        description: "Wizualizator grzejników z AI.",
      },
    ],
  },
  {
    slug: "szkoly-i-edukacja",
    navLabel: "Szkoły i edukacja",
    metaTitle: "Platforma e-learningowa dla szkoły | Mainly",
    metaDescription:
      "Platformy e-learningowe i systemy zapisów dla szkół, kursów i korepetycji: lekcje online, płatności, panel ucznia. Case study Akademia Wiedzy.",
    eyebrow: "Branża",
    h1: "Platforma e-learningowa dla szkoły i firmy szkoleniowej",
    teaser:
      "Zapisy, płatności i materiały w jednym miejscu zamiast arkusza, dysku i przelewów sprawdzanych ręcznie.",
    intro:
      "Szkoła językowa, firma szkoleniowa i centrum korepetycji mają ten sam problem: zapisy w arkuszu, materiały na dysku, płatności sprawdzane ręcznie i komunikacja rozproszona po mailach. Platforma e-learningowa zbiera to w jedno miejsce — uczeń zapisuje się i płaci online, ma materiały i harmonogram w panelu, a szkoła widzi obłożenie grup.",
    sections: [
      {
        heading: "Co obejmuje platforma",
        body: "Dla Akademii Wiedzy zbudowałem system e-korepetycji z zapisami i płatnościami PayU. Zakres dobiera się do modelu: inaczej wygląda platforma z kursami na żądanie, inaczej system zapisów na zajęcia w stałych grupach.",
        bullets: [
          "Katalog kursów i zajęć z terminami oraz dostępnością miejsc",
          "Zapisy online z płatnością i automatycznym potwierdzeniem",
          "Panel ucznia: materiały, harmonogram, postępy, faktury",
          "Panel lektora: grupy, obecności, materiały do udostępnienia",
          "Lekcje online z integracją wideokonferencji",
          "Testy i zadania sprawdzane automatycznie",
          "Raporty obłożenia grup i przychodów",
        ],
      },
      {
        heading: "Gotowa platforma czy własna",
        body: "Gotowe platformy kursowe mają sens, gdy sprzedajesz standardowe kursy na żądanie i akceptujesz prowizję od sprzedaży. Własna platforma zaczyna się opłacać, gdy model jest nietypowy — zajęcia w stałych grupach, rozliczenia za pojedyncze lekcje, kilku lektorów z różnymi stawkami — albo gdy prowizja od obrotu przekracza koszt wdrożenia.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje platforma e-learningowa?",
        answer:
          "System zapisów na zajęcia z płatnościami i panelem ucznia zaczyna się od 9 900 zł netto, typowo 15–40 tys. zł. Rozbudowana platforma z materiałami, testami i lekcjami online — 40–100 tys. zł, zależnie od zakresu.",
      },
      {
        question: "Czy platforma obsłuży płatności cykliczne?",
        answer:
          "Tak. Obsługuję zarówno jednorazowe płatności za kurs, jak i abonamenty miesięczne z automatycznym odnowieniem — przez operatorów takich jak PayU, Przelewy24 czy Stripe.",
      },
      {
        question: "Czy da się przenieść materiały z obecnego rozwiązania?",
        answer:
          "Zwykle tak. Migrację materiałów, list uczniów i historii płatności planuję jako osobny etap wdrożenia, tak żeby zajęcia nie zostały przerwane na czas przenosin.",
      },
    ],
    relatedProjects: ["akademia-wiedzy", "biblioteka-promptow"],
    relatedLinks: [
      {
        href: "/uslugi/aplikacje-webowe",
        label: "Aplikacje webowe",
        description: "Platformy z panelem ucznia i lektora.",
      },
      {
        href: "/projekty/akademia-wiedzy",
        label: "Case study: Akademia Wiedzy",
        description: "System e-korepetycji z płatnościami.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug) ?? null;
}
