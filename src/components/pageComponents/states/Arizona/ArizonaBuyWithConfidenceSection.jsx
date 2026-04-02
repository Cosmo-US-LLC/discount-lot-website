import React from "react";
import imgMaskGroup from "@/assets/images/home/icon_park_twotone_check_one.webp";

function ConfidenceCard({ title }) {
  return (
    <div className="bg-white border border-white/10 flex flex-col items-center justify-center px-[21px] py-[21px] rounded-[6px] w-full md:w-[424px]">
      <div className="flex items-start gap-[8px] w-full justify-start">
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgMaskGroup}
          />
        </div>
        <div
          className="font-bold text-[#114273] text-[16px] whitespace-nowrap leading-[24px]"
          style={{ fontFamily: "Frank Ruhl Libre, serif" }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

function ArizonaBuyWithConfidenceSection() {
  return (
    <section className="bg-[#eee] md:py-18 py-12">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 flex flex-col items-center">
        <h2 className="text-[#114273] text-center">Buy with Confidence</h2>

        <div className="mt-[30px] w-full flex flex-col gap-[12px] items-stretch sm:flex-row sm:gap-[12px] sm:justify-between">
          <ConfidenceCard title="Legal Access Verified" />
          <ConfidenceCard title="No Credit Checks" />
          <ConfidenceCard title="Zoning Authenticated" />
        </div>
      </div>
    </section>
  );
}

export default ArizonaBuyWithConfidenceSection;
