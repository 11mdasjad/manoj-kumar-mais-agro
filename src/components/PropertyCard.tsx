import Image from "next/image";
import Link from "next/link";
import { MapPin, Scan, Building2, ArrowUpRight, Star } from "lucide-react";
import { type Property, categoryLabel } from "@/data/properties";
export default function PropertyCard({ property: p }: { property: Property }) {
  const showFullImage = p.imageFit === "contain";
  const priceLabel = p.priceUnit === "sqft" ? "per sq ft" : p.priceUnit === "acre" ? "per acre" : p.priceUnit === "total" ? "published price range" : "Contact us for pricing";
  return (
    <article className={`property-card property-card-refined${showFullImage ? " property-card-full-image" : ""}`}>
      <Link
        href={`/properties/${p.slug}`}
        className="property-image"
        aria-label={`View ${p.title}`}
      >
        <Image
          src={p.image}
          alt={p.imageAlt ?? p.originalTitle}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {!showFullImage && <>
        <span className="image-badge">{categoryLabel(p.category)}</span>
        {p.featured && <span className="featured-badge"><Star size={12} fill="currentColor" aria-hidden="true" /> Featured</span>}
        <span className="property-photo-shade" aria-hidden="true" />
        <span className="property-photo-price">
          <strong>{p.price}</strong>
          <span>{priceLabel}</span>
        </span>
        </>}
      </Link>
      <div className="property-card-body">
        {showFullImage && <div className="property-image-details">
          <span className="property-category-label">{categoryLabel(p.category)}</span>
          <div><strong>{p.price}</strong><span>{priceLabel}</span></div>
        </div>}
        <p className="location">
          <MapPin size={14} />
          {p.location}
        </p>
        <h3>
          <Link href={`/properties/${p.slug}`}>{p.title}</Link>
        </h3>
        <div className="property-specs">
          <span>
            <Building2 size={15} />
            {p.configurations}
          </span>
          <span>
            <Scan size={15} />
            {p.area}
          </span>
        </div>
        <Link href={`/properties/${p.slug}`} className="property-explore-link">
          Explore this property <span><ArrowUpRight size={18} aria-hidden="true" /></span>
        </Link>
      </div>
    </article>
  );
}
