import React from "react";

const imgGradient =
  "https://www.figma.com/api/mcp/asset/d7eb4419-bbdb-47b6-b4cf-8688cc2105b6";
const imgImage26 =
  "https://www.figma.com/api/mcp/asset/0820ec61-d7a8-4f40-878f-2e5175190bab";

const imgTaxIcon =
  "https://www.figma.com/api/mcp/asset/a77c0ed5-987e-466b-b09d-3ec7a3b5f511";
const imgNaturalIcon =
  "https://www.figma.com/api/mcp/asset/54281290-d128-43f2-8e4d-636083d6b4b3";
const imgFlexibleZoningIcon =
  "https://www.figma.com/api/mcp/asset/bb95f923-8210-4de1-8680-b1935c1c0410";

function ArizonaWhyBuyLandSection() {
  const scrollToHotProperties = () => {
    const el = document.getElementById("hot-properties");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.hash = "hot-properties";
  };

  return (
    <section className="bg-white px-4 py-[80px] md:px-[68px]">
      <div className="mx-auto w-full max-w-[1182px] flex items-start justify-between gap-[40px] flex-col lg:flex-row">
        <div className="flex flex-col gap-[24px] items-start w-full lg:w-[622px]">
          <div className="flex flex-col gap-[30px] items-start w-full">
            <div className="flex flex-col gap-[24px] items-start w-full">
              <div className="flex flex-col font-bold h-[16px] justify-center text-[#114273] text-[12px] tracking-[3px] uppercase w-full">
                Investors’ First Choice
              </div>
              <div className="flex flex-col font-['Frank_Ruhl_Libre',serif] font-black text-[#114273] text-[50px] w-full leading-[1.1]">
                <p className="leading-[1.1]">Why Buy Land in</p>
                <p className="leading-[1.1] mb-0">Arizona?</p>
              </div>
            </div>

            <div className="flex flex-col font-normal text-[#4a5565] text-[16px] w-full leading-[1.4]">
              Arizona is one of the fastest-growing states in the country, and
              land prices are still very affordable compared to similar
              properties in neighboring states.
            </div>
          </div>

          <div className="flex flex-col gap-[26px] items-start w-full">
            <div className="flex gap-[16px] items-start w-full">
              <div className="bg-[#fef4f1] rounded-[8px] h-[44px] w-[44px] flex items-center justify-center shrink-0">
                <img
                  alt=""
                  src={imgTaxIcon}
                  className="h-[28px] w-[28px] object-contain"
                />
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <div className="font-bold h-[21px] text-[#114273] text-[16px] leading-[normal]">
                  Low Property Taxes
                </div>
                <div className="font-semibold text-[14px] leading-[1.4] text-[#4a5565] opacity-60">
                  Many parcels cost very little annually, keeping ownership
                  affordable and low-risk.
                </div>
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full">
              <div className="bg-[#fef4f1] rounded-[8px] h-[44px] w-[44px] flex items-center justify-center shrink-0">
                <img
                  alt=""
                  src={imgNaturalIcon}
                  className="h-[28px] w-[28px] object-contain"
                />
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <div className="font-bold h-[21px] text-[#114273] text-[16px] leading-[normal]">
                  Iconic Natural Surroundings
                </div>
                <div className="font-semibold text-[14px] leading-[1.4] text-[#4a5565] opacity-60">
                  Grand Canyon, Sedona, Saguaro National Park, Petrified
                  Forest your backyard is world-famous.
                </div>
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full">
              <div className="bg-[#fef4f1] rounded-[8px] h-[44px] w-[44px] flex items-center justify-center shrink-0">
                <img
                  alt=""
                  src={imgFlexibleZoningIcon}
                  className="h-[28px] w-[28px] object-contain"
                />
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <div className="font-bold h-[21px] text-[#114273] text-[16px] leading-[normal]">
                  Flexible Zoning
                </div>
                <div className="font-semibold text-[14px] leading-[1.4] text-[#4a5565] opacity-60">
                  Most Arizona counties permit RVs, construction of homes,
                  solar, and agriculture use with minimal permitting, more
                  freedom than most coastal states allow. Arizona zoning
                  allows multiple possibilities.
                </div>
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full">
              <div className="bg-[#fef4f1] rounded-[8px] h-[44px] w-[44px] flex items-center justify-center shrink-0">
                <span className="text-[#f76d2f] text-[20px] leading-none">
                  ☀️
                </span>
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <div className="font-bold h-[21px] text-[#114273] text-[16px] leading-[normal]">
                  300+ Days of Sunshine Annually
                </div>
                <div className="font-semibold text-[14px] leading-[1.4] text-[#4a5565] opacity-60">
                  Perfect for solar, outdoor living, and year-round access to
                  your land without seasonal closures.
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToHotProperties}
            className="bg-[#f76d2f] flex items-center justify-center px-[34px] py-[16px] relative rounded-[4px] shrink-0"
          >
            <div className="flex flex-col font-bold justify-center leading-0 text-[16px] text-center text-white whitespace-nowrap">
              View Hot Properties
            </div>
          </button>
        </div>

        <div className="w-full lg:w-[568px] h-[480px] relative rounded-[8px] overflow-hidden shadow-[0px_8px_32px_0px_rgba(0,0,0,0.25)]">
          <img
            alt=""
            src={imgGradient}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[8px]"
          />
          <img
            alt=""
            src={imgImage26}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[660px] max-w-none h-auto pointer-events-none"
          />

          <div className="absolute right-[30px] bottom-[28px] bg-white px-[28px] py-[22px] rounded-[8px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.3)] w-[190px]">
            <div className="flex flex-col gap-[7px] items-start text-[#f76d2f]">
              <div className="flex flex-col font-['Bebas_Neue',sans-serif] not-italic justify-center text-[48px] leading-[48px] w-full">
                44%
              </div>
              <div className="flex flex-col font-normal justify-center text-[13px] leading-[normal] w-full text-[#f76d2f]">
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

