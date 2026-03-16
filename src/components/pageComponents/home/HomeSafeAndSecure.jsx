import React from "react";

function HomeSafeAndSecure() {
  return (
    <section className="bg-[#0b1726] px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[rgba(148,163,184,0.4)] bg-gradient-to-r from-[#0b1726] via-[#10243c] to-[#0b1726] px-8 py-10 shadow-[0_22px_60px_rgba(15,23,42,0.8)] md:px-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#facc15]">
              Safe &amp; secure
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              A safer way to buy land, start to finish.
            </h2>
            <p className="mt-4 text-sm text-slate-200">
              Every transaction is structured to protect your investment with transparent
              terms, secure payments, and clear documentation at every step.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-100">
            <div className="rounded-xl border border-[rgba(148,163,184,0.5)] bg-white/5 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a5b4fc]">
                Escrow-backed closings
              </p>
              <p className="mt-1 text-[0.85rem] text-slate-100">
                Funds are handled through trusted providers so both you and the seller are
                protected until paperwork is complete.
              </p>
            </div>
            <div className="rounded-xl border border-[rgba(148,163,184,0.5)] bg-white/5 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a5b4fc]">
                Clear, fixed terms
              </p>
              <p className="mt-1 text-[0.85rem] text-slate-100">
                No balloon payments or surprise fees—your monthly payment and payoff
                schedule are locked in from day one.
              </p>
            </div>
            <div className="rounded-xl border border-[rgba(148,163,184,0.5)] bg-white/5 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a5b4fc]">
                Documented ownership path
              </p>
              <p className="mt-1 text-[0.85rem] text-slate-100">
                From purchase agreement to deed transfer, you know exactly what happens
                when—and what&apos;s needed from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSafeAndSecure;

