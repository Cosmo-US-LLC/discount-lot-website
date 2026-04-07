import React from "react";
import { HeaderLogo } from "@/components/common/IconsSvgs";
import imgVisa from "../../../assets/images/home/Visa_Logo.svg";
import imgMastercard from "../../../assets/images/home/Mastercard_Logo.svg";
import imgDiscover from "../../../assets/images/home/Discover_Logo.svg";
import imgAmex from "../../../assets/images/home/American_Express.svg";
import imgPaypal from "../../../assets/images/home/PayPal_Logo.svg";

const logoOnDarkStyle = {
  "--logo-flame": "#55a3d6",
  "--logo-flame-highlight": "#ffffff",
  "--logo-text": "#ffffff",
  "--logo-accent": "#489cd8",
};

function Footer() {
  return (
    <footer className="bg-[#252525] text-white/55 py-12 md:py-14">
      <div className="mx-auto flex max-[1280px] flex-col items-center md:px-8 px-4 mb-10 md:mb-0">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-6">
            <div
              className="inline-flex"
              style={logoOnDarkStyle}
              role="img"
              aria-label="Discount Lots"
            >
              <HeaderLogo
                className="block h-[37px] w-[160px] max-w-full"
                aria-hidden
              />
            </div>

            <div className="max-w-xl text-center text-[14px] leading-normal text-[#FFFFFF8C]">
              <p className="mb-0">
                © 2024 DiscountLots. All parcels sold as-is. Owner financing
                available on all listings.
              </p>
              <p className="mb-0">Not a licensed real estate broker.</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <p className="text-center text-[18px] leading-7 text-white/55">
                Please read our policies regarding{" "}
                <a
                  href="https://discountlots.com/policies/"
                  className="font-bold text-white/55 underline decoration-solid"
                >
                  Payment Plans
                </a>
                .
              </p>

              <div className="flex flex-wrap items-center justify-center gap-[15px]">
                <div className="relative h-[31px] w-[52px] shrink-0 overflow-hidden rounded-[2px] bg-[#f5f5f5]">
                  <img src={imgVisa} alt="Visa" className="object-contain" />
                </div>
                <div className="relative h-[31px] w-[52px] shrink-0 overflow-hidden rounded-[2px] bg-[#f5f5f5]">
                  <img
                    src={imgMastercard}
                    alt="Mastercard"
                    className=" object-contain"
                  />
                </div>
                <div className="relative h-[31px] w-[52px] shrink-0">
                  <img
                    src={imgDiscover}
                    alt="Discover"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative h-[31px] w-[52px] shrink-0">
                  <img
                    src={imgAmex}
                    alt="American Express"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative h-[31px] w-[52px] shrink-0 overflow-hidden rounded-[2px] bg-[#f5f5f5]">
                  <img
                    src={imgPaypal}
                    alt="PayPal"
                    className="  object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[14px] text-white"
            aria-label="Legal"
          >
            <a
              href="https://discountlots.com/privacy-policy/"
              className="hover:opacity-90"
            >
              Privacy Policy
            </a>
            <span className="text-white/70 text-2xl" aria-hidden="true">
              ·
            </span>
            <a
              href="https://discountlots.com/terms-and-conditions/"
              className="hover:opacity-90"
            >
              Terms of Service
            </a>
            <span className="text-white/70 text-2xl" aria-hidden="true">
              ·
            </span>
            <a
              href="https://discountlots.com/pci-dss/"
              className="hover:opacity-90"
            >
              PCI Security Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
