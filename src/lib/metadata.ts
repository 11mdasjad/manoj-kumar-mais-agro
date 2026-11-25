import type { Metadata } from "next";
import { site, socialPreviewImage } from "./site.ts";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = socialPreviewImage.url,
): Metadata {
  const previewImage = image === socialPreviewImage.url
    ? socialPreviewImage
    : { url: image, alt: title };
  return {
    title: { absolute: `${title} | MAIS AGRO HOUSE` },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      title: `${title} | MAIS AGRO HOUSE`,
      description,
      url: path,
      images: [previewImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [previewImage],
    },
  };
}
