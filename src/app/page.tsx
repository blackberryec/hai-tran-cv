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
          <p className="eyebrow reveal reveal-1">SENIOR SOFTWARE ENGINEER · SOLUTIONS ARCHITECT</p>
          <h1 id="hero-title" className="display reveal reveal-2">
            Systems with
            <br />
            <em>consequence.</em>
          </h1>
          <div className="hero-bottom reveal reveal-3">
            <p>{profile.summary}</p>
            <a className="text-link" href="#work">
              Explore selected work <span aria-hidden="true">↘</span>
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
          <p className="aside-note">Based in {profile.location}. Working across architecture, product and delivery.</p>
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
            <p className="section-number">02 / SELECTED SYSTEMS</p>
            <h2 id="work-heading">Built from intent<br />to evidence.</h2>
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
          <h2 id="experience-heading">Architecture is<br /><em>a delivery role.</em></h2>
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
                  {item.bullets.slice(0, 2).map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <Link className="button-link" href="/cv">
          View engineering résumé <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="capability-section page-shell" aria-labelledby="capability-heading">
        <div className="section-heading compact-heading">
          <p className="section-number">04 / CAPABILITIES</p>
          <h2 id="capability-heading">The working stack.</h2>
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

      <section className="writing-section page-shell" id="writing" aria-labelledby="writing-heading">
        <div className="section-heading compact-heading">
          <p className="section-number">05 / FIELD NOTES</p>
          <h2 id="writing-heading">Writing in 2026.</h2>
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
