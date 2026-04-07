import React from "react";
import { Mail, Phone } from "lucide-react";

function HomeContactCta() {
  return (
    <section className="bg-[#f8fafc] px-4 py-16 md:px-[68px] md:py-16">
      <div className="mx-auto w-full max-w-7xl rounded-[6px] border border-[#f3f4f6] bg-white p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] md:flex md:items-center md:justify-between md:p-[41px]">
        <div className="max-w-[672px] space-y-4">
          <h2 className="text-[#114273] ">Need more details?</h2>
          <p className=" description text-black">
            Share your questions with our team.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 md:mt-0 h-full md:h-[54px] md:flex-nowrap">
          <a
            href="tel:+18668087809"
            className="inline-flex btn-primary !text-[14px] items-center w-full justify-center gap-3 "
          >
            <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
            <span>Call 866-808-7809</span>
          </a>
          <a
            href="mailto:help@discountlots.com"
            className="inline-flex w-full items-center justify-center gap-3 rounded-[6px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-bold uppercase tracking-[1.4px] text-[#114273]"
          >
            <Mail aria-hidden="true" className="h-[18px] w-[18px]" />
            <span>help@discountlots.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeContactCta;
