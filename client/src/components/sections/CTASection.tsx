import { useEffect, useRef } from "react";

export default function CTASection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
      }
    );

    gsap.fromTo(
      buttonsRef.current?.querySelectorAll("button"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out",
        scrollTrigger: { trigger: buttonsRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section className="py-24 md:py-40 bg-gradient-to-br from-brand-plum via-brand-plum/90 to-brand-plum/70 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div ref={contentRef} className="container relative z-10 max-w-3xl">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            Ready to <span className="gradient-text">Bloom</span>?
          </h2>

          <p className="text-xl text-white/90 leading-relaxed mb-12">
            Discover our complete collection of handmade floral accessories and find the perfect piece to celebrate your special moments with elegance and grace.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-5 bg-white text-brand-plum rounded-full font-accent font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 relative overflow-hidden shadow-depth">
              <span className="relative z-10">Discover the Blooms</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="px-10 py-5 glass text-white rounded-full font-accent font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-depth border-2 border-white/30">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
