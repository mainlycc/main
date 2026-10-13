import type { Metadata } from "next";
import Footer from "@/components/Footer";
import AppsSection from "@/components/home/AppsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import BlogSection from "@/components/home/BlogSection";
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
import { faqPageSchema, webPageSchema } from "@/lib/schema";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: DEFAULT_TITLE,
          description: DEFAULT_DESCRIPTION,
        })}
      />
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
        <BlogSection />
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
