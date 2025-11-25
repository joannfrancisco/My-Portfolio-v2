"use client";

import React from "react";
import Header from "../../components/shared/header";
import Noise from "@/components/Noise";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-dvh overflow-hidden">
      <Noise />
      <Header />
      <main>{children}</main>
    </div>
  );
}
