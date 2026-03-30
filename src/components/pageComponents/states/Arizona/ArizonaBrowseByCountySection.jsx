import React from "react";
import { cn } from "@/lib/utils";

function CountyCard({
  countyName,
  description,
  tagsRow1,
  tagsRow2,
  lotsText,
  lotsSubText,
  statusBadge,
  actionType,
  href,
}) {
  const isSoldOut = actionType === "notify";

  return (
    <div className="relative h-[416px] w-[314px] shrink-0 rounded-[14px] border border-[#f3f4f6] bg-white shadow-[0px_4px_6px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.06)]">
      {statusBadge ? (
        <div
          className={cn(
            "absolute -right-px -top-px flex h-[28px] items-center justify-center rounded-tr-[14px] px-[12px]",
          )}
          style={{
            background: statusBadge.background,
          }}
        >
          <div
            className="flex flex-col font-['Open_Sans',sans-serif] font-semibold leading-0 text-[12px] whitespace-nowrap"
            style={{ color: statusBadge.color }}
          >
            {statusBadge.text}
          </div>
        </div>
      ) : null}

      <div className="flex h-full flex-col px-[19px] pt-[34px]">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-[12px] items-start leading-0 w-full">
            <div className="font-['Frank_Ruhl_Libre',serif] font-black text-[#1a1208] text-[36px] w-full">
              {countyName}
            </div>

            <div className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[normal] text-[rgba(26,18,8,0.5)]">
              {description}
            </div>
          </div>

          <div className="mt-[10px] flex flex-col gap-[10px] items-start">
            <div className="flex gap-[8px] items-start">
              {tagsRow1.map((t) => (
                <div
                  key={t}
                  className="bg-[rgba(247,109,47,0.1)] flex items-center justify-center px-[18px] py-[3px] rounded-[60px]"
                >
                  <div className="font-['Open_Sans',sans-serif] font-normal text-[#f76d2f] text-[14px] whitespace-nowrap">
                    {t}
                  </div>
                </div>
              ))}
            </div>

            {tagsRow2?.length ? (
              <div className="flex items-start">
                {tagsRow2.map((t) => (
                  <div
                    key={t}
                    className="bg-[rgba(247,109,47,0.1)] flex items-center justify-center px-[18px] py-[3px] rounded-[60px]"
                  >
                    <div className="font-['Open_Sans',sans-serif] font-normal text-[#f76d2f] text-[14px] whitespace-nowrap">
                      {t}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mt-[18px] h-px w-[274px] bg-[#dedede] opacity-50" />
        </div>

        <div className="flex flex-col">
          <div
            className={cn(
              "mt-0 flex items-center w-full",
              isSoldOut && "opacity-0",
            )}
          >
            <div className="flex flex-col gap-[10px] items-start leading-0 w-full">
              <div className="font-['Open_Sans',sans-serif] font-bold text-[#f76d2f] text-[16px] uppercase whitespace-nowrap">
                {lotsText}
              </div>
              <div className="font-['Open_Sans',sans-serif] font-normal text-[10px] text-[rgba(26,18,8,0.5)] w-[164px]">
                {lotsSubText}
              </div>
            </div>
          </div>

          <div className="mt-[16px] w-full flex items-start">
            {isSoldOut ? (
              <div className="h-[35px] w-[274px] rounded-[4px] bg-[#dedede] flex items-center justify-center">
                <div className="flex flex-col font-['Open_Sans',sans-serif] font-bold text-[#252525] text-[12px] whitespace-nowrap">
                  Notify Me!
                </div>
              </div>
            ) : href ? (
              <a
                href={href}
                className="h-[35px] w-[274px] rounded-[4px] bg-[#f76d2f] flex items-center justify-center"
                aria-label={`Browse affordable properties in ${countyName} County`}
              >
                <div className="flex flex-col font-['Open_Sans',sans-serif] font-bold text-white text-[12px] whitespace-nowrap leading-0">
                  View Affordable Properties
                </div>
              </a>
            ) : (
              <button
                type="button"
                className="h-[35px] w-[274px] rounded-[4px] bg-[#f76d2f] flex items-center justify-center"
                aria-disabled="true"
              >
                <div className="flex flex-col font-['Open_Sans',sans-serif] font-bold text-white text-[12px] whitespace-nowrap leading-0">
                  View Affordable Properties
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArizonaBrowseByCountySection() {
  const cards = [
    {
      countyName: "Mohave",
      description:
        "Just 90 minutes from Las Vegas · Ideal for off-grid living, rural homesites, and recreational camping, these desert parcels are perfect for ATV riding, hiking, or weekend escapes near Kingman, Lake Havasu City, and Bullhead City. Affordable lots in high-demand areas won’t last long.",
      tagsRow1: ["Off-Grid", "RV Friendly"],
      tagsRow2: ["Investment"],
      lotsText: "6 lots available",
      lotsSubText: "From $200/mo - No Credit Check",
      actionType: "view",
      href: undefined,
      statusBadge: {
        text: "Hot Properties",
        background: "#f76d2f",
        color: "#ffffff",
        county: "Mohave",
      },
    },
    {
      countyName: "Coconino",
      description:
        "Gateway to the Grand canyon. Available lots are perfect for vacation homes, off-grid living, or long-term investment, offering recreational opportunities like hiking, camping, and ATV trails",
      tagsRow1: ["Residential", "Agricultural"],
      tagsRow2: ["Investment"],
      lotsText: "24 lots available",
      lotsSubText: "From $140/mo - No Credit Check",
      actionType: "view",
      href: undefined,
      statusBadge: {
        text: "Limited Availability",
        background: "#f76d2f",
        color: "#ffffff",
        county: "Coconino",
      },
    },
    {
      countyName: "Yavapai",
      description:
        "Scenic parcels near Prescott are ideal for residential homesites, agricultural use, or recreational escapes, with plenty of space for off-grid living, ATV riding, and weekend getaways these desirable lots are moving fast.",
      tagsRow1: ["Recreational", "Agricultural"],
      tagsRow2: ["Off-Grid"],
      lotsText: "",
      lotsSubText: "",
      actionType: "notify",
      statusBadge: {
        text: "Sold Out",
        background: "#dedede",
        color: "#252525",
      },
    },
    {
      countyName: "Pima",
      description:
        "Close to Tucson and major highways, these semi-rural lots are perfect for investment, residential living, or recreational camping, offering affordable land for farming, desert retreats, or off-grid projects don’t miss your chance to secure one.",
      tagsRow1: ["Residential", "Agricultural"],
      tagsRow2: ["Investment"],
      lotsText: "",
      lotsSubText: "",
      actionType: "notify",
      statusBadge: {
        text: "Sold Out",
        background: "#dedede",
        color: "#252525",
      },
    },
  ];

  return (
    <section id="hot-properties" className="bg-[#114273] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1320px] flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 text-white w-full">
          <h6 className="uppercase text-center">Find the best land</h6>
          <h2 className="font-['Frank_Ruhl_Libre',serif] font-black text-white text-[50px] leading-[1.1] tracking-[0px]">
            Browse by County
          </h2>
          <div
            className="h-1 w-20 rounded-full bg-[#f76d2f]"
            aria-hidden="true"
          />
          <div className=" font-normal text-[17px] leading-[28.9px] text-center">
            Properties moving fast in these counties
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center w-full">
          <div className="flex flex-wrap items-start justify-center gap-4 w-full">
            {cards.map((c) => (
              <CountyCard key={c.countyName} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArizonaBrowseByCountySection;
