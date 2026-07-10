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
    <section id="contact" className="py-32 sm:py-40 md:py-56 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px divider-custom" />
      
      <div ref={contentRef} className="container text-center max-w-4xl">
        <div className="w-24 h-2 bg-gradient-to-r from-[#c4184c] to-[#e8a0b8] mx-auto mb-12" />
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#2a2420] mb-10">
          Let's Create Together
        </h2>
        <p className="text-2xl sm:text-3xl text-[#7a7470] mb-16 leading-relaxed font-light">
          Have a special request? Want to collaborate? We'd love to hear from you. Reach out and let's bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="mailto:hello@poshsaaz.com" className="px-12 py-5 bg-[#c4184c] text-white font-semibold rounded-none transition-all duration-300 hover:bg-[#a01a3a] active:scale-95 hover:shadow-2xl text-lg">
            Get in Touch
          </a>
          <a href="#work" className="px-12 py-5 border-2 border-[#2a2420] text-[#2a2420] font-semibold rounded-none transition-all duration-300 hover:bg-[#2a2420] hover:text-white active:scale-95 text-lg">
            View Collections
          </a>
        </div>
      </div>
    </section>
  );
}
