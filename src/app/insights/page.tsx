import PageIntro from "@/components/PageIntro";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Property Insights",
  "Read the Mais Agro House journal on property documentation, farmland, and the Bhubaneswar real estate landscape.",
  "/insights",
);
export default function Insights() {
  return (
    <>
      <PageIntro
        eyebrow="THE PROPERTY JOURNAL"
        title="Perspective for your next move."
        description="Explore our existing articles on property documentation, land, and the places shaping Bhubaneswar."
      />
      <BlogSection listing />
      <ContactSection />
    </>
  );
}
