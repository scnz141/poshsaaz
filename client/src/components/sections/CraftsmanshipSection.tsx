import { useEffect, useRef } from "react";

export default function CraftsmanshipSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      scrollTrigger: { trigger: imageRef.current, start: "top center", end: "bottom center", scrub: 1 },
      y: 40,
    });

    gsap.fromTo(
      contentRef.current?.querySelectorAll(".reveal-item"),
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="craft" className="py-24 md:py-40 bg-gradient-to-br from-brand-cream via-brand-blush/30 to-brand-lavender/20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={contentRef}>
            <div className="reveal-item">
              <span className="text-brand-plum font-accent text-xs font-bold uppercase tracking-widest">The Craft</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mt-4 mb-8">Artistry in Every Detail</h2>
            </div>

            <div className="reveal-item space-y-6 text-gray-700 leading-relaxed mb-10">
              <p className="text-lg">Our artisans in Kashmir transform simple materials into extraordinary creations through meticulous handwork. Every flower is shaped, every petal is perfected.</p>
              <p className="text-lg">The process begins with carefully selected chenille wire in vibrant colors. Through patient shaping and assembly, these materials come alive as blooms that capture nature's delicate beauty.</p>
            </div>

            <div className="reveal-item space-y-4">
              <div className="glass rounded-xl p-6 bg-white/40 hover:shadow-xl transition-all duration-300">
                <h4 className="font-display font-bold text-gray-900 text-lg mb-2">👐 Hand-Shaped</h4>
                <p className="text-gray-700 text-sm">Every petal is carefully formed by skilled hands</p>
              </div>
              <div className="glass rounded-xl p-6 bg-white/40 hover:shadow-xl transition-all duration-300">
                <h4 className="font-display font-bold text-gray-900 text-lg mb-2">🎨 Thoughtfully Designed</h4>
                <p className="text-gray-700 text-sm">Each design balances aesthetics with wearability</p>
              </div>
              <div className="glass rounded-xl p-6 bg-white/40 hover:shadow-xl transition-all duration-300">
                <h4 className="font-display font-bold text-gray-900 text-lg mb-2">💎 Quality Assured</h4>
                <p className="text-gray-700 text-sm">Premium materials and rigorous quality checks</p>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-plum/20 to-brand-sage/20 rounded-3xl blur-2xl" />
            <img src="https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754105/poshsaaz/craftsmanship.jpg" alt="Handcrafting process" className="relative w-full h-auto rounded-3xl shadow-2xl tilt-card" />
          </div>
        </div>
      </div>
    </section>
  );
}
