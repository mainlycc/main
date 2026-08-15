import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";
import { BUSINESS } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot foot--wide">
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
            <h2 className="foot-heading">Usługi</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/uslugi/${service.slug}`}>{service.navLabel}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h2 className="foot-heading">Branże</h2>
            <ul>
              {industries.slice(0, 6).map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/branze/${industry.slug}`}>
                    {industry.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/branze">Wszystkie branże</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h2 className="foot-heading">Firma</h2>
            <ul>
              <li>
                <Link href="/o-mnie">O mnie</Link>
              </li>
              <li>
                <Link href="/proces">Proces współpracy</Link>
              </li>
              <li>
                <Link href="/cennik">Cennik</Link>
              </li>
              <li>
                <Link href="/projekty">Portfolio</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/opinie">Opinie klientów</Link>
              </li>
              <li>
                <Link href="/tworzenie-stron-internetowych-warszawa">
                  Strony internetowe Warszawa
                </Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h2 className="foot-heading">Kontakt</h2>
            <ul>
              <li>
                <Link href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</Link>
              </li>
              <li>
                <Link href={`tel:${BUSINESS.telephone}`}>
                  {BUSINESS.telephoneDisplay}
                </Link>
              </li>
              <li>
                {BUSINESS.street}
                <br />
                <small>
                  {BUSINESS.postalCode} {BUSINESS.city}, Polska
                </small>
              </li>
              <li>
                <small>NIP: {BUSINESS.taxID}</small>
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
