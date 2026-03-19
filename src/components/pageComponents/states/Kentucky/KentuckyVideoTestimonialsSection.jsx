import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import TestimonialsSlide1 from "@/assets/images/kentucky/testimonials_slide_1.webp";
import TestimonialsSlide2 from "@/assets/images/kentucky/testimonials_slide_2.webp";
import TestimonialsSlide3 from "@/assets/images/kentucky/testimonials_slide_3.webp";
import TestimonialsSlide4 from "@/assets/images/kentucky/testimonials_slide_4.webp";

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
    videoThumb: TestimonialsSlide1,
  },
  {
    name: "Teresa L.",
    quote: `"The financing is what got me. I couldn't get a bank loan but $199 down and $149/month? That I could do. Now I own land in Yavapai County. Still feels unreal."`,
    videoThumb: TestimonialsSlide2,
  },
  {
    name: "James K.",
    quote: `"Third parcel I've bought from these guys. They're consistent, the titles are clean, and the customer service team actually answers the phone. Rare."`,
    videoThumb: TestimonialsSlide3,
  },
  {
    name: "Sal Villacorta",
    quote: `"Discount lot gave me a opportunity, and I came across a website, and the prices are ridiculously low. That’s the best opportunity there is."`,
    videoThumb: TestimonialsSlide4,
  },
];

function KentuckyVideoTestimonialsSection() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [api, setApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(testimonials.length);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
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
    <section id="testimonials" className="bg-[#114273] py-18">
      <div className="mx-auto flex w-full max-w-[1280px] md:px-8 px-4 flex-col items-center gap-12">
        <div className="flex w-full max-w-[660px] flex-col items-center gap-5 text-center">
          <h6 className="uppercase text-[#e05a28]">Hear It Directly</h6>
          <h2 className="text-white">Video&nbsp;Testimonials</h2>
        </div>

        <div className="w-full relative">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start", slidesToScroll: 1 }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            {/* Desktop arrows (top-right) */}
            <div className="absolute right-0 top-[-10%] w-[112px] hidden items-center gap-4 md:flex">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Previous"
                className="inline-flex size-12 items-center justify-center cursor-pointer rounded-full border border-white bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:opacity-40"
              >
                <ArrowLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canNext}
                aria-label="Next"
                className="inline-flex size-12 items-center justify-center cursor-pointer rounded-full border border-white bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:opacity-40"
              >
                <ArrowRight className="size-6" />
              </button>
            </div>

            <CarouselContent className="-ml-4">
              {testimonials.map((t, idx) => (
                <CarouselItem
                  key={t.name}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="flex h-full flex-col  items-center">
                    <div className="w-full flex gap-2 flex-col rounded-[6px]">
                      <div className="relative h-[480px] w-full overflow-hidden rounded-[16px] bg-black md:h-[606px]">
                        <img
                          alt=""
                          src={t.videoThumb}
                          className="size-full object-fill object-top"
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
                        <p className="max-w-[301px] h-[120px] text-[16px] leading-[23.2px] text-white">
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

            {/* Mobile arrows (below) */}
            <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Previous"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:opacity-40"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canNext}
                aria-label="Next"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:opacity-40"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
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
