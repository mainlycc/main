"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from "lucide-react";
import Footer from "../../../components/Footer";
import { use } from "react";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  // This would typically come from a CMS or database
  const blogPosts = {
    "jak-stworzyc-nowoczesna-strone-internetowa-2025": {
      title: "Jak stworzyć nowoczesną stronę internetową w 2025 roku",
      excerpt: "Poznaj najnowsze trendy i technologie, które pomogą Ci stworzyć stronę internetową, która przyciąga uwagę i konwertuje w 2025 roku.",
      content: `
        <div class="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl mb-8">
          <p class="text-lg leading-relaxed mb-0">
            <strong>W 2025 roku nowoczesna strona internetowa to nie tylko ładny wygląd.</strong> To <em>szybkość, dostępność, SEO, responsywność, bezpieczeństwo i funkcjonalność</em>. Jeśli myślisz o stworzeniu strony internetowej dla swojej firmy lub osobistej marki, ten poradnik pokaże Ci, na co zwrócić uwagę, by Twoja witryna działała skutecznie i przyciągała klientów.
          </p>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-[#FA6503]">Dlaczego warto mieć nowoczesną stronę www w 2025?</h2>
        <p class="text-lg mb-4">Internet wciąż się zmienia, a użytkownicy mają coraz wyższe oczekiwania. <strong>Dobra strona internetowa w 2025 roku powinna:</strong></p>
        <div class="bg-zinc-950 border border-zinc-800 p-6 rounded-xl mb-8">
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="text-[#FA6503] mr-3 text-xl">⚡</span>
              <span><strong>Ładować się w mniej niż 2 sekundy</strong></span>
            </li>
            <li class="flex items-start">
              <span class="text-[#FA6503] mr-3 text-xl">📱</span>
              <span><strong>Wyglądać i działać świetnie na telefonach</strong></span>
            </li>
            <li class="flex items-start">
              <span class="text-[#FA6503] mr-3 text-xl">🔍</span>
              <span><strong>Być łatwa do znalezienia w Google (SEO)</strong></span>
            </li>
            <li class="flex items-start">
              <span class="text-[#FA6503] mr-3 text-xl">🎯</span>
              <span><strong>Angażować odwiedzających do działania</strong></span>
            </li>
            <li class="flex items-start">
              <span class="text-[#FA6503] mr-3 text-xl">✨</span>
              <span><strong>Być zgodna z aktualnymi trendami UX/UI</strong></span>
            </li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-[#FA6503]">1. Określ cel swojej strony</h2>
        <p class="text-lg mb-4">Zanim zamówisz stronę, odpowiedz sobie na pytanie:</p>
        <div class="bg-[#FA6503]/10 border border-[#FA6503]/30 p-6 rounded-xl mb-6">
          <p class="text-xl font-bold text-[#FA6503] mb-4">👉 Po co mi ta strona?</p>
          <p class="text-lg mb-4">Czy chcesz:</p>
          <ul class="space-y-2 text-lg">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-[#FA6503] rounded-full mr-3"></span>
              <strong>zdobywać klientów?</strong>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-[#FA6503] rounded-full mr-3"></span>
              <strong>pokazać portfolio?</strong>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-[#FA6503] rounded-full mr-3"></span>
              <strong>sprzedawać produkty?</strong>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-[#FA6503] rounded-full mr-3"></span>
              <strong>budować markę osobistą?</strong>
            </li>
          </ul>
        </div>
        <p class="text-lg mb-8"><em>Cel wpływa na strukturę strony, jej treść i funkcjonalność.</em></p>

        <h2 class="text-3xl font-bold mb-6 text-[#FA6503]">2. Zadbaj o przemyślany design i user experience</h2>
        <p class="text-lg mb-4"><strong>Nowoczesna strona to taka, która:</strong></p>
        <div class="bg-zinc-950 border border-zinc-800 p-6 rounded-xl mb-6">
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="text-green-400 mr-3">✓</span>
              <span>jest <strong>minimalistyczna i intuicyjna</strong></span>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 mr-3">✓</span>
              <span>ma <strong>czytelną typografię i dobrane kolory</strong></span>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 mr-3">✓</span>
              <span>prowadzi użytkownika do celu (np. formularza kontaktowego)</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 mr-3">✓</span>
              <span>dobrze wygląda na każdym urządzeniu (tzw. <strong>strona responsywna</strong>)</span>
            </li>
          </ul>
        </div>
        <div class="bg-[#FA6503]/10 border border-[#FA6503]/30 p-4 rounded-xl mb-8">
          <p class="text-lg font-bold text-[#FA6503]">🎯 Używaj dużych nagłówków, jasnych komunikatów i CTA typu „Zamów wycenę", „Umów rozmowę".</p>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-[#FA6503]">3. Postaw na szybkość i technologię</h2>
        <p class="text-lg mb-4"><strong>W 2025 roku nikt nie ma czasu na wolne strony. Google też nie.</strong> Dlatego:</p>
        <div class="bg-zinc-950 border border-zinc-800 p-6 rounded-xl mb-8">
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="text-blue-400 mr-3">🚀</span>
              <span><strong>Wybierz szybki hosting</strong></span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-3">⚙️</span>
              <span><strong>Używaj nowoczesnych technologii</strong> (np. Next.js, Astro, WebP, Tailwind CSS)</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-3">📦</span>
              <span><strong>Zoptymalizuj obrazy, czcionki i kod</strong></span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-400 mr-3">🔒</span>
              <span><strong>Zainstaluj certyfikat SSL</strong> (https)</span>
            </li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-[#FA6503]">4. Twórz treści pod SEO</h2>
        <p class="text-lg mb-6"><strong>Twoja strona nie będzie skuteczna bez ruchu. A ruch to efekt dobrego pozycjonowania.</strong> Oto, co musisz zrobić:</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-zinc-950 border border-zinc-800 p-6 rounded-xl">
            <h3 class="text-xl font-bold mb-4 text-green-400">✅ Frazy kluczowe</h3>
            <p class="mb-4">Używaj fraz takich jak:</p>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span class="font-mono text-sm">„nowoczesna strona internetowa 2025"</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span class="font-mono text-sm">„tworzenie stron www dla firm"</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span class="font-mono text-sm">„strony internetowe z CMS"</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span class="font-mono text-sm">„projektowanie responsywnej strony"</span>
              </li>
            </ul>
          </div>

          <div class="bg-zinc-950 border border-zinc-800 p-6 rounded-xl">
            <h3 class="text-xl font-bold mb-4 text-green-400">✅ Struktura tekstu</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-green-400 mr-3">•</span>
                <span><strong>Jeden nagłówek H1</strong> na stronę</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 mr-3">•</span>
                <span><strong>Sekcje z H2 i H3</strong> (tak jak w tym artykule)</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 mr-3">•</span>
                <span><strong>Naturalne użycie fraz</strong> w treści</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 mr-3">•</span>
                <span><strong>Meta title i description</strong> zoptymalizowane pod SEO</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-[#FA6503]">5. Wybierz odpowiednią platformę</h2>
        <p class="text-lg mb-6"><strong>Nie każda strona musi być na WordPressie. W 2025 masz wiele opcji:</strong></p>
        <div class="overflow-x-auto mb-8">
          <table class="w-full border-collapse border border-zinc-700">
            <thead>
              <tr class="bg-zinc-800">
                <th class="border border-zinc-700 p-4 text-left font-bold">Platforma</th>
                <th class="border border-zinc-700 p-4 text-left font-bold">Dla kogo?</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-zinc-900">
                <td class="border border-zinc-700 p-4 font-semibold">WordPress</td>
                <td class="border border-zinc-700 p-4">Dla blogów, prostych stron firmowych</td>
              </tr>
              <tr class="bg-zinc-900 hover:bg-zinc-800">
                <td class="border border-zinc-700 p-4 font-semibold text-[#FA6503]">Next.js</td>
                <td class="border border-zinc-700 p-4">Dla nowoczesnych stron z wysoką wydajnością</td>
              </tr>
              <tr class="hover:bg-zinc-900">
                <td class="border border-zinc-700 p-4 font-semibold">Shopify</td>
                <td class="border border-zinc-700 p-4">Dla e-commerce</td>
              </tr>
              <tr class="bg-zinc-900 hover:bg-zinc-800">
                <td class="border border-zinc-700 p-4 font-semibold">Webflow</td>
                <td class="border border-zinc-700 p-4">Dla osób, które chcą edytować bez kodowania</td>
              </tr>
              <tr class="hover:bg-zinc-900">
                <td class="border border-zinc-700 p-4 font-semibold">Astro / Hugo</td>
                <td class="border border-zinc-700 p-4">Dla super szybkich stron statycznych</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-[#FA6503]">6. Zaplanuj rozwój – blog, SEO, automatyzacje</h2>
        <p class="text-lg mb-4"><strong>Nowoczesna strona nie kończy się na publikacji. W 2025 musisz:</strong></p>
        <div class="bg-zinc-950 border border-zinc-800 p-6 rounded-xl mb-8">
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">📝</span>
              <span><strong>dodawać treści na bloga</strong> (np. poradniki, case studies)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">📊</span>
              <span><strong>analizować ruch</strong> (Google Analytics, Hotjar)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">🤖</span>
              <span><strong>korzystać z automatyzacji</strong> (np. newsletter, CRM, AI chatbot)</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-400 mr-3">🛡️</span>
              <span><strong>zadbać o aktualizacje i bezpieczeństwo</strong></span>
            </li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mb-6 text-[#FA6503]">7. Ile kosztuje nowoczesna strona internetowa w 2025 roku?</h2>
        <p class="text-lg mb-4"><strong>Cena zależy od:</strong></p>
        <div class="bg-zinc-950 border border-zinc-800 p-6 rounded-xl mb-6">
          <ul class="space-y-2 text-lg">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-[#FA6503] rounded-full mr-3"></span>
              <span>liczby podstron</span>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-[#FA6503] rounded-full mr-3"></span>
              <span>funkcjonalności (blog, formularze, integracje)</span>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-[#FA6503] rounded-full mr-3"></span>
              <span>poziomu designu</span>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-[#FA6503] rounded-full mr-3"></span>
              <span>CMS-u i SEO</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-[#FA6503]/10 border border-[#FA6503]/30 p-6 rounded-xl mb-8">
          <h3 class="text-2xl font-bold mb-4 text-[#FA6503]">📌 Średni koszt w Polsce w 2025 roku:</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-zinc-950 p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-[#FA6503] mb-2">od 1500 zł</div>
              <div class="font-semibold">Strona One Page</div>
            </div>
            <div class="bg-zinc-950 p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-[#FA6503] mb-2">od 3000 zł</div>
              <div class="font-semibold">Strona firmowa z CMS i blogiem</div>
            </div>
            <div class="bg-zinc-950 p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-[#FA6503] mb-2">od 5000 zł</div>
              <div class="font-semibold">Rozbudowana strona z automatyzacjami i SEO</div>
            </div>
          </div>
        </div>

        <div class="bg-zinc-950 border border-[#FA6503]/20 p-8 rounded-xl">
          <h2 class="text-3xl font-bold mb-6 text-[#FA6503]">Podsumowanie</h2>
          <p class="text-lg leading-relaxed mb-0">
            <strong>Nowoczesna strona internetowa w 2025 roku to nie moda – to narzędzie sprzedaży i wizerunku.</strong> Jeśli chcesz zdobywać klientów, budować zaufanie i działać profesjonalnie – warto zainwestować w dobrze zaprojektowaną, szybką i zoptymalizowaną stronę www.
          </p>
        </div>
      `,
      author: "Zespół Mainly",
      date: "15 stycznia 2025",
      readTime: "8 min czytania",
      category: "Web Development",
      tags: ["Web Development", "SEO", "AI", "2025", "Trendy", "Technologie"],
      image: "/blog-1.jpg",
      metaDescription: "Poznaj najnowsze trendy i technologie tworzenia stron internetowych w 2025 roku. AI, Web 3.0, SEO i najlepsze praktyki dla nowoczesnych stron.",
      keywords: "strona internetowa 2025, web development, AI, SEO, trendy technologiczne, nowoczesne strony"
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Artykuł nie został znaleziony</h1>
        <Link href="/blog" className="text-[#FA6503] hover:underline">
          Powrót do bloga
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-24 max-w-5xl">
        <Link 
          href="/blog"
          className="inline-flex items-center text-gray-400 hover:text-white mb-12"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Wróć do wszystkich artykułów
        </Link>

        {/* Nagłówek artykułu */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm bg-[#FA6503]/20 text-[#FA6503] px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-400">{post.excerpt}</p>
        </div>

        {/* Główny obraz artykułu */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
          <Image
            src="/budowa_strony.jpg"
            alt="Proces tworzenia nowoczesnej strony internetowej - maszyna innowacji w laptopie"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Meta informacje */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </div>
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <Share2 className="h-4 w-4" />
            Udostępnij
          </button>
        </div>

        {/* Tagi */}
        <div className="flex flex-wrap gap-2 mb-16">
          {post.tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-1 text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded">
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Treść artykułu */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-2">
            <div className="prose prose-invert prose-lg max-w-none">
              <div 
                className="text-gray-300 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          <div className="bg-zinc-950 border border-[#FA6503]/20 p-8 rounded-xl h-fit">
            <h3 className="text-xl font-bold mb-6 border-b border-zinc-800 pb-4">Szczegóły artykułu</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-gray-400">Autor</h4>
                <p className="text-lg">{post.author}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Data publikacji</h4>
                <p className="text-lg">{post.date}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Czas czytania</h4>
                <p className="text-lg">{post.readTime}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Kategoria</h4>
                <p className="text-lg">{post.category}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Tagi</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag: string, index: number) => (
                    <span key={index} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
} 