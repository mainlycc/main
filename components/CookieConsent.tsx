"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "mainly_cookie_consent";
const CONSENT_VERSION = "1";

export type ConsentState = "pending" | "accepted" | "rejected";

export function getConsentState(): ConsentState {
  if (typeof window === "undefined") return "pending";
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) return "pending";
  try {
    const { version, consent } = JSON.parse(stored);
    if (version !== CONSENT_VERSION) return "pending";
    return consent === true ? "accepted" : "rejected";
  } catch {
    return "pending";
  }
}

export function setConsentState(consent: boolean): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({ version: CONSENT_VERSION, consent })
  );
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: { consent } }));
}

export default function CookieConsent() {
  const [state, setState] = useState<ConsentState>("pending");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setState(getConsentState());
  }, []);

  const handleAccept = () => {
    setConsentState(true);
    setState("accepted");
  };

  const handleReject = () => {
    setConsentState(false);
    setState("rejected");
  };

  if (!mounted || state !== "pending") {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Ustawienia cookies">
      <div className="cookie-banner-content">
        <p>
          Używamy plików cookies do analityki (Google Analytics) i remarketingu
          (Meta Pixel). Możesz zaakceptować lub odrzucić opcjonalne cookies.{" "}
          <Link href="/polityka-prywatnosci" className="cookie-link">
            Polityka prywatności
          </Link>
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            onClick={handleReject}
            className="cookie-btn cookie-btn-secondary"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="cookie-btn cookie-btn-primary"
          >
            Akceptuję wszystkie
          </button>
        </div>
      </div>
    </div>
  );
}
