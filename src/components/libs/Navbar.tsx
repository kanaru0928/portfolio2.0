import React, { useEffect, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition.js";
import useColorTheme from "../../hooks/useColorTheme.js";

interface NavbarProps {
  showLinks?: boolean;
}

export default function Navbar({ showLinks = true }: NavbarProps) {
  const scrollPosition = useScrollPosition();
  const [isShowBg, setIsShowBg] = useState(false);

  const isDefaultDarkTheme = useColorTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(isDefaultDarkTheme);

  const VisibleThreshold = 20;
  const InvisibleThreshold = 10;

  useEffect(() => {
    if (scrollPosition > VisibleThreshold) {
      setIsShowBg(true);
    } else if (scrollPosition < InvisibleThreshold) {
      setIsShowBg(false);
    }
  }, [scrollPosition]);
  
  useEffect(() => {
    const theme = isDarkTheme ? "mocha" : "latte";
    console.log("theme", theme);
    document.documentElement.classList.add(theme);
    
    
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [isDarkTheme]);

  return (
    <div
      className={`navbar transition duration-500 ${isShowBg ? "bg-base-300/60 backdrop-blur" : "bg-transparent backdrop-blur-none"}`}
    >
      <div className="flex-1">
        <button className="btn btn-ghost text-xl">Portfolio2.0</button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {showLinks && (
            <>
              <li>
                <a className="btn btn-ghost hidden sm:inline-flex">About</a>
              </li>
              <li>
                <a className="btn btn-ghost hidden sm:inline-flex">Works</a>
              </li>
              <li>
                <a className="btn btn-ghost hidden sm:inline-flex">Articles</a>
              </li>
            </>
          )}
          <li className="flex flex-col justify-center px-4">
            <input
              type="checkbox"
              data-toggle-theme="latte,mocha"
              onChange={() => setIsDarkTheme(!isDarkTheme)}
              className="toggle rounded-full cursor-pointer"
              defaultChecked={isDefaultDarkTheme}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
