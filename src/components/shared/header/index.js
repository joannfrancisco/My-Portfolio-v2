import React, { useState } from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import Background from "../background";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 ">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 py-2 lg:py-6 flex items-center justify-between  backdrop-blur-xs lg:backdrop-blur-none">
          <Link
            href="/#home"
            className="text-2xl hover:opacity-80 transition-opacity font-logo"
          >
            {"< ann />"}
          </Link>

          <div className="flex gap-1">
            <ThemeToggle />
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 flex items-center justify-center group cursor-pointer touch-manipulation"
              aria-label="Toggle menu"
            >
              <div className="relative w-8 h-8">
                {/* Dot 1 - Top Left / Corner dot when open */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "top-0 left-0 md:group-hover:top-0 md:group-hover:left-0"
                      : "top-0 left-0 md:group-hover:top-0 md:group-hover:left-0"
                  }`}
                />

                {/* Dot 2 - Top Center / First elongated dot of X */}
                <span
                  className={`absolute rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-1.5 h-7 md:group-hover:w-2 md:group-hover:h-1.5 md:group-hover:rotate-0 md:group-hover:top-1/2 md:group-hover:-translate-y-1/2 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"
                      : "w-2 h-2 top-0 left-1/2 -translate-x-1/2 md:group-hover:w-2 md:group-hover:h-1.5 md:group-hover:top-1/2 md:group-hover:-translate-y-1/2"
                  }`}
                />

                {/* Dot 3 - Top Right / Corner dot when open */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "top-0 right-0 md:group-hover:top-0 md:group-hover:right-0"
                      : "top-0 right-0 md:group-hover:top-0 md:group-hover:right-0"
                  }`}
                />

                {/* Dot 4 - Middle Left / Second elongated dot of X */}
                <span
                  className={`absolute rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-1.5 h-7 md:group-hover:w-1.5 md:group-hover:h-2 md:group-hover:rotate-0 md:group-hover:top-1/2 md:group-hover:-translate-y-1/2 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"
                      : "w-2 h-2 top-1/2 -translate-y-1/2 left-0 md:group-hover:w-1.5 md:group-hover:h-2 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2"
                  }`}
                />

                {/* Dot 5 - Center */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "opacity-0 scale-0"
                      : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:group-hover:opacity-0 md:group-hover:scale-0"
                  }`}
                />

                {/* Dot 6 - Middle Right */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "opacity-0 scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      : "top-1/2 -translate-y-1/2 right-0 md:group-hover:w-1.5 md:group-hover:h-2 md:group-hover:right-1/2 md:group-hover:translate-x-1/2"
                  }`}
                />

                {/* Dot 7 - Bottom Left / Corner dot when open */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "bottom-0 left-0 md:group-hover:bottom-0 md:group-hover:left-0"
                      : "bottom-0 left-0 md:group-hover:bottom-0 md:group-hover:left-0"
                  }`}
                />

                {/* Dot 8 - Bottom Center */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "opacity-0 scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      : "bottom-0 left-1/2 -translate-x-1/2 md:group-hover:w-2 md:group-hover:h-1.5 md:group-hover:bottom-1/2 md:group-hover:translate-y-1/2"
                  }`}
                />

                {/* Dot 9 - Bottom Right / Corner dot when open */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "bottom-0 right-0 md:group-hover:bottom-0 md:group-hover:right-0"
                      : "bottom-0 right-0 md:group-hover:bottom-0 md:group-hover:right-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-3xl z-40 bg-(--background) transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Background />
        <div className="px-6 md:px-20 lg:px-80 flex flex-col items-start justify-center h-dvh lg:h-screen space-y-4 md:space-y-8">
          <Link href="/#home" onClick={handleLinkClick}>
            <h1 className="text-4xl md:text-6xl font-header font-parent cursor-pointer inline-flex items-center group">
              <span className="font-wide transition  group-hover:text-(--accent)">
                H
              </span>
              <span className=" transition  ml-4 md:ml-7 group-hover:ml-0 ">
                OME
              </span>
            </h1>
          </Link>

          <Link href="/#about" onClick={handleLinkClick}>
            <h1 className="text-4xl md:text-6xl font-header font-parent cursor-pointer inline-flex items-center group">
              A
              <span className="font-wide transition  group-hover:text-(--accent)">
                B
              </span>
              <span className=" transition  ml-4 md:ml-7 group-hover:ml-0 ">
                OUT
              </span>
            </h1>
          </Link>

          <Link href="/#projects" onClick={handleLinkClick}>
            <h1 className="text-4xl md:text-6xl font-header font-parent cursor-pointer inline-flex items-center group">
              PRO
              <span className="font-wide transition  group-hover:text-(--accent)">
                J
              </span>
              <span className=" transition  ml-4 md:ml-7 group-hover:ml-0 ">
                ECTS
              </span>
            </h1>
          </Link>

          <Link href="/#contact" onClick={handleLinkClick}>
            <h1 className="text-4xl md:text-6xl font-header font-parent cursor-pointer inline-flex items-center group">
              CO
              <span className="font-wide transition  group-hover:text-(--accent)">
                N
              </span>
              <span className=" transition  ml-4 md:ml-7 group-hover:ml-0 ">
                TACT
              </span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
