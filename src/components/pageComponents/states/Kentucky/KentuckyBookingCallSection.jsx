import React from "react";

const BOOKING_IMAGE =
  "https://www.figma.com/api/mcp/asset/ef14fb2a-44ec-4694-8a4d-8bcaad6d2784";

function KentuckyBookingCallSection() {
  return (
    <section id="schedule-a-call" className="bg-white px-4 py-16 md:px-[68px] md:py-[60px]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center">
        <div className="flex w-full max-w-[560px] flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-5">
            <h6 className="text-[#f76d2f]">Talk to a Land Specialist</h6>
            <h2 className="text-[#0a2240]">Book a Free&nbsp;15‑Minute Call</h2>
          </div>
          <p className="description text-[#5a6a82]">
            Have questions about a specific lot, pricing, or financing? Book a
            no-pressure call with one of our Land Specialists and get answers
            fast.
          </p>
        </div>

        <div className="h-[260px] w-full max-w-[885px] overflow-hidden rounded-[16px] bg-white shadow-[0px_8px_25px_rgba(0,0,0,0.1)] md:h-[350px]">
          <div className="relative h-full w-full">
            <img
              alt=""
              src={BOOKING_IMAGE}
              className="absolute left-0 top-[9px] h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <p className="text-[14px] font-semibold leading-[1.4] text-[#7a8fa8]">
          Prefer to call us? <span className="text-[#070707]">Toll-free:</span>{" "}
          <a className="text-black underline" href="tel:8668087809">
            866-808-7809
          </a>
          <span>{` · Mon–Fri 9AM–8PM EST, Sat–Sun 9AM–5PM EST`}</span>
        </p>
      </div>
    </section>
  );
}

export default KentuckyBookingCallSection;
