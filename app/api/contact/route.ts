import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, recipient = 'kontakt@mainly.pl' } = body;

    // Konfiguracja transportera Nodemailer dla Zoho
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true, // używamy SSL
      auth: {
        user: 'kontakt@mainly.pl',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Definiowanie opcji wiadomości
    const mailOptions = {
      from: 'Formularz kontaktowy <kontakt@mainly.pl>',
      to: recipient,
      subject: `Wiadomość od ${name} poprzez formularz kontaktowy`,
      text: `Imię i nazwisko: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
      html: `<p><strong>Imię i nazwisko:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Wiadomość:</strong></p>
             <p>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    // Wysyłka wiadomości
    await transporter.sendMail(mailOptions);
    
    console.log('Wiadomość kontaktowa wysłana pomyślnie:', { name, email, recipient });
    
    return NextResponse.json({ success: true, message: 'Wiadomość wysłana pomyślnie' });
  } catch (error) {
    console.error('Błąd podczas przetwarzania formularza kontaktowego:', error);
    return NextResponse.json(
      { success: false, message: 'Wystąpił błąd podczas wysyłania wiadomości' },
      { status: 500 }
    );
  }
} 