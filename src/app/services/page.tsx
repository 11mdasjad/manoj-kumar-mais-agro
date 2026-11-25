import PageIntro from "@/components/PageIntro";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Property Services",
  "Property due diligence, buying assistance, guided site visits, farmland advisory, and registration support in Bhubaneswar.",
  "/services",
);
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="HOW WE CAN HELP"
        title="Good guidance changes everything."
        description="From your first question to the details that matter, our property services help you take the next step with clarity."
      />
      <ServicesSection />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
