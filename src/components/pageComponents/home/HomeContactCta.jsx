import React from "react";

const phoneIcon = "https://www.figma.com/api/mcp/asset/692e6137-220b-43f3-bd7d-2944171b4b74";
const mailIcon = "https://www.figma.com/api/mcp/asset/f92bd2df-caf7-4d5a-b142-29ca023c09ba";

function HomeContactCta() {
  return (
    <section className="bg-[#f8fafc] px-4 py-12">
      <div className="mx-auto max-w-7xl rounded-md border border-[#f3f4f6] bg-white px-8 py-10 shadow-sm md:flex md:items-center md:justify-between">
        <div className="max-w-xl space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-[#114273]">
            Need more details?
          </h2>
          <p className="text-sm text-slate-900">Share your questions with our team.</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:justify-end">
          <a
            href="tel:8668087809"
            className="inline-flex items-center gap-3 rounded-md bg-[#114273] px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-md"
          >
            <img src={phoneIcon} alt="" className="h-4 w-4" />
            <span>Call 866-808-7809</span>
          </a>
          <a
            href="mailto:help@discountlots.com"
            className="inline-flex items-center gap-3 rounded-md border border-[#e5e7eb] bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#114273]"
          >
            <img src={mailIcon} alt="" className="h-4 w-4" />
            <span>help@discountlots.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeContactCta;

