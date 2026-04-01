import React from "react";
import why_now_slide_1 from "@/assets/images/kentucky/why_now_slide_1.webp";
import why_now_slide_2 from "@/assets/images/kentucky/why_now_slide_2.webp";
import why_now_slide_3 from "@/assets/images/kentucky/why_now_slide_3.webp";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const pills = [
  {
    top: "18 miles to Wolf Creek Dam ",
    bottom: "A Recreation hub",
  },
  {
    top: "Minutes from Wolf Creek Hatchery",
    bottom: "Nestled in nature",
  },
  {
    top: "Minutes from Wolf River ",
    bottom: "Experience Nature, adventure, & peace",
  },
  {
    top: "25 miles to Russell County ",
    bottom: "Affordable land in a high-potential area",
  },
];

function KentuckyFullPictureSection() {
  const slides = [why_now_slide_1, why_now_slide_2, why_now_slide_3];
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );
  const [api, setApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(slides.length);

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
    <section className="bg-white md:py-18 py-12">
      <div className="mx-auto flex w-full max-w-[1280px] px-4 md:px-8 flex-col items-center justify-between md:gap-12 gap-10 lg:flex-row lg:items-start lg:gap-10">
        <div className="w-full lg:flex-1">
          <div className="flex w-full max-w-[706px] flex-col items-start gap-[30px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h6 className=" text-[#f76d2f]">The Full Picture</h6>
                <h2 className="text-[#114273]">
                  Why Kentucky. Why <br className="md:hidden block" /> Wolf
                  Creek Reserve. <br className="md:hidden block" /> Why Now.
                </h2>
              </div>

              <div className="description text-[#000000]">
                <p>
                  Picture this: your land, minutes from Wolf Creek Dam and the
                  largest man-made lake east of the Mississippi. Wolf Creek
                  Reserve , 43 prime lots nestled in the heart of Clinton
                  County, Kentucky. The kind of location people search years
                  for. No HOA. No restrictions. No deadline to build. Park an
                  RV, build your dream home, or hold it as an investment.
                  Whatever fits your plans.
                </p>
                {/* <p className="mt-6">
                  Accessible,{" "}
                  <span className="font-bold">
                    the infrastructure is already waiting.
                  </span>{" "}
                  Water and power are available on site, which on land like this
                  is genuinely rare.
                </p> */}
              </div>
            </div>

            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                {pills.slice(0, 2).map((pill) => (
                  <div
                    key={pill.top}
                    className="flex w-full items-center justify-center rounded-[40px] border border-[#114273]/40 bg-[#114273]/10 px-4 py-3 text-center text-[#114273] backdrop-blur-[2px]"
                  >
                    <div>
                      <p className="text-[16px] font-bold leading-[1.4]">
                        {pill.top}
                      </p>
                      <p className="text-[16px] leading-[1.4]">{pill.bottom}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                {pills.slice(2, 4).map((pill) => (
                  <div
                    key={pill.top}
                    className="flex w-full items-center justify-center rounded-[40px] border border-[#114273]/40 bg-[#114273]/10 px-4 py-3 text-center text-[#114273] backdrop-blur-[2px]"
                  >
                    <div>
                      <p className="text-[16px] font-bold leading-[1.4]">
                        {pill.top}
                      </p>
                      <p className="text-[16px] leading-[1.4]">{pill.bottom}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[566px] lg:flex-none">
          <div className="flex flex-col items-center gap-[18px]">
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[autoplay.current]}
              className="w-full"
            >
              <CarouselContent>
                {slides.map((src, idx) => (
                  <CarouselItem key={src}>
                    <div className="relative h-[250px] w-full overflow-hidden rounded-[8px] md:h-[498px]">
                      <img
                        alt=""
                        src={src}
                        className="absolute left-[-6.17%] top-[0.01%] h-[99.97%] w-[113.89%] max-w-none"
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex items-center justify-center gap-[10px]">
              {Array.from({ length: snapCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={[
                    "size-[10px] rounded-full transition-colors",
                    i === selectedIndex ? "bg-[#114273]" : "bg-[#114273]/25",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KentuckyFullPictureSection;
