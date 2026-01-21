"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/shared/Button";

export default function ProjectDetail({
  // Project Info
  title,
  badge = "Practice Project",
  categories = [],
  techStack = [],
  description = [],
  liveLink,
  // Images
  heroImage,
  projectImages = [],
  // Next Project
  nextProject = null,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-warm-50 dark:bg-navy-900">
        {/* Hero Image */}
        <section className="pt-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-16/8 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              {/* Decorative elements */}
              {/* <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" /> */}
            </motion.div>
          </div>
        </section>

        {/* Project Info */}
        <section ref={ref} className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-cyan-800 dark:text-cyan-400 border border-cyan-600/30 dark:border-cyan-400/30 rounded-full mb-4">
                {badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-navy-50 leading-tight">
                {title}
              </h1>
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Left Column - Meta Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1 space-y-8"
              >
                {/* Category */}
                {categories.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold  uppercase tracking-wide mb-2">
                      Category
                    </h3>
                    <div className="space-y-1">
                      {categories.map((category, idx) => (
                        <p
                          key={idx}
                          className="text-lg text-navy-900 dark:text-navy-50"
                        >
                          {category}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {techStack.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold  uppercase tracking-wide mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-white dark:bg-navy-800 text-navy-700 dark:text-navy-300 text-sm font-medium border border-navy-100 dark:border-navy-700 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Link */}
                {liveLink && (
                  <div>
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-semibold text-cyan-600 hover:text-cyan-500 transition-colors group"
                    >
                      <span>View Live Site</span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                )}
              </motion.div>

              {/* Right Column - Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <div className="space-y-6 text-lg text-navy-600 dark:text-navy-300 leading-relaxed">
                  {description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Screenshots */}
        {projectImages.length > 0 && (
          <section className="py-16 px-6 bg-navy-50 dark:bg-navy-800/50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-navy-50">
                  Project Showcase
                </h2>
              </motion.div>

              <div className="space-y-8">
                {projectImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl group"
                  >
                    <div className="relative aspect-16/8">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        sizes="100vw"
                      />
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-navy-900/80 to-transparent">
                      <p className="text-white text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Next Project */}
        {nextProject && (
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="border-t border-navy-200 dark:border-navy-700 pt-8">
                  <Link href={nextProject.href} className="group block">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-navy-500 dark:text-navy-400 uppercase tracking-wide">
                          Next Project
                        </span>
                        <ArrowRight className="w-4 h-4 text-navy-400 group-hover:translate-x-2 transition-transform" />
                      </div>

                      <div className="text-right">
                        <h3 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-navy-50 group-hover:text-cyan-500 transition-colors">
                          {nextProject.title}
                        </h3>
                        <p className="text-navy-500 dark:text-navy-400">
                          {nextProject.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-2xl bg-linear-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900 text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold ">
                  Want Something Similar?
                </h2>
                <p className="text-xl text-navy-300 max-w-2xl mx-auto">
                  Let&apos;s discuss how I can help bring your project to life.
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
