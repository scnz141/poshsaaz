export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-rose-400 mb-4">POSHSAAZ</h3>
            <p className="text-gray-400">Handcrafted floral accessories from Kashmir</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Poshsaaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
