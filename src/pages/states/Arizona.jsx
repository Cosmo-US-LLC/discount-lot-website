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
import { arizonaFeaturedPropertyCards } from "@/data/featuredProperties";
import HomeTestimonials from "@/components/pageComponents/home/HomeTestimonials";

function Arizona() {
  return (
    <>
      <ArizonaHero />
      <ArizonaTrustBarSection />
      <HomeFeaturedProperties
        sectionId="featured-properties"
        eyebrow="Verified & Available Now"
        title="Arizona Land for Sale"
        description="Every lot is title-verified and lien-free, for a secure purchase. We offer residential, agricultural, off-grid, and investment land, for you to explore lots in arizona"
        cards={arizonaFeaturedPropertyCards}
        browseCtaLabel="Browse Arizona Properties"
        browseScrollTargetId="featured-properties"
      />
      <ArizonaBrowseByCountySection />
      <ArizonaHowItWorksSection />
      <ArizonaWhyBuyLandSection />
      <ArizonaLandForEveryPlanSection />
      <ArizonaBuyWithConfidenceSection />
      <ArizonaExploreByLocationSection />
      <HomeTestimonials />
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
