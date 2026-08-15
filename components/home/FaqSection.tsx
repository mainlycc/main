"use client";

import DisplayEm from "@/components/DisplayEm";
import Link from "next/link";
import { useState } from "react";
import { faqItems } from "@/lib/home-content";
import SectionLabel from "./SectionLabel";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="faq-layout">
          <div>
            <SectionLabel num="07" label="FAQ" />
            <h2 className="sec-title">
              Tworzenie stron i aplikacji webowych —{" "}
              <DisplayEm>pytania i odpowiedzi</DisplayEm>.
            </h2>
            <p className="sec-lead">
              Nie ma tu twojego pytania?{" "}
              <Link href="#kontakt" className="inline-link">
                Napisz do mnie →
              </Link>
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className={`faq-item${openIndex === index ? " open" : ""}`}
              >
                <button
                  className="faq-q"
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                >
                  <span>{item.question}</span>
                  <span className="plus" />
                </button>
                <div className="faq-a">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
