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
      y: 50,
    });

    gsap.fromTo(
      contentRef.current?.querySelectorAll(".reveal-item"),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="craft" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <div className="reveal-item">
              <span className="text-brand-plum font-accent text-sm font-semibold uppercase tracking-widest">The Craft</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-3 mb-6">Artistry in Every Detail</h2>
            </div>

            <div className="reveal-item space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>Our artisans in Kashmir transform simple materials into extraordinary creations through meticulous handwork. Every flower is shaped, every petal is perfected, and every accessory is infused with passion.</p>
              <p>The process begins with carefully selected chenille wire in vibrant colors. Through patient shaping and assembly, these materials come alive as blooms that capture the delicate beauty of nature.</p>
            </div>

            <div className="reveal-item space-y-4">
              <div className="flex items-start gap-4 p-4 bg-brand-lavender/20 rounded-lg">
                <span className="text-2xl">👐</span>
                <div>
                  <h4 className="font-accent font-semibold text-gray-900">Hand-Shaped</h4>
                  <p className="text-sm text-gray-600">Every petal is carefully formed by skilled hands</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-brand-sage/20 rounded-lg">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-accent font-semibold text-gray-900">Thoughtfully Designed</h4>
                  <p className="text-sm text-gray-600">Each design balances aesthetics with wearability</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-brand-blush/20 rounded-lg">
                <span className="text-2xl">💎</span>
                <div>
                  <h4 className="font-accent font-semibold text-gray-900">Quality Assured</h4>
                  <p className="text-sm text-gray-600">Premium materials and rigorous quality checks</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-blush to-brand-lavender rounded-3xl opacity-40 blur-2xl" />
            <img src="/manus-storage/kashmir_craft_e70e86c6.png" alt="Handcrafting process" className="relative w-full h-auto rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
