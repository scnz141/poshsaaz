import { useEffect, useRef } from "react";

export default function CTASection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current?.querySelectorAll("h2, p, button, a"),
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
    <section id="contact" className="py-20 sm:py-28 md:py-40 lg:py-48 bg-gradient-to-br from-white via-pink-50 to-white border-t border-gray-200 flex items-center justify-center min-h-screen">
      <div ref={contentRef} className="container text-center max-w-3xl px-4">
        <div className="mb-6 sm:mb-8">
          <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto mb-8" />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-gray-900">
          Let's Create
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto">
          Ready to bring your vision to life? Get in touch with us to discuss your custom orders and special requests.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a
            href="mailto:info@poshsaaz.com"
            className="group px-6 sm:px-10 py-3 sm:py-4 bg-pink-600 text-white rounded-full font-bold text-base sm:text-lg hover:bg-pink-700 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Get in Touch</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#work"
            className="group px-6 sm:px-10 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>View Collections</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
