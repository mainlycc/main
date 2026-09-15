import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Artykuł nie znaleziony | Blog Mainly",
  description: "Ten artykuł nie istnieje lub został usunięty.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogNotFound() {
  return (
    <>
      <main id="main">
        <section className="wrap blog-index">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span aria-current="page">Nie znaleziono</span>
          </nav>

          <div className="intro">
            <div className="sec-label">
              <span className="num">404</span>
              <span>Artykuł niedostępny</span>
            </div>
            <h1>Artykuł nie został znaleziony</h1>
            <p className="lead">
              Link mógł wygasnąć albo adres zawiera literówkę. Wróć do listy
              artykułów i wybierz inny wpis.
            </p>
            <p className="lead" style={{ marginTop: 24 }}>
              <Link href="/blog">← Wróć do bloga</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
