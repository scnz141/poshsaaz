import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    // Animate image on load
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    // Animate text
    gsap.fromTo(
      textRef.current?.querySelectorAll("h1, p"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 }
    );

    // Parallax effect on scroll
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      imageRef.current.style.transform = `translateY(${scrollY * 0.3}px) scale(1.05)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <img
        ref={imageRef}
        src="/manus-storage/hero_bouquet_b6655196.png"
        alt="Handmade floral creations"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div ref={textRef} className="container relative z-10 max-w-3xl text-center">
        <span className="text-sm font-medium text-white/70 uppercase tracking-widest">Handmade Excellence</span>
        <h1 className="text-7xl md:text-8xl font-bold leading-tight mt-6 mb-6 text-white">
          Bloom With Elegance
        </h1>
        <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
          Handcrafted pipe cleaner hair bands and floral accessories from Kashmir. Each piece shaped by hand, each moment made special.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Scroll Down</span>
            <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
