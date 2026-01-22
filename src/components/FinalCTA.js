"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
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
          company: e.target.honeypot.value, // honeypot field
        }),
      });

      toast.dismiss(toastId);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success(
        "Message sent successfully! I'll get back to you within 24 hours.",
      );
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
      {/* Background decoration */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
      </div> */}

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="Get in Touch" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Ready to Elevate <HeaderSpan span="Your Online Presence" /> ?
          </h2>
          <p className="text-xl text-(--foreground)/80 max-w-2xl mx-auto">
            Let&apos;s discuss your goals and build a website that helps your
            business grow.
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
                Let&apos;s Build Something Amazing
              </h3>
              <p className="text-lg text-(--foreground)/80 leading-relaxed mb-8">
                Whether you have a detailed plan or just an idea, I&apos;d love
                to hear about it. Send me a message and I&apos;ll get back to
                you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-(--cyan)/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-(--cyan)" />
                </div>
                <div>
                  <h4 className="font-semibold  mb-1">Email</h4>
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
                  <h4 className="font-semibold  mb-1">Location</h4>
                  <p className="text-(--foreground)/80">
                    San Carlos City, Philippines
                  </p>
                  <p className="text-sm text-(--foreground)/80 mt-1">
                    Available for remote projects worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-navy-200 dark:border-navy-700">
              <h4 className="font-semibold text-navy-900 dark:text-navy-50 mb-4">
                What to expect next:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-(--cyan) flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span className="text-(--foreground)/80">
                    I&apos;ll review your message and respond within 24 hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-(--cyan) flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span className="text-(--foreground)/80">
                    I&apos;ll send you a questionnaire to understand your
                    business and provide an estimated price
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-(--cyan) flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span className="text-(--foreground)/80">
                    We&apos;ll schedule a free consultation call
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-(--cyan) flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <span className="text-(--foreground)/80">
                    I&apos;ll send you a detailed proposal with pricing and
                    timeline
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
                {/* Honeypot field (hidden from users, catches bots) */}
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
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
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
                    placeholder="Your Business"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-900 dark:text-navy-50 mb-2"
                  >
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-navy-50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                    placeholder="What kind of website do you need? What are your main goals?"
                  />
                </div>

                <ButtonContact
                  onClick={(e) => {}}
                  disabled={isSubmitting}
                  className="w-full px-8 py-4  font-semibold disabled:opacity-50 disabled:cursor-not-allowed  flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      {/* <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" /> */}
                    </>
                  )}
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
