import DisplayEm from "@/components/DisplayEm";
import Link from "next/link";
import { faqItems } from "@/lib/home-content";
import SectionLabel from "./SectionLabel";

export default function FaqSection() {
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
              // Natywne <details>: działa bez JavaScriptu, nic do hydracji.
              <details
                key={item.question}
                className="faq-item"
                open={index === 0}
              >
                <summary className="faq-q">
                  <span>{item.question}</span>
                  <span className="plus" />
                </summary>
                <div className="faq-a">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
