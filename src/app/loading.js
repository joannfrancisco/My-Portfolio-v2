"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <DotLottieReact
        src="https://lottie.host/5a4675f3-a90e-4ff8-83c1-7e739c514bf4/ZWCxCPbH1M.lottie"
        loop
        autoplay
        className="h-[40vmin]"
      />
    </div>
  );
};

export default LoadingPage;
