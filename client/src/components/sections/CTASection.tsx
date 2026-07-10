import { useEffect, useRef } from "react";

export default function CTASection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current?.querySelectorAll("h2, button, a"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-40 lg:py-48 bg-white border-t border-gray-200 flex items-center justify-center min-h-screen">
      <div ref={contentRef} className="container text-center max-w-3xl px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-gray-900">
          Let's Create
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a
            href="mailto:info@poshsaaz.com"
            className="group px-6 sm:px-10 py-3 sm:py-4 bg-pink-600 text-white rounded-full font-bold text-base sm:text-lg hover:bg-pink-700 transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Contact</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#"
            className="group px-6 sm:px-10 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Explore</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
