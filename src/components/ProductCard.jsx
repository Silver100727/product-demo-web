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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300"
      >
        <div className="relative overflow-hidden aspect-square">
          <motion.img
            loading="lazy"
            src={product.imageLinks[0]}
            alt={product.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick View button - visible on hover (desktop only) */}
          <motion.div
            className="absolute inset-0 hidden md:flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-accent hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Quick View
            </motion.button>
          </motion.div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-primary line-clamp-1 mb-2">
            {product.title}
          </h3>
          <p className="text-sm text-primary-400 line-clamp-2 mb-4">
            {product.description}
          </p>

          <Link
            to={`/product-details/${product._id}`}
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300 group/link"
          >
            View Details
            <ChevronRight
              size={18}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </Link>
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
