import { faqItems } from "./home-content";
import { industries } from "./industries";
import { type LandingPageData } from "./landing";
import { projects } from "./projects";
import { services } from "./services";
import { absoluteUrl, SITE_NAME, SITE_URL, stripHtml } from "./seo";
import { BUSINESS } from "./site";
import { getSupabase } from "./supabase";

function landingToMarkdown(page: LandingPageData, pathPrefix: string): string {
  const url = absoluteUrl(`${pathPrefix}/${page.slug}`);
  const lines = [
    `# ${page.h1}`,
    "",
    page.intro,
    "",
    `URL: ${url}`,
    "",
  ];

  if (page.priceFrom) {
    lines.push(`Cena od: ${page.priceFrom.toLocaleString("pl-PL")} zł netto`, "");
  }

  for (const section of page.sections) {
    lines.push(`## ${section.heading}`, "", section.body, "");
    if (section.bullets?.length) {
      for (const bullet of section.bullets) {
        lines.push(`- ${bullet}`);
      }
      lines.push("");
    }
  }

  if (page.faq?.length) {
    lines.push("## FAQ", "");
    for (const item of page.faq) {
      lines.push(`### ${item.question}`, "", item.answer, "");
    }
  }

  return lines.join("\n").trim();
}

function homeMarkdown(): string {
  const lines = [
    `# Aplikacje webowe i systemy, które zastępują ręczną pracę w Twojej firmie`,
    "",
    "Buduję aplikacje webowe, systemy i strony na zamówienie – takie, które zastępują arkusze, eliminują ręczne procesy i dają właścicielowi pełną kontrolę w czasie rzeczywistym. Od projektu po wdrożenie, bez podwykonawców.",
    "",
    `URL: ${SITE_URL}`,
    "",
    "## O Mainly",
    "",
    `${SITE_NAME} to jednoosobowa pracownia z Warszawy. ${BUSINESS.personName} projektuje, koduje i wdraża aplikacje webowe, systemy CRM i strony internetowe dla firm w całej Polsce. 36 wdrożeń w 9 branżach.`,
    "",
    "## Usługi",
    "",
    ...services.map(
      (s) =>
        `- [${s.navLabel}](${absoluteUrl(`/uslugi/${s.slug}`)}): ${s.teaser}`
    ),
    "",
    "## FAQ",
    "",
  ];

  for (const item of faqItems) {
    lines.push(`### ${item.question}`, "", item.answer, "");
  }

  lines.push(
    "## Kontakt",
    "",
    `- Email: ${BUSINESS.email}`,
    `- Telefon: ${BUSINESS.telephoneDisplay}`,
    `- Adres: ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`,
    `- [Formularz kontaktowy](${absoluteUrl("/kontakt")})`,
    "",
    `Pełny indeks dla agentów: ${SITE_URL}/llms.txt`
  );

  return lines.join("\n").trim();
}

function aboutMarkdown(): string {
  return [
    `# Jedna osoba. Cała odpowiedzialność.`,
    "",
    `Nazywam się ${BUSINESS.personName} i prowadzę ${SITE_NAME} — jednoosobową pracownię z Warszawy. Buduję aplikacje webowe, systemy na zamówienie i strony internetowe dla firm: sam projektuję, sam koduję, sam wdrażam i sam odpowiadam na zgłoszenia. Za mną 36 wdrożeń w 9 branżach, w tym system obsługujący ponad 865 użytkowników.`,
    "",
    `URL: ${absoluteUrl("/o-mnie")}`,
    "",
    "## Dlaczego jedna osoba, a nie agencja",
    "",
    "W agencji projekt przechodzi przez ręce kilku osób — każde przekazanie to miejsce, w którym gubi się kontekst. U mnie rozmawiasz z osobą, która napisze Twój kod. Jeden punkt kontaktu od pierwszego maila po wsparcie po wdrożeniu, bez podwykonawców, odpowiedź w 24 h w dni robocze.",
    "",
    "## Stack",
    "",
    "Next.js, React, TypeScript, Node.js, Python, Supabase, PostgreSQL, Tailwind, Vercel.",
    "",
    `[Kontakt](${absoluteUrl("/kontakt")}) · [Realizacje](${absoluteUrl("/projekty")})`,
  ].join("\n");
}

function contactMarkdown(): string {
  return [
    `# Porozmawiajmy o Twojej aplikacji`,
    "",
    "Opowiedz, co chcesz usprawnić w swojej firmie. Nie musisz wiedzieć, jakiego systemu potrzebujesz — wystarczy opis problemu. Bezpłatna konsultacja 30 min, wycena w 48 h.",
    "",
    `URL: ${absoluteUrl("/kontakt")}`,
    "",
    `- Email: [${BUSINESS.email}](mailto:${BUSINESS.email})`,
    `- Telefon: [${BUSINESS.telephoneDisplay}](tel:${BUSINESS.telephone})`,
    `- Adres: ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`,
    "",
    `[Polityka prywatności](${absoluteUrl("/polityka-prywatnosci")})`,
  ].join("\n");
}

function privacyMarkdown(): string {
  return [
    `# Polityka prywatności — ${SITE_NAME}`,
    "",
    `Administratorem danych osobowych jest ${SITE_NAME}, ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}, NIP: ${BUSINESS.taxID}.`,
    "",
    `URL: ${absoluteUrl("/polityka-prywatnosci")}`,
    "",
    "Przetwarzamy dane przekazane przez formularz kontaktowy (imię, email, telefon, treść wiadomości) w celu odpowiedzi na zapytania i realizacji usług. Podstawa prawna: art. 6 ust. 1 lit. b i f RODO. Dane przechowujemy przez okres niezbędny do realizacji usług i dochodzenia roszczeń.",
    "",
    "Masz prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu, przenoszenia danych oraz skargi do UODO. Kontakt w sprawach RODO: kontakt@mainly.pl.",
    "",
    "Strona używa plików cookies do analityki i działania formularzy. Możesz je wyłączyć w ustawieniach przeglądarki.",
  ].join("\n");
}

function hubMarkdown(title: string, intro: string, items: { label: string; url: string; teaser: string }[]): string {
  const lines = [`# ${title}`, "", intro, ""];
  for (const item of items) {
    lines.push(`- [${item.label}](${item.url}): ${item.teaser}`);
  }
  return lines.join("\n");
}

function projectMarkdown(slug: string): string | null {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  const lines = [
    `# ${project.name}`,
    "",
    project.fullDescription || project.description,
    "",
    `URL: ${absoluteUrl(`/projekty/${project.slug}`)}`,
    "",
    `- Klient: ${project.client}`,
    `- Rok: ${project.year}`,
    `- Technologie: ${project.technologies.join(", ")}`,
    "",
    "## Funkcje",
    "",
    ...project.features.map((f) => `- ${f}`),
  ];

  if (project.caseStudyHtml) {
    lines.push("", "## Case study", "", stripHtml(project.caseStudyHtml));
  }

  return lines.join("\n");
}

async function blogPostMarkdown(slug: string): Promise<string | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data } = await supabase
    .from("blog_posts")
    .select("title, excerpt, content, author, published_at, category")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!data) return null;

  return [
    `# ${data.title}`,
    "",
    data.excerpt,
    "",
    `URL: ${absoluteUrl(`/blog/${slug}`)}`,
    `- Autor: ${data.author}`,
    `- Kategoria: ${data.category}`,
    `- Data: ${data.published_at}`,
    "",
    stripHtml(data.content),
  ].join("\n");
}

export function notFoundMarkdown(path: string): string {
  return [
    `# 404 — Strona nie znaleziona`,
    "",
    `Ścieżka \`${path}\` nie istnieje na ${SITE_URL}.`,
    "",
    "## Gdzie szukać dalej",
    "",
    `- [Strona główna](${SITE_URL}/)`,
    `- [Usługi](${absoluteUrl("/uslugi")})`,
    `- [Portfolio](${absoluteUrl("/projekty")})`,
    `- [Blog](${absoluteUrl("/blog")})`,
    `- [Kontakt](${absoluteUrl("/kontakt")})`,
    `- [O mnie / About](${absoluteUrl("/o-mnie")})`,
    `- [Polityka prywatności / Privacy](${absoluteUrl("/polityka-prywatnosci")})`,
    `- [Mapa strony (sitemap.xml)](${SITE_URL}/sitemap.xml)`,
    `- [Instrukcje dla agentów (llms.txt)](${SITE_URL}/llms.txt)`,
  ].join("\n");
}

export async function getMarkdownForPath(pathname: string): Promise<string | null> {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") return homeMarkdown();
  if (path === "/o-mnie" || path === "/about") return aboutMarkdown();
  if (path === "/kontakt" || path === "/contact") return contactMarkdown();
  if (path === "/polityka-prywatnosci" || path === "/privacy") {
    return privacyMarkdown();
  }

  if (path === "/uslugi") {
    return hubMarkdown(
      "Usługi Mainly",
      "Aplikacje webowe, systemy, automatyzacja i strony internetowe dla firm.",
      services.map((s) => ({
        label: s.navLabel,
        url: absoluteUrl(`/uslugi/${s.slug}`),
        teaser: s.teaser,
      }))
    );
  }

  if (path.startsWith("/uslugi/")) {
    const slug = path.slice("/uslugi/".length);
    const page = services.find((s) => s.slug === slug);
    if (page) return landingToMarkdown(page, "/uslugi");
  }

  if (path === "/branze") {
    return hubMarkdown(
      "Branże obsługiwane przez Mainly",
      "Doświadczenie w 9 branżach — od biur rachunkowych po produkcję.",
      industries.map((i) => ({
        label: i.navLabel,
        url: absoluteUrl(`/branze/${i.slug}`),
        teaser: i.teaser,
      }))
    );
  }

  if (path.startsWith("/branze/")) {
    const slug = path.slice("/branze/".length);
    const page = industries.find((i) => i.slug === slug);
    if (page) return landingToMarkdown(page, "/branze");
  }

  if (path === "/projekty") {
    return hubMarkdown(
      "Portfolio Mainly",
      "36 wdrożonych projektów — aplikacje, systemy i strony.",
      projects.slice(0, 20).map((p) => ({
        label: p.name,
        url: absoluteUrl(`/projekty/${p.slug}`),
        teaser: p.description,
      }))
    );
  }

  if (path.startsWith("/projekty/")) {
    const slug = path.slice("/projekty/".length);
    return projectMarkdown(slug);
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    return blogPostMarkdown(slug);
  }

  if (path === "/cennik") {
    return [
      `# Cennik Mainly`,
      "",
      "Realne widełki cenowe — strony od 2 900 zł, aplikacje i systemy od 9 900 zł, opieka techniczna od 290 zł/mies.",
      "",
      `URL: ${absoluteUrl("/cennik")}`,
      "",
      `[Bezpłatna wycena](${absoluteUrl("/kontakt")}) w 48 h.`,
    ].join("\n");
  }

  if (path === "/proces") {
    return [
      `# Proces współpracy z Mainly`,
      "",
      "Cztery etapy: strategia i brief (3–5 dni), projekt UX/UI (1–2 tygodnie), kod i wdrożenie (2–4 tygodnie), start i opieka techniczna.",
      "",
      `URL: ${absoluteUrl("/proces")}`,
    ].join("\n");
  }

  if (path === "/opinie") {
    return [
      `# Opinie klientów Mainly`,
      "",
      `Recenzje firm, które współpracowały z ${SITE_NAME}.`,
      "",
      `URL: ${absoluteUrl("/opinie")}`,
    ].join("\n");
  }

  return null;
}
