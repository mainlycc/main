/** HTML + tekst potwierdzenia wysyłki formularza kontaktowego (do nadawcy). */
export function getContactConfirmationEmail() {
  const subject = "Dzięki za wiadomość — Mainly";

  const text = `Dzięki za wiadomość.

Właśnie dostałem Twój formularz i już go czytam. Odpiszę osobiście w ciągu 24h w dni robocze — z pytaniami doprecyzowującymi albo od razu z wyceną.

Jeśli chcesz coś dodać albo doprecyzować w międzyczasie, po prostu odpisz na tego maila — trafi bezpośrednio do mnie.

Do usłyszenia,
Stanisław

Mainly · Stanisław, custom web development
ul. Filtrowa 83, 02-032 Warszawa
kontakt@mainly.pl · +48 500 789 826

Ten e-mail został wysłany, ponieważ wypełniłeś formularz kontaktowy na mainly.pl.`;

  const html = `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>Dziękujemy za wiadomość — Mainly</title>
<style>
  body{margin:0;padding:0;background-color:#0a0908;}
  table{border-collapse:collapse;}
  a{text-decoration:underline;}
  img{border:0;display:block;}
  @media (max-width:600px){
    .container{width:100% !important;}
    .pad{padding-left:24px !important;padding-right:24px !important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:#0a0908;">
  <span style="display:none;font-size:1px;color:#0a0908;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Dzięki za wiadomość — odpiszę w ciągu 24h w dni robocze.</span>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0908;">
    <tbody><tr>
      <td align="center" style="padding:48px 16px;">

        <table role="presentation" class="container" width="560" cellpadding="0" cellspacing="0" border="0" style="width:560px;max-width:560px;">

          <tbody><tr>
            <td class="pad" style="padding:0 8px 28px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;color:#f5f1ec;">
              Mainly
            </td>
          </tr>

          <tr>
            <td class="pad" style="padding:0 8px;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1.4;color:#f5f1ec;">
              Dzięki za wiadomość.
            </td>
          </tr>

          <tr>
            <td class="pad" style="padding:20px 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#c9c2b9;">
              Właśnie dostałem Twój formularz i już go czytam. Odpiszę osobiście w ciągu 24h w dni robocze — z pytaniami doprecyzowującymi albo od razu z wyceną.
            </td>
          </tr>

          <tr>
            <td class="pad" style="padding:18px 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#c9c2b9;">
              Jeśli chcesz coś dodać albo doprecyzować w międzyczasie, po prostu odpisz na tego maila — trafi bezpośrednio do mnie.
            </td>
          </tr>

          <tr>
            <td class="pad" style="padding:28px 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#c9c2b9;">
              Do usłyszenia,<br>Stanisław
            </td>
          </tr>

          <tr>
            <td class="pad" style="padding:36px 8px 0;">
              <a href="https://mainly.pl/#prace" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#ff6644;">Zobacz nasze realizacje ↗</a>
            </td>
          </tr>

          <tr>
            <td class="pad" style="padding:44px 8px 0;">
              <div style="border-top:1px solid #262220;line-height:0;font-size:0;">&nbsp;</div>
            </td>
          </tr>

          <tr>
            <td class="pad" style="padding:20px 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;line-height:1.6;color:#7d7771;">
              Mainly · Stanisław, custom web development<br>
              ul. Filtrowa 83, 02-032 Warszawa<br>
              <a href="mailto:kontakt@mainly.pl" style="color:#7d7771;">kontakt@mainly.pl</a> · <a href="tel:+48500789826" style="color:#7d7771;">+48 500 789 826</a>
            </td>
          </tr>

          <tr>
            <td class="pad" style="padding:16px 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#4a4441;">
              Ten e-mail został wysłany, ponieważ wypełniłeś formularz kontaktowy na mainly.pl.
            </td>
          </tr>

        </tbody></table>

      </td>
    </tr>
  </tbody></table>

</body>
</html>`;

  return { subject, text, html };
}
