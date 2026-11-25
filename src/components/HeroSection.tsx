import Image from "next/image";
import Link from "next/link";
import { MapPin, Play, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import PropertySearch from "./PropertySearch";
import WhyChooseUs from "./WhyChooseUs";
import HeroStats from "./HeroStats";
import { site, whatsappUrl } from "@/lib/site";

export default function HeroSection() {
  return (
    <>
      <section className="estate-hero" aria-labelledby="hero-title">
        <div className="estate-scene">
          <Image
            src="/images/mais-villa-hero.webp"
            alt="Architectural inspiration: a contemporary tropical villa, palms and a reflecting pool"
            fill
            priority
            sizes="100vw"
            className="estate-sky-image"
          />
          <div className="estate-top-shade" />
          <div className="estate-wordmark" aria-hidden="true">
            mais<span>.</span>
          </div>
          <div className="estate-foreground" aria-hidden="true">
            <Image
              src="/images/mais-villa-hero.webp"
              alt=""
              fill
              sizes="100vw"
            />
          </div>
          <div className="estate-bottom-shade" />
        </div>
        <div className="estate-corner-label">
          <span>AGRO HOUSE</span>
          <span>BHUBANESWAR, ODISHA</span>
        </div>
        <div
          className="estate-categories"
          aria-label="Discover property categories"
        >
          <Link href="/properties?category=apartments-residential">Homes</Link>
          <Link href="/properties?category=residential-plots">Land</Link>
          <Link href="/properties?category=investment-properties">
            Possibilities
          </Link>
        </div>
        <div
          className="estate-contact-rail"
          aria-label="Contact Mais Agro House"
        >
          <a href={site.phoneHref} className="estate-call" aria-label="Call Mais Agro House">
            <Phone size={18} />
          </a>
          <a
            href={whatsappUrl()}
            className="estate-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon size={20} />
          </a>
          <a
            href="#architecture-film"
            className="estate-video"
            aria-label="Watch the 3D architecture film"
          >
            <Play size={18} />
          </a>
        </div>
        <div className="estate-hero-bottom">
          <div className="estate-hero-title">
            <p>
              <MapPin size={14} /> Your future, rooted in Bhubaneswar.
            </p>
            <h1 id="hero-title">
              A place to call yours.
              <br />
              <span>A future to make your own.</span>
            </h1>
          </div>
          <div className="estate-hero-action">
            <p>
              Considered homes. Meaningful spaces.
              <br />
              Personal guidance, every step of the way.
            </p>
            <div>
              <Link href="/properties" className="button button-white">
                Explore Properties
              </Link>
              <a href="#architecture-film" className="estate-film-link">
                <span>
                  <Play size={14} fill="currentColor" />
                </span>
                Watch the film
              </a>
            </div>
          </div>
        </div>
        <span className="estate-image-note">ARCHITECTURAL INSPIRATION</span>
      </section>
      <HeroStats />
      <section
        className="home-search-section"
        id="find-your-place"
        aria-labelledby="home-search-title"
      >
        <div className="container">
          <div className="home-search-intro">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true" /> FIND YOUR NEXT CHAPTER
              </p>
              <h2 id="home-search-title">
                Good places.
                <br />
                <em>Great beginnings.</em>
              </h2>
            </div>
            <div className="home-search-context">
              <span className="search-region">
                <MapPin size={14} aria-hidden="true" /> BHUBANESWAR & BEYOND
              </span>
              <p>
                From your first home to your next investment.
                <br />
                Find a space that fits the life you have in mind.
              </p>
            </div>
          </div>
          <PropertySearch />
          <WhyChooseUs compact />
        </div>
      </section>
    </>
  );
}
