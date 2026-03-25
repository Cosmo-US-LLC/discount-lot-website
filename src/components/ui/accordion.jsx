import React, { useState, createContext, useContext } from "react";
import { ChevronDown } from "lucide-react";

const AccordionContext = createContext(null);

export function Accordion({
  type = "single",
  collapsible = true,
  children,
  className,
}) {
  const [value, setValue] = useState(type === "single" ? null : []);

  const toggleItem = (itemValue) => {
    if (type === "single") {
      setValue((prev) =>
        prev === itemValue && collapsible ? null : itemValue,
      );
    } else {
      setValue((prev) =>
        prev.includes(itemValue)
          ? prev.filter((v) => v !== itemValue)
          : [...prev, itemValue],
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ type, value, toggleItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children, className }) {
  return (
    <div data-value={value} className={className}>
      {children}
    </div>
  );
}

export function AccordionTrigger({ value, children }) {
  const ctx = useContext(AccordionContext);
  const open =
    ctx.type === "single" ? ctx.value === value : ctx.value.includes(value);

  return (
    <button
      type="button"
      onClick={() => ctx.toggleItem(value)}
      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[0.95rem] font-semibold text-[#114273] cursor-pointer sm:px-5 sm:py-4"
    >
      <span className="flex-1 pr-3">{children}</span>
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(72,156,216,0.1)] text-sm text-[#114273] transition-transform ${
          open ? "rotate-180" : ""
        }`}
      >
        <ChevronDown className="h-4 w-4" />
      </span>
    </button>
  );
}

export function AccordionContent({ value, children }) {
  const ctx = useContext(AccordionContext);
  const open =
    ctx.type === "single" ? ctx.value === value : ctx.value.includes(value);

  return (
    <div
      className={`overflow-hidden px-5 pb-4 text-sm text-[#4a4f54] transition-all ${
        open ? "max-h-[500px] pt-1" : "max-h-0"
      }`}
    >
      {open ? children : null}
    </div>
  );
}
