import { ArrowUpRight } from "lucide-react";

const LinkHover = ({ href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-flex items-center w-fit"
    >
      <ArrowUpRight className="w-5 h-5 mr-1" />
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-500 ease-out"></span>
    </a>
  );
};

export default LinkHover;
