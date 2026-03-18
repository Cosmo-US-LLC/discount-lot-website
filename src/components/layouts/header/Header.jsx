import { HeaderLogo } from "@/components/common/IconsSvgs";
import React, { useEffect, useState } from "react";

const defaultLinks = [
  { label: "How it works", href: "#home" },
  { label: "About Us", href: "#how-it-works" },
  { label: "Reviews", href: "#auctions" },
  { label: "FAQ", href: "#faq" },
];

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
              <a href={link.href} className="dl-nav__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={ctaHref} className="dl-nav__btn btn-primary">
          {ctaLabel}
        </a>
      </nav>
    </div>
  );
}

export default Header;
