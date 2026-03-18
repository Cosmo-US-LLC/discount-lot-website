import React from "react";
// import HeaderLogo from "@/assets/images/home/discount_lots_logo.svg";
import { HeaderLogo } from "@/components/common/IconsSvgs";

function KentuckyIncBanner() {
  return (
    <section className="bg-[#013366] px-4 py-8 md:px-[64px]">
      <div className="mx-auto flex h-[260px] w-full max-w-[1000px] items-center gap-8 rounded-[12px] bg-[#003366] px-6 py-6 md:px-10">
        <div className="flex w-full flex-col gap-6 md:flex-row md:items-center">
          <div className="flex items-center justify-center md:w-[228px] dl-nav__logo">
            <HeaderLogo className="w-full h-full" />
          </div>

          <div className="h-full w-[2px] bg-white" aria-hidden="true" />

          <div
            className="h-[200px] w-[2px] bg-[#FFFFFF33] mr-4"
            aria-hidden="true"
          />

          <div className="relative flex-1 text-white">
            <div className="space-y-1">
              <p className="text-[20px] font-bold uppercase tracking-tight md:text-[24px]">
                Ranked <span className="text-[#f76d2f]">#778</span> in the
                United States — 2025
              </p>
              <p className="text-[14px] font-semibold uppercase tracking-wide text-white/80">
                America&apos;s Fastest‑Growing Private Companies
              </p>
            </div>

            {/* Horizontal divider to match Figma */}
            <div className="mt-3 h-px w-full border-t border-white/20" />

            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="min-w-[146px]">
                <p className="text-[48px] font-extrabold leading-none text-[#f76d2f]">
                  540%
                </p>
                <p className="text-[12px] font-bold uppercase tracking-[0.14em]">
                  Revenue Growth
                </p>
                <p className="text-[12px] text-white/60">(2022 – 2024)</p>
              </div>

              <div className="mt-2 inline-flex h-9 items-center justify-center rounded-full bg-white/10 px-6 text-[14px] text-white md:px-8">
                Top <span className="mx-1 font-bold text-[#f76d2f]">16%</span>{" "}
                of all U.S. private companies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KentuckyIncBanner;
