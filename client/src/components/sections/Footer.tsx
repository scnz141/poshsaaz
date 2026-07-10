export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-plum flex items-center justify-center">
                <span className="text-white font-display text-lg font-bold">✿</span>
              </div>
              <span className="font-display text-lg font-bold">POSHSAAZ</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Handmade floral accessories from Kashmir, crafted with love and care.</p>
          </div>

          <div>
            <h4 className="font-accent font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition text-sm">About</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition text-sm">Products</a></li>
              <li><a href="#craft" className="text-gray-400 hover:text-white transition text-sm">Craft</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-accent font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-accent font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm flex items-center gap-2">📧 Email</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm flex items-center gap-2">📱 Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm flex items-center gap-2">🔗 Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 Poshsaaz. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Made in Kashmir with 💕</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
