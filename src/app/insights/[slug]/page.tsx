import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import articles from "@/data/articles.json";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a
    ? pageMetadata(a.title, a.body.split("\n")[0], `/insights/${slug}`, a.image)
    : { title: "Article not found" };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <article className="article-page container">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/insights">Insights</Link>
      </nav>
      <header>
        <p className="eyebrow">{a.category}</p>
        <h1>{a.title}</h1>
        <div className="article-meta">
          <span>{a.author}</span>
          <time dateTime={a.date}>{a.displayDate}</time>
          <span>{a.readTime}</span>
        </div>
      </header>
      <div className="article-cover">
        <Image
          src={a.image}
          alt={a.imageAlt}
          fill
          priority
          sizes="(max-width:1000px) 100vw, 1000px"
        />
      </div>
      <div className="article-content">
        {a.body.split(/\n\s*\n/).map((part, i) =>
          part.startsWith("### ") ? (
            <section key={i}>
              <h2>{part.split("\n")[0].replace("### ", "")}</h2>
              {part.split("\n").slice(1).join("\n") && (
                <p>{part.split("\n").slice(1).join("\n")}</p>
              )}
            </section>
          ) : (
            <p key={i}>{part}</p>
          ),
        )}
        <aside className="article-note">
          This article is reproduced from the existing Mais Agro House journal.
          It reflects the original author’s views and is general information,
          not personalised legal or investment advice. Verify current records
          and obtain independent professional advice before committing.
        </aside>
        <Link href="/contact" className="button button-green">
          Discuss Your Property Questions
        </Link>
        <div className="article-next">
          <p className="eyebrow">CONTINUE READING</p>
          {articles
            .filter((x) => x.slug !== slug)
            .map((x) => (
              <h3 key={x.slug}>
                <Link href={`/insights/${x.slug}`}>{x.title}</Link>
              </h3>
            ))}
        </div>
      </div>
    </article>
  );
}
