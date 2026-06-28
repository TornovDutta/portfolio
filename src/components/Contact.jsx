import { profile } from "../data";

export default function Contact() {
  const telHref = `tel:${profile.phone.replace(/\s+/g, "")}`;
  return (
    <section className="section section--contact" id="contact">
      <div className="contact reveal">
        <span className="section__num">07</span>
        <h2 className="contact__title">Let's build something together</h2>
        <p className="contact__text">
          I'm open to internships, freelance work, and collaboration. Have a project in mind
          or just want to say hi? My inbox is always open.
        </p>
        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
          Say Hello 👋
        </a>
        <div className="contact__info">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>·</span>
          <a href={telHref}>{profile.phone}</a>
        </div>
      </div>
    </section>
  );
}
