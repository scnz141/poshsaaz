 import { useEffect, useRef } from "react";
 import { Button } from "@/components/ui/button";
 import HeroSection from "@/components/sections/HeroSection";
 import AboutSection from "@/components/sections/AboutSection";
 import ProductShowcase from "@/components/sections/ProductShowcase";
 import CraftsmanshipSection from "@/components/sections/CraftsmanshipSection";
 import TestimonialSection from "@/components/sections/TestimonialSection";
 import CTASection from "@/components/sections/CTASection";
 import Footer from "@/components/sections/Footer";
 import Header from "@/components/Header";

 export default function Home() {
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
     // Register ScrollTrigger
     const gsap = (window as any).gsap;
     const ScrollTrigger = (window as any).ScrollTrigger;
     if (gsap && ScrollTrigger) {
       gsap.registerPlugin(ScrollTrigger);
     }
   }, []);

   return (
     <div ref={containerRef} className="min-h-screen bg-brand-cream">
       <Header />
       <main>
         <HeroSection />
         <AboutSection />
         <ProductShowcase />
         <CraftsmanshipSection />
         <TestimonialSection />
         <CTASection />
       </main>
       <Footer />
     </div>
   );
 }
