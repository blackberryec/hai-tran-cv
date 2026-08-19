import Link from "next/link";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero page-shell" aria-labelledby="hero-title">
        <div className="hero-index" aria-hidden="true">
          <span>PORTFOLIO</span>
          <span>2026 / 01</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow reveal reveal-1">PRODUCT · BUSINESS · SOLUTION ARCHITECTURE</p>
          <h1 id="hero-title" className="display reveal reveal-2">
            Outcomes over
            <br />
            <em>output.</em>
          </h1>
          <div className="hero-bottom reveal reveal-3">
            <p>{profile.summary}</p>
            <a className="text-link" href="#work">
              See how I create value <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <aside className="hero-aside reveal reveal-4">
          <div className="availability">
            <span className="status-dot" aria-hidden="true" />
            <span>{profile.availability}</span>
          </div>
          <div className="signal-card" aria-label="Professional focus">
            <span className="signal-orbit orbit-one" />
            <span className="signal-orbit orbit-two" />
            <span className="signal-core">HTN</span>
            <span className="signal-label signal-cloud">CLOUD</span>
            <span className="signal-label signal-ai">AI</span>
            <span className="signal-label signal-product">PRODUCT</span>
          </div>
          <p className="aside-note">Based in {profile.location}. Connecting business strategy, customer needs and delivery.</p>
        </aside>
      </section>

      <section className="manifesto page-shell" aria-label="Working principles">
        <p className="section-number">01 / POINT OF VIEW</p>
        <h2>{profile.headline}</h2>
        <div className="principle-grid">
          {profile.principles.map((principle, index) => (
            <div className="principle" key={principle}>
              <span>0{index + 1}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="page-shell">
          <div className="section-heading section-heading-dark">
            <p className="section-number">02 / SELECTED OUTCOMES</p>
            <h2 id="work-heading">Strategy turned<br />into outcomes.</h2>
          </div>
          <div className="project-list">
            {profile.projects.map((project) => (
              <article className="project-row" key={project.name}>
                <div className="project-number">{project.index}</div>
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section page-shell" aria-labelledby="experience-heading">
        <div className="section-heading">
          <p className="section-number">03 / EXPERIENCE</p>
          <h2 id="experience-heading">Architecture that<br /><em>moves the business.</em></h2>
        </div>
        <div className="timeline">
          {profile.experience.map((item) => (
            <article className="timeline-row" key={item.company}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <p className="timeline-company">{item.company}</p>
                <h3>{item.role}</h3>
              </div>
              <div className="timeline-detail">
                <p>{item.summary}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <Link className="button-link" href="/cv">
          View product &amp; architecture CV <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="capability-section page-shell" aria-labelledby="capability-heading">
        <div className="section-heading compact-heading">
          <p className="section-number">04 / CAPABILITIES</p>
          <h2 id="capability-heading">How I create value.</h2>
        </div>
        <div className="capability-grid">
          {profile.capabilities.map((group, index) => (
            <article className="capability-card" key={group.name}>
              <span className="capability-index">A{index + 1}</span>
              <h3>{group.name}</h3>
              <p>{group.items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials-section page-shell" aria-labelledby="credentials-heading">
        <div className="section-heading compact-heading">
          <p className="section-number">05 / CREDENTIALS</p>
          <h2 id="credentials-heading">Credentials behind<br /><em>the practice.</em></h2>
        </div>
        <div className="flagship-credentials">
          {profile.certifications.filter((item) => item.tier === "flagship").map((item, index) => (
            <article className="flagship-card" key={item.name}>
              <div className="credential-badge" aria-hidden="true">{index === 0 ? "K8S" : "AWS"}</div>
              <div>
                <p className="credential-tier">Professional certification</p>
                <h3>{item.name}</h3>
                <p>{item.issuer}</p>
              </div>
              <div className="credential-proof">
                <span>{item.period}</span>
                <span>ID {item.credentialId}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="learning-ledger">
          {profile.certifications.filter((item) => item.tier === "course").map((item, index) => (
            <article key={item.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.issuer} · {item.period}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="writing-section page-shell" id="writing" aria-labelledby="writing-heading">
        <div className="section-heading compact-heading">
          <p className="section-number">06 / FIELD NOTES</p>
          <h2 id="writing-heading">Notes on products,<br />platforms and AI.</h2>
        </div>
        <div className="article-grid">
          {profile.writing.map((article) => (
            <Link className="article-card" href={`/writing/${article.slug}`} key={article.slug}>
              <div className="article-meta">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <span className="article-number">{article.number}</span>
              <h3>{article.title}</h3>
              <p>{article.dek}</p>
              <span className="article-link">Read note ↗</span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
