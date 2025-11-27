import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

const MAX_LEN_TEXT = 4000;
const MAX_LEN_SHORT = 200;

const trimShort = (v: unknown, max = MAX_LEN_SHORT) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const trimLong = (v: unknown, max = MAX_LEN_TEXT) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nazwaProjektu,
      imieNazwisko,
      firma,
      stanowisko,
      ocena,
      opinia,
      zgoda,
      zgodaCaseStudy,
    } = body ?? {};

    if (!zgoda) {
      return NextResponse.json(
        { ok: false, error: "Brak zgody na publikację opinii." },
        { status: 400 }
      );
    }

    if (!opinia || typeof opinia !== "string" || !opinia.trim()) {
      return NextResponse.json(
        { ok: false, error: "Treść opinii jest wymagana." },
        { status: 400 }
      );
    }

    const data = {
      nazwaProjektu: trimShort(nazwaProjektu),
      imieNazwisko: trimShort(imieNazwisko),
      firma: trimShort(firma),
      stanowisko: trimShort(stanowisko),
      ocena:
        typeof ocena === "number" && ocena >= 1 && ocena <= 5 ? ocena : null,
      opinia: trimLong(opinia),
      zgoda: Boolean(zgoda),
      zgodaCaseStudy: Boolean(zgodaCaseStudy),
    };

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM) {
      console.warn("Resend env missing, skipping email send.", data);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Serwer maila nie jest jeszcze w pełni skonfigurowany. Skontaktuj się bezpośrednio.",
        },
        { status: 500 }
      );
    }

    const subjectParts = [
      "Nowa opinia",
      data.imieNazwisko && `od ${data.imieNazwisko}`,
      data.nazwaProjektu && `– ${data.nazwaProjektu}`,
    ].filter(Boolean);

    const subject = subjectParts.join(" ");

    const html = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color:#0f172a; font-size:14px; line-height:1.6;">
        <h2 style="margin:0 0 12px 0; font-size:20px; color:#020617;">
          Nowa opinia z formularza Mainly
        </h2>
        <p style="margin:0 0 16px 0; font-size:13px; color:#64748b;">
          Data: <strong>${new Date().toLocaleString("pl-PL")}</strong>
        </p>

        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:640px; margin-bottom:16px;">
          <tr>
            <td colspan="2" style="padding:8px 12px; background:#f97316; color:#fff; font-weight:600; border-radius:8px 8px 0 0;">
              Dane projektu i osoby
            </td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:8px 12px; width:35%; border-bottom:1px solid #e5e7eb;">Nazwa projektu</td>
            <td style="padding:8px 12px; border-bottom:1px solid #e5e7eb;"><strong>${data.nazwaProjektu || "-"}</strong></td>
          </tr>
          <tr>
            <td style="padding:8px 12px; width:35%; border-bottom:1px solid #e5e7eb;">Imię i nazwisko</td>
            <td style="padding:8px 12px; border-bottom:1px solid #e5e7eb;">${data.imieNazwisko || "-"}</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:8px 12px; width:35%; border-bottom:1px solid #e5e7eb;">Nazwa firmy</td>
            <td style="padding:8px 12px; border-bottom:1px solid #e5e7eb;">${data.firma || "-"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; width:35%; border-bottom:1px solid #e5e7eb;">Stanowisko</td>
            <td style="padding:8px 12px; border-bottom:1px solid #e5e7eb;">${data.stanowisko || "-"}</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:8px 12px; width:35%; border-bottom:1px solid #e5e7eb;">Ocena współpracy</td>
            <td style="padding:8px 12px; border-bottom:1px solid #e5e7eb;">
              ${
                data.ocena
                  ? `${"★".repeat(data.ocena)}${"☆".repeat(5 - data.ocena)} (${data.ocena}/5)`
                  : "-"
              }
            </td>
          </tr>
        </table>

        <div style="margin-bottom:16px;">
          <h3 style="margin:0 0 8px 0; font-size:16px; color:#020617;">Treść opinii</h3>
          <div style="padding:12px 14px; background:#f9fafb; border-radius:8px; border:1px solid #e5e7eb;">
            ${
              data.opinia
                ? data.opinia.replace(/\n/g, "<br />")
                : "<span style='color:#9ca3af;'>Brak treści opinii.</span>"
            }
          </div>
        </div>

        <div style="margin-bottom:4px;">
          <h3 style="margin:0 0 8px 0; font-size:16px; color:#020617;">Zgody</h3>
          <ul style="margin:0; padding-left:18px; color:#111827;">
            <li>
              Zgoda na publikację opinii:
              <strong style="color:${data.zgoda ? "#16a34a" : "#b91c1c"};">
                ${data.zgoda ? "TAK" : "NIE"}
              </strong>
            </li>
            <li>
              Zgoda na case study / portfolio:
              <strong style="color:${
                data.zgodaCaseStudy ? "#16a34a" : "#6b7280"
              };">
                ${data.zgodaCaseStudy ? "TAK" : "NIE"}
              </strong>
            </li>
          </ul>
        </div>

        <p style="margin-top:16px; font-size:11px; color:#9ca3af;">
          Ten e‑mail został wygenerowany automatycznie z formularza opinii na stronie Mainly.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: "kontakt@mainly.pl",
      subject: subject || "Nowa opinia z formularza Mainly",
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Błąd w /api/opinie:", error);
    return NextResponse.json(
      { ok: false, error: "Wystąpił błąd podczas wysyłania opinii." },
      { status: 500 }
    );
  }
}


