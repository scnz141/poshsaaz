 import { useEffect, useRef } from "react";

 export default function HeroSection() {
   const titleRef = useRef<HTMLDivElement>(null);
   const subtitleRef = useRef<HTMLDivElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
     const gsap = (window as any).gsap;
     if (!gsap) return;

     gsap.fromTo(
       titleRef.current,
       { opacity: 0, y: 30 },
       { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
     );

     gsap.fromTo(
       subtitleRef.current,
       { opacity: 0, y: 20 },
       { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.4 }
     );

     gsap.fromTo(
       ctaRef.current,
       { opacity: 0, scale: 0.9 },
       { opacity: 1, scale: 1, duration: 0.8, ease: "back.out", delay: 0.6 }
     );
   }, []);

   return (
     <section className="relative w-full h-screen flex items-center justify-start overflow-hidden pt-20">
       <div
         className="absolute inset-0 bg-cover bg-center"
         style={{
           backgroundImage: "url(/manus-storage/hero_bouquet_b6655196.png)",
           backgroundPosition: "right center",
         }}
       >
         <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent" />
       </div>

       <div className="container relative z-10 max-w-2xl">
         <div ref={titleRef} className="mb-6">
           <div className="flex items-center gap-3 mb-4">
             <div className="w-12 h-12 rounded-full bg-brand-plum/10 flex items-center justify-center">
               <span className="text-2xl">👑</span>
             </div>
             <span className="text-brand-plum font-accent text-sm font-semibold uppercase tracking-widest">
               Handmade with Love
             </span>
           </div>
           <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-tight">
             Bloom With
             <br />
             <span className="text-brand-plum italic">Elegance</span>
           </h1>
         </div>

         <div ref={subtitleRef} className="mb-8 max-w-xl">
           <p className="text-lg text-gray-700 leading-relaxed">
             Handcrafted pipe cleaner hair bands and floral accessories from Kashmir. Each bloom is shaped by hand, each moment made special.
           </p>
         </div>

         <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
           <button className="px-8 py-4 bg-brand-plum text-white rounded-full font-accent font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 active:scale-95">
             Shop Collection
           </button>
           <button className="px-8 py-4 bg-white/80 backdrop-blur text-brand-plum rounded-full font-accent font-semibold text-lg border-2 border-brand-plum hover:bg-white transition-all duration-300">
             Learn More
           </button>
         </div>
       </div>

       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
         <div className="flex flex-col items-center gap-2">
           <span className="text-xs font-accent text-gray-600 uppercase tracking-widest">Scroll</span>
           <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
             <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce" />
           </div>
         </div>
       </div>
     </section>
   );
 }
