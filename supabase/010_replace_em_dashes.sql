-- ============================================================
-- 010: Zamiana myślników typograficznych (— – ‑ −) na zwykły -
-- Uruchom w Supabase SQL Editor
-- ============================================================

UPDATE blog_posts SET
  title = translate(title, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------'),
  excerpt = translate(excerpt, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------'),
  content = translate(content, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------'),
  meta_description = CASE
    WHEN meta_description IS NULL THEN NULL
    ELSE translate(meta_description, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------')
  END,
  keywords = CASE
    WHEN keywords IS NULL THEN NULL
    ELSE translate(keywords, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------')
  END
WHERE title ~ E'[\u2010-\u2015\u2212]'
   OR excerpt ~ E'[\u2010-\u2015\u2212]'
   OR content ~ E'[\u2010-\u2015\u2212]'
   OR COALESCE(meta_description, '') ~ E'[\u2010-\u2015\u2212]'
   OR COALESCE(keywords, '') ~ E'[\u2010-\u2015\u2212]';

UPDATE portfolio_projects SET
  name = translate(name, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------'),
  description = translate(description, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------'),
  full_description = translate(full_description, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------'),
  meta_description = CASE
    WHEN meta_description IS NULL THEN NULL
    ELSE translate(meta_description, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------')
  END,
  client = translate(client, E'\u2010\u2011\u2012\u2013\u2014\u2015\u2212', '-------')
WHERE name ~ E'[\u2010-\u2015\u2212]'
   OR description ~ E'[\u2010-\u2015\u2212]'
   OR full_description ~ E'[\u2010-\u2015\u2212]'
   OR COALESCE(meta_description, '') ~ E'[\u2010-\u2015\u2212]'
   OR client ~ E'[\u2010-\u2015\u2212]';
