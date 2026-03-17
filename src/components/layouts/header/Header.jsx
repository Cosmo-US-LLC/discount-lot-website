import { HeaderLogo } from "@/components/common/IconsSvgs";
import React, { useEffect, useState } from "react";

function Header() {
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
          <li>
            <a href="#home" className="dl-nav__link">
              How it works
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="dl-nav__link">
              About Us
            </a>
          </li>
          <li>
            <a href="#auctions" className="dl-nav__link">
              Reviews
            </a>
          </li>
          <li>
            <a href="#faq" className="dl-nav__link">
              FAQ
            </a>
          </li>
        </ul>

        <button type="button" className="dl-nav__btn btn-primary">
          Get started
        </button>
      </nav>
    </div>
  );
}

export default Header;
