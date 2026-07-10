import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.15 },
      { opacity: 1, scale: 1, duration: 2.2, ease: "power2.inOut" }
    );

    gsap.fromTo(
      textRef.current?.querySelectorAll("h1, p, button"),
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.25, ease: "cubic-bezier(0.34, 1.56, 0.64, 1)", delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fefdfb] via-[#f5e6eb] to-[#fefdfb]" />
      
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Text Content */}
        <div ref={textRef} className="order-2 md:order-1">
          <div className="mb-8">
            <div className="w-16 h-1 bg-[#c4184c] mb-8" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#2a2420] mb-6 leading-tight">
              Bloom with <span className="text-[#c4184c]">Elegance</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#7a7470] mb-4 max-w-md leading-relaxed">
              Handcrafted floral accessories from Kashmir, each piece a testament to artistry and tradition.
            </p>
            <p className="text-sm text-[#a0938a]">
              Made with love, designed for moments that matter.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="btn-primary">
              Explore Collections
            </button>
            <button className="btn-secondary">
              Learn Our Story
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="relative h-96 sm:h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <img
              ref={imageRef}
              src="/manus-storage/hero_light_premium_dcd49e32.png"
              alt="Poshsaaz Collections"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
