import { NextResponse, type NextRequest } from "next/server";
import { appendVaryAccept, preferredType } from "./lib/accept";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.endsWith(".md")) {
    const url = req.nextUrl.clone();
    url.pathname = `/api/markdown${pathname.slice(0, -3)}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    return rewritten;
  }

  const acceptHeader = req.headers.get("accept");
  const chosen = preferredType(acceptHeader);

  if (chosen === "text/markdown") {
    const url = req.nextUrl.clone();
    url.pathname = `/api/markdown${pathname}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    return rewritten;
  }

  if (chosen === null && acceptHeader) {
    return new Response(
      "Not Acceptable\n\nAvailable: text/html, text/markdown\n",
      {
        status: 406,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          Vary: "Accept",
        },
      }
    );
  }

  const res = NextResponse.next();
  appendVaryAccept(res.headers);
  return res;
}

export const config = {
  matcher: ["/((?!api/|_next/|_vercel/|.*\\..*).*)"],
};
