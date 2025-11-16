import { ArrowRight } from "lucide-react";

const ProjectHover = ({ href, name, desc }) => {
  const nameFormats = {
    moviedux: (
      <>
        m<span className="font-wide pr-2">o</span>vi
        <span className="font-wide pr-2">e</span>dux
      </>
    ),
    tidytouch: (
      <>
        ti<span className="font-wide pr-2">d</span>yt
        <span className="font-wide pr-2">o</span>uch
      </>
    ),
    wouldyourather: (
      <>
        w<span className="font-wide pr-2">o</span>uld&nbsp;y
        <span className="font-wide pr-2">o</span>u&nbsp;r
        <span className="font-wide pr-2">a</span>th
        <span className="font-wide pr-2">e</span>r
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center border-b py-4 md:py-6 text-sm md:text-lg group"
    >
      <h2
        className="font-black text-base md:text-xl inline-flex items-center"
        style={{ fontFamily: "var(--font-inconsolata)" }}
      >
        <ArrowRight className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 ease-out" />
        <span className="inline-block transition-transform duration-300 ease-out">
          {nameFormats[name] || name}
        </span>
      </h2>
      <h2>{desc}</h2>
    </a>
  );
};

export default ProjectHover;
