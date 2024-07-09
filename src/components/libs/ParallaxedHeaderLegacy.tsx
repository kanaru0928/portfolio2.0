import React, { type ReactNode } from "react";
import Parallax from "./Parallax";
import useScrollPosition from "../../hooks/useScrollPosition";
import { TbChevronsDown } from "react-icons/tb";

interface ParallaxedHeaderProps {
  text: string;
  description: string;
  children?: ReactNode;
}

export default function ParallaxedHeader({
  text,
  description,
  children,
}: ParallaxedHeaderProps) {
  const scrollPosition = useScrollPosition();
  const blurAmount = Math.max(Math.min((scrollPosition - 100) * 0.01, 8), 0);

  return (
    <Parallax styles={{ filter: `blur(${blurAmount}px)` }}>
      <div className="hero h-dvh relative bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse xl:max-w-[90svw] w-full h-dvh justify-center xl:justify-between">
          <div className="w-1/2 shrink max-h-80 lg:max-h-full lg:h-full">{children}</div>
          <div className="overlay absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,.2)] dark:from-[rgba(0,0,0,.5)]"></div>
          <div className="xl:w-1/2 shrink z-10">
            <div className="wf-non-active:hidden">
              <h1 className="text-[clamp(2rem,6vw,4.2rem)] font-black text-accent wf-non-active:text-transparent">
                {text}
              </h1>
              <p className="my-6 font-light">{description}</p>
            </div>
            <div className="hidden wf-non-active:block transition">
              <div className="h-[clamp(2rem,6vw,4.2rem)] w-72 bg-base-100 rounded-full animate-pulse"></div>
              <div className="h-4 w-96 my-6 bg-base-100 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        <TbChevronsDown className="absolute bottom-3 text-5xl animate-bounce" />
      </div>
    </Parallax>
  );
}
