import React from "react";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import IconSection from "./IconSection";

const HeroComponent = ({ videoUrl, smallVideoUrl }) => {
  return (
    <section className="relative">
      <BackgroundVideo videoUrl={videoUrl} smallVideoUrl={smallVideoUrl} />
      <IconSection />
    </section>
  );
};

export default HeroComponent;
