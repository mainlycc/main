-- ============================================================
-- 015: Kolumny case study dla portfolio_projects
-- Uruchom RAZ w Supabase SQL Editor, przed 016_case_studies.sql
-- ============================================================

ALTER TABLE portfolio_projects
  ADD COLUMN IF NOT EXISTS headline          text,
  ADD COLUMN IF NOT EXISTS tags              text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS scope             text,
  ADD COLUMN IF NOT EXISTS branza            text,
  ADD COLUMN IF NOT EXISTS obszar            text,
  ADD COLUMN IF NOT EXISTS hero_caption      text,
  ADD COLUMN IF NOT EXISTS case_study_html   text,
  -- Dane strukturalne (żeby dało się kiedyś przerenderować bez ruszania HTML)
  ADD COLUMN IF NOT EXISTS case_study_data   jsonb NOT NULL DEFAULT '{}'::jsonb,
  -- Brief graficzny: co sfotografować / wygenerować pod ten case study
  ADD COLUMN IF NOT EXISTS image_brief       jsonb NOT NULL DEFAULT '[]'::jsonb;

COMMENT ON COLUMN portfolio_projects.case_study_html IS
  'Generowane przez scripts/build-case-studies.mjs z content/case-studies/*.md. Nie edytuj ręcznie.';
COMMENT ON COLUMN portfolio_projects.case_study_data IS
  'Strukturalna wersja case study: rezultaty, proces, dodatkowe, opinia.';
COMMENT ON COLUMN portfolio_projects.image_brief IS
  'Lista slotów graficznych z opisem co ma przedstawiać zdjęcie.';
