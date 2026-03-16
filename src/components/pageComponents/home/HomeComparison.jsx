import React from "react";

const logo =
  "https://www.figma.com/api/mcp/asset/93c9157b-ec86-45c6-aea1-a45c24a59b1b";

const rows = [
  {
    label: "Down payment",
    discountLots: "As little as $500",
    traditional: "20% ($10,000+)",
  },
  {
    label: "Credit check",
    discountLots: "None required",
    traditional: "Strictly required",
  },
  {
    label: "Closing time",
    discountLots: "Less than 5 minutes",
    traditional: "60–90 days average",
  },
  {
    label: "Paperwork",
    discountLots: "Secure digital process",
    traditional: "Stacks of physical forms",
  },
  {
    label: "Agent fees",
    discountLots: "Zero commissions",
    traditional: "Up to 6% commissions",
  },
];

function HomeComparison() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f76d2f]">
          What makes us different
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#114273] md:text-4xl">
          Discount Lots vs Traditional
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#f76d2f]" />
      </div>

      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-md bg-white">
        <div className="flex items-center border-b border-[#e5e7eb] px-5 py-3 text-sm font-semibold text-[#114273] uppercase tracking-[0.12em]">
          <div className="w-40 text-left">Features</div>
          <div className="flex flex-1 items-center justify-center gap-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Discount Lots" className="h-8 w-auto" />
            </div>
            <div>Traditional banks</div>
          </div>
        </div>

        <div className="divide-y divide-[#e5e7eb] text-sm">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center px-5 py-3 text-[#111827]"
            >
              <div className="w-40 font-semibold text-left">{row.label}</div>
              <div className="flex flex-1 items-center justify-center gap-16">
                <div className="text-[#f76d2f] font-semibold text-left w-40">
                  {row.discountLots}
                </div>
                <div className="text-[#6b7280] text-left w-40">
                  {row.traditional}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="rounded-md bg-[#f76d2f] px-8 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-md"
        >
          Find affordable land
        </button>
      </div>
    </section>
  );
}

export default HomeComparison;

