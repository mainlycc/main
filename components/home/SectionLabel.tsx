interface SectionLabelProps {
  num?: string;
  label: string;
  centered?: boolean;
}

export default function SectionLabel({
  num,
  label,
  centered,
}: SectionLabelProps) {
  return (
    <div
      className="sec-label"
      style={
        centered
          ? { marginBottom: 32, justifyContent: "center", textAlign: "center" }
          : undefined
      }
    >
      {num && <span className="num">{num}</span>}
      <span>{label}</span>
    </div>
  );
}
