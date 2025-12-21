"use client";

import { motion } from "framer-motion";
import Accordion from "@/components/shared/accordion";

const FaqSection = () => {
  return (
    <div className="h-full flex flex-col border-y border-(--foreground)/15 max-w-screen-2xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="h-full flex justify-center items-center"
      >
        <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-10 py-16 lg:py-25 flex justify-center items-center bg-(--section)/20">
          <div className="max-w-4xl flex-1">
            <h1 className="text-5xl lg:text-6xl font-header chrome-text">
              FA<span className="font-wide chrome-text">Q</span>
            </h1>
            <hr className="mt-2 mb-6 border-t-2" />
            <p>Here are some common questions clients often ask.</p>
            <Accordion />
            <p className="text-xs">
              For additional inquiries, please don’t hesitate to send a message.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FaqSection;
