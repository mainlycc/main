declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Jedno wejście dla wszystkich zdarzeń konwersyjnych.
 * Wysyła do GA4; Meta Pixel obsługiwany osobno w lib/meta-pixel.ts.
 */
export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/** Szacunkowa wartość leada wg strony, z której przyszedł. */
export function leadValueForPath(pathname: string): number {
  if (
    pathname.includes("/uslugi/systemy-dla-firm") ||
    pathname.includes("/uslugi/aplikacje-webowe") ||
    pathname.includes("/uslugi/automatyzacja-procesow")
  ) {
    return 990;
  }
  if (pathname.includes("/uslugi/") || pathname.includes("/branze/")) return 490;
  if (pathname.includes("/blog/")) return 245;
  return 490;
}

export const trackFormStart = () => trackEvent("form_start");
export const trackFormStep2 = () => trackEvent("form_step_2");
export const trackPhoneClick = () =>
  trackEvent("phone_click", { value: 200, currency: "PLN" });
export const trackEmailClick = () => trackEvent("email_click");
export const trackCtaClick = (label: string) =>
  trackEvent("cta_click", { cta_label: label });

export function trackGenerateLead(sourcePath: string, topics: string[]) {
  trackEvent("generate_lead", {
    currency: "PLN",
    value: leadValueForPath(sourcePath),
    source_path: sourcePath,
    topics: topics.join(", "),
  });
}
