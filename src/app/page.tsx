import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import EMICalculator from "@/components/EMICalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ArchitecturalFilmSection from "@/components/ArchitecturalFilmSection";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Find a Place. Build Your Future.",
  "Discover thoughtfully selected homes, residential plots, commercial spaces, and farmland in Bhubaneswar with Mais Agro House.",
  "/",
);
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <ArchitecturalFilmSection />
      <AboutSection />
      <FeaturedProjects />
      <ServicesSection />
      <AmenitiesSection />
      <EMICalculator />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
