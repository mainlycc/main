import Footer from "@/components/Footer";
import AppsSection from "@/components/home/AppsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import HomePricingSection from "@/components/home/HomePricingSection";
import HomeTestimonialsSection from "@/components/home/HomeTestimonialsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import TechSection from "@/components/home/TechSection";
import TrustLogosSection from "@/components/home/TrustLogosSection";
import { faqItems } from "@/lib/home-content";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  description:
    "Strony, aplikacje webowe i systemy szyte na miarę - od landing page'y po rozbudowane CRM-y i platformy.",
  url: SITE_URL,
  logo: absoluteUrl(DEFAULT_OG_IMAGE),
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  telephone: "+48-500-789-826",
  email: "kontakt@mainly.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Filtrowa 83",
    addressLocality: "Warszawa",
    postalCode: "02-032",
    addressCountry: "PL",
  },
  priceRange: "2000-7000 PLN",
  areaServed: {
    "@type": "Country",
    name: "Poland",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <HeroSection />
        <StatsSection />
        <BenefitsSection />
        <TrustLogosSection />
        <ProcessSection />
        <AppsSection />
        <PortfolioSection />
        <TechSection />
        <HomePricingSection />
        <HomeTestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
