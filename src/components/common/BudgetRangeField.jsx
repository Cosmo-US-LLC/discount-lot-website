import React, { forwardRef, useImperativeHandle } from "react";
import { ChevronDown } from "lucide-react";
import {
  PRICE_BOUND_MAX,
  PRICE_BOUND_MIN,
} from "../../utils/propertyMapUrl";

const DEFAULT_BUDGET_MIN = PRICE_BOUND_MIN;
const pricePresets = [
  5943, 10000, 20000, 30000, 40000, 50000, 75000, 100000, 128999,
];

const BudgetRangeField = forwardRef(function BudgetRangeField(
  { onOpenBudget, popoverClassName },
  ref,
) {
  const [budgetOpen, setBudgetOpen] = React.useState(false);
  const budgetPopoverRef = React.useRef(null);
  const budgetAnchorRef = React.useRef(null);

  const [budgetMin, setBudgetMin] = React.useState(DEFAULT_BUDGET_MIN);
  const [budgetMax, setBudgetMax] = React.useState(null);
  const [budgetMaxAny, setBudgetMaxAny] = React.useState(true);
  const [budgetMaxCustomEnabled, setBudgetMaxCustomEnabled] =
    React.useState(false);
  const [budgetMinCustomEnabled, setBudgetMinCustomEnabled] =
    React.useState(false);
  const [budgetMinDropdownOpen, setBudgetMinDropdownOpen] =
    React.useState(false);
  const [budgetMaxDropdownOpen, setBudgetMaxDropdownOpen] =
    React.useState(false);

  const maxPricePresets = pricePresets.filter((v) => v >= budgetMin);
  const isBudgetDefault =
    budgetMin === DEFAULT_BUDGET_MIN &&
    budgetMaxAny &&
    !budgetMaxCustomEnabled &&
    !budgetMinCustomEnabled;

  const handleResetBudget = () => {
    setBudgetMin(DEFAULT_BUDGET_MIN);
    setBudgetMax(null);
    setBudgetMaxAny(true);
    setBudgetMaxCustomEnabled(false);
    setBudgetMinCustomEnabled(false);
    setBudgetMinDropdownOpen(false);
    setBudgetMaxDropdownOpen(false);
  };

  React.useEffect(() => {
    if (budgetMaxAny) return;
    if (budgetMax == null) return;
    if (budgetMax >= budgetMin) return;
    setBudgetMax(budgetMin);
  }, [budgetMin, budgetMaxAny, budgetMax]);

  React.useEffect(() => {
    if (!budgetOpen) return;
    const onDocMouseDown = (e) => {
      const pop = budgetPopoverRef.current;
      const anchor = budgetAnchorRef.current;
      if (!pop || !anchor) return;
      if (pop.contains(e.target) || anchor.contains(e.target)) return;
      setBudgetOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [budgetOpen]);

  useImperativeHandle(
    ref,
    () => ({
      getPriceForUrl() {
        return {
          priceMin: budgetMin,
          priceMax:
            budgetMaxAny || budgetMax == null ? PRICE_BOUND_MAX : budgetMax,
        };
      },
      closeBudget() {
        setBudgetOpen(false);
        setBudgetMinDropdownOpen(false);
        setBudgetMaxDropdownOpen(false);
      },
    }),
    [budgetMin, budgetMax, budgetMaxAny],
  );

  const defaultPopoverClass =
    "absolute right-[0%] z-50 mt-2 w-[360px] rounded-[12px] border border-[#e5e7eb] bg-white p-4 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold uppercase leading-5 text-[#114273]">
        Budget
      </label>
      <div className="relative">
        <button
          ref={budgetAnchorRef}
          type="button"
          onClick={() =>
            setBudgetOpen((v) => {
              const next = !v;
              if (next) {
                setBudgetMinDropdownOpen(false);
                setBudgetMaxDropdownOpen(false);
                onOpenBudget?.();
              }
              return next;
            })
          }
          className="flex h-[52px] w-full items-center justify-between rounded-[6px] border border-[#e5e7eb] bg-white px-4 py-3.5"
          aria-label="Budget range"
        >
          <span
            className={`text-sm leading-[22px] ${
              isBudgetDefault ? "text-[#9ca3af]" : "text-[#04213f]"
            }`}
          >
            {isBudgetDefault
              ? `$${PRICE_BOUND_MIN.toLocaleString()} - $${PRICE_BOUND_MAX.toLocaleString()}`
              : `$${budgetMin.toLocaleString()} - ${
                  budgetMaxAny ? "Any" : `$${budgetMax.toLocaleString()}`
                }`}
          </span>
          <ChevronDown className="h-4 w-4 text-[#04213f]" />
        </button>

        {budgetOpen && (
          <div
            ref={budgetPopoverRef}
            className={popoverClassName ?? defaultPopoverClass}
            role="dialog"
            aria-label="Budget range dialog"
          >
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="text-xs font-semibold uppercase leading-5 text-[#94a3b8]">
                  Minimum
                </div>
                {budgetMinCustomEnabled ? (
                  <div className="mt-2">
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      step={1}
                      value={budgetMin ?? 0}
                      placeholder="Enter custom min"
                      onChange={(e) => {
                        const raw = e.target.value;
                        const next = raw === "" ? 0 : Number(raw);
                        if (!Number.isFinite(next)) return;
                        setBudgetMin(next);
                      }}
                      className="w-full rounded-[8px] border border-[#e5e7eb] bg-white px-3 py-2 text-left text-[#04213f] outline-none"
                    />
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setBudgetMinDropdownOpen((v) => !v);
                        setBudgetMaxDropdownOpen(false);
                      }}
                      className="mt-2 flex w-full items-center justify-between rounded-[8px] border border-[#e5e7eb] bg-white px-3 py-2 text-left text-[#04213f]"
                    >
                      <span className="text-sm">
                        ${budgetMin.toLocaleString()}
                      </span>
                      <ChevronDown className="h-4 w-4 text-[#04213f]" />
                    </button>

                    {budgetMinDropdownOpen && (
                      <div className="absolute left-0 right-0 top-[70px] z-10 max-h-[216px] overflow-y-auto rounded-[10px] border border-[#e5e7eb] bg-white">
                        <button
                          type="button"
                          onClick={() => {
                            setBudgetMinCustomEnabled(true);
                            setBudgetMinDropdownOpen(false);
                          }}
                          className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#f9fafb]"
                        >
                          <span>Custom</span>
                          <span />
                        </button>

                        {pricePresets.map((v) => {
                          const isActive = budgetMin === v;
                          return (
                            <button
                              key={v}
                              type="button"
                              onClick={() => {
                                setBudgetMin(v);
                                setBudgetMinCustomEnabled(false);
                                setBudgetMinDropdownOpen(false);
                              }}
                              className={`flex w-full items-center justify-between px-4 py-2 text-sm ${
                                isActive
                                  ? "bg-[#f3f4f6] font-semibold text-[#114273]"
                                  : "text-[#111827] hover:bg-[#f9fafb]"
                              }`}
                            >
                              <span>${v.toLocaleString()}</span>
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
                  </>
                )}
              </div>

              <div className="relative">
                <div className="text-xs font-semibold uppercase leading-5 text-[#94a3b8]">
                  Maximum
                </div>

                {budgetMaxCustomEnabled ? (
                  <div className="mt-2">
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      step={1}
                      value={budgetMax ?? ""}
                      placeholder="Enter custom max"
                      onChange={(e) => {
                        const raw = e.target.value;
                        if (raw === "") {
                          setBudgetMax(null);
                          setBudgetMaxAny(true);
                          return;
                        }
                        const next = Number(raw);
                        if (!Number.isFinite(next)) return;
                        setBudgetMax(next);
                        setBudgetMaxAny(false);
                      }}
                      className="w-full rounded-[8px] border border-[#e5e7eb] bg-white px-3 py-2 text-left text-[#04213f] outline-none"
                    />
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setBudgetMaxDropdownOpen((v) => !v);
                        setBudgetMinDropdownOpen(false);
                      }}
                      className="mt-2 flex w-full items-center justify-between rounded-[8px] border border-[#e5e7eb] bg-white px-3 py-2 text-left text-[#04213f]"
                    >
                      <span className="text-sm">
                        {budgetMaxAny
                          ? "Any"
                          : `$${budgetMax.toLocaleString()}`}
                      </span>
                      <ChevronDown className="h-4 w-4 text-[#04213f]" />
                    </button>

                    {budgetMaxDropdownOpen && (
                      <div className="absolute left-0 right-0 top-[70px] z-10 max-h-[216px] overflow-y-auto rounded-[10px] border border-[#e5e7eb] bg-white">
                        <button
                          type="button"
                          onClick={() => {
                            setBudgetMaxAny(true);
                            setBudgetMax(null);
                            setBudgetMaxCustomEnabled(true);
                            setBudgetMaxDropdownOpen(false);
                          }}
                          className={`flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-[#f9fafb] ${
                            budgetMaxCustomEnabled
                              ? "bg-[#f3f4f6] font-semibold text-[#114273]"
                              : "text-[#111827]"
                          }`}
                        >
                          <span>Any</span>
                          {budgetMaxAny && budgetMaxCustomEnabled ? (
                            <span className="text-[#22c55e]">✓</span>
                          ) : (
                            <span />
                          )}
                        </button>

                        {maxPricePresets.map((v) => {
                          const isActive = !budgetMaxAny && budgetMax === v;
                          return (
                            <button
                              key={v}
                              type="button"
                              onClick={() => {
                                setBudgetMax(v);
                                setBudgetMaxAny(false);
                                setBudgetMaxCustomEnabled(false);
                                setBudgetMaxDropdownOpen(false);
                              }}
                              className={`flex w-full items-center justify-between px-4 py-2 text-sm ${
                                isActive
                                  ? "bg-[#f3f4f6] font-semibold text-[#114273]"
                                  : "text-[#111827] hover:bg-[#f9fafb]"
                              }`}
                            >
                              <span>${v.toLocaleString()}</span>
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
                  </>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                className="w-full btn-secondary py-2!"
                onClick={handleResetBudget}
              >
                Reset
              </button>
              <button
                type="button"
                className="w-full btn-primary py-2!"
                onClick={() => {
                  setBudgetMinDropdownOpen(false);
                  setBudgetMaxDropdownOpen(false);
                  setBudgetOpen(false);
                }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default BudgetRangeField;
