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
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-40 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px divider-custom" />
      
      <div ref={contentRef} className="container text-center max-w-3xl">
        <div className="w-12 h-1 bg-[#c4184c] mx-auto mb-8" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2a2420] mb-6">
          Let's Create Together
        </h2>
        <p className="text-lg sm:text-xl text-[#7a7470] mb-12 leading-relaxed">
          Have a special request? Want to collaborate? We'd love to hear from you. Reach out and let's bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@poshsaaz.com" className="btn-primary">
            Get in Touch
          </a>
          <a href="#work" className="btn-secondary">
            View Collections
          </a>
        </div>
      </div>
    </section>
  );
}
