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
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
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
      category: "Handmade, Accessories",
      image: "/manus-storage/hairband_hero_c3e4f5a2.png",
    },
    {
      title: "Bouquet Collections",
      category: "Branding, Gift",
      image: "/manus-storage/collection_grid_d7b2e9f1.png",
    },
    {
      title: "Kashmir Craft",
      category: "Heritage, Artistry",
      image: "/manus-storage/kashmir_craft_a1f6c8d4.png",
    },
    {
      title: "Gift Packaging",
      category: "Design, Packaging",
      image: "/manus-storage/gift_packaging_e2b4a9c6.png",
    },
  ];

  return (
    <section id="work" className="py-32 bg-black">
      <div className="container">
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Work</h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Explore our curated collection of handcrafted floral creations, each a testament to artistry and quality.
          </p>
        </div>

        <div ref={containerRef} className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-video mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="text-white/30 group-hover:text-white/70 transition-colors text-2xl">→</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-24 border-t border-white/10 text-center">
          <a href="#" className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <span className="text-lg font-medium">View All Projects</span>
            <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
