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
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      y: -50,
    });

    gsap.fromTo(
      contentRef.current?.querySelectorAll(".reveal-item"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-lavender to-brand-sage rounded-3xl opacity-30 blur-2xl" />
              <img
                src="/manus-storage/hairband_hero_c193717a.png"
                alt="Handmade hairband"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div ref={contentRef} className="order-1 md:order-2">
            <div className="reveal-item">
              <span className="text-brand-plum font-accent text-sm font-semibold uppercase tracking-widest">
                About Poshsaaz
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-3 mb-6">
                Where Flowers Bloom Forever
              </h2>
            </div>

            <div className="reveal-item space-y-4 text-gray-700 leading-relaxed">
              <p>
                Poshsaaz celebrates the rich artisan heritage of Kashmir through handcrafted floral accessories. Each piece is meticulously shaped by skilled hands, transforming soft chenille wire into delicate blooms that capture the essence of nature's beauty.
              </p>
              <p>
                We believe in the power of handmade craftsmanship—where every stitch, every petal, and every detail tells a story of dedication and love. Our creations are not just accessories; they are wearable art that brings joy to every moment.
              </p>
            </div>

            <div className="reveal-item mt-8 space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-plum/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">🌸</span>
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-gray-900">Handmade with Love</h3>
                  <p className="text-sm text-gray-600">Each piece crafted with care and attention to detail</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-plum/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">🎨</span>
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-gray-900">Unique & Adorable</h3>
                  <p className="text-sm text-gray-600">No two pieces are exactly alike</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-plum/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">✨</span>
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-gray-900">Lightweight & Comfortable</h3>
                  <p className="text-sm text-gray-600">Perfect for all-day wear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
