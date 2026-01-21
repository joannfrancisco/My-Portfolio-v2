"use client";

import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <FAQ />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
