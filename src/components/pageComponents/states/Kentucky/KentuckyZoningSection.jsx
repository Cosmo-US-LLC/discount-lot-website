import React from "react";
import { CheckIcon } from "@/components/common/IconsSvgs";
import { ArrowRightIcon } from "lucide-react";

const zoningRules = [
  "No county zoning confirmed by Clinton County Judge Executive Office",
  "No minimum lot size to build on",
  "No setback requirements build right where you want",
  "Single-family home or power hookup no building permit required",
  "Other structures (commercial, multi-family) require a building permit through the county Building Inspector",
];

const useCases = [
  "Build a home single-family residence, cabin, or cottage",
  "Off-grid living RV, tiny home, or self-sufficient setup",
  "Farming & homesteading grow your own food, raise animals",
  "Storage & workspace barns, workshops, outbuildings",
  "Land banking hold as a long-term investment in a growing area",
];

function KentuckyZoningSection() {
  return (
    <section className="bg-[#eaf4fb] md:py-18 py-12">
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col items-center gap-8">
        <div className="w-full md:space-y-3 space-y-2 text-center">
          <h6 className="text-[#114273]">What You Can Do Here</h6>
          <h2 className="text-[#114273]">Your Land,&nbsp;Your Rules</h2>
          <p className="text-[16px] leading-[26px] text-black">
            Clinton County has <strong>no zoning restrictions</strong> giving
            you rare freedom to use your land however you choose.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <article className="w-full max-w-[637px] md:h-[346px] h-full rounded-[8px] bg-white px-6 py-[30px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[25px] w-1 rounded-[1px] bg-[#f76d2f]" />
              <h3 className="md:!text-[24px] !text-[20px] font-bold text-[#114273]">
                Zoning &amp; Building Rules
              </h3>
            </div>
            <ul className="space-y-6 md:text-[16px] !text-[14px] leading-[1.4] text-[#4a5565]">
              {zoningRules.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-[3px] size-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="w-full max-w-[637px] md:h-[346px] h-full rounded-[8px] bg-white px-6 py-[30px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[25px] w-1 rounded-[1px] bg-[#f76d2f]" />
              <h3 className="md:!text-[24px] !text-[20px] font-bold text-[#114273]">
                What You Can Build or Do
              </h3>
            </div>
            <ul className="space-y-6 md:text-[16px] !text-[14px] leading-[1.4] text-[#4a5565]">
              {useCases.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-[3px] size-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <a
          href="https://discountlots.com/property-map?states=Kentucky&counties=Clinton&usage=&acreage.min=0.07&acreage.max=40&price.min=5943&price.max=128999&monthly_payment.min=141&monthly_payment.max=1875"
          className="mt-2 inline-flex items-center justify-center gap-[6px] rounded-[8px] btn-secondary text-white"
        >
          View Available Lots &amp; Pricing
          <span
            className="inline-flex size-5 items-center justify-center"
            aria-hidden="true"
          >
            <ArrowRightIcon className="size-5" />
          </span>
        </a>
      </div>
    </section>
  );
}

export default KentuckyZoningSection;
