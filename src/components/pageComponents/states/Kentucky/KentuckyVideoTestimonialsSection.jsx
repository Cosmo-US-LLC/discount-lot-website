import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle2 } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Marcus R.",
    quote:
      '"I was skeptical at first  buying land online felt risky. But DiscountLots made it so easy. My 5-acre parcel in Mohave County was exactly what was described. Papers signed in 2 days."',
    videoThumb:
      "https://www.figma.com/api/mcp/asset/a4ee53f4-0170-49ef-8b21-9997821489c9",
  },
  {
    name: "Teresa L.",
    quote: `"The financing is what got me. I couldn't get a bank loan but $199 down and $149/month? That I could do. Now I own land in Yavapai County. Still feels unreal."`,
    videoThumb:
      "https://www.figma.com/api/mcp/asset/486da714-68f5-4c4e-8021-3f1d8c6335ae",
  },
  {
    name: "James K.",
    quote: `"Third parcel I've bought from these guys. They're consistent, the titles are clean, and the customer service team actually answers the phone. Rare."`,
    videoThumb:
      "https://www.figma.com/api/mcp/asset/6136775f-eb37-4a0d-9b4a-c94233fca459",
  },
  {
    name: "Sal Villacorta",
    quote: `"Discount lot gave me a opportunity, and I came across a website, and the prices are ridiculously low. That’s the best opportunity there is."`,
    videoThumb:
      "https://www.figma.com/api/mcp/asset/95dd8e95-4dad-47d3-a669-7e5053c7753e",
  },
];

function KentuckyVideoTestimonialsSection() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [api, setApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(testimonials.length);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
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
    <section className="bg-[#114273] px-4 py-20 md:px-8q md:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12">
        <header className="flex w-full max-w-[660px] flex-col items-center gap-5 text-center">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#e05a28]">
            Hear It Directly
          </p>
          <h2 className="text-[36px] font-black leading-[1.1] text-white md:text-[50px]">
            Video&nbsp;Testimonials
          </h2>
        </header>

        <div className="w-full">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, idx) => (
                <CarouselItem
                  key={t.name}
                  className="pl-4 md:basis-1/2 xl:basis-1/4"
                >
                  <article className="flex h-full flex-col items-center">
                    <div className="w-full max-w-[353px] rounded-[16px] bg-black/10 p-2">
                      <div className="relative h-[480px] w-full overflow-hidden rounded-[16px] bg-black md:h-[556px]">
                        <img
                          alt=""
                          src={t.videoThumb}
                          className="absolute inset-0 size-full object-cover"
                          loading={idx === 0 ? "eager" : "lazy"}
                        />
                      </div>

                      <div className="mt-6 flex flex-col items-center gap-4 text-center">
                        <div className="text-[18px] leading-[26.1px] text-[#f7cf2f]">
                          ★ ★ ★ ★ ★
                        </div>
                        <p className="text-[16px] font-bold tracking-[0.4px] text-white">
                          {t.name}
                        </p>
                        <p className="max-w-[301px] text-[16px] leading-[23.2px] text-white">
                          {t.quote}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-center gap-2 text-white">
                        <CheckCircle2 className="size-5 text-[#22bb30]" />
                        <span className="text-[14px] leading-[20.3px]">
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex items-center justify-center">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className="px-[7px] py-[5px]"
              >
                <span
                  className={[
                    "block size-[12px] rounded-[20px] bg-[#869791]",
                    i === selectedIndex ? "opacity-100" : "opacity-50",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KentuckyVideoTestimonialsSection;
