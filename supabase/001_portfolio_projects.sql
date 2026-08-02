-- ============================================================
-- 001: Tabela portfolio_projects - pełne portfolio Mainly
-- Uruchom w Supabase SQL Editor (przed 002_portfolio_seed.sql)
-- ============================================================

CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  legacy_id integer,
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  full_description text NOT NULL DEFAULT '',
  image_url text NOT NULL DEFAULT '/placeholder.svg?height=600&width=800',
  fallback_image_url text,
  client text NOT NULL DEFAULT '',
  year integer NOT NULL,
  project_url text NOT NULL DEFAULT '',
  technologies text[] NOT NULL DEFAULT '{}',
  features text[] NOT NULL DEFAULT '{}',
  show_on_homepage boolean NOT NULL DEFAULT false,
  homepage_featured boolean NOT NULL DEFAULT false,
  homepage_tags text[] NOT NULL DEFAULT '{}',
  homepage_preview text CHECK (
    homepage_preview IS NULL
    OR homepage_preview IN ('featured', 'airset', 'akademia')
  ),
  homepage_sort_order integer,
  sort_order integer NOT NULL DEFAULT 0,
  published boolean NOT NULL DEFAULT false,
  meta_description text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Auto-update updated_at (współdzielona z blogiem)
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS portfolio_projects_updated_at ON portfolio_projects;
CREATE TRIGGER portfolio_projects_updated_at
  BEFORE UPDATE ON portfolio_projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- RLS: publiczny odczyt opublikowanych projektów
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read published portfolio projects" ON portfolio_projects;
CREATE POLICY "Public can read published portfolio projects"
  ON portfolio_projects FOR SELECT
  USING (published = true);

-- Indeksy
CREATE INDEX IF NOT EXISTS portfolio_projects_slug_idx
  ON portfolio_projects (slug);

CREATE INDEX IF NOT EXISTS portfolio_projects_published_sort_idx
  ON portfolio_projects (published, sort_order DESC, year DESC);

CREATE INDEX IF NOT EXISTS portfolio_projects_homepage_idx
  ON portfolio_projects (show_on_homepage, homepage_sort_order)
  WHERE show_on_homepage = true AND published = true;

CREATE INDEX IF NOT EXISTS portfolio_projects_year_idx
  ON portfolio_projects (year DESC);

COMMENT ON TABLE portfolio_projects IS 'Pełne portfolio projektów Mainly - lista, case study i sekcja na stronie głównej';
COMMENT ON COLUMN portfolio_projects.legacy_id IS 'Stare ID z lib/projects.ts (do migracji)';
COMMENT ON COLUMN portfolio_projects.show_on_homepage IS 'Czy projekt pojawia się w sekcji Wybrane prace na homepage';
COMMENT ON COLUMN portfolio_projects.homepage_preview IS 'Wariant placeholdera gdy brak screenshota: featured | airset | akademia';
