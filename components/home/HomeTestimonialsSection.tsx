"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DisplayEm from "@/components/DisplayEm";
import { testimonials } from "@/lib/home-content";
import {
  DEFAULT_TESTIMONIAL_AVATAR,
  resolveTestimonialAvatar,
} from "@/lib/testimonial-avatar";
import SectionLabel from "./SectionLabel";

function TestimonialCard({
  text,
  name,
  avatar,
}: {
  text: string;
  name: string;
  avatar?: string;
}) {
  const [src, setSrc] = useState(() => resolveTestimonialAvatar(avatar));

  return (
    <div className="quote testimonials-marquee__item">
      <div className="stars">★★★★★</div>
      <p>{text}</p>
      <div className="author">
        <Image
          src={src}
          alt={name}
          width={40}
          height={40}
          className="av av-photo"
          onError={() => {
            if (src !== DEFAULT_TESTIMONIAL_AVATAR) {
              setSrc(DEFAULT_TESTIMONIAL_AVATAR);
            }
          }}
        />
        <div>
          <strong>{name}</strong>
        </div>
      </div>
    </div>
  );
}

export default function HomeTestimonialsSection() {
  const items = [...testimonials, ...testimonials];

  return (
    <section>
      <div className="wrap">
        <SectionLabel num="06" label="Opinie" />
        <h2 className="sec-title">
          Co mówią <DisplayEm>nasi klienci</DisplayEm>?
        </h2>
        <p className="sec-lead">
          Zobacz, jak nasze projekty pomagają rozwijać biznesy i budować silną
          markę w internecie.
        </p>

        <div className="testimonials-marquee">
          <div className="testimonials-marquee__track">
            {items.map((item, index) => (
              <TestimonialCard
                key={`${item.name}-${index}`}
                text={item.text}
                name={item.name}
                avatar={item.avatar}
              />
            ))}
          </div>
        </div>

        <p className="text-center mt-10">
          <Link
            href="/opinie"
            className="inline-flex items-center gap-2 text-[var(--fg-dim)] hover:text-[var(--ember-soft)] transition-colors text-sm"
          >
            Zostaw swoją opinię →
          </Link>
        </p>
      </div>
    </section>
  );
}
