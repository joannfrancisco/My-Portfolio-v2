const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 w-[900px] h-[450px] -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-60 blur-3xl animate-pulse"
        style={{
          background:
            "radial-gradient(ellipse at center, #A855F766 0%, #C4B5FD33 60%, transparent 70%)",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export default Background;
