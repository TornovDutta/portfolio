import SectionHead from "./SectionHead";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <SectionHead num="05" title="Achievements" />
      <div className="achievements">
        {achievements.map((a) => (
          <div className="ach reveal" key={a.text}>
            <span className="ach__big">{a.big}</span>
            <p>{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
