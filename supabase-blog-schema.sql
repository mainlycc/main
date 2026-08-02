-- PRZENIESIONO do supabase/005_blog_posts.sql i supabase/006_blog_seed.sql
-- Ten plik zostawiony dla kompatybilności wstecznej.

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  author text NOT NULL DEFAULT 'Stanisław Blicharski',
  published_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  category text NOT NULL DEFAULT 'Ogólne',
  tags text[] DEFAULT '{}',
  image_url text,
  read_time text DEFAULT '5 min czytania',
  meta_description text,
  keywords text,
  published boolean DEFAULT false
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- RLS: public can read published posts
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published posts"
  ON blog_posts FOR SELECT
  USING (published = true);

-- Indexes for performance
CREATE INDEX blog_posts_slug_idx ON blog_posts (slug);
CREATE INDEX blog_posts_published_at_idx ON blog_posts (published_at DESC);
CREATE INDEX blog_posts_category_idx ON blog_posts (category);


-- ============================================================
-- SEED DATA: istniejące artykuły (wklej po stworzeniu tabeli)
-- ============================================================
INSERT INTO blog_posts (
  slug, title, excerpt, category, author, published_at,
  read_time, tags, image_url, meta_description, keywords, published,
  content
) VALUES (
  'jak-stworzyc-nowoczesna-strone-internetowa-2025',
  'Jak stworzyć nowoczesną stronę internetową w 2025 roku',
  'Poznaj najnowsze trendy i technologie, które pomogą Ci stworzyć stronę internetową, która przyciąga uwagę i konwertuje w 2025 roku.',
  'Web Development',
  'Zespół Mainly',
  '2025-01-15 00:00:00+00',
  '8 min czytania',
  ARRAY['Web Development', 'SEO', 'AI', '2025', 'Trendy', 'Technologie'],
  '/budowa_strony.jpg',
  'Poznaj najnowsze trendy i technologie tworzenia stron internetowych w 2025 roku. AI, Web 3.0, SEO i najlepsze praktyki dla nowoczesnych stron.',
  'strona internetowa 2025, web development, AI, SEO, trendy technologiczne, nowoczesne strony',
  true,
  '<p>W 2025 roku nowoczesna strona internetowa to nie tylko ładny wygląd. To szybkość, dostępność, SEO, responsywność, bezpieczeństwo i funkcjonalność.</p>
<h2>Dlaczego warto mieć nowoczesną stronę www w 2025?</h2>
<p>Internet wciąż się zmienia, a użytkownicy mają coraz wyższe oczekiwania. Dobra strona internetowa w 2025 roku powinna ładować się w mniej niż 2 sekundy, wyglądać świetnie na telefonach, być łatwa do znalezienia w Google i angażować odwiedzających do działania.</p>
<h2>1. Określ cel swojej strony</h2>
<p>Zanim zamówisz stronę, odpowiedz sobie na pytanie: <strong>po co mi ta strona?</strong> Czy chcesz zdobywać klientów, pokazać portfolio, sprzedawać produkty, czy budować markę osobistą? Cel wpływa na strukturę strony, jej treść i funkcjonalność.</p>
<h2>2. Zadbaj o przemyślany design i user experience</h2>
<p>Nowoczesna strona to taka, która jest minimalistyczna i intuicyjna, ma czytelną typografię i dobrane kolory, prowadzi użytkownika do celu i dobrze wygląda na każdym urządzeniu.</p>
<h2>3. Postaw na szybkość i technologię</h2>
<p>W 2025 roku nikt nie ma czasu na wolne strony. Google też nie. Wybierz szybki hosting, używaj nowoczesnych technologii (np. Next.js, Astro, WebP, Tailwind CSS), zoptymalizuj obrazy i zainstaluj certyfikat SSL.</p>
<h2>4. Twórz treści pod SEO</h2>
<p>Twoja strona nie będzie skuteczna bez ruchu. Używaj fraz kluczowych, zadbaj o strukturę nagłówków H1-H3 i zoptymalizuj meta title oraz description.</p>
<h2>5. Ile kosztuje nowoczesna strona internetowa w 2025 roku?</h2>
<p>Strona one page: od 1500 zł. Strona firmowa z CMS i blogiem: od 3000 zł. Rozbudowana strona z automatyzacjami i SEO: od 5000 zł.</p>'
),
(
  'strona-internetowa-ktora-sprzedaje-7-elementow',
  'Strona internetowa, która sprzedaje - 7 elementów, o których większość firm zapomina',
  'Twoja strona internetowa może być piękna, szybka i technicznie dopracowana - ale jeśli nie sprzedaje, to jest jak salon samochodowy bez sprzedawców.',
  'Marketing',
  'Zespół Mainly',
  '2025-01-20 00:00:00+00',
  '6 min czytania',
  ARRAY['Marketing', 'Konwersja', 'UX', 'Sprzedaż', 'Strona internetowa', 'CTA'],
  '/kowdlo.png',
  'Strona internetowa, która sprzedaje - poznaj 7 kluczowych elementów skutecznej strony firmowej. Jak zwiększyć konwersję?',
  'strona internetowa która sprzedaje, konwertująca strona, skuteczna strona firmowa, jak zwiększyć konwersję strony',
  true,
  '<p><strong>Skuteczna strona internetowa = jasna wartość + dowód społeczny + CTA w odpowiednim miejscu.</strong> Jeśli brakuje któregoś z tych elementów, tracisz potencjalnych klientów.</p>
<h2>1. Jasna propozycja wartości (Value Proposition)</h2>
<p>Pierwsze 5 sekund po wejściu na stronę decyduje, czy ktoś zostanie, czy zamknie kartę. Nagłówek na stronie głównej musi mówić wprost: co robisz, dla kogo i jaką wartość dajesz.</p>
<h2>2. Struktura sekcji nad zgięciem</h2>
<p>Większość odwiedzających nigdy nie przewija. Dlatego górna część strony musi zawierać: nagłówek z wartością, krótki opis, CTA i grafikę ilustrującą efekt.</p>
<h2>3. Społeczny dowód słuszności (social proof)</h2>
<p>Zaufanie = konwersja. Dodaj logotypy klientów, krótkie cytaty z opinii i liczby: „+50 projektów dla firm w Polsce".</p>
<h2>4. Proces współpracy krok po kroku</h2>
<p>Ludzie boją się rzeczy, których nie rozumieją. Gdy pokazujesz proces w 4-6 krokach, zdejmujesz z nich niepewność.</p>
<h2>5. CTA na każdym etapie</h2>
<p>Użytkownik może być gotowy do kontaktu w dowolnym momencie. Dlatego dodaj mikro-wezwania do działania co kilka sekcji.</p>
<h2>6. Dostosowanie do mobile i prędkość ładowania</h2>
<p>Ponad 70% ruchu B2C pochodzi z telefonu. Jeśli strona ładuje się 3+ sekundy, tracisz nawet połowę odwiedzających.</p>
<h2>7. Autentyczność i osobisty ton</h2>
<p>Firmy boją się pokazać twarz - i to błąd. Pokaż własny sposób mówienia, dopasowane kolory i typografię oraz język, który brzmi jak Ty.</p>'
);
