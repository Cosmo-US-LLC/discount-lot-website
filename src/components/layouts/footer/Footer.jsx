import React from "react";
import imgVisa from "../../../assets/images/home/Visa_Logo.svg";
import imgMastercard from "../../../assets/images/home/Mastercard_Logo.svg";
import imgDiscover from "../../../assets/images/home/Discover_Logo.svg";
import imgAmex from "../../../assets/images/home/American_Express.svg";
import imgPaypal from "../../../assets/images/home/PayPal_Logo.svg";

function Footer() {
  return (
    <footer className="border-t border-[#f3f4f6] bg-white text-slate-700">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-12">
        <p className="mb-6 text-center text-[18px] leading-7 text-[#161009]">
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
            className="h-[60px] w-[102px] rounded-[2px] bg-[#f5f5f5] object-contain px-1"
          />
          <img
            src={imgMastercard}
            alt="Mastercard"
            className="h-[60px] w-[102px] rounded-[2px] bg-[#f5f5f5] object-contain px-1.5"
          />
          <img
            src={imgDiscover}
            alt="Discover"
            className="h-[60px] w-[102px] rounded-[2px] bg-[#f5f5f5] object-contain"
          />
          <img
            src={imgAmex}
            alt="American Express"
            className="h-[60px] w-[102px] rounded-[2px] bg-[#f5f5f5] object-contain"
          />
          <img
            src={imgPaypal}
            alt="PayPal"
            className="h-[60px] w-[102px] rounded-[2px] bg-[#f5f5f5] object-contain px-2"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[14px] font-[400] leading-[24px] text-[#7d7d7d]">
          <span>Copyright Discount Lots © 2026. All rights reserved.</span>
          <span className="text-[#d1d5db]">|</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
