export default function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-white">
      <div className="container text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
          Ready to Bloom?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
          Discover our latest collections and bring timeless elegance to your moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-3 bg-gray-900 text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-800 active:scale-95 text-sm">
            Shop Collection
          </button>
          <button className="px-10 py-3 border border-gray-900 text-gray-900 font-medium rounded-full transition-all duration-300 hover:bg-gray-50 active:scale-95 text-sm">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
