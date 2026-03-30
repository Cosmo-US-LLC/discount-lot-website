import React from "react";
import bbbLogo from "@/assets/images/home/bbb.svg";
import googleLogo from "@/assets/images/home/google.svg";
import trustpilotLogo from "@/assets/images/home/Trustpilot.svg";

function ArizonaTrustBarSection() {
  return (
    <section className="bg-[#114273] py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 md:flex-row md:gap-[200px]">
        <div className="flex w-full max-w-[220px] flex-col items-center gap-[10px] md:items-start">
          <img src={googleLogo} alt="Google" className="h-[16px] w-auto" />
          <div className="flex items-center gap-[6px]">
            <span className="text-[12px] text-white/90">★</span>
            <span className="text-[12px] text-white/90">
              4.9 · 900+ Reviews
            </span>
          </div>
        </div>

        <div className="flex w-full max-w-[220px] flex-col items-center gap-[10px] md:items-start">
          <img
            src={trustpilotLogo}
            alt="Trustpilot"
            className="h-[16px] w-auto"
          />
          <div className="text-[12px] text-white/90">
            4.7 Rating on Trustpilot
          </div>
        </div>

        <div className="flex items-center gap-[12px]">
          <img
            src={bbbLogo}
            alt="BBB Accredited"
            className="h-[40px] w-[40px] object-contain"
          />
          <div className="text-[13px] text-white/90 whitespace-nowrap">
            BBB Accredited A- Rating
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArizonaTrustBarSection;
