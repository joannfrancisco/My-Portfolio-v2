"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Footer from "@/components/shared/footer";

const EMAIL = "info@joannfrancisco.com";

const ContactSection = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // show "Copied!" for 1.5s
  };

  return (
    <div className="h-full flex flex-col">
      {/* Toast container */}
      <Toaster position="bottom-center" reverseOrder={false} />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="h-full flex justify-center items-center "
      >
        <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-10 py-16 lg:py-25 flex justify-center items-center">
          <div className="max-w-4xl flex-1">
            <h1 className="text-5xl md:text-6xl font-header ">
              CO<span className="font-wide">N</span>&nbsp;TACT
            </h1>
            <hr className="mt-2 mb-6 border-t-2 " />

            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-15">
              <div className="">
                <h2
                  className="text-xl md:text-2xl my-1 md:my-2 pl-1 font-bold"
                  style={{ fontFamily: "var(--font-homemadeapple)" }}
                >
                  Let&apos;s Connect!
                </h2>
                <p className="text-base md:text-lg font-light text-left leading-relaxed text-(--foreground)/80">
                  I&apos;m always down for a chat. If you ever want to grab a
                  cup of coffee or bubble tea (virtually!) or just want to talk
                  about how to grow your business, you can find me on my
                  profiles below or send me a message right here. I&apos;d love
                  to hear from you!
                </p>
              </div>

              <div className="mt-2">
                {/* Copy email */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-bold text-sm">TO:</span>

                  <button
                    type="button"
                    onClick={() => {
                      handleCopy();
                      toast.success("Email copied!");
                    }}
                    className="relative group text-base font-light opacity-80"
                  >
                    {EMAIL}
                    <span className="absolute -top-6 left-0 text-xs opacity-0 group-hover:opacity-60 transition">
                      {copied ? "Copied!" : "Click to copy"}
                    </span>
                  </button>
                </div>

                {/* Contact Form */}
                <form
                  className="flex flex-col gap-6 max-w-[600px]"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setStatus("loading");

                    const form = e.currentTarget;
                    const fromValue = form.from.value.trim();
                    const messageValue = form.message.value.trim();

                    // Simple client-side validation
                    if (!fromValue || !messageValue) {
                      toast.error("Please fill in all fields.");
                      setStatus("idle");
                      return;
                    }

                    try {
                      const toastId = toast.loading("Sending message...");
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          from: fromValue,
                          message: messageValue,
                          company: form.company.value, // honeypot
                        }),
                      });

                      toast.dismiss(toastId);

                      if (!res.ok) throw new Error();

                      toast.success("Message sent successfully ✓");
                      setStatus("success");
                      form.reset();
                    } catch {
                      toast.error("Something went wrong. Please try again.");
                      setStatus("error");
                    }
                  }}
                >
                  {/* Honeypot (hidden) */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  {/* From */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-sm">FROM:</label>
                    <input
                      type="email"
                      name="from"
                      placeholder="your@email.com"
                      className="border-b border-(--foreground)/30 bg-transparent py-2 outline-none focus:border-(--foreground) text-(--foreground)/80"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-sm">MESSAGE:</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="your message..."
                      className="border-b border-(--foreground)/30 bg-transparent py-2 outline-none resize-none focus:border-(--foreground) text-(--foreground)/80"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-4 mb-4 w-fit border border-(--foreground)] px-6 py-2 text-sm transition-all  hover:text-background disabled:opacity-50 shadow-[4px_4px_0_0_var(--foreground)] hover:shadow-[8px_8px_0_0_var(--foreground)] active:shadow-[2px_2px_0_0_var(--foreground)]"
                  >
                    {status === "loading" ? "sending..." : "send message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ContactSection;
