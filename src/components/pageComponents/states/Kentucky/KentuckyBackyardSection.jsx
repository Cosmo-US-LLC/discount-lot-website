import React from "react";
import YouTubeVideoCard1 from "@/assets/images/kentucky/your_backyard_card1.webp";
import YouTubeVideoCard2 from "@/assets/images/kentucky/your_backyard_card2.webp";
import YouTubeVideoCard3 from "@/assets/images/kentucky/your_backyard_card3.webp";

const videoCards = [
  {
    title: "Lake Cumberland",
    minutes: "~20 minutes away",
    description:
      "The Houseboat Capital of the World. Over 1,200 miles of shoreline, world‑class fishing, boating and some of the most spectacular sunsets in the South. One of the largest lakes in the eastern U.S.",
    image: YouTubeVideoCard1,
  },
  {
    title: "Seventy Six Falls",
    minutes: "~20 minutes away",
    description:
      "A stunning 44‑foot waterfall tucked inside Daniel Boone National Forest — right here in Clinton County. One of Kentucky’s best‑kept secrets and an easy day trip from your lot.",
    image: YouTubeVideoCard2,
  },
  {
    title: "Cumberland Falls State Resort Park",
    minutes: "~20 minutes away",
    description:
      'Known as the "Niagara of the South" — 68 feet tall, 125 feet wide. One of only two places on Earth where you can witness a natural moonbow. An unforgettable night under a full moon.',
    image: YouTubeVideoCard3,
  },
];

function KentuckyBackyardSection() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col items-center gap-12 text-center md:gap-[48px]">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4">
          <h6 className=" text-[#f76d2f]">Nearby Adventures</h6>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-[#114273]">Your Backyard&nbsp;Awaits</h2>
            <div
              className="h-1 w-20 rounded-full bg-[#f76d2f]"
              aria-hidden="true"
            />
          </div>
          <p className="w-full max-w-[606px] description text-black">
            South‑central Kentucky puts some of the region&apos;s most
            breathtaking natural destinations within an easy drive of your front
            door.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3 md:gap-6 lg:gap-6">
          {videoCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full w-full max-w-[418px] flex-col overflow-hidden rounded-[14px] border border-[#dedede] bg-[rgba(255,255,255,0.05)] p-px text-left"
            >
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.06),0px_2px_4px_rgba(0,0,0,0.06)]">
                <div className="relative h-[196px] w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="relative flex-1 px-5 py-5">
                  <span className="inline-flex rounded-[20px] bg-[#f47b20] px-3 py-[4px] text-[12px] font-bold text-white">
                    {card.minutes}
                  </span>
                  <h3 className="mt-3 text-black">{card.title}</h3>
                  <p className="mt-3 description text-[#4a5565]">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KentuckyBackyardSection;
