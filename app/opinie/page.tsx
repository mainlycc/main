import type { Metadata } from "next";
import OpinieForm from "@/components/OpinieForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zostaw opinię | Mainly",
  description:
    "Podziel się opinią o współpracy z Mainly. Twoja recenzja pomaga nam się rozwijać i pokazuje innym, jak wygląda współpraca przy tworzeniu stron i aplikacji webowych.",
  alternates: { canonical: "/opinie" },
  openGraph: {
    title: "Zostaw opinię | Mainly",
    description:
      "Podziel się opinią o współpracy z Mainly. Twoja recenzja może zostać opublikowana na stronie wśród referencji.",
    url: "https://mainly.pl/opinie",
    type: "website",
  },
};

export default function OpiniePage() {
  return (
    <>
      <main className="pt-[120px] md:pt-[140px] pb-24">
        <section className="wrap max-w-3xl py-8">
          <OpinieForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
