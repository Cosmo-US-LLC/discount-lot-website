import React from "react";

const featureIcons = [
  "https://www.figma.com/api/mcp/asset/d84922f2-6176-4c69-94ee-adfa9ea807ba",
  "https://www.figma.com/api/mcp/asset/67b81c2c-a1a6-43cc-8dec-5649727208e1",
  "https://www.figma.com/api/mcp/asset/68cbdb72-3d6e-4a57-8690-24b7457e8152",
  "https://www.figma.com/api/mcp/asset/d84922f2-6176-4c69-94ee-adfa9ea807ba",
  "https://www.figma.com/api/mcp/asset/78d00a2b-65b2-483c-95e9-7f4013b2d876",
  "https://www.figma.com/api/mcp/asset/37e90924-82ba-4b5b-922c-98cd22db8a2e",
];

const features = [
  {
    title: "Exclusive Off-Market Listing",
    body: "We purchase at a lower price and pass the saving directly to you, not listed on public real estate sites.",
  },
  {
    title: "No Agent Fees or Commissions",
    body: "No middlemen means no 6% commission costs, the savings go straight to you.",
  },
  {
    title: "No Credit Checks",
    body: "In-house approval with no traditional credit checks required.",
  },
  {
    title: "Resale Potential",
    body: "Our lots are selected for value and long-term resale opportunity.",
  },
  {
    title: "Buyer-Friendly Program",
    body: "Own your property outright at the end of your agreement, no balloon payments.",
  },
  {
    title: "Simple, Hassle-Free Process",
    body: "A straightforward path to land ownership without the usual complications.",
  },
];

function HomeWhyBuyersChooseUs() {
  return (
    <section className="bg-[#eaf4fb] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f76d2f]">
            Premium listings
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#114273] md:text-4xl">
            Why Buyers Choose Us
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#f76d2f]" />
          <p className="mt-4 text-sm text-slate-700">
            We remove the barriers to land ownership, providing a trustworthy path to your
            investment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-md border-t-4 border-transparent bg-white/80 p-6 shadow-sm"
            >
              <div className="mb-6 inline-flex rounded-md bg-[#fef4f1] p-3">
                <img
                  src={featureIcons[index]}
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="mb-2 text-[1.05rem] font-semibold text-[#114273]">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeWhyBuyersChooseUs;

