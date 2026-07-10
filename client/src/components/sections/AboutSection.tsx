import { useEffect, useRef } from "react";

export default function AboutSection() {
  const contentRef = useRef<HTMLDivElement>(null);

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
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="py-32 bg-black border-t border-white/10">
      <div className="container">
        <div ref={contentRef} className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-12">About Poshsaaz</h2>
          <div className="space-y-8 text-xl text-white/70 leading-relaxed">
            <p>
              We craft handmade floral accessories with bold spirit — shaped by clear design, smart craftsmanship, and ideas that last beyond trends.
            </p>
            <p>
              Each piece is meticulously created using premium pipe cleaners, hand-shaped into vibrant blooms and adorned with pearl accents. From Kashmir to your moments, we celebrate artistry in every detail.
            </p>
            <p>
              Our mission is to bring elegance and creativity to your special occasions, making each moment unforgettable with pieces that reflect your unique style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
