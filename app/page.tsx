"use client";

import Link from "next/link"
import { Zap, Code, FileType, Server, FileCode, Database, Paintbrush, Box, Cloud, GitBranch, Globe, Clock, Shield, Brain, Scissors } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

import ProjectsCarousel from "../components/ProjectsCarousel"
import CompanySlider from "../components/CompanySlider"
import Footer from "../components/Footer"
import { ArrowBigRightIcon } from "../components/ui/arrow-big-right"
import CallToAction from "../components/CallToAction"
import { StarBorder } from "../components/ui/star-border"
import { TestimonialsSection } from "../components/ui/testimonials-section"
import PricingSection from "../components/PricingSection"

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <header className="container mx-auto pt-8 px-6">
        <div className="flex justify-center">
        
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-6 text-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Main Headline */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 mt-24 sm:mt-32">
            Tworzymy technologię, która rozwija Twój biznes.
          </h2>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12">
            Strony, aplikacje i systemy, które zmieniają biznesy – od pomysłu po gotowy produkt. Szybko, konkretnie, skutecznie.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-3 flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <span>Zapewniamy najnowsze technologiczne rozwiązania</span>
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
          <div className="flex justify-center gap-4 mb-24">
            <Link
              href="/projekty"
              className="px-8 py-3 rounded-full border border-white text-white hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Ostatnie Projekty
            </Link>
            <StarBorder as={Link} href="/kontakt" className="text-white">
              Rozpocznij Swój Projekt <ArrowBigRightIcon size={24} className="text-white flex-shrink-0" />
            </StarBorder>
          </div>

          {/* Dodany komponent ProjectsCarousel */}
          <div className="mb-32">
            <ProjectsCarousel />
          </div>

          {/* Dodany komponent CompanySlider */}
          <div className="mb-32">
            <CompanySlider />
          </div>

          {/* Client List */}
          <div className="mb-32">
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

          {/* Cennik */}
          <div className="mb-32">
            <PricingSection />
          </div>

          {/* Sekcja opinii klientów */}
          <TestimonialsSection />

          {/* FAQ */}
          <div className="mb-32">
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

          {/* Final CTA */}
          <div className="mb-32">
            <CallToAction />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

