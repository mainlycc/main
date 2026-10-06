"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getConsentState, type ConsentState } from "./CookieConsent";

const META_PIXEL_ID = "27728263970198659";

export default function MetaPixel() {
  const pathname = usePathname();
  const isInitialPageView = useRef(true);
  const [consent, setConsent] = useState<ConsentState>("pending");
  const [isLoaded, setIsLoaded] = useState(false);

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

  useEffect(() => {
    if (consent !== "accepted" || isLoaded) return;

    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${META_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
    setIsLoaded(true);
  }, [consent, isLoaded]);

  useEffect(() => {
    if (!pathname || !isLoaded || typeof window.fbq !== "function") return;

    if (isInitialPageView.current) {
      isInitialPageView.current = false;
      return;
    }

    window.fbq("track", "PageView");
  }, [pathname, isLoaded]);

  return null;
}
