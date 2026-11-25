import PageIntro from "@/components/PageIntro";
import ProjectExplorer from "@/components/ProjectExplorer";
import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our Projects",
  "Explore Mais Commercial Gateway, Mais Agro Enclave, Mais Royal Heights, and Mais Green Acres in Bhubaneswar.",
  "/projects",
);
export default function Projects() {
  return (
    <>
      <PageIntro
        eyebrow="OUR PROJECT PORTFOLIO"
        title="Places with a purpose."
        description="Residential communities, commercial destinations, and farmland estates. Explore the developments that bring our vision to life."
      />
      <ProjectExplorer />
      <ContactSection />
    </>
  );
}
