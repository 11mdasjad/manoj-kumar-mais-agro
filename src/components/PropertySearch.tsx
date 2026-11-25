"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Building2,
  Wallet,
  ChevronDown,
  LayoutGrid,
  LandPlot,
  Trees,
  BriefcaseBusiness,
  ArrowUpRight,
  RotateCcw,
} from "lucide-react";
import { categories } from "@/data/properties";
const categoryIcons = {
  "apartments-residential": Building2,
  "residential-plots": LandPlot,
  "investment-properties": BriefcaseBusiness,
  "farm-land-investment": Trees,
};
export default function PropertySearch() {
  const [category, setCategory] = useState("");
  return (
    <div className="property-search" id="property-search">
      <div className="search-category-row">
        <span className="search-category-caption">I’M LOOKING FOR</span>
        <div
          className="search-tabs"
          role="group"
          aria-label="Property category"
        >
          <button
            type="button"
            className={!category ? "selected" : ""}
            aria-pressed={!category}
            onClick={() => setCategory("")}
          >
            <LayoutGrid size={17} aria-hidden="true" /> All Properties
          </button>
          {categories.map((c) => {
            const Icon = categoryIcons[c.value];
            return (
              <button
                type="button"
                key={c.value}
                className={category === c.value ? "selected" : ""}
                aria-pressed={category === c.value}
                onClick={() => setCategory(c.value)}
              >
                <Icon size={17} aria-hidden="true" /> {c.label}
              </button>
            );
          })}
        </div>
      </div>
      <form
        id="property-search-form"
        action="/properties"
        className="search-fields"
        onReset={() => setCategory("")}
      >
        <label>
          <span>
            <Building2 size={16} aria-hidden="true" /> Property type
          </span>
          <div className="select-wrap">
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All property types</option>
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <ChevronDown size={15} />
          </div>
        </label>
        <label>
          <span>
            <MapPin size={16} aria-hidden="true" /> Preferred location
          </span>
          <div className="select-wrap">
            <select name="location" defaultValue="">
              <option value="">All locations</option>
              <option value="patia">Patia – Nandankanan Road</option>
              <option value="raghunathpur">Raghunathpur</option>
              <option value="agro-corridor">Bhubaneswar Agro-Corridor</option>
            </select>
            <ChevronDown size={15} />
          </div>
        </label>
        <label>
          <span>
            <Wallet size={16} aria-hidden="true" /> Starting budget
          </span>
          <div className="select-wrap">
            <select name="budget" defaultValue="">
              <option value="">Any budget</option>
              <option value="under-50">Up to ₹50 lakh</option>
              <option value="50-100">₹50 lakh – ₹1 crore</option>
              <option value="over-100">Above ₹1 crore</option>
              <option value="request">Price on request</option>
            </select>
            <ChevronDown size={15} />
          </div>
        </label>
        <button className="button button-green" type="submit">
          <Search size={20} aria-hidden="true" />
          Find my property
        </button>
      </form>
      <div className="search-card-footer">
        <div className="search-shortcuts">
          <span>Explore by location</span>
          <Link href="/properties?location=patia">
            Patia <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
          <Link href="/properties?location=raghunathpur">
            Raghunathpur <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </div>
        <button
          type="reset"
          form="property-search-form"
          className="search-reset"
        >
          <RotateCcw size={14} aria-hidden="true" /> Reset filters
        </button>
      </div>
    </div>
  );
}
