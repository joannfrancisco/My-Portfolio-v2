import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectHover = ({ href, name, desc, onHover }) => {
  const nameFormats = {
    pawikan: (
      <>
        p<span className="font-wide">a</span>&nbsp;&nbsp;&nbsp;wik
        <span className="font-wide">a</span>&nbsp;&nbsp;&nbsp;n
      </>
    ),
    moviedux: (
      <>
        movi<span className="font-wide">e</span>&nbsp;&nbsp;&nbsp;dux
      </>
    ),
    tidytouch: (
      <>
        ti<span className="font-wide">d</span>
        &nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;touch
      </>
    ),
    wouldyourather: (
      <>
        wy<span className="font-wide">d</span>
        &nbsp;&nbsp;&nbsp;?
      </>
    ),
    ann: (
      <>
        <span className="font-wide">a</span>&nbsp;&nbsp;&nbsp;nn
      </>
    ),
    gr8nola: (
      <>
        gr8nol<span className="font-wide">a</span>
      </>
    ),
  };

  return (
    <Link
      href={href}
      onMouseEnter={() => onHover(name)}
      onMouseLeave={() => onHover(null)}
      className="flex justify-between items-center border-b py-4 md:py-4 text-sm md:text-lg group"
    >
      <h2
        className="font-black text-base md:text-xl inline-flex items-center text-left"
        style={{ fontFamily: "var(--font-archivo)" }}
      >
        <ArrowRight className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 ease-out" />
        <span className="inline-block transition-transform duration-300 ease-out">
          {nameFormats[name] || name}
        </span>
      </h2>
      <p className="text-right text-(--foreground)/75">{desc}</p>
    </Link>
  );
};

export default ProjectHover;
