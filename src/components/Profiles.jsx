import SectionHead from "./SectionHead";
import { profile } from "../data";

export default function Profiles() {
  const platforms = [
    {
      name: "GitHub",
      url: profile.socials.github,
      icon: (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      ),
      desc: "Check out my open-source contributions, web applications, and side projects."
    },
    {
      name: "LinkedIn",
      url: profile.socials.linkedin,
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
      ),
      desc: "Connect with me professionally, view my work experience, and educational background."
    },
    {
      name: "LeetCode",
      url: profile.socials.leetcode,
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.27 5.253 5.253 0 0 0 1.374 2.871l1.109 1.104.053.044L20.468 24l2.128-2.125-11.45-11.432-4.103-4.088c-.689-.687-.689-1.802 0-2.489l3.853-4.127a1.383 1.383 0 0 0-.012-1.921 1.385 1.385 0 0 0-1.933-.008zM19.1 8.214l-4.73 4.732a1.442 1.442 0 0 0 .041 2.08 1.444 1.444 0 0 0 2.08-.04l4.731-4.732a1.444 1.444 0 0 0-.041-2.08 1.443 1.443 0 0 0-2.081.04zM16.143 11.23l-1.782 1.783a.48.48 0 0 0 .013.693.481.481 0 0 0 .693-.013l1.783-1.782a.48.48 0 0 0-.013-.693.482.482 0 0 0-.694.012z"></path></svg>
      ),
      desc: "Explore my algorithmic problem-solving skills, with over 300+ solved problems."
    },
    {
      name: "Codeforces",
      url: profile.socials.codeforces,
      icon: (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
      ),
      desc: "View my competitive programming rankings and contest participation."
    }
  ];

  return (
    <section className="section" id="profiles">
      <SectionHead num="07" title="My Profiles" />
      <div className="profiles-grid">
        {platforms.map(p => (
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="profile-card reveal" key={p.name}>
            <div className="profile-card__icon">{p.icon}</div>
            <div className="profile-card__content">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
            <div className="profile-card__arrow">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
