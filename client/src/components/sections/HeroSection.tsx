import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    // Animate title with dramatic entrance
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 60, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    // Animate subtitle with stagger
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 }
    );

    // Animate CTA buttons
    gsap.fromTo(
      ctaRef.current?.querySelectorAll("button"),
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out", delay: 0.9 }
    );

    // Floating animation for elements
    gsap.to(floatingRef.current, {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate particles
    const particles = particlesRef.current?.querySelectorAll(".particle");
    particles?.forEach((particle, index) => {
      gsap.to(particle, {
        y: -100 - Math.random() * 100,
        x: (Math.random() - 0.5) * 200,
        opacity: 0,
        duration: 3 + Math.random() * 2,
        delay: index * 0.1,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-brand-cream via-brand-blush to-brand-lavender/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-plum/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-brand-plum/30 rounded-full"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div ref={titleRef} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center glow pulse-glow">
                  <span className="text-2xl">✿</span>
                </div>
                <span className="text-brand-plum font-accent text-xs font-bold uppercase tracking-widest">
                  Handmade Excellence
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-display font-bold leading-tight mb-4">
                <span className="gradient-text">Bloom</span>
                <br />
                <span className="text-gray-900">With</span>
                <br />
                <span className="text-brand-plum italic">Elegance</span>
              </h1>
            </div>

            <div ref={subtitleRef} className="mb-10">
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Handcrafted pipe cleaner hair bands and floral accessories from Kashmir. Each bloom is shaped by hand, each moment made special with premium quality and artistic vision.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-brand-plum to-brand-plum/80 text-white rounded-full font-accent font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 relative overflow-hidden shadow-depth">
                <span className="relative z-10">Discover the Blooms</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-plum/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="px-8 py-4 glass text-brand-plum rounded-full font-accent font-bold text-lg hover:glass-dark transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-depth">
                Learn Our Story
              </button>
            </div>
          </div>

          {/* Right floating image */}
          <div ref={floatingRef} className="relative h-96 md:h-full">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-plum/20 to-brand-sage/20 rounded-3xl blur-2xl" />
            <img
              src="/manus-storage/hero_bouquet_b6655196.png"
              alt="Handmade floral bouquet"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl tilt-card"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-accent text-brand-plum uppercase tracking-widest font-bold">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-brand-plum rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-brand-plum rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
