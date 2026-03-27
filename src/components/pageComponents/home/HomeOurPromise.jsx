import React from "react";
import { ArrowRight, ChevronDown, X } from "lucide-react";

const flows = {
  building: {
    label: "Building my home",
    badgeEmoji: "🏠",
    steps: [
      {
        id: "state",
        question: "Which state are you looking in?",
        type: "select",
        placeholder: "Select a state",
      },
      {
        id: "budget",
        question: "What's your budget?",
        type: "range",
        min: 5000,
        max: 100000,
        initial: 25000,
        suffix: "max budget",
      },
      {
        id: "acres",
        question: "How many acres do you need?",
        type: "choice",
        options: ["Under 2 acres", "2 - 5 acres", "5 - 10 acres", "10+ acres"],
      },
    ],
  },
  investment: {
    label: "Investment",
    badgeEmoji: "📈",
    steps: [
      {
        id: "state",
        question: "Which market are you interested in?",
        type: "select",
        placeholder: "Select a state",
      },
      {
        id: "budget",
        question: "What's your budget?",
        type: "range",
        min: 5000,
        max: 100000,
        initial: 30000,
        suffix: "investment budget",
      },
      {
        id: "strategy",
        question: "What’s your investment focus?",
        type: "choice",
        options: ["Long-term hold", "Future resale", "Diversify portfolio"],
      },
    ],
  },
};

function HomeOurPromise() {
  const [activeFlow, setActiveFlow] = React.useState(null);
  const [stepIndex, setStepIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [sliderValue, setSliderValue] = React.useState(25000);

  const activeSteps = activeFlow ? flows[activeFlow].steps : [];
  const currentStep = activeSteps[stepIndex] || null;
  const isComplete = Boolean(activeFlow) && stepIndex >= activeSteps.length;

  React.useEffect(() => {
    if (!currentStep || currentStep.type !== "range") return;
    setSliderValue(currentStep.initial || 25000);
  }, [currentStep]);

  const startFlow = (flowKey) => {
    setActiveFlow(flowKey);
    setStepIndex(0);
    setAnswers({});
  };

  const resetFlow = () => {
    setActiveFlow(null);
    setStepIndex(0);
    setAnswers({});
    setSliderValue(25000);
  };

  const goBack = () => setStepIndex((prev) => (prev > 0 ? prev - 1 : prev));

  const handlePick = (value) => {
    if (!currentStep || !activeFlow) return;
    setAnswers((prev) => ({ ...prev, [currentStep.id]: value }));
    const total = flows[activeFlow].steps.length;
    setStepIndex((prev) => (prev < total - 1 ? prev + 1 : total));
  };

  const handleNext = () => {
    if (!currentStep) return;
    if (currentStep.type === "range") return handlePick(sliderValue);
    return handlePick("selected");
  };

  const renderStepInput = () => {
    if (!currentStep) return null;

    if (currentStep.type === "select") {
      return (
        <button
          type="button"
          className="mt-3 flex w-full items-center justify-between rounded-[10px] border border-[#d9dfea] bg-white px-4 py-3 text-left text-[#334155]"
        >
          <span className="text-[20px] md:text-[30px] leading-[1.2] tracking-[-0.6px] text-[#5a6a82]">
            - {currentStep.placeholder} -
          </span>
          <ChevronDown className="h-5 w-5 text-[#94a3b8]" />
        </button>
      );
    }

    if (currentStep.type === "range") {
      return (
        <>
          <p className="mt-2 text-[34px] md:text-[42px] font-bold leading-[1.1] tracking-[-1px] text-[#114273]">
            ${sliderValue.toLocaleString()}{" "}
            <span className="text-[20px] md:text-[30px] font-medium text-[#7a8fa8]">
              {currentStep.suffix}
            </span>
          </p>
          <input
            type="range"
            min={currentStep.min}
            max={currentStep.max}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#dbe4ee]"
          />
          <div className="mt-2 flex justify-between text-[14px] md:text-[22px] font-medium text-[#a3b3c9]">
            <span>${currentStep.min.toLocaleString()}</span>
            <span>${currentStep.max.toLocaleString()}+</span>
          </div>
        </>
      );
    }

    return (
      <div className="mt-4 flex flex-wrap gap-3 md:gap-4">
        {currentStep.options.map((option) => (
          <button
            key={option}
            type="button"
            className="rounded-full border border-[#d9dfea] bg-white px-4 md:px-5 py-2.5 md:py-3 text-[16px] md:text-[30px] leading-[1.2] tracking-[-0.6px] text-[#334155] transition hover:border-[#f76d2f] hover:text-[#f76d2f]"
            onClick={() => handlePick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-[#114273] px-4 py-16 text-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] md:px-16 md:py-16">
      <div className="mx-auto w-full max-w-5xl text-center">
        <h2>Not seeing what you need?</h2>
        <p className="mx-auto mt-5 max-w-3xl body-description">
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
            <button
              type="button"
              className="w-full md:w-fit btn-secondary hover:!bg-[#e47c28] !text-white"
              onClick={() => startFlow("building")}
            >
              Building my home
            </button>
            <button
              type="button"
              className="min-w-[200px] w-full md:w-fit cursor-pointer rounded-[6px] border border-white/20 bg-white/10 px-4 py-3 text-center text-[14px] font-bold uppercase tracking-[1.4px] text-white hover:bg-white/20"
              onClick={() => startFlow("investment")}
            >
              Investment
            </button>
          </div>
        </div>
      </div>

      {activeFlow ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f2345]/80 px-4"
          role="dialog"
          aria-modal="true"
          onClick={resetFlow}
        >
          <div
            className="w-full max-w-[980px] rounded-[28px] bg-white text-left text-[#114273] shadow-[0px_35px_80px_rgba(0,0,0,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pt-6 md:px-12 md:pt-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-[#fff4ec] px-4 py-1 text-[12px] md:text-[20px] font-bold uppercase tracking-[2px] text-[#f76d2f]">
                    {flows[activeFlow].badgeEmoji} {flows[activeFlow].label}
                  </span>
                  <h3 className="mt-4 text-[40px] md:text-[58px] leading-[1.05] tracking-[-1.2px] text-[#1b2d50]">
                    Find your perfect lot
                  </h3>
                  <p className="mt-2 text-[18px] md:text-[30px] leading-[1.2] tracking-[-0.6px] text-[#7a8fa8]">
                    3 quick answers — we&apos;ll show matching properties
                    instantly
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#edf2f7] text-[#94a3b8]"
                  onClick={resetFlow}
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>
            </div>

            <div className="mt-6 border-t border-[#e7edf5] px-6 py-6 md:px-12 md:py-10">
              {isComplete ? (
                <div className="space-y-6">
                  <p className="text-[20px] md:text-[24px] text-[#4a5565]">
                    Great! We&apos;ll tailor listings for{" "}
                    <span className="font-semibold text-[#114273]">
                      {flows[activeFlow].label}
                    </span>
                    .
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <button type="button" className="btn-secondary">
                      Show Matching Properties
                    </button>
                    <button
                      type="button"
                      className="rounded-[6px] border border-[#cbd5e1] bg-white px-6 py-3 text-[14px] font-bold uppercase tracking-[1.4px] text-[#114273]"
                      onClick={resetFlow}
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-5 flex items-center gap-3">
                    {activeSteps.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full ${i <= stepIndex ? "bg-[#f07a25]" : "bg-[#d7dde7]"}`}
                      />
                    ))}
                    <span className="ml-2 md:ml-3 text-[14px] md:text-[22px] text-[#9aa9bf]">
                      Step {stepIndex + 1} of {activeSteps.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-[#f07a25] text-[16px] md:text-[18px] font-bold text-white">
                      {stepIndex + 1}
                    </span>
                    <p className="text-[24px] md:text-[34px] font-semibold leading-[1.2] tracking-[-0.7px] text-[#1f2f50]">
                      {currentStep.question}
                    </p>
                  </div>

                  {renderStepInput()}

                  <div className="mt-8 flex gap-3 md:gap-4">
                    <button
                      type="button"
                      className="rounded-[10px] bg-[#eef2f7] px-4 md:px-8 py-3 md:py-4 text-[16px] md:text-[30px] font-semibold text-[#9aa9bf] disabled:opacity-60"
                      onClick={goBack}
                      disabled={stepIndex === 0}
                    >
                      ← Back
                    </button>
                    {currentStep?.type !== "choice" ? (
                      <button
                        type="button"
                        className="flex-1 rounded-[10px] bg-[#e47c28] px-6 py-3 md:px-8 md:py-4 text-[18px] md:text-[30px] font-bold text-white"
                        onClick={handleNext}
                      >
                        Next{" "}
                        <ArrowRight className="ml-2 inline h-5 w-5 md:h-6 md:w-6" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex-1 rounded-[10px] bg-[#e47c28] px-6 py-3 md:px-8 md:py-4 text-[18px] md:text-[30px] font-bold text-white"
                        onClick={() => handlePick("Show Properties")}
                      >
                        Show Me Properties{" "}
                        <ArrowRight className="ml-2 inline h-5 w-5 md:h-6 md:w-6" />
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default HomeOurPromise;
