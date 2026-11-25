export const categories = [
  {
    value: "apartments-residential",
    label: "Apartments",
    description: "Room for the life you imagine.",
  },
  {
    value: "residential-plots",
    label: "Residential Plots",
    description: "A foundation for your future.",
  },
  {
    value: "investment-properties",
    label: "Commercial",
    description: "Space for your next ambition.",
  },
  {
    value: "farm-land-investment",
    label: "Farmland",
    description: "A little closer to nature.",
  },
] as const;
export type Category = (typeof categories)[number]["value"];
export interface Property {
  slug: string;
  title: string;
  originalTitle: string;
  category: Category;
  location: string;
  locationKey: string;
  image: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageNote?: string;
  gallery: string[];
  price: string;
  priceMin?: number;
  priceMax?: number;
  priceUnit: "total" | "sqft" | "acre" | "request";
  area: string;
  minArea: number;
  maxArea: number;
  configurations: string;
  status: string;
  statusKey: string;
  description: string;
  specifications: { label: string; value: string }[];
  amenities: string[];
  featured: boolean;
}
export const properties: Property[] = [
  {
    slug: "luxury-residential-apartments-patia-nandankanan",
    title: "Luxury Residential Apartments",
    originalTitle: "Luxury Residential Apartments - Patia Nandankanan Road",
    category: "apartments-residential",
    location: "Patia · Nandankanan Road, Bhubaneswar",
    locationKey: "patia",
    image: "/images/properties-apartment-exterior.jpg",
    gallery: [
      "/images/properties-apartment-exterior.jpg",
      "/images/properties-apartment-interior.jpg",
      "/images/properties-luxury-estate.jpg",
    ],
    price: "₹45 L – ₹1.20 Cr",
    priceMin: 4500000,
    priceMax: 12000000,
    priceUnit: "total",
    area: "Size on request",
    minArea: 0,
    maxArea: 0,
    configurations: "2 & 3 BHK · Penthouses",
    status: "Ready to move & under construction options",
    statusKey: "mixed",
    featured: true,
    description:
      "Thoughtfully planned apartments along the Patia–Nandankanan corridor. Natural light, community facilities, and access to educational institutions, healthcare, and the Infocity area bring everyday living together.",
    specifications: [
      { label: "Configuration", value: "2 BHK, 3 BHK & Penthouse Suites" },
      { label: "Location", value: "Patia – Raghunathpur – Nandankanan Road" },
      { label: "Landmark", value: "Near Punjab National Bank" },
      { label: "Flooring", value: "Premium vitrified tiles" },
      { label: "Power backup", value: "DG backup for common areas" },
    ],
    amenities: [
      "Library & study lounge",
      "Landscaped gardens",
      "Jogging track",
      "Community cinema room",
      "Commercial complex",
      "Gated security",
    ],
  },
  {
    slug: "legally-verified-residential-plots-raghunathpur",
    title: "Residential Plots in Raghunathpur",
    originalTitle: "Legally Verified Residential Plots - Raghunathpur",
    category: "residential-plots",
    location: "Raghunathpur, Bhubaneswar",
    locationKey: "raghunathpur",
    image: "/images/properties-residential-plots.jpg",
    gallery: [
      "/images/properties-residential-plots.jpg",
      "/images/maisagro-property-3.jpeg",
    ],
    price: "₹1,950 – ₹2,750",
    priceMin: 1950,
    priceMax: 2750,
    priceUnit: "sqft",
    area: "1,200 – 3,600 sq ft",
    minArea: 1200,
    maxArea: 3600,
    configurations: "Residential plots",
    status: "Ready-to-build plots",
    statusKey: "ready",
    featured: true,
    description:
      "Create a home around the way you live. These residential plots in Raghunathpur offer defined boundaries, internal roads, drainage provisions, and electrical connectivity in an established Bhubaneswar growth corridor.",
    specifications: [
      { label: "Plot sizes", value: "1,200, 1,800, 2,400 & 3,600 sq ft" },
      {
        label: "Facing options",
        value: "East, North, North-East & corner plots",
      },
      { label: "Connecting roads", value: "30 ft & 40 ft" },
      { label: "Location", value: "Raghunathpur, Nandankanan Road, 751024" },
    ],
    amenities: [
      "Internal blacktop roads",
      "Boundary demarcation",
      "Electricity provisions",
      "Drainage provisions",
      "Gated society",
    ],
  },
  {
    slug: "high-yield-farm-land-investment-parcels",
    title: "Farmland Investment Parcels",
    originalTitle: "High-Yield Farm Land Investment Parcels",
    category: "farm-land-investment",
    location: "Nandankanan outskirts, Bhubaneswar",
    locationKey: "agro-corridor",
    image: "/images/properties-farmland-green.jpg",
    gallery: [
      "/images/properties-farmland-green.jpg",
      "/images/maisagro-about-us.webp",
    ],
    price: "₹18 L – ₹45 L",
    priceMin: 1800000,
    priceMax: 4500000,
    priceUnit: "acre",
    area: "0.5 – 5+ acres",
    minArea: 21780,
    maxArea: 217800,
    configurations: "Agricultural land",
    status: "Availability on request",
    statusKey: "inquiry",
    featured: true,
    description:
      "Explore agricultural parcels around Bhubaneswar, with road access, groundwater resources, and boundary fencing. Discuss your plans for farming, plantation, or a nature retreat with the advisory team.",
    specifications: [
      { label: "Parcel sizes", value: "0.5, 1, 2.5 & 5+ acres" },
      { label: "Water source", value: "Groundwater borewell & canal access" },
      { label: "Soil", value: "Alluvial red & loamy soil" },
      {
        label: "Location",
        value: "Bhubaneswar Agro-Corridor & Nandankanan outskirts",
      },
    ],
    amenities: [
      "All-weather road access",
      "Borewell & irrigation access",
      "Boundary fencing",
      "Plantation advisory",
    ],
  },
  {
    slug: "strategic-commercial-growth-corridor-land",
    title: "Commercial & Growth Corridor Land",
    originalTitle: "Strategic Commercial & Growth Corridor Land",
    category: "investment-properties",
    location: "Patia · Nandankanan Road, Bhubaneswar",
    locationKey: "patia",
    image: "/images/mais-agro-market-streetfront.webp",
    imageAlt: "Architectural rendering of the complete Mais Agro Market streetfront, supplied by the website owner",
    imageFit: "contain",
    imageNote: "Owner-supplied architectural rendering. Request current site photographs and confirm property-specific details with our team.",
    gallery: [
      "/images/mais-agro-market-streetfront.webp",
    ],
    price: "Price on Request",
    priceUnit: "request",
    area: "5,000 sq ft – 2.5 acres",
    minArea: 5000,
    maxArea: 108900,
    configurations: "Commercial land",
    status: "Availability on request",
    statusKey: "inquiry",
    featured: false,
    description:
      "Commercial development land along expanding Bhubaneswar corridors, with options suited to retail, offices, healthcare, and institutional uses. Discuss parcel dimensions, proposed use, and site access with our team.",
    specifications: [
      { label: "Parcel sizes", value: "5,000 sq ft up to 2.5 acres" },
      { label: "Frontage", value: "60 ft to 150+ ft main road frontage" },
      { label: "Location", value: "Patia – Nandankanan arterial highway" },
      {
        label: "Proposed uses",
        value: "Retail, offices & institutional development",
      },
    ],
    amenities: [
      "Main road frontage",
      "Vehicle access",
      "Flexible parcel sizes",
    ],
  },
];
export const categoryLabel = (value: string) =>
  categories.find((c) => c.value === value)?.label ?? value;
