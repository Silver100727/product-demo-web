import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ScanEye, X } from "lucide-react";

const ProductDetail = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = props.productsList.find((p) => p._id == id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-gray-600">Product not found</p>
      </div>
    );
  }

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

  // Handlers to open/close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-screen pt-24 pb-12 flex flex-col px-4 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer mb-3 flex items-center text-gray-600 hover:text-gray-900"
      >
        <ChevronLeft size={20} />
        <span>Back</span>
      </button>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-3/2 bg-white rounded-lg shadow-md"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={product.imageLinks[currentImageIndex]}
              alt={product.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {product.imageLinks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 cursor-pointer rounded-full ${
                  index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="absolute top-3 left-7 -translate-x-1/2 flex space-x-2">
            <button
              onClick={openModal}
              className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md cursor-pointer"
            >
              <ScanEye size={20} className="text-gray-500" />
            </button>
          </div>
        </motion.div>

        {/* Product Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:aspect-3/2 overflow-y-auto"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-6">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-8">{product.description}</p>
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <div className="mb-8 bg-white rounded-lg p-6">
            <ul className="space-y-2">
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
          <h2 className="text-xl font-semibold mb-4">Specifications</h2>
          <div className="rounded-lg p-6">
            {Object.entries(product.specification).map(
              ([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex justify-between ${
                    index !== 0 ? "border-t border-gray-100 pt-3 mt-3" : ""
                  }`}
                >
                  <span className="text-gray-600">{key}</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Modal for enlarged image view */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative"
            >
              {/* Image with swipe gesture */}
              <motion.img
                key={currentImageIndex}
                src={product.imageLinks[currentImageIndex]}
                alt={product.title}
                className="max-w-full max-h-screen"
              />
            </motion.div>

           
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
            >
              <X size={20} className="text-gray-500" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetail;
