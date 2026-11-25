import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
export default function FeaturedProjects() {
  const p = projects[0];
  return (
    <section className="projects-section" id="featured-projects">
      <div className="container section">
        <SectionHeading
          eyebrow="PLACES WITH A PURPOSE"
          title="Discover our signature developments."
          light
          link={{ href: "/projects", label: "Explore all projects" }}
        />
        <div className="featured-project">
          <figure className="project-motion">
            <div className="featured-project-image project-motion-frame">
              <Image
                src="/images/commercial-architecture-poster.jpg"
                alt=""
                fill
                sizes="(max-width: 800px) 100vw, 60vw"
                className="project-motion-backdrop"
                aria-hidden="true"
              />
              <video
                className="project-motion-video"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                preload="auto"
                poster="/images/commercial-architecture-poster.jpg"
                width={720}
                height={1296}
                tabIndex={-1}
                aria-label="Looping architectural inspiration film of a modern building"
              >
                <source src="/videos/commercial-architecture-loop-mobile.mp4" type="video/mp4" media="(max-width: 640px)" />
                <source src="/videos/commercial-architecture-loop.mp4" type="video/mp4" />
              </video>
              <span className="image-badge">Architecture in motion</span>
            </div>
            <figcaption>
              <span>Architectural inspiration</span>
              <a href="https://www.pinterest.com/pin/589619776263714482/" target="_blank" rel="noopener noreferrer">Original film ↗</a>
            </figcaption>
          </figure>
          <div className="featured-project-copy">
            <span className="project-status">{p.status}</span>
            <p className="location">
              <MapPin size={15} />
              Patia–Nandankanan Road
            </p>
            <h3>
              Mais Commercial
              <br />
              <em>Gateway.</em>
            </h3>
            <p>
              A new perspective on business. Commercial spaces designed to
              connect ambition with opportunity on a prominent Bhubaneswar
              corridor.
            </p>
            <div className="project-facts">
              <div>
                <strong>120 ft</strong>
                <span>Main road frontage</span>
              </div>
              <div>
                <strong>Retail & office</strong>
                <span>Purposeful spaces</span>
              </div>
            </div>
            <Link
              href={`/projects/${p.slug}`}
              className="button button-outline-light"
            >
              Discover the Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
