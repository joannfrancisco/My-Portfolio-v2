"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/shared/Button";
import Label from "@/components/shared/Label";
import HeaderSpan from "@/components/shared/HeaderSpan";
import Background from "@/z_app_backup/components_backup/shared/background";
import PixelSnow from "@/components/shared/PixelSnow";

export default function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "NB Auto Trading",
      description:
        "A 4-in-1 car dealership management system with public inventory, admin dashboard, financial reports, and automated Facebook posting — built mobile-first for a Cebu-based secondhand car dealer.",
      image: "/images/projects/nbauto/homepage.png",
      tech: ["Next.js", "Supabase", "Facebook Graph API"],
      liveLink: "https://nbauto.ph",
      detailsLink: "/portfolio/nb-auto",
    },
    {
      id: 2,
      title: "B Digital Media",
      description:
        "A full brand identity and website build for a Dubai-based influencer marketing agency. Features GSAP scroll animations, campaign detail pages with social embeds, live commerce integration, and a dual-form contact system.",
      image: "/images/projects/bdigital/hero.jpg",
      tech: ["Next.js 16", "Tailwind CSS", "GSAP", "Google Forms"],
      liveLink: "https://thebdigitalmedia.com",
      detailsLink: "/portfolio/b-digital-media",
    },
    {
      id: 3,
      title: "Pawikan Divers",
      description:
        "A dive center website featuring immersive GSAP animations, booking system, gallery, blog, and trust-building design that guides visitors from curiosity to confident booking.",
      image: "/images/projects/pawikan/hero.png",
      tech: ["Next.js", "Tailwind CSS", "GSAP"],
      liveLink: "https://pawikandivers.com",
      detailsLink: "/portfolio/pawikan-divers",
    },
    {
      id: 4,
      title: "Marci Metzger",
      description:
        "A real estate homepage redesign with a modern, lead-converting layout built with HTML, CSS, and JavaScript with subtle micro-interactions.",
      image: "/images/projects/marci/marci-hero.png",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://marci-metzger-six.vercel.app/",
      detailsLink: "/portfolio/marci-metzger",
    },

    {
      id: 5,
      title: "Gr8nola",
      description:
        "Homepage redesign for a health food brand with refined parallax effects, smooth animations, and a modern layout that highlights their brand story.",
      image: "/images/projects/granola/hero.png",
      tech: ["React.js", "Tailwind CSS", "GSAP", "ShadCN"],
      liveLink: "https://project-granola.vercel.app/",
      detailsLink: "/portfolio/granola",
    },
    {
      id: 6,
      title: "Moviedux",
      description:
        "A movie discovery app with TMDb API integration, allowing users to explore trending films, search the catalog, and build personal watchlists.",
      image: "/images/projects/moviedux/hero.png",
      tech: ["React.js", "Express.js", "Node.js", "CSS", "TMDb API"],
      liveLink: "https://joannfrancisco.github.io/moviedux/",
      detailsLink: "/portfolio/moviedux",
    },
    // {
    //   id: 6,
    //   title: "Would You Rather?",
    //   description:
    //     "An interactive polling app with Firebase real-time updates, Google sign-in, and anonymous voting for quick, frictionless participation.",
    //   image: "/images/projects/wyr/home.png",
    //   tech: ["React.js", "Express.js", "Node.js", "CSS", "Firebase"],
    //   liveLink: "https://joannfrancisco.github.io/would-you-rather/",
    //   detailsLink: "/portfolio/would-you-rather",
    // },
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-warm-50 dark:bg-navy-900">
        {/* Hero Section */}
        <section className="pt-32 pb-10 px-6 relative overflow-hidden">
          <PixelSnow />
          <div className="max-w-7xl mx-auto text-left sm:text-centerr relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left sm:text-center space-y-6"
            >
              <Label label="My Work" />

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-navy-50 leading-[1.1] ">
                <HeaderSpan span="Portfolio" />
              </h1>

              <p className="text-xl text-(--foreground)/80 max-w-2xl mx-auto">
                A collection of projects showcasing web development, UI/UX
                design, and full-stack applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Z-Pattern Layout */}
        <section ref={ref} className="py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
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
                      className="block group relative"
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
                        <div className="absolute inset-0 bg-navy-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-6 py-3 bg-white dark:bg-navy-800 text-navy-900 dark:text-navy-50 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            Visit Site
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl -z-10" />
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl -z-10" />
                    </a>
                  </div>

                  {/* Content - 35% width on desktop */}
                  <div className="w-full lg:w-[35%]">
                    <div className="space-y-5">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  leading-tight">
                        {project.title}
                      </h2>

                      <p className="text-base lg:text-lg text-(--foreground)/80 leading-relaxed">
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

                      {/* CTA Link */}
                      <div className="pt-2">
                        <Link
                          href={project.detailsLink}
                          className="inline-flex items-center gap-2 text-base font-semibold text-(--cyan) group/link"
                        >
                          <span className="relative">
                            Show More
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--cyan) group-hover/link:w-full transition-all duration-300" />
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
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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

              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold ">
                  Like What You See?
                </h2>
                <p className="text-xl text-navy-300 max-w-2xl mx-auto text-(--foreground)/80">
                  Let&apos;s work together to bring your project to life.
                </p>
                <div className="pt-2">
                  <Button href="/#contact" icon={null}>
                    Start Your Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
