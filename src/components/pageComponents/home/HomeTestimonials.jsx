import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import googleIcon from "@/assets/images/kentucky/google.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "LaJeanna Brooks",
    quote:
      "The process was extremely easy... it was a super smooth transition. They're very communicative. They will show you the ropes and they will definitely put you in peace.",
    videoThumb:
      "https://www.figma.com/api/mcp/asset/4bed7f00-3d7f-4a74-9974-e2a63c2e5b66",
  },
  {
    name: "Charles Riggs",
    quote:
      "I've been with Discount Lots for a few years. I purchased a property... It was a no money down situation. So I thought it would be a good investment.",
    videoThumb:
      "https://www.figma.com/api/mcp/asset/e4de5070-9761-4362-aa4e-b88fa24f78f2",
  },
  {
    name: "Broch Clinton",
    quote:
      '"10 out of 10. I believe it’ll be an incredible asset in the future so I feel really good about it."',
    videoThumb:
      "https://www.figma.com/api/mcp/asset/0fe832cc-190f-4053-b143-c7f13a0b14d1",
  },
  {
    name: "Sal Villacorta",
    quote:
      '"Discount lot gave me a opportunity, and I came across a website, and the prices are ridiculously low. That’s the best opportunity there is."',
    videoThumb:
      "https://www.figma.com/api/mcp/asset/95dd8e95-4dad-47d3-a669-7e5053c7753e",
  },
];

function HomeTestimonials() {
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
    <section id="reviews" className="bg-[#114273] py-18">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-4 md:px-8">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
          <h6 className="uppercase text-[#e05a28]">Testimonials</h6>
          <h2 className="text-white">Hear From Land Owners Like Yours</h2>
          <p className="text-white">
            Over 3,000+ properties sold to satisfied buyers across the nation.
          </p>
          <div className="mx-auto mt-4 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-white">
            <img
              src={googleIcon}
              alt="Google"
              className="h-5 w-5"
              loading="lazy"
            />
            <span className="inline-flex items-center gap-1 text-[#f76d2f]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                />
              ))}
            </span>
            <span className="text-[14px] font-bold leading-7 md:text-[18px]">
              4.9/5 Google Rating
            </span>
          </div>
        </div>

        <div className="relative w-full">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start", slidesToScroll: 1 }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <div className="absolute right-0 top-[-10%] hidden w-[112px] items-center gap-4 md:flex">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Previous"
                className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-white bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:opacity-40"
              >
                <ArrowLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canNext}
                aria-label="Next"
                className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-white bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:opacity-40"
              >
                <ArrowRight className="size-6" />
              </button>
            </div>

            <CarouselContent className="-ml-4">
              {testimonials.map((t, idx) => (
                <CarouselItem
                  key={t.name}
                  className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="flex h-full flex-col items-center">
                    <div className="flex w-full flex-col gap-2 rounded-[6px]">
                      <div className="relative h-[480px] w-full overflow-hidden rounded-[16px] bg-black md:h-[606px]">
                        <img
                          alt={t.name}
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
                        <p className="h-[120px] max-w-[301px] text-[16px] leading-[23.2px] text-white">
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

export default HomeTestimonials;
