type SiteverifyResponse = {
  success?: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

export type TurnstileVerifyResult =
  | { ok: true }
  | { ok: false; error: string };

function getClientIp(request: Request): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    undefined
  );
}

export async function verifyTurnstileToken(
  token: unknown,
  request?: Request,
  expectedAction?: string
): Promise<TurnstileVerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return {
      ok: false,
      error: "Brak konfiguracji Turnstile na serwerze (TURNSTILE_SECRET_KEY).",
    };
  }

  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return {
      ok: false,
      error: "Wymagana weryfikacja antybotowa. Odśwież stronę i spróbuj ponownie.",
    };
  }

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
    });

    const remoteip = request ? getClientIp(request) : undefined;
    if (remoteip) body.set("remoteip", remoteip);

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        signal: AbortSignal.timeout(10_000),
      }
    );

    if (!response.ok) {
      return {
        ok: false,
        error: "Nie udało się zweryfikować ochrony antybotowej.",
      };
    }

    const result = (await response.json()) as SiteverifyResponse;

    if (!result.success) {
      return {
        ok: false,
        error:
          "Weryfikacja antybotowa nie powiodła się. Odśwież stronę i spróbuj ponownie.",
      };
    }

    // Dummy test tokens report action "test" — skip action match for them.
    const isDummyToken = token === "XXXX.DUMMY.TOKEN.XXXX";
    if (
      !isDummyToken &&
      expectedAction &&
      result.action &&
      result.action !== expectedAction
    ) {
      return {
        ok: false,
        error: "Weryfikacja antybotowa nie powiodła się.",
      };
    }

    const allowedHostnames = (process.env.TURNSTILE_HOSTNAMES ?? "")
      .split(",")
      .map((h) => h.trim())
      .filter(Boolean);

    if (
      allowedHostnames.length > 0 &&
      result.hostname &&
      !allowedHostnames.includes(result.hostname)
    ) {
      return {
        ok: false,
        error: "Weryfikacja antybotowa nie powiodła się.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Nie udało się zweryfikować ochrony antybotowej.",
    };
  }
}
