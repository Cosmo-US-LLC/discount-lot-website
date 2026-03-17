import React from "react";
import KentuckyHero from "../../components/pageComponents/states/Kentucky/KentuckyHero";
import KentuckyMapSection from "../../components/pageComponents/states/Kentucky/KentuckyMapSection";
import KentuckyWhySection from "../../components/pageComponents/states/Kentucky/KentuckyWhySection";
import KentuckyNearbySection from "../../components/pageComponents/states/Kentucky/KentuckyNearbySection";
import KentuckyBackyardSection from "../../components/pageComponents/states/Kentucky/KentuckyBackyardSection";
import KentuckyZoningSection from "../../components/pageComponents/states/Kentucky/KentuckyZoningSection";
import KentuckyUtilitiesSection from "../../components/pageComponents/states/Kentucky/KentuckyUtilitiesSection";
import KentuckyPricingSection from "../../components/pageComponents/states/Kentucky/KentuckyPricingSection";
import KentuckyReviewsSection from "../../components/pageComponents/states/Kentucky/KentuckyReviewsSection";
import KentuckyIncBanner from "../../components/pageComponents/states/Kentucky/KentuckyIncBanner";
import KentuckyFinalCta from "../../components/pageComponents/states/Kentucky/KentuckyFinalCta";

function Kentucky() {
  return (
    <>
      <KentuckyHero />
      <KentuckyMapSection />
      <KentuckyWhySection />
      <KentuckyNearbySection />
      <KentuckyBackyardSection />
      <KentuckyUtilitiesSection />
      <KentuckyZoningSection />
      <KentuckyPricingSection />
      <KentuckyReviewsSection />
      <KentuckyIncBanner />
      <KentuckyFinalCta />
    </>
  );
}

export default Kentucky;


