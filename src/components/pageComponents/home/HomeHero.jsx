import React from "react";
import BlurImage from "../../common/BlurImage";
import homeHeroDesktop from "../../../assets/images/home/home_hero_desktop.webp";
import homeHeroMobile from "../../../assets/images/home/home_hero_mobile.webp";
import { TickBadgeIcon } from "../../common/IconsSvgs";
import PropertiesSearchCard from "../../common/PropertiesSearchCard";

const ROTATING_HERO_STATES = [
  "North Carolina",
  "Arizona",
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Kentucky",
  "Michigan",
  "Missouri",
  "Nevada",
  "Tennessee",
  "Texas",
];

function HomeHero() {
  const [rotatingHeroStateIndex, setRotatingHeroStateIndex] = React.useState(0);
  const heroRef = React.useRef(null);
  const [showStickyCta, setShowStickyCta] = React.useState(false);

  React.useEffect(() => {
    if (ROTATING_HERO_STATES.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setRotatingHeroStateIndex((i) => (i + 1) % ROTATING_HERO_STATES.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const heroEl = heroRef.current;
      if (!heroEl) return;

      const rect = heroEl.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Show CTA after hero is scrolled + 100px more
      setShowStickyCta(rect.bottom <= viewportHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const rotatingStateLabel =
    ROTATING_HERO_STATES[rotatingHeroStateIndex] ?? "North Carolina";

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-full w-full flex items-center min-h-dvh -mt-(--header-height) pt-(--header-height) text-white"
    >
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

      <div className="relative h-full w-full mx-auto flex max-w-[1280px] flex-col gap-10 px-4 pb-20 pt-6 md:px-8 md:py-10 md:flex-row md:items-center md:justify-between items-center">
        <div className="max-w-[640px] space-y-6">
          <div className="inline-flex items-center gap-2 rounded-[6px] border border-[#ffffff] bg-white/10 px-3 py-4 uppercase tracking-[0.18em] text-[#ffffff]">
            <TickBadgeIcon className="h-5 w-5" />
            <h6 className="!text-[14px]">Secure Your Future</h6>
          </div>

          <div className="space-y-4">
            <h1 className="md:!text-[72px] !text-[36px] leading-[45px] md:!leading-[72px] !font-[700]">
              Own Premium Land for Less Than Your Monthly Rent
            </h1>
            <p className="text-[24px] font-bold leading-[32px] text-[#FFFFFFE5]">
              Affordable Land with Easy Monthly Payments, Starting at
              $200/Month.
            </p>
          </div>

          <ul className="space-y-2 text-sm text-slate-100">
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 items-center justify-center rounded-[4px] text-[#FFFFFF] bg-[#f97316]">
                ✓
              </span>
              <span className="text-[18px] uppercase font-bold leading-[28px] text-[#FFFFFF]">
                No Credit Checks
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 items-center justify-center rounded-[4px] text-[#FFFFFF] bg-[#f97316]">
                ✓
              </span>
              <span className="text-[18px] uppercase font-bold leading-[28px] text-[#FFFFFF]">
                Easy Owner Financing
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-5 w-5 items-center justify-center rounded-[4px] text-[#FFFFFF] bg-[#f97316]">
                ✓
              </span>
              <span className="text-[18px] uppercase font-bold leading-[28px] text-[#FFFFFF]">
                Flexible Terms
              </span>
            </li>
          </ul>
        </div>

        <PropertiesSearchCard rotatingStateLabel={rotatingStateLabel} />
      </div>

      {/* Mobile sticky CTA for Home (shows after hero is scrolled) */}
      {showStickyCta && (
        <div className="fixed bottom-4 inset-x-4 z-20 md:hidden">
          <button
            type="button"
            className="btn-secondary w-full"
            onClick={() => {
              const section = document.getElementById("properties");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.location.hash = "properties";
              }
            }}
          >
            Browse Featured Properties
          </button>
        </div>
      )}
    </section>
  );
}

export default HomeHero;
