"use client";

import Image from "next/image"
import Link from "next/link"
import { Zap, Check, Code, FileType, Server, FileCode, Database, Paintbrush, Box, Cloud, GitBranch, Globe, Mail, Clock, Shield, Brain, Scissors } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import ProjectsCarousel from "../components/ProjectsCarousel"
import Footer from "../components/Footer"
import { ArrowBigRightIcon } from "../components/ui/arrow-big-right"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="container mx-auto pt-8 px-6">
        <div className="flex justify-center">
        
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-6 text-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Main Headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8 mt-16">
            Zmieniamy pomysły w rzeczywistość – cyfrową, piękną i skuteczną.
          </h2>

          {/* Tagline */}
          <p className="text-xl text-gray-400 mb-16">
            Strony, aplikacje i systemy, które zmieniają biznesy – od pomysłu po gotowy produkt. Szybko, konkretnie, skutecznie.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-3 flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <span>Przejrzyste etapy i terminy – wiesz, co się dzieje</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-3 flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span>Bez ryzyka – umowa i gwarancja poprawnej realizacji</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-3 flex-shrink-0">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span>Analiza, strategia, projekt – robimy to z głową</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-3 flex-shrink-0">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <span>Projekt szyty na miarę, zero szablonów</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-20">
            <Link
              href="/projekty"
              className="px-8 py-3 rounded-full border border-white text-white hover:bg-white/10 transition-colors"
            >
              Ostatnie Projekty
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors flex items-center"
            >
              Rozpocznij Swój Projekt <ArrowBigRightIcon className="ml-2" size={20} />
            </Link>
          </div>

          {/* Dodany komponent ProjectsCarousel */}
          <ProjectsCarousel />

          {/* Company Features */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">Dlaczego Mainly?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Code className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nowoczesna technologia pod Twoją markę</h3>
                <p className="text-gray-400">
                  Twoja strona powstaje w oparciu o Next.js – rozwiązanie używane przez największe firmy świata. Zyskujesz szybkość działania, świetne SEO i gotowość na integracje z AI.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Paintbrush className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Zero szablonów, 100% unikalności</h3>
                <p className="text-gray-400">
                  Otrzymasz projekt dopasowany do Twojej marki, stworzony od zera – bez gotowców, które widziałeś już setki razy.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Spersonalizowane grafiki i animacje</h3>
                <p className="text-gray-400">
                  Twoja strona będzie wyglądać dokładnie tak, jak chcesz. Tworzymy dedykowane grafiki i animacje, które przyciągają wzrok i budują wizerunek.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <GitBranch className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Zawsze na czasie</h3>
                <p className="text-gray-400">
                  Śledzimy trendy i testujemy nowe rozwiązania, żebyś Ty nie musiał. Dzięki temu Twoja strona będzie nowoczesna, a nie tylko &quot;ładna&quot;.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileType className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dopasowanie do Twojej branży</h3>
                <p className="text-gray-400">
                  Niezależnie, czy potrzebujesz strony dla startupu, marki osobistej czy sklepu – stworzymy coś, co pasuje do Twojej grupy odbiorców i celów biznesowych.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pełna przejrzystość i stały kontakt</h3>
                <p className="text-gray-400">
                  Wiesz, na jakim etapie jest Twój projekt i co dzieje się dalej. Regularnie informujemy o postępach i wysyłamy podglądy, byś miał wszystko pod kontrolą.
                </p>
              </div>
              
              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <ArrowBigRightIcon className="text-[#FA6503]" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Poprawki bez stresu</h3>
                <p className="text-gray-400">
                  Nie musisz od razu wiedzieć, czego dokładnie chcesz. Pracujemy elastycznie – możesz wprowadzać zmiany na bieżąco i rozwijać projekt wspólnie z nami.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Box className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Wszystko w jednym miejscu</h3>
                <p className="text-gray-400">
                  Otrzymasz kompletną stronę – od koncepcji i projektu graficznego, po wdrożenie i optymalizację. Bez konieczności szukania kolejnych specjalistów.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-4">Cennik</h2>
            <p className="text-xl text-gray-400 mb-12">Elastyczne plany dopasowane do Twoich potrzeb</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-zinc-950 border border-[#FA6503]/20 text-left text-white transition-transform duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle>Startup</CardTitle>
                  <CardDescription className="text-gray-300">Idealny dla nowych projektów</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">1 200 zł</span>
                    <span className="text-gray-300">/miesiąc</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Jedna strona lub landing page",
                      "Do 5 podstron",
                      "Podstawowy design",
                      "Responsywność na wszystkich urządzeniach",
                      "Podstawowe SEO",
                      "1 runda poprawek",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-white text-black hover:bg-gray-200">
                    <Link href="/kontakt">Wybierz plan</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-950 border border-[#FA6503] text-left text-white relative transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-[#FA6503] text-black px-4 py-1 rounded-full text-sm font-bold">
                    Najpopularniejszy
                  </span>
                </div>
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription className="text-gray-300">Dla rozwijających się firm</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">2 500 zł</span>
                    <span className="text-gray-300">/miesiąc</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Pełna strona firmowa",
                      "Do 15 podstron",
                      "Zaawansowany design",
                      "Responsywność na wszystkich urządzeniach",
                      "Pełna optymalizacja SEO",
                      "System CMS",
                      "3 rundy poprawek",
                      "Integracja z narzędziami analitycznymi",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-[#FA6503] text-black hover:bg-[#FA6503]/90">
                    <Link href="/kontakt">Wybierz plan</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-950 border border-[#FA6503]/20 text-left text-white transition-transform duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription className="text-gray-300">Rozwiązania szyte na miarę</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">Wycena</span>
                    <span className="text-gray-300"> indywidualna</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Kompleksowe rozwiązania webowe",
                      "Aplikacje internetowe",
                      "Sklepy e-commerce",
                      "Niestandardowe funkcjonalności",
                      "Dedykowany zespół",
                      "Priorytetowe wsparcie",
                      "Nielimitowane poprawki",
                      "Strategia marketingowa",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-white text-black hover:bg-gray-200">
                    <Link href="/kontakt">Skontaktuj się</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12">Często zadawane pytania</h2>

            <Accordion type="single" collapsible className="w-full text-left">
              {[
                {
                  question: "Jak długo trwa realizacja projektu?",
                  answer:
                    "Czas realizacji zależy od złożoności projektu. Proste landing page możemy dostarczyć w ciągu 1-2 tygodni, podczas gdy bardziej rozbudowane strony firmowe lub aplikacje internetowe mogą zająć od 4 do 8 tygodni. Zawsze na początku współpracy ustalamy dokładny harmonogram.",
                },
                {
                  question: "Czy mogę wprowadzać zmiany w trakcie realizacji projektu?",
                  answer:
                    "Tak, nasz proces jest elastyczny i pozwala na wprowadzanie zmian w trakcie realizacji. Każdy plan zawiera określoną liczbę rund poprawek. Dodatkowe zmiany są możliwe za dodatkową opłatą.",
                },
                {
                  question: "Czy zajmujecie się hostingiem i utrzymaniem strony?",
                  answer:
                    "Tak, oferujemy kompleksowe usługi hostingu i utrzymania stron. Po zakończeniu projektu możemy przejąć pełną odpowiedzialność za techniczną stronę Twojej witryny, aktualizacje, kopie zapasowe i bezpieczeństwo.",
                },
                {
                  question: "Jak wygląda proces współpracy?",
                  answer:
                    "Nasz proces składa się z kilku etapów: 1) Konsultacja i określenie wymagań, 2) Propozycja rozwiązania i wycena, 3) Projektowanie UX/UI, 4) Programowanie, 5) Testowanie, 6) Wdrożenie, 7) Wsparcie po wdrożeniu. Na każdym etapie otrzymujesz regularne aktualizacje i masz możliwość przekazania feedbacku.",
                },
                {
                  question: "Czy pomagacie w optymalizacji SEO?",
                  answer:
                    "Tak, wszystkie nasze strony są tworzone z myślą o SEO. Oferujemy podstawową optymalizację w ramach każdego pakietu oraz zaawansowane usługi SEO jako dodatkową usługę.",
                },
                {
                  question: "Co jeśli nie jestem zadowolony z efektów?",
                  answer:
                    "Satysfakcja klienta jest dla nas priorytetem. Jeśli nie jesteś zadowolony z efektów, pracujemy nad poprawkami do momentu, aż osiągniemy oczekiwany rezultat. Oferujemy również gwarancję zwrotu pieniędzy w ciągu pierwszych 14 dni współpracy.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Client List */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12">Nasze technologie</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: "Next.js", icon: "code" },
                { name: "React", icon: "brain" },
                { name: "TypeScript", icon: "file-type" },
                { name: "Node.js", icon: "server" },
                { name: "Python", icon: "file-code" },
                { name: "Supabase", icon: "database" },
                { name: "PostgreSQL", icon: "database" },
                { name: "Tailwind CSS", icon: "paintbrush" },
                { name: "Blender", icon: "container" },
                { name: "Vercel", icon: "cloud" },
                { name: "GraphQL", icon: "git-branch" },
                { name: "Framer", icon: "globe" },
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 bg-zinc-950 border border-[#FA6503]/20 rounded-lg h-32 transition-transform duration-300 hover:-translate-y-2">
                  <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    {tech.icon === "code" && <Code className="text-blue-400" />}
                    {tech.icon === "brain" && <Zap className="text-cyan-400" />}
                    {tech.icon === "file-type" && <FileType className="text-blue-500" />}
                    {tech.icon === "server" && <Server className="text-green-400" />}
                    {tech.icon === "file-code" && <FileCode className="text-[#FA6503]" />}
                    {tech.icon === "database" && <Database className="text-purple-400" />}
                    {tech.icon === "paintbrush" && <Paintbrush className="text-pink-400" />}
                    {tech.icon === "container" && <Box className="text-blue-400" />}
                    {tech.icon === "cloud" && <Cloud className="text-sky-400" />}
                    {tech.icon === "git-branch" && <GitBranch className="text-red-400" />}
                    {tech.icon === "globe" && <Globe className="text-green-500" />}
                  </div>
                  <span className="text-gray-200 font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-zinc-900 rounded-xl p-12 mb-24 text-center">
            <h2 className="text-3xl font-bold mb-4">Gotowy na transformację swojej obecności online?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Dołącz do setek zadowolonych klientów i zacznij generować realne wyniki.
            </p>
            <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
              <Link href="/kontakt">
                Rozpocznij projekt <ArrowBigRightIcon className="ml-2" size={24} />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

