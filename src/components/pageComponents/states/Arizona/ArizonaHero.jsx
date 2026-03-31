import React, { useEffect, useRef, useState } from "react";
import arizonaHeroDesktop from "@/assets/images/arizona/arizona_hero_desktop.webp";
import arizonaHeroMobile from "@/assets/images/arizona/arizona_hero_mobile.webp";
import BlurImage from "@/components/common/BlurImage";

function ArizonaHero() {
  const heroRef = useRef(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = heroRef.current;
      if (!heroEl) return;

      const rect = heroEl.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // When bottom of hero enters the viewport, start showing CTA
      setShowStickyCta(rect.bottom <= viewportHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-full md:h-dvh flex items-center pt-[100px] pb-[96px] md:pb-[40px] -mt-(--header-height)"
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
              <h1 className="text-white w-full md:max-w-[759px]">
                Buy Exclusive <br className="hidden max-md:block" /> Off-Market
                Arizona Properties
              </h1>

              <p className="text-[20px] leading-[1.4] text-white/80 max-w-[759px]">
                We buy land below market value and pass the savings directly to
                you. Each property is county-verified for your peace of mind.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[16px] items-center">
            <button
              type="button"
              className="btn-secondary w-full md:w-auto"
            >
              View Hot Properties
            </button>

            <button
              type="button"
              className="btn-secondary w-full md:w-auto !bg-transparent !border-[#ffffff]"
            >
              How Owner Financing Works
            </button>
          </div>
        </div>

        <div className="mt-12 w-full grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:gap-12 items-center justify-center">
          {[
            { big: "30+", small: "Available lots" },
            { big: "$200", small: "Below $200/mo" },
            { big: "3000+", small: "Happy Buyers" },
            { big: "0%", small: "Credit Check" },
          ].map((s) => (
            <div
              key={s.small}
              className="flex flex-col md:gap-2 gap-1 items-center min-w-[120px] whitespace-nowrap"
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

      {/* Mobile sticky CTA for Arizona (shows after hero is scrolled) */}
      {showStickyCta && (
        <div className="fixed bottom-4 inset-x-4 z-20 md:hidden px-4">
          <button
            type="button"
            className="btn-secondary w-full"
            onClick={() => {
              const section = document.getElementById("featured-properties");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            View Hot Properties
          </button>
        </div>
      )}
    </section>
  );
}

export default ArizonaHero;
