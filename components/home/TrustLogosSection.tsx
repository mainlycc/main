import Image from "next/image";
import { clientLogos } from "@/lib/client-logos";
import SectionLabel from "./SectionLabel";

export default function TrustLogosSection() {
  return (
    <section style={{ padding: "48px 0" }}>
      <div className="wrap">
        <SectionLabel label="Zaufali nam" centered />
        <div className="client-logos">
        <div className="client-logos__track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="client-logos__set"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {clientLogos.map((client) =>
                client.type === "image" ? (
                  <div key={`${copy}-${client.name}`} className="client-logo">
                    <Image
                      src={client.src}
                      alt={
                        copy === 0
                          ? `Logo ${client.name} — firma współpracująca z Mainly`
                          : ""
                      }
                      width={client.w}
                      height={client.h}
                      sizes="360px"
                    />
                  </div>
                ) : (
                  <div
                    key={`${copy}-${client.name}`}
                    className="client-logo client-logo--text"
                  >
                    <span>{client.name}</span>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
