import React from "react";
import { ArrowLeft, ArrowRight, ArrowRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ARROW_BTN_DESKTOP =
  "inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-[#114273]/20  text-[#114273] hover:bg-[#114273] hover:text-white backdrop-blur-sm transition disabled:opacity-40";
const ARROW_BTN_MOBILE =
  "inline-flex size-9 items-center justify-center rounded-full border border-[#114273]/20 bg-[#114273]/[0.08] text-[#114273] backdrop-blur-sm transition hover:bg-[#114273]/15 disabled:opacity-40";

const propertyMapUrl = new URL("https://discountlots.com/property-map");
propertyMapUrl.searchParams.set("states", "Arizona");
propertyMapUrl.searchParams.set("counties", "");
propertyMapUrl.searchParams.set("usage", "");
propertyMapUrl.searchParams.set("acreage.min", "0.07");
propertyMapUrl.searchParams.set("acreage.max", "40");
propertyMapUrl.searchParams.set("price.min", "5943");
propertyMapUrl.searchParams.set("price.max", "128999");
propertyMapUrl.searchParams.set("monthly_payment.min", "141");
propertyMapUrl.searchParams.set("monthly_payment.max", "1875");

// These property URLs are reused from the existing project data you provided.
// (Figma shows 5 cards; we display 5 slides with the same link pattern.)
const propertyDetailsLinks = [
  "https://discountlots.com/property/036N13046000100030",
  "https://discountlots.com/property/t1200029100",
  "https://discountlots.com/property/27-09-24-4078-0080-0040",
];

const recentlySoldCards = [
  {
    county: "Coconino County, AZ",
    title: "1.03 Acres in Williams",
    price: "$12,999",
    meta: "Sold in 3 days · Feb 2026",
    href: propertyDetailsLinks[0],
  },
  {
    county: "Pinal County, AZ",
    title: "0.35 Acres in Eloy",
    price: "$12,109",
    meta: "Sold in 22 day · Jan 2026",
    href: propertyDetailsLinks[1],
  },
  {
    county: "Pinal County, AZ",
    title: "0.33 Acres in Eloy",
    price: "$2,115",
    meta: "Sold in 15 days · Jan 2026",
    href: propertyDetailsLinks[2],
  },
  {
    county: "Coconino County, AZ",
    title: "1.14 Acre in Williams",
    price: "$7,971",
    meta: "Sold in 8 days · Dec 2025",
    href: propertyDetailsLinks[0],
  },
  {
    county: "Navajo County, AZ",
    title: "40 Acres Investment Land",
    price: "$29,000",
    meta: "Sold in 4 days · Dec 2023",
    href: propertyDetailsLinks[1],
  },
];

const handleBrowse = () => {
  window.location.href = propertyMapUrl.toString();
};

function ArizonaRecentlySoldPropertiesSection() {
  const [api, setApi] = React.useState(null);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section id="properties" className="bg-white py-12 md:py-18">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-10">
          <h2 className="text-[#114273]">Recently Sold Arizona Properties</h2>
          <div className="w-full flex flex-col gap-10">
            <div className="relative w-full">
              <Carousel
                setApi={setApi}
                opts={{ loop: false, align: "start", slidesToScroll: 1 }}
                className="w-full"
              >
                {/* Desktop arrows (top-right) — matches HomeTestimonials */}
                <div className="absolute right-0 top-[-10%] z-10 hidden w-[112px] items-center gap-4 md:flex">
                  <button
                    type="button"
                    onClick={() => api?.scrollPrev()}
                    disabled={!canPrev}
                    aria-label="Previous properties"
                    className={ARROW_BTN_DESKTOP}
                  >
                    <ArrowLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => api?.scrollNext()}
                    disabled={!canNext}
                    aria-label="Next properties"
                    className={ARROW_BTN_DESKTOP}
                  >
                    <ArrowRight className="size-6" />
                  </button>
                </div>

                <CarouselContent className="ml-0 md:-ml-2 md:pt-14">
                  {recentlySoldCards.map((c, index) => (
                    <CarouselItem
                      key={`${c.title}-${c.meta}-${index}`}
                      className="basis-full sm:basis-1/2 md:basis-[29%] pl-0 md:pl-2"
                    >
                      <a
                        href={c.href}
                        className="block h-[140px]"
                        aria-label={`Open property ${c.title}`}
                      >
                        <div className="relative h-[140px] w-full rounded-[8px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] pt-[27px]">
                          <div className="absolute right-[12px] top-[12px] flex px-2 py-1 items-center justify-center rounded-[4px] bg-[#114273]">
                            <span className="text-[14px] font-bold tracking-[1px] text-white">
                              SOLD
                            </span>
                          </div>

                          <div className="flex flex-col gap-1">
                            <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#1a1208] opacity-65 whitespace-nowrap">
                              {c.county}
                            </div>
                            <div className="text-[15px] font-bold text-[#1a1208] whitespace-nowrap">
                              {c.title}
                            </div>
                            <div className="font-['Frank_Ruhl_Libre',serif] text-[22px] font-bold text-[#1a1208] leading-none">
                              {c.price}
                            </div>
                            <div className="text-[12px] text-[#1a1208] opacity-45 whitespace-nowrap">
                              {c.meta}
                            </div>
                          </div>
                        </div>
                      </a>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Mobile arrows (below) — matches HomeTestimonials */}
                <div
                  className="mt-6 flex items-center justify-center gap-3 md:hidden"
                  role="group"
                  aria-label="Carousel controls"
                >
                  <button
                    type="button"
                    onClick={() => api?.scrollPrev()}
                    disabled={!canPrev}
                    aria-label="Previous properties"
                    className={ARROW_BTN_MOBILE}
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => api?.scrollNext()}
                    disabled={!canNext}
                    aria-label="Next properties"
                    className={ARROW_BTN_MOBILE}
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </Carousel>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={handleBrowse}
                className="flex btn-secondary"
              >
                Browse Available Properties
              </button>
            </div>
          </div>

          <div className="flex w-full px-8 py-8 items-center justify-between rounded-[8px] bg-[#fef4f1]">
            <div className="flex flex-col gap-2">
              <div className="text-[#114273] text-[18px] font-bold leading-[1.4]">
                Inventory moves fast in Arizona.
              </div>
              <div className="text-[#114273] text-[14px] opacity-80 leading-[1.4] max-w-[523px]">
                Most closed within 3 days of listing. New inventory arrives
                every week. Want to get notified and be the first in line?
              </div>
            </div>

            <a
              href="https://api.leadconnectorhq.com/widget/bookings/sales-reps-rr"
              className="inline-flex w-fit btn-secondary items-center justify-center"
            >
              Get Notified Instantly <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArizonaRecentlySoldPropertiesSection;
