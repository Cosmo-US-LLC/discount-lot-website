import React from "react";
// import HeaderLogo from "@/assets/images/home/discount_lots_logo.svg";
import { HeaderLogo } from "@/components/common/IconsSvgs";

function KentuckyIncBanner() {
  return (
    <section className="bg-[#013366] px-4 py-8 sm:py-9 md:px-[64px]">
      <div className="mx-auto w-full max-w-[1000px] rounded-[12px] bg-[#003366] px-5 py-6 sm:px-6 md:px-10">
        <div className="flex flex-col items-center gap-6 sm:gap-7 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center my-6 md:my-0 justify-center sm:w-[220px] md:w-[228px] dl-nav__logo">
            <HeaderLogo className="h-auto w-[180px] sm:w-full" />
          </div>

          {/* Divider for desktop */}
          <div
            className="hidden h-[200px] w-px bg-[#FFFFFF33] md:block"
            aria-hidden="true"
          />

          {/* Divider for mobile/tablet (horizontal) */}
          {/* <div
            className="mt-4 h-px w-full bg-white/20 md:hidden"
            aria-hidden="true"
          /> */}

          <div className="relative flex-1 text-white">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[18px] font-bold uppercase tracking-tight sm:text-[20px] md:text-[24px]">
                Ranked <span className="text-[#f76d2f]">#778</span> in the
                United States — 2025
              </p>
              <p className="text-[12px] font-semibold uppercase tracking-wide text-white/80 md:text-[16px]">
                America&apos;s Fastest‑Growing Private Companies
              </p>
            </div>

            {/* Horizontal divider to match Figma */}
            <div className="mt-4 h-px w-full border-t border-white/20" />

            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <p className="text-[40px] font-extrabold leading-none text-[#f76d2f] sm:text-[44px] md:text-[48px]">
                  540%
                </p>
                <p className="mt-1 font-bold uppercase tracking-[0.1em] text-[14px]">
                  Revenue Growth
                </p>
                <p className="text-[12px] text-white/60 ">(2022 – 2024)</p>
              </div>

              <div className="mt-1 inline-flex h-auto items-center justify-center rounded-full bg-white/10 px-5 py-2 text-center text-[14px] text-white sm:h-9 sm:px-6 sm:text-[16px] md:px-8">
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
