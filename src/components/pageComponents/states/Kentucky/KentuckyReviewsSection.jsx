import React from "react";
import googleIcon from "@/assets/images/kentucky/google.svg";
import bbbIcon from "@/assets/images/kentucky/bbb.svg";
import trustpilotIcon from "@/assets/images/kentucky/trustpilot.svg";

const platforms = [
  {
    name: "Google Reviews",
    summary: "★★★★★ 4.9 · 530+ reviews",
    icon: googleIcon,
  },
  {
    name: "BBB Accredited",
    summary: "★★★★ A Rating · 4.13★",
    icon: bbbIcon,
  },
  {
    name: "Trustpilot",
    summary: "★★★★★ 4.8 · 200+ reviews",
    icon: trustpilotIcon,
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

function KentuckyReviewsSection() {
  return (
    <section id="reviews" className="bg-white py-16">
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col items-center gap-10 text-center">
        <div className="max-w-[800px] space-y-4">
          <p className="text-[14px] font-bold uppercase tracking-[3px] text-[#f76d2f]">
            What Our Customers Say
          </p>
          <div className="space-y-2">
            <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.8px] text-[#114273] md:text-[48px] md:tracking-[-1.2px]">
              3,000+ Families Trust Discount Lots
            </h2>
            <p className="text-[16px] leading-[26px] text-black md:text-[18px]">
              Don&apos;t take our word for it—here&apos;s what verified buyers
              have to say across every major review platform.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex min-w-[220px] items-center gap-3 rounded-[8px] border border-[#dde4ee] bg-[#f4f7fb] px-6 py-4 text-left"
            >
              <img
                src={platform.icon}
                alt={platform.name}
                className="h-10 w-10 shrink-0"
                loading="lazy"
              />
              <div>
                <p className="text-[14px] font-extrabold text-[#0a2240]">
                  {platform.name}
                </p>
                <p className="text-[12px] text-[#5a6a82]">{platform.summary}</p>
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
