import { trustClients } from "@/lib/home-content";
import SectionLabel from "./SectionLabel";

export default function TrustLogosSection() {
  return (
    <section style={{ padding: "48px 0" }}>
      <div className="wrap">
        <SectionLabel label="Zaufali nam" centered />
        <div className="clients">
          {trustClients.map((client) => (
            <div key={client}>{client}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
