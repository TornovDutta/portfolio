import SectionHead from "./SectionHead";
import { projects } from "../data";

export default function Projects() {
  const getProjectId = (name) => {
    return `project-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
  };

  const categories = [...new Set(projects.map((p) => p.category || "Featured Project"))];

  return (
    <div id="projects">
      {categories.map((cat, idx) => (
        <section className="section" id={`${cat.toLowerCase().replace(/\s+/g, '-')}s`} key={cat}>
          <SectionHead num={`0${4 + idx}`} title={`${cat}s`} />
          <div className="projects">
            {projects.filter(p => (p.category || "Featured Project") === cat).map((p) => (
              <article className="proj reveal" key={p.name} id={getProjectId(p.name)}>
                <div className="proj__top">
                  <span className="proj__icon">
                    <svg stroke="var(--accent-2)" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </span>
                  <div className="proj__links">
                    {p.links.code && (
                      <a href={p.links.code} target="_blank" rel="noopener noreferrer">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        Code
                      </a>
                    )}
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noopener noreferrer">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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
          {idx === categories.length - 1 && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }} className="reveal">
              <a href="https://github.com/TornovDutta" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                Explore More Projects on GitHub
              </a>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
