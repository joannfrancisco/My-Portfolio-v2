"use client";

import React from "react";
// import Header from "../../components/shared/header";
// import Noise from "@/components/Noise";
// import Landscape from "@/components/shared/mobile-landscape";
// import Background from "@/components/shared/background";

export default function RootLayout({ children }) {
  return (
    <div className="overflow-hidden">
      {/* <Background /> */}
      {/* <Landscape />
      <Noise />
      <Header /> */}
      <main>{children}</main>
    </div>
  );
}
