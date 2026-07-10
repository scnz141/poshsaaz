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
        { opacity: 0, y: 100, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          delay: index * 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    });
  }, []);

  const projects = [
    { 
      title: "Hairbands", 
      image: "/manus-storage/collection_hairbands_light_0ba7db5e.png",
      description: "Vibrant & Comfortable"
    },
    { 
      title: "Bouquets", 
      image: "/manus-storage/collection_bouquets_light_f1e34783.png",
      description: "Perfect Gifts"
    },
    { 
      title: "Details", 
      image: "/manus-storage/collection_details_light_8285b138.png",
      description: "Intricate Craftsmanship"
    },
    { 
      title: "Packaging", 
      image: "/manus-storage/collection_packaging_light_567f071c.png",
      description: "Premium Experience"
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-white">
      <div className="container">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900">
            Collections
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of handmade floral accessories, each piece crafted with love and precision
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="h-64 sm:h-72 md:h-80 relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700" />
                <div className="absolute inset-0 flex items-end justify-start p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.title}
                  </h3>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
              <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
