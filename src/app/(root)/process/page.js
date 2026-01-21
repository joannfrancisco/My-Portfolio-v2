"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import WhyCustomCoded from "@/components/WhyCustomCoded";
import PixelSnow from "@/components/shared/PixelSnow";

export default function ProcessPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-warm-50 dark:bg-navy-950">
        <Process />
        <WhyCustomCoded />
      </main>

      <Footer />
    </>
  );
}
