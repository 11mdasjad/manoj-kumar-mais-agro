import Link from "next/link";
import Brand from "./Brand";
import { site } from "@/lib/site";
import { categories } from "@/data/properties";
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
        </div>
        <nav className="footer-nav" aria-label="Explore Mais Agro House">
          <h3>Explore</h3>
          <ul>
          {[
            ["About us", "/about"],
            ["Our projects", "/projects"],
            ["Our services", "/services"],
            ["Insights", "/insights"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
          </ul>
        </nav>
        <nav className="footer-nav" aria-label="Property categories">
          <h3>Find your space</h3>
          <ul>
          {categories.map((c) => (
            <li key={c.value}><Link href={`/properties?category=${c.value}`}>
              {c.label}
            </Link></li>
          ))}
          <li><Link href="/#calculator">EMI calculator</Link></li>
          </ul>
        </nav>
        <div className="footer-contact">
          <h3>Come say hello</h3>
          <address>
            <p>{site.address}</p>
            <p className="footer-landmark">{site.landmark}</p>
          </address>
          <div className="footer-contact-links">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href="tel:+919009008014">{site.secondaryPhone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
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
