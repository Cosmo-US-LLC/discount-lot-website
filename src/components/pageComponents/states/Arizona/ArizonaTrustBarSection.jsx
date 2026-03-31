import React from "react";
import bbbLogo from "@/assets/images/home/bbb.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import googleReviewIcon from "@/assets/images/arizona/google_review.svg";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
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
        d="M6.10183 3.60528C6.9465 2.09062 7.3685 1.33328 7.99983 1.33328C8.63116 1.33328 9.05316 2.09062 9.89783 3.60528L10.1165 3.99728C10.3565 4.42795 10.4765 4.64328 10.6632 4.78528C10.8498 4.92728 11.0832 4.97995 11.5498 5.08528L11.9738 5.18128C13.6138 5.55262 14.4332 5.73795 14.6285 6.36528C14.8232 6.99195 14.2645 7.64595 13.1465 8.95328L12.8572 9.29128C12.5398 9.66262 12.3805 9.84862 12.3092 10.0779C12.2378 10.3079 12.2618 10.5559 12.3098 11.0513L12.3538 11.5026C12.5225 13.2473 12.6072 14.1193 12.0965 14.5066C11.5858 14.8939 10.8178 14.5406 9.28316 13.8339L8.88516 13.6513C8.44916 13.4499 8.23116 13.3499 7.99983 13.3499C7.7685 13.3499 7.5505 13.4499 7.1145 13.6513L6.71716 13.8339C5.18183 14.5406 4.41383 14.8939 3.90383 14.5073C3.3925 14.1193 3.47716 13.2473 3.64583 11.5026L3.68983 11.0519C3.73783 10.5559 3.76183 10.3079 3.68983 10.0786C3.61916 9.84862 3.45983 9.66261 3.1425 9.29195L2.85316 8.95328C1.73516 7.64662 1.1765 6.99262 1.37116 6.36528C1.56583 5.73795 2.3865 5.55195 4.0265 5.18128L4.4505 5.08528C4.9165 4.97995 5.14916 4.92728 5.3365 4.78528C5.52383 4.64328 5.64316 4.42795 5.88316 3.99728L6.10183 3.60528Z"
        fill="#143250"
      />
      <path
        d="M3.90383 14.5073C4.41383 14.8939 4.96467 14.6251 6.5 13.9184V3L6.10183 3.60526L5.88316 3.99726L5.87878 4.00513C5.6417 4.43055 5.52269 4.64412 5.3365 4.78525C5.14916 4.92725 4.9165 4.97992 4.4505 5.08525L4.0265 5.18125C2.3865 5.55192 1.56583 5.73792 1.37116 6.36526C1.1765 6.99259 1.73516 7.64659 2.85316 8.95326L3.1425 9.29192L3.14322 9.29276C3.46007 9.66287 3.61922 9.84876 3.68983 10.0786C3.76183 10.3079 3.73783 10.5559 3.68983 11.0519L3.64583 11.5026L3.64549 11.5061C3.47705 13.2484 3.39284 14.1195 3.90383 14.5073Z"
        fill="#FFB843"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 4 }).map((_, idx) => (
        <span key={idx} aria-hidden="true">
          <StarIcon />
        </span>
      ))}
      <span aria-hidden="true">
        <StarIconPartial />
      </span>
    </div>
  );
}

function ArizonaTrustBarSection() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section className="bg-[#114273] py-6">
      <div className="md:mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col md:flex-row gap-6">
        <Carousel
          className="md:hidden flex justify-center w-full"
          opts={{ loop: true }}
          plugins={[autoplay.current]}
        >
          <CarouselContent>
            <CarouselItem className="basis-full">
              <div className="flex w-full justify-center ">
                <div className="flex w-full max-w-[280px] flex-col items-start gap-[10px] text-left">
                  <StarRow />
                  <div className="flex items-center gap-[6px] text-[14px] text-white/90">
                    <span aria-hidden="true" className="shrink-0">
                      <img src={googleReviewIcon} alt="" className="h-5 w-5" />
                    </span>
                    <span>4.9 · 900+ Reviews</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="flex w-full justify-center px-2">
                <div className="flex w-full max-w-[280px] flex-col items-start gap-[10px] text-left">
                  <StarRow />
                  <div className="text-[14px] text-white/90">
                    4.7 Rating on Trustpilot
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="flex w-full justify-center px-2">
                <div className="flex max-w-[280px] items-center gap-[12px] text-left">
                  <img
                    src={bbbLogo}
                    alt="BBB Accredited"
                    className="h-[40px] w-[40px] shrink-0 object-contain"
                  />
                  <div className="text-[14px] text-white/90">
                    BBB Accredited A- Rating
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center gap-[200px] w-full justify-center">
          <div className="flex flex-col gap-[10px] text-left">
            <StarRow />
            <div className="flex items-center gap-[6px] text-[14px] text-white/90">
              <span aria-hidden="true" className="text-[14px]">
                <img
                  src={googleReviewIcon}
                  alt="Google Review"
                  className="w-6 h-6"
                />
              </span>
              <span>4.9 · 900+ Reviews</span>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] text-left">
            <StarRow />
            <div className="text-[14px] text-white/90">
              4.7 Rating on Trustpilot
            </div>
          </div>

          <div className="flex items-center gap-[12px]">
            <img
              src={bbbLogo}
              alt="BBB Accredited"
              className="h-12 w-12 object-contain"
            />
            <div className="text-[14px] text-white/90 whitespace-nowrap">
              BBB Accredited A- Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArizonaTrustBarSection;
