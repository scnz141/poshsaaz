import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    // Animate image on load
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" }
    );

    // Animate text
    gsap.fromTo(
      textRef.current?.querySelectorAll("span, h1, p"),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );

    // Animate CTA buttons
    gsap.fromTo(
      ctaRef.current?.querySelectorAll("button, a"),
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: "back.out", delay: 0.8 }
    );

    // Parallax effect on scroll
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      imageRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(1.08)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <img
        ref={imageRef}
        src="/manus-storage/hero_full_width_037374a4.png"
        alt="Handmade floral creations"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

      {/* Content */}
      <div ref={textRef} className="container relative z-10 max-w-4xl text-center px-4">
        <span className="inline-block text-sm font-medium text-white/80 uppercase tracking-widest mb-6 animate-fade-in">
          ✦ Handmade Excellence from Kashmir
        </span>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
          Bloom With
          <br />
          <span className="italic font-light">Elegance</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-12 drop-shadow-md">
          Handcrafted pipe cleaner hair bands and floral accessories. Each piece shaped by hand, each moment made special with premium quality and artistic vision.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 sm:px-10 py-3 sm:py-4 bg-white text-black rounded-full font-bold text-base sm:text-lg hover:bg-white/90 transition-all duration-300 hover:shadow-2xl active:scale-95 w-full sm:w-auto">
            Explore Collection
          </button>
          <button className="group px-8 sm:px-10 py-3 sm:py-4 border-2 border-white text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 active:scale-95 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-white to-transparent animate-bounce" />
      </div>
    </section>
  );
}
