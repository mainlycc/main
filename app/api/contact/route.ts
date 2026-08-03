import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyTurnstileToken } from "@/lib/turnstile";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      message,
      recipient = "kontakt@mainly.pl",
      turnstileToken,
    } = body;

    const turnstile = await verifyTurnstileToken(
      turnstileToken,
      request,
      "contact"
    );
    if (!turnstile.ok) {
      return NextResponse.json(
        { success: false, error: turnstile.error },
        { status: 403 }
      );
    }

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return NextResponse.json(
        { success: false, error: "Proszę wypełnić wszystkie pola." },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_PASSWORD) {
      throw new Error("Brak skonfigurowanego hasła email (EMAIL_PASSWORD)");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: "kontakt@mainly.pl",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const safeName = name.trim().slice(0, 200);
    const safeEmail = email.trim().slice(0, 320);
    const safeMessage = message.trim().slice(0, 5000);

    const mailOptions = {
      from: "Formularz kontaktowy <kontakt@mainly.pl>",
      to: recipient,
      subject: `Wiadomość od ${safeName} poprzez formularz kontaktowy`,
      text: `Imię i nazwisko: ${safeName}\nEmail: ${safeEmail}\n\nWiadomość:\n${safeMessage}`,
      html: `<p><strong>Imię i nazwisko:</strong> ${safeName}</p>
             <p><strong>Email:</strong> ${safeEmail}</p>
             <p><strong>Wiadomość:</strong></p>
             <p>${safeMessage.replace(/\n/g, "<br/>")}</p>`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Wiadomość kontaktowa wysłana pomyślnie:", {
      name: safeName,
      email: safeEmail,
      recipient,
    });

    return NextResponse.json({
      success: true,
      message: "Wiadomość wysłana pomyślnie",
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Nieznany błąd";
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorName = error instanceof Error ? error.name : undefined;

    console.error("Szczegóły błędu formularza kontaktowego:", {
      message: errorMessage,
      stack: errorStack,
      name: errorName,
    });

    return NextResponse.json(
      {
        success: false,
        message: "Wystąpił błąd podczas wysyłania wiadomości",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
