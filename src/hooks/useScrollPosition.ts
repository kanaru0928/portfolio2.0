import { useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useThrottle(() => {
    setScrollPosition(window.scrollY);
  }, 10);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return scrollPosition;
}
