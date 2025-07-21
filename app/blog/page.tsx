"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Footer from "../../components/Footer";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      slug: "jak-stworzyc-nowoczesna-strone-internetowa-2025",
      title: "Jak stworzyć nowoczesną stronę internetową w 2025 roku",
      excerpt: "Poznaj najnowsze trendy i technologie, które pomogą Ci stworzyć stronę internetową, która przyciąga uwagę i konwertuje w 2025 roku.",
      author: "Zespół Mainly",
      date: "15 stycznia 2025",
      readTime: "8 min czytania",
      category: "Web Development",
      image: "/budowa_strony.jpg"
    }
  ];

  return (
    <div className="min-h-screen text-white flex flex-col">
      <header className="container mx-auto pt-8 px-6">
        <div className="flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Powrót do strony głównej
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-6 text-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Blog Header */}
          <div className="mb-16 mt-24 sm:mt-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Wiedza, porady i najnowsze trendy z branży technologicznej. 
              Dzielimy się naszym doświadczeniem, aby pomóc Ci rozwijać swój biznes w internecie.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={post.slug ? `/blog/${post.slug}` : "#"}
                className="block"
              >
                <article
                  className="bg-zinc-950 border border-[#FA6503]/20 rounded-xl overflow-hidden hover:border-[#FA6503]/40 transition-all duration-300 hover:-translate-y-2"
                >
                <div className="h-48 bg-zinc-900 flex items-center justify-center overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm">Obraz artykułu</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-[#FA6503]/20 text-[#FA6503] px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-left hover:text-[#FA6503] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 text-left line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 