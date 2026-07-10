export default function AnimatedGallery() {
  const stories = [
    { title: "Handcrafted Beauty", desc: "Each piece tells a story of tradition and contemporary artistry." },
    { title: "Timeless Design", desc: "Designed to complement your most cherished moments." },
    { title: "Artisan Quality", desc: "Meticulous attention to detail in every creation." },
  ];

  return (
    <section className="relative w-full py-24 md:py-40 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-16 md:mb-24 leading-tight">
          Crafted Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="p-8 md:p-10 rounded-xl border border-gray-200 hover:border-gray-900 transition-all duration-500 hover:bg-white">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                {story.title}
              </h3>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                {story.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
