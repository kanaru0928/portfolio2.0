import React from "react";
import Parallax from "./Parallax";
import useScrollPosition from "../hooks/useScrollPosition";
import miku1 from "../images/miku1.png";
import { TbChevronsDown } from "react-icons/tb";

interface ParallaxedHeaderProps {
  text: string;
  description: string;
}

export default function ParallaxedHeader({text, description}: ParallaxedHeaderProps) {
  const scrollPosition = useScrollPosition();
  const blurAmount = Math.max(Math.min((scrollPosition - 100) * 0.01, 8), 0);

  return (
    <Parallax styles={{filter: `blur(${blurAmount}px)`}}>
      <div className="hero min-h-screen relative bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse xl:max-w-[90svw] w-full justify-center xl:justify-between">
          <div className="w-1/2 shrink max-h-80 lg:max-h-full">
            <img src={miku1.src} alt="Miku" />
          </div>
          <div className="overlay absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,.2)] dark:from-[rgba(0,0,0,.5)]"></div>
          <div className="xl:w-1/2 shrink z-10">
            <h1 className="text-[clamp(2rem,6vw,4.2rem)] font-black text-accent">
              {text}
            </h1>
            <p className="py-6 font-light">{description}</p>
          </div>
        </div>
        <TbChevronsDown className="absolute bottom-3 text-5xl animate-bounce" />
      </div>
    </Parallax>
  );
}
