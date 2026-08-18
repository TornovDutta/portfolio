import { useEffect, useRef, useState } from "react";
import { profile, roles } from "../data";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container reveal show">
        <div className="hero__content">
          <p className="hero__hi">Hi there, I'm</p>
          <h1 className="hero__name">
            Building scalable software and <br className="hidden sm:block" />
            <span className="hero__name-highlight">AI-powered</span> products.
          </h1>
          <p className="hero__tagline">
            I build full-stack web applications — from clean REST backends in{" "}
            <em>Spring Boot</em> &amp; <em>FastAPI</em> to fast, modern frontends in{" "}
            <em>React</em>.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              View My Work
            </a>
            <a className="btn btn--ghost" href={profile.resume} download="TornovDutta.pdf">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
            </a>
          </div>
          <div className="hero__socials">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>
            <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img src="https://github.com/TornovDutta.png" alt={profile.name} className="hero__image" />
            <div className="hero__image-glow"></div>
          </div>
          <div className="hero__status">
            <span className="hero__status-dot"></span>
            <span>Open to work | Full Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
