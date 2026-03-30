import ArizonaFinalCta from "@/components/pageComponents/states/Arizona/ArizonaFinalCta";
import React from "react";
import HomeFaq from "@/components/pageComponents/home/HomeFaq";
import { arizonaFaqs } from "@/data/faqs";
import ArizonaRecentlySoldPropertiesSection from "@/components/pageComponents/states/Arizona/ArizonaRecentlySoldPropertiesSection";
import ArizonaHero from "@/components/pageComponents/states/Arizona/ArizonaHero";
import ArizonaBrowseByCountySection from "@/components/pageComponents/states/Arizona/ArizonaBrowseByCountySection";
import ArizonaHowItWorksSection from "@/components/pageComponents/states/Arizona/ArizonaHowItWorksSection";
import ArizonaWhyBuyLandSection from "@/components/pageComponents/states/Arizona/ArizonaWhyBuyLandSection";
import ArizonaLandForEveryPlanSection from "@/components/pageComponents/states/Arizona/ArizonaLandForEveryPlanSection";
import ArizonaBuyWithConfidenceSection from "@/components/pageComponents/states/Arizona/ArizonaBuyWithConfidenceSection";
import ArizonaExploreByLocationSection from "@/components/pageComponents/states/Arizona/ArizonaExploreByLocationSection";
import ArizonaTrustBarSection from "@/components/pageComponents/states/Arizona/ArizonaTrustBarSection";
import useMeta from "@/lib/useMeta";
import HomeFeaturedProperties from "@/components/pageComponents/home/HomeFeaturedProperties";

function Arizona() {
  return (
    <>
      <ArizonaHero />
      <ArizonaTrustBarSection />
      <HomeFeaturedProperties />
      <ArizonaBrowseByCountySection />
      <ArizonaLandForEveryPlanSection />
      <ArizonaHowItWorksSection />
      <ArizonaWhyBuyLandSection />
      <ArizonaBuyWithConfidenceSection />
      <ArizonaExploreByLocationSection />
      <ArizonaRecentlySoldPropertiesSection />
      <HomeFaq
        sectionId="faq"
        eyebrow="Resources"
        title="Got Questions?"
        faqs={arizonaFaqs}
        singleAccordion
      />
      <ArizonaFinalCta />
    </>
  );
}

export default Arizona;
