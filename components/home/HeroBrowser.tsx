"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HeroPortfolioSlide } from "@/lib/portfolio";

type HeroBrowserProps = {
  slides: HeroPortfolioSlide[];
};

export default function HeroBrowser({ slides }: HeroBrowserProps) {
  const [active, setActive] = useState(0);
  const [nextReady, setNextReady] = useState(false);
  const [fading, setFading] = useState<number | null>(null);
  const previous = useRef(0);
  const slideCount = slides.length;

  const goTo = useCallback((index: number) => {
    if (slideCount === 0) return;
    setActive(index);
  }, [slideCount]);

  useEffect(() => {
    if (slideCount <= 1) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slideCount);
    }, 4200);

    return () => clearInterval(timer);
  }, [slideCount]);

  // Kolejny kadr dokładamy dopiero po pierwszym malowaniu, żeby nie konkurował z nagłówkiem.
  useEffect(() => {
    if (slideCount <= 1) return;
    const arm = () => setNextReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(arm, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(arm, 1200);
    return () => window.clearTimeout(id);
  }, [slideCount]);

  useEffect(() => {
    if (previous.current === active) return;
    const outgoing = previous.current;
    previous.current = active;
    setFading(outgoing);
    const id = window.setTimeout(() => setFading(null), 700);
    return () => window.clearTimeout(id);
  }, [active]);

  if (slideCount === 0) return null;

  const current = slides[active] ?? slides[0];
  const upcoming = slideCount > 1 ? (active + 1) % slideCount : active;

  return (
    <div className="hero-stage">
      <div className="browser">
        <div className="chrome">
          <div className="lights">
            <i />
            <i />
            <i />
          </div>
          <div className="url">
            <span className="lock">⌁</span>
            <span className="path">{current.urlLabel}</span>
            <span className="cycle">{current.title}</span>
          </div>
        </div>
        <div className="screen">
          {slides.map((slide, index) => {
            const visible =
              index === active || index === fading || (nextReady && index === upcoming);
            if (!visible) return null;

            return (
              <Link
                key={slide.slug}
                href={`/projekty/${slide.slug}`}
                className={`browser-slide${active === index ? " active" : ""}`}
                aria-label={slide.label}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-contain object-top"
                  quality={60}
                  sizes="(max-width: 980px) calc(100vw - 48px), 720px"
                  loading={index === active ? "eager" : "lazy"}
                  fetchPriority="low"
                />
              </Link>
            );
          })}
        </div>
      </div>

      {slideCount > 1 && (
        <div className="browser-dots" role="tablist" aria-label="Wybierz projekt">
          {slides.map((slide, index) => (
            <button
              key={slide.slug}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? "active" : ""}
              aria-label={slide.label}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
