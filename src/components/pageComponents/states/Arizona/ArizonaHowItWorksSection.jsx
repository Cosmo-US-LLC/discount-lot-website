import React from "react";

function StepCard({ number, title, description }) {
  return (
    <div className="flex bg-white gap-4 items-start rounded-[8px] px-3 py-3">
      <div className="">
        <div className="text-[#f76d2f] rounded-[24px] h-[48px] w-[48px] bg-[#fef4f1]  flex items-center justify-center font-black font-['Frank_Ruhl_Libre',serif] text-[24px] leading-none">
          {number}
        </div>
      </div>
      <div className="flex flex-col gap-1 ">
        <h3 className="text-[#1a1208]">{title}</h3>
        <div className="font-normal text-[14px] leading-[1.4] text-[rgba(26,18,8,0.6)]">
          {description}
        </div>
      </div>
    </div>
  );
}

function ArizonaHowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#eaf4fb] py-12 md:py-18">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col items-start">
        <div className="flex flex-col gap-8 items-start">
          <div className="flex flex-col gap-2 items-start w-full">
            <h2 className="text-[#114273]">How it Works</h2>
            <div className="text-[18px] leading-[28px] text-[#4a5565]">
              No banks, no realtors, no paperwork stacks.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <StepCard
              number="1"
              title="Browse & Pick Your Lot"
              description="Explore available properties and find one that fits your needs and budget."
            />
            <StepCard
              number="2"
              title="Choose Your Payment Plan"
              description="Pay in full or select a flexible monthly plan designed to fit your budget. No credit check required."
            />
            <StepCard
              number="3"
              title="Secure Your Lot with as Little as $500"
              description="Owner Financing: If you choose the flexible monthly plan, Secure your lot with $197 down + $300 doc fee. Monthly payments start at $200 from Month 2."
            />
            <StepCard
              number="4"
              title="Deed Transfer & Ownership"
              description="Sign your purchase agreement, which is sent to your email. After your final payment, the deed is officially transferred to your name, no balloon payments, no hidden fees."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArizonaHowItWorksSection;
