import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    // Animate image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
    );

    // Animate text
    gsap.fromTo(
      textRef.current?.querySelectorAll("h1, p"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.3 }
    );

    // Animate buttons
    gsap.fromTo(
      ctaRef.current?.querySelectorAll("button"),
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: "back.out", delay: 1 }
    );

    // Floating particles
    const particles = particlesRef.current?.querySelectorAll(".particle");
    particles?.forEach((particle, index) => {
      gsap.to(particle, {
        y: -100 - Math.random() * 200,
        x: -50 + Math.random() * 100,
        opacity: 0,
        duration: 3 + Math.random() * 2,
        delay: index * 0.1,
        repeat: -1,
        ease: "power1.inOut",
      });
    });

    // Parallax
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      imageRef.current.style.transform = `translateY(${scrollY * 0.5}px) scale(1.1)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        ref={imageRef}
        src="/manus-storage/hero_full_width_037374a4.png"
        alt="Poshsaaz"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={textRef} className="container relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
          Bloom
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 drop-shadow-lg max-w-2xl mx-auto">
          Handcrafted elegance
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black rounded-full font-bold text-sm sm:text-base hover:bg-white/90 transition-all duration-300 hover:shadow-2xl active:scale-95 w-full sm:w-auto">
            Explore
          </button>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white rounded-full font-bold text-sm sm:text-base hover:bg-white/10 transition-all duration-300 active:scale-95 w-full sm:w-auto">
            Learn
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <div className="w-px h-6 bg-gradient-to-b from-white to-transparent animate-bounce" />
      </div>
    </section>
  );
}
