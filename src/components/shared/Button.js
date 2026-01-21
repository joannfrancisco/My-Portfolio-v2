"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Button = ({
  children = "Start Your Project",
  href = "#contact",
  icon: Icon = ArrowRight,
  onClick,
}) => {
  const buttonRef = useRef(null);
  const [circleStyle, setCircleStyle] = useState({
    left: 0,
    top: 0,
    scale: 0,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCircleStyle({
      left: x,
      top: y,
      scale: 0,
      opacity: 1,
    });
    setIsHovered(true);

    requestAnimationFrame(() => {
      setCircleStyle((prev) => ({
        ...prev,
        scale: 1.5,
      }));
    });
  };

  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCircleStyle((prev) => ({
      ...prev,
      left: x,
      top: y,
    }));
  };

  const handleMouseLeave = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCircleStyle({
      left: x,
      top: y,
      scale: 0,
      opacity: 0,
    });
    setIsHovered(false);
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  // Check if href is a hash link or internal route
  const isHashLink = href.startsWith("#");
  const isInternalLink = href.startsWith("/");

  const buttonElement = (
    <span
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative px-8 py-4 bg-transparent rounded-full text-base md:text-lg font-semibold overflow-hidden transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
      style={{
        isolation: "isolate",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "var(--button-hover)",
        color: isHovered ? "var(--button)" : "var(--button-hover)",
      }}
    >
      {/* Magnetic circle background */}
      <span
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "200px",
          height: "200px",
          left: circleStyle.left,
          top: circleStyle.top,
          transform: `translate(-50%, -50%) scale(${circleStyle.scale})`,
          opacity: circleStyle.opacity,
          backgroundColor: "var(--button-hover)",
          transition: isHovered
            ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease"
            : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
          zIndex: -1,
        }}
      />

      {/* Button content */}
      <span
        className="relative z-10 transition-colors duration-300"
        style={{
          color: isHovered ? "var(--button)" : "var(--button-hover)",
        }}
      >
        {children}
      </span>
      {Icon && (
        <Icon
          className="relative z-10 w-5 h-5 transition-all duration-300 group-hover:translate-x-1"
          style={{
            color: isHovered ? "var(--button)" : "var(--button-hover)",
          }}
        />
      )}
    </span>
  );

  // If onClick is provided without href navigation
  if (onClick && !href) {
    return (
      <button type="button" onClick={handleClick} className="inline-block">
        {buttonElement}
      </button>
    );
  }

  // Internal routes use Next.js Link for client-side navigation
  if (isInternalLink) {
    return (
      <Link
        href={href}
        onClick={onClick ? handleClick : undefined}
        className="inline-block"
      >
        {buttonElement}
      </Link>
    );
  }

  // Hash links and external links use regular anchor
  return (
    <a
      href={href}
      onClick={onClick ? handleClick : undefined}
      className="inline-block"
    >
      {buttonElement}
    </a>
  );
};

export { Button };
export default Button;
