import React from "react";
import { ChevronDown } from "lucide-react";
import { SearchIcon } from "./IconsSvgs";
import AcreageDualThumbRange, {
  DEFAULT_MAX_ACRES,
  DEFAULT_MIN_ACRES,
} from "./AcreageDualThumbRange";
import BudgetRangeField from "./BudgetRangeField";
import {
  buildPropertyMapUrl,
  PRICE_BOUND_MAX,
  PRICE_BOUND_MIN,
} from "../../utils/propertyMapUrl";

function PropertiesSearchCard({ rotatingStateLabel = "North Carolina" }) {
  const [acresMinValue, setAcresMinValue] = React.useState(DEFAULT_MIN_ACRES);
  const [acresMaxValue, setAcresMaxValue] = React.useState(DEFAULT_MAX_ACRES);

  const [selectedState, setSelectedState] = React.useState("");
  const [locationTouched, setLocationTouched] = React.useState(false);
  const [locationOpen, setLocationOpen] = React.useState(false);
  const locationPopoverRef = React.useRef(null);
  const locationAnchorRef = React.useRef(null);
  const [locationQuery, setLocationQuery] = React.useState("");

  const budgetRef = React.useRef(null);

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

  const isLocationDefault = selectedState === "" && !locationTouched;

  const handleResetAcreage = () => {
    setAcresMinValue(DEFAULT_MIN_ACRES);
    setAcresMaxValue(DEFAULT_MAX_ACRES);
  };

  const handleSearchNow = () => {
    const price = budgetRef.current?.getPriceForUrl?.() ?? {
      priceMin: PRICE_BOUND_MIN,
      priceMax: PRICE_BOUND_MAX,
    };
    const url = buildPropertyMapUrl({
      states: selectedState,
      counties: "",
      usage: "",
      acreageMin: acresMinValue.toFixed(2),
      acreageMax: acresMaxValue.toFixed(2),
      priceMin: price.priceMin,
      priceMax: price.priceMax,
    });
    window.location.href = url;
  };

  return (
    <div className="w-full flex flex-col gap:4 md:gap-6 max-w-[490px] rounded-[14px] bg-white px-8 py-8 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.25)] backdrop-blur-md">
      <div className="flex flex-col gap-2 items-center text-center h-[100px] md:h-full">
        <h2 className="font-bold text-[30px]! leading-[36px]! tracking-[-0.75px]! text-[#1f5c94]">
          Find Your Land
        </h2>
        <p className="text-[14px] md:text-base uppercase leading-6 text-[#6b7280]">
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
                      if (next) budgetRef.current?.closeBudget?.();
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

            <div className="flex-1">
              <BudgetRangeField
                ref={budgetRef}
                onOpenBudget={() => setLocationOpen(false)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase leading-5 text-[#114273]">
              Desired Acreage
            </label>
            <AcreageDualThumbRange
              valueMin={acresMinValue}
              valueMax={acresMaxValue}
              onChangeMin={setAcresMinValue}
              onChangeMax={setAcresMaxValue}
              onReset={handleResetAcreage}
            />
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
          <p className="text-center text-[14px] md:text-base leading-6 text-[#030712]">
            New properties listed <span className="font-bold">Weekly</span>,
            high-demand lots sell fast.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertiesSearchCard;
