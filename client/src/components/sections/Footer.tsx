export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-900 text-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div>
            <h3 className="text-lg font-light mb-6">POSHSAAZ</h3>
            <p className="text-gray-400 font-light text-sm">Handcrafted floral elegance from Kashmir.</p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-6 text-white">Collections</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Hairbands</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Bouquets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Details</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Inquire</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-6 text-white">Follow</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm font-light">© 2026 Poshsaaz. All rights reserved. Handcrafted with love from Kashmir.</p>
        </div>
      </div>
    </footer>
  );
}
