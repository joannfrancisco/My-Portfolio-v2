"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Button = ({
  children = "Start Your Project",
  href = "#contact",
  icon: Icon = ArrowRight,
  onClick,
  variant = "primary", // "primary" | "secondary" | "ghost"
}) => {
  const buttonRef = useRef(null);
  const [circleStyle, setCircleStyle] = useState({
    left: 0,
    top: 0,
    scale: 0,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  // Variant styles — border color, default text color, and fill color on hover
  const variantStyles = {
    primary: {
      borderColor: "var(--button-hover)",
      defaultColor: "var(--button-hover)",
      hoverFillColor: "var(--button-hover)",
      hoverTextColor: "var(--button)",
    },
    secondary: {
      borderColor: "var(--foreground)",
      defaultColor: "var(--foreground)",
      hoverFillColor: "var(--foreground)",
      hoverTextColor: "var(--background)",
    },
    ghost: {
      borderColor: "transparent",
      defaultColor: "var(--foreground)",
      hoverFillColor: "var(--foreground)/10",
      hoverTextColor: "var(--foreground)",
    },
  };

  const styles = variantStyles[variant] || variantStyles.primary;

  const handleMouseEnter = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCircleStyle({ left: x, top: y, scale: 0, opacity: 1 });
    setIsHovered(true);

    requestAnimationFrame(() => {
      setCircleStyle((prev) => ({ ...prev, scale: 1.5 }));
    });
  };

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCircleStyle((prev) => ({ ...prev, left: x, top: y }));
  };

  const handleMouseLeave = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCircleStyle({ left: x, top: y, scale: 0, opacity: 0 });
    setIsHovered(false);
  };

  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  const isInternalLink = href.startsWith("/");

  const buttonElement = (
    <span
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative px-6 py-3 md:px-8 md:py-4 bg-transparent rounded-full text-sm md:text-lg font-semibold overflow-hidden transition-all duration-300 inline-flex items-center gap-2 md:gap-3 cursor-pointer whitespace-nowrap"
      style={{
        isolation: "isolate",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: styles.borderColor,
        color: isHovered ? styles.hoverTextColor : styles.defaultColor,
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
          backgroundColor: styles.hoverFillColor,
          transition: isHovered
            ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease"
            : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
          zIndex: -1,
        }}
      />

      <span
        className="relative z-10 transition-colors duration-300"
        style={{
          color: isHovered ? styles.hoverTextColor : styles.defaultColor,
        }}
      >
        {children}
      </span>
      {Icon && (
        <Icon
          className="relative z-10 w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:translate-x-1"
          style={{
            color: isHovered ? styles.hoverTextColor : styles.defaultColor,
          }}
        />
      )}
    </span>
  );

  if (onClick && !href) {
    return (
      <button type="button" onClick={handleClick} className="inline-block">
        {buttonElement}
      </button>
    );
  }

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
