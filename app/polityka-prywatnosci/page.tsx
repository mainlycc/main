import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Polityka Prywatności | Mainly',
  description: 'Polityka prywatności firmy Mainly. Dowiedz się, jak chronimy Twoje dane osobowe i dbamy o Twoją prywatność.',
  openGraph: {
    title: 'Polityka Prywatności | Mainly',
    description: 'Polityka prywatności firmy Mainly. Dowiedz się, jak chronimy Twoje dane osobowe i dbamy o Twoją prywatność.',
  }
}

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 container mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Polityka Prywatności</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Informacje ogólne</h2>
            <p className="mb-4">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej Mainly.
            </p>
            <p className="mb-4">
              Administratorem danych osobowych zawartych na stronie jest firma Mainly z siedzibą w ul. Filtrowa 83, 02-032 Warszawa, NIP: 7010961986, zwana dalej Administratorem.
            </p>
            <p className="mb-4">
              Administrator dokłada szczególnej staranności w celu ochrony interesów osób, których dane dotyczą, a w szczególności zapewnia, że zbierane przez niego dane są przetwarzane zgodnie z prawem, zbierane dla oznaczonych, zgodnych z prawem celów i niepoddawane dalszemu przetwarzaniu niezgodnemu z tymi celami.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Rodzaj przetwarzanych danych</h2>
            <p className="mb-4">
              Administrator może przetwarzać następujące dane osobowe Użytkowników korzystających ze strony:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Nazwa firmy</li>
              <li>Adres IP i inne informacje zawarte w plikach cookies</li>
            </ul>
            <p>
              Podanie danych osobowych przez Użytkownika jest dobrowolne, ale może być niezbędne do korzystania z niektórych funkcjonalności strony, takich jak formularze kontaktowe czy newsletter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Cel i podstawa przetwarzania danych</h2>
            <p className="mb-4">
              Dane osobowe Użytkowników są przetwarzane w celu:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Realizacji usług świadczonych przez Administratora</li>
              <li>Odpowiedzi na zapytania przesłane za pomocą formularza kontaktowego</li>
              <li>Wysyłki informacji marketingowych, w tym newslettera (po wyrażeniu zgody)</li>
              <li>Prowadzenia analiz statystycznych</li>
              <li>Dochodzenia roszczeń i ochrony przed roszczeniami</li>
            </ul>
            <p className="mb-4">
              Podstawą prawną przetwarzania danych osobowych jest:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Wykonanie umowy lub podjęcie działań przed jej zawarciem (art. 6 ust. 1 lit. b RODO)</li>
              <li>Prawnie uzasadniony interes realizowany przez Administratora (art. 6 ust. 1 lit. f RODO)</li>
              <li>Zgoda osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO)</li>
              <li>Wypełnienie obowiązku prawnego ciążącego na Administratorze (art. 6 ust. 1 lit. c RODO)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Okres przechowywania danych</h2>
            <p className="mb-4">
              Dane osobowe Użytkowników przechowywane są przez czas:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Niezbędny do realizacji usług i odpowiedzi na zapytania</li>
              <li>Do momentu wycofania zgody, jeśli przetwarzanie odbywa się na jej podstawie</li>
              <li>Przez okres wymagany przepisami prawa, np. przepisami podatkowymi</li>
              <li>Przez okres niezbędny do dochodzenia roszczeń i obrony przed roszczeniami</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Odbiorcy danych</h2>
            <p className="mb-4">
              Odbiorcami danych osobowych Użytkowników mogą być:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Podmioty przetwarzające dane w imieniu Administratora, np. dostawcy usług IT, hostingowych, księgowych</li>
              <li>Podmioty uprawnione do uzyskania danych na podstawie obowiązującego prawa, np. sądy lub organy ścigania</li>
              <li>Inne podmioty, które na podstawie stosownych umów podpisanych z Administratorem przetwarzają dane osobowe</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Pliki cookies</h2>
            <p className="mb-4">
              Strona internetowa Administratora wykorzystuje pliki cookies (tzw. &ldquo;ciasteczka&rdquo;), które stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika i przeznaczone są do korzystania ze stron internetowych. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
            </p>
            <p className="mb-4">
              Pliki cookies wykorzystywane są w celu:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dostosowania zawartości stron internetowych do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych</li>
              <li>Tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy korzystają ze stron internetowych</li>
              <li>Utrzymania sesji Użytkownika (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie ponownie wpisywać loginu i hasła</li>
            </ul>
            <p className="mb-4">
              Użytkownik może w każdej chwili wyłączyć obsługę plików cookies w ustawieniach przeglądarki internetowej. Może to jednak wpłynąć na niektóre funkcje dostępne na stronie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Prawa użytkowników</h2>
            <p className="mb-4">
              W związku z przetwarzaniem danych osobowych Użytkownikom przysługują następujące prawa:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prawo dostępu do swoich danych oraz otrzymania ich kopii</li>
              <li>Prawo do sprostowania (poprawiania) swoich danych</li>
              <li>Prawo do usunięcia danych</li>
              <li>Prawo do ograniczenia przetwarzania danych</li>
              <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych</li>
              <li>Prawo do przenoszenia danych</li>
              <li>Prawo do wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych)</li>
              <li>Prawo do wycofania zgody na przetwarzanie danych osobowych (wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Bezpieczeństwo danych</h2>
            <p className="mb-4">
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo danych osobowych, w szczególności uniemożliwiające dostęp do nich osobom nieupoważnionym lub ich przetwarzanie z naruszeniem przepisów prawa, zapobiegające utracie danych, ich uszkodzeniu lub zniszczeniu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Kontakt</h2>
            <p className="mb-4">
              W sprawach związanych z ochroną danych osobowych oraz korzystaniem z praw związanych z przetwarzaniem tych danych można się skontaktować z Administratorem poprzez:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>E-mail: kontakt@mainly.pl</li>
              <li>Adres korespondencyjny: ul. Filtrowa 83, 02-032 Warszawa</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Zmiany Polityki Prywatności</h2>
            <p className="mb-4">
              Administrator zastrzega sobie prawo do zmiany niniejszej Polityki Prywatności poprzez opublikowanie nowej wersji na stronie internetowej. Zmiany obowiązują od momentu ich opublikowania.
            </p>
            <p className="mb-4">
              Data ostatniej aktualizacji: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </section>
          
          <div className="mt-10">
            <Link href="/" className="text-[#FA6503] hover:underline">
              Powrót do strony głównej
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 