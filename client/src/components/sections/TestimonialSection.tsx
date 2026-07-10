import { useEffect, useRef } from "react";

export default function TestimonialSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "url(/manus-storage/collection_grid_012ca0cd.png)", backgroundAttachment: "fixed" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/90 to-brand-cream/70" />

      <div ref={contentRef} className="container relative z-10 max-w-2xl">
        <div className="text-center">
          <span className="text-brand-plum font-accent text-sm font-semibold uppercase tracking-widest">Loved by Many</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-3 mb-8">Moments Made Special</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">"Every time I wear my Poshsaaz hairband, I feel the care and artistry behind it. It's not just an accessory—it's a piece of art that brings joy to my day. The quality is exceptional, and the attention to detail is remarkable."</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">{[...Array(5)].map((_, i) => (<span key={i} className="text-xl">⭐</span>))}</div>
            <span className="text-gray-700 font-accent font-semibold">5.0</span>
          </div>
          <p className="text-gray-600 mt-4 font-accent">— Customer Reviews</p>
        </div>
      </div>
    </section>
  );
}
