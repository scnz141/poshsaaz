const collections = [
  { id: 1, title: "Floral Hairbands", image: "/manus-storage/collection_hairbands_light_7c8b2f1e.png" },
  { id: 2, title: "Artisan Bouquets", image: "/manus-storage/collection_bouquets_light_a3d5f9e2.png" },
  { id: 3, title: "Intricate Details", image: "/manus-storage/collection_details_light_b1c9e7f3.png" },
  { id: 4, title: "Premium Packaging", image: "/manus-storage/collection_packaging_light_f2e4d8c1.png" },
];

export default function PortfolioGrid() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-white">
      <div className="container">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Our Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            Explore our curated selection of handcrafted floral accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {collections.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-80 sm:h-[450px] rounded-xl overflow-hidden mb-6 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
