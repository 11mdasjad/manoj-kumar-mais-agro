import type { Metadata } from "next";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/images/mais-villa-hero.webp",
): Metadata {
  return {
    title: { absolute: `${title} | MAIS AGRO HOUSE` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | MAIS AGRO HOUSE`,
      description,
      url: path,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
