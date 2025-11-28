"use client";

import React from "react";
import Header from "../../components/shared/header";
import Noise from "@/components/Noise";
import Landscape from "@/components/shared/mobile-landscape";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-dvh overflow-hidden">
      <Landscape />
      <Noise />
      <Header />
      <main>{children}</main>
    </div>
  );
}
