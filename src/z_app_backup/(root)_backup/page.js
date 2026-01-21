// "use client";

// import AboutSection from "@/components/sections/about-section";
// import ProjectsSection from "@/components/sections/projects-section";
// import ContactSection from "@/components/sections/contact-section";
// import HeroSection from "@/components/sections/hero-section";
// import Background from "@/components/shared/background";
// import FaqSection from "@/components/sections/faq-section";
// import Testimonials from "@/components/sections/testimonial-section";

// const Home = () => {
//   return (
//     <div className="">
//       <Background />
//       <HeroSection />
//       <AboutSection />
//       <ProjectsSection />
//       <Testimonials />
//       <FaqSection />
//       <ContactSection />
//     </div>
//   );
// };

// export default Home;

"use client";

import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import WhyCustomCoded from "@/components/WhyCustomCoded";
import Process from "@/components/Process";
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
      <WhyCustomCoded />
      <Process />
      <Testimonials />
      <FAQ />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
