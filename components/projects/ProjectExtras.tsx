import Link from "next/link";
import { getIndustryBySlug } from "@/lib/industries";
import type { Project } from "@/lib/projects";
import {
  projectMeta,
  serviceTimeline,
  techRationale,
} from "@/lib/project-meta";
import { getServiceBySlug } from "@/lib/services";

export function buildProjectFaq(project: Project) {
  const meta = projectMeta[project.slug];
  const service = meta ? getServiceBySlug(meta.service) : null;
  const industry = meta?.industry ? getIndustryBySlug(meta.industry) : null;
  const timeline = meta ? serviceTimeline[meta.service] : null;
  const price = service?.priceFrom
    ? new Intl.NumberFormat("pl-PL").format(service.priceFrom)
    : null;

  const faq: { question: string; answer: string }[] = [];

  if (price && service) {
    faq.push({
      question: `Ile kosztowałby projekt podobny do „${project.name}"?`,
      answer: `Projekty z kategorii „${meta.type.toLowerCase()}" wyceniam w ramach usługi „${service.navLabel}" — od ${price} zł netto. Ostateczna kwota zależy przede wszystkim od liczby ról użytkowników i integracji z systemami zewnętrznymi, nie od liczby ekranów. Dokładną wycenę z harmonogramem dostajesz w 48 h po bezpłatnej konsultacji.`,
    });
  }

  if (timeline) {
    faq.push({
      question: "Ile trwa realizacja takiego projektu?",
      answer: `Typowy czas realizacji dla tego rodzaju wdrożenia to ${timeline}. Harmonogram z kamieniami milowymi ustalam przed startem, a postęp pokazuję co tydzień — każdy etap wymaga Twojej akceptacji, zanim przejdziemy dalej.`,
    });
  }

  faq.push({
    question: "Kto realizował ten projekt?",
    answer:
      "Cały projekt — od mapowania procesu, przez projekt interfejsu i kod, po wdrożenie — prowadziłem osobiście. Nie pracuję z podwykonawcami, więc masz jeden punkt kontaktu przez całą współpracę i po niej.",
  });

  if (industry) {
    faq.push({
      question: `Czy zrobisz coś podobnego dla firmy z branży „${industry.navLabel.toLowerCase()}"?`,
      answer: `Tak — to jedna z branż, w których mam wdrożenia. Na stronie „${industry.h1}" opisuję, co konkretnie buduję dla takich firm i jakie problemy to rozwiązuje.`,
    });
  }

  faq.push({
    question: "Czy kod projektu należy do klienta?",
    answer:
      "Tak. Po opłaceniu ostatniej faktury przekazuję pełne prawa do kodu i dostęp do repozytorium. Nie uzależniam klientów od siebie — projekt można rozwijać samodzielnie albo z innym zespołem.",
  });

  return faq;
}

export default function ProjectExtras({ project }: { project: Project }) {
  const meta = projectMeta[project.slug];
  const service = meta ? getServiceBySlug(meta.service) : null;
  const industry = meta?.industry ? getIndustryBySlug(meta.industry) : null;
  const timeline = meta ? serviceTimeline[meta.service] : null;
  const faq = buildProjectFaq(project);

  const explainedTech = project.technologies.filter((t) => techRationale[t]);

  return (
    <div className="proj-extras wrap">
      <section className="page-section">
        <h2 className="sec-title" style={{ fontSize: 28 }}>
          Specyfikacja projektu
        </h2>
        <div style={{ overflowX: "auto", marginBottom: 40 }}>
          <table className="price-table">
            <tbody>
              <tr>
                <th scope="row">Klient</th>
                <td>{project.client}</td>
              </tr>
              <tr>
                <th scope="row">Rok realizacji</th>
                <td>{project.year}</td>
              </tr>
              {meta && (
                <tr>
                  <th scope="row">Typ projektu</th>
                  <td>{meta.type}</td>
                </tr>
              )}
              <tr>
                <th scope="row">Zakres prac</th>
                <td>{project.scope ?? "Strategia, UX, kod, wdrożenie"}</td>
              </tr>
              {timeline && (
                <tr>
                  <th scope="row">Typowy czas realizacji</th>
                  <td>{timeline}</td>
                </tr>
              )}
              <tr>
                <th scope="row">Zespół</th>
                <td>1 osoba — bez podwykonawców</td>
              </tr>
              <tr>
                <th scope="row">Technologie</th>
                <td>{project.technologies.join(", ")}</td>
              </tr>
              {meta?.result && (
                <tr>
                  <th scope="row">Efekt</th>
                  <td>
                    <strong>{meta.result}</strong>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {project.features.length > 0 && (
        <section className="page-section">
          <h2 className="sec-title" style={{ fontSize: 28 }}>
            Co dokładnie obejmowało wdrożenie
          </h2>
          <ul className="checklist">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {explainedTech.length > 0 && (
        <section className="page-section">
          <h2 className="sec-title" style={{ fontSize: 28 }}>
            Dlaczego akurat te technologie
          </h2>
          <p className="prose-block">
            Stack dobieram pod projekt, nie odwrotnie. Poniżej powód, dla
            którego każdy element znalazł się w tym konkretnym wdrożeniu.
          </p>
          <ul className="checklist">
            {explainedTech.map((tech) => (
              <li key={tech}>
                <strong>{tech}</strong> — {techRationale[tech]}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="page-section">
        <h2 className="sec-title" style={{ fontSize: 28 }}>
          Pytania o ten projekt
        </h2>
        <div className="faq-list" style={{ maxWidth: 860, marginBottom: 48 }}>
          {faq.map((item) => (
            <div key={item.question} className="faq-item open">
              <h3 className="faq-q" style={{ cursor: "default" }}>
                <span>{item.question}</span>
              </h3>
              <div className="faq-a">{item.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {(service || industry) && (
        <section className="page-section">
          <h2 className="sec-title" style={{ fontSize: 28 }}>
            Potrzebujesz czegoś podobnego?
          </h2>
          <div className="link-cards">
            {service && (
              <Link href={`/uslugi/${service.slug}`} className="link-card">
                <h3>{service.navLabel}</h3>
                <p>{service.teaser}</p>
                <span className="arr">Zobacz usługę ↗</span>
              </Link>
            )}
            {industry && (
              <Link href={`/branze/${industry.slug}`} className="link-card">
                <h3>Rozwiązania dla: {industry.navLabel}</h3>
                <p>{industry.teaser}</p>
                <span className="arr">Zobacz branżę ↗</span>
              </Link>
            )}
            <Link href="/cennik" className="link-card">
              <h3>Cennik</h3>
              <p>
                Realne widełki dla stron, aplikacji i systemów — oraz to, od
                czego zależy końcowa kwota.
              </p>
              <span className="arr">Sprawdź ↗</span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
