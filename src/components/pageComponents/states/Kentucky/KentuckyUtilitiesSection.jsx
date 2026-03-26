import React from "react";
import {
  KentuckyWaterIcon,
  KentuckyElectricIcon,
  KentuckyRoadIcon,
  KentuckyZoningIcon,
} from "@/components/common/IconsSvgs";

const utilityCards = [
  {
    title: "Municipal Water",
    iconSrc: KentuckyWaterIcon,
    body: (
      <>
        <p>
          Albany City Water Department servicesWillis Creek Rd up to the hill.
          Connection available at street level for all lots.
        </p>
        <p>
          <span className="font-bold">Note:</span> No public sewer septic system
          installation required. Standard for rural land in this area. Your Land
          Specialist can walk you through typical costs.
        </p>
      </>
    ),
  },
  {
    title: "Electric Power",
    iconSrc: KentuckyElectricIcon,
    body: (
      <p className="whitespace-pre-wrap">
        South Kentucky RECC provides electricity throughout Albany, KY and
        surrounding areas. Power available at paved road frontage for all lots
        in the subdivision.
      </p>
    ),
  },
  {
    title: "Road Access",
    iconSrc: KentuckyRoadIcon,
    body: (
      <>
        <p>
          Front lots &amp; main entrance: Paved access via Willis Creek Road
          easy year‑round entry.
        </p>
        <p>
          <span className="font-bold">Interior lots:</span> Accessible via a
          private dirt road through the subdivision. For specifics on which lots
          have paved vs. dirt access, ask your Land Specialist for details.
        </p>
      </>
    ),
  },
  {
    title: "Verified Zoning",
    iconSrc: KentuckyZoningIcon,
    body: (
      <>
        <p>
          No zoning restrictions confirmed directly with Clinton County. No
          minimum lot size, no setbacks, and no permit required for a
          single-family home or power hookup.
        </p>
        <p>
          Full county contact details are available in the FAQ section below.
        </p>
      </>
    ),
  },
];

function KentuckyUtilitiesSection() {
  return (
    <section className="bg-white md:py-18 py-12">
      <div className="mx-auto flex w-full max-w-[1322px] px-4 md:px-8 flex-col items-center md:gap-10 gap-8 text-center">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-3">
            <h6 className="w-full text-[14px] font-bold uppercase tracking-[3px] text-[#f76d2f]">
              Infrastructure
            </h6>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-[34px] font-bold leading-none tracking-[-1.2px] text-[#114273] md:text-[48px] md:leading-[48px]">
                Utilities Within Reach Line
              </h2>
              <div
                className="h-1 w-20 rounded-full bg-[#f76d2f]"
                aria-hidden="true"
              />
            </div>
          </div>
          <p className="w-full max-w-[456px] text-[16px] font-normal leading-[26px] text-black">
            Essential utilities are nearby and available at street level. Check
            each property’s details for available utilities.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-start md:justify-between md:gap-4">
          {utilityCards.map((card) => (
            <article
              key={card.title}
              className={[
                "flex w-full md:max-w-[314px] md:h-[390px] h-full flex-col items-center rounded-[14px] border border-[#f3f4f6] bg-white md:p-4 p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.06),0px_2px_4px_rgba(0,0,0,0.06)] transition-[background-color,box-shadow] duration-200",
                "hover:bg-[rgba(17,66,115,0.06)] hover:shadow-[0px_6px_12px_rgba(0,0,0,0.08),0px_2px_4px_rgba(0,0,0,0.06)]",
                // Use ring instead of border-2 to avoid layout shift on hover
                "max-md:ring-2 max-md:ring-inset max-md:ring-[#114273]",
                "hover:ring-2 hover:ring-inset hover:ring-[#114273]",
              ].join(" ")}
            >
              <div className="flex w-full flex-col items-center gap-5">
                <div className="relative size-[50px] shrink-0">
                  <card.iconSrc />
                </div>
                <div className="flex w-full flex-col items-center gap-[6px] text-center">
                  <h3
                    className=" text-[#1a1208] !text-[16px] font-[700] leading-[22px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {card.title}
                  </h3>
                  <div className="space-y-2 description text-[rgba(26,18,8,0.6)] ">
                    {card.body}
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

export default KentuckyUtilitiesSection;
