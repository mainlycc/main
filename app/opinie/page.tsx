"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";

export default function OpiniePage() {
  const router = useRouter();
  const [opinia, setOpinia] = useState("");
  const [zgoda, setZgoda] = useState(false);
  const [zgodaCaseStudy, setZgodaCaseStudy] = useState(false);
  const [ocena, setOcena] = useState(0);
  const [imieNazwisko, setImieNazwisko] = useState("");
  const [stanowisko, setStanowisko] = useState("");
  const [firma, setFirma] = useState("");
  const [nazwaProjektu, setNazwaProjektu] = useState("");
  const [wyslano, setWyslano] = useState<null | "ok" | "error">(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    if (showSuccessDialog) {
      const timeout = setTimeout(() => {
        router.push("/");
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [showSuccessDialog, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!opinia.trim() || !zgoda) {
      setWyslano("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/opinie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nazwaProjektu,
          imieNazwisko,
          firma,
          stanowisko,
          ocena,
          opinia,
          zgoda,
          zgodaCaseStudy,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setWyslano("error");
        setErrorMsg(
          typeof data.error === "string"
            ? data.error
            : "Nie udało się wysłać opinii. Spróbuj proszę ponownie później."
        );
        return;
      }

      setWyslano("ok");
      setShowSuccessDialog(true);
      setOpinia("");
      setZgoda(false);
      setZgodaCaseStudy(false);
      setOcena(0);
      setImieNazwisko("");
      setStanowisko("");
      setFirma("");
      setNazwaProjektu("");
    } catch (err) {
      console.error(err);
      setWyslano("error");
      setErrorMsg("Wystąpił błąd po stronie klienta. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const previewText =
    opinia.trim() ||
    "System zamówień online, który stworzył dla nas Stanisław, całkowicie uporządkował proces przyjmowania zleceń. Panel jest intuicyjny nawet dla nowych pracowników, a klienci chwalą prostotę formularza. Dzięki automatycznym powiadomieniom i integracji z fakturowaniem oszczędzamy kilka godzin tygodniowo na ręcznej obsłudze.";

  const previewName = imieNazwisko.trim() || "Anna N.";
  const previewMeta =
    (stanowisko.trim() && firma.trim() && `${stanowisko}, ${firma}`) ||
    "Marketing Manager, TechNova Sp. z o.o.";

  return (
    <>
      <main className="min-h-screen bg-transparent pt-28 sm:pt-32">
        <section className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="bg-white/95 text-zinc-900 rounded-2xl shadow-lg shadow-black/30 border border-white/10 p-6 sm:p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-950">
            Zostaw opinię o naszych usługach
          </h1>
          <p className="text-zinc-600 mb-6">
            Twoja opinia pomaga nam rozwijać się i pokazuje innym, jak wygląda
            współpraca z Mainly. Jeśli wyrazisz na to zgodę, możemy opublikować
            ją na naszej stronie wśród innych referencji.
          </p>

          {/* Podgląd opinii */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-zinc-950">
              Tak może wyglądać Twoja opinia
            </h2>
            <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl text-white">
              <p className="text-gray-100 mb-4">&ldquo;{previewText}&rdquo;</p>
              <div className="flex items-center">
                <img
                  src="/7.jpg"
                  alt={previewName}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium text-white">
                    {previewName}
                  </p>
                  <p className="text-xs text-gray-400">
                    {previewMeta}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50/95 border border-zinc-200 rounded-2xl p-5 sm:p-6 text-sm text-zinc-800 mb-10 space-y-4 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FA6503] via-orange-400 to-amber-300" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-100/60 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 right-12 w-40 h-40 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 px-2.5 py-1 text-xs font-semibold tracking-wide">
                Podpowiedzi do opinii
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-orange-200 to-transparent" />
            </div>

            <div className="relative space-y-1">
              <p className="font-semibold text-zinc-900">
                Jak napisać opinię, żeby była pomocna?
              </p>
              <p className="text-zinc-700">
                Będę bardzo wdzięczny, jeśli w swojej opinii wspomnisz
                chociaż o jednym z tych punktów:
              </p>
            </div>

            <div className="relative space-y-2">
              <p className="font-medium text-zinc-900 flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white text-[11px] font-semibold">
                  1
                </span>
                Jak działa wykonana strona lub aplikacja?
              </p>
              <p className="text-zinc-700 pl-7">
                Na przykład: czy jest szybka, intuicyjna w obsłudze,
                dobrze zaprojektowana, spełnia ustalone wcześniej założenia.
              </p>
            </div>

            <div className="relative space-y-2">
              <p className="font-medium text-zinc-900 flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white text-[11px] font-semibold">
                  2
                </span>
                Co projekt ułatwił w Twoim biznesie?
              </p>
              <p className="text-zinc-700 pl-7">
                Możesz wspomnieć, jakie procesy usprawnił, co przyspieszył
                albo jakie nowe możliwości się pojawiły.
              </p>
            </div>

            <div className="relative space-y-2">
              <p className="font-medium text-zinc-900 flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white text-[11px] font-semibold">
                  3
                </span>
                Jak oceniasz naszą współpracę?
              </p>
              <p className="text-zinc-700 pl-7">
                Np. czy złapaliśmy wspólny vibe, jak wyglądała komunikacja,
                jak oceniasz dostępność i zaangażowanie z mojej strony.
              </p>
            </div>

            <div className="relative space-y-2">
              <p className="font-medium text-zinc-900 flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white text-[11px] font-semibold">
                  4
                </span>
                Czy polecił(a)byś współpracę innym — i dlaczego?
              </p>
              <p className="text-zinc-700 pl-7">
                Jedno–dwa zdania, komu szczególnie mogłaby się przydać
                taka współpraca i z jakiego powodu.
              </p>
            </div>
          </div>

          {/* Formularz */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="nazwa-projektu"
                  className="text-sm font-medium text-zinc-800"
                >
                  Nazwa projektu, nad którym pracowaliśmy razem
                </label>
                <Input
                  id="nazwa-projektu"
                  value={nazwaProjektu}
                  onChange={(e) => setNazwaProjektu(e.target.value)}
                  placeholder="Np. nowa strona firmowa, aplikacja do zamówień itp."
                  className="bg-white border-zinc-300 text-zinc-900"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="imie-nazwisko"
                  className="text-sm font-medium text-zinc-800"
                >
                  Twoje imię i nazwisko
                </label>
                <Input
                  id="imie-nazwisko"
                  value={imieNazwisko}
                  onChange={(e) => setImieNazwisko(e.target.value)}
                  placeholder="Np. Anna Nowak"
                  className="bg-white border-zinc-300 text-zinc-900"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="firma"
                  className="text-sm font-medium text-zinc-800"
                >
                  Nazwa firmy, którą reprezentujesz
                </label>
                <Input
                  id="firma"
                  value={firma}
                  onChange={(e) => setFirma(e.target.value)}
                  placeholder="Np. TechNova Sp. z o.o."
                  className="bg-white border-zinc-300 text-zinc-900"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="stanowisko"
                  className="text-sm font-medium text-zinc-800"
                >
                  Twoje stanowisko
                </label>
                <Input
                  id="stanowisko"
                  value={stanowisko}
                  onChange={(e) => setStanowisko(e.target.value)}
                  placeholder="Np. Marketing Manager"
                  className="bg-white border-zinc-300 text-zinc-900"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-800">
                  Ocena współpracy
                </p>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setOcena(value)}
                      className="focus:outline-none"
                      aria-label={`Ocena ${value} na 5`}
                    >
                      <Star
                        className="h-6 w-6"
                        color={value <= ocena ? "#FA6503" : "#d4d4d8"}
                        fill={value <= ocena ? "#FA6503" : "none"}
                      />
                    </button>
                  ))}
                  <div className="flex flex-col ml-1 space-y-0.5">
                    <span className="text-xs text-zinc-500">
                      {ocena > 0 ? `${ocena}/5` : "Kliknij, aby wybrać ocenę"}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      1 gwiazdka – słabo, 5 gwiazdek – super, idealnie
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="opinia"
                  className="text-sm font-medium text-zinc-800"
                >
                  Twoja opinia (może zostać opublikowana)
                </label>
                <Textarea
                  id="opinia"
                  value={opinia}
                  onChange={(e) => setOpinia(e.target.value)}
                  rows={6}
                  placeholder="Opisz, jak przebiegała współpraca, co było dla Ciebie najważniejsze i jakie efekty udało się osiągnąć..."
                  className="bg-white border-zinc-300 text-zinc-900"
                />
              </div>

            </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id="zgoda-opinia"
                checked={zgoda}
                onCheckedChange={(checked) => setZgoda(Boolean(checked))}
              />
              <label
                htmlFor="zgoda-opinia"
                className="text-sm font-medium text-zinc-800 leading-relaxed cursor-pointer"
              >
                Wyrażam zgodę na wykorzystanie mojej opinii na stronie internetowej.
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="zgoda-case-study"
                checked={zgodaCaseStudy}
                onCheckedChange={(checked) => setZgodaCaseStudy(Boolean(checked))}
              />
              <label
                htmlFor="zgoda-case-study"
                className="text-sm font-medium text-zinc-800 leading-relaxed cursor-pointer"
              >
                Wyrażam zgodę na przedstawienie wykonanego projektu jako case study
                i zaprezentowanie go w portfolio (bez ujawniania poufnych danych).
              </label>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#FA6503] hover:bg-[#FA6503]/90 text-white disabled:opacity-60"
          >
            {isSubmitting ? "Wysyłanie..." : "Wyślij opinię"}
          </Button>

          {wyslano === "ok" && (
            <p className="text-sm text-emerald-600">
              Dziękujemy za Twoją opinię! Po weryfikacji może pojawić się na
              stronie wśród referencji.
            </p>
          )}
          {wyslano === "error" && (
            <p className="text-sm text-red-600">
              Uzupełnij treść opinii i zaznacz zgodę na publikację, aby móc
              ją wysłać.
            </p>
          )}
          {errorMsg && (
            <p className="text-sm text-red-600">
              {errorMsg}
            </p>
          )}
        </form>
          </div>
        </section>
      </main>

      {showSuccessDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white text-zinc-900 rounded-2xl shadow-xl max-w-sm w-full p-6 space-y-4 flex flex-col items-center text-center">
            <CheckCircle2 className="h-10 w-10 text-emerald-500 mb-1" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-zinc-950">
                Dziękujemy za Twoją opinię!
              </h2>
              <p className="text-sm text-zinc-600">
                Twoja wiadomość została wysłana. Za chwilę wrócisz na stronę
                główną.
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}


