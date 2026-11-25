import type { Category } from "./properties";
export interface Project {
  slug: string;
  title: string;
  category: Category;
  location: string;
  image: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageNote?: string;
  description: string;
  status: string;
  handover: string;
  highlights: string[];
}
export const projects: Project[] = [
  {
    slug: "mais-commercial-gateway",
    title: "Mais Commercial Gateway",
    category: "investment-properties",
    location: "Patia–Nandankanan Road, Bhubaneswar",
    image: "/images/mais-agro-market-streetfront.webp",
    imageAlt: "Architectural rendering of the complete Mais Agro Market streetfront, supplied by the website owner",
    imageFit: "contain",
    imageNote: "Owner-supplied architectural rendering. Contact our team for current site photographs of Mais Commercial Gateway.",
    description:
      "High-visibility commercial land and retail plaza project with 120ft main road frontage designed for showrooms, shopping arcade, commercial banks, and corporate offices.",
    status: "Completed",
    handover: "January 30, 2026",
    highlights: [
      "120 ft main road frontage",
      "Retail & office spaces",
      "Parking setbacks & service lanes",
    ],
  },
  {
    slug: "mais-agro-enclave-patia",
    title: "Mais Agro Enclave - Patia",
    category: "residential-plots",
    location: "Patia, Bhubaneswar, Odisha",
    image: "/images/properties-residential-plots.jpg",
    description:
      "35-acre gated residential plotted community featuring 30ft paved blacktop roads, underground electricity cabling, dedicated drainage, and lush green boundary fencing.",
    status: "Completed",
    handover: "November 15, 2025",
    highlights: [
      "35-acre plotted community",
      "30 ft paved roads",
      "Underground electricity cabling",
      "Dedicated drainage",
    ],
  },
  {
    slug: "mais-royal-heights-apartment-complex",
    title: "Mais Royal Heights Apartment Complex",
    category: "apartments-residential",
    location: "Raghunathpur, Nandankanan Road, Bhubaneswar",
    image: "/images/properties-apartment-exterior.jpg",
    description:
      "Modern multi-story residential enclave offering 2 BHK, 3 BHK, and duplex apartments equipped with library, jogging track, commercial complex, and dedicated medical center.",
    status: "Completed",
    handover: "March 20, 2026",
    highlights: [
      "2 BHK, 3 BHK & duplex apartments",
      "Library & jogging track",
      "Commercial complex",
      "Rainwater harvesting",
    ],
  },
  {
    slug: "mais-green-acres-farmland-estate",
    title: "Mais Green Acres Farmland Estate",
    category: "farm-land-investment",
    location: "Bhubaneswar Agro-Corridor",
    image: "/images/projects-green-acres-farmland.webp",
    imageAlt: "Real aerial photograph of cultivated farmland in Kerala, India; representative image",
    imageNote: "Representative farmland photograph from Kerala, India. Contact our team for current photographs of Mais Green Acres.",
    description:
      "120-acre sustainable agricultural land development parcel partitioned into 1-acre and 2-acre managed farmlands with water borewells and perimeter fencing.",
    status: "Completed",
    handover: "August 10, 2025",
    highlights: [
      "120-acre farmland estate",
      "1-acre & 2-acre managed parcels",
      "Water borewells",
      "Perimeter fencing",
    ],
  },
];
