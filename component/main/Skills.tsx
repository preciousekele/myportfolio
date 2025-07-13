import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 pt-20 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ scrollMarginTop: '120px' }}
    >
      <SkillText />
      
      {/* Frontend Skills */}
      <div className="flex flex-row justify-center flex-wrap mt-2 sm:mt-4 gap-3 sm:gap-5 items-center w-full max-w-6xl">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width * 0.7}  
            height={image.height * 0.7} 
            index={index}
          />
        ))}
      </div>

      {/* Backend Skills */}
      <div className="flex flex-row justify-center flex-wrap mt-2 sm:mt-4 gap-3 sm:gap-5 items-center w-full max-w-6xl">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width * 0.7}  
            height={image.height * 0.7} 
            index={index}
          />
        ))}
      </div>

      {/* Full Stack Skills */}
      <div className="flex flex-row justify-center flex-wrap mt-2 sm:mt-4 gap-3 sm:gap-5 items-center w-full max-w-6xl">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width * 0.7} 
            height={image.height * 0.7} 
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;