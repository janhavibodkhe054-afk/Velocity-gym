import React from "react";
import SwimmingHero from "../components/Swimming/SwimmingHero";
import AboutSwimming from "../components/Swimming/AboutSwimming";
import SwimmingPrograms from "../components/Swimming/SwimmingPrograms";
import GalleryStrip from "../components/Swimming/GalleryStrip";

const Swimming = () => {
  return (
    <div>
      <SwimmingHero />
      <AboutSwimming/>
      <SwimmingPrograms/>
      <GalleryStrip/>
    </div>
  );
};

export default Swimming;
