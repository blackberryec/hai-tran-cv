import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { getArticle, profile } from "@/data/profile";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return profile.writing.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.dek };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      <SiteHeader />
      <article className="article-page page-shell">
        <Link className="article-back" href="/#writing">← All field notes</Link>
        <header>
          <div className="article-meta article-meta-large">
            <span>FIELD NOTE {article.number}</span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          <h1>{article.title}</h1>
          <p className="article-dek">{article.dek}</p>
        </header>
        <div className="article-body">
          {article.body.map((paragraph, index) => (
            <p className={index === 0 ? "article-lead" : ""} key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="article-signoff">
          <span>HTN</span>
          <p>Written from practice in architecture, AI systems and product delivery.</p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
