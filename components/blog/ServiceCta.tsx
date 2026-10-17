import Link from "next/link";
import { ArrowRight, Briefcase, Building2 } from "lucide-react";
import { getIndustryBySlug } from "@/lib/industries";
import { getServiceForPost } from "@/lib/static-blog-posts";

type ServiceCtaProps = {
  category: string;
  tags: string[];
};

// Tag artykułu → strona branżowa, do której artykuł powinien linkować.
const INDUSTRY_BY_TAG: Record<string, string> = {
  stomatologia: "gabinety-stomatologiczne",
  dentysta: "gabinety-stomatologiczne",
  producenci: "producenci-i-przemysl",
  pergole: "producenci-i-przemysl",
  "biura rachunkowe": "biura-rachunkowe",
  "kancelarie prawne": "kancelarie-prawne",
  "biura podróży": "biura-podrozy",
  leasing: "leasing-i-finanse",
  edukacja: "szkoly-i-edukacja",
};

function getIndustryForPost(tags: string[]) {
  for (const tag of tags) {
    const slug = INDUSTRY_BY_TAG[tag.toLowerCase()];
    if (slug) return getIndustryBySlug(slug) ?? undefined;
  }
  return undefined;
}

export default function ServiceCta({ category, tags }: ServiceCtaProps) {
  const service = getServiceForPost(category, tags);
  const industry = getIndustryForPost(tags ?? []);

  if (!service && !industry) {
    return null;
  }

  return (
    <div className="service-cta">
      {service && (
        <Link href={`/uslugi/${service.slug}`} className="service-cta-link">
          <span className="icon">
            <Briefcase size={20} />
          </span>
          <span className="text">
            <span className="label">Zobacz usługę</span>
            <span className="name">{service.name}</span>
          </span>
          <ArrowRight size={18} className="arr" />
        </Link>
      )}
      {industry && (
        <Link href={`/branze/${industry.slug}`} className="service-cta-link">
          <span className="icon">
            <Building2 size={20} />
          </span>
          <span className="text">
            <span className="label">Rozwiązania dla branży</span>
            <span className="name">{industry.navLabel}</span>
          </span>
          <ArrowRight size={18} className="arr" />
        </Link>
      )}
    </div>
  );
}
