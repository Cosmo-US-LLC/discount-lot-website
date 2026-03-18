import React from "react";

// Temporary Figma-hosted image; replace with a local asset when ready.
const mapImage =
  "https://www.figma.com/api/mcp/asset/50566bbe-04f3-4929-bc24-f79c72ba9921";

function KentuckyMapSection() {
  return (
    <section className="bg-white md:px-8 px-4 py-16">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-10 text-center">
        <div className="max-w-[560px] space-y-5">
          <h6 className="text-[#114273]">Interactive Property Map</h6>
          <h2 className="text-[#114273]">
            Explore the <span className="text-[#f47b20]">Subdivision</span>
          </h2>
          <p className="body-description text-[#5a6a82]">
            43 numbered lots across a wooded, rolling landscape with paved road
            frontage. Click any lot to explore boundaries and details.
          </p>
        </div>

        <div className="w-full rounded-[16px] shadow-[0px_4px_30px_0px_rgba(10,34,64,0.1)] overflow-hidden">
          <img
            src={mapImage}
            alt="Map view of Kentucky subdivision lots"
            className="h-[400px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <p className="text-[14px] font-semibold text-[#7a8fa8]">
          Can&apos;t see the map above?{" "}
          <a href="#interactive-lot-map" className="text-[#114273] underline">
            Click here to open the interactive lot map
          </a>
        </p>
      </div>
    </section>
  );
}

export default KentuckyMapSection;
