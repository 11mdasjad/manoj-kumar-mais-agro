import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { categoryLabel } from "@/data/properties";
import ImageGallery from "@/components/ImageGallery";
import InquiryForm from "@/components/InquiryForm";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p
    ? pageMetadata(p.title, p.description, `/projects/${slug}`, p.image)
    : { title: "Project not found" };
}
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <section className="container detail-header">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/projects">Projects</Link>
          <span>/</span>
          <span>{p.title}</span>
        </nav>
        <p className="eyebrow">
          {categoryLabel(p.category)} · {p.status}
        </p>
        <h1>{p.title}</h1>
        <p className="location">
          <MapPin size={17} />
          {p.location}
        </p>
      </section>
      <div className="container detail-layout pb-24">
        <div>
          <ImageGallery
            images={[p.image]}
            title={p.imageAlt ?? p.title}
            fit={p.imageFit}
          />
          {p.imageNote && <p className="fine-print mt-3">{p.imageNote}</p>}
          <section className="detail-section">
            <p className="eyebrow">THE PROJECT</p>
            <h2>A considered development.</h2>
            <p>{p.description}</p>
          </section>
          <div className="detail-facts">
            <div>
              <span>Category</span>
              <strong>{categoryLabel(p.category)}</strong>
            </div>
            <div>
              <span>Published status</span>
              <strong>{p.status}</strong>
            </div>
            <div>
              <span>Published handover</span>
              <strong>{p.handover}</strong>
            </div>
          </div>
          <section className="detail-section">
            <h2>Project highlights</h2>
            <ul className="check-list">
              {p.highlights.map((h) => (
                <li key={h}>
                  <Check size={18} />
                  {h}
                </li>
              ))}
            </ul>
          </section>
          <p className="fine-print">
            Project details are preserved from the existing Mais Agro
            House website. Ask our team to confirm current availability, site
            conditions, amenities, and applicable documents.
          </p>
          <Link href="/projects" className="text-link mt-8 inline-block">
            Explore all projects
          </Link>
        </div>
        <aside className="inquiry-panel">
          <p className="eyebrow">CURIOUS ABOUT THIS PROJECT?</p>
          <h2>Let’s explore it together.</h2>
          <InquiryForm property={p.title} />
          <Link
            href="/contact?visit=1#site-visit"
            className="text-link mt-6 inline-block"
          >
            Request a guided site visit
          </Link>
        </aside>
      </div>
    </>
  );
}
