import React from "react";
import {
  LakeIcon,
  FallsIcon,
  FishIcon,
  GolfIcon,
  ForkIcon,
  ParkIcon,
} from "@/components/common/IconsSvgs";

const nearbySpots = [
  {
    name: "Lake Cumberland",
    iconSrc: <LakeIcon />,
    description: [
      "~20 min · Houseboat capital of the world",
      "world‑class boating, fishing & sunsets",
    ],
  },
  {
    name: "Seventy Six Falls",
    iconSrc: <FallsIcon />,
    description: [
      "~10 miles · A dramatic 44‑foot waterfall in",
      "Daniel Boone National Forest",
    ],
  },
  {
    name: "Wolf Creek Dam & Fish Hatchery",
    iconSrc: <FishIcon />,
    description: [
      "~20 miles · One of the largest dams",
      "east of the Mississippi",
    ],
  },
  {
    name: "Dale Hollow Lake State Resort Park",
    iconSrc: <GolfIcon />,
    description: ["~25 miles · Thousands of acres", "+ 18‑hole golf course"],
  },
  {
    name: "Big South Fork",
    iconSrc: <ForkIcon />,
    description: [
      "~50 miles · National River & Recreation Area — horseback riding, dramatic gorge views",
    ],
  },
  {
    name: "Cumberland Falls State Resort Park",
    iconSrc: <ParkIcon />,
    description: [
      '~55 miles · "Niagara of the South" one of the only places on Earth with a natural moonbow',
      ,
    ],
  },
];

function KentuckyNearbySection() {
  return (
    <section className="bg-[#114273] py-18 text-white">
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col items-center gap-10 md:gap-[40px]">
        <h2 className="text-center">
          <span className="block">You&apos;re Closer to Everything</span>
          <span className="block">Than You Think</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-4">
          {nearbySpots.map((spot) => (
            <article
              key={spot.name}
              className="flex h-full w-full max-w-[424px] flex-col items-center rounded-[6px] border border-[#f3f4f6] bg-white px-6 py-6 text-center text-[#1a1208] shadow-[0px_4px_6px_rgba(0,0,0,0.06),0px_2px_4px_rgba(0,0,0,0.06)]"
            >
              <div className="flex w-full flex-col items-center gap-5">
                <div className="relative size-[50px] shrink-0">
                  {spot.iconSrc}
                </div>
                <div className="flex w-full flex-col items-center gap-1 text-[16px]">
                  <h3 className=" text-[#1a1208]">{spot.name}</h3>
                  <div className="description text-[#4a5565]">
                    {spot.description.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 w-full max-w-[998px] rounded-[6px] border border-white/10 bg-white/5 px-8 py-6 text-left backdrop-blur-[2px] md:px-[41px] md:py-[31px]">
          <div className="border-l-4 border-[#f76d2f] pl-9">
            <h3 className="text-white">
              Previous Subdivisions Sold Out in&nbsp;as Little as 90 Days
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
