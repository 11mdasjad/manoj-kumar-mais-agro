import Link from "next/link";
import Brand from "./Brand";
import { ChevronRight, Facebook, Instagram, Linkedin, Mail, Phone, Smartphone, Youtube } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { site, whatsappUrl } from "@/lib/site";
import { categories } from "@/data/properties";

const socials = [
  { name: "Instagram", key: "instagram", Icon: Instagram },
  { name: "Facebook", key: "facebook", Icon: Facebook },
  { name: "LinkedIn", key: "linkedin", Icon: Linkedin },
  { name: "YouTube", key: "youtube", Icon: Youtube },
] as const;

export default function Footer() {
  return (
    <footer className="footer footer-refined" id="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand light />
          <p>
            Homes, land, and possibilities. Thoughtfully brought together in
            Bhubaneswar, Odisha.
          </p>
          <div className="footer-socials" aria-label="Social media">
            {socials.map(({ name, key, Icon }) => {
              const href = site.socialProfiles[key];
              return href ? (
                <a key={key} href={href} className={`footer-social footer-social-${key}`} target="_blank" rel="noopener noreferrer" aria-label={`Mais Agro House on ${name}`}>
                  <Icon size={20} aria-hidden="true" />
                </a>
              ) : (
                <span key={key} className={`footer-social footer-social-${key}`} role="link" aria-disabled="true" aria-label={`${name}: profile link unavailable`} title={`${name} profile link not available yet`}>
                  <Icon size={20} aria-hidden="true" />
                </span>
              );
            })}
            {site.socialProfiles.x ? (
              <a href={site.socialProfiles.x} className="footer-social footer-social-x" target="_blank" rel="noopener noreferrer" aria-label="Mais Agro House on X"><span aria-hidden="true">𝕏</span></a>
            ) : (
              <span className="footer-social footer-social-x" role="link" aria-disabled="true" aria-label="X: profile link unavailable" title="X profile link not available yet"><span aria-hidden="true">𝕏</span></span>
            )}
            <a className="footer-social footer-social-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Mais Agro House on WhatsApp"><WhatsAppIcon size={21} /></a>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Explore Mais Agro House">
          <h3>Explore</h3>
          <ul>
          {[
            ["Home", "/"],
            ["About us", "/about"],
            ["Our projects", "/projects"],
            ["Our services", "/services"],
            ["Insights", "/insights"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={href}><Link href={href}><ChevronRight size={15} aria-hidden="true" />{label}</Link></li>
          ))}
          </ul>
        </nav>
        <nav className="footer-nav" aria-label="Property categories">
          <h3>Properties &amp; Advisory</h3>
          <ul>
          {categories.map((c) => (
            <li key={c.value}><Link href={`/properties?category=${c.value}`}>
              <ChevronRight size={15} aria-hidden="true" />{c.label}
            </Link></li>
          ))}
          <li><Link href="/services/legally-verified-property-due-diligence"><ChevronRight size={15} aria-hidden="true" />Property due diligence</Link></li>
          <li><Link href="/services/guided-site-visits-layout-inspections"><ChevronRight size={15} aria-hidden="true" />Guided site visits</Link></li>
          <li><Link href="/#calculator"><ChevronRight size={15} aria-hidden="true" />EMI calculator</Link></li>
          </ul>
        </nav>
        <div className="footer-contact">
          <h3>Corporate Office</h3>
          <h4 className="footer-office-label">Bhubaneswar Head Office</h4>
          <address>
            <p>{site.address}</p>
            <p className="footer-landmark">{site.landmark}</p>
          </address>
          <div className="footer-hours">
            <h4>Working hours</h4>
            <p>{site.hours}</p>
          </div>
          <div className="footer-contact-links">
          <a href={site.phoneHref}><Phone size={18} aria-hidden="true" /><span>{site.phone}</span></a>
          <a href="tel:+919009008014"><Smartphone size={18} aria-hidden="true" /><span>{site.secondaryPhone}</span></a>
          <a className="footer-whatsapp-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20} /><span>Chat on WhatsApp</span></a>
          <a href={`mailto:${site.email}`}><Mail size={18} aria-hidden="true" /><span>{site.email}</span></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Mais Agro House. All rights reserved.
        </p>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
