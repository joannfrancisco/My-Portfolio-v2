"use client";

import React from "react";

export default function RootLayout({ children }) {
  return (
    <div className="overflow-hidden ">
      <main>{children}</main>
    </div>
  );
}
