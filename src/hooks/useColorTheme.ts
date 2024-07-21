import { useEffect, useState } from "react";

export default function useColorTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const mode = theme
      ? theme == "mocha"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(mode);
  }, []);

  return isDarkMode;
}
