"use client";

import React, { useEffect } from "react";
import Header from "../../components/shared/header";
import Noise from "@/components/Noise";

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleResize = () => window.location.reload();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Noise className="pointer-events-none" />
      <Header />
      <main>{children}</main>
    </div>
  );
}
