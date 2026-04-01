import React, { useEffect, useRef, useState } from "react";
import heroImageDesktop from "@/assets/images/kentucky/kentucky_hero_desktop.webp";
import heroImageMobile from "@/assets/images/kentucky/kentucky_hero_mobile.webp";
import BlurImage from "@/components/common/BlurImage";
import { ArrowRightIcon } from "lucide-react";

function KentuckyHero() {
  const heroRef = useRef(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = heroRef.current;
      if (!heroEl) return;

      const rect = heroEl.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Show CTA after hero is scrolled + 100px more
      setShowStickyCta(rect.bottom <= viewportHeight - 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] w-full flex items-center pt-[120px] pb-[96px] md:pb-[40px] -mt-(--header-height) text-white"
    >
      <div className="absolute inset-0">
        <div className="hidden h-full w-full md:block">
          <BlurImage
            src={heroImageDesktop}
            alt="Rolling farmland at sunset"
            blurhash="LE84lE%1oJbb?dxZa}kCkYjEkCj["
            className="h-full w-full"
          />
        </div>
        <div className="h-full w-full md:hidden">
          <BlurImage
            src={heroImageMobile}
            alt="Rolling farmland at sunset"
            blurhash="LE84lE%1oJbb?dxZa}kCkYjEkCj["
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="mx-auto z-1 flex max-w-[1280px] md:px-8 px-4 flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="inline-flex items-center text-white rounded-[6px] border border-white px-4 py-3 text-[14px] font-bold uppercase tracking-[0.08em]">
            New Kentucky Subdivision
          </div>

          <div>
            <h1 className="font-black">
              <span>Kentucky </span> <br className="md:hidden block" />
              <span className="text-[#f76d2f]">Wolf Creek Reserve</span>
              <p className="font-black">Clinton County, KY</p>
            </h1>
          </div>

          <div className="md:max-w-[736px] max-w-full body-description">
            43 private lots tucked into the south-central Kentucky no zoning
            restrictions, no banks, no middlemen. Owner financing starts at just
            $500 down insert.
          </div>
        </div>

        {/* <div className="hidden max-md:block " /> */}
        <div className="hidden max-md:block">
          <a
            href="https://discountlots.com/property-map?states=Kentucky&counties=Clinton&usage=&acreage.min=0.07&acreage.max=40&price.min=5943&price.max=128999&monthly_payment.min=141&monthly_payment.max=1875"
            className=" inline-flex items-center gap-2 bg-[#f76d2f] hover:bg-transparent! btn-secondary"
          >
            View Available Lots &amp; Pricing
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="flex md:max-w-[626px] max-w-full flex-wrap items-center justify-center md:gap-3 gap-2">
          {[
            "43 Available Lots",
            "No Zoning Restrictions",
            "Owner Financing Available",
            "Water & Power at Road",
            "Paved Road Access",
          ].map((label) => (
            <div
              key={label}
              className="backdrop-blur-[2px] rounded-full border border-white/20 bg-white/10 px-4 md:px-6 py-2 md:text-[14px] text-[12px] font-semibold text-white"
            >
              {label}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://discountlots.com/property-map?states=Kentucky&counties=Clinton&usage=&acreage.min=0.07&acreage.max=40&price.min=5943&price.max=128999&monthly_payment.min=141&monthly_payment.max=1875"
            className="mt-2 inline-flex items-center gap-2 bg-[#f76d2f] hover:bg-transparent! btn-secondary"
          >
            View Available Lots &amp; Pricing
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Mobile sticky CTA for Kentucky (shows after hero is scrolled) */}
      {showStickyCta && (
        <div className="fixed bottom-4 inset-x-4 z-20 md:hidden px-4">
          <a
            href="https://discountlots.com/property-map?states=Kentucky&counties=Clinton&usage=&acreage.min=0.07&acreage.max=40&price.min=5943&price.max=128999&monthly_payment.min=141&monthly_payment.max=1875"
            className="inline-flex w-full items-center justify-center gap-2 bg-[#f76d2f] btn-secondary"
          >
            View Available Lots &amp; Pricing
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      )}
    </section>
  );
}

export default KentuckyHero;
