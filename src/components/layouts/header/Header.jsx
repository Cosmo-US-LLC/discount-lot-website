import { HeaderLogo } from "@/components/common/IconsSvgs";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

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

        {/* Desktop nav */}
        <ul className="hidden dl-nav__links md:flex">
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

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={ctaHref}
              className="dl-nav__btn btn-primary flex"
              onClick={(e) => scrollToSection(e, ctaHref)}
            >
              {ctaLabel}
            </a>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-[6px] border ${scrolled ? "border-[#000] bg-white text-[#000]" : "border-white bg-black/20 text-white"}  `}
                  aria-label="Open navigation"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="!bg-[#0b1b30] !text-white">
                <nav className="mt-4 space-y-3 text-left">
                  {links.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <button
                        type="button"
                        className="block w-full rounded-md px-2 py-2 text-[15px] text-left"
                        onClick={(e) => scrollToSection(e, link.href)}
                      >
                        {link.label}
                      </button>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <button
                      type="button"
                      className="mt-4 w-full btn-secondary"
                      onClick={(e) => scrollToSection(e, ctaHref)}
                    >
                      {ctaLabel}
                    </button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
