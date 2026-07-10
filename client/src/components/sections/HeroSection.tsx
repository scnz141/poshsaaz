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
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-24 sm:pb-32 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fefdfb] via-[#f5e6eb] to-[#fefdfb]" />
      
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Text Content */}
        <div ref={textRef} className="order-2 md:order-1 space-y-8">
          <div>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#c4184c] to-[#e8a0b8] mb-12" />
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#2a2420] mb-8 leading-tight tracking-tight">
              Bloom <br /> with <span className="text-[#c4184c] block">Elegance</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#7a7470] mb-6 max-w-lg leading-relaxed font-light">
              Handcrafted floral accessories from Kashmir, each piece a testament to artistry and tradition.
            </p>
            <p className="text-base text-[#a0938a] font-light">
              Made with love, designed for moments that matter.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <button className="px-10 py-4 bg-[#c4184c] text-white font-semibold rounded-none transition-all duration-300 hover:bg-[#a01a3a] active:scale-95 hover:shadow-2xl text-lg">
              Explore Collections
            </button>
            <button className="px-10 py-4 border-2 border-[#2a2420] text-[#2a2420] font-semibold rounded-none transition-all duration-300 hover:bg-[#2a2420] hover:text-white active:scale-95 text-lg">
              Learn Our Story
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="relative h-96 sm:h-[550px] md:h-[650px] rounded-none overflow-hidden shadow-2xl group">
            <img
              ref={imageRef}
              src="/manus-storage/hero_light_premium_dcd49e32.png"
              alt="Poshsaaz Collections"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
