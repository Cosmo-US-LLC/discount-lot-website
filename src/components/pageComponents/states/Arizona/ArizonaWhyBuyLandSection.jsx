import React from "react";
import texesIcon from "@/assets/images/arizona/texes.svg";
import natureIcon from "@/assets/images/arizona/natural-surrounding.svg";
import flexibleZoningIcon from "@/assets/images/arizona/zoning.svg";
import sunshineIcon from "@/assets/images/arizona/sunshine.svg";

import imgImage26 from "@/assets/images/arizona/land-of-arizona.webp";

const WHY_BUY_ITEMS = [
  {
    key: "taxes",
    iconSrc: texesIcon,
    title: "Low Property Taxes",
    description:
      "Many parcels cost very little annually, keeping ownership affordable and low-risk.",
  },
  {
    key: "nature",
    iconSrc: natureIcon,
    title: "Iconic Natural Surroundings",
    description:
      "Grand Canyon, Sedona, Saguaro National Park, Petrified Forest your backyard is world-famous.",
  },
  {
    key: "zoning",
    iconSrc: flexibleZoningIcon,
    title: "Flexible Zoning",
    description:
      "Most Arizona counties permit RVs, construction of homes, solar, and agriculture use with minimal permitting, more freedom than most coastal states allow. Arizona zoning allows multiple possibilities.",
  },
  {
    key: "sunshine",
    iconSrc: sunshineIcon,
    title: "300+ Days of Sunshine Annually",
    description:
      "Perfect for solar, outdoor living, and year-round access to your land without seasonal closures.",
  },
];

function WhyBuyFeatureCard({ iconSrc, title, description }) {
  return (
    <div className="flex gap-[16px] items-start w-full">
      <div className="bg-[#fef4f1] rounded-[8px] h-[44px] w-[44px] flex items-center justify-center shrink-0">
        <img
          alt=""
          src={iconSrc}
          className="h-[28px] w-[28px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-[6px] w-full">
        <div className="font-bold text-[#114273] text-[16px] leading-[normal]">
          {title}
        </div>
        <div className="font-semibold text-[14px] leading-[20px] text-[#4a5565] opacity-60">
          {description}
        </div>
      </div>
    </div>
  );
}

function ArizonaWhyBuyLandSection() {
  return (
    <section className="bg-white md:py-18 scroll-py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex items-start justify-between gap-[40px] flex-col lg:flex-row">
        <div className="flex flex-col gap-[24px] items-start w-full md:w-[602px]">
          <div className="flex flex-col gap-4 items-start w-full">
            <div className="flex flex-col gap-3 items-start w-full">
              <h6 className=" text-[#114273] uppercase w-full">
                Investors’ First Choice
              </h6>
              <h1 className=" text-[#114273]">Why Buy Land in Arizona?</h1>
            </div>

            <div className="description text-[#4a5565]">
              Arizona is one of the fastest-growing states in the country, and
              land prices are still very affordable compared to similar
              properties in neighboring states.
            </div>
          </div>

          <div className="flex flex-col gap-[26px] items-start w-full">
            {WHY_BUY_ITEMS.map((item) => (
              <WhyBuyFeatureCard
                key={item.key}
                iconSrc={item.iconSrc}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <button type="button" className="bg-[#f76d2f] btn-secondary mt-4">
            View Hot Properties
          </button>
        </div>

        <div className="w-full md:w-[548px] h-[500px] relative rounded-[8px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.25)]">
          <img
            alt=""
            src={imgImage26}
            className="w-full h-full object-cover rounded-[8px]"
          />

          <div className="absolute -right-[30px] -bottom-[40px] bg-white px-6 py-4 rounded-[8px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.3)] w-[200px]">
            <div className="flex flex-col gap-[7px] items-start text-[#f76d2f]">
              <div className="flex flex-col font-['Bebas_Neue',sans-serif] not-italic justify-center text-[48px] leading-[48px] w-full">
                44%
              </div>
              <div className="flex flex-col font-normal justify-center text-[14px] leading-[normal] w-full text-[#f76d2f]">
                Up to 44% Growth in Prominent Counties
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArizonaWhyBuyLandSection;
