import React from "react";
import {
  ResearchIcon,
  DollarIcon,
  ContractIcon,
  OwnershipIcon,
  VerifiedTickIcon,
} from "@/components/common/IconsSvgs";

const steps = [
  {
    number: 1,
    title: "Browse & Pick Your Lot",
    icon: <ResearchIcon />,
    description:
      "Explore available properties and find one that fits your needs and budget.",
  },
  {
    number: 2,
    title: "Choose Your Payment Plan",
    icon: <DollarIcon />,
    description:
      "Pay in full or select a flexible monthly plan designed to fit your budget. No credit check required.",
  },
  {
    number: 3,
    title: "Secure Your Lot with as Little as $500 Down",
    icon: <VerifiedTickIcon />,
    description:
      "If you choose the flexible monthly plan, pay $197 to secure your lot, plus a one-time $300 documentation fee for your welcome packet, paperwork & escrow processing. From Month 2, monthly payments begin at $200/mo.",
    badge: "Monthly plan only",
  },
  {
    number: 4,
    title: "Sign Your Contract",
    icon: <ContractIcon />,
    description:
      "Your purchase agreement is emailed; sign promptly to secure your lot.",
  },
  {
    number: 5,
    title: "Deed Transfer & Ownership",
    icon: <OwnershipIcon />,
    description:
      "After your final payment, the deed is officially transferred to your name. No balloon payments, no hidden fees.",
  },
];

function HomeHowItWorks() {
  const handleFindAffordableLandClick = () => {
    const heroSection = document.getElementById("home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.hash = "home";
  };

  return (
    <section id="how-it-works" className="bg-white py-18">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        {/* Heading block */}
        <div className="mx-auto max-w-[602px] text-center space-y-4">
          <h6 className="text-[#f76d2f]">How it works</h6>
          <h2 className="text-[#114273]">A Simple &amp; Secure Process</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#f76d2f]" />
          <p className="description text-[#4a5565]">
            No banks, no realtors, no paperwork stacks.
          </p>
        </div>

        {/* Timeline + steps: each row has its own rail segment aligned to its card */}
        <div className="mx-auto mt-14 max-w-[896px] space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-0 md:gap-6">
              {/* Left rail segment with number */}
              <div className="relative hidden flex-col items-center pt-1 md:flex">
                {/* Vertical line segment below the circle, hidden for last item */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-16 bottom-[-30px] w-[2px] bg-[#114273]" />
                )}
                <div
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#114273] text-[24px] font-bold leading-[32px] text-white shadow-[0px_10px_15px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)]"
                  style={{ fontFamily: "Frank Ruhl Libre" }}
                >
                  {step.number}
                </div>
              </div>

              {/* Step card */}
              <div className="flex-1 rounded-[14px] md:border md:border-[#f3f4f6] bg-white md:shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.1)] md:px-[25px] md:py-[25px]">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#fef4f1] text-xl text-[#f76d2f]">
                    {step.icon}
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[#114273]">{step.title}</h3>

                      {step.badge ? (
                        <div className="hidden h-[26px] rounded-[4px] border border-[#f76d2f] px-[13px] py-[5px] text-[12px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#f76d2f] md:block">
                          {step.badge.toUpperCase()}
                        </div>
                      ) : null}
                    </div>

                    <p className="description text-[#4a5565]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="btn-secondary text-white"
            onClick={handleFindAffordableLandClick}
          >
            Find Affordable Land
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeHowItWorks;
