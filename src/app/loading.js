"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingPage = () => {
  return (
    <div
      className="
        fixed inset-0 
        flex items-center justify-center 
        z-50 
        transition-colors
      "
    >
      <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]">
        <DotLottieReact
          src="https://lottie.host/848adaa6-a566-4125-baa5-98ead301b53e/u8ABXjgUBZ.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingPage;

// import Image from "next/image";

// const LoadingPage = () => {
//   return (
//     <div className="flex items-center justify-center h-screen w-screen">
//       <Image src="/loader.gif" alt="Loading..." width={150} height={150} />
//     </div>
//   );
// };

// export default LoadingPage;
