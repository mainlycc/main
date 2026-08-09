import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getContactConfirmationEmail } from "@/lib/email-confirmation";
import { verifyTurnstileToken } from "@/lib/turnstile";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      message,
      topics,
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

    const safeName = name.trim().slice(0, 200);
    const safeEmail = email.trim().slice(0, 320);
    const safeMessage = message.trim().slice(0, 5000);
    const safeTopics = Array.isArray(topics)
      ? topics
          .filter((t): t is string => typeof t === "string" && t.trim().length > 0)
          .map((t) => t.trim().slice(0, 80))
          .slice(0, 10)
      : [];
    const topicsLine = safeTopics.length > 0 ? safeTopics.join(", ") : "—";

    if (!EMAIL_RE.test(safeEmail)) {
      return NextResponse.json(
        { success: false, error: "Podaj poprawny adres e-mail." },
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

    const mailOptions = {
      from: "Formularz kontaktowy <kontakt@mainly.pl>",
      to: recipient,
      replyTo: safeEmail,
      subject: `Wiadomość od ${safeName} poprzez formularz kontaktowy`,
      text: `Imię: ${safeName}\nEmail: ${safeEmail}\nCo chce usprawnić: ${topicsLine}\n\nWiadomość:\n${safeMessage}`,
      html: `<p><strong>Imię:</strong> ${safeName}</p>
             <p><strong>Email:</strong> ${safeEmail}</p>
             <p><strong>Co chce usprawnić:</strong> ${topicsLine}</p>
             <p><strong>Wiadomość:</strong></p>
             <p>${safeMessage.replace(/\n/g, "<br/>")}</p>`,
    };

    await transporter.sendMail(mailOptions);

    let confirmationSent = false;
    try {
      const confirmation = getContactConfirmationEmail();
      await transporter.sendMail({
        from: "Stanisław · Mainly <kontakt@mainly.pl>",
        to: safeEmail,
        replyTo: "kontakt@mainly.pl",
        subject: confirmation.subject,
        text: confirmation.text,
        html: confirmation.html,
      });
      confirmationSent = true;
    } catch (confirmationError) {
      console.error("Nie udało się wysłać maila potwierdzającego:", {
        email: safeEmail,
        error:
          confirmationError instanceof Error
            ? confirmationError.message
            : confirmationError,
      });
    }

    console.log("Wiadomość kontaktowa wysłana pomyślnie:", {
      name: safeName,
      email: safeEmail,
      recipient,
      confirmationSent,
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
