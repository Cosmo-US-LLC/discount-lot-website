import React from "react";

function KentuckyFinalCta() {
  return (
    <section className="bg-[#f76d2f] px-4 py-16 md:px-[200px] md:py-20 text-white text-center">
      <div className="mx-auto flex max-w-[896px] flex-col items-center gap-8">
        <div className="space-y-4">
          <h2 className="text-[28px] font-bold leading-[1.2] md:text-[48px] md:tracking-[-1.2px]">
            Ready to Claim Your Lot in Kentucky?
          </h2>
          <p className="text-[16px] leading-[27px] md:text-[18px]">
            43 lots. Real utilities. Zero restrictions. Our previous subdivisions
            sold out in as little as 90 days—don&apos;t wait to find out what&apos;s left.
          </p>
        </div>

        <a
          href="#ky-properties"
          className="inline-flex items-center justify-center rounded-[8px] bg-white px-9 py-4 text-[16px] font-bold text-[#f76d2f]"
        >
          View Available Lots &amp; Pricing →
        </a>
      </div>
    </section>
  );
}

export default KentuckyFinalCta;

