"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { HeroPortfolioSlide } from "@/lib/portfolio";

type HeroBrowserProps = {
  slides: HeroPortfolioSlide[];
};

export default function HeroBrowser({ slides }: HeroBrowserProps) {
  const [active, setActive] = useState(0);
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

  if (slideCount === 0) return null;

  const current = slides[active] ?? slides[0];

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
          {slides.map((slide, index) => (
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
                sizes="(max-width: 980px) 100vw, 55vw"
                priority={index === 0}
              />
            </Link>
          ))}
        </div>
      </div>

      {slideCount > 1 && (
        <div className="browser-dots" role="tablist">
          {slides.map((slide, index) => (
            <button
              key={slide.slug}
              type="button"
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
