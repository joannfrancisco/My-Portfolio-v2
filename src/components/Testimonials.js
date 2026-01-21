"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import Button from "./shared/Button";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      text: "Working with Ann was so easy. She didn't just redesign our site, she made it easier and more enjoyable to use. She simplified everything while keeping it visually clean. We couldn't be happier.",
      author: "Jeiann Ermac",
      position: "Systems Administrator",
      company: "KK Solutions",
      image: "/images/author/JeiannErmac.png",
      rating: 5,
    },
    {
      id: 2,
      text: "Ann was a dream to work with! She took the time to understand our goals and built a beautiful, high-performance site that fits our business perfectly. She's professional, kind, and so talented. We couldn't have asked for a better experience.",
      author: "Zandor Magno",
      position: "CMAS Course Director",
      company: "Pawikan Divers",
      image: "/images/author/ZandorMagno.png",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-navy-900 dark:bg-navy-950  relative overflow-hidden">
      {/* Background decoration */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
      </div> */}

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="Client Success Stories" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6  leading-snug">
            What <HeaderSpan span="Clients Say" />
          </h2>
          <p className="text-xl text-navy-300 max-w-2xl mx-auto">
            Don't just take my word for it. Hear from small business owners
            who've transformed their online presence.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-navy-800/50 dark:bg-navy-900/50 backdrop-blur-sm border border-navy-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-navy-100 leading-relaxed mb-6 text-lg italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-navy-700/50">
                  {/* Image */}
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-cyan-500/20 group-hover:ring-cyan-500/50 transition-all">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-sm text-navy-400">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-cyan-400 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-cyan-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-navy-300 text-lg mb-6">
            Ready to join these successful businesses?
          </p>

          <Button href="#contact" icon={null}>
            Start Your Project
          </Button>
        </motion.div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_2px,transparent_3px),linear-gradient(90deg,rgba(6,182,212,0.03)_2px,transparent_3px)] bg-size-[64px_64px] pointer-events-none" />
    </section>
  );
}
