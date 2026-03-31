import React from "react";
import safeAndSecureLandImage from "@/assets/images/home/save_and_secure.webp";
import checkIcon from "@/assets/images/home/icon_park_twotone_check_one.webp";

function HomeSafeAndSecure() {
  const handleFindAffordableLandClick = () => {
    const heroSection = document.getElementById("home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.hash = "home";
  };

  return (
    <section className="bg-white py-18">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="grid md:gap-20 gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
          {/* Left: copy + CTA */}
          <div className="space-y-6 max-w-[576px] flex flex-col items-center justify-center md:items-start md:justify-start">
            <div className="space-y-4 text-center md:text-left">
              <h6 className="text-[#f76d2f]">Save and secure</h6>
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-[#114273]">The Land-Vetting Guarantee</h2>
                <div className="h-1 w-20 rounded-full bg-[#f76d2f] mx-auto md:mx-0" />
              </div>
              <p className="description text-[#000000]">
                We personally own every land we sell, and each one has been
                evaluated for access, utilities, and permitted uses.
              </p>
            </div>

            <button
              type="button"
              className="btn-secondary text-white"
              onClick={handleFindAffordableLandClick}
            >
              Find Affordable Land
            </button>
          </div>

          {/* Right: image + highlights */}
          <div className="space-y-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-[24px] font-bold leading-[32px] tracking-[-0.6px] text-[#114273]">
                Utility Proximity Checks
              </h3>
              <p className="description text-[#6b7280]">
                Water, electric, and road access, verified and listed on every
                property.
              </p>
            </div>

            <div className="md:h-[400px] h-[200px] w-full overflow-hidden rounded-[8px]">
              <img
                src={safeAndSecureLandImage}
                alt="Aerial view of vetted land property"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid md:gap-2 gap-2 grid-cols-2 md:grid-cols-3">
              {[
                "Legal Access Verified",
                "Build ability Confirmed",
                "Zoning Authenticated",
              ].map((label) => (
                <div
                  key={label}
                  className="flex md:flex-col flex-row gap-2 rounded-[6px] border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.05)] md:px-2 px-2 py-4"
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
