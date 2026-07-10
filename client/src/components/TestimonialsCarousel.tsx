import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/products";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    gsap.fromTo(
      containerRef.current?.querySelector(".testimonial-content"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [currentIndex]);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12 md:mb-16 lg:mb-20 leading-tight animate-slide-up text-center">
          Loved by Our Clients
        </h2>

        <div ref={containerRef} className="max-w-3xl mx-auto">
          <div className="testimonial-content text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg md:text-2xl text-gray-900 mb-8 font-light leading-relaxed italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="mb-8">
              <p className="text-lg font-medium text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-600 font-light">
                {testimonial.role}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-gray-900 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
