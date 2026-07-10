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
    <section id="work" className="py-32 sm:py-40 md:py-56 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px divider-custom" />
      
      <div className="container">
        <div className="mb-32 md:mb-48">
          <div className="w-24 h-2 bg-gradient-to-r from-[#c4184c] to-[#e8a0b8] mb-12" />
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#2a2420] mb-8">
            Our Collections
          </h2>
          <p className="text-xl sm:text-2xl text-[#7a7470] max-w-3xl font-light leading-relaxed">
            Each collection represents our commitment to handmade excellence and timeless beauty.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-20">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="relative h-96 sm:h-[450px] md:h-[500px] overflow-hidden mb-10 bg-[#ede5df]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1200 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-700" />
              </div>
              <div className="relative space-y-3">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a2420] group-hover:text-[#c4184c] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#7a7470] text-lg font-light">{project.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#c4184c] to-[#e8a0b8] group-hover:w-16 transition-all duration-500 mt-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
