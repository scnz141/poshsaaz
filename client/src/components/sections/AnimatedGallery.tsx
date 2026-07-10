import { useEffect, useRef } from "react";

export default function AnimatedGallery() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.fromTo(
      headingRef.current?.querySelectorAll("h2, p"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 70%",
        },
      }
    );

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100, rotate: -5 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
          },
        }
      );
    });
  }, []);

  const images = [
    { image: "/manus-storage/collection_hairbands_light_0ba7db5e.png", title: "Floral Hairbands", desc: "Handcrafted with vibrant pipe cleaner flowers and pearl accents" },
    { image: "/manus-storage/collection_bouquets_light_f1e34783.png", title: "Beautiful Bouquets", desc: "Stunning arrangements perfect for any special occasion" },
    { image: "/manus-storage/collection_details_light_8285b138.png", title: "Artisan Details", desc: "Showcasing the intricate craftsmanship in every creation" },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container">
        <div ref={headingRef} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900">
            Artistry in Motion
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Each piece tells a story of dedication, creativity, and passion for handmade excellence
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {images.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 sm:gap-12 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-pink-300 mb-6" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
