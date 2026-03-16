import React from "react";

function HomeHero() {
  return (
    <section className="relative bg-slate-900 text-white">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/30" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-20 md:flex-row md:items-center md:justify-between md:pb-20 md:pt-24">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.4)]" />
            <span>Secure your future</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.6rem] lg:leading-[1.05]">
              Own Premium Land for Less Than Your Monthly Rent
            </h1>
            <p className="text-sm leading-relaxed text-slate-100">
              Affordable land with easy monthly payments, starting at $200/month.
            </p>
          </div>

          <ul className="space-y-2 text-sm text-slate-100">
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f97316] text-[0.7rem] font-bold text-white">
                ✓
              </span>
              <span>No credit checks</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f97316] text-[0.7rem] font-bold text-white">
                ✓
              </span>
              <span>Fast digital closing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f97316] text-[0.7rem] font-bold text-white">
                ✓
              </span>
              <span>Flexible terms</span>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-md rounded-3xl bg-white p-6 text-slate-900 shadow-[0_22px_55px_rgba(15,23,42,0.55)]">
          <h2 className="text-lg font-semibold text-[#114273]">Find Your Land</h2>
          <p className="mt-1 text-xs text-slate-600">
            Search <span className="font-semibold text-[#114273]">North Carolina</span>{" "}
            properties now
          </p>

          <div className="mt-5 space-y-4 text-xs">
            <div>
              <label className="mb-1 block font-semibold text-slate-700">
                Location
              </label>
              <div className="flex items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-[0.75rem] text-slate-600">
                <span className="flex-1">Select state</span>
              </div>
            </div>

            <div>
              <label className="mb-1 block font-semibold text-slate-700">
                Budget
              </label>
              <div className="flex items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-[0.75rem] text-slate-600">
                <span className="flex-1">Range</span>
              </div>
            </div>

            <div>
              <label className="mb-1 block font-semibold text-slate-700">
                Desired acreage
              </label>
              <div className="mt-1">
                <div className="h-1 rounded-full bg-slate-200">
                  <div className="h-1 w-1/2 rounded-full bg-[#f97316]" />
                </div>
                <div className="mt-2 flex items-center justify-between text-[0.7rem] text-slate-500">
                  <span>0.00 - 50.00 acres</span>
                  <button type="button" className="text-[#f97316] underline">
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#f97316] px-5 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_16px_40px_rgba(249,115,22,0.6)]"
            >
              Search now
            </button>

            <p className="mt-2 text-[0.68rem] text-slate-500">
              New properties listed <span className="font-semibold">daily</span>, high-demand
              lots sell fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
