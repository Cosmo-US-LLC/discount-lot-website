import React from "react";

function KentuckyMapSection() {
  return (
    <section id="explore-lots" className="bg-white md:px-8 px-4 md:py-18 py-12">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center md:gap-10 gap-6 text-center">
        <div className="max-w-[580px] md:space-y-4 space-y-2">
          <h6 className="text-[#114273]">Interactive Property Map</h6>
          <h2 className="text-[#114273]">
            Explore the <span className="text-[#f47b20]">Subdivision</span>
          </h2>
          <p className="description text-[#000000]">
            43 numbered lots across a wooded, rolling landscape with paved road
            frontage. Click any lot to explore boundaries and details.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-[16px] shadow-[0px_4px_30px_0px_rgba(10,34,64,0.1)]">
          <div className="relative w-full" style={{ paddingTop: "66.6667%" }}>
            <iframe
              src="https://id.land/maps/2b6e8065457f7545420bcaf2d0c51d36/share"
              title="Kentucky subdivision interactive map"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <p className="text-[14px] font-semibold text-[#7a8fa8]">
          Can&apos;t see the map above? <br className="md:hidden block" />
          <a
            href="https://id.land/maps/2b6e8065457f7545420bcaf2d0c51d36/share"
            className="text-[#114273] underline"
          >
            Click here to open the interactive lot map
          </a>
        </p>
      </div>
    </section>
  );
}

export default KentuckyMapSection;
