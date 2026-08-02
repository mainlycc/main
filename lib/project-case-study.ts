import type { Project } from "./projects";
import { splitTitleEmphasis } from "./blog";

export function getProjectTags(project: Project): string[] {
  if (project.tags?.length) return project.tags;
  return project.technologies.slice(0, 3);
}

export function getProjectHeadline(project: Project): string {
  return project.headline ?? project.name;
}

export function getProjectUrlLabel(url: string): string {
  if (!url) return "";
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function buildFallbackCaseStudy(project: Project): string {
  const paragraphs = project.fullDescription
    .split("\n\n")
    .filter(Boolean)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");

  const features = project.features.length
    ? `<h2><span class="idx">Funkcje</span>Kluczowe elementy projektu</h2><ul>${project.features
        .map((f) => `<li><strong>${escapeHtml(f)}</strong></li>`)
        .join("")}</ul>`
    : "";

  const techTags = `<div class="tech-tags">${project.technologies
    .map((t) => `<span>${escapeHtml(t)}</span>`)
    .join("")}</div>`;

  return `${paragraphs}${features}${techTags}`;
}

export function getProjectCaseStudyHtml(project: Project): string {
  return project.caseStudyHtml ?? buildFallbackCaseStudy(project);
}

export function renderHeadline(title: string) {
  const parts = splitTitleEmphasis(title);
  if (!parts) return title;

  return {
    before: parts.before,
    emphasis: parts.emphasis,
    after: parts.after,
  };
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
