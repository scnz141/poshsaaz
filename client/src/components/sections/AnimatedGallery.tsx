import { useEffect, useRef } from "react";

export default function AnimatedGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  const stories = [
    { title: "Handcrafted Beauty", desc: "Each piece tells a story of tradition and contemporary artistry." },
    { title: "Timeless Design", desc: "Designed to complement your most cherished moments." },
    { title: "Artisan Quality", desc: "Meticulous attention to detail in every creation." },
  ];

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    const cards = containerRef.current?.querySelectorAll(".story-card");
    cards?.forEach((card: any, idx: number) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: idx * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.2,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12 md:mb-16 lg:mb-20 leading-tight animate-slide-up">
          Crafted Stories
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="story-card p-6 md:p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all duration-500 hover:bg-white hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gray-200 mb-6 group-hover:bg-gray-300 transition-colors" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3 md:mb-4">
                {story.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                {story.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
