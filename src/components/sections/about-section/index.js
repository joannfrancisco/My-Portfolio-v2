"use client";

import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="  max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0  py-16 w-full h-full relative border-y border-(--foreground)/15 "
    >
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-5 pt-5 lg:pb-10 ">
        <div className="lg:max-w-2xl xl:max-w-4xl order-1 lg:order-0">
          <h1 className="text-4xl lg:text-6xl font-header chrome-text">
            A<span className="font-wide chrome-text">B</span>
            &nbsp;&nbsp;&nbsp;OUT
          </h1>
          <hr className="mt-2 mb-6 border-t-2" />

          <p className="text-base md:text-lg font-light text-left leading-relaxed">
            Hello! I&apos;m{" "}
            <span className="font-semibold">Jo Ann Francisco</span>, but you can
            call me Ann.{" "}
          </p>
          <p className="text-base md:text-lg font-light text-left leading-relaxed mt-5  text-(--foreground)/80">
            I build and redesign websites for small businesses tired of losing
            customers online. Whether you're relying solely on social media
            without a real website, or stuck with an outdated site that isn't
            converting, I'll create a custom platform that actually works.
          </p>
          <p className="text-base md:text-lg font-light text-left leading-relaxed mt-5  text-(--foreground)/80">
            My mission is simple: give you a high-performance website that wins
            more customers and gives you the competitive edge you deserve.
          </p>

          {/* <div className="mt-8 font-semibold text-base md:text-lg">
            <LinkHover href="/JFranciscoResume.pdf" label=" view résumé" />
          </div> */}
          <Link href="#contact">
            <button className="mt-6 w-fit border border-(--foreground)] px-6 py-2 text-sm transition-all  hover:text-background disabled:opacity-50 shadow-[4px_4px_0_0_var(--foreground)] hover:shadow-[8px_8px_0_0_var(--foreground)] active:shadow-[2px_2px_0_0_var(--foreground)]">
              let&apos;s connect
            </button>
          </Link>
        </div>

        <Image
          src="/images/AboutImage.png"
          alt="Image of Jo Ann Francisco in black and white"
          width={500}
          height={700}
          priority
          className="mb-4 object-cover opacity-95 rounded-4xl w-full lg:w-[300px] xl:w-[350px] min-h-[200px] h-[40vh] lg:h-[500px] "
        />

        {/* <Image
          src="/images/AboutImage.png"
          alt="Image of Jo Ann Francisco"
          width={500}
          height={700}
          priority
          className="z-[-1] mb-4 object-cover opacity-0 hidden lg:block w-screen lg:w-[300px] xl:w-[350px] h-[60vmin] lg:h-[500px]"
        /> */}
      </div>
    </section>
  );
};

export default AboutSection;
