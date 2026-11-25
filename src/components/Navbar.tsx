"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react";
import Brand from "./Brand";
import { categories } from "@/data/properties";
import { site, whatsappUrl } from "@/lib/site";
const links = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const toggle = document.getElementById("menu-toggle");
    const links = Array.from(
      document.querySelectorAll<HTMLElement>("#mobile-nav a"),
    );
    const first = links[0];
    const last = links.at(-1);
    first?.focus();
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      if (event.shiftKey && document.activeElement === toggle) {
        event.preventDefault();
        last?.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        toggle?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggle?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1120) setOpen(false);
    };
    document.addEventListener("keydown", trapFocus);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", trapFocus);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  const transparent = pathname === "/" && !scrolled && !open;
  function close() {
    setOpen(false);
    setDropdown(false);
  }
  return (
    <header
      className={`navbar ${transparent ? "navbar-transparent" : ""} ${pathname === "/" ? "navbar-home" : ""}`}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          close();
          document
            .getElementById(open ? "menu-toggle" : "property-menu-toggle")
            ?.focus();
        }
      }}
    >
      <div className="nav-inner">
        <Brand light={transparent} />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <div
            className="nav-dropdown"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget))
                setDropdown(false);
            }}
          >
            <div className="nav-dropdown-trigger">
              <Link
                href="/properties"
                className={pathname.startsWith("/properties") ? "active" : ""}
              >
                Properties
              </Link>
              <button
                id="property-menu-toggle"
                aria-label="Property categories"
                aria-expanded={dropdown}
                aria-controls="property-menu"
                onClick={() => setDropdown(!dropdown)}
              >
                <ChevronDown size={13} />
              </button>
            </div>
            {dropdown && (
              <div id="property-menu" className="dropdown-panel">
                <Link href="/properties" onClick={close}>
                  Explore all properties
                </Link>
                {categories.map((c) => (
                  <Link
                    key={c.value}
                    href={`/properties?category=${c.value}`}
                    onClick={close}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.slice(1).map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={pathname.startsWith(href) ? "active" : ""}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            href={site.phoneHref}
            className="nav-phone"
            aria-label={`Call ${site.phone}`}
          >
            <Phone size={15} />
            <span>{site.phone}</span>
          </a>
          <a
            href={whatsappUrl()}
            className="nav-whatsapp"
            aria-label="Chat on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={19} />
          </a>
          <Link
            href="/contact?visit=1#site-visit"
            className="button button-gold nav-cta"
          >
            Book a Site Visit
          </Link>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="mobile-nav"
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Link href="/" onClick={close}>
              Home
            </Link>
            <Link href="/properties" onClick={close}>
              Properties
            </Link>
            {links.slice(1).map(([label, href]) => (
              <Link key={href} href={href} onClick={close}>
                {label}
              </Link>
            ))}
            <a href={site.phoneHref}>
              <Phone size={17} />
              {site.phone}
            </a>
            <Link
              href="/contact?visit=1#site-visit"
              className="button button-green"
              onClick={close}
            >
              Book a Site Visit
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
