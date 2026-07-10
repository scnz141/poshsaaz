import { useEffect, useRef } from "react";

const collections = [
  { id: 1, title: "Floral Hairbands", image: "/manus-storage/collection_hairbands_light_7c8b2f1e.png" },
  { id: 2, title: "Artisan Bouquets", image: "/manus-storage/collection_bouquets_light_a3d5f9e2.png" },
  { id: 3, title: "Intricate Details", image: "/manus-storage/collection_details_light_b1c9e7f3.png" },
  { id: 4, title: "Premium Packaging", image: "/manus-storage/collection_packaging_light_f2e4d8c1.png" },
];

export default function PortfolioGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    const cards = containerRef.current?.querySelectorAll(".portfolio-card");
    cards?.forEach((card: any, idx: number) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          delay: idx * 0.15,
          ease: "back.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.3,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="mb-12 md:mb-16 lg:mb-20 px-4 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 leading-tight animate-slide-up">
            Our Collections
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light animate-slide-up">
            Explore our curated selection of handcrafted floral accessories.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 px-4 md:px-0">
          {collections.map((item) => (
            <div key={item.id} className="portfolio-card group cursor-pointer">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden mb-4 md:mb-6 bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
