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
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: index * 0.12,
          ease: "back.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    });
  }, []);

  const products = [
    { title: "Everlasting Bouquets", desc: "Lavender, sunflowers, roses & single stems that never wilt", icon: "💐", color: "from-brand-lavender" },
    { title: "Handmade Bookmarks", desc: "Floral chenille book markers with satin tassels", icon: "📖", color: "from-brand-blush" },
    { title: "Charger Cable Covers", desc: "Spiral floral cable protectors with pearl blossoms", icon: "🔌", color: "from-brand-sage" },
    { title: "Mobile Phone Covers", desc: "Custom cases with 3D handcrafted floral art", icon: "📱", color: "from-brand-plum" },
    { title: "Custom Keychains", desc: "Handmade flower keyrings with gold charms", icon: "🔑", color: "from-brand-gold" },
    { title: "Wall Décor", desc: "Wooden hoop wall hangings with woven florals", icon: "🖼️", color: "from-brand-lavender" },
    { title: "Floral Hairbands", desc: "Vibrant pipe cleaner flowers with pearl accents", icon: "🌸", color: "from-brand-blush" },
    { title: "Clips & Combs", desc: "Delicate floral hair clips for everyday elegance", icon: "✨", color: "from-brand-sage" },
  ];

  return (
    <section id="products" className="py-24 md:py-40 bg-gradient-to-br from-gray-900 via-gray-900 to-brand-plum/20 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-brand-plum/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-gold font-accent text-xs font-bold uppercase tracking-widest">Collections</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mt-4 mb-6">Curated Creations</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Explore our handcrafted collection of floral accessories, each piece a testament to artistry and quality.</p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => { itemsRef.current[index] = el; }}
              className={`group glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer tilt-card overflow-hidden relative shine`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-500 inline-block icon-rotate">
                  {product.icon}
                </div>

                <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-brand-gold transition-colors">
                  {product.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {product.desc}
                </p>

                <div className="flex items-center gap-2 text-brand-gold font-accent font-bold text-sm group-hover:translate-x-2 transition-transform">
                  Explore <span>→</span>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-gold/50 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
