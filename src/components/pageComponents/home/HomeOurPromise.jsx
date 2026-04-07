import React from "react";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import HeroStyleDualThumbRange from "@/components/common/HeroStyleDualThumbRange";

const stateOptions = [
  { label: "All States", value: "" },
  { label: "North Carolina", value: "North Carolina" },
  { label: "Arizona", value: "Arizona" },
  { label: "California", value: "California" },
  { label: "Colorado", value: "Colorado" },
  { label: "Florida", value: "Florida" },
  { label: "Georgia", value: "Georgia" },
  { label: "Kentucky", value: "Kentucky" },
  { label: "Minnesota", value: "Minnesota" },
  { label: "Missouri", value: "Missouri" },
  { label: "Nevada", value: "Nevada" },
  { label: "Tennessee", value: "Tennessee" },
  { label: "Texas", value: "Texas" },
  { label: "Utah", value: "Utah" },
];

const PRICE_BOUND_MIN = 5943;
const PRICE_BOUND_MAX = 128999;
const MONTHLY_PAYMENT_BOUND_MIN = 141;
const MONTHLY_PAYMENT_BOUND_MAX = 1875;

/** Matches Figma (node 2092:3145): Open Sans for UI; Frank Ruhl for modal title only */
const os = "font-['Open_Sans',sans-serif]";
const frlBlack = "font-['Frank_Ruhl_Libre',serif] font-black";

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

  const goToPropertyMap = (answerPatch = {}) => {
    const merged = { ...answers, ...answerPatch };
    const url = buildPropertyMapUrl({
      state: merged.state ?? "",
      acreageChoice: merged.acres,
      budget: merged.budget ?? budgetRange,
    });
    window.location.href = url;
  };

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
            className="flex w-full items-center justify-between rounded-[6px] border border-[#e5e7eb] bg-white px-4 py-3 text-left text-[#334155]"
            onClick={() => setStatePickerOpen((v) => !v)}
          >
            <span
              className={`${os} text-[15px] leading-[22px] ${
                selectedLabel
                  ? "text-[#4a4a4a] opacity-100"
                  : "text-[#4a4a4a]/75"
              }`}
            >
              {selectedLabel ? selectedLabel : `- ${currentStep.placeholder} -`}
            </span>
            <ChevronDown className="h-5 w-5 text-[#94a3b8]" />
          </button>

          {statePickerOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+3px)] z-10 max-h-[216px] overflow-y-auto rounded-[8px] border border-[#d9dfea] bg-white p-2 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
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
                    className={`flex w-full items-center justify-between rounded-[8px] px-4 py-2 text-left ${os} text-[16px] md:text-[18px] ${
                      isActive
                        ? "bg-[#f3f4f6] font-semibold text-[#114273]"
                        : "font-normal text-[#111827] hover:bg-[#f9fafb]"
                    }`}
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
          <p className={`mt-2 ${os} font-bold text-[#252525]`}>
            <span className="text-[28px] leading-[40px] md:text-[35px]">
              ${lo.toLocaleString()} – ${hi.toLocaleString()}{" "}
            </span>
            <span className="text-[18px] font-bold leading-[40px] text-[rgba(43,43,43,0.4)] md:text-[20px]">
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
          <div
            className={`mt-2 flex justify-between ${os} text-[14px] font-normal uppercase leading-5 text-[#8c8c8c]`}
          >
            <span>${currentStep.min.toLocaleString()}</span>
            <span>${currentStep.max.toLocaleString()}+</span>
          </div>
        </>
      );
    }

    const selectedChoice = answers[currentStep.id] ?? null;

    return (
      <div className="mt-4 flex flex-wrap gap-3 md:gap-4">
        {currentStep.options.map((option) => {
          const isSelected = selectedChoice === option;
          return (
            <button
              key={option}
              type="button"
              className={`rounded-[36px] border px-5 py-4 ${os} text-[13px] font-semibold leading-[14px] transition ${
                isSelected
                  ? "border-[#f76d2f] bg-[#f76d2f] text-white"
                  : "border-[#d9dfea]   text-[#252525] bg-[#DEDEDE4D] hover:border-[#f76d2f] hover:text-[#f76d2f]"
              }`}
              onClick={() =>
                setAnswers((prev) => ({ ...prev, [currentStep.id]: option }))
              }
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <section className="bg-[#114273] px-4 py-16 text-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] md:px-16 md:py-16">
      <div className="mx-auto w-full max-w-5xl text-center">
        <h2>Not seeing what you <br className="block md:hidden" /> need?</h2>
        <p
          className={`mx-auto mt-5 max-w-3xl ${os} text-[14px] md:text-[16px] font-normal leading-[1.4] text-white`}
        >
          Answer 3 simple questions and we&apos;ll show you matching properties
          right now.
        </p>

        <div className="mx-auto mt-10 flex w-full max-w-[896px] flex-col items-stretch gap-6 rounded-[16px] border border-white/10 bg-white/5 p-6 backdrop-blur-[2px] md:flex-row md:items-center md:justify-between md:p-[41px]">
          <div className="flex-1 border-l-4 border-[#489cd8] pl-6 text-left md:pl-9">
            <p
              className={`max-w-[260px] ${os} text-[20px] font-medium leading-[30px] tracking-[-0.6px] text-white md:text-[30px] md:leading-[36px] md:tracking-[-0.75px]`}
            >
              What is your primary goal?
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-5">
            <button
              type="button"
              className={`w-full md:w-fit btn-secondary ${os} !font-bold !uppercase !text-[14px] !leading-5 !tracking-[1.4px] text-white hover:!bg-transparent hover:!text-[#f76d2f]`}
              onClick={() => startFlow("building")}
            >
              Building my home
            </button>
            <button
              type="button"
              className={`min-w-[200px] w-full md:w-fit cursor-pointer rounded-[6px] border border-white/20 bg-white/10 px-4 py-3 text-center ${os} font-bold uppercase text-[14px] leading-5 tracking-[1.4px] text-white hover:bg-white/20`}
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
            className="w-full max-w-[710px] rounded-[14px] bg-white text-left text-[#114273] shadow-[0px_35px_80px_rgba(0,0,0,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pt-6 md:px-12 md:pt-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`inline-flex rounded-full px-4 py-2.5 ${os} text-[12px] font-semibold uppercase leading-[14px] tracking-[0.5px] ${
                      activeFlow === "investment"
                        ? "bg-[rgba(17,66,115,0.1)] text-[#114273]"
                        : "bg-[rgba(247,109,47,0.1)] text-[#f76d2f]"
                    }`}
                  >
                    {flows[activeFlow].badgeEmoji} {flows[activeFlow].label}
                  </span>
                  <h3
                    className={`mt-4 ${frlBlack} text-[28px] leading-[1.1] text-[#101828] md:text-[36px] md:leading-[57.2px]`}
                  >
                    Find your perfect lot
                  </h3>
                  <p
                    className={`mt-1 ${os} text-[16px] font-normal leading-[1.4] text-[#364153]`}
                  >
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
              <div className="mb-4 flex items-center gap-3">
                {activeSteps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full ${i <= stepIndex ? "bg-[#f07a25]" : "bg-[#d7dde7]"}`}
                  />
                ))}
                <span
                  className={`ml-2 md:ml-3 ${os} text-[12px] font-normal uppercase leading-5 text-[#2b2b2b]`}
                >
                  Step {stepIndex + 1} of {activeSteps.length}
                </span>
              </div>

              <div className="flex items-center gap-3 ">
                <span
                  className={`inline-flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-[#f07a25] ${os} text-[16px] font-bold leading-5 text-white`}
                >
                  {stepIndex + 1}
                </span>
                <p
                  className={`${os} text-[18px] font-bold leading-5 text-[#252525]`}
                  role="heading"
                  aria-level={3}
                >
                  {currentStep.question}
                </p>
              </div>

              {renderStepInput()}

              <div className="mt-8 flex gap-3 md:gap-4">
                {stepIndex > 0 ? (
                  <button
                    type="button"
                    className={`btn-primary !border !border-[#e5e7eb] !bg-[#eef2f7] !text-[#9aa9bf] hover:!bg-transparent hover:!text-[#364153] hover:!border-[#364153] ${os} !font-semibold !uppercase !text-[18px] !leading-6`}
                    onClick={goBack}
                  >
                    ← Back
                  </button>
                ) : null}
                {currentStep?.type !== "choice" ? (
                  <button
                    type="button"
                    className={`flex-1 btn-secondary ${os} !font-semibold !uppercase !text-[18px] !leading-6 !tracking-normal`}
                    onClick={handleNext}
                  >
                    Next{" "}
                    <ArrowRight className="ml-2 inline h-5 w-4 md:h-4 md:w-5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`flex-1 rounded-[10px] bg-[#e47c28] btn-secondary ${os} !font-semibold !uppercase !text-[18px] !leading-6 !tracking-normal`}
                    onClick={() => goToPropertyMap()}
                  >
                    Show Me Properties{" "}
                    <ArrowRight className="ml-2 inline h-5 w-5 md:h-6 md:w-6" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default HomeOurPromise;
