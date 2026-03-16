import React from "react";

const trustpilotStar = "https://www.figma.com/api/mcp/asset/dfe0503d-5ccf-4c49-ac17-667a0b378f71";

function HomeSocialProof() {
  return (
    <section className="border-y border-(--border-subtle) bg-[#f9fafb]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row md:gap-10">
        <div className="flex flex-wrap items-center justify-center gap-6 text-[0.7rem] text-slate-600 md:justify-start">
          <div className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold tracking-[-0.04em]">BBB</span>
              <span className="text-[0.55rem] uppercase tracking-[0.28em] opacity-60">
                Accredited
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-4 w-4">
              <img
                src={trustpilotStar}
                alt="Trustpilot"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-base font-semibold tracking-[-0.04em]">Trustpilot</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold tracking-[-0.02em]">Google</span>
              <span className="text-[0.55rem] uppercase tracking-[0.16em] opacity-60">
                Reviews
              </span>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center rounded-full border border-[rgba(72,156,216,0.1)] bg-white px-6 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-sky-500 shadow-sm">
          3,000+ owners · 900+ verified 5-star reviews
        </div>
      </div>
    </section>
  );
}

export default HomeSocialProof;

