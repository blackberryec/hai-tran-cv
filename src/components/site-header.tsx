import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteHeader({ current = "portfolio" }: { current?: "portfolio" | "cv" }) {
  return (
    <header className="site-header">
      <Link className="monogram" href="/" aria-label="Hai Tran Nam, home">
        {profile.initials}
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className={current === "portfolio" ? "is-active" : ""} href="/">
          Portfolio
        </Link>
        <Link className={current === "cv" ? "is-active" : ""} href="/cv">
          Résumé
        </Link>
        <Link href="/#writing">Writing</Link>
      </nav>
      <a className="header-cta" href="/Hai-Tran-Nam-CV-2026.pdf" download>
        Download CV <span aria-hidden="true">↓</span>
      </a>
    </header>
  );
}
