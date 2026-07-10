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
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 65%",
        },
      }
    );
  }, []);

  return (
    <section id="contact" className="py-24 md:py-40 bg-black border-t border-white/10">
      <div className="container">
        <div ref={contentRef} className="max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-white/50 uppercase tracking-widest">✦ Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 md:mb-12 text-white">
            Ready to Bloom?
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
            Let's create something beautiful together. Reach out to discuss your custom order, collaboration, or any questions about our handmade creations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@poshsaaz.com"
              className="group px-8 py-4 bg-white text-black rounded-full font-bold text-base md:text-lg hover:bg-white/90 transition-all duration-300 hover:shadow-2xl inline-flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#"
              className="group px-8 py-4 border-2 border-white text-white rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <span>Explore More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
