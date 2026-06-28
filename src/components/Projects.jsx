import SectionHead from "./SectionHead";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHead num="04" title="Featured Projects" />
      <div className="projects">
        {projects.map((p) => (
          <article className="proj reveal" key={p.name}>
            <div className="proj__top">
              <span className="proj__icon">{p.icon}</span>
              <div className="proj__links">
                {p.links.code && (
                  <a href={p.links.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
                {p.links.live && (
                  <a href={p.links.live} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                )}
              </div>
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="tags tags--sm">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
