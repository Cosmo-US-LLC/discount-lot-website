import React from "react";
import BlurImage from "../../common/BlurImage";
import homeHeroDesktop from "../../../assets/images/home/home_hero_desktop.webp";
import homeHeroMobile from "../../../assets/images/home/home_hero_mobile.webp";
import { TickBadgeIcon, SearchIcon } from "../../common/IconsSvgs";

function HomeHero() {
  return (
    <section className="relative h-full w-full flex items-center min-h-dvh -mt-(--header-height) pt-(--header-height) text-white">
      <div className="absolute inset-0">
        <div className="hidden h-full w-full md:block">
          <BlurImage
            src={homeHeroDesktop}
            alt="Rolling farmland at sunset"
            blurhash="LE84lE%1oJbb?dxZa}kCkYjEkCj["
            className="h-full w-full"
          />
        </div>
        <div className="h-full w-full md:hidden">
          <BlurImage
            src={homeHeroMobile}
            alt="Rolling farmland at sunset"
            blurhash="LE84lE%1oJbb?dxZa}kCkYjEkCj["
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="relative h-full w-full mx-auto flex max-w-[1280px] flex-col gap-10 px-4 py-6 md:px-8 md:py-10 md:flex-row md:items-center md:justify-between items-center">
        <div className="max-w-[640px] space-y-6">
          <div className="inline-flex items-center gap-2 rounded-[6px] border border-[#ffffff] bg-white/10 px-3 py-4 uppercase tracking-[0.18em] text-[#ffffff]">
            <TickBadgeIcon className="h-5 w-5" />
            <h6 className="">Secure Your Future</h6>
          </div>

          <div className="space-y-4">
            <h1 className="">
              Own Premium Land for Less Than Your Monthly Rent
            </h1>
            <p className="text-[24px] font-[700] leading-[32px] text-[#FFFFFFE5]">
              Affordable land with easy monthly payments, starting at
              $200/month.
            </p>
          </div>

          <ul className="space-y-2 text-sm text-slate-100">
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 items-center justify-center rounded-[4px] text-[#FFFFFF] bg-[#f97316]">
                ✓
              </span>
              <span className="text-[18px] font-[700] leading-[28px] text-[#FFFFFF]">
                No credit checks
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 items-center justify-center rounded-[4px] text-[#FFFFFF] bg-[#f97316]">
                ✓
              </span>
              <span className="text-[18px] font-[700] leading-[28px] text-[#FFFFFF]">
                Fast digital closing
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 items-center justify-center rounded-[4px] text-[#FFFFFF] bg-[#f97316]">
                ✓
              </span>
              <span className="text-[18px] font-[700] leading-[28px] text-[#FFFFFF]">
                Flexible terms
              </span>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-[460px] rounded-[16px] bg-white px-6 py-8 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.25)] backdrop-blur-md">
          <div className="flex flex-col gap-2.5 items-center text-center">
            <h2 className="font-bold !text-[30px] !leading-[36px] !tracking-[-0.75px] text-[#1f5c94]">
              Find Your Land
            </h2>
            <p className="text-base leading-6 text-[#6b7280]">
              Search{" "}
              <span className="font-bold text-[#114273]">North Carolina</span>{" "}
              properties now
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-8">
            <div className="flex flex-col gap-3 pb-6">
              <div className="flex gap-3">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase leading-5 text-[#114273]">
                    Location
                  </label>
                  <div className="flex h-[52px] items-center rounded-[6px] border border-[#e5e7eb] px-4 py-3.5">
                    <span className="text-sm leading-[22px] text-[#04213f] opacity-50">
                      Select State
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase leading-5 text-[#114273]">
                    Budget
                  </label>
                  <div className="flex h-[52px] items-center rounded-[6px] border border-[#e5e7eb] px-4 py-3.5">
                    <span className="text-sm leading-[22px] text-[#04213f] opacity-50">
                      Range
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase leading-5 text-[#114273]">
                  Desired Acreage
                </label>
                <div className="flex flex-col gap-3">
                  <div className="relative h-6 w-full">
                    <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#e5e7eb]">
                      <div className="absolute left-0 right-0 top-0 h-1.5 rounded-full bg-[#f76d2f]" />
                    </div>
                    <div className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-[10px] border-2 border-[#f76d2f] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]" />
                    <div className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-[10px] border-2 border-[#f76d2f] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-end gap-0.5">
                      <span className="text-xl font-bold leading-7 text-[#114273]">
                        0.00 - 50.00
                      </span>
                      <span className="text-[10px] leading-5 text-[#9ca3af]">
                        Acres
                      </span>
                    </div>
                    <button
                      type="button"
                      className="rounded px-2 py-1 text-xs font-semibold uppercase leading-[18px] text-[#f76d2f]"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 btn-secondary text-white hover:text-[#f76d2f]"
              >
                <SearchIcon className="h-5 w-5 " />
                Search Now
              </button>
              <p className="text-center text-base leading-6 text-[#030712]">
                New properties listed <span className="font-bold">daily</span>,
                high-demand lots sell fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
