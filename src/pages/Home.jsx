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
    title: "Own Land for Less Than Rent | Discount Lots",
    description:
      "Own premium land with easy monthly payments. No credit checks, fast digital closing, and flexible terms. Starting at $200/month.",
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
      <HomeFaq eyebrow="Resources" title="Got Questions?" faqs={defaultFaqs} />
      <HomeTestimonials />
      <HomeContactCta />
    </div>
  );
}

export default Home;
