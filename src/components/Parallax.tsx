import React, { useCallback, useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  styles?: React.CSSProperties;
}

export default function Parallax({
  children,
  speed = 0.5,
  className = "",
  styles = {},
}: ParallaxProps) {
  const scrollPosition = useScrollPosition();
  const amount = scrollPosition * speed;

  return (
    <div
      className={`parallax ${className}`}
      style={{
        transform: `translateY(${amount}px)`,
        ...styles,
      }}
    >
      {children}
    </div>
  );
}
