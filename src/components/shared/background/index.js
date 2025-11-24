"use client";

const Background = () => {
  return (
    <div class="absolute inset-0 flex items-center justify-center overflow-hidden blur-3xl -z-2">
      <div class="relative w-full h-full flex items-center justify-center">
        <div class="absolute animate-rotate">
          <div class="absolute w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-30 -translate-x-32 -translate-y-20"></div>
          <div class="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30 translate-x-32 -translate-y-20"></div>
          <div class="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30 translate-y-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
