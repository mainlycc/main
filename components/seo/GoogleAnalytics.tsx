"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsentState, type ConsentState } from "../CookieConsent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Google Analytics 4.
 * Nie renderuje się, dopóki NEXT_PUBLIC_GA_ID nie jest ustawione —
 * dzięki temu lokalny development nie zaśmieca statystyk.
 * Ładuje się dopiero po zgodzie na cookies (tak jak Pixel Meta).
 */
export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<ConsentState>("pending");

  useEffect(() => {
    setConsent(getConsentState());

    const handleConsentChange = (e: CustomEvent<{ consent: boolean }>) => {
      setConsent(e.detail.consent ? "accepted" : "rejected");
    };

    window.addEventListener(
      "cookie-consent-change",
      handleConsentChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "cookie-consent-change",
        handleConsentChange as EventListener
      );
    };
  }, []);

  if (!GA_ID || consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}
