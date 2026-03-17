import React from "react";

function KentuckyWhySection() {
  const cards = [
    {
      title: "Why Kentucky?",
      body: [
        "One of the most affordable places to live in the U.S. cost of living index around 75 vs. the national average of 100. Overall living costs run ~8% below average.",
        "Housing is roughly 22% more affordable. Groceries and healthcare both come in around 5% lower than the national average. Your dollar goes further here.",
      ],
    },
    {
      title: "Why Rollin' Hills?",
      body: [
        "This isn't remote wilderness. Albany is just 8 miles away — McDonald's, Burger King, Sonic, grocery stores, hardware, 24‑hour gas stations. All lots connect to KY‑90 and KY‑127 via paved roads.",
        "Water is already at the street. Power is already at the street. Getting here is easy. Staying here is even easier.",
      ],
    },
    {
      title: "Why Discount Lots?",
      body: [
        "We own every property outright before it's listed. No agents. No banks. No credit checks. Over 3,000 families have bought with us since 2019. Ranked #778 on the 2025 Inc. 5000 with 540% growth.",
        "A dedicated Land Specialist guides you before you buy. A Portfolio Manager supports you after.",
      ],
    },
    {
      title: "Why Now?",
      body: [
        "Our previous subdivision projects have sold out completely in as little as 90 days. Affordable land with utilities, paved access, and zero restrictions doesn't stay available. There are 43 lots here.",
        "They will not all be available six months from now. The buyers who move early get the best selection.",
      ],
    },
  ];

  return (
    <section className="bg-[#eaf4fb] px-4 py-16 md:px-[68px] md:py-[60px]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <h2 className="max-w-[676px] text-[32px] font-black leading-[1.1] text-[#114273] md:text-[50px]">
          Why These Kentucky Lots Are Selling Fast
        </h2>

        <div className="grid gap-4 md:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col items-center rounded-[8px] bg-white px-4 py-5 text-left shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#fef4f1]">
                <span className="text-[#f47b20] text-lg" aria-hidden="true">
                  ✦
                </span>
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-[#114273]">
                {card.title}
              </h3>
              <div className="space-y-3 text-[14px] leading-normal text-[#4a5565]">
                {card.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <a
          href="#ky-properties"
          className="mt-4 inline-flex items-center gap-2 rounded-[8px] bg-[#f76d2f] px-9 py-4 text-[16px] font-bold text-white"
        >
          View Available Lots &amp; Pricing
          <span className="text-lg" aria-hidden="true">
            ↑
          </span>
        </a>
      </div>
    </section>
  );
}

export default KentuckyWhySection;

