import React from "react";

const imgF7Rectangle3OffgridFill =
  "https://www.figma.com/api/mcp/asset/cb2b793f-7300-483f-bda1-397078bd43ea";
const imgStreamlineCampingTentSolid =
  "https://www.figma.com/api/mcp/asset/8e4af2ba-28d5-486b-80bf-6aab1c4bb94f";
const imgSolarHomeBold =
  "https://www.figma.com/api/mcp/asset/459be425-8809-450c-b13e-7c1fff819ea0";
const imgImage20 =
  "https://www.figma.com/api/mcp/asset/aa153852-20b1-4396-b054-6d18dc0f8e53";
const imgGameIconsProfit =
  "https://www.figma.com/api/mcp/asset/04091d73-47a2-42e2-a299-ea9932ec40cc";
const imgImage21 =
  "https://www.figma.com/api/mcp/asset/d3a9e3fb-82e3-400b-98cc-aa95df2ee92f";

function LandCard({ iconSrc, title, description }) {
  return (
    <div className="bg-white rounded-[14px] border border-[#f3f4f6] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.06)] w-full h-[178px] flex flex-col items-center justify-start px-[25px] pt-[25px] pb-px">
      <div className="relative shrink-0 size-[50px] flex items-center justify-center">
        <img
          alt=""
          src={iconSrc}
          className="block max-w-none size-full object-contain"
        />
      </div>
      <div className="mt-[16px] flex flex-col gap-[4px] items-center text-center">
        <div className="font-bold font-['Open Sans',sans-serif] text-[#1a1208] text-[16px] leading-none">
          {title}
        </div>
        <div className="font-normal font-['Open Sans',sans-serif] text-[rgba(26,18,8,0.5)] text-[14px] leading-[1.4]">
          {description}
        </div>
      </div>
    </div>
  );
}

function ArizonaLandForEveryPlanSection() {
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
      <div className="mx-auto w-full max-w-[1320px] flex flex-col items-center">
        <div className="flex flex-col gap-[32px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Frank_Ruhl_Libre',serif] font-black justify-center leading-0 text-[#1a1208] text-[50px] text-center w-full">
            Land for Every Plan
          </div>

          <div className="flex flex-col font-['Open Sans',sans-serif] font-normal justify-center leading-0 text-[16px] text-[rgba(26,18,8,0.65)] text-center w-full max-w-[708px]">
            Arizona’s rural zoning offers more flexibility than many states.
            Whether you’re planning to build a home, invest for the future, or
            own a quiet retreat away from the city, there’s an affordable lot
            that fits your plans.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full items-start">
            <LandCard
              iconSrc={imgF7Rectangle3OffgridFill}
              title="Off-Grid Living"
              description="Solar & water haul allowed"
            />
            <LandCard
              iconSrc={imgStreamlineCampingTentSolid}
              title="RV & Camping"
              description="Parking and camping permitted"
            />
            <LandCard
              iconSrc={imgSolarHomeBold}
              title="Build a Home"
              description="Place a home on any zoned lot"
            />
            <LandCard
              iconSrc={imgImage20}
              title="Homesteading"
              description="AG-zoned lots ideal for farming & living"
            />
            <LandCard
              iconSrc={imgGameIconsProfit}
              title="Smart Investment"
              description="High Value Potential for Growth, Rental, or Resale"
            />
            <LandCard
              iconSrc={imgImage21}
              title="Hunting & Recreation"
              description="Create outdoor adventures"
            />
          </div>

          <button
            type="button"
            onClick={scrollToHotProperties}
            className="bg-[#f76d2f] flex items-center justify-center px-[34px] py-[16px] rounded-[4px]"
          >
            <div className="flex flex-col font-bold justify-center leading-0 text-[16px] text-center text-white whitespace-nowrap">
              View Hot Properties
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ArizonaLandForEveryPlanSection;

