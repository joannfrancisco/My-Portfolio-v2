"use client";

import React, { useEffect } from "react";
import Header from "../../components/shared/header";
import Noise from "@/components/Noise";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleResize = () => window.location.reload();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <DotLottieReact
          src="https://lottie.host/561382fc-e5ab-49ac-ab24-871c9ec990ea/2wxYrP8qI3.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* <div className="absolute inset-0 -z-10">
        <DotLottieReact
          src="https://lottie.host/561382fc-e5ab-49ac-ab24-871c9ec990ea/2wxYrP8qI3.lottie"
          loop
          autoplay
          className="w-full h-full"
        />

        <div className="absolute inset-0  dark:backdrop-blur-sm"></div>
      </div> */}

      <Noise className="pointer-events-none" />
      <Header />
      <main>{children}</main>
    </div>
  );
}
