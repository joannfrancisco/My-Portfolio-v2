const AboutSection = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 py-6">
        <div className="max-w-xl">
          <h1 className="text-6xl font-header">
            A<span className="font-wide">B</span> OUT
          </h1>
          <hr className="mt-2 mb-6 border-t-2 " />
          <p>
            Hello! My name is Jo Ann Francisco but you can call me Ann for
            short. I'm an aspiring Full-Stack Web Developer who loves the
            creative side of coding. For me, it's not just about making things
            work, it's about making them feel right. I spend my days crafting
            custom websites that are clean, intuitive, and actually fun to
            navigate while listening to music. The best part? Every project
            teaches me something new, and I'm always excited to see where that
            takes me next.
          </p>
          <h1 className="text-6xl font-header font-parent cursor-pointer inline-flex items-center ">
            <span>A</span>

            <div>
              <span className="font-wide transition-all duration-500 ease-in-out">
                B
              </span>
            </div>
            <span className="font-rest transition-all duration-500 ease-in-out ">
              OUT
            </span>
          </h1>

          <br />
          <a
            href="/about"
            className="mt-6 inline-flex items-center gap-2  font-semibold relative group"
          >
            More About Me
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--foreground) group-hover:w-full transition-all duration-500 ease-out"></span>
          </a>
        </div>

        {/* <button className="mt-6 px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform duration-200 font-semibold">
          Get in Touch
        </button>

       
        <button className="mt-6 px-8 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-200 font-semibold">
          View My Work
        </button>

        
        <button className="mt-6 px-8 py-3 bg-black text-white rounded-full hover:gap-3 transition-all duration-200 font-semibold flex items-center gap-2 group">
          Let's Connect
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button> */}

        {/* Option 1: Arrow icon */}
        {/* <a
          href="/projects"
          className="mt-6 inline-flex items-center gap-2 text-black font-semibold relative group"
        >
          View My Work
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <br /> */}

        {/* Option 2: External link icon */}
        {/* <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-black font-semibold relative group"
        >
          Visit GitHub
          <svg
            className="w-4 h-4 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
        </a> */}
        <br />

        {/* Option 3: Thicker underline with slower animation */}
        {/* <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 text-black font-semibold relative group"
        >
          Get in Touch
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-out"></span>
        </a>
        <br />

        {/* Option 4: With gradient underline */}
        {/* <a
          href="/about"
          className="mt-6 inline-flex items-center gap-2 text-black font-semibold relative group"
        >
          Learn More
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-black to-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>  */}
      </div>
    </div>
  );
};

export default AboutSection;
