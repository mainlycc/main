import type { LandingPageData } from "./landing";

export const services: LandingPageData[] = [
  {
    slug: "aplikacje-webowe",
    navLabel: "Aplikacje webowe",
    metaTitle: "Aplikacje webowe na zamówienie | Mainly",
    metaDescription:
      "Aplikacje webowe pisane pod proces Twojej firmy — od briefu po wdrożenie, bez podwykonawców. Next.js i React. Od 9 900 zł. Wycena w 48 h.",
    eyebrow: "Usługa",
    h1: "Aplikacje webowe na zamówienie — od briefu po wdrożenie",
    teaser:
      "Aplikacja pisana pod Twój proces, nie proces dopasowany do gotowego oprogramowania.",
    intro:
      "Aplikacja webowa na zamówienie to oprogramowanie działające w przeglądarce, napisane pod konkretny proces firmy zamiast kupowane z półki. Nie wymaga instalacji, działa na komputerze i telefonie, a dostęp kontrolujesz rolami użytkowników. Buduję je w Next.js i React — od projektu interfejsu, przez kod i integracje, po wdrożenie i opiekę techniczną.",
    priceFrom: 9900,
    priceNote:
      "Widełki zależą od liczby ról, integracji i tego, czy potrzebujesz płatności online.",
    sections: [
      {
        heading: "Kiedy aplikacja webowa ma sens, a kiedy szkoda pieniędzy",
        body: "Aplikacja na zamówienie opłaca się wtedy, gdy Twój proces jest na tyle nietypowy, że gotowe narzędzie wymagałoby obchodzenia go od kuchni — albo gdy ręczna obsługa zaczyna kosztować więcej niż jednorazowe wdrożenie. Jeśli Twój proces mieści się w standardowym CRM-ie z abonamentem, powiem Ci to wprost na bezpłatnej konsultacji, zamiast sprzedawać projekt na siłę.",
        bullets: [
          "Dane krążą między Excelem, mailem i systemem księgowym, a ktoś je przepisuje ręcznie",
          "Klient mógłby część rzeczy załatwić sam online, ale nie ma gdzie",
          "Gotowe narzędzia wymuszają zmianę procesu, który u Ciebie działa dobrze",
          "Skalowanie oznacza zatrudnienie kolejnej osoby do tej samej powtarzalnej pracy",
          "Potrzebujesz raportów, których żaden abonamentowy panel nie pokazuje",
        ],
      },
      {
        heading: "Co dostajesz w ramach wdrożenia",
        body: "Prowadzę całość samodzielnie — jeden punkt kontaktu od pierwszej rozmowy po wsparcie po starcie. Nie ma etapu, na którym odpowiedź brzmi „to pytanie do grafika”.",
        bullets: [
          "Warsztat i mapowanie procesu — zanim powstanie pierwsza linia kodu",
          "Projekt UX/UI w Figmie z dwiema rundami poprawek w cenie",
          "Kod w Next.js, React i TypeScript, hostowany na Vercel",
          "Panel administracyjny z rolami i uprawnieniami użytkowników",
          "Integracje: płatności, fakturowanie, poczta, kalendarze, API zewnętrzne",
          "Migracja danych z arkuszy lub poprzedniego systemu",
          "Szkolenie zespołu i dokumentacja",
          "14 dni na poprawki po wdrożeniu w cenie",
        ],
      },
      {
        heading: "Ile trwa budowa aplikacji webowej",
        body: "Prosta aplikacja z jednym procesem i panelem administracyjnym to zwykle 6–8 tygodni. Rozbudowany system z wieloma rolami, płatnościami i integracjami — 3–5 miesięcy. Harmonogram z kamieniami milowymi ustalamy przed startem, a postęp widzisz co tydzień. Każdy etap wymaga Twojej akceptacji, zanim przejdziemy dalej.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje aplikacja webowa na zamówienie?",
        answer:
          "Aplikacje zaczynają się od 9 900 zł netto. Prosta aplikacja z jednym procesem i panelem administracyjnym mieści się zwykle w przedziale 10–25 tys. zł, rozbudowany system z płatnościami, wieloma rolami i integracjami — 30–80 tys. zł. Dokładną wycenę z harmonogramem dostajesz w 48 h po bezpłatnej konsultacji.",
      },
      {
        question: "Czy będę właścicielem kodu?",
        answer:
          "Tak. Po opłaceniu ostatniej faktury przekazuję pełne prawa do kodu i repozytorium. Nie uzależniam klientów od siebie — możesz rozwijać aplikację samodzielnie albo z innym zespołem.",
      },
      {
        question: "Co jeśli po roku będę potrzebować nowych funkcji?",
        answer:
          "Architekturę projektuję pod rozbudowę. Dokładanie modułów — płatności, raportowania, kolejnego typu użytkownika — nie wymaga przepisywania aplikacji od zera. Nowe funkcje wyceniam osobno, na podstawie zakresu.",
      },
      {
        question: "Kto utrzymuje aplikację po wdrożeniu?",
        answer:
          "Możesz przejąć utrzymanie sam albo skorzystać z opieki technicznej od 290 zł miesięcznie: monitoring, kopie zapasowe, aktualizacje zależności i reakcja na zgłoszenia w 48 h.",
      },
    ],
    relatedProjects: ["airset-platforma", "akademia-wiedzy", "football-academy"],
    relatedLinks: [
      {
        href: "/uslugi/systemy-dla-firm",
        label: "Systemy i CRM na zamówienie",
        description:
          "Gdy potrzebujesz narzędzia wewnętrznego dla zespołu, a nie aplikacji dla klientów.",
      },
      {
        href: "/uslugi/automatyzacja-procesow",
        label: "Automatyzacja procesów",
        description:
          "Gdy proces da się usprawnić integracjami, bez budowania całej aplikacji.",
      },
      {
        href: "/cennik",
        label: "Cennik",
        description: "Realne widełki dla stron, aplikacji i systemów.",
      },
    ],
  },
  {
    slug: "systemy-dla-firm",
    navLabel: "Systemy i CRM",
    metaTitle: "Systemy i CRM na zamówienie dla firm | Mainly",
    metaDescription:
      "System CRM szyty pod proces Twojej firmy zamiast abonamentu, który nie pasuje. Panel, role, raporty, integracje. Od 9 900 zł. Wycena w 48 h.",
    eyebrow: "Usługa",
    h1: "Systemy szyte na miarę Twojego procesu",
    teaser:
      "CRM, panel klienta, system rezerwacji albo raportowania — zbudowany dokładnie pod to, jak pracujesz.",
    intro:
      "System na zamówienie to wewnętrzne narzędzie firmy — CRM, panel obsługi zleceń, system rezerwacji albo moduł raportowania — zbudowany pod istniejący proces, a nie kupowany w abonamencie. Płacisz raz zamiast co miesiąc za użytkownika, dane zostają u Ciebie, a funkcje odpowiadają temu, jak faktycznie pracuje Twój zespół.",
    priceFrom: 9900,
    priceNote:
      "Koszt rośnie głównie z liczbą ról użytkowników i integracji, nie z liczbą ekranów.",
    sections: [
      {
        heading: "Gotowy CRM czy system na zamówienie?",
        body: "Gotowe narzędzie wygrywa, gdy Twój proces jest typowy i mieści się w tym, co producent przewidział. System na zamówienie wygrywa, gdy proces jest przewagą konkurencyjną Twojej firmy — wtedy dopasowywanie się do cudzego oprogramowania kosztuje więcej niż zbudowanie własnego. Drugim progiem jest liczba użytkowników: przy kilkunastu osobach abonament potrafi w trzy lata przekroczyć koszt wdrożenia.",
        bullets: [
          "Gotowiec: szybki start, niskie wejście, comiesięczny koszt rosnący z zespołem",
          "Na zamówienie: koszt jednorazowy, pełna kontrola nad danymi i funkcjami",
          "Gotowiec: płacisz za moduły, których nie używasz",
          "Na zamówienie: dokładnie to, co potrzebne — i miejsce na rozbudowę",
        ],
      },
      {
        heading: "Co najczęściej buduję",
        body: "Większość systemów, które wdrażam, kręci się wokół tych samych czterech potrzeb: obsłużyć klienta, ogarnąć dokumenty, rozdzielić pracę i wiedzieć, co się dzieje.",
        bullets: [
          "CRM i baza klientów z historią kontaktu oraz statusami zleceń",
          "Panel klienta — sam sprawdza status, pobiera dokumenty, składa zamówienie",
          "System rezerwacji terminów z przypomnieniami e-mail i SMS",
          "Generatory ofert, umów i dokumentów PDF na podstawie formularza",
          "Moduł raportowania — realne dane zamiast comiesięcznego zestawienia w Excelu",
          "Integracje z fakturowaniem, płatnościami i pocztą",
        ],
      },
      {
        heading: "Migracja z Excela bez przestoju",
        body: "Najczęstszy punkt startowy to arkusze, w których firma trzyma wszystko od lat. Przenoszę dane etapami: najpierw importuję historię, potem uruchamiamy system równolegle z arkuszem, a dopiero po potwierdzeniu, że wszystko się zgadza, wyłączamy stary obieg. Zespół nie traci dostępu do danych ani na dzień.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje system CRM na zamówienie?",
        answer:
          "Systemy zaczynają się od 9 900 zł netto. Prosty CRM z bazą klientów, statusami i panelem administracyjnym to zwykle 12–30 tys. zł. System z wieloma rolami, płatnościami, generowaniem dokumentów i integracjami — 35–90 tys. zł. Wycenę z harmonogramem dostajesz w 48 h po konsultacji.",
      },
      {
        question: "Czy system będzie działał na telefonie?",
        answer:
          "Tak. Wszystkie systemy buduję jako aplikacje webowe działające w przeglądarce, responsywnie — na komputerze, tablecie i telefonie. Nie wymagają instalacji ani obecności w sklepach z aplikacjami.",
      },
      {
        question: "Gdzie będą przechowywane dane firmy?",
        answer:
          "Domyślnie w bazie PostgreSQL na serwerach w Unii Europejskiej, zgodnie z RODO. Jeśli masz wymóg trzymania danych na własnej infrastrukturze, system da się wdrożyć również tam.",
      },
      {
        question: "Ile trwa wdrożenie systemu?",
        answer:
          "Od 6 tygodni dla systemu o jednym procesie, do 3–5 miesięcy dla rozbudowanego wdrożenia z wieloma rolami i integracjami. Harmonogram ustalamy przed startem i pokazuję postęp co tydzień.",
      },
    ],
    relatedProjects: ["lease1-leasing", "akademia-wiedzy", "bcsc-ksiegowosc"],
    relatedLinks: [
      {
        href: "/uslugi/aplikacje-webowe",
        label: "Aplikacje webowe",
        description: "Gdy narzędzie ma trafić do Twoich klientów, nie tylko do zespołu.",
      },
      {
        href: "/uslugi/automatyzacja-procesow",
        label: "Automatyzacja procesów",
        description: "Gdy wystarczy połączyć narzędzia, które już masz.",
      },
      {
        href: "/branze",
        label: "Rozwiązania dla branż",
        description: "Zobacz, co buduję dla firm z Twojej branży.",
      },
    ],
  },
  {
    slug: "automatyzacja-procesow",
    navLabel: "Automatyzacja procesów",
    metaTitle: "Automatyzacja procesów w firmie | Mainly",
    metaDescription:
      "Eliminuję ręczne przepisywanie danych, generowanie dokumentów i pilnowanie terminów. Integracje i skrypty pod Twój proces. Bezpłatna konsultacja.",
    eyebrow: "Usługa",
    h1: "Automatyzacja procesów — mniej ręcznej pracy, mniej błędów",
    teaser:
      "Najtańsza zmiana ze wszystkich: usunięcie powtarzalnej pracy bez budowania nowego systemu.",
    intro:
      "Automatyzacja procesów to zastąpienie powtarzalnych czynności — przepisywania danych, wystawiania dokumentów, wysyłania przypomnień — kodem, który robi je sam. Zwykle nie wymaga budowy nowego systemu: wystarczy połączyć narzędzia, których firma już używa, i dopisać brakujący fragment logiki. To najtańszy sposób na odzyskanie czasu zespołu.",
    priceFrom: 2900,
    priceNote:
      "Pojedyncza automatyzacja bywa tańsza niż miesiąc pracy, którą zastępuje.",
    sections: [
      {
        heading: "Co da się zautomatyzować w typowej firmie",
        body: "Zaczynam od najprostszego pytania: co ktoś w Twojej firmie robi co tydzień, a co da się opisać instrukcją. Wszystko, co da się opisać instrukcją, da się zaprogramować.",
        bullets: [
          "Przepisywanie danych z formularza, maila lub arkusza do systemu",
          "Generowanie ofert, umów i protokołów w PDF na podstawie danych",
          "Wysyłka przypomnień o terminach, płatnościach i wizytach",
          "Synchronizacja między CRM-em, fakturowaniem i pocztą",
          "Zbieranie danych ze stron i systemów zewnętrznych przez API",
          "Cykliczne raporty wysyłane automatycznie zamiast składane ręcznie",
        ],
      },
      {
        heading: "Jak liczyć, czy się opłaca",
        body: "Prosty rachunek: ile godzin miesięcznie zajmuje dana czynność, razy koszt godziny pracy, razy dwanaście. Jeśli roczny koszt ręcznej obsługi przekracza koszt automatyzacji, zwrot następuje w pierwszym roku. W praktyce większość automatyzacji, które wdrażam, zwraca się w 3–9 miesięcy — a błędy, które eliminuje, bywają droższe niż sam czas.",
      },
      {
        heading: "Od czego zaczynamy",
        body: "Od bezpłatnej rozmowy, na której opisujesz proces tak, jak wygląda dziś — z całym bałaganem. Nie musisz wiedzieć, co da się zautomatyzować. Po rozmowie dostajesz listę punktów z oszacowaniem czasu i kosztu dla każdego, uszeregowaną od najlepszego stosunku efektu do ceny.",
      },
    ],
    faq: [
      {
        question: "Czy automatyzacja wymaga wymiany systemów, których używamy?",
        answer:
          "Zwykle nie. W większości przypadków wystarczy połączyć istniejące narzędzia przez API i dopisać brakującą logikę. Wymiana systemu to ostateczność, nie punkt wyjścia.",
      },
      {
        question: "Ile kosztuje pojedyncza automatyzacja?",
        answer:
          "Prosta automatyzacja jednego procesu — na przykład generowanie dokumentu z formularza albo synchronizacja dwóch narzędzi — to zwykle 2 900–8 000 zł netto. Rozbudowane wdrożenia obejmujące kilka procesów wyceniam indywidualnie.",
      },
      {
        question: "Co jeśli proces się zmieni?",
        answer:
          "Automatyzacje piszę tak, żeby parametry dało się zmieniać bez ingerencji w kod. Większe zmiany logiki wyceniam osobno, ale nie wymagają budowania rozwiązania od nowa.",
      },
    ],
    relatedProjects: [
      "kreator-faktur",
      "generator-ofert-rolety",
      "jkterm-wizualizator",
    ],
    relatedLinks: [
      {
        href: "/uslugi/systemy-dla-firm",
        label: "Systemy i CRM na zamówienie",
        description: "Gdy automatyzacja nie wystarcza i potrzebne jest własne narzędzie.",
      },
      {
        href: "/proces",
        label: "Jak wygląda współpraca",
        description: "Cztery etapy od briefu po wdrożenie.",
      },
    ],
  },
  {
    slug: "strony-internetowe",
    navLabel: "Strony internetowe",
    metaTitle: "Tworzenie stron internetowych dla firm | Mainly",
    metaDescription:
      "Strony firmowe kodowane w Next.js — szybkie, gotowe pod SEO i nastawione na zapytania od klientów. Od 2 900 zł, realizacja 1–4 tygodnie.",
    eyebrow: "Usługa",
    h1: "Strony internetowe, które sprzedają — nie tylko wyglądają",
    teaser:
      "Strona kodowana od zera: ładuje się poniżej sekundy i jest zbudowana pod pozyskiwanie zapytań.",
    intro:
      "Strona internetowa dla firmy to narzędzie sprzedażowe, nie wizytówka. Buduję je bez szablonów i wtyczek — kodowane w Next.js, dzięki czemu ładują się poniżej sekundy, przechodzą Core Web Vitals i mają poprawnie zrobione podstawy SEO. Każdy projekt obejmuje projekt UX/UI, kod, wdrożenie i przekazanie panelu do edycji treści.",
    priceFrom: 2900,
    priceNote:
      "Pakiet Start od 2 900 zł (do 5 podstron), pakiet Rozwój od 4 900 zł (do 10 podstron, blog, analityka).",
    sections: [
      {
        heading: "Dlaczego nie szablon",
        body: "Szablon za kilkaset złotych wygląda dobrze do momentu, w którym firma potrzebuje czegoś, czego w nim nie ma. Wtedy zaczyna kosztować: wtyczkami, które spowalniają stronę, obejściami, których nikt później nie rozumie, i przepisywaniem od zera przy pierwszej większej zmianie. Strona kodowana kosztuje więcej na starcie i mniej przez kolejne lata.",
        bullets: [
          "Czas ładowania poniżej sekundy zamiast kilku sekund typowych dla szablonów",
          "Brak wtyczek, brak comiesięcznych aktualizacji, brak dziur bezpieczeństwa",
          "SEO techniczne zrobione od podstaw, nie doklejone wtyczką",
          "Wygląd dokładnie taki, jak w projekcie — bez ograniczeń szablonu",
        ],
      },
      {
        heading: "Co wchodzi w każdy projekt",
        body: "Niezależnie od pakietu, techniczne fundamenty są takie same. Różnica jest w liczbie podstron i dodatkowych modułach.",
        bullets: [
          "Projekt UX/UI w Figmie z dwiema rundami poprawek",
          "Responsywność sprawdzona na realnych urządzeniach, nie tylko w symulatorze",
          "SEO techniczne: metadane, dane strukturalne, sitemap, Core Web Vitals",
          "Formularz kontaktowy z ochroną antyspamową i powiadomieniem e-mail",
          "Panel do samodzielnej edycji treści",
          "Hosting na Vercel z certyfikatem SSL i automatycznymi wdrożeniami",
          "Podpięcie Google Analytics i Search Console",
        ],
      },
      {
        heading: "Ile trwa i jak wygląda realizacja",
        body: "Pakiet Start wdrażam w 1–2 tygodnie, pakiet Rozwój w 3–4 tygodnie. Zaczynamy od briefu i analizy konkurencji, potem projekt graficzny do akceptacji, następnie kod i testy, na końcu wdrożenie i szkolenie z panelu. Postęp widzisz co tydzień, a każdy etap wymaga Twojego OK.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje strona internetowa dla firmy?",
        answer:
          "Pakiet Start (do 5 podstron, formularz kontaktowy, SEO techniczne) zaczyna się od 2 900 zł netto. Pakiet Rozwój (do 10 podstron, blog, analityka konwersji, integracje) — od 4 900 zł. Rozbudowane serwisy z modułami dodatkowymi wyceniam indywidualnie po rozmowie.",
      },
      {
        question: "Czy będę mógł samodzielnie edytować treści?",
        answer:
          "Tak. Każda strona dostaje panel do edycji tekstów, zdjęć i wpisów na blogu. Po wdrożeniu przeprowadzam krótkie szkolenie, a instrukcja zostaje u Ciebie.",
      },
      {
        question: "Czy strona będzie widoczna w Google?",
        answer:
          "SEO techniczne — metadane, dane strukturalne, sitemap, szybkość ładowania, poprawna struktura nagłówków — wchodzi w skład każdego pakietu. To fundament, bez którego pozycjonowanie nie zadziała. Sama wysoka pozycja wymaga jeszcze regularnych treści i budowania autorytetu; mogę pomóc też w tym.",
      },
      {
        question: "Ile kosztuje utrzymanie strony rocznie?",
        answer:
          "Domena to ok. 60–120 zł rocznie, hosting na Vercel dla typowej strony firmowej jest bezpłatny lub kosztuje ok. 20 USD miesięcznie przy większym ruchu. Opcjonalna opieka techniczna zaczyna się od 290 zł miesięcznie.",
      },
    ],
    relatedProjects: ["elomoto-eco", "qualibase", "magia-podrozowania"],
    relatedLinks: [
      {
        href: "/uslugi/opieka-techniczna",
        label: "Opieka techniczna",
        description: "Monitoring, kopie zapasowe i poprawki po wdrożeniu.",
      },
      {
        href: "/tworzenie-stron-internetowych-warszawa",
        label: "Strony internetowe w Warszawie",
        description: "Spotkania na żywo i współpraca lokalna.",
      },
      {
        href: "/cennik",
        label: "Cennik",
        description: "Pakiety i realne widełki cenowe.",
      },
    ],
  },
  {
    slug: "sklepy-i-platformy-b2b",
    navLabel: "Platformy B2B i sklepy",
    metaTitle: "Platformy B2B i sklepy internetowe | Mainly",
    metaDescription:
      "Platformy sprzedażowe dla firm sprzedających do firm: cenniki per kontrahent, zamówienia online, panel klienta i integracje. Wycena w 48 h.",
    eyebrow: "Usługa",
    h1: "Platformy B2B i sklepy dla firm sprzedających do firm",
    teaser:
      "Sprzedaż hurtowa online: indywidualne cenniki, limity kredytowe i panel dla kontrahenta.",
    intro:
      "Platforma B2B to sklep internetowy dostosowany do sprzedaży między firmami: z indywidualnymi cennikami dla kontrahentów, zamówieniami na podstawie limitu kupieckiego, historią dokumentów i panelem, w którym klient obsługuje się sam. Różni się od zwykłego sklepu tym, że ceny, rabaty i warunki są inne dla każdego odbiorcy.",
    priceFrom: 9900,
    priceNote:
      "Największy wpływ na koszt ma integracja z systemem magazynowym i ERP.",
    sections: [
      {
        heading: "Czym platforma B2B różni się od zwykłego sklepu",
        body: "W sprzedaży do konsumenta cena jest jedna dla wszystkich, a zamówienie kończy się płatnością. W B2B prawie nic z tego nie obowiązuje — i właśnie dlatego typowe silniki e-commerce wymagają tam obchodzenia standardowej logiki.",
        bullets: [
          "Indywidualne cenniki i rabaty przypisane do kontrahenta",
          "Zamówienia na przelew z odroczonym terminem i limitem kupieckim",
          "Wielu użytkowników po stronie jednego klienta, z różnymi uprawnieniami",
          "Powtarzalne zamówienia i szybkie zamawianie z listy",
          "Dokumenty, faktury i historia dostępne w panelu kontrahenta",
          "Integracja z magazynem i systemem ERP",
        ],
      },
      {
        heading: "Generatory ofert i konfiguratory produktów",
        body: "Część firm nie potrzebuje pełnego sklepu, tylko narzędzia, które zamienia rozmowę handlową w gotową ofertę. Buduję konfiguratory, w których klient sam składa produkt z opcji, widzi cenę i pobiera ofertę w PDF — a handlowiec dostaje gotowe zapytanie zamiast godziny liczenia w arkuszu.",
      },
    ],
    faq: [
      {
        question: "Czy platformę da się połączyć z naszym systemem magazynowym?",
        answer:
          "Tak, jeśli system udostępnia API lub pozwala na wymianę plików. Integracja z ERP i magazynem to zwykle najbardziej pracochłonna część wdrożenia, więc wyceniam ją po sprawdzeniu dokumentacji Twojego systemu.",
      },
      {
        question: "Ile kosztuje platforma B2B?",
        answer:
          "Wdrożenia zaczynają się od 9 900 zł netto dla prostego panelu zamówień z indywidualnymi cennikami. Platforma z integracją ERP, obsługą magazynu i rozbudowanym panelem kontrahenta to zwykle 40–120 tys. zł.",
      },
      {
        question: "Czy potrzebuję osobnego sklepu dla klientów indywidualnych?",
        answer:
          "Niekoniecznie. Można obsłużyć oba kanały w jednej platformie, rozdzielając logikę cenową według typu konta. Decyzję podejmujemy na etapie mapowania procesu — czasem osobne rozwiązania wychodzą taniej w utrzymaniu.",
      },
    ],
    relatedProjects: ["generator-ofert-rolety", "airset-platforma", "kulio-studio"],
    relatedLinks: [
      {
        href: "/uslugi/aplikacje-webowe",
        label: "Aplikacje webowe",
        description: "Gdy potrzebujesz czegoś więcej niż sprzedaży online.",
      },
      {
        href: "/branze/producenci-i-przemysl",
        label: "Rozwiązania dla producentów",
        description: "Konfiguratory produktów i generatory ofert.",
      },
    ],
  },
  {
    slug: "opieka-techniczna",
    navLabel: "Opieka techniczna",
    metaTitle: "Opieka techniczna nad stroną i aplikacją | Mainly",
    metaDescription:
      "Monitoring dostępności, kopie zapasowe, aktualizacje i poprawki w 48 h. Opieka nad stroną lub aplikacją od 290 zł miesięcznie.",
    eyebrow: "Usługa",
    h1: "Opieka techniczna — Twoja strona to proces, nie projekt",
    teaser:
      "Monitoring, kopie zapasowe, aktualizacje i reakcja na zgłoszenia w 48 h.",
    intro:
      "Opieka techniczna to stała obsługa strony lub aplikacji po wdrożeniu: monitoring dostępności, kopie zapasowe, aktualizacje zależności i bezpieczeństwa oraz drobne poprawki na zgłoszenie. Chodzi o to, żeby problem został wykryty i naprawiony, zanim zauważy go klient — a nie po tygodniu, gdy ktoś przypadkiem wejdzie na stronę.",
    priceFrom: 290,
    priceNote: "Miesięcznie, bez umowy na czas określony.",
    sections: [
      {
        heading: "Co obejmuje opieka",
        body: "Zakres jest stały niezależnie od tego, czy opiekuję się stroną firmową, czy rozbudowanym systemem. Różnicę robi liczba godzin na poprawki w miesiącu.",
        bullets: [
          "Monitoring dostępności — powiadomienie, gdy strona przestaje odpowiadać",
          "Automatyczne kopie zapasowe bazy danych i plików",
          "Aktualizacje zależności i poprawki bezpieczeństwa",
          "Reakcja na zgłoszenia w 48 h w dni robocze",
          "Drobne poprawki treści i układu w ramach abonamentu",
          "Kwartalny przegląd wydajności i Core Web Vitals",
        ],
      },
      {
        heading: "Dla kogo to ma sens",
        body: "Opieka jest potrzebna wtedy, gdy strona jest narzędziem pracy, a nie ozdobą — czyli gdy przez formularz przychodzą realne zapytania, gdy klienci logują się do panelu albo gdy przestój oznacza utracone pieniądze. Jeśli strona to statyczna wizytówka bez ruchu, może wystarczyć przegląd raz na pół roku.",
      },
    ],
    faq: [
      {
        question: "Czy opiekujesz się stronami, których nie budowałeś?",
        answer:
          "Tak, po wcześniejszym audycie. Muszę zobaczyć kod i infrastrukturę, żeby ocenić, czy da się je bezpiecznie utrzymywać. Audyt wyceniam osobno i jest jednorazowy.",
      },
      {
        question: "Co jeśli strona przestanie działać w nocy albo w weekend?",
        answer:
          "Monitoring działa całą dobę i powiadamia mnie automatycznie. Reakcja gwarantowana w abonamencie to 48 h w dni robocze; przy awariach krytycznych reaguję szybciej, ale nie obiecuję tego umownie, żeby nie składać deklaracji, których nie mogę dotrzymać.",
      },
      {
        question: "Czy mogę zrezygnować w dowolnym momencie?",
        answer:
          "Tak. Opieka działa miesiąc do miesiąca, bez umowy na czas określony i bez okresu wypowiedzenia.",
      },
    ],
    relatedProjects: [],
    relatedLinks: [
      {
        href: "/uslugi/strony-internetowe",
        label: "Tworzenie stron internetowych",
        description: "Nowa strona z opieką od pierwszego dnia.",
      },
      {
        href: "/kontakt",
        label: "Zapytaj o opiekę",
        description: "Napisz, czym mam się zająć — odpowiadam w 24 h.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug) ?? null;
}
