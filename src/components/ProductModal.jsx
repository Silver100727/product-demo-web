import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="relative bg-white rounded-lg max-w-4xl w-full max-h-[76vh] overflow-y-scroll"
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative aspect-square ">
            <div className={`relative h-full overflow-hidden`}>
              <motion.img
                key={currentImageIndex}
                src={product.imageLinks[currentImageIndex]}
                alt={product.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`w-full h-full object-cover`}
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {product.imageLinks.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="md:aspect-square overflow-y-auto p-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product.title}
            </h2>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              ${product.price}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <div className="mb-6">
                <ul className="space-y-2 bg-gray-50 rounded-lg p-4">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                {Object.entries(product.specification).map(
                  ([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex justify-between ${
                        index !== 0 ? "border-t border-gray-200 pt-2 mt-2" : ""
                      }`}
                    >
                      <span className="text-gray-600">{key}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;
