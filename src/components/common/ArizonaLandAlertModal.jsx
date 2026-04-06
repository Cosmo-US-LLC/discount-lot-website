import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded border border-black/10 bg-[rgba(222,222,222,0.08)] px-5 py-3 text-[14px] text-[#1a1208] placeholder:text-black/50 outline-none focus:border-[#114273] focus:ring-1 focus:ring-[#114273]";

/**
 * Arizona land alert signup UI (form + success). Use inside {@link ArizonaLandAlertModal}
 * or embed on a page with `isActive` true.
 *
 * @param {object} props
 * @param {string} [props.initialCounty] — Prefills "Preferred County" as "{name} County" when set
 * @param {boolean} [props.isActive=true] — When false, internal reset is skipped; modal sets this from `open`
 * @param {string} [props.className] — Wrapper classes (card padding, etc.)
 * @param {() => void} [props.onDone] — Called when user taps Done on success (e.g. close parent modal)
 */
export function ArizonaLandAlertForm({
  initialCounty = "",
  isActive = true,
  className,
  onDone,
}) {
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [preferredCounty, setPreferredCounty] = React.useState("");
  const [minAcreage, setMinAcreage] = React.useState("");
  const [monthlyBudget, setMonthlyBudget] = React.useState("");

  React.useEffect(() => {
    if (!isActive) return;
    setSubmitSuccess(false);
    setFirstName("");
    setEmail("");
    setMinAcreage("");
    setMonthlyBudget("");
    setPreferredCounty(initialCounty ? `${initialCounty} County` : "");
  }, [isActive, initialCounty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(true);
  };

  const handleDone = () => {
    onDone?.();
  };

  return (
    <div
      className={cn(
        "rounded-md border border-[#f3f4f6] bg-[#f0f4f8] px-6 py-10 md:px-12 md:py-11",
        className,
      )}
    >
      {submitSuccess ? (
        <div className="flex flex-col items-center px-2 pb-4 pt-2 text-center md:px-4">
          <p className=" text-[12px] font-bold uppercase tracking-[3px] text-[#f76d2f]">
            You&apos;re on the list
          </p>
          <h2
            id="land-alert-success-title"
            className="mt-3 text-[26px] font-black leading-tight text-black md:text-[32px] md:leading-[1.2]"
          >
            Thanks{firstName.trim() ? `, ${firstName.trim()}` : ""}!
          </h2>
          <p className="mt-4 max-w-[480px] text-[16px] font-normal leading-6 text-black/60">
            We&apos;ll email you at{" "}
            <span className="font-semibold text-[#114273]">{email}</span> when a
            matching Arizona parcel hits our inventory.
          </p>
          <button
            type="button"
            className="mt-10 w-full max-w-[320px] rounded bg-[#114273] py-3.5 font-['Open_Sans',sans-serif] text-[16px] font-bold text-white transition hover:bg-[#0d3558]"
            onClick={handleDone}
          >
            Done
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center text-center"
          aria-labelledby="land-alert-title"
        >
          <h6 className="text-[12px] font-bold uppercase tracking-[3px] text-black/60">
            Never Miss a Deal
          </h6>
          <h2
            id="land-alert-title"
            className="mt-3 font-['Frank_Ruhl_Libre',serif] text-[28px] font-black leading-tight text-black md:text-[36px] md:leading-[57.2px]"
          >
            Get Arizona Land Alerts
          </h2>
          <p className="mt-2 font-['DM_Sans',sans-serif] text-[16px] font-bold leading-[1.4] text-black/60">
            Before anyone else
          </p>
          <p className="mt-4 max-w-[557px] text-[16px] font-normal leading-6 text-black/60">
            Tell us what you&apos;re looking for we&apos;ll email you the moment
            a matching parcel hits our inventory.
          </p>

          <div className="mt-8 w-full max-w-[556px] space-y-4 text-left">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                placeholder="First Name"
                className={inputClass}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email Address"
                className={inputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              name="preferredCounty"
              placeholder="Preferred County (or All Arizona)"
              className={inputClass}
              value={preferredCounty}
              onChange={(e) => setPreferredCounty(e.target.value)}
            />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="minAcreage"
                placeholder="Min Acreage"
                className={inputClass}
                value={minAcreage}
                onChange={(e) => setMinAcreage(e.target.value)}
              />
              <input
                type="text"
                name="monthlyBudget"
                placeholder="Monthly Budget"
                className={inputClass}
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full max-w-[556px] rounded bg-[#114273] py-3.5 font-['Open_Sans',sans-serif] text-[16px] font-bold text-white transition hover:bg-[#0d3558]"
          >
            Set Land Alert
          </button>
        </form>
      )}
    </div>
  );
}

/**
 * Full-screen modal wrapper around {@link ArizonaLandAlertForm}.
 */
export function ArizonaLandAlertModal({ open, initialCounty = "", onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f2345]/80 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Get Arizona land alerts"
      onClick={onClose}
    >
      <div
        className="relative max-h-[min(90vh,900px)] w-full max-w-[640px] overflow-y-auto shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#94a3b8] transition hover:bg-white hover:text-[#64748b]"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <ArizonaLandAlertForm
          initialCounty={initialCounty}
          isActive={open}
          className="pb-10 pt-12 md:pb-11 md:pt-14"
          onDone={onClose}
        />
      </div>
    </div>
  );
}

export default ArizonaLandAlertModal;
