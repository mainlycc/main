declare global {
  interface Window {
    fbq?: (
      action: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackMetaLead(contentName = "Formularz kontaktowy") {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  window.fbq("track", "Lead", { content_name: contentName });
}
