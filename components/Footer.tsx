import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div className="col foot-brand">
            <div className="brand">
              <span className="icon">
                <Image src="/logom.svg" alt="Mainly logo" width={80} height={40} />
              </span>
              <span className="mark">Mainly</span>
            </div>
            <p>
              Custom web development. Buduję aplikacje i systemy, które
              zastępują ręczną pracę w firmach.
            </p>
          </div>
          <div className="col">
            <h5>Usługi</h5>
            <ul>
              <li>
                <Link href="/#cennik">Strony internetowe</Link>
              </li>
              <li>
                <Link href="/#prace">Aplikacje webowe</Link>
              </li>
              <li>
                <Link href="/#proces">UX/UI Design</Link>
              </li>
              <li>
                <Link href="/#faq">SEO i analityka</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Firma</h5>
            <ul>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li>
                <Link href="/#prace">Portfolio</Link>
              </li>
              <li>
                <Link href="/opinie">Opinie klientów</Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Kontakt</h5>
            <ul>
              <li>
                <Link href="mailto:kontakt@mainly.pl">kontakt@mainly.pl</Link>
              </li>
              <li>
                <Link href="tel:+48500789826">+48 500 789 826</Link>
              </li>
              <li>
                ul. Filtrowa 83
                <br />
                <small>02-032 Warszawa, Polska</small>
              </li>
              <li>
                <small>NIP: 7010961986</small>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Mainly. Wszelkie prawa zastrzeżone.</span>
        </div>
      </div>
    </footer>
  );
}
