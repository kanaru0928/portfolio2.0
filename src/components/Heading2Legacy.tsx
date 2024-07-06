import React, { useMemo, useRef } from "react";
import { useOffsetTop } from "../hooks/useOffsetTop";

interface Heading2LegacyProps {
  children: React.ReactNode;
}

export default function Heading2Legacy({ children }: Heading2LegacyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { viewportTop } = useOffsetTop(ref);

  const { left, width, rightProgress } = useMemo(() => {
    if (viewportTop === undefined || ref.current === null)
      return { left: 0, width: 0, rightProgress: 0 };

    const viewportProgress = Math.max(
      0,
      Math.min(1, (window.innerHeight - viewportTop) / window.innerHeight),
    );
    const maxProgress = 0.2;
    const moveWidth = 0.2;
    const animationProgress = Math.max(
      0,
      Math.min(
        1,
        (-(viewportProgress - (maxProgress - moveWidth)) *
          (viewportProgress - (maxProgress + moveWidth))) /
          (moveWidth * moveWidth),
      ),
    );
    // console.log({
    //   viewportProgress,
    //   inner: window.innerHeight,
    //   animationProgress,
    // });
    const width =
      Math.max(0, Math.min(1, animationProgress)) * ref.current.offsetWidth;

    const left =
      viewportProgress < maxProgress ? 0 : ref.current.offsetWidth - width;

    const rightProgress =
      viewportProgress < maxProgress ? animationProgress : 1;

    return { left, width, rightProgress };
  }, [viewportTop]);

  return (
    <div ref={ref} className="relative inline-block mt-2 mb-5">
      <h2
        className="text-4xl font-bold px-5 pt-2 text-transparent bg-clip-text"
        style={{
          backgroundImage: `linear-gradient(to right, oklch(var(--bc)) 0%, oklch(var(--bc)) ${rightProgress * 100}%, transparent ${rightProgress * 100}%, transparent 100%)`,
        }}
      >
        {children}
      </h2>
      <div
        className="bg-white absolute h-full top-0 mix-blend-difference"
        style={{
          left: `${left}px`,
          width: `${width}px`,
        }}
      />
    </div>
  );
}
