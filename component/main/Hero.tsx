import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full mb-0 sm:mb-0" id="about-me">
      {/* Video only shows on medium screens and above */}
      <video
        autoPlay
        muted
        loop
        className="hidden md:block rotate-180 absolute top-[-340px] h-full w-full left-0 z-[10] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      
      {/* Gradient background for small screens that overlays everything */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-purple-900/30 z-[10]" />
      
      {/* Content container with higher z-index and right alignment */}
        <HeroContent />
    </div>
  );
};

export default Hero;