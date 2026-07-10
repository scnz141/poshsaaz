import { useEffect, useRef } from "react";

export default function CTASection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current?.querySelectorAll("h2, p, button"),
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
    <section id="contact" className="py-32 bg-black border-t border-white/10">
      <div className="container">
        <div ref={contentRef} className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Bloom?</h2>
          <p className="text-xl text-white/60 mb-12">
            Let's create something beautiful together. Reach out to discuss your custom order or collaboration.
          </p>
          <a
            href="mailto:info@poshsaaz.com"
            className="inline-flex items-center gap-3 text-lg font-medium text-white hover:opacity-70 transition-opacity group"
          >
            <span>Get in Touch</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
