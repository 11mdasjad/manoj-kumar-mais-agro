import Link from "next/link";
import { FileCheck2, Handshake, Compass, Sprout } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";
const icons = [FileCheck2, Handshake, Compass, Sprout];
export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container section">
        <SectionHeading
          eyebrow="MORE THAN FINDING A PROPERTY"
          title={
            <>
              A considered journey.
              <br />A team by your side.
            </>
          }
          description="Practical guidance, meaningful conversations, and support for the decisions ahead."
          link={{ href: "/services", label: "Explore our services" }}
        />
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <article key={s.slug}>
                <Icon size={32} strokeWidth={1.25} />
                <h3>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </h3>
                <p>{s.description}</p>
                <Link href={`/services/${s.slug}`} className="text-link">
                  Learn More
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
