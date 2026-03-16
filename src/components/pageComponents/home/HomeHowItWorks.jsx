import React from "react";

const steps = [
  {
    number: 1,
    title: "Browse & Pick Your Lot",
    description:
      "Explore available properties and find one that fits your needs and budget.",
  },
  {
    number: 2,
    title: "Choose Your Payment Plan",
    description:
      "Pay in full or select a flexible monthly plan designed to fit your budget. No credit check required.",
  },
  {
    number: 3,
    title: "Secure Your Lot with as Little as $500 Down",
    description:
      "If you choose the flexible monthly plan, pay $197 to secure your lot, plus a one-time $300 documentation fee for your welcome packet, paperwork & escrow processing. From Month 2, monthly payments begin at $200/mo.",
    badge: "Monthly plan only",
  },
  {
    number: 4,
    title: "Sign Your Contract",
    description:
      "Your purchase agreement is emailed; sign promptly to secure your lot.",
  },
  {
    number: 5,
    title: "Deed Transfer & Ownership",
    description:
      "After your final payment, the deed is officially transferred to your name. No balloon payments, no hidden fees.",
  },
];

function HomeHowItWorks() {
  return (
    <section className="bg-white px-4 pb-20 pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f76d2f]">
          How it works
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#114273] md:text-4xl">
          A Simple &amp; Secure Process
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#f76d2f]" />
        <p className="mt-4 text-sm text-slate-600">
          No banks, no realtors, no paperwork stacks.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl gap-6">
        <div className="relative flex flex-col items-center">
          <div className="absolute top-8 h-[calc(100%-3rem)] w-[2px] bg-[#114273]" />
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative mb-8 flex items-start gap-4 ${
                index === steps.length - 1 ? "mb-0" : ""
              }`}
            >
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#114273] text-base font-semibold text-white shadow-md">
                {step.number}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-[#f3f4f6] bg-white px-6 py-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-[#114273]">
                    {step.title}
                  </h3>
                </div>
                {step.badge ? (
                  <div className="rounded border border-[#f76d2f] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#f76d2f]">
                    {step.badge}
                  </div>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-[#4a5565]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="rounded-lg bg-[#f76d2f] px-10 py-3 text-sm font-semibold uppercase tracking-[0.07em] text-white shadow-md"
        >
          Find affordable land
        </button>
      </div>
    </section>
  );
}

export default HomeHowItWorks;

