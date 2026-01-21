const Label = ({ label }) => {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-cyan-500 dark:text-cyan-700 border border-cyan-400/40 dark:border-cyan-600/40 rounded-full mb-4">
      {label}
    </span>
  );
};

export default Label;
