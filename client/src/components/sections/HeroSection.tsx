import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    // Image entrance animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95, rotateY: 20 },
      { 
        opacity: 1, 
        scale: 1, 
        rotateY: 0,
        duration: 1.5, 
        ease: "power2.inOut",
        perspective: 1000
      }
    );

    // Text stagger animation
    gsap.fromTo(
      textRef.current?.querySelectorAll("h1, p, button"),
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power2.out", 
        delay: 0.2 
      }
    );

    // Parallax on scroll
    gsap.to(imageRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false
      }
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 md:pb-32 overflow-hidden bg-white"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center">
        {/* Text Content */}
        <div ref={textRef} className="order-2 md:order-1 space-y-6 md:space-y-8 px-4 md:px-0">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight animate-slide-up">
              Bloom with <span className="font-semibold">Elegance</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-lg leading-relaxed font-light animate-slide-up">
              Handcrafted floral accessories from Kashmir. Each piece is a testament to artistry, tradition, and timeless beauty.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 animate-slide-up">
            <button className="px-6 md:px-8 py-3 md:py-3 bg-gray-900 text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-800 active:scale-95 text-sm md:text-base hover:shadow-lg hover:shadow-gray-900/20 w-full sm:w-auto">
              Explore Collections
            </button>
            <button className="px-6 md:px-8 py-3 md:py-3 border border-gray-900 text-gray-900 font-medium rounded-full transition-all duration-300 hover:bg-gray-50 active:scale-95 text-sm md:text-base w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 px-4 md:px-0">
          <div className="relative h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <img
              ref={imageRef}
              src="/manus-storage/hero_light_premium_dcd49e32.png"
              alt="Poshsaaz Collections"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              style={{ perspective: "1000px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
