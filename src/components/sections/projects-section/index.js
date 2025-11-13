const ProjectSection = () => {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-screen-2xl mx-auto w-full h-full relative">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] place-items-center absolute bottom-0 left-0 lg:w-4xl xl:w-6xl max-w-6xl h-5/6 transition">
          {/* Left Box - 60% */}
          <div className="bg-amber-400 h-[40vh] lg:h-full w-[80vw] lg:w-full" />

          {/* Right Box - 40% */}
          <div className="bg-amber-700 h-[40vh] lg:h-full w-[80vw] lg:w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
