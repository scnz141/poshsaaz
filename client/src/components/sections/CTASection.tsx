export default function CTASection() {
  return (
    <section className="relative w-full py-32 sm:py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/10 to-[#ff006e]/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d9ff]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff006e]/20 rounded-full blur-3xl" />
      </div>

      <div className="container text-center">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-8 leading-tight">
          Ready to <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">Bloom?</span>
        </h2>
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
          Discover our latest collections and bring timeless elegance to your moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-12 py-5 bg-gradient-to-r from-[#00d9ff] to-[#ff006e] text-black font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#00d9ff]/50 active:scale-95 text-lg uppercase tracking-wide">
            Shop Collection
          </button>
          <button className="px-12 py-5 border-2 border-[#00d9ff] text-[#00d9ff] font-bold rounded-full transition-all duration-300 hover:bg-[#00d9ff]/10 active:scale-95 text-lg uppercase tracking-wide">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
