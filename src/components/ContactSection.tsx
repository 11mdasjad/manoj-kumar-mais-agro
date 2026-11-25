import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";
export default function ContactSection() {
  return (
    <section className="contact-banner contact-cta" id="lets-talk" aria-labelledby="contact-cta-heading">
      <div className="container">
        <div className="contact-cta-copy">
          <p className="eyebrow">LET’S FIND YOUR PLACE</p>
          <h2 id="contact-cta-heading">
            Every great move starts with <span>a conversation.</span>
          </h2>
          <p>
            Tell us what you have in mind. We’ll explore the possibilities
            together.
          </p>
          <div className="contact-cta-actions">
            <Link
              href="/contact?visit=1#site-visit"
              className="button button-gold"
            >
              Schedule a Site Visit
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="button button-outline-light">
              Talk to an Advisor
            </Link>
          </div>
        </div>
        <div className="contact-cta-panel">
          <div className="contact-cta-panel-heading">
            <span className="contact-cta-icon"><Phone size={21} aria-hidden="true" /></span>
            <div><h3>Let’s talk about your next move</h3><p>Connect with our local team</p></div>
          </div>
          <a className="contact-cta-phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <div className="contact-cta-info">
            <a href={`mailto:${site.email}`}><Mail size={17} aria-hidden="true" /><span>{site.email}</span></a>
            <p><MapPin size={17} aria-hidden="true" /><span>Bhubaneswar, Odisha</span></p>
            <p><Clock3 size={17} aria-hidden="true" /><span>{site.hours}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
