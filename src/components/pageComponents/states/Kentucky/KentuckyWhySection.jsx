import React from "react";
import { ArrowRightIcon } from "lucide-react";
import WhyDiscountIcon from "@/assets/images/kentucky/why_icon_4.svg";
import DiscountIcon from "@/assets/images/kentucky/why_icon_3.svg";
import HillsIcon from "@/assets/images/kentucky/why_icon_2.svg";
import KentuckyIcon from "@/assets/images/kentucky/why_icon_1.svg";

function KentuckyWhySection() {
  const cards = [
    {
      title: "Why Kentucky?",
      iconSrc: KentuckyIcon,
      body: (
        <>
          <p>
            One of the most affordable places to live in the U.S. cost of living
            index around{" "}
            <span className="font-semibold text-[#363636]">
              75 vs. the national average of 100.
            </span>{" "}
            Overall living costs run ~8% below average.
          </p>
          <p className="mt-4">
            Housing is roughly 22% more affordable. Groceries and healthcare
            both come in around 5% lower than the national average. Your dollar
            goes further here.
          </p>
        </>
      ),
    },
    {
      title: "Why Wolf Creek?",
      iconSrc: HillsIcon,
      body: (
        <>
          <p>
            Wolf Creek Reserve sits minutes from Lake Cumberland, 1,255 miles of
            shoreline. Fishing, boating, and outdoor living year-round. This
            isn't just a lot in a field.
          </p>
          <p className="mt-4">
            It's a address inside one of Kentucky's most sought-after recreation
            corridors.
          </p>
        </>
      ),
    },
    {
      title: "Why Discount Lots?",
      iconSrc: DiscountIcon,
      body: (
        <>
          <p>
            We own every property outright before it&apos;s listed. No agents.
            No banks. No credit checks. Over{" "}
            <span className="font-semibold text-[#363636]">3,000 families</span>{" "}
            have bought with us since 2019. Ranked{" "}
            <span className="font-semibold text-[#363636]">
              #778 on the 2025 Inc. 5000
            </span>{" "}
            with 540% growth.
          </p>
          <p className="mt-4">
            A dedicated Land Specialist guides you before you buy. A Portfolio
            Manager supports you after.
          </p>
        </>
      ),
    },
    {
      title: "Why Now?",
      iconSrc: WhyDiscountIcon,
      body: (
        <>
          <p>
            Our previous subdivision projects have{" "}
            <span className="font-semibold text-[#363636]">
              sold out completely in as little as 90 days
            </span>
            . Affordable land with utilities, paved access, and zero
            restrictions doesn&apos;t stay available. There are 43 lots here.
          </p>
          <p className="mt-4">
            They will not all be available six months from now. The buyers who
            move early get the best selection.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#eaf4fb] py-18">
      <div className="mx-auto flex max-w-[1320px] px-4 md:px-8 flex-col items-center gap-10 text-center">
        <div className="flex w-full flex-col items-center gap-10">
          <h2 className="w-full max-w-[616px] text-[#114273]">
            Why These Kentucky Lots Are Selling Fast
          </h2>

          <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-stretch md:justify-center md:gap-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex w-full max-w-[314px] flex-col items-center gap-6 rounded-[8px] bg-white px-3 py-4"
              >
                <div className="flex items-center h-12 w-12 justify-center rounded-[6px] bg-[#fef4f1]">
                  <img alt="" src={card.iconSrc} className=" " />
                </div>

                <div className="w-full max-w-[268px] text-center">
                  <p className="description !font-[700] text-[#114273]">
                    {card.title}
                  </p>
                  <div className="mt-2 description text-[#4a5565]">
                    {card.body}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <a
          href="https://discountlots.com/property-map?states=Kentucky&counties=Clinton&usage=&acreage.min=0.07&acreage.max=40&price.min=5943&price.max=128999&monthly_payment.min=141&monthly_payment.max=1875"
          className="inline-flex btn-secondary items-center justify-center gap-2 rounded-[6px] text-white"
        >
          View Available Lots &amp; Pricing
          <ArrowRightIcon className="size-5" />
        </a>
      </div>
    </section>
  );
}

export default KentuckyWhySection;
