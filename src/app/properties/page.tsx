import PageIntro from "@/components/PageIntro";
import PropertyExplorer from "@/components/PropertyExplorer";
import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/metadata";
import type { Filters } from "@/lib/search";
export const metadata = pageMetadata(
  "Properties in Bhubaneswar",
  "Explore apartments, residential plots, commercial land and farmland. Filter by location, budget, status and size.",
  "/properties",
);
export default async function Properties({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const filters: Filters = {};
  for (const k of [
    "category",
    "location",
    "budget",
    "status",
    "area",
    "sort",
  ] as const) {
    if (typeof params[k] === "string") filters[k] = params[k];
  }
  return (
    <>
      <PageIntro
        eyebrow="OUR PROPERTY COLLECTION"
        title="A place for what’s next."
        description="Your first home. Your next investment. Your own piece of possibility. Discover property around Bhubaneswar."
      />
      <PropertyExplorer
        key={JSON.stringify(filters)}
        initialFilters={filters}
      />
      <ContactSection />
    </>
  );
}
