import React from "react";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import HeroStyleDualThumbRange from "@/components/common/HeroStyleDualThumbRange";

const stateOptions = [
  { label: "All States", value: "" },
  { label: "Arizona (26)", value: "Arizona" },
  { label: "California (61)", value: "California" },
  { label: "Colorado (5)", value: "Colorado" },
  { label: "Florida (23)", value: "Florida" },
  { label: "Georgia (3)", value: "Georgia" },
  { label: "Indiana (1)", value: "Indiana" },
  { label: "Kentucky (43)", value: "Kentucky" },
  { label: "Michigan (1)", value: "Michigan" },
  { label: "Minnesota (1)", value: "Minnesota" },
  { label: "Mississippi (1)", value: "Mississippi" },
  { label: "Missouri (1)", value: "Missouri" },
  { label: "Nevada (3)", value: "Nevada" },
  { label: "New Mexico (1)", value: "New Mexico" },
  { label: "South Carolina (2)", value: "South Carolina" },
  { label: "Tennessee (4)", value: "Tennessee" },
  { label: "Texas (8)", value: "Texas" },
  { label: "Utah (1)", value: "Utah" },
  { label: "Wyoming (1)", value: "Wyoming" },
];

const PRICE_BOUND_MIN = 5943;
const PRICE_BOUND_MAX = 128999;
const MONTHLY_PAYMENT_BOUND_MIN = 141;
const MONTHLY_PAYMENT_BOUND_MAX = 1875;

function toAcreageRange(choice) {
  switch (choice) {
    case "Under 2 acres":
      return { min: 0.07, max: 2 };
    case "2 - 5 acres":
      return { min: 2, max: 5 };
    case "5 - 10 acres":
      return { min: 5, max: 10 };
    case "10+ acres":
      return { min: 10, max: 40 };
    default:
      return { min: 0.07, max: 40 };
  }
}

function buildPropertyMapUrl({ state, acreageChoice, budget }) {
  const url = new URL("https://discountlots.com/property-map");
  url.searchParams.set("states", state ?? "");
  url.searchParams.set("counties", "");
  url.searchParams.set("usage", "");

  const acres = toAcreageRange(acreageChoice);
  url.searchParams.set("acreage.min", acres.min.toFixed(2));
  url.searchParams.set("acreage.max", acres.max.toFixed(2));

  const rawMin = budget?.min ?? PRICE_BOUND_MIN;
  const rawMax = budget?.max ?? PRICE_BOUND_MAX;
  const lo = Math.min(rawMin, rawMax);
  const hi = Math.max(rawMin, rawMax);
  const safeMin = Math.max(PRICE_BOUND_MIN, Math.min(PRICE_BOUND_MAX, lo));
  const safeMax = Math.max(safeMin, Math.min(PRICE_BOUND_MAX, hi));
  url.searchParams.set("price.min", String(safeMin));
  url.searchParams.set("price.max", String(safeMax));

  url.searchParams.set(
    "monthly_payment.min",
    String(MONTHLY_PAYMENT_BOUND_MIN),
  );
  url.searchParams.set(
    "monthly_payment.max",
    String(MONTHLY_PAYMENT_BOUND_MAX),
  );
  return url.toString();
}

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
        initialMin: 5000,
        initialMax: 50000,
        suffix: "budget range",
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
        initialMin: 8000,
        initialMax: 65000,
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
  const [budgetRange, setBudgetRange] = React.useState({
    min: 5000,
    max: 50000,
  });
  const [statePickerOpen, setStatePickerOpen] = React.useState(false);

  const activeSteps = activeFlow ? flows[activeFlow].steps : [];
  const currentStep = activeSteps[stepIndex] || null;
  const isComplete = Boolean(activeFlow) && stepIndex >= activeSteps.length;

  React.useEffect(() => {
    if (!currentStep || currentStep.type !== "range") return;
    setBudgetRange({
      min: currentStep.initialMin ?? currentStep.min,
      max:
        currentStep.initialMax ??
        Math.round((currentStep.min + currentStep.max) / 2),
    });
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
    setBudgetRange({ min: 5000, max: 50000 });
    setStatePickerOpen(false);
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
    if (currentStep.type === "range")
      return handlePick({ min: budgetRange.min, max: budgetRange.max });
    return handlePick("selected");
  };

  const renderStepInput = () => {
    if (!currentStep) return null;

    if (currentStep.type === "select") {
      const currentValue = answers[currentStep.id] ?? null;
      const selectedLabel =
        stateOptions.find((o) => o.value === currentValue)?.label ?? null;

      return (
        <div className="relative mt-3">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-[8px] border border-[#d9dfea] bg-white px-4 py-3 text-left text-[#334155]"
            onClick={() => setStatePickerOpen((v) => !v)}
          >
            <span
              className={`text-[20px] md:text-[24px] leading-[1.2] tracking-[-0.6px] ${
                selectedLabel ? "text-[#334155]" : "text-[#5a6a82]"
              }`}
              style={{ fontFamily: "Frank Ruhl Libre" }}
            >
              {selectedLabel ? selectedLabel : `- ${currentStep.placeholder} -`}
            </span>
            <ChevronDown className="h-5 w-5 text-[#94a3b8]" />
          </button>

          {statePickerOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-10 max-h-[200px] overflow-y-auto rounded-[8px] border border-[#d9dfea] bg-white p-2 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              {stateOptions.map((opt) => {
                const isActive = opt.value === (currentValue ?? "");
                return (
                  <button
                    key={opt.value || "all"}
                    type="button"
                    onClick={() => {
                      setStatePickerOpen(false);
                      handlePick(opt.value);
                    }}
                    className={`flex w-full items-center justify-between rounded-[8px] px-4 py-2 text-left text-[16px] md:text-[18px] ${
                      isActive
                        ? "bg-[#f3f4f6] font-semibold text-[#114273]"
                        : "text-[#111827] hover:bg-[#f9fafb]"
                    }`}
                    style={{ fontFamily: "Frank Ruhl Libre" }}
                  >
                    <span>{opt.label}</span>
                    {isActive ? (
                      <span className="text-[#22c55e]">✓</span>
                    ) : (
                      <span />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    if (currentStep.type === "range") {
      const lo = Math.min(budgetRange.min, budgetRange.max);
      const hi = Math.max(budgetRange.min, budgetRange.max);
      return (
        <>
          <p className="mt-2 text-[28px] md:text-[38px] font-bold leading-[1.15] tracking-[-1px] text-[#114273] font-['Frank_Ruhl_Libre',serif]">
            ${lo.toLocaleString()} – ${hi.toLocaleString()}{" "}
            <span className="block text-[20px] md:text-[30px] font-medium text-[#7a8fa8] md:inline md:ml-1">
              {currentStep.suffix}
            </span>
          </p>
          <HeroStyleDualThumbRange
            min={currentStep.min}
            max={currentStep.max}
            value={{ min: budgetRange.min, max: budgetRange.max }}
            onChange={setBudgetRange}
            aria-label="Budget range"
          />
          <div className="mt-2 flex justify-between text-[14px] md:text-[22px] font-medium text-[#a3b3c9] ">
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
            className="rounded-full border border-[#d9dfea] bg-white px-4 md:px-5 py-2.5 md:py-2.5 text-[16px] md:text-[20px] leading-[1.2] tracking-[-0.6px] text-[#334155] transition hover:border-[#f76d2f] hover:text-[#f76d2f]"
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
              className="w-full md:w-fit btn-secondary hover:!bg-transparent hover:!text-[#f76d2f] text-white"
              onClick={() => startFlow("building")}
            >
              Building my home
            </button>
            <button
              type="button"
              className="min-w-[200px] w-full md:w-fit cursor-pointer rounded-[6px] border border-white/20 capitalize bg-white/10 px-4 py-3 text-center text-[16px] font-bold tracking-[1.4px] text-white hover:bg-white/20"
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
            className="w-full max-w-[880px] rounded-[18px] bg-white text-left text-[#114273] shadow-[0px_35px_80px_rgba(0,0,0,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pt-6 md:px-12 md:pt-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-[#fff4ec] px-4 py-1.5 text-[14px] md:text-[16px] font-bold uppercase tracking-[0.5px] text-[#f76d2f]">
                    {flows[activeFlow].badgeEmoji} {flows[activeFlow].label}
                  </span>
                  <h3 className="mt-4 text-[#1b2d50]">Find your perfect lot</h3>
                  <p className="mt-1 body-description  text-[#7a8fa8]">
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

            <div className="mt-6 border-t border-[#e7edf5] px-6 py-6 md:px-12 md:pt-6 md:pb-10">
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
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        const url = buildPropertyMapUrl({
                          state: answers.state ?? "",
                          acreageChoice: answers.acres,
                          budget: answers.budget ?? budgetRange,
                        });
                        window.location.href = url;
                      }}
                    >
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
                  <div className="mb-4 flex items-center gap-3">
                    {activeSteps.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full ${i <= stepIndex ? "bg-[#f07a25]" : "bg-[#d7dde7]"}`}
                      />
                    ))}
                    <span className="ml-2 md:ml-3 text-[14px] md:text-[18px] text-[#9aa9bf]">
                      Step {stepIndex + 1} of {activeSteps.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 ">
                    <span className="inline-flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-[#f07a25] text-[16px] md:text-[18px] font-bold text-white">
                      {stepIndex + 1}
                    </span>
                    <h3 className="text-[#1f2f50] ">{currentStep.question}</h3>
                  </div>

                  {renderStepInput()}

                  <div className="mt-8 flex gap-3 md:gap-4">
                    <button
                      type="button"
                      className="btn-primary bg-[#eef2f7] text-[#9aa9bf] disabled:opacity-60"
                      onClick={goBack}
                      disabled={stepIndex === 0}
                    >
                      ← Back
                    </button>
                    {currentStep?.type !== "choice" ? (
                      <button
                        type="button"
                        className="flex-1 btn-secondary"
                        onClick={handleNext}
                      >
                        Next{" "}
                        <ArrowRight className="ml-2 inline h-5 w-4 md:h-4 md:w-5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex-1 rounded-[10px] bg-[#e47c28] btn-secondary"
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
