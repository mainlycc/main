import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import DisplayEm from "@/components/DisplayEm";
import HeroBrowser from "./HeroBrowser";
import { getHeroPortfolioSlides } from "@/lib/portfolio";

export default async function HeroSection() {
  const slides = await getHeroPortfolioSlides();

  return (
    <header className="hero">
      <div className="grid">
        <div className="hero-col">
          <div className="eyebrow">
            <span className="pulse" />
            <span>Aplikacje webowe i systemy dla firm</span>
          </div>

          <h1 className="title">
            <span>Aplikacje webowe i systemy, które zastępują ręczną pracę </span>
            <span className="line2">
              <DisplayEm>w Twojej firmie.</DisplayEm>
            </span>
          </h1>

          <p className="hero-lead">
            Buduję aplikacje webowe, systemy i strony na zamówienie – takie,
            które zastępują arkusze, eliminują ręczne procesy i dają
            właścicielowi pełną kontrolę w czasie rzeczywistym. Od projektu po
            wdrożenie, bez podwykonawców.
          </p>

          <div className="hero-actions">
            <Link href="#kontakt" className="btn-primary">
              <Calendar size={18} strokeWidth={2} aria-hidden />
              Umów rozmowę
              <ArrowRight size={18} strokeWidth={2} className="arr" aria-hidden />
            </Link>
            <Link href="#prace" className="btn-ghost">
              Zobacz realizacje
              <ArrowRight size={18} strokeWidth={2} className="arr" aria-hidden />
            </Link>
          </div>

          <div className="trust">
            <div className="avatars" aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="trust-meta">
              <div className="trust-stars" aria-label="Ocena 5 na 5">
                ★★★★★
              </div>
              <span>
                Zaufało mi już <strong>36+</strong> firm
              </span>
            </div>
          </div>
        </div>

        <HeroBrowser slides={slides} />
      </div>
    </header>
  );
}
