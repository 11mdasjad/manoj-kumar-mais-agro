import Image from "next/image";
import Link from "next/link";
import articles from "@/data/articles.json";
import SectionHeading from "./SectionHeading";
export default function BlogSection({
  listing = false,
}: {
  listing?: boolean;
}) {
  return (
    <section className="container section" id="property-journal">
      {!listing && (
        <SectionHeading
          eyebrow="THE PROPERTY JOURNAL"
          title={
            <>
              A little insight.
              <br />A more informed decision.
            </>
          }
          link={{ href: "/insights", label: "Read all insights" }}
        />
      )}
      <div className="blog-grid">
        {articles.map((a) => (
          <article key={a.slug} className="blog-card">
            <Link className="blog-image" href={`/insights/${a.slug}`}>
              <Image
                src={a.image}
                alt={a.imageAlt}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </Link>
            <div className="blog-meta">
              <span>{a.category}</span>
              <time dateTime={a.date}>{a.displayDate}</time>
              <span>{a.readTime}</span>
            </div>
            <h3>
              <Link href={`/insights/${a.slug}`}>{a.title}</Link>
            </h3>
            <Link href={`/insights/${a.slug}`} className="text-link">
              Read the Story
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
