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
    "/manus-storage/collection_hairbands_light_0ba7db5e.png",
    "/manus-storage/collection_bouquets_light_f1e34783.png",
    "/manus-storage/collection_details_light_8285b138.png",
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-gray-50 border-t border-gray-200">
      <div className="container">
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 sm:gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="h-2 w-12 bg-pink-300 mx-auto md:mx-0 mb-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
