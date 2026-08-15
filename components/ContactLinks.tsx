"use client";

import Link from "next/link";
import { BUSINESS } from "@/lib/site";
import { trackEmailClick, trackPhoneClick } from "@/lib/analytics";

export default function ContactLinks() {
  return (
    <div className="cta-contacts">
      <div className="cta-contact">
        <span className="k">Email</span>
        <span className="v">
          <Link href={`mailto:${BUSINESS.email}`} onClick={trackEmailClick}>
            {BUSINESS.email}
          </Link>
        </span>
      </div>
      <div className="cta-contact">
        <span className="k">Telefon</span>
        <span className="v">
          <Link href={`tel:${BUSINESS.telephone}`} onClick={trackPhoneClick}>
            {BUSINESS.telephoneDisplay}
          </Link>
        </span>
      </div>
      <div className="cta-contact">
        <span className="k">Biuro</span>
        <span className="v">
          {BUSINESS.city}, {BUSINESS.street.replace("ul. ", "")}
        </span>
      </div>
    </div>
  );
}
