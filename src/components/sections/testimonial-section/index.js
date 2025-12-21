"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CEO",
    image: "https://i.pravatar.cc/150?img=1",
    testimonial:
      "Working with this team has been transformative for our business. Their attention to detail and commitment to excellence is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Innovate Labs",
    role: "CTO",
    image: "https://i.pravatar.cc/150?img=13",
    testimonial:
      "The level of professionalism and expertise exceeded our expectations. They delivered results that truly made a difference.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Creative Studios",
    role: "Creative Director",
    image: "https://i.pravatar.cc/150?img=5",
    testimonial:
      "Incredible experience from start to finish. The team understood our vision and brought it to life beyond what we imagined.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="h-full flex flex-col border-y border-(--foreground)/15 max-w-screen-2xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="h-full flex justify-center items-center"
      >
        <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-10 py-16 lg:py-25 flex justify-center items-center">
          <div className="max-w-4xl flex-1">
            <h1 className="text-5xl lg:text-6xl font-header chrome-text">
              TESTIMO<span className="font-wide chrome-text">N</span>&nbsp;IALS
            </h1>
            <hr className="mt-2 mb-6 border-t-2" />

            <p>
              Don&apos;t just take our word for it. Hear from some of our
              satisfied clients.
            </p>

            <section className="py-5">
              <div className="max-w-7xl mx-auto">
                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 flex flex-col"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${
                          index * 0.1
                        }s both`,
                      }}
                    >
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-700 text-sm leading-relaxed mb-6 grow">
                        &quot;{testimonial.testimonial}&quot;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                        {/* <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover ring-2 ring-purple-100"
                        /> */}
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover ring-2 ring-purple-100"
                        />
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-slate-500">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-slate-500 font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
