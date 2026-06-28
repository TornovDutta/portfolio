import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; built by <strong>{profile.name}</strong>
      </p>
      <p className="footer__sub">© {new Date().getFullYear()} · Made with care</p>
    </footer>
  );
}
