import type { Metadata } from "next";
import OpinieForm from "@/components/OpinieForm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl, defaultOgImages, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Opinie klientów o Mainly — realizacje stron i aplikacji",
  description:
    "Podziel się opinią o współpracy z Mainly. Twoja recenzja pomaga nam się rozwijać i pokazuje innym, jak wygląda ta współpraca.",
  alternates: { canonical: "/opinie" },
  openGraph: {
    title: "Zostaw opinię | Mainly",
    description:
      "Podziel się opinią o współpracy z Mainly. Twoja recenzja może zostać opublikowana na stronie wśród referencji.",
    url: "https://www.mainly.pl/opinie",
    type: "website",
    images: defaultOgImages("Opinie klientów o Mainly"),
  },
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
      <main className="pt-[120px] md:pt-[140px] pb-24">
        <section className="wrap max-w-3xl py-8">
          <OpinieForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
