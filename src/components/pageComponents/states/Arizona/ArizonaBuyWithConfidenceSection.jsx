import React from "react";

const imgMaskGroup =
  "https://www.figma.com/api/mcp/asset/4a95d326-a1d5-45b8-a60a-fb97807bdae5";

function ConfidenceCard({ title }) {
  return (
    <div className="bg-white border border-white/10 flex flex-col items-center justify-center px-[21px] py-[21px] rounded-[6px] w-full md:w-[424px]">
      <div className="flex items-start gap-[8px] w-full justify-start">
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <img alt="" className="block max-w-none size-full" src={imgMaskGroup} />
        </div>
        <div className="font-bold font-['Frank_Ruhl_Libre',serif] text-[#114273] text-[16px] whitespace-nowrap leading-[24px]">
          {title}
        </div>
      </div>
    </div>
  );
}

function ArizonaBuyWithConfidenceSection() {
  return (
    <section className="bg-[#eee] px-4 py-[38px] md:px-[68px]">
      <div className="mx-auto max-w-[1320px] flex flex-col items-center">
        <h2 className="font-['Frank_Ruhl_Libre',serif] font-black text-[#114273] text-[36px] leading-[57.2px] text-center">
          Buy with Confidence
        </h2>

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

