import SectionHead from "./SectionHead";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHead num="02" title="Skills & Tools" />
      <div className="skills">
        {skills.map((group) => (
          <div className="skill-card reveal" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
