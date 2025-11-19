import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Package } from "lucide-react";

const CategoryCard = ({ category, type }) => {
  const navigatedto = useNavigate();

  const handleNavigation = (category) => {
    if (type == "subcategory") {
      navigatedto(`/categories/subcategory/${category.category}`, {
        state: {
          subcategory: category,
        },
      });
    } else {
      navigatedto(
        `/categories/subcategory/${category.category_id}/${category.subcategory}`
      );
    }
  };

  const categoryName = type == "subcategory" ? category.category : category.subcategory;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onClick={() => handleNavigation(category)}
    >
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(51,68,94,0.12)] hover:shadow-[0_20px_60px_rgba(51,68,94,0.2)] transition-all duration-500 border border-white/30">
        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          <motion.img
            loading="lazy"
            src={category.thumbnail_image}
            alt={categoryName}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title with Badge */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-primary line-clamp-1">
              {categoryName}
            </h3>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 25 }}
            >
              <CheckCircle2 className="w-5 h-5 text-[#0AAE5F] flex-shrink-0" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            Discover our curated collection of premium products
          </p>

          {/* Stats & Action Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Package className="w-4 h-4" />
                <span className="font-medium">Premium</span>
              </div>
            </div>

            {/* Explore Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md hover:bg-[#0AAE5F] text-gray-700 hover:text-white rounded-xl font-semibold text-sm transition-all duration-300 group/btn border border-gray-200/50 hover:border-[#0AAE5F]"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Accent glow on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl ring-2 ring-[#0AAE5F]/20" />
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
