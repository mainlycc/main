-- ============================================================
-- 017: Usunięcie adresów e-mail klientów z portfolio
-- ============================================================

UPDATE portfolio_projects
SET
  client = 'JK Term',
  updated_at = now()
WHERE slug = 'jkterm-wizualizator'
  AND client LIKE '%@%';
