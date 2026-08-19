import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Engineering CV",
  description: "Engineering résumé for Hai Tran (Jeff), senior software engineer and solutions architect.",
};

export default function CvPage() {
  return (
    <main className="cv-page">
      <SiteHeader current="cv" />
      <div className="cv-toolbar page-shell">
        <div>
          <p className="eyebrow">ENGINEERING CV · 2026 EDITION</p>
          <p className="cv-toolbar-note">A concise, print-first view for hiring teams and collaborators.</p>
        </div>
        <a className="button-link button-dark" href="/Hai-Tran-Nam-CV-2026.pdf" download>
          Download PDF <span aria-hidden="true">↓</span>
        </a>
      </div>

      <article className="resume-sheet" aria-label="Hai Tran Nam engineering résumé preview">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">SENIOR SOFTWARE ENGINEER / SOLUTIONS ARCHITECT</p>
            <h1>{profile.name}</h1>
          </div>
          <div className="resume-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin}>{profile.linkedin.replace("https://www.", "")}</a>
            <a href={profile.github}>{profile.github.replace("https://", "")}</a>
            <span>{profile.location}</span>
          </div>
        </header>

        <section className="resume-intro">
          <p>{profile.summary}</p>
          <div className="resume-code" aria-label="Professional signature">
            <span>ARCHITECTURE</span>
            <span>× PRODUCT</span>
            <span>× DELIVERY</span>
          </div>
        </section>

        <div className="resume-layout">
          <div className="resume-main">
            <section className="resume-section">
              <h2>Experience</h2>
              {profile.experience.map((item) => (
                <article className="resume-experience" key={item.company}>
                  <div className="resume-role-line">
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                    <span>{item.period}</span>
                  </div>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </article>
              ))}
            </section>

            <section className="resume-section">
              <h2>Selected systems</h2>
              <div className="resume-projects">
                {profile.projects.map((project) => (
                  <article key={project.name}>
                    <div><span>{project.index}</span><h3>{project.name}</h3></div>
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="resume-sidebar">
            <section className="resume-section">
              <h2>Capabilities</h2>
              {profile.capabilities.map((group) => (
                <div className="resume-skill-group" key={group.name}>
                  <h3>{group.name}</h3>
                  <p>{group.items.join(" / ")}</p>
                </div>
              ))}
            </section>
            <section className="resume-section resume-principles">
              <h2>Certifications</h2>
              <div className="resume-credentials">
                {profile.certifications.map((item) => (
                  <article key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.issuer} · {item.period}</p>
                  </article>
                ))}
              </div>
            </section>
            <section className="resume-section resume-principles">
              <h2>Education</h2>
              <div className="resume-credentials">
                {profile.education.map((item) => (
                  <article key={`${item.school}-${item.period}`}>
                    <h3>{item.program}</h3>
                    <p>{item.school} · {item.period}</p>
                  </article>
                ))}
              </div>
            </section>
            <section className="resume-section resume-principles">
              <h2>Operating principles</h2>
              <ol>
                {profile.principles.map((principle) => <li key={principle}>{principle}</li>)}
              </ol>
            </section>
          </aside>
        </div>

        <footer className="resume-footer">
          <span>HAI TRAN (JEFF) / ENGINEERING CV / 2026</span>
          <span>01</span>
        </footer>
      </article>
      <p className="cv-disclaimer page-shell">Profile content is intentionally concise. Contact Hai for a role-specific version or a detailed project walkthrough.</p>
    </main>
  );
}
