export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white border-t border-gray-800">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">POSHSAAZ®</h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Handmade floral accessories crafted with love from Kashmir</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Explore</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#work" className="text-gray-400 hover:text-pink-400 transition-colors">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Custom Orders</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Connect</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Email</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400">© 2026 Poshsaaz. All rights reserved. Handmade with love.</p>
            <p className="text-xs sm:text-sm text-gray-400">Made in Kashmir 🇮🇳</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
