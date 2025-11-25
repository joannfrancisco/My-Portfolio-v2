// "use client";

// const Background = () => {
//   return (
//     <div class="absolute inset-0 flex items-center justify-center overflow-hidden blur-3xl -z-2 opacity-30">
//       <div class="relative w-full h-full flex items-center justify-center">
//         <div class="absolute animate-rotate">
//           <div class="absolute w-96 h-96 bg-cyan-300 rounded-full blur-3xl -translate-x-32 -translate-y-20"></div>
//           <div class="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl translate-x-32 -translate-y-20"></div>
//           <div class="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl translate-y-32"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Background;

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
