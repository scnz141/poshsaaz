import { useEffect, useRef } from "react";

export default function AnimatedGallery() {
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
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
          },
        }
      );
    });
  }, []);

  const images = [
    { image: "/manus-storage/collection_hairbands_light_0ba7db5e.png", title: "Handcrafted Beauty", desc: "Each hairband is meticulously crafted with vibrant pipe cleaner flowers and lustrous pearl accents." },
    { image: "/manus-storage/collection_bouquets_light_f1e34783.png", title: "Timeless Arrangements", desc: "Our bouquets capture the essence of Kashmir's floral heritage, perfect for celebrations and cherished moments." },
    { image: "/manus-storage/collection_details_light_8285b138.png", title: "Artisan Precision", desc: "Every detail reflects our dedication to quality, from the delicate petals to the final finishing touches." },
  ];

  return (
    <section className="py-32 sm:py-40 md:py-56 bg-[#fefdfb] relative">
      <div className="absolute top-0 left-0 right-0 h-px divider-custom" />
      
      <div className="container">
        <div className="mb-32 md:mb-48">
          <div className="w-24 h-2 bg-gradient-to-r from-[#c4184c] to-[#e8a0b8] mb-12" />
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#2a2420] mb-8">
            Crafted Stories
          </h2>
          <p className="text-xl sm:text-2xl text-[#7a7470] max-w-3xl font-light leading-relaxed">
            Discover the artistry and passion behind every creation.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {images.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center ${index % 2 === 1 ? 'md:auto-cols-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
                <div className="relative h-96 sm:h-[500px] md:h-[600px] overflow-hidden bg-[#ede5df] group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1500"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
                <div className="w-16 h-2 bg-gradient-to-r from-[#c4184c] to-[#e8a0b8] mb-10" />
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2a2420] mb-6">
                  {item.title}
                </h3>
                <p className="text-xl sm:text-2xl text-[#7a7470] leading-relaxed font-light">
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
