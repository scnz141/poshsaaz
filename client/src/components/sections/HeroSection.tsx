import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.inOut" }
    );

    gsap.fromTo(
      textRef.current?.querySelectorAll("h1, p, button"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 md:pb-32 overflow-hidden bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Text Content */}
        <div ref={textRef} className="order-2 md:order-1 space-y-8">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              Bloom with <span className="font-semibold">Elegance</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-light">
              Handcrafted floral accessories from Kashmir. Each piece is a testament to artistry, tradition, and timeless beauty.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-800 active:scale-95 text-sm">
              Explore Collections
            </button>
            <button className="px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded-full transition-all duration-300 hover:bg-gray-50 active:scale-95 text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="relative h-96 sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gray-100">
            <img
              ref={imageRef}
              src="/manus-storage/hero_light_premium_dcd49e32.png"
              alt="Poshsaaz Collections"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
