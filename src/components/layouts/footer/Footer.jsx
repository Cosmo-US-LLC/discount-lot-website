import React from "react";

const imgVisa =
  "https://www.figma.com/api/mcp/asset/1bd2df0d-97eb-4e27-a720-3da06e34621a";
const imgMastercard =
  "https://www.figma.com/api/mcp/asset/79105d64-4008-4152-95c9-55d71a801562";
const imgDiscover =
  "https://www.figma.com/api/mcp/asset/9357a068-4afa-46f8-891f-c98811047bd6";
const imgAmex =
  "https://www.figma.com/api/mcp/asset/fccf0da4-c7b0-4df7-a484-5c9891c6602d";
const imgPaypal =
  "https://www.figma.com/api/mcp/asset/de7aefbf-e0ff-4146-8543-b88c7ce9b3fb";

function Footer() {
  return (
    <footer className="border-t border-(--border-subtle) bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-6 text-center text-sm text-slate-700">
          Please read our policies regarding{" "}
          <a
            href="#payment-plans"
            className="font-semibold text-[#114273] underline decoration-[#114273] decoration-solid"
          >
            payment plans
          </a>
          .
        </p>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
          <img
            src={imgVisa}
            alt="Visa"
            className="h-[31px] w-[52px] rounded-[2px] bg-[#f5f5f5] object-contain px-1"
          />
          <img
            src={imgMastercard}
            alt="Mastercard"
            className="h-[31px] w-[52px] rounded-[2px] bg-[#f5f5f5] object-contain px-1.5"
          />
          <img
            src={imgDiscover}
            alt="Discover"
            className="h-[31px] w-[52px] rounded-[2px] bg-[#f5f5f5] object-contain"
          />
          <img
            src={imgAmex}
            alt="American Express"
            className="h-[31px] w-[52px] rounded-[2px] bg-[#f5f5f5] object-contain"
          />
          <img
            src={imgPaypal}
            alt="PayPal"
            className="h-[31px] w-[52px] rounded-[2px] bg-[#f5f5f5] object-contain px-2"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
          <span>Copyright Discount Lots © 2026. All rights reserved.</span>
          <span className="hidden text-slate-300 md:inline">|</span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#privacy" className="hover:text-slate-700">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-700">
              Terms &amp; Conditions
            </a>
            <a href="#pci" className="hover:text-slate-700">
              PCI Security Policy
            </a>
            <a href="#llm-info" className="hover:text-slate-700">
              LLM Info Page
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
