"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowBigRightIcon } from "./ui/arrow-big-right";

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

    try {
      // Prosta walidacja formularza
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Proszę wypełnić wszystkie pola");
      }

      // Można tutaj dodać wysyłanie emaila przez zewnętrzne API (np. EmailJS, SendGrid, itp.)
      // Przykładowo:
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
        throw new Error("Wystąpił problem podczas wysyłania wiadomości");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Błąd wysyłania formularza:", error);
      setSubmitStatus("error");
      setError(error instanceof Error ? error.message : "Wystąpił nieznany błąd");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-zinc-950 border border-[#FA6503]/20 p-8 rounded-xl w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Skontaktuj się z nami</h2>
      <p className="text-gray-400 mb-8 text-center">
        Wypełnij formularz, a odezwiemy się do Ciebie w ciągu 24 godzin.
      </p>

      {submitStatus === "success" ? (
        <div className="bg-green-900/20 border border-green-500 text-green-200 p-4 rounded-md mb-6">
          Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.
        </div>
      ) : submitStatus === "error" ? (
        <div className="bg-red-900/20 border border-red-500 text-red-200 p-4 rounded-md mb-6">
          <p>Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później lub skontaktuj się z nami bezpośrednio.</p>
          {error && <p className="mt-2 text-sm">Szczegóły błędu: {error}</p>}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Imię i nazwisko
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
            className="bg-zinc-900 border-zinc-800 text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jan@example.com"
            className="bg-zinc-900 border-zinc-800 text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Wiadomość
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Opisz swój projekt lub zadaj pytanie..."
            className="bg-zinc-900 border-zinc-800 text-white h-32"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-white text-black hover:bg-gray-200 mt-4 flex items-center justify-center gap-2 py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"} <ArrowBigRightIcon className="ml-2" size={20} />
        </Button>
      </form>

      <div className="mt-8 text-center text-gray-400">
        Lub napisz do nas bezpośrednio: <a href="mailto:kontakt@mainly.pl" className="text-[#FA6503]">kontakt@mainly.pl</a>
        <div className="mt-2">
          <p className="text-gray-400">ul. Filtrowa 83, 02-032 Warszawa</p>
          <p className="text-gray-400">NIP: 7010961986</p>
          <p className="text-gray-400">Tel: +48 604 819 972</p>
        </div>
      </div>
    </div>
  );
} 