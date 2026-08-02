import { manifestoItems } from "@/lib/home-content";

export default function ManifestoMarquee() {
  const items = [...manifestoItems, ...manifestoItems];

  return (
    <div className="manifesto">
      <div className="manifesto-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
