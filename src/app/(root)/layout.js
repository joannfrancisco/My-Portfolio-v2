// "use client";

// import React, { useEffect } from "react";
// import Header from "../../components/shared/header";
// import Noise from "@/components/Noise";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// export default function RootLayout({ children }) {
//   useEffect(() => {
//     const handleResize = () => window.location.reload();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <div className="fixed inset-0 -z-10 opacity-40 blur-xs">
//         <DotLottieReact
//           src="https://lottie.host/6b76cbe8-8980-4767-97d4-793df77312ed/n4gsa9vPQ7.lottie"
//           loop
//           autoplay
//           style={{ width: "100%", height: "100%" }}
//         />
//       </div>

//       <Noise />
//       <Header />
//       <main>{children}</main>
//     </div>
//   );
// }

"use client";

import React from "react";
import Header from "../../components/shared/header";
import Noise from "@/components/Noise";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RootLayout({ children }) {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* Lottie Background */}
      {/* <div className="fixed inset-0 -z-10 opacity-40 blur-xs pointer-events-none">
        <DotLottieReact
          src="https://lottie.host/6b76cbe8-8980-4767-97d4-793df77312ed/n4gsa9vPQ7.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div> */}

      {/* Noise overlay */}
      <Noise />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
}
