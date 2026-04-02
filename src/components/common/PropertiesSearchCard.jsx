import React from "react";
import { ChevronDown } from "lucide-react";
import { SearchIcon } from "./IconsSvgs";

function PropertiesSearchCard({ rotatingStateLabel = "North Carolina" }) {
  const MIN_ACRES = 0.07;
  const MAX_ACRES = 40;
  const ACRES_STEP = 0.01;
  const DEFAULT_MIN_ACRES = 0.07;
  const DEFAULT_MAX_ACRES = 40;

  const [acresMinValue, setAcresMinValue] = React.useState(DEFAULT_MIN_ACRES);
  const [acresMaxValue, setAcresMaxValue] = React.useState(DEFAULT_MAX_ACRES);
  const [activeAcresThumb, setActiveAcresThumb] = React.useState(null);
  const trackRef = React.useRef(null);
  const [isDraggingAcreage, setIsDraggingAcreage] = React.useState(false);

  const [selectedState, setSelectedState] = React.useState("");
  const [locationTouched, setLocationTouched] = React.useState(false);
  const [locationOpen, setLocationOpen] = React.useState(false);
  const locationPopoverRef = React.useRef(null);
  const locationAnchorRef = React.useRef(null);
  const [locationQuery, setLocationQuery] = React.useState("");

  // Query param format expects `states` to be empty for "All States".
  // For the external `discountlots.com/property-map` filters, `states` should be the full state name
  // (example: `states=California`).
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

  const selectedStateLabel =
    stateOptions.find((o) => o.value === selectedState)?.label ?? "All States";

  const filteredStateOptions = stateOptions.filter((opt) => {
    const q = locationQuery.trim().toLowerCase();
    if (!q) return true;
    return opt.label.toLowerCase().includes(q);
  });

  React.useEffect(() => {
    if (!locationOpen) return;
    const onDocMouseDown = (e) => {
      const pop = locationPopoverRef.current;
      const anchor = locationAnchorRef.current;
      if (!pop || !anchor) return;
      if (pop.contains(e.target) || anchor.contains(e.target)) return;
      setLocationOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [locationOpen]);

  const acresMinPercent =
    ((acresMinValue - MIN_ACRES) / (MAX_ACRES - MIN_ACRES)) * 100;
  const acresMaxPercent =
    ((acresMaxValue - MIN_ACRES) / (MAX_ACRES - MIN_ACRES)) * 100;

  const acresMinPercentClamped = Math.min(100, Math.max(0, acresMinPercent));
  const acresMaxPercentClamped = Math.min(100, Math.max(0, acresMaxPercent));
  const fillLeft = Math.min(acresMinPercentClamped, acresMaxPercentClamped);
  const fillRight = Math.max(acresMinPercentClamped, acresMaxPercentClamped);
  const fillWidth = fillRight - fillLeft;

  const handleResetAcreage = () => {
    setAcresMinValue(DEFAULT_MIN_ACRES);
    setAcresMaxValue(DEFAULT_MAX_ACRES);
  };

  // Budget range UI (matches screenshot style).
  // Top placeholder shows the available overall range, while Minimum/Maximum inputs
  // start from user-friendly defaults (min=0, max=Any).
  const PRICE_BOUND_MIN = 5943;
  const PRICE_BOUND_MAX = 128999;
  // Defaults used by the property-map page when filters are "reset".
  // Keeping these explicit prevents prior filter state from sticking.
  const MONTHLY_PAYMENT_BOUND_MIN = 141;
  const MONTHLY_PAYMENT_BOUND_MAX = 1875;
  const DEFAULT_BUDGET_MIN = PRICE_BOUND_MIN;
  const pricePresets = [
    5943, 10000, 20000, 30000, 40000, 50000, 75000, 100000, 128999,
  ];

  const [budgetOpen, setBudgetOpen] = React.useState(false);
  const budgetPopoverRef = React.useRef(null);
  const budgetAnchorRef = React.useRef(null);

  const [budgetMin, setBudgetMin] = React.useState(DEFAULT_BUDGET_MIN);
  const [budgetMax, setBudgetMax] = React.useState(null); // null means no max applied
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
  // "All States" uses empty string value; treat it as a real selection after user chooses it.
  const isLocationDefault = selectedState === "" && !locationTouched;
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

  const roundToStep = (value) => {
    const stepped = Math.round(value / ACRES_STEP) * ACRES_STEP;
    return Math.round(stepped * 100) / 100; // avoid floating point artifacts like 0.30000000004
  };

  const percentToValue = (percent) => {
    const raw = MIN_ACRES + (percent / 100) * (MAX_ACRES - MIN_ACRES);
    return roundToStep(raw);
  };

  const getPercentFromClientX = (clientX) => {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const x = Math.min(rect.width, Math.max(0, clientX - rect.left));
    return (x / rect.width) * 100;
  };

  const setMinFromPercent = (percent) => {
    const next = percentToValue(percent);
    setAcresMinValue(next <= acresMaxValue ? next : acresMaxValue);
  };

  const setMaxFromPercent = (percent) => {
    const next = percentToValue(percent);
    setAcresMaxValue(next >= acresMinValue ? next : acresMinValue);
  };

  const chooseThumbFromPercent = (percent) => {
    const minDist = Math.abs(percent - acresMinPercentClamped);
    const maxDist = Math.abs(percent - acresMaxPercentClamped);
    // If equal, prefer min (left thumb) to make "left side" dragging feel natural.
    return minDist <= maxDist ? "min" : "max";
  };

  const handleAcreagePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return; // only primary mouse button
    const percent = getPercentFromClientX(e.clientX);
    const thumb = chooseThumbFromPercent(percent);
    setActiveAcresThumb(thumb);
    setIsDraggingAcreage(true);

    if (thumb === "min") setMinFromPercent(percent);
    else setMaxFromPercent(percent);

    // Keep pointer events on this element during drag.
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleAcreagePointerMove = (e) => {
    if (!isDraggingAcreage || !activeAcresThumb) return;
    const percent = getPercentFromClientX(e.clientX);
    if (activeAcresThumb === "min") setMinFromPercent(percent);
    if (activeAcresThumb === "max") setMaxFromPercent(percent);
  };

  const handleAcreagePointerUp = () => {
    setIsDraggingAcreage(false);
    setActiveAcresThumb(null);
  };

  const handleSearchNow = () => {
    // Navigate to the property map with query params that match the external filter format.
    const url = new URL("https://discountlots.com/property-map");
    // For "All States", the external map expects `states=` (empty), not an omitted param.
    url.searchParams.set("states", selectedState);
    // Ensure these "empty" filters are explicit (prevents sticky map state).
    url.searchParams.set("counties", "");
    url.searchParams.set("usage", "");
    url.searchParams.set("acreage.min", acresMinValue.toFixed(2));
    url.searchParams.set("acreage.max", acresMaxValue.toFixed(2));
    // Always send price bounds (matches the map's expected filter format).
    url.searchParams.set("price.min", String(budgetMin));
    url.searchParams.set(
      "price.max",
      String(budgetMaxAny || budgetMax == null ? PRICE_BOUND_MAX : budgetMax),
    );
    url.searchParams.set(
      "monthly_payment.min",
      String(MONTHLY_PAYMENT_BOUND_MIN),
    );
    url.searchParams.set(
      "monthly_payment.max",
      String(MONTHLY_PAYMENT_BOUND_MAX),
    );

    window.location.href = url.toString();
  };

  return (
    <div className="w-full flex flex-col gap-6 max-w-[490px] rounded-[14px] bg-white px-8 py-8 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.25)] backdrop-blur-md">
      <div className="flex flex-col gap-2 items-center text-center h-[100px] md:h-full">
        <h2 className="font-bold text-[30px]! leading-[36px]! tracking-[-0.75px]! text-[#1f5c94]">
          Find Your Land
        </h2>
        <p className="text-base uppercase leading-6 text-[#6b7280]">
          Search{" "}
          <span className="font-bold text-[#114273]">{rotatingStateLabel}</span>{" "}
          properties now
        </p>
      </div>

      <div className=" flex flex-col gap-3">
        <div className="flex flex-col gap-5 pb-5">
          <div className="flex gap-3">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase leading-5 text-[#114273]">
                Location
              </label>
              <div className="relative">
                <button
                  ref={locationAnchorRef}
                  type="button"
                  onClick={() =>
                    setLocationOpen((v) => {
                      const next = !v;
                      if (next) setBudgetOpen(false);
                      return next;
                    })
                  }
                  className="flex h-[52px] w-full items-center justify-between rounded-[6px] border border-[#e5e7eb] bg-white px-4 py-3.5"
                  aria-label="Select state"
                  aria-haspopup="listbox"
                  aria-expanded={locationOpen}
                >
                  <span
                    className={`text-sm leading-[22px] ${
                      isLocationDefault ? "text-[#9ca3af]" : "text-[#04213f]"
                    }`}
                  >
                    {selectedStateLabel}
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#04213f]" />
                </button>

                {locationOpen && (
                  <div
                    ref={locationPopoverRef}
                    className="absolute left-0 right-0 z-50 mt-2 rounded-[12px] border border-[#e5e7eb] bg-white p-3 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                    role="dialog"
                    aria-label="Location dialog"
                  >
                    <div className="pb-2">
                      <input
                        type="text"
                        value={locationQuery}
                        onChange={(e) => setLocationQuery(e.target.value)}
                        placeholder="Search states..."
                        className="h-10 w-full rounded-[10px] border border-[#e5e7eb] bg-white px-3 text-sm text-[#04213f] outline-none focus:border-[#114273]"
                        autoFocus
                      />
                    </div>

                    <div
                      role="listbox"
                      aria-label="State options"
                      className="max-h-[220px] overflow-y-auto rounded-[8px] border border-[#e5e7eb] bg-white"
                    >
                      {filteredStateOptions.length === 0 ? (
                        <div className="px-3 py-2 text-sm text-[#6b7280]">
                          No results
                        </div>
                      ) : (
                        filteredStateOptions.map((opt) => {
                          const isActive = selectedState === opt.value;
                          return (
                            <button
                              key={opt.value || "all"}
                              type="button"
                              role="option"
                              aria-selected={isActive}
                              onClick={() => {
                                setSelectedState(opt.value);
                                setLocationTouched(true);
                                setLocationOpen(false);
                                setLocationQuery("");
                              }}
                              className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm ${
                                isActive
                                  ? "bg-[#f3f4f6] font-semibold text-[#114273]"
                                  : "text-[#111827] hover:bg-[#f9fafb]"
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
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2">
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
                          budgetMaxAny
                            ? "Any"
                            : `$${budgetMax.toLocaleString()}`
                        }`}
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#04213f]" />
                </button>

                {budgetOpen && (
                  <div
                    ref={budgetPopoverRef}
                    className="absolute right-[0%] z-50 mt-2 w-[360px] rounded-[12px] border border-[#e5e7eb] bg-white p-4 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                    role="dialog"
                    aria-label="Budget range dialog"
                  >
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {/* Minimum field */}
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
                                        <span className="text-[#22c55e]">
                                          ✓
                                        </span>
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

                      {/* Maximum field */}
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
                                  const isActive =
                                    !budgetMaxAny && budgetMax === v;
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
                                        <span className="text-[#22c55e]">
                                          ✓
                                        </span>
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
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase leading-5 text-[#114273]">
              Desired Acreage
            </label>
            <div className="flex flex-col gap-2">
              <div
                ref={trackRef}
                className="relative h-6 w-full touch-none select-none"
                onPointerDown={handleAcreagePointerDown}
                onPointerMove={handleAcreagePointerMove}
                onPointerUp={handleAcreagePointerUp}
                onPointerCancel={handleAcreagePointerUp}
                role="group"
                aria-label="Desired acreage range"
              >
                <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#e5e7eb]" />

                <div
                  className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#f76d2f]"
                  style={{ left: `${fillLeft}%`, width: `${fillWidth}%` }}
                />

                <div
                  className="absolute top-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/8 rounded-[10px] border-2 border-[#f76d2f] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]"
                  style={{ left: `${acresMinPercentClamped}%` }}
                  data-thumb="min"
                />

                <div
                  className="absolute top-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/1 rounded-[10px] border-2 border-[#f76d2f] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]"
                  style={{ left: `${acresMaxPercentClamped}%` }}
                  data-thumb="max"
                />

                {/* Invisible live regions for screen readers */}
                <div className="sr-only" aria-live="polite">
                  {acresMinValue.toFixed(2)} to {acresMaxValue.toFixed(2)} acres
                  selected
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-end gap-0.5">
                  <span className="text-xl font-bold leading-7 text-[#114273]">
                    {acresMinValue.toFixed(2)} - {acresMaxValue.toFixed(2)}
                  </span>
                  <span className="text-[10px] leading-5 text-[#9ca3af]">
                    Acres
                  </span>
                </div>
                <button
                  type="button"
                  className="rounded px-2 py-1 text-xs font-semibold uppercase leading-[18px] text-[#f76d2f]"
                  onClick={handleResetAcreage}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 btn-secondary text-white hover:text-[#f76d2f]"
            onClick={handleSearchNow}
          >
            <SearchIcon className="h-5 w-5 " />
            Search Now
          </button>
          <p className="text-center text-base leading-6 text-[#030712]">
            New properties listed <span className="font-bold">Weekly</span>,
            high-demand lots sell fast.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertiesSearchCard;
