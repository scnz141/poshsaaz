import { useEffect, useRef } from "react";

export default function TestimonialSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: contentRef.current, start: "top 80%" } }
    );
  }, []);

  return (
    <section className="py-24 md:py-40 bg-gradient-to-br from-gray-900 via-gray-900 to-brand-plum/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-brand-plum/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-sage/5 rounded-full blur-3xl" />
      </div>

      <div ref={contentRef} className="container relative z-10 max-w-3xl">
        <div className="glass rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Loved by Many</h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-10">
            "Every time I wear my Poshsaaz hairband, I feel the care and artistry behind it. It's not just an accessory—it's a piece of art that brings joy to my day. The quality is exceptional, and the attention to detail is remarkable."
          </p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-1">{[...Array(5)].map((_, i) => (<span key={i} className="text-2xl">⭐</span>))}</div>
            <span className="text-white font-accent font-bold text-lg">5.0</span>
          </div>
          <p className="text-brand-gold font-accent font-bold">— Customer Reviews</p>
        </div>
      </div>
    </section>
  );
}
