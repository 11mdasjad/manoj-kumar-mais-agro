import type { Property } from "../data/properties";
export interface Filters {
  category?: string;
  location?: string;
  budget?: string;
  status?: string;
  area?: string;
  sort?: string;
}
// Budget compares estimated total cost, never a per-square-foot price with a whole-home price.
export function minimumTotalPrice(p: Property) {
  if (!p.priceMin) return undefined;
  if (p.priceUnit === "sqft") return p.priceMin * p.minArea;
  if (p.priceUnit === "acre") return (p.priceMin * p.minArea) / 43560;
  return p.priceMin;
}
export function filterProperties(items: Property[], filters: Filters) {
  const result = items.filter((p) => {
    const total = minimumTotalPrice(p);
    if (filters.category && p.category !== filters.category) return false;
    if (filters.location && p.locationKey !== filters.location) return false;
    if (filters.budget === "request" && p.priceUnit !== "request") return false;
    if (filters.budget && filters.budget !== "request") {
      if (total === undefined) return false;
      if (filters.budget === "under-50" && total > 5000000) return false;
      if (filters.budget === "50-100" && (total < 5000000 || total > 10000000))
        return false;
      if (filters.budget === "over-100" && total < 10000000) return false;
    }
    if (
      filters.status &&
      p.statusKey !== filters.status &&
      !(filters.status === "ready" && p.statusKey === "mixed")
    )
      return false;
    if (filters.area === "under-2000" && (!p.minArea || p.minArea > 2000))
      return false;
    if (
      filters.area === "2000-10000" &&
      (!p.minArea || p.maxArea < 2000 || p.minArea > 10000)
    )
      return false;
    if (filters.area === "over-10000" && p.maxArea < 10000) return false;
    return true;
  });
  return result.sort((a, b) =>
    filters.sort === "name"
      ? a.title.localeCompare(b.title)
      : filters.sort === "price"
        ? (minimumTotalPrice(a) ?? Infinity) -
          (minimumTotalPrice(b) ?? Infinity)
        : Number(b.featured) - Number(a.featured),
  );
}
