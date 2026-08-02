import type { SimpleIcon } from "simple-icons";
import {
  siFigma,
  siFramer,
  siGraphql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

type TechIconName =
  | "Next.js"
  | "React"
  | "TypeScript"
  | "Node.js"
  | "Python"
  | "Supabase"
  | "PostgreSQL"
  | "Tailwind"
  | "Framer"
  | "Vercel"
  | "GraphQL"
  | "Figma";

const iconMap: Record<TechIconName, SimpleIcon> = {
  "Next.js": siNextdotjs,
  React: siReact,
  TypeScript: siTypescript,
  "Node.js": siNodedotjs,
  Python: siPython,
  Supabase: siSupabase,
  PostgreSQL: siPostgresql,
  Tailwind: siTailwindcss,
  Framer: siFramer,
  Vercel: siVercel,
  GraphQL: siGraphql,
  Figma: siFigma,
};

function BrandIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}

export function TechIcon({ name }: { name: TechIconName }) {
  return (
    <span className="logo">
      <BrandIcon icon={iconMap[name]} />
    </span>
  );
}

export type { TechIconName };
