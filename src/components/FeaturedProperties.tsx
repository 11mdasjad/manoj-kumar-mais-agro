"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { categories, properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";
export default function FeaturedProperties() {
  const [category, setCategory] = useState("");
  const shown = properties.filter((p) =>
    !category ? p.featured : p.category === category,
  );
  return (
    <section className="section container property-collection" id="discover">
      <div className="collection-heading">
        <div>
          <p className="eyebrow"><span aria-hidden="true" /> THE PROPERTY COLLECTION</p>
          <h2>Find your kind of <em>place.</em></h2>
          <p className="collection-description">Homes to settle into. Land to build on. Room for what comes next.</p>
        </div>
        <Link href="/properties" className="collection-view-all">Explore all properties <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <div className="collection-toolbar">
      <div
        className="filter-tabs"
        role="group"
        aria-label="Filter featured properties"
      >
        <button
          onClick={() => setCategory("")}
          aria-pressed={!category}
          className={!category ? "selected" : ""}
        >
          All Properties
        </button>
        {categories.map((c) => (
          <button
            key={c.value}
            aria-pressed={category === c.value}
            className={category === c.value ? "selected" : ""}
            onClick={() => setCategory(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <span className="collection-count" aria-live="polite"><strong>{String(shown.length).padStart(2, "0")}</strong> places to explore</span>
      </div>
      <div className={`property-grid${shown.length === 4 ? " property-grid-four" : ""}`}>
        {shown.map((p) => (
          <PropertyCard key={p.slug} property={p} />
        ))}
      </div>
    </section>
  );
}
