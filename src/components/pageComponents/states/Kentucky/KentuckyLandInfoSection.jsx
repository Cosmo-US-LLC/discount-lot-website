import React from "react";
import {
  WhyInsightsIcon,
  WhyTotalLotsIcon,
  WhyRoadIcon,
  WhyPaymentIcon,
  WhyWaterIcon,
  WhyNoZoningIcon,
} from "../../../common/IconsSvgs";

const infoCards = [
  {
    label: "Location",
    title: "Clinton County, KY",
    description: ["Near Albany, KY"],
    iconSrc: WhyInsightsIcon,
  },
  {
    label: "Total Lots",
    title: "43 Lots",
    description: ["Numbered & mapped"],
    iconSrc: WhyTotalLotsIcon,
  },
  {
    label: "Road Access",
    title: "Paved & Dirt",
    description: ["Willis Creek Rd, Desdia-Willis Creek Rd, Cottage Rd"],
    iconSrc: WhyRoadIcon,
  },
  {
    label: "Zoning",
    title: "No Zoning",
    description: ["Build what you want"],
    iconSrc: WhyNoZoningIcon,
  },
  {
    label: "Utilities",
    title: "Water & Power",
    description: ["Available at street level"],
    iconSrc: WhyWaterIcon,
  },
  {
    label: "Down Payment",
    title: "As Low as $500",
    description: ["No credit check required"],
    iconSrc: WhyPaymentIcon,
  },
];

function KentuckyLandInfoSection() {
  return (
    <section className="bg-[#eaf4fb] py-18">
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col items-center gap-10">
        <div className="w-full max-w-[676px] text-center flex flex-col items-center gap-4">
          <h6 className="text-[#f76d2f]">Quick insights</h6>
          <h2 className="text-[#114273]">
            Everything You Need to Know About Kentucky Land
          </h2>
        </div>

        <div className="w-full max-w-[1280px] overflow-hidden rounded-[6px] bg-[rgba(84,84,84,0.15)] shadow-[0px_4px_30px_rgba(10,34,64,0.1)]">
          <div className="relative h-[240px] w-full md:h-[408px]">
            {/* <button
              type="button"
              className="absolute inset-0 grid place-items-center"
              aria-label="Play video"
            >
              <img alt="" src={ASSETS.play} className="size-[88px]" />
            </button> */}
          </div>
        </div>

        <div className="flex w-full flex-wrap items-stretch justify-center gap-3 md:flex-nowrap md:gap-3">
          {infoCards.map((card) => (
            // eslint-disable-next-line react/no-unstable-nested-components
            <article
              key={card.label}
              className="flex w-full flex-col items-center rounded-[14px] border border-[#f3f4f6] bg-white px-4 py-5 text-center shadow-[0px_4px_6px_rgba(0,0,0,0.06),0px_2px_4px_rgba(0,0,0,0.06)] md:max-w-[207.5px]"
            >
              <div className="flex w-full flex-col items-center gap-5">
                <div className="relative shrink-0 overflow-hidden">
                  {(() => {
                    const Icon = card.iconSrc;
                    return <Icon />;
                  })()}
                </div>
                <div className="w-full flex flex-col items-center gap-2">
                  <p className="text-[12px] font-[700] uppercase tracking-[3px] text-[#114273]">
                    {card.label}
                  </p>
                  <p className=" text-[16px] font-bold leading-[22px] text-[#1a1208]">
                    {card.title}
                  </p>
                  <div className=" text-[16px] leading-[22px] text-[#4a5565]">
                    {card.description.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KentuckyLandInfoSection;
