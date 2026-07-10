import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.2, rotateY: 15 },
      { opacity: 1, scale: 1, rotateY: 0, duration: 2.5, ease: "power2.inOut" }
    );

    gsap.fromTo(
      textRef.current?.querySelectorAll("h1, p, button"),
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 1.2, stagger: 0.2, ease: "cubic-bezier(0.34, 1.56, 0.64, 1)", delay: 0.3 }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-24 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff006e]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Text Content */}
        <div ref={textRef} className="order-2 md:order-1 space-y-8">
          <div>
            <div className="inline-block px-4 py-2 bg-[#00d9ff]/20 border border-[#00d9ff]/50 rounded-full mb-8">
              <span className="text-[#00d9ff] text-xs font-bold uppercase tracking-widest">Handcrafted Elegance</span>
            </div>
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-white mb-6 leading-tight tracking-tighter">
              Bloom <br /> <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">Eternal</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-lg leading-relaxed font-light">
              Timeless floral creations from Kashmir's heart, where tradition meets contemporary artistry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <button className="px-10 py-4 bg-gradient-to-r from-[#00d9ff] to-[#ff006e] text-black font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#00d9ff]/50 active:scale-95 text-lg uppercase tracking-wide">
              Explore Now
            </button>
            <button className="px-10 py-4 border-2 border-[#00d9ff] text-[#00d9ff] font-bold rounded-full transition-all duration-300 hover:bg-[#00d9ff]/10 active:scale-95 text-lg uppercase tracking-wide">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="relative h-96 sm:h-[550px] md:h-[650px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/20 to-[#ff006e]/20 z-10" />
            <img
              ref={imageRef}
              src="/manus-storage/hero_light_premium_dcd49e32.png"
              alt="Poshsaaz Collections"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
