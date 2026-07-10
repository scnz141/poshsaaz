export default function AnimatedGallery() {
  const stories = [
    { title: "Handcrafted Beauty", desc: "Each piece tells a story of tradition and contemporary artistry." },
    { title: "Timeless Arrangements", desc: "Designed to complement your most cherished moments." },
    { title: "Artisan Precision", desc: "Meticulous attention to detail in every creation." },
  ];

  return (
    <section className="relative w-full py-32 sm:py-40 md:py-56 overflow-hidden">
      <div className="container">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-20 leading-tight">
          Crafted <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">Stories</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="group p-8 sm:p-12 rounded-2xl border border-[#00d9ff]/20 hover:border-[#00d9ff]/60 transition-all duration-500 hover:bg-[#00d9ff]/5 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d9ff] to-[#ff006e] mb-8 group-hover:scale-125 transition-transform duration-500" />
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-[#00d9ff] transition-colors duration-300">
                {story.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed">
                {story.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
