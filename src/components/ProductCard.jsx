import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-md overflow-hidden relative group cursor-pointer"
      >
        <div className="relative overflow-hidden aspect-2/1">
          <img
            src={product.imageLinks[0]}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay and Quick View button only visible on medium screens and above */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hidden md:flex">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer px-4 py-2 bg-white text-gray-600 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform"
            >
              Quick View
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-600">
            {product.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-4 flex items-center justify-end">
            <Link
              to={`/products/${product._id}`}
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              View Details
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <ProductModal
            product={product}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;
