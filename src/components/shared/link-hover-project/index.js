import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectHover = ({ href, name, desc, onHover }) => {
  const nameFormats = {
    moviedux: (
      <>
        m<span className="font-wide pr-2">o</span>vi
        <span className="font-wide pr-2">e</span>dux
      </>
    ),
    tidytouch: (
      <>
        ti<span className="font-wide pr-2">d</span>y&nbsp;t
        <span className="font-wide pr-2">o</span>uch
      </>
    ),
    wouldyourather: (
      <>
        w<span className="font-wide pr-2">o</span>uld&nbsp;y
        <span className="font-wide pr-2">o</span>u&nbsp;r
        <span className="font-wide pr-2">a</span>th
        <span className="font-wide pr-2">e</span>r?
      </>
    ),
    ann: (
      <>
        <span className="font-wide pr-2">a</span>nn
      </>
    ),
    gr8nola: (
      <>
        gr8n<span className="font-wide pr-2">o</span>l
        <span className="font-wide pr-2">a</span>
      </>
    ),
  };

  return (
    <Link
      href={href}
      onMouseEnter={() => onHover(name)}
      onMouseLeave={() => onHover(null)}
      className="flex justify-between items-center border-b py-4 md:py-6 text-sm md:text-lg group"
    >
      <h2
        className="font-black text-base md:text-xl inline-flex items-center text-left"
        style={{ fontFamily: "var(--font-inconsolata)" }}
      >
        <ArrowRight className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 ease-out" />
        <span className="inline-block transition-transform duration-300 ease-out">
          {nameFormats[name] || name}
        </span>
      </h2>
      <p className="text-right">{desc}</p>
    </Link>
  );
};

export default ProjectHover;

// **Key features:**

// 1. **"use client"** - Added to ProjectSection since it now uses state
// 2. **State management** - `hoveredProject` tracks which project is being hovered
// 3. **Dynamic images** - Each project has its own image that fades in on hover
// 4. **Smooth transitions** - `duration-500` provides smooth fade effect
// 5. **Default image** - Profile pic shows when no project is hovered
// 6. **Prop passing** - `onHover` callback updates parent state

// **Image structure needed:**

// public/
//   images/
//     projects/
//       ann.png
//       gr8nola.png
//       moviedux.png
//       tidytouch.png
//       wouldyourather.png
//     profilePic.png
