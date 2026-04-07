import React from "react";
import bbbLogo from "@/assets/images/home/bbb.svg";
import googleReviewIcon from "@/assets/images/arizona/google_review.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.10183 3.60501C6.9465 2.09034 7.3685 1.33301 7.99983 1.33301C8.63116 1.33301 9.05316 2.09034 9.89783 3.60501L10.1165 3.99701C10.3565 4.42767 10.4765 4.64301 10.6632 4.78501C10.8498 4.92701 11.0832 4.97967 11.5498 5.08501L11.9738 5.18101C13.6138 5.55234 14.4332 5.73767 14.6285 6.36501C14.8232 6.99167 14.2645 7.64567 13.1465 8.95301L12.8572 9.29101C12.5398 9.66234 12.3805 9.84834 12.3092 10.0777C12.2378 10.3077 12.2618 10.5557 12.3098 11.051L12.3538 11.5023C12.5225 13.247 12.6072 14.119 12.0965 14.5063C11.5858 14.8937 10.8178 14.5403 9.28316 13.8337L8.88516 13.651C8.44916 13.4497 8.23116 13.3497 7.99983 13.3497C7.7685 13.3497 7.5505 13.4497 7.1145 13.651L6.71716 13.8337C5.18183 14.5403 4.41383 14.8937 3.90383 14.507C3.3925 14.119 3.47716 13.247 3.64583 11.5023L3.68983 11.0517C3.73783 10.5557 3.76183 10.3077 3.68983 10.0783C3.61916 9.84834 3.45983 9.66234 3.1425 9.29167L2.85316 8.95301C1.73516 7.64634 1.1765 6.99234 1.37116 6.36501C1.56583 5.73767 2.3865 5.55167 4.0265 5.18101L4.4505 5.08501C4.9165 4.97967 5.14916 4.92701 5.3365 4.78501C5.52383 4.64301 5.64316 4.42767 5.88316 3.99701L6.10183 3.60501Z"
        fill="#FFB843"
      />
    </svg>
  );
}

function StarIconPartial() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.10085 3.60501C6.94552 2.09034 7.36752 1.33301 7.99885 1.33301C8.63019 1.33301 9.05219 2.09034 9.89685 3.60501L10.1155 3.99701C10.3555 4.42767 10.4755 4.64301 10.6622 4.78501C10.8489 4.92701 11.0822 4.97967 11.5489 5.08501L11.9729 5.18101C13.6129 5.55234 14.4322 5.73767 14.6275 6.36501C14.8222 6.99167 14.2635 7.64567 13.1455 8.95301L12.8562 9.29101C12.5389 9.66234 12.3795 9.84834 12.3082 10.0777C12.2369 10.3077 12.2609 10.5557 12.3089 11.051L12.3529 11.5023C12.5215 13.247 12.6062 14.119 12.0955 14.5063C11.5849 14.8937 10.8169 14.5403 9.28219 13.8337L8.88419 13.651C8.44819 13.4497 8.23019 13.3497 7.99885 13.3497C7.76752 13.3497 7.54952 13.4497 7.11352 13.651L6.71619 13.8337C5.18085 14.5403 4.41285 14.8937 3.90285 14.507C3.39152 14.119 3.47619 13.247 3.64485 11.5023L3.68885 11.0517C3.73685 10.5557 3.76085 10.3077 3.68885 10.0783C3.61819 9.84834 3.45885 9.66234 3.14152 9.29167L2.85219 8.95301C1.73419 7.64634 1.17552 6.99234 1.37019 6.36501C1.56485 5.73767 2.38552 5.55167 4.02552 5.18101L4.44952 5.08501C4.91552 4.97967 5.14819 4.92701 5.33552 4.78501C5.52285 4.64301 5.64219 4.42767 5.88219 3.99701L6.10085 3.60501Z"
        fill="#CCCCCC"
      />
      <path
        d="M6.10219 3.60261L6.10085 3.60501L5.88219 3.99701L5.8778 4.00488C5.64073 4.4303 5.52171 4.64388 5.33552 4.78501C5.14819 4.92701 4.91552 4.97967 4.44952 5.08501L4.02552 5.18101C2.38552 5.55167 1.56485 5.73767 1.37019 6.36501C1.17552 6.99234 1.73419 7.64634 2.85219 8.95301L3.14152 9.29167L3.14224 9.29251C3.45909 9.66262 3.61824 9.84851 3.68885 10.0783C3.76085 10.3077 3.73685 10.5557 3.68885 11.0517L3.64485 11.5023L3.64452 11.5058C3.47608 13.2482 3.39186 14.1193 3.90285 14.507C4.41285 14.8937 5.18085 14.5403 6.71619 13.8337L7.11352 13.651C7.54952 13.4497 7.76752 13.3497 7.99885 13.3497V1.33301C7.36785 1.33301 6.94597 2.08954 6.10219 3.60261Z"
        fill="#FFB843"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex items-center">
      {Array.from({ length: 4 }).map((_, idx) => (
        <span key={idx}>
          <StarIcon />
        </span>
      ))}
      <span>
        <StarIconPartial />
      </span>
    </div>
  );
}

function HomeSocialProof() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section className="bg-[#eee] border-[#f9fafb] border-b border-t border-solid py-10">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-10">
          {/* Mobile carousel */}
          <Carousel
            className="md:hidden w-full"
            opts={{ loop: true }}
            plugins={[autoplay.current]}
          >
            <CarouselContent>
              <CarouselItem className="basis-full">
                <div className="flex w-full justify-center">
                  <div className="flex w-full max-w-[320px] items-center gap-3 text-left">
                    <img
                      src={bbbLogo}
                      alt="BBB Accredited"
                      className="h-10 w-10 shrink-0 object-contain"
                    />
                    <div className="text-[13px] text-[#4a4f54] whitespace-nowrap">
                      BBB Accredited A- Rating
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="flex w-full justify-center">
                  <div className="flex w-full max-w-[320px] flex-col items-start gap-[10px] text-left">
                    <StarRow />
                    <div className="flex items-center gap-[6px] text-[13px] text-[#4a4f54]">
                      <span aria-hidden="true" className="shrink-0">
                        <img
                          src={googleReviewIcon}
                          alt=""
                          className="h-4 w-4"
                        />
                      </span>
                      <span>4.9 · 900+ Reviews</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="flex w-full justify-center">
                  <div className="flex w-full max-w-[320px] flex-col items-start gap-[10px] text-left">
                    <StarRow />
                    <div className="text-[13px] text-[#4a4f54] whitespace-nowrap">
                      4.7 Rating on Trustpilot
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          {/* Desktop trust row */}
          <div className="hidden md:flex items-center gap-14">
            <div className="flex items-center gap-3">
              <img
                src={bbbLogo}
                alt="BBB Accredited"
                className="h-12 w-12 shrink-0 object-contain"
              />
              <div className="text-[13px] text-[#4a4f54] whitespace-nowrap">
                BBB Accredited A- Rating
              </div>
            </div>

            <div className="flex flex-col gap-[10px] items-start w-[126px]">
              <StarRow />
              <div className="flex items-center gap-[6px] text-[13px] text-[#4a4f54] whitespace-nowrap">
                <span aria-hidden="true" className="shrink-0">
                  <img src={googleReviewIcon} alt="" className="h-4 w-4" />
                </span>
                <span>4.9 · 900+ Reviews</span>
              </div>
            </div>

            <div className="flex flex-col gap-[10px] items-start w-[130px]">
              <StarRow />
              <div className="text-[13px] text-[#4a4f54] whitespace-nowrap">
                4.7 Rating on Trustpilot
              </div>
            </div>
          </div>

          <div className="bg-white border border-[rgba(72,156,216,0.1)] rounded-full px-4 md:px-6 py-3">
            <div className="text-[#489cd8] md:text-[14px] text-[12px] font-bold uppercase tracking-[0px] md:tracking-[3px] whitespace-nowrap">
              3,000+ Land OWNERS • 900+ VERIFIED 5-STAR REVIEWS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSocialProof;
