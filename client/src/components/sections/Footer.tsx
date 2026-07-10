export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-900 text-white py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          <div>
            <h3 className="text-base md:text-lg font-light mb-4 md:mb-6">POSHSAAZ</h3>
            <p className="text-gray-400 font-light text-xs md:text-sm">Handcrafted floral elegance from Kashmir.</p>
          </div>

          <div>
            <h4 className="text-xs md:text-sm font-medium mb-4 md:mb-6 text-white uppercase tracking-wide">Collections</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Hairbands</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Bouquets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Details</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs md:text-sm font-medium mb-4 md:mb-6 text-white uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Inquire</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs md:text-sm font-medium mb-4 md:mb-6 text-white uppercase tracking-wide">Follow</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 md:pt-12 text-center">
          <p className="text-gray-500 text-xs md:text-sm font-light">© 2026 Poshsaaz. All rights reserved. Handcrafted with love from Kashmir.</p>
        </div>
      </div>
    </footer>
  );
}
