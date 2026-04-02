import React from "react";

/**
 * Single-thumb range matching the visual style of the "Desired Acreage" track
 * in {@link PropertiesSearchCard} (Home hero).
 */
function HeroStyleSingleThumbRange({
  min,
  max,
  value,
  onChange,
  "aria-label": ariaLabel = "Budget",
}) {
  const trackRef = React.useRef(null);
  const draggingRef = React.useRef(false);

  const clamped =
    Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
  const percent = ((clamped - min) / (max - min || 1)) * 100;
  const percentClamped = Math.min(100, Math.max(0, percent));

  const getPercentFromClientX = (clientX) => {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const x = Math.min(rect.width, Math.max(0, clientX - rect.left));
    return (x / rect.width) * 100;
  };

  const valueFromPercent = (p) => {
    const raw = min + (p / 100) * (max - min);
    return Math.round(raw);
  };

  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    draggingRef.current = true;
    onChange(valueFromPercent(getPercentFromClientX(e.clientX)));
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    onChange(valueFromPercent(getPercentFromClientX(e.clientX)));
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div
      ref={trackRef}
      className="relative mt-4 h-6 w-full touch-none select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="slider"
      aria-label={ariaLabel}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={clamped}
      tabIndex={0}
      onKeyDown={(e) => {
        const step = Math.max(1, Math.round((max - min) / 100));
        if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
          e.preventDefault();
          onChange(Math.max(min, clamped - step));
        } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
          e.preventDefault();
          onChange(Math.min(max, clamped + step));
        }
      }}
    >
      <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#e5e7eb]" />
      <div
        className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#f76d2f]"
        style={{ width: `${percentClamped}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-[10px] border-2 border-[#f76d2f] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]"
        style={{ left: `${percentClamped}%` }}
      />
    </div>
  );
}

export default HeroStyleSingleThumbRange;
