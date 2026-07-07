import SectionHead from "./SectionHead";
import { education } from "../data";

export default function Education() {
  return (
    <section className="section" id="education">
      <SectionHead num="06" title="Education" />
      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        {education.map((edu, idx) => (
          <div className="edu reveal" key={idx}>
            <div className="edu__bar"></div>
            <div>
              <h3>{edu.degree}</h3>
              <p className="edu__org">{edu.org}</p>
              <p className="edu__gpa">
                <strong>{edu.gpa}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
