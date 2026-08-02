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
              Często zadawane <DisplayEm>pytania</DisplayEm>.
            </h2>
            <p className="sec-lead">
              Nie ma tu twojego pytania?{" "}
              <Link
                href="#kontakt"
                style={{
                  color: "var(--ember-soft)",
                  borderBottom: "1px solid currentColor",
                }}
              >
                Napisz do nas →
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
