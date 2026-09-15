"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import TurnstileWidget, {
  type TurnstileWidgetHandle,
} from "@/components/TurnstileWidget";
import { trackMetaLead } from "@/lib/meta-pixel";
import {
  trackFormStart,
  trackFormStep2,
  trackGenerateLead,
} from "@/lib/analytics";

const TOPICS = [
  "Obsługa klientów",
  "Dokumenty i faktury",
  "Sprzedaż",
  "Zadania i pracownicy",
  "Automatyzacja procesów",
  "Coś innego",
] as const;

type Topic = (typeof TOPICS)[number];

/**
 * Formularz zawsze zawiera <form> + pola w HTML SSR (a11y / CRO / boty bez JS).
 * Wybór obszarów to enhancement UX, nie osobny krok ukrywający pola.
 */
export default function ContactForm() {
  const router = useRouter();
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [topics, setTopics] = useState<Topic[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileWidgetHandle>(null);
  const hasStarted = useRef(false);
  const hasTrackedTopics = useRef(false);

  const markStarted = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackFormStart();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    markStarted();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleTopic = (topic: Topic) => {
    markStarted();
    setError(null);
    setTopics((prev) => {
      const next = prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic];
      if (next.length > 0 && !hasTrackedTopics.current) {
        hasTrackedTopics.current = true;
        trackFormStep2();
      }
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Uzupełnij imię, e-mail i krótki opis.");
      return;
    }

    if (!turnstileToken) {
      setError(
        "Trwa weryfikacja antybotowa — poczekaj chwilę i kliknij ponownie."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          topics,
          sourcePath: pathname,
          recipient: "kontakt@mainly.pl",
          turnstileToken,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "Wystąpił problem podczas wysyłania wiadomości"
        );
      }

      trackMetaLead();
      trackGenerateLead(pathname ?? "/", topics);

      router.push("/kontakt/dziekujemy");
    } catch (err) {
      console.error("Błąd wysyłania formularza:", err);
      setError(err instanceof Error ? err.message : "Wystąpił nieznany błąd");
      setTurnstileToken(null);
      turnstileRef.current?.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <div className="kontakt-form">
      <div className="kontakt-form-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M12 1.5l1.4 7.1L20.5 10 13.4 11.4 12 18.5l-1.4-7.1L3.5 10l7.1-1.4L12 1.5z" />
          <path d="M19 14.2l.55 2.8L22.4 17.5l-2.85.55L19 20.8l-.55-2.75L15.6 17.5l2.85-.5.55-2.8z" opacity="0.7" />
        </svg>
      </div>

      <div className="kontakt-form-head">
        <h2>Zostaw kontakt — odezwę się w 24 h</h2>
        <p>
          Zaznacz obszary (opcjonalnie) i napisz krótko, czego potrzebujesz.
          Około minuty.
        </p>
      </div>

      <hr className="kontakt-form-rule" />

      {error && (
        <div className="kontakt-alert kontakt-alert--err" role="alert">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="kontakt-fields" noValidate>
        <fieldset className="kontakt-topics">
          <legend className="sr-only">Obszary do usprawnienia (opcjonalnie)</legend>
          <div
            className="kontakt-topics-grid"
            role="group"
            aria-label="Obszary do usprawnienia"
          >
            {TOPICS.map((topic) => {
              const selected = topics.includes(topic);
              return (
                <button
                  key={topic}
                  type="button"
                  className={`kontakt-topic${selected ? " is-selected" : ""}`}
                  aria-pressed={selected}
                  onClick={() => toggleTopic(topic)}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="contact-name">Imię</label>
          <input
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jan"
            className="kontakt-input"
            autoComplete="given-name"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-email">E-mail</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jan@firma.pl"
            className="kontakt-input"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-phone">
            Telefon <span className="kontakt-optional">(opcjonalnie)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+48 600 000 000"
            className="kontakt-input"
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="contact-message">Opisz krótko, czego potrzebujesz</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Np. dane klientów trzymamy w Excelu, dokumenty tworzymy ręcznie i chcielibyśmy mieć wszystko w jednym systemie..."
            className="kontakt-input kontakt-textarea"
            rows={4}
            required
          />
        </div>

        <TurnstileWidget
          ref={turnstileRef}
          action="contact"
          theme="light"
          className="kontakt-turnstile"
          onToken={setTurnstileToken}
        />

        <button type="submit" className="kontakt-submit" disabled={isSubmitting}>
          {isSubmitting ? "Wysyłanie..." : "Chcę omówić rozwiązanie →"}
        </button>

        <p className="kontakt-rodo">
          Twoje dane trafiają tylko do mnie. Bez newslettera, bez spamu, bez
          przekazywania dalej.
        </p>
      </form>

      <p className="kontakt-form-foot">
        Bezpłatna konsultacja · Bez zobowiązań · Odpowiadam w 24 h w dni robocze
      </p>
    </div>
  );
}
