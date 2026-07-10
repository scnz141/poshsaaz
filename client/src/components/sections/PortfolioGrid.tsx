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
      const isEven = index % 2 === 0;
      gsap.fromTo(
        item,
        { opacity: 0, x: isEven ? -100 : 100, rotateY: 20 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.4,
          delay: index * 0.2,
          ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );
    });
  }, []);

  const projects = [
    { 
      title: "Floral Hairbands", 
      image: "/manus-storage/collection_hairbands_light_0ba7db5e.png",
      description: "Vibrant blooms on navy bases"
    },
    { 
      title: "Artisan Bouquets", 
      image: "/manus-storage/collection_bouquets_light_f1e34783.png",
      description: "Perfect for special moments"
    },
    { 
      title: "Intricate Details", 
      image: "/manus-storage/collection_details_light_8285b138.png",
      description: "Craftsmanship you can feel"
    },
    { 
      title: "Premium Packaging", 
      image: "/manus-storage/collection_packaging_light_567f071c.png",
      description: "Unboxing experience"
    },
  ];

  return (
    <section id="work" className="py-20 sm:py-28 md:py-40 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px divider-custom" />
      
      <div className="container">
        <div className="mb-20 md:mb-32">
          <div className="w-12 h-1 bg-[#c4184c] mb-8" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2a2420] mb-6">
            Our Collections
          </h2>
          <p className="text-lg text-[#7a7470] max-w-2xl">
            Each collection represents our commitment to handmade excellence and timeless beauty.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden mb-6 bg-[#ede5df]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1200 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-700" />
              </div>
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2a2420] mb-2 group-hover:text-[#c4184c] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#7a7470] text-sm sm:text-base">{project.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c4184c] group-hover:w-12 transition-all duration-500 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
