// import Image from "next/image";
// import LinkHover from "@/components/shared/link-hover";

// const AboutSection = () => {
//   return (
//     // <div className="w-screen h-dvh lg:h-screen flex justify-center items-center overflow-hidden">
//     <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 pb-20 lg:pb-0 w-full h-full ">
//       <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-5 xl:gap-10 ">
//         {/* Text Content - Left Side */}
//         <div className=" lg:max-w-2xl xl:max-w-3xl order-1 lg:order-0">
//           <h1 className="text-5xl lg:text-6xl font-header">
//             A<span className="font-wide">B</span>&nbsp;OUT
//           </h1>
//           <hr className="mt-2 mb-6 border-t-2" />

//           <p className="text-base md:text-lg leading-relaxed pr-0 font-light">
//             Hello! I’m <span className="font-bold">Jo Ann Francisco</span>, but
//             you can call me Ann. I’m an aspiring full-stack web developer with a
//             strong focus on frontend development and a passion for creating
//             modern, visually appealing, user-centered interfaces. I’m always
//             learning, improving, and exploring new technologies. Outside of
//             coding, I love music, travel, adventures, and a good cup of coffee.
//           </p>

//           <div className="mt-8 font-semibold text-base md:text-lg">
//             <LinkHover href="/sampleresume.pdf" label=" view résumé" />
//           </div>
//         </div>

//         {/* Image - Right Side */}
//         <Image
//           src="/images/profilePic.png"
//           alt="Profile picture of Jo Ann Francisco"
//           width={500}
//           height={500}
//           priority
//           className="relative lg:absolute top-0 right-0 z-[-1] mb-4 object-cover opacity-95 rounded-4xl lg:rounded-tl-none lg:rounded-tr-none lg:rounded-br-none w-full lg:w-[300px] xl:w-[350px] h-[60vmin]  lg:h-[500px] xl:h-[90vmin]"
//         />

//         <Image
//           src="/images/profilePic.png"
//           alt="Profile picture of Jo Ann Francisco"
//           width={500}
//           height={500}
//           priority
//           className=" z-[-1] mb-4 object-cover opacity-0 hidden lg:block w-full lg:w-[300px] xl:w-[350px] h-[60vmin]  lg:h-[500px] xl:h-[90vmin]"
//         />
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default AboutSection;
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LinkHover from "@/components/shared/link-hover";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      // amount: 0.2 = animation starts when 20% of the div is visible
      className="max-w-screen-2xl mx-auto py-16 xl:py-0 w-full h-full relative"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-5 xl:gap-10">
        <div className="lg:max-w-2xl xl:max-w-3xl order-1 lg:order-0 px-6 md:px-10 lg:px-0">
          <h1 className="text-5xl lg:text-6xl font-header">
            A<span className="font-wide">B</span>&nbsp;OUT
          </h1>
          <hr className="mt-2 mb-6 border-t-2" />

          <p className="text-base md:text-lg leading-relaxed pr-0 font-light">
            Hello! I’m <span className="font-bold">Jo Ann Francisco</span>, but
            you can call me Ann. I’m an aspiring full-stack web developer with a
            strong focus on frontend development and a passion for creating
            modern, visually appealing, user-centered interfaces. I’m always
            learning, improving, and exploring new technologies. Outside of
            coding, I love music, travel, adventures, and a good cup of coffee.
          </p>

          <div className="mt-8 font-semibold text-base md:text-lg">
            <LinkHover href="/sampleresume.pdf" label=" view résumé" />
          </div>
        </div>

        <Image
          src="/images/profilePic.png"
          alt="Profile picture of Jo Ann Francisco"
          width={500}
          height={500}
          priority
          className="relative lg:absolute lg:top-0 lg:right-0 z-[-1] mb-4 object-cover opacity-95 rounded-tr-4xl lg:rounded-tr-none rounded-br-4xl lg:rounded-br-none lg:rounded-bl-4xl  w-full lg:w-[300px] xl:w-[350px] min-h-[200px] h-[40vh] lg:h-[500px] xl:h-[90vmin] -ml-12 md:-ml-20 lg:ml-0"
        />

        <Image
          src="/images/profilePic.png"
          alt="Profile picture of Jo Ann Francisco"
          width={500}
          height={500}
          priority
          className="z-[-1] mb-4 object-cover opacity-0 hidden lg:block w-screen lg:w-[300px] xl:w-[350px] h-[60vmin] lg:h-[500px] xl:h-[90vmin]"
        />
      </div>
    </motion.div>
  );
};

export default AboutSection;
