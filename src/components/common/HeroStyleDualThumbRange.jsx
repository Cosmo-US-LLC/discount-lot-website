import React from "react";

/**
 * Dual-thumb range matching the "Desired Acreage" track in {@link PropertiesSearchCard}.
 * `value` is `{ min, max }` in the same numeric domain as `min` / `max` props.
 */
function HeroStyleDualThumbRange({
  min: boundMin,
  max: boundMax,
  value,
  onChange,
  "aria-label": ariaLabel = "Price range",
}) {
  const trackRef = React.useRef(null);
  const draggingRef = React.useRef(false);
  const activeThumbRef = React.useRef(null);

  const minVal = Math.min(
    boundMax,
    Math.max(boundMin, Number.isFinite(value?.min) ? value.min : boundMin),
  );
  const maxVal = Math.min(
    boundMax,
    Math.max(boundMin, Number.isFinite(value?.max) ? value.max : boundMax),
  );
  const lo = Math.min(minVal, maxVal);
  const hi = Math.max(minVal, maxVal);

  const minPercent = ((lo - boundMin) / (boundMax - boundMin || 1)) * 100;
  const maxPercent = ((hi - boundMin) / (boundMax - boundMin || 1)) * 100;
  const minP = Math.min(100, Math.max(0, minPercent));
  const maxP = Math.min(100, Math.max(0, maxPercent));
  const fillLeft = Math.min(minP, maxP);
  const fillWidth = Math.abs(maxP - minP);

  const getPercentFromClientX = (clientX) => {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const x = Math.min(rect.width, Math.max(0, clientX - rect.left));
    return (x / rect.width) * 100;
  };

  const valueFromPercent = (percent) => {
    const raw = boundMin + (percent / 100) * (boundMax - boundMin);
    return Math.round(raw);
  };

  const chooseThumbFromPercent = (percent) => {
    const minDist = Math.abs(percent - minP);
    const maxDist = Math.abs(percent - maxP);
    return minDist <= maxDist ? "min" : "max";
  };

  const setMinFromPercent = (percent) => {
    const next = valueFromPercent(percent);
    const capped = Math.min(next, hi);
    onChange({ min: capped, max: hi });
  };

  const setMaxFromPercent = (percent) => {
    const next = valueFromPercent(percent);
    const capped = Math.max(next, lo);
    onChange({ min: lo, max: capped });
  };

  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    const percent = getPercentFromClientX(e.clientX);
    const thumb = chooseThumbFromPercent(percent);
    activeThumbRef.current = thumb;
    draggingRef.current = true;
    if (thumb === "min") setMinFromPercent(percent);
    else setMaxFromPercent(percent);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current || !activeThumbRef.current) return;
    const percent = getPercentFromClientX(e.clientX);
    if (activeThumbRef.current === "min") setMinFromPercent(percent);
    else setMaxFromPercent(percent);
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
    activeThumbRef.current = null;
  };

  return (
    <div
      ref={trackRef}
      className="relative mt-4 h-6 w-full touch-none select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="group"
      aria-label={ariaLabel}
    >
      <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#e5e7eb]" />
      <div
        className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#f76d2f]"
        style={{ left: `${fillLeft}%`, width: `${fillWidth}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-[10px] border-2 border-[#f76d2f] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]"
        style={{ left: `${minP}%` }}
        data-thumb="min"
      />
      <div
        className="pointer-events-none absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-[10px] border-2 border-[#f76d2f] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]"
        style={{ left: `${maxP}%` }}
        data-thumb="max"
      />
      <div className="sr-only" aria-live="polite">
        ${lo.toLocaleString()} to ${hi.toLocaleString()}
      </div>
    </div>
  );
}

export default HeroStyleDualThumbRange;
