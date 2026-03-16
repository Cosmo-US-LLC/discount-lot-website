import React from "react";

const card1Image =
  "https://www.figma.com/api/mcp/asset/7a91dd56-fbed-4eb0-9bc8-646ff0f023c5";
const card2Image =
  "https://www.figma.com/api/mcp/asset/c03c986c-92a2-42e5-ac13-350bf95e66fc";
const card3Image =
  "https://www.figma.com/api/mcp/asset/572bcf1f-51aa-439e-8884-9428395eead1";

const locationIcon =
  "https://www.figma.com/api/mcp/asset/012b1aba-a9a5-4f17-b384-6a230245d7a6";
const acresIcon =
  "https://www.figma.com/api/mcp/asset/09d66131-05b8-470b-92a0-d006ca53e970";
const countyIcon =
  "https://www.figma.com/api/mcp/asset/43738f45-47be-4963-9d92-75b8b9de41e3";
const photosIcon =
  "https://www.figma.com/api/mcp/asset/5c561182-72eb-4550-96a3-26f492ec2713";
const heartIcon =
  "https://www.figma.com/api/mcp/asset/0e7a9795-8a3b-4a2e-a28d-dbe90a0ddb31";
const ribbonIcon =
  "https://www.figma.com/api/mcp/asset/85bd3b39-fd43-4bf3-8ed8-ab0730027b10";
const arrowIcon =
  "https://www.figma.com/api/mcp/asset/9f969f84-7ced-4e13-ac25-e668891d94d7";
const arrowOutlineIcon =
  "https://www.figma.com/api/mcp/asset/6604decd-c5e4-416b-b4e7-371d263434e7";

const cards = [
  {
    id: 1,
    badgeText: "New listing",
    badgeColor: "#16a34a",
    image: card1Image,
    title:
      "Claim Your 0.16-Acre Residential Haven in Graceville, Jackson, FL Close to Parks & Small-Town Charm!",
    cityLine: "Graceville, Jackson",
    acres: "0.16 Acres",
    county: "Jackson County, FL",
    photos: "15 pictures",
    monthly: "$227/mo",
    cash: "$10,895",
  },
  {
    id: 2,
    badgeText: "High demand",
    badgeColor: "#489cd8",
    image: card2Image,
    title:
      "Own 0.19 Acres in Onalaska, Polk, TX Level Terrain, Residential Zoning, and HOA Access to Lake Livingston!",
    cityLine: "Onalaska, Polk",
    acres: "0.19 Acres",
    county: "Polk County, Texas.",
    photos: "12 pictures",
    monthly: "$169/mo",
    cash: "$8,499",
  },
  {
    id: 3,
    badgeText: "High demand",
    badgeColor: "#489cd8",
    image: card3Image,
    title:
      "Own 0.34 Acres in Interlachen, Putnam County, FL Level Residential Land with Power, Water, and No HOA Fees!",
    cityLine: "Interlachen, Putnam",
    acres: "0.34 Acres",
    county: "Putnam County, FL",
    photos: "8 pictures",
    monthly: "$176/mo",
    cash: "$8,364",
  },
];

function HomeFeaturedProperties() {
  return (
    <section className="bg-[#f2f5f9] px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f76d2f]">
            Premium listings
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#114273] md:text-4xl">
            Featured Properties
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#f76d2f]" />
          <p className="mt-4 text-sm text-slate-900">
            Build, farm, park, or live on it. Every listing includes verified zoning,
            permitted use, and buildability, no guesswork.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative h-64">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white/80 p-2 shadow-md backdrop-blur"
                >
                  <img src={heartIcon} alt="Save" className="h-4 w-4" />
                </button>
                <div
                  className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.09em] text-white shadow-lg"
                  style={{ backgroundColor: card.badgeColor }}
                >
                  <img src={ribbonIcon} alt="" className="h-2.5 w-2.5" />
                  <span>{card.badgeText}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                <h3 className="mb-3 line-clamp-3 text-[1.05rem] font-semibold leading-snug text-[#1c3a60]">
                  {card.title}
                </h3>

                <div className="border-b border-[#f3f4f6] pb-3 text-[0.8rem] text-slate-600">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <img src={locationIcon} alt="" className="h-4 w-4" />
                      <span>{card.cityLine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={acresIcon} alt="" className="h-4 w-4" />
                      <span>{card.acres}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <img src={countyIcon} alt="" className="h-4 w-4" />
                      <span>{card.county}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={photosIcon} alt="" className="h-4 w-4" />
                      <span>{card.photos}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between rounded-xl bg-[#f0f4f8] px-4 py-3 text-[0.8rem]">
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.12em] text-[#0a3056]">
                      Monthly payment
                    </p>
                    <p className="text-lg font-semibold tracking-tight text-[#f76d2f]">
                      {card.monthly}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.6rem] uppercase tracking-[0.12em] text-[#0a3056]">
                      Pay in full
                    </p>
                    <p className="text-sm font-semibold text-[#114273]">{card.cash}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-[#114273] bg-[#114273] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                >
                  Explore details
                  <img src={arrowIcon} alt="" className="h-4 w-4 -scale-y-100 rotate-180" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-md border border-[#f76d2f] px-6 py-3 text-sm font-semibold text-[#f76d2f]"
          >
            Browse 200+ Available Properties
            <img
              src={arrowOutlineIcon}
              alt=""
              className="h-4 w-4 -scale-y-100 rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeFeaturedProperties;

