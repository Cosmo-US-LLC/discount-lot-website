import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./layout.css";

function Layout() {
  const location = useLocation();

  const headerConfigs = {
    "/": {
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "About Us", href: "#about-us" },
        { label: "Reviews", href: "#reviews" },
        { label: "FAQ", href: "#faq" },
      ],
      ctaLabel: "Get started",
      ctaHref: "#properties",
    },
    "/states/kentucky": {
      links: [
        { label: "Explore Lots", href: "#explore-lots" },
        { label: "Schedule a Call", href: "#schedule-a-call" },
        { label: "Reviews", href: "#testimonials" },
        { label: "FAQ", href: "#resources" },
      ],
      ctaLabel: "Explore Kentucky properties",
      ctaHref: "#explore-lots",
    },
  };

  const headerProps = headerConfigs[location.pathname] || headerConfigs["/"];

  return (
    <>
      <Header {...headerProps} />
      <div className="dl-layout__content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
