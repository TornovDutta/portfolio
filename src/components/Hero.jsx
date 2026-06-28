import { useEffect, useRef, useState } from "react";
import { profile, roles } from "../data";

// Typewriter effect cycling through roles.
function useTyped(words) {
  const [text, setText] = useState("");
  const state = useRef({ wIdx: 0, cIdx: 0, deleting: false });

  useEffect(() => {
    let timer;
    const tick = () => {
      const s = state.current;
      const current = words[s.wIdx];
      s.cIdx += s.deleting ? -1 : 1;
      setText(current.slice(0, s.cIdx));

      let delay = s.deleting ? 45 : 90;
      if (!s.deleting && s.cIdx === current.length) {
        delay = 1700;
        s.deleting = true;
      } else if (s.deleting && s.cIdx === 0) {
        s.deleting = false;
        s.wIdx = (s.wIdx + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

export default function Hero() {
  const typed = useTyped(roles);

  return (
    <section className="hero" id="home">
      <div className="hero__inner reveal show">
        <p className="hero__hi">Hi there, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__role">
          <span className="typed">{typed}</span>
          <span className="caret">|</span>
        </h2>
        <p className="hero__tagline">
          I build full-stack web applications — from clean REST backends in{" "}
          <em>Spring Boot</em> &amp; <em>FastAPI</em> to fast, modern frontends in{" "}
          <em>React</em>.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            View My Work
          </a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            Get In Touch
          </a>
        </div>
        <div className="hero__socials">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </div>
      </div>
      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <span></span>
      </a>
    </section>
  );
}
