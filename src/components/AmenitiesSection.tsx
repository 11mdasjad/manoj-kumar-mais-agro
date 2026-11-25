import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
export default function AmenitiesSection() {
  return (
    <section className="container section amenities-section" id="amenities">
      <SectionHeading
        eyebrow="LIFE BEYOND YOUR FRONT DOOR"
        title={
          <>
            Little moments.
            <br />A fuller way of living.
          </>
        }
        description="Explore the community amenities presented for Mais Royal Heights Apartment Complex."
        link={{
          href: "/projects/mais-royal-heights-apartment-complex",
          label: "Explore Royal Heights",
        }}
      />
      <div className="amenities-grid">
        {[
          {
            image: "amenities-jogging-path.webp",
            alt: "Representative photograph of paved walking paths, lawns and mature trees in a park",
            position: "58% center",
            title: "Room to slow down",
            caption: "Jogging tracks & landscaped spaces",
          },
          {
            image: "amenities-reading-room.webp",
            alt: "Representative photograph of a library reading room with tables, chairs and bookshelves",
            position: "center center",
            title: "Space to find inspiration",
            caption: "A community library",
          },
          {
            image: "amenities-retail-shops.webp",
            alt: "Representative photograph of retail shops and escalators inside a shopping centre",
            position: "62% center",
            title: "Everyday, made easier",
            caption: "Commercial convenience",
          },
        ].map((a) => (
          <div className="amenity" key={a.title}>
            <Image
              src={`/images/${a.image}`}
              alt={a.alt}
              style={{ objectPosition: a.position }}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div>
              <p>{a.caption}</p>
              <h3>{a.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <p className="fine-print">
        Representative amenity photographs, not photographs of Mais Royal Heights.
        Contact our team for current project photos and amenity availability.
      </p>
    </section>
  );
}
