import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow eyebrow-light">BUILD SOMETHING VALUABLE</p>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
      <div className="footer-meta">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <span>{profile.location}</span>
        <span>© 2026 {profile.shortName}</span>
      </div>
    </footer>
  );
}
