import React from "react";
import { ArrowRightIcon } from "lucide-react";

function KentuckyFinalCta() {
  return (
    <section className="bg-[#f76d2f] px-4 py-16 md:px-[200px] md:py-20 text-white text-center">
      <div className="mx-auto flex max-w-[896px] flex-col items-center gap-8">
        <div className="space-y-4 flex flex-col items-center">
          <h2 className="text-[#ffffff]">
            Ready to Claim Your Lot in Kentucky?
          </h2>
          <p className="description max-w-[560px]">
            43 lots. Real utilities. Zero restrictions. Our previous
            subdivisions sold out in as little as 90 days don't wait to find out
            what's left.
          </p>
        </div>

        <a
          href="#ky-properties"
          className="inline-flex gap-2 items-center justify-center rounded-[8px] bg-white px-9 py-4 text-[16px] font-bold text-[#f76d2f]"
        >
          View Available Lots &amp; Pricing{" "}
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export default KentuckyFinalCta;
