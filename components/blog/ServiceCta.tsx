import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { getServiceForPost } from "@/lib/static-blog-posts";

type ServiceCtaProps = {
  category: string;
  tags: string[];
};

export default function ServiceCta({ category, tags }: ServiceCtaProps) {
  const service = getServiceForPost(category, tags);

  if (!service) {
    return null;
  }

  return (
    <div className="service-cta">
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
    </div>
  );
}
