import React from "react";
import safeAndSecureLandImage from "@/assets/images/home/save_and_secure.webp";
import checkIcon from "@/assets/images/home/icon_park_twotone_check_one.webp";

function HomeSafeAndSecure() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="grid gap-24 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
          {/* Left: copy + CTA */}
          <div className="space-y-6 max-w-[576px]">
            <div className="space-y-4">
              <h6 className="text-[#f76d2f]">Save and secure</h6>
              <div className="space-y-2">
                <h2 className="text-[#114273]">The Land-Vetting Guarantee</h2>
                <div className="h-1 w-20 rounded-full bg-[#f76d2f]" />
              </div>
              <p className="body-description text-[#111827]">
                We personally own every land we sell, and each one has been
                evaluated for access, utilities, and permitted uses.
              </p>
            </div>

            <button type="button" className="btn-secondary text-white">
              Find Affordable Land
            </button>
          </div>

          {/* Right: image + highlights */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-[24px] font-bold leading-[32px] tracking-[-0.6px] text-[#114273]">
                Utility Proximity Checks
              </h3>
              <p className="description text-[#6b7280]">
                Water, electric, and road access, verified and listed on every
                property.
              </p>
            </div>

            <div className="h-[400px] w-full overflow-hidden rounded-[8px]">
              <img
                src={safeAndSecureLandImage}
                alt="Aerial view of vetted land property"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {[
                "Legal Access Verified",
                "Build-ability Confirmed",
                "Zoning Authenticated",
              ].map((label) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 rounded-[6px] border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.05)] px-[21px] py-[18px]"
                >
                  <div className="h-6 w-6">
                    <img
                      src={checkIcon}
                      alt="Checked"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-[16px] font-bold leading-[24px] text-[#114273]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSafeAndSecure;
