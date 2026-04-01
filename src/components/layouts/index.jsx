import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./layout.css";

function Layout() {
  const location = useLocation();
  const showFooter = location.pathname !== "/states/kentucky";

  const headerConfigs = {
    "/": {
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "About Us", href: "#about-us" },
        { label: "Reviews", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
      ],
      ctaLabel: "View Properties",
      ctaHref: "#properties",
    },
    "/states/arizona": {
      links: [
        { label: "Browse by county", href: "#browse-by-county" },
        { label: "How it works", href: "#schedule-a-call" },
        { label: "Reviews", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    "/states/kentucky": {
      links: [
        { label: "Explore Lots", href: "#explore-lots" },
        {
          label: "Schedule a Call",
          href: "https://api.leadconnectorhq.com/widget/bookings/sales-reps-rr",
        },
        { label: "Reviews", href: "#testimonials" },
        { label: "FAQ", href: "#resources" },
      ],
      ctaLabel: "Explore Kentucky properties",
      ctaHref:
        "https://discountlots.com/property-map?states=Kentucky&counties=Clinton&usage=&acreage.min=0.07&acreage.max=40&price.min=5943&price.max=128999&monthly_payment.min=141&monthly_payment.max=1875",
    },
  };

  const headerProps = headerConfigs[location.pathname] || headerConfigs["/"];

  return (
    <>
      <Header {...headerProps} />
      <div className="dl-layout__content">
        <Outlet />
      </div>
      {showFooter && <Footer />}
    </>
  );
}

export default Layout;
