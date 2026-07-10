import { useEffect, useRef } from "react";

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.fromTo(
      containerRef.current?.querySelectorAll("h2, p, button"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 0.3,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-0 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 md:mb-8 leading-tight">
          Ready to Bloom?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto font-light">
          Discover our latest collections and bring timeless elegance to your moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <button className="px-8 md:px-10 py-3 md:py-4 bg-gray-900 text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-800 active:scale-95 text-sm md:text-base hover:shadow-lg hover:shadow-gray-900/20 w-full sm:w-auto">
            Shop Collection
          </button>
          <button className="px-8 md:px-10 py-3 md:py-4 border border-gray-900 text-gray-900 font-medium rounded-full transition-all duration-300 hover:bg-gray-50 active:scale-95 text-sm md:text-base w-full sm:w-auto">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
