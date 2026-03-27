import React from "react";
import BookingCallImageDesktop from "@/assets/images/kentucky/book_a_call_desktop.webp";
import BookingCallImageMobile from "@/assets/images/kentucky/book_a_call_mobile.webp";

function KentuckyBookingCallSection() {
  return (
    <section id="schedule-a-call" className="bg-white md:py-18 py-12">
      <div className="mx-auto flex w-full max-w-[1280px] px-4 md:px-8 flex-col items-center gap-10 text-center">
        <div className="flex w-full max-w-[590px] flex-col items-center md:gap-4 gap-3">
          <div className="flex flex-col items-center gap-4">
            <h6 className="text-[#f76d2f]">Talk to a Land Specialist</h6>
            <h2 className="text-[#114273]">Book a Free&nbsp;15‑Minute Call</h2>
          </div>
          <p className="description text-[#5a6a82]">
            Have questions about a specific lot, pricing, or financing? Book a
            no-pressure call with one of our Land Specialists and get answers
            fast.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/sales-reps-rr"
            className="inline-flex gap-2 mt-3 items-center justify-center !text-[16px] btn-primary"
          >
            Schedule a Call
            {/* <ArrowRightIcon className="w-4 h-4" /> */}
          </a>
        </div>

        <div className="max-md:hidden h-[350px] w-full max-w-[885px] overflow-hidden rounded-[6px] bg-white shadow-[0px_8px_25px_rgba(0,0,0,0.1)] ">
          <img
            src={BookingCallImageDesktop}
            alt="Book a call"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:hidden h-full w-full max-w-[885px] overflow-hidden rounded-[6px] bg-white shadow-[0px_8px_25px_rgba(0,0,0,0.1)] ">
          <img
            src={BookingCallImageMobile}
            alt="Book a call"
            className="w-full h-full object-cover"
          />
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
