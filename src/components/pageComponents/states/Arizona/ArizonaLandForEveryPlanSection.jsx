import React from "react";
import imgLandIcon1 from "@/assets/images/arizona/land_icon_1.svg";
import imgLandIcon2 from "@/assets/images/arizona/land_icon_2.svg";
import imgLandIcon3 from "@/assets/images/arizona/land_icon_3.svg";
import imgLandIcon4 from "@/assets/images/arizona/land_icon_4.svg";
import imgLandIcon5 from "@/assets/images/arizona/land_icon_5.svg";
import imgLandIcon6 from "@/assets/images/arizona/land_icon_6.svg";

function LandCard({ iconSrc, title, description }) {
  return (
    <div className="bg-white rounded-[14px] border border-[#f3f4f6] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.06)] w-full h-[168px] flex flex-col items-center justify-start px-[25px] pt-[25px] pb-px">
      <div className="relative shrink-0 size-[40px] flex items-center justify-center">
        <img
          alt=""
          src={iconSrc}
          className="block max-w-none size-full object-contain"
        />
      </div>
      <div className="mt-[16px] flex flex-col gap-1 items-center text-center">
        <div className="font-bold text-[#1a1208] text-[16px] leading-none">
          {title}
        </div>
        <div className="font-normal text-[rgba(26,18,8,0.5)] text-[14px] leading-[1.4]">
          {description}
        </div>
      </div>
    </div>
  );
}

function ArizonaLandForEveryPlanSection() {
  return (
    <section className="bg-white md:py-18 py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col items-center">
        <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="flex flex-col justify-center text-[#1a1208] text-center w-full">
              Land for Every Plan
            </h2>

            <div className="flex flex-col description justify-center text-[#1A1208A6] text-center w-full max-w-[708px]">
              Arizona’s rural zoning offers more flexibility than many states.
              Whether you’re planning to build a home, invest for the future, or
              own a quiet retreat away from the city, there’s an affordable lot
              that fits your plans.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full items-start">
            <LandCard
              iconSrc={imgLandIcon1}
              title="Off-Grid Living"
              description="Solar & water haul allowed"
            />
            <LandCard
              iconSrc={imgLandIcon2}
              title="RV & Camping"
              description="Parking and camping permitted"
            />
            <LandCard
              iconSrc={imgLandIcon3}
              title="Build a Home"
              description="Place a home on any zoned lot"
            />
            <LandCard
              iconSrc={imgLandIcon4}
              title="Homesteading"
              description="AG-zoned lots ideal for farming & living"
            />
            <LandCard
              iconSrc={imgLandIcon5}
              title="Smart Investment"
              description="High Value Potential for Growth, Rental, or Resale"
            />
            <LandCard
              iconSrc={imgLandIcon6}
              title="Hunting & Recreation"
              description="Create outdoor adventures"
            />
          </div>

          <button type="button" className="bg-[#f76d2f] btn-secondary">
            View Hot Properties
          </button>
        </div>
      </div>
    </section>
  );
}

export default ArizonaLandForEveryPlanSection;
