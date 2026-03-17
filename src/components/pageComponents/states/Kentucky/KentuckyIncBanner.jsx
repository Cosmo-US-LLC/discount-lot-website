import React from "react";
import { HeaderLogo } from "@/components/common/IconsSvgs";

function KentuckyIncBanner() {
  return (
    <section className="bg-[#013366] px-4 py-8 md:px-[64px]">
      <div className="mx-auto flex max-w-6xl items-center gap-8 rounded-[12px] bg-[#003366] px-6 py-8 md:px-10 md:py-10">
        <div className="flex w-full flex-col gap-6 md:flex-row md:items-center">
          <div className="flex items-center justify-center md:w-[200px]">
            <HeaderLogo />
          </div>

          <div className="h-full w-px bg-white/20 hidden md:block" aria-hidden="true" />

          <div className="flex-1 space-y-4 text-white">
            <div>
              <p className="text-[18px] font-bold tracking-[0.08em] uppercase md:text-[20px]">
                Ranked <span className="text-[#f76d2f]">#778</span> in the United
                States — 2025
              </p>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-white/80 md:text-[14px] uppercase">
                America&apos;s Fastest‑Growing Private Companies
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[40px] font-extrabold leading-none text-[#f76d2f] md:text-[48px]">
                  540%
                </p>
                <p className="text-[12px] font-bold uppercase tracking-[0.14em]">
                  Revenue Growth
                </p>
                <p className="text-[12px] text-white/60">(2022 – 2024)</p>
              </div>

              <div className="mt-2 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-2 text-[14px] text-white md:px-8">
                Top <span className="mx-1 font-bold text-[#f76d2f]">16%</span> of
                all U.S. private companies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KentuckyIncBanner;

