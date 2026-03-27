import React from "react";
import { ArrowRightIcon } from "lucide-react";
import {
  StarYellowIcon,
  HeartGrayIcon,
  LocationBlueIcon,
  AcresIcon,
  WorldIcon,
  CameraIcon,
} from "../../common/IconsSvgs";
import card1Image from "@/assets/images/home/card1Image.webp";
import card2Image from "@/assets/images/home/card2Image.webp";
import card3Image from "@/assets/images/home/card3Image.webp";
import { openSavePropertyAlert } from "@/components/common/openSavePropertyAlert";

const cards = [
  {
    id: 1,
    badgeText: "New listing",
    badgeColor: "#16a34a",
    image: card1Image,
    title:
      "Claim Your 0.16-Acre Residential Haven in Graceville, Jackson, FL Close to Parks & Small-Town Charm!",
    cityLine: "Graceville, Jackson",
    acres: "0.16 Acres",
    county: "Jackson County, FL",
    photos: "Zoning",
    monthly: "$227/mo",
    cash: "$10,895",
    propertyUrl: "https://discountlots.com/property/036N13046000100030",
  },
  {
    id: 2,
    badgeText: "High demand",
    badgeColor: "#489cd8",
    image: card2Image,
    title:
      "Own 0.19 Acres in Onalaska, Polk, TX Level Terrain, Residential Zoning, and HOA Access to Lake Livingston!",
    cityLine: "Onalaska, Polk",
    acres: "0.19 Acres",
    county: "Polk County, Texas.",
    photos: "Zoning",
    monthly: "$169/mo",
    cash: "$8,499",
    propertyUrl: "https://discountlots.com/property/t1200029100",
  },
  {
    id: 3,
    badgeText: "High demand",
    badgeColor: "#489cd8",
    image: card3Image,
    title:
      "Own 0.34 Acres in Interlachen, Putnam County, FL Level Residential Land with Power, Water, and No HOA Fees!",
    cityLine: "Interlachen, Putnam",
    acres: "0.34 Acres",
    county: "Putnam County, FL",
    photos: "Zoning",
    monthly: "$176/mo",
    cash: "$8,364",
    propertyUrl: "https://discountlots.com/property/27-09-24-4078-0080-0040",
  },
];

function HomeFeaturedProperties() {
  const handleBrowseAvailablePropertiesClick = () => {
    const heroSection = document.getElementById("home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.hash = "home";
  };

  return (
    <section id="properties" className="bg-[#f2f5f9] py-18">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-[652px] text-center space-y-4">
          <h6 className="text-[#f76d2f]">Active listings</h6>
          <h2 className="text-[#114273]">Featured Properties</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#f76d2f]" />
          <p className="body-description text-[#4a5565]">
            Build, farm, park, or live on it. Every listing includes verified
            zoning, permitted use, and buildability, no guesswork.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="flex h-full flex-col overflow-hidden rounded-[14px] border border-[#e6edf4] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.06)]"
            >
              <div className="relative h-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
                {/* <button
                  type="button"
                  className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white/85 p-2 shadow-md backdrop-blur"
                  onClick={() => openSavePropertyAlert(card)}
                  aria-label={`Save ${card.title}`}
                >
                  <HeartGrayIcon className="h-4 w-4" />
                </button> */}
                <div
                  className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.09em] text-white shadow-lg"
                  style={{ backgroundColor: card.badgeColor }}
                >
                  <StarYellowIcon className="h-4 w-4" />
                  <span>{card.badgeText}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                <h3 className="mb-3 line-clamp-3 text-[18px] font-semibold leading-[1.35] text-[#114273]">
                  {card.title}
                </h3>

                <div className="border-b border-[#edf2f7] pb-3 text-[13px] text-[#5a6a82]">
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <LocationBlueIcon className="h-4 w-4" />
                      <span>{card.cityLine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AcresIcon className="h-4 w-4" />
                      <span>{card.acres}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <WorldIcon className="h-4 w-4" />
                      <span>{card.county}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CameraIcon className="h-4 w-4" />
                      <span>{card.photos}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between rounded-[10px] bg-[#f0f4f8] px-4 py-3 text-[13px]">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[#0a3056]">
                      Monthly payment
                    </p>
                    <p className="text-[24px] font-semibold leading-none tracking-tight text-[#f76d2f]">
                      {card.monthly}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[#0a3056]">
                      Pay in full
                    </p>
                    <p className="text-[16px] font-semibold text-[#114273]">
                      {card.cash}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-3 inline-flex items-center justify-center gap-2 btn-primary"
                  onClick={() => {
                    window.location.href = card.propertyUrl;
                  }}
                >
                  Explore details
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-3 btn-secondary"
            onClick={handleBrowseAvailablePropertiesClick}
          >
            Browse 200+ Available Properties
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeFeaturedProperties;
