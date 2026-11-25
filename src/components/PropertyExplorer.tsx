"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { SlidersHorizontal, SearchX, ChevronDown } from "lucide-react";
import { categories, properties } from "@/data/properties";
import { filterProperties, type Filters } from "@/lib/search";
import PropertyCard from "./PropertyCard";
function FilterSelect({
  label,
  name,
  value,
  onChange,
  children,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="select-wrap">
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {children}
        </select>
        <ChevronDown size={16} />
      </div>
    </label>
  );
}
export default function PropertyExplorer({
  initialFilters,
}: {
  initialFilters: Filters;
}) {
  const [filters, setFilters] = useState(initialFilters);
  const router = useRouter();
  const result = useMemo(
    () => filterProperties(properties, filters),
    [filters],
  );
  function update(key: keyof Filters, value: string) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    const query = new URLSearchParams(
      Object.entries(next).filter(([, v]) => v),
    );
    router.replace(`/properties?${query.toString()}`, { scroll: false });
  }
  function reset() {
    setFilters({});
    router.replace("/properties", { scroll: false });
  }
  return (
    <div className="container section listing-section">
      <div className="listing-filters">
        <div className="filter-caption">
          <SlidersHorizontal size={20} />
          <strong>Find your fit</strong>
          <button onClick={reset} className="text-link">
            Reset filters
          </button>
        </div>
        <div className="filter-inputs">
          <FilterSelect
            label="Property type"
            name="category"
            value={filters.category || ""}
            onChange={(v) => update("category", v)}
          >
            <option value="">All property types</option>
            {categories.map((c) => (
              <option value={c.value} key={c.value}>
                {c.label}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect
            label="Location"
            name="location"
            value={filters.location || ""}
            onChange={(v) => update("location", v)}
          >
            <option value="">All locations</option>
            <option value="patia">Patia – Nandankanan Road</option>
            <option value="raghunathpur">Raghunathpur</option>
            <option value="agro-corridor">Agro-Corridor</option>
          </FilterSelect>
          <FilterSelect
            label="Starting budget"
            name="budget"
            value={filters.budget || ""}
            onChange={(v) => update("budget", v)}
          >
            <option value="">Any budget</option>
            <option value="under-50">Up to ₹50 lakh</option>
            <option value="50-100">₹50 lakh – ₹1 crore</option>
            <option value="over-100">Above ₹1 crore</option>
            <option value="request">Price on request</option>
          </FilterSelect>
          <FilterSelect
            label="Property status"
            name="status"
            value={filters.status || ""}
            onChange={(v) => update("status", v)}
          >
            <option value="">Any status</option>
            <option value="ready">Ready options</option>
            <option value="mixed">Under construction options</option>
            <option value="inquiry">Ask about availability</option>
          </FilterSelect>
          <FilterSelect
            label="Area / size"
            name="area"
            value={filters.area || ""}
            onChange={(v) => update("area", v)}
          >
            <option value="">Any size</option>
            <option value="under-2000">Up to 2,000 sq ft</option>
            <option value="2000-10000">2,000 – 10,000 sq ft</option>
            <option value="over-10000">Above 10,000 sq ft</option>
          </FilterSelect>
        </div>
        <p className="fine-print">
          Budget is based on the smallest published parcel or starting apartment
          price. Final price and availability are confirmed by our team.
        </p>
      </div>
      <div className="results-bar">
        <p role="status" aria-live="polite">
          <strong>{result.length}</strong>{" "}
          {result.length === 1 ? "property" : "properties"} to explore
        </p>
        <FilterSelect
          label="Sort by"
          name="sort"
          value={filters.sort || ""}
          onChange={(v) => update("sort", v)}
        >
          <option value="">Featured first</option>
          <option value="name">Name: A to Z</option>
          <option value="price">Starting price: low to high</option>
        </FilterSelect>
      </div>
      {result.length ? (
        <div className="property-grid">
          {result.map((p) => (
            <PropertyCard property={p} key={p.slug} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <SearchX size={42} />
          <h2>A little more room to explore.</h2>
          <p>
            No properties match these filters. Try a broader location, budget,
            or property type.
          </p>
          <button className="button button-green" onClick={reset}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
