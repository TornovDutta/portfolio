import SectionHead from "./SectionHead";
import { education } from "../data";

export default function Education() {
  return (
    <section className="section" id="education">
      <SectionHead num="06" title="Education" />
      <div className="edu reveal">
        <div className="edu__bar"></div>
        <div>
          <h3>{education.degree}</h3>
          <p className="edu__org">{education.org}</p>
          <p className="edu__gpa">
            Cumulative GPA: <strong>{education.gpa}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
