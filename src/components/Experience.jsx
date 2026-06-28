import SectionHead from "./SectionHead";
import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHead num="03" title="Experience" />
      <div className="timeline">
        {experience.map((job) => (
          <div className="tl-item reveal" key={job.org}>
            <div className="tl-dot"></div>
            <div className="tl-content">
              <div className="tl-top">
                <h3>{job.role}</h3>
                <span className="tl-date">{job.date}</span>
              </div>
              <p className="tl-org">{job.org}</p>
              <ul>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
