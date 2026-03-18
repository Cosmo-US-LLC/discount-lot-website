import React from "react";
import KentuckyHero from "../../components/pageComponents/states/Kentucky/KentuckyHero";
import KentuckyMapSection from "../../components/pageComponents/states/Kentucky/KentuckyMapSection";
import KentuckyLandInfoSection from "../../components/pageComponents/states/Kentucky/KentuckyLandInfoSection";
import KentuckyFullPictureSection from "../../components/pageComponents/states/Kentucky/KentuckyFullPictureSection";
import KentuckyWhySection from "../../components/pageComponents/states/Kentucky/KentuckyWhySection";
import KentuckyNearbySection from "../../components/pageComponents/states/Kentucky/KentuckyNearbySection";
import KentuckyBackyardSection from "../../components/pageComponents/states/Kentucky/KentuckyBackyardSection";
import KentuckyZoningSection from "../../components/pageComponents/states/Kentucky/KentuckyZoningSection";
import KentuckyUtilitiesSection from "../../components/pageComponents/states/Kentucky/KentuckyUtilitiesSection";
import KentuckyPricingSection from "../../components/pageComponents/states/Kentucky/KentuckyPricingSection";
import KentuckyReviewsSection from "../../components/pageComponents/states/Kentucky/KentuckyReviewsSection";
import KentuckyIncBanner from "../../components/pageComponents/states/Kentucky/KentuckyIncBanner";
import KentuckyBookingCallSection from "../../components/pageComponents/states/Kentucky/KentuckyBookingCallSection";
import KentuckyVideoTestimonialsSection from "../../components/pageComponents/states/Kentucky/KentuckyVideoTestimonialsSection";
import KentuckyFinalCta from "../../components/pageComponents/states/Kentucky/KentuckyFinalCta";
import KentuckyDescriptions from "@/components/pageComponents/states/Kentucky/KentuckyDescriptions";
import HomeFaq from "../../components/pageComponents/home/HomeFaq";
import { kentuckyFaqs } from "@/data/faqs";

function Kentucky() {
  return (
    <>
      <KentuckyHero />
      <KentuckyMapSection />
      <KentuckyLandInfoSection />
      <KentuckyFullPictureSection />
      <KentuckyWhySection />
      <KentuckyNearbySection />
      <KentuckyBackyardSection />
      <KentuckyZoningSection />
      <KentuckyUtilitiesSection />
      <KentuckyPricingSection />
      <KentuckyVideoTestimonialsSection />
      <KentuckyReviewsSection />
      <KentuckyIncBanner />
      <KentuckyBookingCallSection />
      <HomeFaq
        eyebrow="Kentucky FAQs"
        title="Frequently Asked Questions"
        faqs={kentuckyFaqs}
      />
      <KentuckyFinalCta />
      <KentuckyDescriptions />
    </>
  );
}

export default Kentucky;
