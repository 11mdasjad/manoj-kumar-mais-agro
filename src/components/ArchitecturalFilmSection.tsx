import Link from "next/link";
import { Film, Scan, Sun } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

export default function ArchitecturalFilmSection() {
  return (
    <section
      className="architecture-film-section"
      id="architecture-film"
      aria-labelledby="architecture-film-title"
    >
      <div className="container architecture-film-layout">
        <div className="architecture-film-copy">
          <p className="eyebrow">ARCHITECTURE IN MOTION</p>
          <h2 id="architecture-film-title">
            See a vision.
            <br />
            <em>Come to life.</em>
          </h2>
          <p className="architecture-film-description">
            From an open plot to beautifully considered interiors. Take a
            cinematic journey through the spaces, light, and details that turn
            an idea into a home.
          </p>
          <div className="film-details" aria-label="Film details">
            <span>
              <Film size={17} />
              27-second visual journey
            </span>
            <span>
              <Scan size={17} />
              3D architectural visualisation
            </span>
            <span>
              <Sun size={17} />
              Exteriors, interiors & everyday living
            </span>
          </div>
          <Link href="/properties" className="button button-gold">
            Find Your Own Possibilities
          </Link>
          <p className="film-inspiration-note">
            An architectural inspiration film. Explore our listings for
            property-specific details.
          </p>
        </div>
        <figure className="architecture-film-figure">
          <VideoPlayer />
          <figcaption>
            <span>Visualisation by MONTANI3D STUDIO</span>
            <a
              href="https://www.pinterest.com/pin/618611698867111273/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Original film on Pinterest
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
