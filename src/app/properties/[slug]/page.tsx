import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Check, Phone, CalendarDays } from "lucide-react";
import { properties, categoryLabel } from "@/data/properties";
import ImageGallery from "@/components/ImageGallery";
import InquiryForm from "@/components/InquiryForm";
import PropertyCard from "@/components/PropertyCard";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = properties.find((p) => p.slug === slug);
  return p
    ? pageMetadata(p.title, p.description, `/properties/${slug}`, p.image)
    : { title: "Property not found" };
}
export default async function PropertyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = properties.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <section className="detail-header container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/properties">Properties</Link>
          <span>/</span>
          <span>{categoryLabel(p.category)}</span>
        </nav>
        <p className="eyebrow">{categoryLabel(p.category)}</p>
        <h1>{p.title}</h1>
        <p className="location">
          <MapPin size={17} />
          {p.location}
        </p>
      </section>
      <div className="container detail-layout">
        <div>
          <ImageGallery images={p.gallery} title={p.imageAlt ?? p.title} fit={p.imageFit} />
          <p className="fine-print">
            {p.imageNote ?? "Images supplied on the existing website; some may be illustrative. Request current site photographs before making a decision."}
          </p>
          <div className="detail-facts">
            <div>
              <span>Published price</span>
              <strong>
                {p.price}
                {p.priceUnit === "sqft"
                  ? " / sq ft"
                  : p.priceUnit === "acre"
                    ? " / acre"
                    : ""}
              </strong>
            </div>
            <div>
              <span>Area</span>
              <strong>{p.area}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>{p.status}</strong>
            </div>
          </div>
          <section className="detail-section">
            <p className="eyebrow">A CLOSER LOOK</p>
            <h2>Imagine the possibilities.</h2>
            <p>{p.description}</p>
          </section>
          <section className="detail-section">
            <h2>Property at a glance</h2>
            <dl className="specification-list">
              {p.specifications.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="detail-section">
            <h2>Features & amenities</h2>
            <ul className="check-list">
              {p.amenities.map((a) => (
                <li key={a}>
                  <Check size={18} />
                  {a}
                </li>
              ))}
            </ul>
            <p className="fine-print">
              Published features are subject to confirmation for the specific
              unit or parcel.
            </p>
          </section>
          <section className="documentation-note">
            <h3>A clear view before you commit.</h3>
            <p>
              Request current availability, an itemised quotation, layout plans,
              and the relevant title and approval documents. Property-specific
              legal documentation is available from the advisory team for
              review.
            </p>
            <Link
              href="/services/legally-verified-property-due-diligence"
              className="text-link"
            >
              Explore documentation guidance
            </Link>
          </section>
        </div>
        <aside className="inquiry-panel">
          <p className="eyebrow">LET’S TALK ABOUT THIS PLACE</p>
          <h2>Make your next move.</h2>
          <p>Ask a question, request details, or arrange a visit.</p>
          <InquiryForm property={p.title} />
          <div className="panel-contact">
            <a href={site.phoneHref}>
              <Phone size={17} />
              {site.phone}
            </a>
            <Link href="/contact?visit=1#site-visit">
              <CalendarDays size={17} />
              Schedule a Site Visit
            </Link>
          </div>
        </aside>
      </div>
      <section className="container section">
        <p className="eyebrow">KEEP EXPLORING</p>
        <h2 className="mb-10">More possibilities.</h2>
        <div className="property-grid">
          {properties
            .filter((x) => x.slug !== p.slug)
            .slice(0, 3)
            .map((x) => (
              <PropertyCard property={x} key={x.slug} />
            ))}
        </div>
      </section>
    </>
  );
}
