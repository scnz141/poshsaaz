import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/products";

interface ProductModalProps {
  productId: number | null;
  onClose: () => void;
}

export default function ProductModal({ productId, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const product = productId ? products.find((p) => p.id === productId) : null;

  if (!product) return null;

  const images = [product.image, product.image, product.image]; // Use product image multiple times for carousel

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Image Carousel */}
        <div className="relative w-full bg-gradient-to-br from-pink-100 to-amber-100 aspect-square overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={product.title}
            className="w-full h-full object-cover"
          />

          {/* Carousel Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={24} className="text-gray-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={24} className="text-gray-900" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "bg-rose-600 w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            {product.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-rose-600">✓</span> Handcrafted with premium materials
              </li>
              <li className="flex items-center gap-3">
                <span className="text-rose-600">✓</span> Lightweight and comfortable
              </li>
              <li className="flex items-center gap-3">
                <span className="text-rose-600">✓</span> Perfect for any occasion
              </li>
              <li className="flex items-center gap-3">
                <span className="text-rose-600">✓</span> Made in Kashmir
              </li>
            </ul>
          </div>

          {/* Inquiry Form */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Inquire About This Product</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-rose-600 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-rose-600 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-rose-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your custom request..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
