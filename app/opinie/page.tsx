import type { Metadata } from "next";
import Image from "next/image";
import OpinieForm from "@/components/OpinieForm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { testimonials } from "@/lib/home-content";
import { breadcrumbSchema, ORG_ID } from "@/lib/schema";
import { absoluteUrl, defaultOgImages, SITE_URL } from "@/lib/seo";
import { resolveTestimonialAvatar } from "@/lib/testimonial-avatar";

export const metadata: Metadata = {
  title: "Opinie klientów o Mainly — realizacje stron i aplikacji",
  description:
    "Zobacz opinie klientów o współpracy z Mainly i zostaw własną recenzję. Referencje z realizacji stron, aplikacji i systemów dla firm.",
  alternates: { canonical: "/opinie" },
  openGraph: {
    title: "Opinie klientów | Mainly",
    description:
      "Referencje klientów Mainly oraz formularz do zostawienia własnej opinii o współpracy.",
    url: "https://www.mainly.pl/opinie",
    type: "website",
    images: defaultOgImages("Opinie klientów o Mainly"),
  },
};

const reviewsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Opinie klientów — Mainly",
  description:
    "Zbiór opinii klientów o współpracy z Mainly przy stronach, aplikacjach i systemach dla firm.",
  url: absoluteUrl("/opinie"),
  mainEntity: { "@id": ORG_ID },
  about: { "@id": ORG_ID },
};

export default function OpiniePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Opinie", url: absoluteUrl("/opinie") },
        ])}
      />
      <JsonLd data={reviewsPageSchema} />
      <main id="main" className="pt-[120px] md:pt-[140px] pb-24">
        <section className="wrap max-w-3xl py-8">
          <header className="mb-10">
            <p className="text-sm text-[var(--fg-dim)] mb-3">
              Opinie klientów · {testimonials.length} referencji
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Co mówią klienci o współpracy z Mainly
            </h1>
            <p className="text-[var(--fg-dim)] leading-relaxed">
              Poniżej opinie z realnych projektów. Jeśli pracowaliśmy razem —
              zostaw swoją recenzję na dole strony.
            </p>
          </header>

          <ul className="opinie-list space-y-6 mb-16">
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <div className="stars text-[var(--ember-soft)] mb-3" aria-label="Ocena 5 na 5">
                  ★★★★★
                </div>
                <blockquote className="text-[var(--fg)] leading-relaxed mb-4">
                  {item.text}
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    src={resolveTestimonialAvatar(item.avatar)}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <strong>{item.name}</strong>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold mb-2">Zostaw swoją opinię</h2>
            <p className="text-[var(--fg-dim)] mb-6">
              Twoja recenzja pomaga innym ocenić współpracę i wspiera rozwój
              Mainly.
            </p>
            <OpinieForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
