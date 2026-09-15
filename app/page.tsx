import type { Metadata } from "next";
import Footer from "@/components/Footer";
import AppsSection from "@/components/home/AppsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import StatsSection from "@/components/home/StatsSection";
import HomePricingSection from "@/components/home/HomePricingSection";
import HomeTestimonialsSection from "@/components/home/HomeTestimonialsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import TechSection from "@/components/home/TechSection";
import TrustLogosSection from "@/components/home/TrustLogosSection";
import JsonLd from "@/components/seo/JsonLd";
import { faqItems } from "@/lib/home-content";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqItems)} />

      <main id="main">
        <HeroSection />
        <StatsSection />
        <IntroSection />
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
