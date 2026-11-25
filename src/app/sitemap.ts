import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { properties } from "@/data/properties";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import articles from "@/data/articles.json";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/properties",
    "/projects",
    "/about",
    "/services",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    ...properties.map((p) => `/properties/${p.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
    ...services.map((s) => `/services/${s.slug}`),
    ...articles.map((a) => `/insights/${a.slug}`),
  ];
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
