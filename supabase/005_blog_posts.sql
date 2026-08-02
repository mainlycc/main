-- ============================================================
-- 005: Tabela blog_posts - wpisy na blogu Mainly
-- Uruchom w Supabase SQL Editor (przed 006_blog_seed.sql)
-- Projekt: https://ugrxuqshzyraahvhzvpt.supabase.co
-- ============================================================

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  author text NOT NULL DEFAULT 'Stanisław Blicharski',
  published_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  category text NOT NULL DEFAULT 'Ogólne',
  tags text[] NOT NULL DEFAULT '{}',
  image_url text,
  read_time text NOT NULL DEFAULT '5 min czytania',
  meta_description text,
  keywords text,
  published boolean NOT NULL DEFAULT false
);

-- Auto-update updated_at (współdzielona z portfolio)
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS blog_posts_updated_at ON blog_posts;
CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read published posts" ON blog_posts;
CREATE POLICY "Public can read published posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Zalogowani użytkownicy (Auth) mogą dodawać i edytować wpisy
DROP POLICY IF EXISTS "Authenticated can manage blog posts" ON blog_posts;
CREATE POLICY "Authenticated can manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Indeksy
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx
  ON blog_posts (slug);

CREATE INDEX IF NOT EXISTS blog_posts_published_at_idx
  ON blog_posts (published_at DESC);

CREATE INDEX IF NOT EXISTS blog_posts_category_idx
  ON blog_posts (category);

CREATE INDEX IF NOT EXISTS blog_posts_published_idx
  ON blog_posts (published, published_at DESC);

COMMENT ON TABLE blog_posts IS 'Wpisy blogowe Mainly - lista, pojedynczy artykuł i sitemap';
COMMENT ON COLUMN blog_posts.slug IS 'Unikalny identyfikator URL, np. jak-stworzyc-strone-2025';
COMMENT ON COLUMN blog_posts.content IS 'Treść artykułu w HTML (komponenty .prose w blog.css)';
COMMENT ON COLUMN blog_posts.published IS 'false = szkic widoczny tylko dla zalogowanych w panelu Supabase';
