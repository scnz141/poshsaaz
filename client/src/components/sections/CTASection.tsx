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
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: contentRef.current, start: "top 80%" } }
    );

    gsap.fromTo(
      buttonsRef.current?.querySelectorAll("button"),
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: buttonsRef.current, start: "top 80%" } }
    );
  }, []);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-brand-plum via-brand-plum to-brand-plum/90">
      <div className="container">
        <div ref={contentRef} className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Bloom?</h2>
          <p className="text-lg text-white/90 leading-relaxed mb-10">Explore our complete collection of handmade floral accessories and find the perfect piece to celebrate your moments.</p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-brand-plum rounded-full font-accent font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 active:scale-95">Shop Now</button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-full font-accent font-semibold text-lg border-2 border-white hover:bg-white/30 transition-all duration-300">View Collection</button>
          </div>
        </div>
      </div>
    </section>
  );
}
