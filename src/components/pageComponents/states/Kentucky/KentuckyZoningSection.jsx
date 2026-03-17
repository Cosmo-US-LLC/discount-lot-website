import React from "react";

const zoningRules = [
  "No county zoning confirmed by Clinton County Judge Executive Office",
  "No minimum lot size to build on",
  "No setback requirements — build right where you want",
  "Single-family home or power hookup — no building permit required",
  "Other structures (commercial, multi-family) require a building permit through the county Building Inspector",
];

const useCases = [
  "Build a home — single-family residence, cabin, or cottage",
  "Off-grid living — RV, tiny home, or self-sufficient setup",
  "Farming & homesteading — grow your own food, raise animals",
  "Storage & workspace — barns, workshops, outbuildings",
  "Land banking — hold as a long-term investment in a growing area",
];

function KentuckyZoningSection() {
  return (
    <section className="bg-[#eaf4fb] px-4 py-16 md:px-[68px] md:py-[60px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="max-w-[800px] space-y-4">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#114273]">
            What You Can Do Here
          </p>
          <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.8px] text-[#114273] md:text-[48px] md:tracking-[-1.2px]">
            Your Land, Your Rules
          </h2>
          <p className="text-[16px] leading-[26px] text-black">
            Clinton County has <strong>no zoning restrictions</strong> giving you rare
            freedom to use your land however you choose.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[8px] bg-white px-6 py-7 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[25px] w-1 rounded-[1px] bg-[#f76d2f]" />
              <h3 className="text-[24px] font-bold text-[#114273]">
                Zoning &amp; Building Rules
              </h3>
            </div>
            <ul className="space-y-3 text-[16px] leading-[1.4] text-[#4a5565]">
              {zoningRules.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[3px] text-[#16a34a]" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[8px] bg-white px-6 py-7 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[25px] w-1 rounded-[1px] bg-[#f76d2f]" />
              <h3 className="text-[24px] font-bold text-[#114273]">
                What You Can Build or Do
              </h3>
            </div>
            <ul className="space-y-3 text-[16px] leading-[1.4] text-[#4a5565]">
              {useCases.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[3px] text-[#16a34a]" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#ky-properties"
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#f76d2f] px-9 py-4 text-[16px] font-bold text-white"
          >
            View Available Lots &amp; Pricing
            <span className="text-lg" aria-hidden="true">
              ↑
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default KentuckyZoningSection;

