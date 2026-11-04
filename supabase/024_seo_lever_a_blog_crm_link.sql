-- 024: SEO Lever A — blog gotowy-crm: link do usługi aplikacji webowych
-- Cel: wzajemne linkowanie między blogiem porównawczym a usługą

UPDATE blog_posts
SET content = replace(
      content,
      '<p>Jeśli chcesz sprawdzić te odpowiedzi u mnie — <a href="/projekty" class="link">wszystkie moje wdrożenia mają adresy i działają na żywo</a>, <a href="/cennik" class="link">widełki cenowe są publiczne</a>, a prawa do kodu przechodzą na klienta po ostatniej fakturze.',
      '<p>Jeśli chcesz sprawdzić te odpowiedzi u mnie — <a href="/projekty" class="link">wszystkie moje wdrożenia mają adresy i działają na żywo</a>, <a href="/cennik" class="link">widełki cenowe są publiczne</a>, a prawa do kodu przechodzą na klienta po ostatniej fakturze. Zobacz też szczegóły <a href="/uslugi/aplikacje-webowe" class="link">usługi aplikacji webowych na zamówienie</a>.'
    ),
    updated_at = now()
WHERE slug = 'gotowy-crm-czy-system-na-zamowienie'
  AND content LIKE '%widełki cenowe są publiczne%'
  AND content NOT LIKE '%usługi aplikacji webowych na zamówienie%';
