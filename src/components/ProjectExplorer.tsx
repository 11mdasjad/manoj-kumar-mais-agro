"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { categories, categoryLabel } from "@/data/properties";
export default function ProjectExplorer() {
  const [category, setCategory] = useState("");
  return (
    <section className="container section">
      <div className="filter-tabs" role="group" aria-label="Project categories">
        <button
          className={!category ? "selected" : ""}
          aria-pressed={!category}
          onClick={() => setCategory("")}
        >
          All Projects
        </button>
        {categories.map((c) => (
          <button
            key={c.value}
            className={category === c.value ? "selected" : ""}
            aria-pressed={category === c.value}
            onClick={() => setCategory(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => !category || p.category === category)
          .map((p) => (
            <article className={`project-card${p.imageFit === "contain" ? " project-card-full-image" : ""}`} key={p.slug} id={p.slug}>
              <Link href={`/projects/${p.slug}`} className="project-card-image">
                <Image
                  src={p.image}
                  alt={p.imageAlt ?? p.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
                {p.imageFit !== "contain" && <span className="image-badge">{categoryLabel(p.category)}</span>}
                {p.imageNote && p.imageFit !== "contain" && <span className="project-photo-note">Representative photograph</span>}
              </Link>
              <div className="project-card-body">
                {p.imageFit === "contain" && <div className="project-image-caption"><span className="property-category-label">{categoryLabel(p.category)}</span><span>Architectural rendering</span></div>}
                <div className="flex justify-between gap-4">
                  <p className="location">
                    <MapPin size={14} />
                    {p.location}
                  </p>
                  <span className="project-status">{p.status}</span>
                </div>
                <h2>
                  <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                </h2>
                <p>{p.description}</p>
                <Link href={`/projects/${p.slug}`} className="text-link">
                  Explore Project
                </Link>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
