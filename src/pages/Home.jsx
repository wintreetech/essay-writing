import React from "react";
import {
  Hero,
  Client,
  Benefits,
  Features,
  Testimonial,
  WorkSample,
  Pricing,
  Faq,
} from "../components/index";
import Cta from "../components/Home/Cta";

function Home() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Hero />
      <Client />
      <Benefits />
      <Features />
      <Pricing />
      <Testimonial />
      <WorkSample />
      <Faq />
      <Cta />
    </div>
  );
}

export default Home;
