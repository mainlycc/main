import type { Metadata } from "next";

export const SITE_URL = "https://www.mainly.pl";
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const SITE_NAME = "Mainly";
export const SITE_LOCALE = "pl_PL";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, "").trim();
}

export function defaultOgImages(alt = `${SITE_NAME} - Strony, które rozpalają biznes`) {
  return [
    {
      url: DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      alt,
    },
  ] satisfies NonNullable<Metadata["openGraph"]>["images"];
}

export function postOgImages(
  imageUrl: string | null | undefined,
  alt: string
): NonNullable<Metadata["openGraph"]>["images"] {
  if (imageUrl) {
    return [{ url: imageUrl, width: 1200, height: 630, alt }];
  }
  return defaultOgImages(alt);
}

export function resolveImageUrl(imageUrl: string): string {
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }
  return absoluteUrl(imageUrl);
}
