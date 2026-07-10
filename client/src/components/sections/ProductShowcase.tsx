import { useEffect, useRef } from "react";

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    });
  }, []);

  const products = [
    { title: "Floral Hairbands", desc: "Vibrant pipe cleaner flowers with pearl accents", icon: "🌸" },
    { title: "Bouquets", desc: "Handcrafted arrangements perfect for gifting", icon: "💐" },
    { title: "Hair Clips", desc: "Delicate floral clips for everyday elegance", icon: "✨" },
    { title: "Custom Orders", desc: "Personalized creations for special moments", icon: "🎁" },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-brand-cream">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-brand-plum font-accent text-sm font-semibold uppercase tracking-widest">Our Collection</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-3">Curated Creations</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">Each product is a testament to our commitment to quality, beauty, and the art of handmade craftsmanship.</p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} ref={(el) => { itemsRef.current[index] = el; }} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-brand-plum font-accent font-semibold text-sm">Explore <span className="group-hover:translate-x-1 transition-transform">→</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
