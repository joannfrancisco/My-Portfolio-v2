import React, { useState } from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname(); // current page path

  // Menu items
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Project One", href: "projects/project1" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl hover:opacity-80 transition-opacity font-logo"
          >
            {"< ann />"}
          </Link>

          <div className="flex gap-1">
            <ThemeToggle />
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 flex items-center justify-center group cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="relative w-8 h-8">
                {/* Dot 1 - Top Left / Corner dot when open */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "top-0 left-0 group-hover:top-0 group-hover:left-0"
                      : "top-0 left-0 group-hover:top-0 group-hover:left-0"
                  }`}
                />

                {/* Dot 2 - Top Center / First elongated dot of X */}
                <span
                  className={`absolute rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-1.5 h-7 group-hover:w-2 group-hover:h-1.5 group-hover:rotate-0 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2"
                      : "w-2 h-2 top-0 left-1/2 -translate-x-1/2 group-hover:w-2 group-hover:h-1.5 group-hover:top-1/2 group-hover:-translate-y-1/2"
                  }`}
                />

                {/* Dot 3 - Top Right / Corner dot when open */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "top-0 right-0 group-hover:top-0 group-hover:right-0"
                      : "top-0 right-0 group-hover:top-0 group-hover:right-0"
                  }`}
                />

                {/* Dot 4 - Middle Left / Second elongated dot of X */}
                <span
                  className={`absolute rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-1.5 h-7 group-hover:w-1.5 group-hover:h-2 group-hover:rotate-0 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2"
                      : "w-2 h-2 top-1/2 -translate-y-1/2 left-0 group-hover:w-1.5 group-hover:h-2 group-hover:left-1/2 group-hover:-translate-x-1/2"
                  }`}
                />

                {/* Dot 5 - Center */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "opacity-0 scale-0"
                      : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:scale-0"
                  }`}
                />

                {/* Dot 6 - Middle Right */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "opacity-0 scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      : "top-1/2 -translate-y-1/2 right-0 group-hover:w-1.5 group-hover:h-2 group-hover:right-1/2 group-hover:translate-x-1/2"
                  }`}
                />

                {/* Dot 7 - Bottom Left / Corner dot when open */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "bottom-0 left-0 group-hover:bottom-0 group-hover:left-0"
                      : "bottom-0 left-0 group-hover:bottom-0 group-hover:left-0"
                  }`}
                />

                {/* Dot 8 - Bottom Center */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "opacity-0 scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      : "bottom-0 left-1/2 -translate-x-1/2 group-hover:w-2 group-hover:h-1.5 group-hover:bottom-1/2 group-hover:translate-y-1/2"
                  }`}
                />

                {/* Dot 9 - Bottom Right / Corner dot when open */}
                <span
                  className={`absolute w-2 h-2 rounded-full border-2 bg-transparent transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "bottom-0 right-0 group-hover:bottom-0 group-hover:right-0"
                      : "bottom-0 right-0 group-hover:bottom-0 group-hover:right-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-lg z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-bold hover:text-blue-400 transition-colors duration-300 ${
                pathname === item.href ? "text-blue-400" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
