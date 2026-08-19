import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Product & Architecture CV",
  description: "Product, business and solution architecture CV for Hai Tran (Jeff).",
};

export default function CvPage() {
  return (
    <main className="cv-page">
      <SiteHeader current="cv" />
      <div className="cv-toolbar page-shell">
        <div>
          <p className="eyebrow">PRODUCT &amp; ARCHITECTURE CV · 2026</p>
          <p className="cv-toolbar-note">A concise, outcome-led view for business, product and technology leaders.</p>
        </div>
        <a className="button-link button-dark" href="/Hai-Tran-Nam-CV-2026.pdf" download>
          Download PDF <span aria-hidden="true">↓</span>
        </a>
      </div>

      <article className="resume-sheet" aria-label="Hai Tran product and architecture CV preview">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">PRODUCT / BUSINESS ARCHITECT · CLOUD SOLUTIONS ARCHITECT</p>
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
            <span>BUSINESS VALUE</span>
            <span>× CUSTOMER OUTCOMES</span>
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
              <h2>Selected outcomes</h2>
              <div className="resume-projects">
                {profile.projects.map((project) => (
                  <article key={project.name}>
                    <div>
                      <span>{project.index}</span>
                      <h3>
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noreferrer">{project.name} ↗</a>
                        ) : project.name}
                      </h3>
                    </div>
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
                {profile.certifications.filter((item) => item.tier === "flagship").map((item) => (
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
                    <p>{item.school} · {item.period}{item.honors ? ` · ${item.honors}` : ""}</p>
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
          <span>HAI TRAN (JEFF) / PRODUCT &amp; ARCHITECTURE CV / 2026</span>
          <span>01</span>
        </footer>
      </article>
      <article className="resume-sheet resume-sheet-credentials" aria-label="Hai Tran credentials and continuing education">
        <header className="credential-sheet-header">
          <div>
            <p className="resume-kicker">CREDENTIALS / CONTINUOUS LEARNING</p>
            <h2>Cloud-native proof.<br /><em>Product-minded practice.</em></h2>
          </div>
          <p>Verified professional certifications and completion records, current through 2026.</p>
        </header>
        <section className="credential-sheet-featured">
          {profile.certifications.filter((item) => item.tier === "flagship").map((item, index) => (
            <article key={item.name}>
              <span className="credential-sheet-code">0{index + 1}</span>
              <p>PROFESSIONAL CERTIFICATION</p>
              <h3>{item.name}</h3>
              <p>{item.issuer}</p>
              <div><span>{item.period}</span><span>ID {item.credentialId}</span></div>
            </article>
          ))}
        </section>
        <section className="credential-sheet-ledger">
          <h2>Professional learning record</h2>
          <div>
            {profile.certifications.filter((item) => item.tier === "course").map((item, index) => (
              <article key={item.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.issuer}</p>
                </div>
                <p>{item.period}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="credential-sheet-foundation">
          <div>
            <h2>Education</h2>
            {profile.education.map((item) => (
              <article key={`${item.school}-${item.period}`}>
                <h3>{item.program}</h3>
                <p>{item.school} · {item.period}{item.honors ? ` · ${item.honors}` : ""}</p>
              </article>
            ))}
          </div>
          <div>
            <h2>Languages</h2>
            {profile.languages.map((item) => <p key={item}>{item}</p>)}
          </div>
        </section>
        <footer className="resume-footer">
          <span>HAI TRAN (JEFF) / CREDENTIALS / 2026</span>
          <span>02</span>
        </footer>
      </article>
      <p className="cv-disclaimer page-shell">Need more context? Contact Hai for a role-specific CV or a detailed outcome walkthrough.</p>
    </main>
  );
}
