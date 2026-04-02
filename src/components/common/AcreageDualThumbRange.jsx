import React from "react";

const MIN_ACRES = 0.07;
const MAX_ACRES = 40;
const ACRES_STEP = 0.01;

function AcreageDualThumbRange({
  valueMin,
  valueMax,
  onChangeMin,
  onChangeMax,
  onReset,
  minBound = MIN_ACRES,
  maxBound = MAX_ACRES,
  step = ACRES_STEP,
}) {
  const trackRef = React.useRef(null);
  const [activeThumb, setActiveThumb] = React.useState(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const acresMinPercent =
    ((valueMin - minBound) / (maxBound - minBound)) * 100;
  const acresMaxPercent =
    ((valueMax - minBound) / (maxBound - minBound)) * 100;

  const acresMinPercentClamped = Math.min(100, Math.max(0, acresMinPercent));
  const acresMaxPercentClamped = Math.min(100, Math.max(0, acresMaxPercent));
  const fillLeft = Math.min(acresMinPercentClamped, acresMaxPercentClamped);
  const fillRight = Math.max(acresMinPercentClamped, acresMaxPercentClamped);
  const fillWidth = fillRight - fillLeft;

  const roundToStep = (value) => {
    const stepped = Math.round(value / step) * step;
    return Math.round(stepped * 100) / 100;
  };

  const percentToValue = (percent) => {
    const raw = minBound + (percent / 100) * (maxBound - minBound);
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
    onChangeMin(next <= valueMax ? next : valueMax);
  };

  const setMaxFromPercent = (percent) => {
    const next = percentToValue(percent);
    onChangeMax(next >= valueMin ? next : valueMin);
  };

  const chooseThumbFromPercent = (percent) => {
    const minDist = Math.abs(percent - acresMinPercentClamped);
    const maxDist = Math.abs(percent - acresMaxPercentClamped);
    return minDist <= maxDist ? "min" : "max";
  };

  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    const percent = getPercentFromClientX(e.clientX);
    const thumb = chooseThumbFromPercent(percent);
    setActiveThumb(thumb);
    setIsDragging(true);

    if (thumb === "min") setMinFromPercent(percent);
    else setMaxFromPercent(percent);

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !activeThumb) return;
    const percent = getPercentFromClientX(e.clientX);
    if (activeThumb === "min") setMinFromPercent(percent);
    if (activeThumb === "max") setMaxFromPercent(percent);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setActiveThumb(null);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={trackRef}
        className="relative h-6 w-full touch-none select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
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

        <div className="sr-only" aria-live="polite">
          {valueMin.toFixed(2)} to {valueMax.toFixed(2)} acres selected
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-0.5">
          <span className="text-xl font-bold leading-7 text-[#114273]">
            {valueMin.toFixed(2)} - {valueMax.toFixed(2)}
          </span>
          <span className="text-[10px] leading-5 text-[#9ca3af]">Acres</span>
        </div>
        {onReset ? (
          <button
            type="button"
            className="rounded px-2 py-1 text-xs font-semibold uppercase leading-[18px] text-[#f76d2f]"
            onClick={onReset}
          >
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
}

const DEFAULT_MIN_ACRES = MIN_ACRES;
const DEFAULT_MAX_ACRES = MAX_ACRES;

export default AcreageDualThumbRange;
export {
  MIN_ACRES,
  MAX_ACRES,
  ACRES_STEP,
  DEFAULT_MIN_ACRES,
  DEFAULT_MAX_ACRES,
};
