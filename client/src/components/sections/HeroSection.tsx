import { useEffect, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    const elements = containerRef.current?.querySelectorAll(".hero-animate");
    elements?.forEach((el: any, idx: number) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: idx * 0.2,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 bg-white">
      <div className="container px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 md:mb-6 leading-tight">
              Bloom with <br className="hidden sm:block" />
              <span className="font-semibold">Elegance</span>
            </h1>
            <p className="hero-animate text-base sm:text-lg text-gray-600 max-w-md font-light mb-8 md:mb-10 leading-relaxed">
              Handcrafted floral accessories from Kashmir. Each piece is a testament to artistry, tradition, and timeless beauty.
            </p>
            <div className="hero-animate flex flex-col sm:flex-row gap-4">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 active:scale-95 text-sm md:text-base">
                Explore Collections
              </button>
              <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-all duration-300 text-sm md:text-base">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-animate flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src="https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754099/poshsaaz/hero.jpg"
                alt="Poshsaaz Handmade Floral Accessories"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-animate flex justify-center mt-12 md:mt-16 lg:mt-20">
          <svg
            className="w-6 h-6 text-gray-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
