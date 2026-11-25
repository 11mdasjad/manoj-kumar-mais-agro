export const site = {
  name: "MAIS AGRO HOUSE",
  phone: "+91 80080 07062",
  phoneHref: "tel:+918008007062",
  secondaryPhone: "+91 90090 08014",
  email: "info@maisagrohouse.com",
  address: "Patia, Raghunathpur, Nandankanan Road, Bhubaneswar, Odisha 751024",
  landmark: "Near Punjab National Bank",
  hours: "Monday – Sunday · 9:00 AM – 7:00 PM",
  // Add verified company profile URLs here when supplied by the owner.
  socialProfiles: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    x: "",
  },
  sourceUrl: "https://manish01-1.onrender.com",
};
export function whatsappUrl(
  message = "Hello Mais Agro House, I would like to explore property opportunities in Bhubaneswar.",
) {
  return `https://wa.me/918008007062?text=${encodeURIComponent(message)}`;
}
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "http://localhost:3000"
).replace(/\/$/, "");
