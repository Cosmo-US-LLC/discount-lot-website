import React from "react";
import HomeHero from "../components/pageComponents/home/HomeHero";
import HomeSocialProof from "../components/pageComponents/home/HomeSocialProof";
import HomeFeaturedProperties from "../components/pageComponents/home/HomeFeaturedProperties";
import HomeWhyBuyersChooseUs from "../components/pageComponents/home/HomeWhyBuyersChooseUs";
import HomeHowItWorks from "../components/pageComponents/home/HomeHowItWorks";
import HomeComparison from "../components/pageComponents/home/HomeComparison";
import HomeWhoAreWe from "../components/pageComponents/home/HomeWhoAreWe";
import HomeSafeAndSecure from "../components/pageComponents/home/HomeSafeAndSecure";
import HomeFaq from "../components/pageComponents/home/HomeFaq";
import HomeTestimonials from "../components/pageComponents/home/HomeTestimonials";
import HomeContactCta from "../components/pageComponents/home/HomeContactCta";

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeSocialProof />
      <HomeFeaturedProperties />
      <HomeWhyBuyersChooseUs />
      <HomeHowItWorks />
      <HomeComparison />
      <HomeWhoAreWe />
      <HomeSafeAndSecure />
      <HomeFaq />
      <HomeTestimonials />
      <HomeContactCta />
    </div>
  );
}

export default Home;
