import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
export default function AboutSection() {
  return (
    <section className="container section about-section">
      <div className="about-image">
        <Image
          src="/images/properties-apartment-interior.jpg"
          alt="Light-filled living space — interior inspiration"
          fill
          sizes="(max-width: 800px) 100vw, 45vw"
        />
        <div className="image-caption">SPACES TO LIVE. ROOM TO GROW.</div>
        <div className="about-seal">
          <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <path
              d="M6 36V19L22 7l16 12v17M15 36V24l7-5 7 5v12M3 40h38"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
          <span>
            Built around
            <br />
            your aspirations.
          </span>
        </div>
      </div>
      <Reveal className="about-copy">
        <p className="eyebrow">THE MAIS AGRO HOUSE APPROACH</p>
        <h2>
          Good places.
          <br />
          Better possibilities.
          <br />
          <em>Lasting relationships.</em>
        </h2>
        <p>
          A home is personal. An investment is purposeful. We believe finding
          either should begin with a conversation.
        </p>
        <p>
          Based in Bhubaneswar, we bring together residential apartments,
          plotted communities, commercial spaces, and farmland
          opportunities—with guidance that stays with you from the first visit
          to registration.
        </p>
        <div className="about-values">
          <span>
            <Check size={17} />
            Thoughtful property selection
          </span>
          <span>
            <Check size={17} />
            Clear, personal guidance
          </span>
          <span>
            <Check size={17} />
            Support at every step
          </span>
        </div>
        <Link href="/about" className="button button-green">
          Get to Know Us
        </Link>
      </Reveal>
    </section>
  );
}
