import React from "react";

const videoCards = [
  {
    title: "Lake Cumberland",
    minutes: "~20 minutes away",
    description:
      "The Houseboat Capital of the World. Over 1,200 miles of shoreline, world‑class fishing, boating and some of the most spectacular sunsets in the South. One of the largest lakes in the eastern U.S.",
    image:
      "https://www.figma.com/api/mcp/asset/b98e4cea-d52c-4e5e-a5b1-ea4ac6f8f3d7",
  },
  {
    title: "Seventy Six Falls",
    minutes: "~20 minutes away",
    description:
      "A stunning 44‑foot waterfall tucked inside Daniel Boone National Forest — right here in Clinton County. One of Kentucky’s best‑kept secrets and an easy day trip from your lot.",
    image:
      "https://www.figma.com/api/mcp/asset/64baa241-16ac-4d5a-97be-76c5a3deb3d9",
  },
  {
    title: "Cumberland Falls State Resort Park",
    minutes: "~20 minutes away",
    description:
      'Known as the "Niagara of the South" — 68 feet tall, 125 feet wide. One of only two places on Earth where you can witness a natural moonbow. An unforgettable night under a full moon.',
    image:
      "https://www.figma.com/api/mcp/asset/672a5320-fd14-4a14-95ef-3bd71d48323d",
  },
];

function KentuckyBackyardSection() {
  return (
    <section className="bg-white px-4 py-20 md:px-[68px] md:py-[80px]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <div className="max-w-[800px] space-y-4">
          <p className="text-[14px] font-bold uppercase tracking-[3px] text-[#f76d2f]">
            Nearby Adventures
          </p>
          <div className="space-y-2">
            <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.8px] text-[#114273] md:text-[48px] md:tracking-[-1.2px]">
              Your Backyard Awaits
            </h2>
            <p className="text-[16px] leading-[26px] text-black md:text-[18px]">
              South‑central Kentucky puts some of the region&apos;s most breathtaking
              natural destinations within an easy drive of your front door.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {videoCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col overflow-hidden rounded-[14px] border border-[#dedede] bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.06),0px_2px_4px_rgba(0,0,0,0.06)] text-left"
            >
              <div className="relative h-[196px] w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label={`Play video about ${card.title}`}
                >
                  <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#f47b20] text-[22px] text-white shadow-[0px_4px_20px_rgba(0,0,0,0.4)]">
                    ▶
                  </span>
                </button>
              </div>

              <div className="space-y-3 px-6 py-5">
                <span className="inline-flex rounded-[20px] bg-[#f47b20] px-3 py-1 text-[11px] font-bold text-white">
                  {card.minutes}
                </span>
                <h3 className="text-[20px] font-bold text-[#1a1208]">
                  {card.title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#4a5565]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KentuckyBackyardSection;

