"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "compact" | "flexible";
      action?: string;
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    }
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export type LazyTurnstileWidgetHandle = {
  reset: () => void;
  load: () => void;
};

type LazyTurnstileWidgetProps = {
  onToken: (token: string | null) => void;
  action?: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact" | "flexible";
  className?: string;
};

const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const LazyTurnstileWidget = forwardRef<
  LazyTurnstileWidgetHandle,
  LazyTurnstileWidgetProps
>(function LazyTurnstileWidget(
  { onToken, action, theme = "auto", size = "normal", className },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  onTokenRef.current = onToken;

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const renderWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current !== null) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme,
      size,
      action,
      callback: (token) => onTokenRef.current(token),
      "expired-callback": () => onTokenRef.current(null),
      "error-callback": () => onTokenRef.current(null),
    });
  }, [siteKey, theme, size, action]);

  const loadScript = useCallback(() => {
    if (isLoaded || isLoading) return;
    if (typeof window === "undefined") return;

    if (window.turnstile) {
      setIsLoaded(true);
      renderWidget();
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${TURNSTILE_SCRIPT_URL}"]`
    );
    if (existingScript) {
      setIsLoading(true);
      existingScript.addEventListener("load", () => {
        setIsLoaded(true);
        setIsLoading(false);
        renderWidget();
      });
      return;
    }

    setIsLoading(true);
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_URL;
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
      setIsLoading(false);
      renderWidget();
    };
    script.onerror = () => {
      setIsLoading(false);
      console.error("Failed to load Turnstile script");
    };
    document.head.appendChild(script);
  }, [isLoaded, isLoading, renderWidget]);

  useImperativeHandle(ref, () => ({
    reset: () => {
      onTokenRef.current(null);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    },
    load: loadScript,
  }));

  useEffect(() => {
    if (isLoaded) {
      renderWidget();
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isLoaded, renderWidget]);

  if (!siteKey) {
    return (
      <p className={className} role="alert">
        Brak klucza Turnstile (NEXT_PUBLIC_TURNSTILE_SITE_KEY).
      </p>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      onFocus={loadScript}
      onMouseEnter={loadScript}
    >
      {!isLoaded && !isLoading && (
        <div
          style={{
            minHeight: 65,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9a9a9a",
            fontSize: "13px",
          }}
        >
          Weryfikacja załaduje się po rozpoczęciu wypełniania
        </div>
      )}
      {isLoading && (
        <div
          style={{
            minHeight: 65,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9a9a9a",
            fontSize: "13px",
          }}
        >
          Ładowanie weryfikacji…
        </div>
      )}
    </div>
  );
});

export default LazyTurnstileWidget;
