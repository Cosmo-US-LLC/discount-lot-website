import React from "react";

const nearbySpots = [
  {
    name: "Lake Cumberland",
    description: [
      "~20 min · Houseboat capital of the world",
      "world‑class boating, fishing & sunsets",
    ],
  },
  {
    name: "Seventy Six Falls",
    description: [
      "~10 miles · A dramatic 44‑foot waterfall in",
      "Daniel Boone National Forest",
    ],
  },
  {
    name: "Wolf Creek Dam & Fish Hatchery",
    description: [
      "~20 miles · One of the largest dams",
      "east of the Mississippi",
    ],
  },
  {
    name: "Dale Hollow Lake State Resort Park",
    description: ["~25 miles · Thousands of acres", "+ 18‑hole golf course"],
  },
  {
    name: "Big South Fork",
    description: [
      "~50 miles · National River & Recreation Area —",
      "horseback riding, dramatic gorge views",
    ],
  },
  {
    name: "Cumberland Falls State Resort Park",
    description: [
      '~55 miles · "Niagara of the South"',
      "one of the only places on Earth with a natural moonbow",
    ],
  },
];

function KentuckyNearbySection() {
  return (
    <section className="bg-[#114273] px-4 py-16 text-white md:px-[68px] md:py-[60px]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.8px] md:text-[48px] md:tracking-[-1.2px]">
            You&apos;re Closer to Everything
          </h2>
          <p className="text-[32px] font-bold leading-[1.1] tracking-[-0.8px] md:text-[48px] md:tracking-[-1.2px]">
            Than You Think
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {nearbySpots.map((spot) => (
            <article
              key={spot.name}
              className="flex h-full flex-col rounded-[14px] border border-[#f3f4f6] bg-white px-6 py-6 text-left text-[#1a1208] shadow-[0px_4px_6px_rgba(0,0,0,0.06),0px_2px_4px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#fef4f1] text-[#114273]">
                <span aria-hidden="true">📍</span>
              </div>
              <h3 className="mb-2 text-[16px] font-bold">{spot.name}</h3>
              <div className="space-y-1 text-[14px] leading-[1.4] text-[#4a5565]">
                {spot.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 w-full max-w-[998px] rounded-[16px] border border-white/10 bg-white/5 px-8 py-6 text-left backdrop-blur-[2px] md:px-[41px] md:py-[31px]">
          <div className="border-l-4 border-[#f76d2f] pl-6">
            <h3 className="text-[24px] font-black leading-[1.3] md:text-[36px]">
              Previous Subdivisions Sold Out in as Little as 90 Days
            </h3>
            <p className="mt-3 text-[16px] leading-[1.4] text-white">
              43 lots. Real utilities. Zero restrictions. A price that actually
              makes sense. Discount Lots subdivisions don&apos;t sit on the
              market — they sell. If you&apos;re considering it, the time to act
              is now, not when the best lots are already gone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KentuckyNearbySection;

