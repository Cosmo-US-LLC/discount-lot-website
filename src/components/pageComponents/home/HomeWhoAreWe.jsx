import React from "react";

const foundersImage =
  "https://www.figma.com/api/mcp/asset/7379bb6f-1783-4946-bf5b-9c3dbfbdf9e0";
const playIcon =
  "https://www.figma.com/api/mcp/asset/88790063-fab8-47ac-a66c-1453e9be88e8";

function HomeWhoAreWe() {
  return (
    <section className="bg-[#eaf4fb] px-4 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[40px] bg-[#eaf4fb] px-6 py-10 md:flex-row md:items-center md:px-11">
        {/* Left: founders image / video card */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-[0_20px_25px_-5px_rgba(0,0,0,0.25),0_8px_10px_-6px_rgba(0,0,0,0.3)] md:w-1/2">
          <img
            src={foundersImage}
            alt="Discount Lots founder"
            className="h-full w-full object-cover"
          />

          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f76d2f] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.35),0_8px_10px_-6px_rgba(0,0,0,0.4)]"
          >
            <img src={playIcon} alt="Play video" className="h-7 w-7" />
          </button>

          <div className="absolute bottom-6 left-6 space-y-2">
            <div className="inline-flex rounded-lg bg-[#48a8ed] px-8 py-2 text-lg font-bold text-white shadow-[4px_4px_0_0_white]">
              Paul Hersko
            </div>
            <div className="inline-flex rounded-lg bg-white px-5 py-1 text-sm font-semibold italic text-[#48a8ed]">
              Discount Lots
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="w-full space-y-5 md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f76d2f]">
            Who are we
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#114273] md:text-4xl">
            Making land ownership accessible
          </h2>

          <div className="space-y-4 text-sm text-[#4a4f54]">
            <p>
              Founded in 2019 in Chicago, Illinois by Paul and Willie, two experienced
              real estate brokers, Discount Lots was created to make land ownership easy,
              affordable, and accessible for everyone.
            </p>
            <p className="font-semibold">
              We purchase at a lower price and pass the savings directly to you, giving
              you the best opportunity to own land without unnecessary costs.
            </p>
            <p>
              Discount Lots isn&apos;t just about access to exclusive listings you won&apos;t
              find anywhere else, it&apos;s also about flexible ways to buy land, whether
              you&apos;re purchasing outright or taking advantage of our innovative
              rent-to-own program.
            </p>
          </div>

          <div className="flex gap-10 pt-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#6b7280]">
            <div>
              <div className="text-2xl font-bold text-[#114273]">6+</div>
              <div>Years active</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#114273]">3k+</div>
              <div>Sold parcels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWhoAreWe;

