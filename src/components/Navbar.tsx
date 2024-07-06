import React, { useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition.js";
import useColorTheme from "../hooks/useColorTheme.js";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const [isShowBg, setIsShowBg] = useState(false);

  const isDarkTheme = useColorTheme();

  const VisibleThreshold = 20;
  const InvisibleThreshold = 10;

  useEffect(() => {
    if (scrollPosition > VisibleThreshold) {
      setIsShowBg(true);
    } else if (scrollPosition < InvisibleThreshold) {
      setIsShowBg(false);
    }
  }, [scrollPosition]);

  return (
    <div
      className={`navbar transition duration-500 ${isShowBg ? "bg-base-300/60 backdrop-blur" : "bg-transparent backdrop-blur-none"}`}
    >
      <div className="flex-1">
        <button className="btn btn-ghost text-xl">Portfolio2.0</button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="btn btn-ghost hidden sm:inline-flex">About</a>
          </li>
          <li>
            <a className="btn btn-ghost hidden sm:inline-flex">Works</a>
          </li>
          <li>
            <a className="btn btn-ghost hidden sm:inline-flex">Articles</a>
          </li>
          <li className="flex flex-col justify-center px-4">
            <input
              type="checkbox"
              data-toggle-theme="latte,mocha"
              className="toggle rounded-full cursor-pointer"
              defaultChecked={isDarkTheme}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
