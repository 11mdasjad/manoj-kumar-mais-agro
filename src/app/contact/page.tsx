import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import InquiryForm from "@/components/InquiryForm";
import SiteVisitForm from "@/components/SiteVisitForm";
import { site, whatsappUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact & Site Visits",
  "Contact Mais Agro House in Patia, Bhubaneswar. Speak with a property advisor or request a guided site visit.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="LET’S START A CONVERSATION"
        title="Your next chapter begins here."
        description="A question, a plan, or a place you’d like to see. We’re here to help you explore."
      />
      <section className="container section contact-layout">
        <div className="contact-details">
          <p className="eyebrow">COME SAY HELLO</p>
          <h2>
            Local knowledge.
            <br />
            Personal connections.
          </h2>
          <div className="contact-info-row">
            <MapPin />
            <div>
              <h3>Visit our Bhubaneswar office</h3>
              <p>
                {site.address}
                <br />
                {site.landmark}
              </p>
              <a
                className="text-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Mais Agro House " + site.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Find us on Google Maps
              </a>
            </div>
          </div>
          <div className="contact-info-row">
            <Phone />
            <div>
              <h3>Let’s talk</h3>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href="tel:+919009008014">{site.secondaryPhone}</a>
            </div>
          </div>
          <div className="contact-info-row">
            <Mail />
            <div>
              <h3>Write to us</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="contact-info-row">
            <Clock />
            <div>
              <h3>Office hours</h3>
              <p>{site.hours}</p>
            </div>
          </div>
          <a
            href={whatsappUrl()}
            className="button button-green"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} />
            Chat on WhatsApp
          </a>
        </div>
        <div className="contact-form-panel">
          <p className="eyebrow">TELL US WHAT YOU HAVE IN MIND</p>
          <h2>Find your starting point.</h2>
          <InquiryForm />
        </div>
      </section>
      <section id="site-visit" className="site-visit-section">
        <div className="container contact-layout section">
          <div>
            <p className="eyebrow">EXPERIENCE IT FOR YOURSELF</p>
            <h2>
              A visit makes
              <br />
              <em>all the difference.</em>
            </h2>
            <p>
              Walk the neighbourhood. Explore the layout. Picture the
              possibilities. Request a guided visit at a time that works for
              you.
            </p>
            <ul className="visit-steps">
              <li>
                <span>Choose your property</span>Share a preference or let us
                help you shortlist.
              </li>
              <li>
                <span>Pick a date and time</span>Send your preferences to the
                team via WhatsApp.
              </li>
              <li>
                <span>We’ll confirm the details</span>Your advisor will
                coordinate the visit with you.
              </li>
            </ul>
          </div>
          <div className="contact-form-panel">
            <h3>Request a site visit</h3>
            <SiteVisitForm />
          </div>
        </div>
      </section>
    </>
  );
}
