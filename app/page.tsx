"use client";

import Image from "next/image"
import Link from "next/link"
import { Zap, Check, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Code, FileType, Server, FileCode, Database, Paintbrush, Box, Cloud, GitBranch, Globe } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import ProjectsCarousel from "../components/ProjectsCarousel"
import { AvatarCircles } from "../components/magicui/avatar-circles"

export default function Home() {
  const avatars = [
    { imageUrl: "/placeholder.svg?height=40&width=40", profileUrl: "#" },
    { imageUrl: "/placeholder.svg?height=40&width=40", profileUrl: "#" },
    { imageUrl: "/placeholder.svg?height=40&width=40", profileUrl: "#" },
    { imageUrl: "/placeholder.svg?height=40&width=40", profileUrl: "#" },
    { imageUrl: "/placeholder.svg?height=40&width=40", profileUrl: "#" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="container mx-auto pt-8 px-4">
        <div className="flex justify-center">
        
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Testimonial Section */}
          <div className="flex flex-col items-center mb-12 mt-16">
            <AvatarCircles 
              avatarUrls={avatars}
              numPeople={150}
              className="mb-4"
            />
            <div className="flex text-[#FA6503] mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-xl">
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
            Zmieniamy pomysły w rzeczywistość – cyfrową, piękną i skuteczną.
          </h2>

          {/* Tagline */}
          <p className="text-xl text-gray-400 mb-16">
            Partner kreatywny skupiony na wynikach—bo zgadywanie jest przereklamowane.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="flex items-center">
              <Zap className="mr-2" />
              <span>Na żądanie, Design i Programowanie</span>
            </div>
            <div className="flex items-center">
              <Zap className="mr-2" />
              <span>Eksperci: Poziom Senior</span>
            </div>
            <div className="flex items-center">
              <Zap className="mr-2" />
              <span>Wstrzymaj lub Anuluj w Dowolnym Momencie</span>
            </div>
            <div className="flex items-center">
              <Zap className="mr-2" />
              <span>48-Godzinne Cykle Iteracji</span>
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
              href="#"
              className="px-8 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors flex items-center"
            >
              Rozpocznij Swój Projekt <Zap className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Dodany komponent ProjectsCarousel */}
          <ProjectsCarousel />

          {/* Trusted By Section */}
          <div className="mb-16">
            <p className="text-xl text-gray-400 mb-8">Nasi klienci z całego świata</p>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {["macro", "Aomni", "Arrow", "rosebud", "Y Combinator"].map((company) => (
                <div key={company} className="text-gray-400 text-xl font-bold">
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Projects Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <Image
              src="/np@kulio.png"
              alt="Projekt 1"
              width={400}
              height={600}
              className="w-full h-auto"
              style={{ display: 'block', backgroundColor: 'transparent' }}
              unoptimized
            />
            <Image
              src="/np@kulio.png"
              alt="Projekt 2"
              width={500}
              height={600}
              className="w-full h-auto"
              style={{ display: 'block', backgroundColor: 'transparent' }}
              unoptimized
            />
            <Image
              src="/np@kulio.png"
              alt="Projekt 3"
              width={400}
              height={600}
              className="w-full h-auto"
              style={{ display: 'block', backgroundColor: 'transparent' }}
              unoptimized
            />
          </div>

          {/* Bottom CTA */}
          <div className="inline-flex items-center rounded-full border border-gray-700 p-1 pl-6 mb-24">
            <div className="flex items-center mr-4">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Mainly logo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <Link href="#" className="text-white hover:text-gray-200 mr-4">
                Jak to działa
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                Przykładowe Projekty
              </Link>
            </div>
            <Link
              href="#"
              className="flex items-center bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Profil"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              Skontaktuj się
            </Link>
          </div>

          {/* Company Features */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12">Dlaczego Mainly?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nowoczesna technologia pod Twoją markę</h3>
                <p className="text-gray-400">
                  Twoja strona powstaje w oparciu o Next.js – rozwiązanie używane przez największe firmy świata. Zyskujesz szybkość działania, świetne SEO i gotowość na integracje z AI.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Zero szablonów, 100% unikalności</h3>
                <p className="text-gray-400">
                  Otrzymasz projekt dopasowany do Twojej marki, stworzony od zera – bez gotowców, które widziałeś już setki razy.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Spersonalizowane grafiki i animacje</h3>
                <p className="text-gray-400">
                  Twoja strona będzie wyglądać dokładnie tak, jak chcesz. Tworzymy dedykowane grafiki i animacje, które przyciągają wzrok i budują wizerunek.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Zawsze na czasie</h3>
                <p className="text-gray-400">
                  Śledzimy trendy i testujemy nowe rozwiązania, żebyś Ty nie musiał. Dzięki temu Twoja strona będzie nowoczesna, a nie tylko &quot;ładna&quot;.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dopasowanie do Twojej branży</h3>
                <p className="text-gray-400">
                  Niezależnie, czy potrzebujesz strony dla startupu, marki osobistej czy sklepu – stworzymy coś, co pasuje do Twojej grupy odbiorców i celów biznesowych.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pełna przejrzystość i stały kontakt</h3>
                <p className="text-gray-400">
                  Wiesz, na jakim etapie jest Twój projekt i co dzieje się dalej. Regularnie informujemy o postępach i wysyłamy podglądy, byś miał wszystko pod kontrolą.
                </p>
              </div>
              
              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-[#FA6503]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Poprawki bez stresu</h3>
                <p className="text-gray-400">
                  Nie musisz od razu wiedzieć, czego dokładnie chcesz. Pracujemy elastycznie – możesz wprowadzać zmiany na bieżąco i rozwijać projekt wspólnie z nami.
                </p>
              </div>

              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl">
                <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-green-400" />
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
              <Card className="bg-zinc-950 border border-[#FA6503]/20 text-left text-white">
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
                        <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-black hover:bg-gray-200">Wybierz plan</Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-950 border border-[#FA6503] text-left text-white relative">
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
                        <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#FA6503] text-black hover:bg-[#FA6503]/90">Wybierz plan</Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-950 border border-[#FA6503]/20 text-left text-white">
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
                        <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-black hover:bg-gray-200">Skontaktuj się</Button>
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
                { name: "Docker", icon: "container" },
                { name: "Vercel", icon: "cloud" },
                { name: "GraphQL", icon: "git-branch" },
                { name: "Framer", icon: "globe" },
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 bg-zinc-950 border border-[#FA6503]/20 rounded-lg h-32">
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
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
              Rozpocznij projekt <Zap className="ml-2" />
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Mainly</h3>
              <p className="text-gray-400 mb-4">
                Zamieniamy teksty, design i programowanie w kliknięcia, konwersje i zyski.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Usługi</h3>
              <ul className="space-y-2">
                {["Strony internetowe", "Aplikacje webowe", "E-commerce", "UX/UI Design", "Branding", "SEO"].map(
                  (service, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        {service}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Firma</h3>
              <ul className="space-y-2">
                {["O nas", "Zespół", "Kariera", "Blog", "Kontakt", "Polityka prywatności"].map((item, i) => (
                  <li key={i}>
                    <Link href={item === "O nas" ? "#" : item === "Kontakt" ? "#" : item === "Blog" ? "#" : "/projekty"} className="text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-2" />
                  kontakt@mainly.pl
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-2" />
                  +48 123 456 789
                </li>
                <li className="text-gray-400 mt-4">
                  ul. Przykładowa 123
                  <br />
                  00-001 Warszawa
                  <br />
                  Polska
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Mainly. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

