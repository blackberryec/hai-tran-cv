import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <Image
            className="hero-art hero-art-base"
            src="/hai-tran-banking-architect-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <svg className="hero-flow-lines" viewBox="0 0 1600 900" preserveAspectRatio="none">
            <path d="M700 298 C 936 214, 1090 368, 1600 220" />
            <path d="M620 390 C 916 278, 1168 454, 1600 346" />
            <path d="M760 486 C 1014 386, 1260 510, 1600 434" />
          </svg>
          <div className="hero-product">
            <div className="hero-product-glass">
              <span className="hero-product-kicker">LIVE PRODUCT SYSTEM</span>
              <span className="hero-product-ring hero-product-ring-outer" />
              <span className="hero-product-ring hero-product-ring-inner" />
              <span className="hero-product-core">OUTCOME</span>
              <span className="hero-product-node hero-product-node-product">PRODUCT</span>
              <span className="hero-product-node hero-product-node-ai">AI</span>
              <span className="hero-product-node hero-product-node-cloud">CLOUD</span>
            </div>
            <span className="hero-product-beam" />
          </div>
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
          <span className="hero-light" />
        </div>
        <div className="hero-art-overlay" aria-hidden="true" />
        <div className="hero-index" aria-hidden="true">
          <span>PORTFOLIO</span>
          <span>2026 / 01</span>
        </div>
        <div className="hero-copy">
          <div className="hero-topline reveal reveal-1">
            <p className="eyebrow">OUTCOMES OVER OUTPUT.</p>
          </div>
          <div className="hero-identity reveal reveal-2">
            <h1 id="hero-title">{profile.shortName}.</h1>
            <p className="hero-role">
              Product &amp; business architect.<br />
              <em>Cloud solutions architect.</em>
            </p>
          </div>
          <div className="hero-bottom reveal reveal-3">
            <p>{profile.headline}</p>
            <div className="hero-actions">
              <a className="hero-primary-action" href="#work">
                View selected outcomes <span aria-hidden="true">↓</span>
              </a>
              <a className="hero-secondary-action" href="/Hai-Tran-Nam-CV-2026.pdf" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section page-shell" id="about" aria-labelledby="about-heading">
        <div className="about-portrait-wrap">
          <Image
            className="about-portrait"
            src="/hai-tran-banking-architect-portrait-3x4.jpg"
            alt="Hai Tran, product, business and cloud solutions architect"
            fill
            sizes="(max-width: 760px) calc(100vw - 36px), 36vw"
          />
          <p>HAI · HO CHI MINH CITY · 2026</p>
        </div>
        <div className="about-copy">
          <p className="section-number">ABOUT / HOW I WORK</p>
          <h2 id="about-heading">
            Product &amp; business architect.<br />
            <span>Systems thinker.</span><br />
            Builder for meaningful growth.
          </h2>
          <div className="about-body">
            <p>I thrive where business ambition, customer needs and complex technology meet. I turn uncertain ideas into clear architectures, testable products and measurable outcomes.</p>
            <p>Today I build inside Vietnam&apos;s core-banking environment—scaling AWS platforms, shaping responsible AI adoption and helping teams grow the confidence to deliver.</p>
          </div>
          <blockquote>
            “A great product is not measured by how much we ship, but by the customer success and human progress it creates.”
          </blockquote>
          <div className="about-actions">
            <a className="about-primary" href={`mailto:${profile.email}`}>Say hello <span aria-hidden="true">↗</span></a>
            <a className="about-secondary" href="/Hai-Tran-Nam-CV-2026.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
          </div>
        </div>
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
                  <h3>
                    {project.url ? (
                      <a className="project-title-link" href={project.url} target="_blank" rel="noreferrer">
                        {project.name} <span aria-hidden="true">↗</span>
                      </a>
                    ) : project.name}
                  </h3>
                  <p className="project-description">{project.description}</p>
                  {project.evidence.length > 0 ? (
                    <div className="project-evidence" aria-label={`${project.name} public evidence`}>
                      <span>Public context</span>
                      {project.evidence.map((item) => (
                        <a href={item.url} target="_blank" rel="noreferrer" key={item.url}>
                          {item.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
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
