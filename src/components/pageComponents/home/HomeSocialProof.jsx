import React from "react";
import SocialProofLogo1 from "@/assets/images/home/bbb.svg";
import SocialProofLogo2 from "@/assets/images/home/google.svg";
import SocialProofLogo3 from "@/assets/images/home/Trustpilot.svg";

function HomeSocialProof() {
  return (
    <section className=" bg-[#f9fafb]">
      <div className="mx-auto flex max-w-[1280px] flex-col-reverse items-center justify-between gap-4 px-4 md:px-8 py-12 md:flex-row md:gap-10">
        <div className="flex md:flex-row items-center justify-center md:gap-12 gap-4 text-[0.7rem] md:justify-start">
          <div className="flex items-center gap-2">
            <img
              src={SocialProofLogo1}
              alt="Social Proof Logo 1"
              className="h-12 w-full object-contain"
            />
            <span className="text-[14px] opacity-70 font-semibold uppercase tracking-[1px] text-[#4A4F54]">
              Accredited
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={SocialProofLogo2}
              alt="Social Proof Logo 2"
              className="h-12 w-full object-contain"
            />
            <span className="text-[14px] opacity-70 font-semibold uppercase tracking-[1px] text-[#4A4F54]">
              Reviews
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={SocialProofLogo3}
              alt="Social Proof Logo 3"
              className="h-8 w-full object-contain"
            />
          </div>
        </div>

        <h6 className="inline-flex items-center rounded-full border border-[rgba(72,156,216,0.1)] bg-white md:px-6 px-4 md:py-5 py-4 md:!text-[14px] !text-[10px] font-semibold uppercase tracking-[1px] text-[#489CD8] shadow-sm">
          3,000+ Land OWNERS • 900+ VERIFIED 5-STAR REVIEWS
        </h6>
      </div>
    </section>
  );
}

export default HomeSocialProof;
