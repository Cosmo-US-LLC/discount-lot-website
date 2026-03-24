import React from "react";

function HomeOurPromise() {
  return (
    <section className="bg-[#114273] px-4 py-16 text-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] md:px-16 md:py-16">
      <div className="mx-auto w-full max-w-5xl text-center">
        <h2 className="">Not seeing what you need?</h2>
        <p className="mx-auto mt-5 max-w-2xl body-description">
          Answer 3 simple questions and we&apos;ll show you matching properties
          right now.
        </p>

        <div className="mx-auto mt-10 flex w-full max-w-[896px] flex-col items-stretch gap-6 rounded-[16px] border border-white/10 bg-white/5 p-6 backdrop-blur-[2px] md:flex-row md:items-center md:justify-between md:p-[41px]">
          <div className="flex-1 border-l-4 border-[#489cd8] pl-6 text-left md:pl-9">
            <p className="max-w-[260px] text-[20px] font-medium leading-[30px] tracking-[-0.6px] text-white md:text-[30px] md:leading-[36px] md:tracking-[-0.75px]">
              What is your primary goal?
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-5">
            <button type="button" className="w-full md:w-fit btn-secondary">
              Building my home
            </button>
            <button
              type="button"
              className="min-w-[200px] rounded-[6px] cursor-pointer w-full md:w-fit border border-white/20 bg-white/10 hover:bg-white/20 px-4 py-3 text-center text-[14px] font-bold uppercase tracking-[1.4px] text-white"
            >
              Investment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeOurPromise;
