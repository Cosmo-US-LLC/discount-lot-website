import React from "react";

const stats = [
  { label: "Minimum Down", value: "$500" },
  { label: "Monthly Payments", value: "< $200" },
  { label: "Credit Check", value: "0" },
  { label: "Happy Customers", value: "3,000+" },
];

function KentuckyPricingSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-[64px] md:py-[40px]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <h2 className="text-[28px] font-bold leading-[1.2] text-[#114273] md:text-[36px]">
            Get Started for as Little as $500 Down
          </h2>
          <p className="text-[16px] leading-[26px] text-black md:text-[18px]">
            No banks. No credit checks. No agents. Just you, your land, and a
            simple owner‑financed payment plan — with payments under $200/month.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-[10px] bg-[#f5f7fb] px-6 py-5 text-[#114273]"
            >
              <p className="text-[28px] font-black leading-[1.2] md:text-[32px]">
                {item.value}
              </p>
              <p className="mt-1 text-[14px] text-[#1a1208]">{item.label}</p>
            </div>
          ))}
        </div>

        <a
          href="#ky-properties"
          className="mt-2 inline-flex items-center gap-2 rounded-[8px] bg-[#f76d2f] px-9 py-4 text-[16px] font-bold text-white"
        >
          Browse Available Lots &amp; Pricing
          <span className="text-lg" aria-hidden="true">
            ↑
          </span>
        </a>
      </div>
    </section>
  );
}

export default KentuckyPricingSection;

