import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import LinkHover from "@/components/shared/link-hover";

const AboutSection = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-6 w-full">
        <div className="flex flex-col lg:flex items-center justify-center gap-5">
          {/* Text Content - Left Side */}
          <div className="max-w-2xl xl:max-w-5xl order-1 lg:order-0 mb-0 lg:mb-10 pr-0 lg:pr-20 xl:pr-40">
            <h1 className="text-5xl lg:text-6xl font-header">
              A<span className="font-wide">B</span> OUT
            </h1>
            <hr className="mt-2 mb-6 border-t-2" />

            <p className="text-base md:text-lg leading-relaxed pr-0 lg:pr-6 xl:pr-50 font-light">
              Hello! My name is{" "}
              <span className="font-bold">Jo Ann Francisco</span> but you can
              call me Ann for short. I&apos;m an aspiring Full-Stack Web
              Developer who loves the creative side of coding. For me, it&apos;s
              not just about making things work, it&apos;s about making them
              feel right. I spend my days crafting custom websites that are
              clean, intuitive, and actually fun to navigate while listening to
              music. The best part? Every project teaches me something new, and
              I&apos;m always excited to see where that takes me next.
            </p>

            <div className="mt-8 font-semibold text-base md:text-lg">
              <LinkHover href="/sampleresume.pdf" label=" View Résumé" />
            </div>
          </div>

          {/* Image - Right Side */}
          <div className=" bg-black max-w-2xl z-[-1] lg:max-w-screen-2xl  w-full">
            <Image
              src="/images/profilePic.png"
              alt="Profile picture of Jo Ann Francisco"
              width={500}
              height={500}
              priority
              className="object-cover opacity-95 relative lg:absolute top-0 right-0 rounded-xl lg:rounded-bl-4xl lg:rounded-tr-none lg:rounded-tl-none lg:rounded-br-none w-screen lg:w-[40vmin] xl:w-[55vmin] h-[30vmin] lg:h-[500px] xl:h-[90vmin]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
