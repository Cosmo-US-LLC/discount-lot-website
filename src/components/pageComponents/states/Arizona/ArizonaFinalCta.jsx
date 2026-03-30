import React from "react";
import { ArrowRightIcon } from "lucide-react";

function ArizonaFinalCta() {
  return (
    <section className="bg-[#114273] px-4 py-12 md:px-[200px] md:py-16 text-white text-center">
      <div className="mx-auto flex max-w-[896px] flex-col items-center gap-8">
        <div className="space-y-2 flex flex-col items-center">
          <h1 className="text-[#ffffff]">Ready to Own Arizona Land?</h1>
          <p className="body-description max-w-[640px]">
            Get Started for as Little as $500 Down. No credit check, No agents.
          </p>
        </div>

        <a
          href="https://discountlots.com/property-map?states=Arizona&counties=&usage=&acreage.min=0.07&acreage.max=44.62&price.min=5186&price.max=128999&monthly_payment.min=128&monthly_payment.max=1875"
          className="inline-flex gap-2 items-center justify-center btn-secondary !border-none hover:bg-[#ffffff] hover:text-[#114273]"
        >
          Browse Hot Properties
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export default ArizonaFinalCta;
