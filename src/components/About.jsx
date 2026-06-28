import SectionHead from "./SectionHead";
import { facts } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHead num="01" title="About Me" />
      <div className="about reveal">
        <div className="about__text">
          <p>
            I'm a <strong>Computer Applications student</strong> and full-stack developer
            based in Kolkata, India. I enjoy turning ideas into reliable, well-structured
            software — whether that's designing a clean microservice API or crafting a
            polished, responsive UI.
          </p>
          <p>
            I've contributed to open source through <strong>GirlScript Summer of Code</strong>{" "}
            and <strong>Hacktoberfest</strong>, solved <strong>300+</strong> problems on
            LeetCode, and built projects spanning React, Spring Boot, and FastAPI. I love
            learning, collaborating, and shipping things that work.
          </p>
          <ul className="about__facts">
            {facts.map((f) => (
              <li key={f.text}>
                <span>{f.icon}</span> {f.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="about__card">
          <div className="about__card-glow"></div>
          <pre className="code">
            <span className="c-key">const</span> <span className="c-var">tornov</span> = {"{"}
            {"\n  "}
            <span className="c-prop">role</span>: <span className="c-str">"Full-Stack Developer"</span>,
            {"\n  "}
            <span className="c-prop">focus</span>: [<span className="c-str">"Backend"</span>,{" "}
            <span className="c-str">"APIs"</span>, <span className="c-str">"React"</span>],
            {"\n  "}
            <span className="c-prop">languages</span>: [<span className="c-str">"Java"</span>,{" "}
            <span className="c-str">"Python"</span>, <span className="c-str">"Go"</span>],
            {"\n  "}
            <span className="c-prop">learning</span>: <span className="c-str">"always"</span>,
            {"\n  "}
            <span className="c-prop">openToWork</span>: <span className="c-bool">true</span>,
            {"\n"}
            {"}"};
          </pre>
        </div>
      </div>
    </section>
  );
}
