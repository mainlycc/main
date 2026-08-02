import DisplayEm from "@/components/DisplayEm";
import { TechIcon, type TechIconName } from "./TechIcons";
import { technologies } from "@/lib/home-content";
import SectionLabel from "./SectionLabel";

export default function TechSection() {
  return (
    <section>
      <div className="wrap">
        <SectionLabel num="04" label="Nasz stack" />
        <h2 className="sec-title">
          Narzędzia, które <DisplayEm>nie zawodzą</DisplayEm>.
        </h2>
        <p className="sec-lead">
          Stack dobieram pod projekt - nie odwrotnie. Nie narzucam technologii
          dlatego, że „to znam" - wybieram to, co sprawdza się dla danego zakresu.
        </p>

        <div className="tech">
          {technologies.map((tech) => (
            <div key={tech}>
              <TechIcon name={tech as TechIconName} />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
