import { useEffect, useRef } from "react";

export default function PortfolioGrid() {
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
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "Floral Hairbands",
      category: "Handmade Accessories",
      description: "Vibrant pipe cleaner flowers with pearl accents",
      image: "/manus-storage/collection_hairbands_7e0642b7.png",
      price: "₹299",
    },
    {
      title: "Bouquet Collections",
      category: "Gift & Branding",
      description: "Handcrafted arrangements perfect for gifting",
      image: "/manus-storage/collection_bouquets_3fe26720.png",
      price: "₹499",
    },
    {
      title: "Artisan Details",
      category: "Craftsmanship",
      description: "Intricate details showcasing our artistry",
      image: "/manus-storage/collection_details_35fca3ca.png",
      price: "Custom",
    },
    {
      title: "Premium Packaging",
      category: "Gift Experience",
      description: "Luxury packaging for special occasions",
      image: "/manus-storage/collection_packaging_264c1bb5.png",
      price: "Included",
    },
  ];

  return (
    <section id="work" className="py-24 md:py-40 bg-black">
      <div className="container">
        {/* Section Header */}
        <div className="mb-20 md:mb-32">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-white/50 uppercase tracking-widest">✦ Featured Collections</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">Featured Work</h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
            Explore our curated collection of handcrafted floral creations, each a testament to artistry, quality, and the passion we pour into every piece.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={containerRef} className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl aspect-video mb-8 md:mb-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-700" />
                
                {/* Price Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 text-black rounded-full text-sm font-bold">
                  {project.price}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="flex-1">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mb-3 group-hover:opacity-70 transition-opacity text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <div className="text-white/30 group-hover:text-white/70 transition-colors text-2xl md:text-3xl flex-shrink-0">
                  →
                </div>
              </div>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="mt-16 md:mt-24 h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
              )}
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-24 md:mt-32 pt-24 md:pt-32 border-t border-white/10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-lg md:text-xl font-bold text-white hover:text-white/70 transition-colors group"
          >
            <span>View All Collections</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
