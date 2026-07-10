import { useEffect, useRef } from "react";
import { products } from "@/lib/products";

interface ProductModalProps {
  productId: number | null;
  onClose: () => void;
}

export default function ProductModal({ productId, onClose }: ProductModalProps) {
  const product = products.find((p) => p.id === productId);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                {product.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-light">
                {product.description}
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8 font-light">
                {product.details}
              </p>

              <div className="mb-8 pb-8 border-b border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                  Pricing
                </p>
                <p className="text-2xl font-light text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 active:scale-95">
                Inquire Now
              </button>
              <button
                onClick={onClose}
                className="w-full px-6 py-3 border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
