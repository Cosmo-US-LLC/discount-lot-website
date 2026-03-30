import React from "react";
import { ArrowRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const propertyMapUrl = new URL(
  "https://discountlots.com/property-map",
);
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
  return (
    <section id="properties" className="bg-white px-4 py-12 md:px-[120px] md:py-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start gap-[30px]">
          <h2 className="font-['Frank_Ruhl_Libre',serif] font-black text-[#114273] text-[50px] leading-[1.1] tracking-[-1.2px]">
            Recently Sold Arizona Properties
          </h2>

          <div className="w-full">
            <div className="h-[140px] w-full overflow-hidden">
              <Carousel
                opts={{ loop: true, align: "start", slidesToScroll: 1 }}
                className="w-full"
              >
                <CarouselContent>
                  {recentlySoldCards.map((c) => (
                    <CarouselItem
                      key={c.href}
                      className="basis-full sm:basis-1/2 lg:basis-[20%] pl-2"
                    >
                      <a
                        href={c.href}
                        className="block h-[140px]"
                        aria-label={`Open property ${c.title}`}
                      >
                        <div className="relative h-[140px] w-full rounded-[8px] border border-[rgba(0,0,0,0.06)] bg-white px-[20px] pt-[27px]">
                          <div className="absolute right-[12px] top-[12px] flex h-[20px] w-[52.92px] items-center justify-center rounded-[3px] bg-[#114273]">
                            <span className="text-[11px] font-bold tracking-[1px] text-white">
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
              </Carousel>
            </div>

            <div className="mt-[18px] flex items-center justify-center">
              <button
                type="button"
                onClick={handleBrowse}
                className="flex h-[53px] items-center justify-center rounded-[4px] bg-[#f76d2f] px-[38px] text-white font-bold text-[16px]"
              >
                Browse Available Properties
              </button>
            </div>
          </div>

          <div className="mt-[53px] flex h-[97px] items-center justify-between rounded-[8px] bg-[#fef4f1] px-[32px]">
            <div className="flex flex-col gap-2">
              <div className="text-[#114273] text-[18px] font-bold leading-[1.4]">
                Inventory moves fast in Arizona.
              </div>
              <div className="text-[#114273] text-[14px] opacity-80 leading-[1.4] max-w-[523px]">
                Most closed within 3 days of listing. New inventory arrives every
                week. Want to get notified and be the first in line?
              </div>
            </div>

            <a
              href="https://api.leadconnectorhq.com/widget/bookings/sales-reps-rr"
              className="inline-flex h-[53px] w-[261px] items-center justify-center rounded-[4px] border-2 border-[#f76d2f] text-[#f76d2f] font-bold text-[16px] leading-[1.4]"
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

