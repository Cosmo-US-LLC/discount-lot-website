import React from "react";
import arizonaHeroDesktop from "@/assets/images/arizona/arizona_hero_desktop.webp";
import arizonaHeroMobile from "@/assets/images/arizona/arizona_hero_mobile.webp";
import BlurImage from "@/components/common/BlurImage";

function ArizonaHero() {
  return (
    <section
      className="relative w-full h-dvh flex items-center pt-[100px] pb-[40px] -mt-(--header-height)"
      aria-label="Arizona Hero"
    >
      <div className="absolute inset-0">
        <div className="hidden h-full w-full md:block">
          <BlurImage
            src={arizonaHeroDesktop}
            alt="Rolling farmland at sunset"
            blurhash="LE84lE%1oJbb?dxZa}kCkYjEkCj["
            className="h-full w-full"
          />
        </div>
        <div className="h-full w-full md:hidden">
          <BlurImage
            src={arizonaHeroMobile}
            alt="Rolling farmland at sunset"
            blurhash="LE84lE%1oJbb?dxZa}kCkYjEkCj["
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center ">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 gap-8 flex flex-col items-center">
          <div className="w-full flex flex-col gap-6 items-center">
            <div className="flex flex-col items-center text-white rounded-[6px] border border-white px-4 py-2 text-[14px] font-bold uppercase tracking-[0.08em] whitespace-nowrap">
              High-Demand Lots Sell Fast
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-white max-w-[759px]">
                Buy Exclusive Off-Market Arizona Properties
              </h1>

              <p className="text-[20px] leading-[1.4] text-white/80 max-w-[759px]">
                We buy land below market value and pass the savings directly to
                you. Each property is county-verified for your peace of mind.
              </p>
            </div>
          </div>

          <div className="flex gap-[16px] items-center">
            <button
              type="button"
              className="btn-secondary hover:!bg-[#fff] !hover:text-[#ffffff] hover:!border-white"
            >
              View Hot Properties
            </button>

            <button
              type="button"
              className="btn-secondary !bg-transparent !border-[#ffffff] hover:!bg-[#fff] !hover:text-[#ffffff] hover:!border-white"
            >
              How Owner Financing Works
            </button>
          </div>
        </div>

        <div className="mt-12 w-full flex gap-12 items-center justify-center">
          {[
            { big: "30+", small: "Available lots" },
            { big: "$200", small: "Below $200/mo" },
            { big: "3000+", small: "Happy Buyers" },
            { big: "0%", small: "Credit Check" },
          ].map((s) => (
            <div
              key={s.small}
              className="flex flex-col gap-2 items-center min-w-[120px] whitespace-nowrap"
            >
              <div
                className="font-black text-[42px] text-white leading-[46px]"
                style={{ fontFamily: "Frank Ruhl Libre, serif" }}
              >
                {s.big}
              </div>
              <div className="font-semibold text-[#dedede] text-[14px] leading-[20px]">
                {s.small}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArizonaHero;
