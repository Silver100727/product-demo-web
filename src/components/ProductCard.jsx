import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group cursor-pointer"
      >
        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(51,68,94,0.12)] hover:shadow-[0_20px_60px_rgba(51,68,94,0.2)] transition-all duration-500 border border-white/30">
          {/* Image Section */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
            <motion.img
              loading="lazy"
              src={product.imageLinks[0]}
              alt={product.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Quick View button - visible on hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
            >
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-xl text-primary font-semibold rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-white/50 hover:bg-[#0AAE5F] hover:text-white hover:border-[#0AAE5F] transition-all duration-300"
              >
                <Eye className="w-4 h-4" />
                Quick View
              </motion.button>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Title with Badge */}
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-primary line-clamp-1">
                {product.title}
              </h3>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                }}
              >
                <CheckCircle2 className="w-5 h-5 text-[#0AAE5F] flex-shrink-0" />
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {product.description || "Premium quality product"}
            </p>

            {/* Action Row */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <span className="font-medium">Premium Quality</span>
              </div>

              {/* View Details Button */}
              <Link
                to={`/product-details/${product._id}`}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md hover:bg-[#0AAE5F] text-gray-700 hover:text-white rounded-xl font-semibold text-sm transition-all duration-300 group/btn border border-gray-200/50 hover:border-[#0AAE5F]"
                >
                  <span>Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Accent glow on hover */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-3xl ring-2 ring-[#0AAE5F]/20" />
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
