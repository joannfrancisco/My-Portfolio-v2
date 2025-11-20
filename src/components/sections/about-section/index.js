import Image from "next/image";
import LinkHover from "@/components/shared/link-hover";

const AboutSection = () => {
  return (
    // <div className="w-screen h-dvh lg:h-screen flex justify-center items-center overflow-hidden">
    <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 w-full h-full overflow-y-scroll">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-5 xl:gap-10 ">
        {/* Text Content - Left Side */}
        <div className=" lg:max-w-2xl xl:max-w-3xl order-1 lg:order-0">
          <h1 className="text-5xl lg:text-6xl font-header">
            A<span className="font-wide">B</span>&nbsp;OUT
          </h1>
          <hr className="mt-2 mb-6 border-t-2" />

          <p className="text-base md:text-lg leading-relaxed pr-0 font-light">
            Hello! My name is{" "}
            <span className="font-bold">Jo Ann Francisco</span> but you can call
            me Ann for short. I&apos;m an aspiring Full-Stack Web Developer who
            loves the creative side of coding. I spend my days crafting custom
            websites that are clean, intuitive, and actually fun to navigate
            while listening to music. The best part? Every project teaches me
            something new, and I&apos;m always excited to see where that takes
            me next.
          </p>

          <div className="mt-8 font-semibold text-base md:text-lg">
            <LinkHover href="/sampleresume.pdf" label=" view résumé" />
          </div>
        </div>

        {/* Image - Right Side */}
        <Image
          src="/images/profilePic.png"
          alt="Profile picture of Jo Ann Francisco"
          width={500}
          height={500}
          priority
          className="relative lg:absolute top-0 right-0 z-[-1] mb-4 object-cover opacity-95 rounded-bl-4xl rounded-br-4xl lg:rounded-br-none w-full lg:w-[300px] xl:w-[350px] h-[60vmin]  lg:h-[500px] xl:h-[90vmin]"
        />

        <Image
          src="/images/profilePic.png"
          alt="Profile picture of Jo Ann Francisco"
          width={500}
          height={500}
          priority
          className=" z-[-1] mb-4 object-cover opacity-0 hidden lg:block w-full lg:w-[300px] xl:w-[350px] h-[60vmin]  lg:h-[500px] xl:h-[90vmin]"
        />
      </div>
    </div>
    // </div>
  );
};

export default AboutSection;

//     <div className="w-screen h-dvh lg:h-screen">
//       <div className="max-w-screen-2xl mx-auto w-full h-full relative overflow-hidden px-6 lg:px-0">
//         {/* Grid Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] place-items-center transition gap-5">
//           {/* Left Box - 60% */}
//           <div className="  order-0 lg:order-1 h-[40vh] lg:h-full w-full relative overflow-hidden lg:rounded-tr-4xl rounded-bl-4xl lg:rounded-bl-none rounded-br-4xl lg:rounded-br-none ">
//             <Image
//               src="/images/profilePic.png"
//               alt="Profile picture of Jo Ann Francisco"
//               fill
//               priority
//               className="object-cover opacity-90 z-[-1]"
//             />
//           </div>

//           {/* Right Box - 40% */}
//           <div className="  order-1 lg:order-0 h-[60vh] lg:h-full w-full ">
//             <div className="max-w-2xl lg:max-w-5xl mb-0 lg:mb-10 lg:ml-10 lg:mr-30 ">
//               <h1 className="text-5xl lg:text-6xl font-header">
//                 A<span className="font-wide">B</span> OUT
//               </h1>
//               <hr className="mt-2 mb-6 border-t-2" />

//               <p className="text-base md:text-lg leading-relaxed pr-0 font-light">
//                 Hello! My name is{" "}
//                 <span className="font-bold">Jo Ann Francisco</span> but you can
//                 call me Ann for short. I&apos;m an aspiring Full-Stack Web
//                 Developer who loves the creative side of coding. For me,
//                 it&apos;s not just about making things work, it&apos;s about
//                 making them feel right. I spend my days crafting custom websites
//                 that are clean, intuitive, and actually fun to navigate while
//                 listening to music. The best part? Every project teaches me
//                 something new, and I&apos;m always excited to see where that
//                 takes me next.
//               </p>

//               <div className="mt-8 font-semibold text-base md:text-lg">
//                 <LinkHover href="/sampleresume.pdf" label=" View Résumé" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;
