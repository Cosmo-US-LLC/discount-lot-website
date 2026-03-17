import React from "react";
import foundersImage from "@/assets/images/home/who_are_we.webp";

function HomeWhoAreWe() {
  return (
    <section className="bg-[#eaf4fb] py-20">
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col gap-16 rounded-[40px] bg-[#eaf4fb] md:flex-row ">
        {/* Left: founders image / video card */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-[16px] bg-black shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] md:h-[448px] md:flex-1">
          <img
            src={foundersImage}
            alt="Discount Lots founder"
            className=" h-full w-full  object-fill"
          />
        </div>

        {/* Right: copy */}
        <div className="w-full space-y-6 md:flex-1">
          <h6 className="text-[#f76d2f]">Who are we</h6>
          <h2 className="text-[#114273]">Making Land Ownership Accessible</h2>

          <div className="space-y-4 description text-[#4a4f54]">
            <p>
              Founded in 2019 in Chicago, Illinois by Paul and Willie, two
              experience real estate brokers, Discount Lots was created to make
              land ownership easy, affordable, and accessible for everyone.
            </p>
            <p className="font-bold">
              We purchase at a lower price and pass the savings directly to you,
              giving you the best opportunity to own land without unnecessary
              costs.
            </p>
            <p>
              Discount Lots isn&apos;t just about access to exclusive listings
              you won&apos;t find anywhere else, it&apos;s also about flexible
              ways to buy land, whether you&apos;re purchasing outright or
              taking advantage of our innovative rent-to-own program.
            </p>
          </div>

          <div className="flex gap-10 pt-4 text-[10px] font-semibold uppercase tracking-[1px] text-[#6b7280]">
            <div className="flex gap-2 flex-col">
              <div className="text-[30px] font-bold leading-[36px] text-[#114273]">
                6+
              </div>
              <div>Years active</div>
            </div>
            <div className="flex gap-2 flex-col">
              <div className="text-[30px] font-bold leading-[36px] text-[#114273]">
                3K+
              </div>
              <div>Sold parcels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWhoAreWe;
