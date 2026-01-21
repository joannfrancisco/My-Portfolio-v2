"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export const ButtonContact = ({ children, onClick, className = "" }) => {
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative px-6 py-2.5 bg-cyan-600 dark:bg-cyan-500 text-white rounded-full text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer overflow-hidden ${className}`}
    >
      {/* Magnetic circle that follows mouse */}
      {isHovered && (
        <motion.div
          className="absolute w-24 h-24 bg-cyan-700 dark:bg-cyan-600 rounded-full pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            x: "-50%",
            y: "-50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 6, opacity: 0.8 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default ButtonContact;
