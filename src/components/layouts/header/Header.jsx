import { HeaderLogo } from "@/components/common/IconsSvgs";
import React, { useEffect, useState } from "react";

const defaultLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "About Us", href: "#about-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

/** Extra margin (px) above the section after scroll, on top of header height. */
const SCROLL_OFFSET_EXTRA_PX = -8;

function getScrollOffsetPx() {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim();
  const headerHeight = v ? parseInt(v, 10) : 72;
  return headerHeight + SCROLL_OFFSET_EXTRA_PX;
}

function scrollToSection(e, href) {
  if (!href || !href.startsWith("#")) return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    const offset = getScrollOffsetPx();
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function Header({
  links = defaultLinks,
  ctaLabel = "Get started",
  ctaHref = "#properties",
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`dl-header ${scrolled ? "dl-header--scrolled" : ""}`}>
      <nav className="dl-nav">
        <div className="dl-nav__logo">
          <HeaderLogo />
        </div>

        <ul className="dl-nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="dl-nav__link"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={ctaHref}
          className="dl-nav__btn btn-primary"
          onClick={(e) => scrollToSection(e, ctaHref)}
        >
          {ctaLabel}
        </a>
      </nav>
    </div>
  );
}

export default Header;
