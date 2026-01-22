"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "./shared/Button";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = [
    {
      title: "Pawikan Divers",
      description:
        "A dive center website featuring immersive GSAP animations, booking system, gallery, blog, and trust-building design that guides visitors from curiosity to confident booking.",
      image: "/images/projects/pawikan/hero.png",
      tech: ["Next.js", "Tailwind CSS", "GSAP"],
      liveLink: "https://pawikandivers.com",
      detailsLink: "/portfolio/pawikan-divers",
    },
    {
      title: "Marci Metzger",
      description:
        "A real estate homepage redesign with a modern, lead-converting layout built with HTML, CSS, and JavaScript with subtle micro-interactions.",
      image: "/images/projects/marci/marci-hero.png",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://marci-metzger-six.vercel.app/",
      detailsLink: "/portfolio/marci-metzger",
    },
    {
      title: "Gr8nola",
      description:
        "Homepage redesign for a health food brand with refined parallax effects, smooth animations, and a modern layout that highlights their brand story.",
      image: "/images/projects/granola/hero.png",
      tech: ["React.js", "Tailwind CSS", "GSAP", "ShadCN"],
      liveLink: "https://project-granola.vercel.app/",
      detailsLink: "/portfolio/granola",
    },
  ];

  return (
    <section
      id="work"
      className="py-24 md:py-32 px-6 bg-white dark:bg-navy-900"
    >
      <div ref={ref} className="max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16 md:mb-24"
        >
          <Label label="Featured Work" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Building <HeaderSpan span="Digital Experiences" />
          </h2>

          <p className="text-xl text-(--foreground)/80 max-w-2xl mx-auto">
            From client projects to personal explorations - here&apos;s some of
            my recent work.
          </p>
        </motion.div>

        {/* Projects Z-Pattern Layout */}
        <div className="space-y-20 md:space-y-28 mb-20">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image - 65% width on desktop */}
                <div className="w-full lg:w-[65%]">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative aspect-17/9 sm:aspect-16/8 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-6 py-3 bg-white text-navy-900 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          Visit Site
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Content - 35% width on desktop */}
                <div className="w-full lg:w-[35%]">
                  <div className="space-y-5">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-(--foreground) leading-[1.1]">
                      {project.title}
                    </h3>

                    <p className="text-base lg:text-lg text-(--foreground)/85 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-full bg-(--cyan)/5 text-(--foreground)/70 text-sm font-medium border "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Link
                        href={project.detailsLink}
                        className="inline-flex items-center gap-2 text-base font-semibold group/link"
                        style={{ color: "var(--cyan)" }}
                      >
                        <span className="relative">
                          Show More
                          <span
                            className="absolute left-0 -bottom-1 w-0 h-0.5 group-hover/link:w-full transition-all duration-300"
                            style={{ backgroundColor: "var(--cyan)" }}
                          />
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to Portfolio Page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="sm:p-8 md:p-12 rounded-2xl text-center relative overflow-hidden"
          // style={{
          //   background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          // }}
        >
          {/* Background decoration */}
          {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
          </div> */}

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-[1.1]">
              Want to See More of My Work?
            </h3>
            <p className="text-navy-300 text-lg mb-6 max-w-2xl mx-auto text-(--foreground)/80">
              Explore my full portfolio including web development projects,
              UI/UX designs, and web applications.
            </p>
            <Button href="/portfolio" icon={null}>
              View All Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
