import React from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import TestimonialsVideo1 from "@/assets/images/kentucky/testimonials_video_1.webm";
import TestimonialsVideo2 from "@/assets/images/kentucky/testimonials_video_2.webm";
import TestimonialsVideo3 from "@/assets/images/kentucky/testimonials_video_3.webm";
import TestimonialsVideo4 from "@/assets/images/kentucky/testimonials_video_4.webm";

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
    name: "Lajeanna B.",
    quote:
      '"I was skeptical at first  buying land online felt risky. But DiscountLots made it so easy. My 5-acre parcel in Mohave County was exactly what was described. Papers signed in 2 days."',
    videoSrc: TestimonialsVideo1,
    videoPoster: null,
  },
  {
    name: "Charles R.",
    quote: `"The financing is what got me. I couldn't get a bank loan but $199 down and $149/month? That I could do. Now I own land in Yavapai County. Still feels unreal."`,
    videoSrc: TestimonialsVideo2,
    videoPoster: null,
  },
  {
    name: "Broch C.",
    quote: `"Third parcel I've bought from these guys. They're consistent, the titles are clean, and the customer service team actually answers the phone. Rare."`,
    videoSrc: TestimonialsVideo3,
    videoPoster: null,
  },
  {
    name: "Sal V.",
    quote: `"Discount lot gave me a opportunity, and I came across a website, and the prices are ridiculously low. That’s the best opportunity there is."`,
    videoSrc: TestimonialsVideo4,
    videoPoster: null,
  },
];

function KentuckyVideoTestimonialsSection() {
  const videoRefs = React.useRef([]);

  const pauseAllExcept = React.useCallback((keepIndex) => {
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx !== keepIndex && !v.paused) v.pause();
    });
  }, []);

  const [api, setApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(testimonials.length);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      const nextIndex = api.selectedScrollSnap();
      setSelectedIndex(nextIndex);
      setSnapCount(api.scrollSnapList().length);
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
      // Stop any previously playing video when user changes slides.
      pauseAllExcept(nextIndex);
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api, pauseAllExcept]);

  return (
    <section id="testimonials" className="bg-[#114273] md:py-18 py-12">
      <div className="mx-auto flex w-full max-w-[1280px] md:px-8 px-4 flex-col items-center gap-12">
        <div className="flex w-full md:max-w-[660px] flex-col items-center md:gap-5 gap-4 text-center">
          <h6 className="uppercase text-[#e05a28]">What our Customers Say</h6>
          <h2 className="text-white">Video&nbsp;Testimonials</h2>
        </div>

        <div className="w-full relative">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start", slidesToScroll: 1 }}
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

            <CarouselContent className="">
              {testimonials.map((t, idx) => (
                <CarouselItem
                  key={t.name}
                  className="md:pr-4 basis-full md:lg:basis-[32.5%]"
                >
                  <article className="flex h-full flex-col  items-center">
                    <div className="w-full flex gap-2 flex-col rounded-[6px]">
                      <div className="relative h-[480px] w-full overflow-hidden rounded-[16px] bg-black md:h-[606px]">
                        <video
                          ref={(el) => {
                            videoRefs.current[idx] = el;
                          }}
                          className="size-full object-fill object-top"
                          controls
                          playsInline
                          preload="metadata"
                          poster={t.videoPoster}
                          onPlay={() => pauseAllExcept(idx)}
                        >
                          <source src={t.videoSrc} type="video/webm" />
                          Your browser does not support the video tag.
                        </video>
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
