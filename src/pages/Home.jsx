import React from "react";
import HomeHero from "../components/pageComponents/home/HomeHero";
import HomeSocialProof from "../components/pageComponents/home/HomeSocialProof";
import HomeFeaturedProperties from "../components/pageComponents/home/HomeFeaturedProperties";
import HomeWhyBuyersChooseUs from "../components/pageComponents/home/HomeWhyBuyersChooseUs";
import HomeHowItWorks from "../components/pageComponents/home/HomeHowItWorks";
import HomeComparison from "../components/pageComponents/home/HomeComparison";
import HomeWhoAreWe from "../components/pageComponents/home/HomeWhoAreWe";
import HomeOurPromise from "../components/pageComponents/home/HomeOurPromise";
import HomeSafeAndSecure from "../components/pageComponents/home/HomeSafeAndSecure";
import HomeFaq from "../components/pageComponents/home/HomeFaq";
import HomeTestimonials from "../components/pageComponents/home/HomeTestimonials";
import HomeContactCta from "../components/pageComponents/home/HomeContactCta";
import { homeFaqs as defaultFaqs } from "@/data/faqs";
import useMeta from "@/lib/useMeta";

function Home() {
  useMeta({
    title: "Buy Land in USA | Starting at $200/Mo | No Credit Check",
    description:
      "Looking to buy land in the USA? Payment plans start at just $200/mo with no credit check & easy owner financing. New lots listed weekly, search now!",
  });

  return (
    <div>
      <HomeHero />
      <HomeSocialProof />
      <HomeFeaturedProperties />
      <HomeHowItWorks />
      <HomeWhyBuyersChooseUs />
      <HomeSafeAndSecure />
      <HomeWhoAreWe />
      <HomeOurPromise />
      <HomeComparison />
      <HomeFaq
        eyebrow="Resources"
        title="Got Questions?"
        faqs={defaultFaqs}
        bgClassName="bg-white"
      />
      <HomeTestimonials />
      <HomeContactCta />
    </div>
  );
}

export default Home;
