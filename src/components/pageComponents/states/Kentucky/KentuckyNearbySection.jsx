import React from "react";
import {
  LakeIcon,
  FallsIcon,
  FishIcon,
  GolfIcon,
  ForkIcon,
  ParkIcon,
} from "@/components/common/IconsSvgs";
import nearbyCard1 from "@/assets/images/kentucky/your_backyard_card7.webp";
import nearbyCard2 from "@/assets/images/kentucky/your_backyard_card8.webp";
import nearbyCard3 from "@/assets/images/kentucky/your_backyard_card9.webp";
import nearbyCard4 from "@/assets/images/kentucky/your_backyard_card10.webp";
import nearbyCard5 from "@/assets/images/kentucky/your_backyard_card11.webp";
import nearbyCard6 from "@/assets/images/kentucky/your_backyard_card12.webp";

const nearbySpots = [
  {
    name: "Lake Cumberland",
    iconSrc: <LakeIcon />,
    backgroundSrc: nearbyCard1,
    overlayOpacity: 0.3,
    description: [
      "~20 min · Houseboat capital of the world world-class boating, fishing & sunsets",
    ],
  },
  {
    name: "Seventy Six Falls",
    iconSrc: <FallsIcon />,
    backgroundSrc: nearbyCard2,
    overlayOpacity: 0.3,
    description: [
      "~10 miles · A dramatic 44-foot waterfall in Daniel Boone National Forest",
    ],
  },
  {
    name: "Wolf Creek Dam & Fish Hatchery",
    iconSrc: <FishIcon />,
    backgroundSrc: nearbyCard3,
    overlayOpacity: 0.3,
    description: [
      "~20 miles · One of the largest dams east of the Mississippi",
    ],
  },
  {
    name: "Dale Hollow Lake State Resort Park",
    iconSrc: <GolfIcon />,
    backgroundSrc: nearbyCard4,
    overlayOpacity: 0.3,
    description: ["~25 miles · Thousands of acres  +18-holes golf course"],
  },
  {
    name: "Big South Fork",
    iconSrc: <ForkIcon />,
    backgroundSrc: nearbyCard5,
    overlayOpacity: 0.3,
    description: [
      "~50 miles · National River & Recreation Area horseback riding, dramatic gorge views",
    ],
  },
  {
    name: "Cumberland Falls State Resort Park",
    iconSrc: <ParkIcon />,
    backgroundSrc: nearbyCard6,
    overlayOpacity: 0.3,
    description: [
      '~55 miles · "Niagara of the South"one of the only places on Earth with a natural moonbow',
      ,
    ],
  },
];

function KentuckyNearbySection() {
  return (
    <section className="bg-[#114273] md:py-18 py-12 text-white">
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col items-center md:gap-10 gap-8 md:gap-[40px]">
        <h2 className="text-center">
          <span className="block">You&apos;re Closer to Everything</span>
          <span className="block">Than You Think</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-4">
          {nearbySpots.map((spot) => (
            <article
              key={spot.name}
              className="flex relative md:min-h-[270px] min-h-[200px] w-full max-w-[424px] flex-col items-center rounded-[14px] overflow-hidden  px-4 py-4 text-center text-[#1a1208] shadow-[0px_4px_6px_rgba(0,0,0,0.06),0px_2px_4px_rgba(0,0,0,0.06)]"
            >
              <img
                src={spot.backgroundSrc}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              {/* {spot.overlayOpacity > 0 && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundColor: `rgba(0,0,0,${spot.overlayOpacity})`,
                  }}
                />
              )} */}
              <div className="flex w-full flex-col items-center justify-end h-full gap-5 z-10">
                {/* <div className="relative size-[50px] shrink-0 text-[#ffffff]">
                  {spot.iconSrc}
                </div> */}
                <div className="flex w-full flex-col gap-1 text-left">
                  <h3
                    className=" text-[#FFFFFF] !text-[16px] md:!text-[20px] !font-[700] !leading-[28px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {spot.name}
                  </h3>
                  <div className="description text-[#FFFFFF] ">
                    {spot.description.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 w-full max-w-[1098px] rounded-[6px] border border-white/10 bg-white/5 px-8 py-6 text-left backdrop-blur-[2px] md:px-[41px] md:py-[31px]">
          <div className="border-l-4 border-[#f76d2f] md:pl-9 pl-6">
            <h3 className="text-white !text-[24px] md:!text-[36px]">
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
