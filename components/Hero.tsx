import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenrateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 h-screen w-full flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white" />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[89vw] text-center">
        <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-2">
          Kumar Satya Sri Ram
        {/* <TextGenerateEffect
          // className="text-[40px] md:text-5xl lg:text-6xl"
          className="uppercase tracking-widest text-xs text-blue-100 mb-2"
          words="Kumar Satya Sri Ram Boppana"
          /> */}
          </h2>
        <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hello, I&apos;m Kumar, a Developer Based in India.
        </p>
        <a href="#projects">
          <MagicButton
            title="Show my Work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
