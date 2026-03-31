import React from "react";
import {
  ExclusiveIcon,
  NoAgentFeesIcon,
  NoCreditChecksIcon,
  ResalePotentialIcon,
  BuyerFriendlyProgramIcon,
  HassleFreeIcon,
} from "../../common/IconsSvgs";

const features = [
  {
    title: "Exclusive Off-Market Listing",
    body: "We purchase at a lower price and pass the saving directly to you, not listed on public real estate sites.",
    icon: <ExclusiveIcon />,
  },
  {
    title: "No Agent Fees or Commissions",
    body: "No middlemen means no 6% commission costs, the savings go straight to you.",
    icon: <NoAgentFeesIcon />,
  },
  {
    title: "No Credit Checks",
    body: "In-house approval with no traditional credit checks required.",
    icon: <NoCreditChecksIcon />,
  },
  {
    title: "Resale Potential",
    body: "Our lots are selected for value and long-term resale opportunity.",
    icon: <ResalePotentialIcon />,
  },
  {
    title: "Buyer-Friendly Program",
    body: "Own your property outright at the end of your agreement, no balloon payments.",
    icon: <BuyerFriendlyProgramIcon />,
  },
  {
    title: "Simple, Hassle-Free Process",
    body: "A straightforward path to land ownership without the usual complications.",
    icon: <HassleFreeIcon />,
  },
];

function HomeWhyBuyersChooseUs() {
  return (
    <section className="bg-[#eaf4fb] py-18">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-[520px] text-center space-y-4">
          <h6 className="text-[#f76d2f]">Premium listings</h6>
          <h2 className="text-[#114273]">Why Buyers Choose Us</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#f76d2f]" />
          <p className="description text-[#000000]">
            We remove the barriers to land ownership, providing a trustworthy
            path to your investment.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-[6px] border-t-4 border-transparent bg-white/75 p-6 shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)]"
            >
              <div className="mb-6 flex items-center justify-center w-fit rounded-[6px] bg-[#fef4f1] p-3">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-[#114273]">{feature.title}</h3>
              <p className="description text-[#6b7280]">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeWhyBuyersChooseUs;
