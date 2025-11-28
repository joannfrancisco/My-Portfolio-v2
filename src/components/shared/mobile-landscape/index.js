"use client";

import { useEffect, useRef, useState } from "react";

const Landscape = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    // Check for mobile landscape orientation
    const checkOrientation = () => {
      const isMobile = window.innerWidth < 940;
      const isLandscapeMode = window.innerHeight < window.innerWidth;
      setIsLandscape(isMobile && isLandscapeMode);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    <>
      {/* Landscape Warning Overlay */}
      {isLandscape && (
        <div className="fixed inset-0 z-9999 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center text-center px-6">
          <div className="animate-bounce mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Rotate Your Screen
          </h2>
          <p className="text-white/80 text-lg">
            Please rotate your device to portrait mode for a better viewing
            experience.
          </p>
        </div>
      )}
    </>
  );
};

export default Landscape;
