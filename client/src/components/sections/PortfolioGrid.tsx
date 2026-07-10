import { useEffect, useRef } from "react";

const collections = [
  { id: 1, title: "Floral Hairbands", desc: "Vibrant & Comfortable", image: "/manus-storage/collection_hairbands_light_7c8b2f1e.png" },
  { id: 2, title: "Artisan Bouquets", desc: "Perfect Gifts", image: "/manus-storage/collection_bouquets_light_a3d5f9e2.png" },
  { id: 3, title: "Intricate Details", desc: "Precision Crafted", image: "/manus-storage/collection_details_light_b1c9e7f3.png" },
  { id: 4, title: "Premium Packaging", desc: "Luxury Presentation", image: "/manus-storage/collection_packaging_light_f2e4d8c1.png" },
];

export default function PortfolioGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    const cards = containerRef.current?.querySelectorAll(".portfolio-card");
    cards?.forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          ease: "back.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full py-32 sm:py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff006e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="mb-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">Collections</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl font-light">
            Explore our curated selection of handcrafted floral accessories, each piece a testament to artistry and tradition.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {collections.map((item) => (
            <div
              key={item.id}
              className="portfolio-card group cursor-pointer"
            >
              <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/30 to-[#ff006e]/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#00d9ff] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-400 font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
