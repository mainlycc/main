import DisplayEm from "@/components/DisplayEm";
import { processSteps } from "@/lib/home-content";
import SectionLabel from "./SectionLabel";

export default function ProcessSection() {
  return (
    <section id="proces">
      <div className="wrap">
        <SectionLabel num="02" label="Proces" />
        <h2 className="sec-title">
          Cztery etapy. <DisplayEm>Zero</DisplayEm> niespodzianek.
        </h2>
        <p className="sec-lead">
          Od pierwszego maila po wdrożenie - wiesz co jest robione, kiedy
          i co dostajesz na końcu każdego etapu.
        </p>

        <div className="process-hud">
          <div className="phud-grid" aria-hidden="true" />
          <span className="phud-corner tl">42.069 · N19.63</span>
          <span className="phud-corner tr">00 / 100</span>

          <svg
            className="phud-line"
            viewBox="0 0 1200 620"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="track"
              d="M -40 200 C 40 200 80 220 120 236 C 220 250 300 300 360 310 C 460 320 560 180 660 161 C 780 140 940 70 1080 50 C 1120 45 1160 30 1200 10"
            />
            <path
              className="glow"
              d="M -40 200 C 40 200 80 220 120 236 C 220 250 300 300 360 310 C 460 320 560 180 660 161 C 780 140 940 70 1080 50 C 1120 45 1160 30 1200 10"
            />
          </svg>

          {processSteps.map((step) => (
            <div
              key={step.num}
              className="phud-node"
              style={{ left: step.node.left, top: step.node.top }}
            />
          ))}

          {processSteps.map((step) => (
            <div
              key={`step-${step.num}`}
              className="phud-step"
              style={{
                left: step.position.left,
                top: step.position.top,
                width: step.position.width,
              }}
            >
              <div className="num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
              <span className="dur">{step.duration}</span>
            </div>
          ))}

          <span className="phud-tag">Strona www, która pracuje na Twój biznes</span>
          <span className="phud-label">
            Proces
            <br />
            współpracy
          </span>
        </div>
      </div>
    </section>
  );
}
