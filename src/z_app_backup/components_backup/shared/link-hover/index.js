import { ArrowRight } from "lucide-react";

const LinkHover = ({ href, label }) => {
  return (
    <button className="mt-6 w-fit border border-(--foreground)] group px-6 py-2 text-sm transition-all  hover:text-background disabled:opacity-50 shadow-[4px_4px_0_0_var(--foreground)] hover:shadow-[8px_8px_0_0_var(--foreground)] active:shadow-[2px_2px_0_0_var(--foreground)]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group inline-flex items-center w-fit"
      >
        {label}
        <ArrowRight className="w-5 h-5 pl-1 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </button>
  );
};

export default LinkHover;
