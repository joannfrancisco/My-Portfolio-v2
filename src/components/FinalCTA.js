"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import toast from "react-hot-toast";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";
import ButtonContact from "./shared/ButtonContact";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const toastId = toast.loading("Sending message...");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          business: formData.business,
          message: formData.message,
          company: e.target.honeypot.value,
        }),
      });

      toast.dismiss(toastId);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent! I'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", business: "", message: "" });
    } catch (error) {
      toast.error(
        error.message ||
          "Something went wrong. Please try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 bg-warm-50 dark:bg-navy-800 relative overflow-hidden"
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="Get in Touch" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Let&apos;s Build <HeaderSpan span="Something Better" />.
          </h2>
          <p className="text-xl text-(--foreground)/80 max-w-2xl mx-auto">
            Tell me what&apos;s slowing your business down. We&apos;ll figure
            out the right shape together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-(--foreground)">
                Got a problem? Let&apos;s solve it.
              </h3>
              <p className="text-lg text-(--foreground)/80 leading-relaxed mb-8">
                Whether you have a clear spec or just a rough idea of what needs
                fixing, I&apos;d love to hear it. Drop me a message and
                I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-(--cyan)/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-(--cyan)" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:info@joannfrancisco.com"
                    className="text-(--foreground)/80 hover:text-(--cyan) transition-colors"
                  >
                    info@joannfrancisco.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-(--cyan)/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-(--cyan)" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-(--foreground)/80">
                    San Carlos City, Philippines
                  </p>
                  <p className="text-sm text-(--foreground)/80 mt-1">
                    Working with clients worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-navy-200 dark:border-navy-700">
              <h4 className="font-semibold text-navy-900 dark:text-navy-50 mb-4">
                What happens next:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-(--cyan) flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span className="text-(--foreground)/80">
                    I&apos;ll review your message and reply within 24 hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-(--cyan) flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span className="text-(--foreground)/80">
                    We&apos;ll hop on a free discovery call to map out your
                    problem and what a solution could look like
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-(--cyan) flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span className="text-(--foreground)/80">
                    You&apos;ll get a detailed proposal with scope, timeline,
                    and fixed pricing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-(--cyan) flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <span className="text-(--foreground)/80">
                    Once we&apos;re aligned, we kick off and start building
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700 shadow-xl"
            >
              <div className="space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-navy-900 dark:text-navy-50 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-navy-50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy-900 dark:text-navy-50 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-navy-50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="jane@yourbusiness.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-semibold text-navy-900 dark:text-navy-50 mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-navy-50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-900 dark:text-navy-50 mb-2"
                  >
                    What are you trying to build or fix? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-navy-50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                    placeholder="A website? An internal tool your team is tired of working around? An MVP? Tell me what's on your mind. Rough ideas are fine."
                  />
                </div>

                <ButtonContact
                  onClick={(e) => {}}
                  disabled={isSubmitting}
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                </ButtonContact>

                <p className="text-sm text-(--foreground)/50 text-center">
                  By submitting this form, you agree to receive email
                  communication from me.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
