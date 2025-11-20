import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Package, CheckCircle2 } from "lucide-react";

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.imageLinks.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.imageLinks.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0  bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        className="relative z-50 bg-white/98 backdrop-blur-3xl rounded-[32px] max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-[0_32px_128px_rgba(0,0,0,0.4)] border border-white/40"
        style={{
          boxShadow: '0 32px 128px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.5)'
        }}
      >
        {/* Top Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />

        {/* Close Button */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.05, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/95 backdrop-blur-xl hover:bg-red-500 hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/60 transition-all duration-300"
        >
          <X className="w-4 h-4" />
        </motion.button>

        <div className="grid md:grid-cols-[450px_1fr] max-h-[92vh] overflow-hidden">
          {/* Image Gallery */}
          <div className="relative aspect-square bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Image Container */}
            <div className="relative h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={product.imageLinks[currentImageIndex]}
                  alt={product.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Navigation Buttons */}
            {product.imageLinks.length > 1 && (
              <>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  whileHover={{ scale: 1.08, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/98 backdrop-blur-xl hover:bg-accent hover:text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-white/80 transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  whileHover={{ scale: 1.08, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/98 backdrop-blur-xl hover:bg-accent hover:text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-white/80 transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </>
            )}

            {/* Image Counter & Indicators */}
            {product.imageLinks.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/98 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/80">
                <span className="text-xs font-semibold text-primary">
                  {currentImageIndex + 1} / {product.imageLinks.length}
                </span>
                <div className="h-3 w-px bg-gray-300" />
                <div className="flex gap-1.5">
                  {product.imageLinks.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-accent w-4"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="md:aspect-square overflow-y-auto p-8 custom-scrollbar">
            {/* Header Section */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <h2 className="text-3xl font-bold text-primary flex-1">
                  {product.title}
                </h2>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 25 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                </motion.div>
              </div>

              {product.price && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                  <span className="text-2xl font-bold text-accent">
                    ₹ {product.price}
                  </span>
                </div>
              )}

              {product.description && (
                <p className="text-gray-600 leading-relaxed mt-4">
                  {product.description}
                </p>
              )}
            </div>

            {/* Features Section */}
            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Package className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Features</h3>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-100">
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Specifications Section */}
            {product.specification && Object.keys(product.specification).length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Specifications</h3>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-100">
                  <div className="space-y-3">
                    {Object.entries(product.specification).map(
                      ([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className={`flex items-center justify-between py-2 ${
                            index !== 0 ? "border-t border-gray-200" : ""
                          }`}
                        >
                          <span className="text-sm text-gray-600 font-medium">{key}</span>
                          <span className="text-sm font-semibold text-primary">
                            {value}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;
