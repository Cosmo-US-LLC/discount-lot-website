import React, { useMemo, useState } from "react";

const imgImage19 =
  "https://www.figma.com/api/mcp/asset/d119e5c1-07b7-48a1-8d94-c48d802d90cb";
const imgVector =
  "https://www.figma.com/api/mcp/asset/2297380d-7d3b-40c0-a9db-60d0c2e1da47";
const imgFrame2147227724 =
  "https://www.figma.com/api/mcp/asset/69e88b15-892d-4946-a8c7-12c45f95a3a8";

const COUNTY_OPTIONS = [
  "",
  "Maricopa",
  "Pima",
  "Pinal",
  "Coconino",
  "Yavapai",
  "Mohave",
  "La Paz",
  "Gila",
  "Cochise",
  "Santa Cruz",
  "Greenlee",
  "Yuma",
  "Apache",
  "Navajo",
];

function buildPropertyMapUrl({ county }) {
  const url = new URL("https://discountlots.com/property-map");
  url.searchParams.set("states", "Arizona");
  url.searchParams.set("counties", county ?? "");
  url.searchParams.set("usage", "");

  url.searchParams.set("acreage.min", "0.07");
  url.searchParams.set("acreage.max", "40");
  url.searchParams.set("price.min", "5943");
  url.searchParams.set("price.max", "128999");
  url.searchParams.set("monthly_payment.min", "141");
  url.searchParams.set("monthly_payment.max", "1875");
  return url.toString();
}

function ArizonaExploreByLocationSection() {
  const [county, setCounty] = useState("");

  const browseUrl = useMemo(
    () => buildPropertyMapUrl({ county }),
    [county],
  );

  return (
    <section className="bg-white px-4 py-[80px] md:px-[68px]">
      <div className="mx-auto max-w-[1304px] flex flex-col items-center gap-[30px]">
        <div className="flex flex-col items-center w-full">
          <div className="text-[#f76d2f] font-bold tracking-[3px] uppercase text-[14px] text-center">
            Explore by Location
          </div>
          <div className="font-['Frank_Ruhl_Libre',serif] font-black text-[#114273] text-[50px] leading-[1.1] text-center">
            Land Available Across Arizona
          </div>
        </div>

        <div className="bg-[#1a3a5c] h-[480px] overflow-clip relative rounded-[8px] w-full">
          <div className="-translate-y-1/2 absolute h-[480px] left-0 right-0 top-[calc(50%-0.18px)]">
            <img
              alt=""
              src={imgImage19}
              className="absolute h-[183.75%] left-[-11.7%] max-w-none top-[-41.88%] w-[123.41%]"
            />
          </div>

          <div className="absolute bottom-[24px] right-[24px] bg-[#eaf4fb] border border-[rgba(17,66,115,0.3)] rounded-[8px] h-[102px] w-[165px] px-[15px] py-[18px]">
            <div className="font-bold text-black text-[12px] tracking-[1px] uppercase">
              Available Properties
            </div>

            <div className="flex items-center gap-[9px] mt-[12px]">
              <div className="bg-[#1a1a1a] rounded-[5px] size-[10px] opacity-10" />
              <div className="font-normal text-black text-[12px] leading-[normal] whitespace-nowrap">
                39+ Active Listings
              </div>
            </div>

            <div className="flex items-center gap-[9px] mt-[8px]">
              <div className="bg-[#27a551] rounded-[5px] size-[10px]" />
              <div className="font-normal text-black text-[12px] leading-[normal] whitespace-nowrap">
                Limited Inventory Left
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center gap-[23px]">
          <div className="flex gap-[20px] items-center">
            <div className="flex flex-col gap-[16px] items-start relative w-[310px] shrink-0">
              <div className="font-['Frank_Ruhl_Libre',serif] font-bold text-[#114273] text-[18px] leading-[20px] w-full">
                Land Use
              </div>

              <div className="relative">
                <select
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                  className="bg-[rgba(222,222,222,0.12)] border border-[rgba(0,0,0,0.15)] h-[40px] rounded-[4px] w-[310px] pl-[13px] pr-[34px] text-[15px] text-black font-normal"
                  style={{ opacity: county ? 0.7 : 0.4 }}
                  aria-label="County"
                >
                  {COUNTY_OPTIONS.map((c) => (
                    <option key={c || "all"} value={c}>
                      {c ? c : "County"}
                    </option>
                  ))}
                </select>
                <div className="absolute right-[13px] top-1/2 -translate-y-1/2">
                  <img
                    alt=""
                    src={imgVector}
                    className="h-[7.656px] w-[13.288px] rotate-180"
                  />
                </div>
              </div>
            </div>

            {[
              {
                label: "Monthly Payment",
                range: "$141/mo - $1,875/mo",
              },
              { label: "Price", range: "$5,943 - $128,999" },
              { label: "Acreage", range: "0.07 - 40 Acres" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex flex-col gap-[16px] items-start relative w-[188px] shrink-0"
              >
                <div className="font-['Frank_Ruhl_Libre',serif] font-bold text-[#114273] text-[18px] leading-[20px] w-[165px]">
                  {f.label}
                </div>

                <div className="flex flex-col gap-[10px] w-full items-start">
                  <div className="h-[20px] w-[188px]">
                    <img
                      alt=""
                      src={imgFrame2147227724}
                      className="absolute block max-w-none size-full"
                    />
                  </div>

                  <div className="flex items-center justify-between leading-0 px-[6px] text-[10px] w-full whitespace-nowrap">
                    <div className="font-normal text-black opacity-70">
                      {f.range}
                    </div>
                    <button
                      type="button"
                      className="text-[#f76d2f] underline"
                      aria-label={`Reset ${f.label}`}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f76d2f] h-[48px] relative rounded-[4px] shrink-0 w-[310px] flex items-center justify-center">
            <div className="text-white font-bold text-[16px] whitespace-nowrap">
              Browse All Listing →
            </div>
          </div>
        </div>

        <a
          href={browseUrl}
          className="sr-only"
          aria-label="Browse all listings"
        >
          Browse all listings
        </a>
      </div>
    </section>
  );
}

export default ArizonaExploreByLocationSection;

