"use client";
import Link from "next/link";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <DotLottieReact
        src="https://lottie.host/8c83ed78-1392-4f96-ad87-868e81c007d5/UgtCf8AhJR.lottie"
        loop
        autoplay
        className="h-[40vmin]"
      />

      <div className="font-semibold text-base md:text-lg text-center px-4">
        <h1>
          Sorry, the page that you&apos;re looking for doesn&apos;t exist.
        </h1>
        <h1 className="inline-flex">Proceed to</h1>
        <Link href="/" className="relative group ">
          <span className="font-extrabold"> HOMEPAGE.</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-500 ease-out"></span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
