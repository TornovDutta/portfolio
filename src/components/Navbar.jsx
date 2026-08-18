import { useEffect, useState } from "react";
import { navLinks, profile } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="nav">
          <a href="#home" className="nav__logo">
            <span className="nav__logo-icon">TD</span>
            <span className="nav__logo-text hidden sm:block">Tornov Dutta</span>
          </a>
          <nav className="nav__links">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}>
                {l}
              </a>
            ))}
          </nav>
          <div className="nav__actions">
            <a href={`mailto:${profile.email}`} className="btn-hire">Hire Me</a>
            <button
              className={`nav__burger ${open ? "open" : ""}`}
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`nav__mobile ${open ? "open" : ""}`}>
        <div className="nav__mobile-inner">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
