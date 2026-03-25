import React from "react";
import { ArrowRightIcon } from "lucide-react";

const stats = [
  { label: "Minimum Down", value: "$500" },
  { label: "Monthly Payments", value: "< $200" },
  { label: "Credit Check", value: "0" },
  { label: "Happy Customers", value: "3,000+" },
];

function KentuckyPricingSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-5xl px-4 md:px-8 flex-col items-center gap-10 text-center">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-3">
            <div className="h-[15px] w-full" aria-hidden="true" />
            <h2 className="text-center text-[#114273]">
              Get Started for as Little as&nbsp;$500 Down
            </h2>
          </div>
          <p className="w-full max-w-[606px] text-[16px] font-normal leading-[26px] text-black">
            No banks. No credit checks. No agents. Just you, your land, and a
            simple owner-financed payment plan — with payments under $200/month.
          </p>
        </div>

        <div className="flex w-full h-full flex-wrap items-start justify-center gap-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex w-[160px] h-[100px] backdrop-blur-[2px] border border-[#11427366] bg-[#1142731A] rounded-[6px] flex-col items-center justify-center"
            >
              <p
                className="w-full text-[36px] font-black leading-[57.2px] text-[#114273]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.value}
              </p>
              <p className="w-full text-[14px] font-normal leading-normal text-[#114273]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#ky-properties"
          className="inline-flex items-center justify-center gap-[6px] btn-secondary bg-[#f76d2f] text-white"
        >
          Browse Available Lots &amp; Pricing
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export default KentuckyPricingSection;
