import PageIntro from "@/components/PageIntro";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About Us",
  "Meet Mais Agro House: residential, commercial, and farmland property guidance based in Bhubaneswar, Odisha.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT MAIS AGRO HOUSE"
        title="Building trust. Creating value."
        description="Thoughtful property guidance, rooted in Bhubaneswar and shaped around your aspirations."
      />
      <AboutSection />
      <div className="mission-section">
        <div className="container">
          <p className="eyebrow">WHAT MATTERS TO US</p>
          <h2>
            Finding a place is just the beginning.
            <br />
            <em>Feeling confident makes it yours.</em>
          </h2>
          <p>
            Our focus is simple: help individuals, families, and investors
            understand their options. From residential and commercial spaces to
            land and farmland, we make room for your questions and support the
            journey from inquiry to registration.
          </p>
        </div>
      </div>
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
