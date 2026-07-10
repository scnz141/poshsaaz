import { useEffect, useRef } from "react";

export default function AboutSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current?.querySelectorAll("h2, p"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 65%",
        },
      }
    );

    // Animate stats
    gsap.fromTo(
      statsRef.current?.querySelectorAll(".stat-item"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 65%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="py-24 md:py-40 bg-black border-t border-white/10">
      <div className="container">
        <div ref={contentRef} className="max-w-4xl mb-20 md:mb-32">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-white/50 uppercase tracking-widest">✦ About Poshsaaz</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 md:mb-12 text-white">
            Crafted with Purpose
          </h2>
          <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-white/70 leading-relaxed">
            <p>
              We craft handmade floral accessories with bold spirit — shaped by clear design, smart craftsmanship, and ideas that last beyond trends. Each piece is meticulously created using premium pipe cleaners, hand-shaped into vibrant blooms and adorned with pearl accents.
            </p>
            <p>
              From Kashmir to your moments, we celebrate artistry in every detail. Our mission is to bring elegance and creativity to your special occasions, making each moment unforgettable with pieces that reflect your unique style.
            </p>
            <p>
              Every hairband, every bouquet, every accessory tells a story of dedication and love. We believe in sustainable handmade practices, fair wages for our artisans, and creating products that bring joy for years to come.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-20 md:pt-24 border-t border-white/10">
          <div className="stat-item">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <p className="text-sm md:text-base text-white/60 uppercase tracking-widest">Happy Customers</p>
          </div>
          <div className="stat-item">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
            <p className="text-sm md:text-base text-white/60 uppercase tracking-widest">Handmade</p>
          </div>
          <div className="stat-item">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
            <p className="text-sm md:text-base text-white/60 uppercase tracking-widest">Designs</p>
          </div>
          <div className="stat-item">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">7+</div>
            <p className="text-sm md:text-base text-white/60 uppercase tracking-widest">Years Crafting</p>
          </div>
        </div>
      </div>
    </section>
  );
}
