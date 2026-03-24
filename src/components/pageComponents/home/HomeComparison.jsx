import React from "react";
import { Check, X } from "lucide-react";
import discountLotsLogo from "@/assets/images/home/discount_lots_logo.svg";

const rows = [
  {
    label: "Down payment",
    discountLots: "As little as $500",
    traditional: "20% ($10,000+)",
  },
  {
    label: "Credit check",
    discountLots: "None required",
    traditional: "Strictly required",
  },
  {
    label: "Closing time",
    discountLots: "Less than 5 minutes",
    traditional: "60–90 days average",
  },
  {
    label: "Paperwork",
    discountLots: "Secure digital process",
    traditional: "Stacks of physical forms",
  },
  {
    label: "Agent fees",
    discountLots: "Zero commissions",
    traditional: "Up to 6% commissions",
  },
];

function HomeComparison() {
  return (
    <section className="bg-white py-18">
      {/* Heading */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 text-center space-y-3">
        <h6 className="text-xs font-bold uppercase tracking-[3px] text-[#f76d2f]">
          What makes us different
        </h6>
        <h2 className="text-[#114273]">Discount Lots vs Traditional</h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-[#f76d2f]" />
      </div>

      {/* Comparison table styled like Figma */}
      <div className="mx-auto mt-10 w-full md:max-w-[1080px] max-w-full text-sm text-[#111827]">
        <div className="overflow-hidden rounded-[6px] border border-[#e5e7eb] bg-white shadow-[0px_18px_40px_rgba(15,23,42,0.06)]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="md:text-[20px] text-[16px] font-[700] leading-[28px] uppercase tracking-[-0.5px] text-[#114273]">
                <th className="px-6 py-4 text-left font-semibold">Features</th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="md:inline-flex flex-col items-center gap-3 hidden">
                    <img
                      src={discountLotsLogo}
                      alt="Discount Lots"
                      className="h-10 w-auto"
                    />
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-[#114273]">
                  Traditional banks
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-[#e5e7eb]">
                  <td className="whitespace-nowrap md:px-6 px-3 py-4 text-left font-[600] text-[18px] leading-[28px]">
                    {row.label}
                  </td>
                  <td className="md:px-6 px-3 py-4 text-center">
                    <div className="inline-flex md:w-[280px] w-[60px] items-center gap-4 px-4 py-1 text-[18px] font-[600] leading-[28px] text-[#F76D2F]">
                      <div className="md:h-6 h-4 md:w-6 w-4 flex items-center justify-center rounded-full bg-[#24B24A]">
                        <Check className="md:h-4 h-3 md:w-4 w-3 text-white" />
                      </div>
                      <span className="md:flex hidden">{row.discountLots}</span>
                    </div>
                  </td>
                  <td className="md:px-6 px-3 py-4 text-center">
                    <div className="inline-flex md:w-[280px] w-[60px] items-center gap-4 px-4 py-1 text-[18px] font-[400] leading-[28px] text-[#6B7280]">
                      <div className="md:h-6 h-4 md:w-6 w-4 flex items-center justify-center rounded-full bg-[#EF4444]">
                        <X className="md:h-4 h-3 md:w-4 w-3 text-white" />
                      </div>
                      <span className="md:flex hidden">{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <button type="button" className="btn-secondary text-white">
          Find Affordable Land
        </button>
      </div>
    </section>
  );
}

export default HomeComparison;
