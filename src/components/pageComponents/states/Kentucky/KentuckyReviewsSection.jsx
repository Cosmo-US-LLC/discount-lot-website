import React from "react";
import googleIcon from "@/assets/images/kentucky/google.svg";
import bbbIcon from "@/assets/images/kentucky/bbb.svg";
import trustpilotIcon from "@/assets/images/kentucky/trustpilot.svg";
import facebookIcon from "@/assets/images/kentucky/facebook.svg";

const platforms = [
  {
    name: "Google Reviews",
    summary: "★★★★★ 4.9 · 530+ reviews",
    icon: googleIcon,
  },
  {
    name: "BBB Accredited",
    summary: "★★★★★ A- Rating",
    icon: bbbIcon,
  },
  {
    name: "Trustpilot",
    summary: "★★★★★ 4.8 · 200+ reviews",
    icon: null,
  },
  {
    name: "Facebook",
    summary: "92% Recommended (96 Reviews)",
    icon: facebookIcon,
  },
];

const quotes = [
  {
    text: "The process was incredibly simple. From browsing to closing in less than a week I couldn't believe how fast it went. My Land Specialist answered every question I had. I'm already looking at my second lot.",
    attribution: "— Verified Google Reviewer",
    meta: "Google · 5 Stars",
  },
  {
    text: "I never thought I could own land. No credit check, affordable payments, and a team that actually picks up the phone. Discount Lots is the real deal. Highly recommend to anyone looking to invest in their future.",
    attribution: "— Verified Trustpilot Reviewer",
    meta: "Trustpilot · 5 Stars",
  },
  {
    text: "Bought two lots now and plan to buy a third. The Portfolio Manager team has been amazing after the purchase — they keep you in the loop and actually care about what you're building toward. Refreshing.",
    attribution: "— Verified BBB Reviewer",
    meta: "BBB · 5 Stars",
  },
];

function StarIconFilled() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="inline-block align-[-2px]"
    >
      <path
        d="M6.10208 3.60501C6.94674 2.09034 7.36874 1.33301 8.00007 1.33301C8.63141 1.33301 9.05341 2.09034 9.89807 3.60501L10.1167 3.99701C10.3567 4.42767 10.4767 4.64301 10.6634 4.78501C10.8501 4.92701 11.0834 4.97967 11.5501 5.08501L11.9741 5.18101C13.6141 5.55234 14.4334 5.73767 14.6287 6.36501C14.8234 6.99167 14.2647 7.64567 13.1467 8.95301L12.8574 9.29101C12.5401 9.66234 12.3807 9.84834 12.3094 10.0777C12.2381 10.3077 12.2621 10.5557 12.3101 11.051L12.3541 11.5023C12.5227 13.247 12.6074 14.119 12.0967 14.5063C11.5861 14.8937 10.8181 14.5403 9.28341 13.8337L8.88541 13.651C8.44941 13.4497 8.23141 13.3497 8.00007 13.3497C7.76874 13.3497 7.55074 13.4497 7.11474 13.651L6.71741 13.8337C5.18208 14.5403 4.41408 14.8937 3.90408 14.507C3.39274 14.119 3.47741 13.247 3.64608 11.5023L3.69008 11.0517C3.73808 10.5557 3.76208 10.3077 3.69008 10.0783C3.61941 9.84834 3.46008 9.66234 3.14274 9.29167L2.85341 8.95301C1.73541 7.64634 1.17674 6.99234 1.37141 6.36501C1.56608 5.73767 2.38674 5.55167 4.02674 5.18101L4.45074 5.08501C4.91674 4.97967 5.14941 4.92701 5.33674 4.78501C5.52408 4.64301 5.64341 4.42767 5.88341 3.99701L6.10208 3.60501Z"
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
      aria-hidden="true"
      className="inline-block align-[-2px]"
    >
      <path
        d="M12.3221 11.178C11.4109 11.3968 10.4596 11.3862 9.55347 11.1472C8.64735 10.9081 7.81466 10.4481 7.12997 9.80825C6.44528 9.16841 5.92996 8.36875 5.63015 7.48088C5.33035 6.593 5.25542 5.64464 5.41208 4.7207C5.38861 4.7441 5.36343 4.76572 5.33674 4.78537C5.15008 4.92737 4.91674 4.98004 4.45008 5.08537L4.02674 5.18137C2.38674 5.5527 1.56674 5.73804 1.37141 6.36537C1.17674 6.99204 1.73541 7.64604 2.85341 8.95337L3.14274 9.29137C3.46008 9.6627 3.61941 9.8487 3.69074 10.078C3.76208 10.308 3.73808 10.556 3.69008 11.0514L3.64608 11.5027C3.47741 13.2474 3.39274 14.1194 3.90341 14.5067C4.41408 14.894 5.18208 14.5414 6.71674 13.834L7.11474 13.6514C7.55074 13.45 7.76874 13.35 8.00007 13.35C8.23141 13.35 8.44941 13.45 8.88608 13.6514L9.28274 13.834C10.8181 14.5407 11.5861 14.894 12.0961 14.5074C12.6074 14.1194 12.5227 13.2474 12.3541 11.5027L12.3221 11.178Z"
        fill="#FFB843"
      />
      <path
        opacity="0.06"
        d="M6.10204 3.60501L5.88338 3.99701C5.64338 4.42767 5.52338 4.64301 5.33671 4.78501C5.36338 4.76501 5.38849 4.74345 5.41204 4.72034C5.25535 5.64435 5.33027 6.59279 5.63011 7.48073C5.92995 8.36867 6.44533 9.16838 7.13011 9.80824C7.81489 10.4481 8.64768 10.9081 9.55389 11.1471C10.4601 11.3861 11.4114 11.3966 12.3227 11.1777L12.3094 11.051C12.262 10.5557 12.238 10.3077 12.3094 10.0777C12.3807 9.84834 12.5394 9.66234 12.8574 9.29101L13.1467 8.95301C14.2647 7.64634 14.8234 6.99234 14.628 6.36501C14.4334 5.73767 13.6134 5.55167 11.9734 5.18101L11.5494 5.08501C11.0834 4.97967 10.85 4.92701 10.6627 4.78501C10.476 4.64301 10.356 4.42767 10.116 3.99701L9.89804 3.60501C9.05338 2.09034 8.63138 1.33301 8.00004 1.33301C7.36871 1.33301 6.94671 2.09034 6.10204 3.60501Z"
        fill="black"
      />
    </svg>
  );
}

function StarText({ text }) {
  // Color only the star glyphs while keeping the rest of the summary text styled by the parent <p>.
  const parts = String(text).split("★");
  if (parts.length === 1) return text;

  const totalStars = parts.length - 1;
  const shouldUsePartialLastStar =
    totalStars === 5 && String(text).includes("4.");

  return (
    <>
      {parts.map((part, idx) => (
        <React.Fragment key={idx}>
          {part}
          {idx < parts.length - 1 && (
            <span className="mx-px">
              {shouldUsePartialLastStar && idx === totalStars - 1 ? (
                <StarIconPartial />
              ) : (
                <StarIconFilled />
              )}
            </span>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

function KentuckyReviewsSection() {
  return (
    <section id="reviews" className="bg-white md:py-18 py-12">
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col items-center gap-10 text-center">
        <div className="max-w-[800px] space-y-4">
          {/* <p className="text-[14px] font-bold uppercase tracking-[3px] text-[#f76d2f]">
            What Our Customers Say
          </p> */}
          <div className="space-y-2">
            <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.8px] text-[#114273] md:text-[48px] md:tracking-[-1.2px]">
              Rated Across Trusted Platforms
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#f76d2f]" />
            <p className="text-[16px] leading-[26px] text-black md:text-[16px]">
              Backed by consistent feedback across major platforms.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex md:max-w-[290px] w-full items-center md:gap-3 gap-4 rounded-[12px] border border-[#dde4ee] bg-[#f4f7fb] px-6 md:px-4 py-4 text-left"
            >
              {platform.icon && (
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="h-10 w-10 shrink-0"
                  loading="lazy"
                />
              )}
              <div className="flex flex-col gap-0.5">
                <p className="text-[14px] font-extrabold text-[#0a2240]">
                  {platform.name}
                </p>
                <p className="text-[12px] text-[#5a6a82] leading-[20px]">
                  <StarText text={platform.summary} />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-wrap justify-center gap-4">
          {quotes.map((quote) => (
            <article
              key={quote.meta}
              className="flex w-full max-w-[390px] flex-col rounded-[14px] border border-[#f3f4f6] bg-white px-6 py-6 text-left shadow-[0px_4px_6px_rgba(0,0,0,0.06),0px_2px_4px_rgba(0,0,0,0.06)]"
            >
              <p className="mb-3 text-[18px] text-[#f5a623]">★★★★★</p>
              <p className="text-[16px] leading-[1.4] text-[#4a5565]">
                {quote.text}
              </p>
              <div className="mt-4 space-y-1 text-[14px] text-[rgba(26,18,8,0.5)]">
                <p className="font-bold">{quote.attribution}</p>
                <p>{quote.meta}</p>
              </div>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default KentuckyReviewsSection;
