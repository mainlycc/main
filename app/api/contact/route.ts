import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, recipient } = body;

    // Tutaj powinna być logika wysyłki email, np. za pomocą SendGrid, Nodemailer, itp.
    // Przykładowa implementacja:
    
    /*
    // Za pomocą usługi jak SendGrid/Resend/Mailchimp/itp.
    const response = await fetch('https://api.emailprovider.com/v3/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.EMAIL_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'no-reply@mainly.pl',
        to: recipient || 'mainly.agn@gmail.com',
        subject: `Wiadomość od ${name} poprzez formularz kontaktowy`,
        text: `Imię i nazwisko: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
        html: `<p><strong>Imię i nazwisko:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Wiadomość:</strong></p>
               <p>${message.replace(/\n/g, '<br/>')}</p>`,
      }),
    });
    */

    // W tym przykładzie, zakładamy że wysyłka była udana
    console.log('Otrzymano wiadomość kontaktową:', { name, email, message, recipient });
    
    return NextResponse.json({ success: true, message: 'Wiadomość wysłana pomyślnie' });
  } catch (error) {
    console.error('Błąd podczas przetwarzania formularza kontaktowego:', error);
    return NextResponse.json(
      { success: false, message: 'Wystąpił błąd podczas wysyłania wiadomości' },
      { status: 500 }
    );
  }
} 