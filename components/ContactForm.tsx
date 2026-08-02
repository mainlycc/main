"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recipient: "kontakt@mainly.pl",
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

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Błąd wysyłania formularza:", err);
      setSubmitStatus("error");
      setError(err instanceof Error ? err.message : "Wystąpił nieznany błąd");
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
        <h2>Napisz do mnie</h2>
        <p>Witaj w Mainly — zacznijmy od krótkiej wiadomości</p>
      </div>

      <hr className="kontakt-form-rule" />

      {submitStatus === "success" ? (
        <div className="kontakt-alert kontakt-alert--ok">
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
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
            className="kontakt-input"
            required
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email">Twój email</label>
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

        <div>
          <label htmlFor="message">Wiadomość</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Opisz swój projekt lub zadaj pytanie..."
            className="kontakt-input kontakt-textarea"
            required
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="kontakt-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        </button>
      </form>

      <p className="kontakt-form-foot">
        Wolisz maila?{" "}
        <a href="mailto:kontakt@mainly.pl">kontakt@mainly.pl</a>
      </p>
    </div>
  );
}
