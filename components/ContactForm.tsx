"use client";

import { useRef, useState } from "react";
import TurnstileWidget, {
  type TurnstileWidgetHandle,
} from "@/components/TurnstileWidget";
import { trackMetaLead } from "@/lib/meta-pixel";

const TOPICS = [
  "Obsługa klientów",
  "Dokumenty i faktury",
  "Sprzedaż",
  "Zadania i pracownicy",
  "Automatyzacja procesów",
  "Coś innego",
] as const;

type Topic = (typeof TOPICS)[number];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [topics, setTopics] = useState<Topic[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileWidgetHandle>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleTopic = (topic: Topic) => {
    setTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setError(null);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Proszę wypełnić wszystkie pola");
      }

      if (topics.length === 0) {
        throw new Error("Wybierz przynajmniej jeden obszar do usprawnienia.");
      }

      if (!turnstileToken) {
        throw new Error("Dokończ weryfikację antybotową przed wysłaniem.");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          topics,
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
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTopics([]);
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch (err) {
      console.error("Błąd wysyłania formularza:", err);
      setSubmitStatus("error");
      setError(err instanceof Error ? err.message : "Wystąpił nieznany błąd");
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } finally {
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
        <h2>Opowiedz mi, czego potrzebujesz</h2>
        <p>Wypełnienie formularza zajmie około minuty.</p>
      </div>

      <hr className="kontakt-form-rule" />

      {submitStatus === "success" ? (
        <div className="kontakt-alert kontakt-alert--ok" role="status">
          Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.
        </div>
      ) : submitStatus === "error" ? (
        <div className="kontakt-alert kontakt-alert--err">
          <p>
            Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub napisz na{" "}
            kontakt@mainly.pl.
          </p>
          {error && <p className="kontakt-alert-detail">Szczegóły: {error}</p>}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="kontakt-fields">
        <div>
          <label htmlFor="name">Imię</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jan"
            className="kontakt-input"
            required
            autoComplete="given-name"
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jan@firma.pl"
            className="kontakt-input"
            required
            autoComplete="email"
          />
        </div>

        <fieldset className="kontakt-topics">
          <legend>Co chcesz usprawnić?</legend>
          <div className="kontakt-topics-grid" role="group" aria-label="Obszary do usprawnienia">
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
          <label htmlFor="message">Opisz krótko, czego potrzebujesz</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Np. dane klientów trzymamy w Excelu, dokumenty tworzymy ręcznie i chcielibyśmy mieć wszystko w jednym systemie..."
            className="kontakt-input kontakt-textarea"
            required
            rows={4}
          />
        </div>

        <TurnstileWidget
          ref={turnstileRef}
          action="contact"
          theme="light"
          className="kontakt-turnstile"
          onToken={setTurnstileToken}
        />

        <button
          type="submit"
          className="kontakt-submit"
          disabled={isSubmitting || !turnstileToken}
        >
          {isSubmitting ? "Wysyłanie..." : "Chcę omówić rozwiązanie →"}
        </button>
      </form>

      <p className="kontakt-form-foot">
        Bezpłatna konsultacja · Bez zobowiązań · Odpowiedź do 24h
      </p>
    </div>
  );
}
