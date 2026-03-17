import React from "react";

const utilityCards = [
  {
    title: "Municipal Water",
    description: [
      "Albany City Water Department services Willis Creek Rd up to the hill. Connection available at street level for all lots.",
      "Note: No public sewer — septic system installation required. Standard for rural land in this area. Your Land Specialist can walk you through typical costs.",
    ],
  },
  {
    title: "Electric Power",
    description: [
      "South Kentucky RECC provides electricity throughout Albany, KY and surrounding areas.",
      "Power available at paved road frontage for all lots in the subdivision.",
    ],
  },
  {
    title: "Road Access",
    description: [
      "Front lots & main entrance: Paved access via Willis Creek Road for easy year‑round entry.",
      "Interior lots: Accessible via a private dirt road through the subdivision. For specifics on which lots have paved vs. dirt access, ask your Land Specialist.",
    ],
  },
  {
    title: "Verified Zoning",
    description: [
      "No zoning restrictions confirmed directly with Clinton County.",
      "No minimum lot size, no setbacks, and no permit required for a single‑family home or power hookup. Full county contact details are available in the FAQ section.",
    ],
  },
];

function KentuckyUtilitiesSection() {
  return (
    <section className="bg-white px-4 py-20 md:px-[68px] md:py-[60px]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <div className="max-w-[800px] space-y-4">
          <p className="text-[14px] font-bold uppercase tracking-[3px] text-[#f76d2f]">
            Infrastructure
          </p>
          <div className="space-y-2">
            <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.8px] text-[#114273] md:text-[48px] md:tracking-[-1.2px]">
              Utilities Are Ready for You
            </h2>
            <p className="text-[16px] leading-[26px] text-black md:text-[18px]">
              Water and power are already available at the road — the hard
              infrastructure work is done.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {utilityCards.map((card) => (
            <article
              key={card.title}
              className={`flex h-full flex-col rounded-[14px] border border-[#f3f4f6] bg-white px-5 py-6 text-left shadow-[0px_4px_6px_rgba(0,0,0,0.06),0px_2px_4px_rgba(0,0,0,0.06)] ${
                card.title === "Municipal Water"
                  ? "border-2 border-[#114273] bg-[rgba(17,66,115,0.06)]"
                  : ""
              }`}
            >
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#fef4f1] text-[#114273]">
                <span aria-hidden="true">
                  {card.title === "Municipal Water"
                    ? "💧"
                    : card.title === "Electric Power"
                    ? "⚡"
                    : card.title === "Road Access"
                    ? "🛣️"
                    : "✅"}
                </span>
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-[#1a1208]">
                {card.title}
              </h3>
              <div className="space-y-2 text-[16px] leading-[1.4] text-[rgba(26,18,8,0.8)]">
                {card.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KentuckyUtilitiesSection;

