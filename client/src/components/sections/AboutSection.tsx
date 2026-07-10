import { useEffect, useRef } from "react";

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      scrollTrigger: { trigger: imageRef.current, start: "top center", end: "bottom center", scrub: 1 },
      y: -40,
    });

    gsap.fromTo(
      contentRef.current?.querySelectorAll(".reveal-item"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="about" className="py-24 md:py-40 bg-gradient-to-br from-gray-900 via-gray-900/95 to-brand-plum/10 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-plum/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-plum/30 to-brand-sage/20 rounded-3xl blur-2xl" />
              <img
                src="/manus-storage/hairband_hero_c193717a.png"
                alt="Handmade hairband"
                className="relative w-full h-auto rounded-3xl shadow-2xl tilt-card"
              />
            </div>
          </div>

          <div ref={contentRef} className="order-1 md:order-2">
            <div className="reveal-item">
              <span className="text-brand-gold font-accent text-xs font-bold uppercase tracking-widest">About Poshsaaz</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mt-4 mb-8 leading-tight">
                Where Flowers <span className="gradient-text">Bloom Forever</span>
              </h2>
            </div>

            <div className="reveal-item space-y-6 text-gray-300 leading-relaxed mb-10">
              <p className="text-lg">
                Poshsaaz celebrates the rich artisan heritage of Kashmir through handcrafted floral accessories. Each piece is meticulously shaped by skilled hands, transforming soft chenille wire into delicate blooms.
              </p>
              <p className="text-lg">
                We believe in the power of handmade craftsmanship—where every petal tells a story of dedication and love. Our creations are wearable art that brings joy to every moment.
              </p>
            </div>

            <div className="reveal-item space-y-4">
              <div className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
                <h4 className="font-display font-bold text-white text-lg mb-2">🌸 Handmade with Love</h4>
                <p className="text-gray-300 text-sm">Each piece crafted with care and attention to detail</p>
              </div>
              <div className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
                <h4 className="font-display font-bold text-white text-lg mb-2">🎨 Unique & Adorable</h4>
                <p className="text-gray-300 text-sm">No two pieces are exactly alike</p>
              </div>
              <div className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
                <h4 className="font-display font-bold text-white text-lg mb-2">✨ Lightweight & Comfortable</h4>
                <p className="text-gray-300 text-sm">Perfect for all-day wear</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
