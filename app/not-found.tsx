import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Strona nie znaleziona | Mainly",
  description: "Ta strona nie istnieje. Wróć do strony głównej lub skorzystaj z mapy witryny.",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/", label: "Strona główna" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/projekty", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/o-mnie", label: "O mnie" },
];

export default function NotFound() {
  return (
    <>
      <main id="main">
        <section className="wrap page-head">
          <div className="sec-label">
            <span className="num">404</span>
            <span>Strona niedostępna</span>
          </div>
          <h1>Nie znaleziono tej strony</h1>
          <p className="sec-lead">
            Adres mógł wygasnąć albo zawiera literówkę. Poniżej znajdziesz
            najczęściej odwiedzane sekcje serwisu. Agentom AI: pełny indeks
            treści jest w{" "}
            <Link href="/llms.txt">llms.txt</Link>, mapa w{" "}
            <Link href="/sitemap.xml">sitemap.xml</Link>.
          </p>
          <ul className="checklist" style={{ marginTop: 24 }}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
