import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={() => handleNavigation(category)}
    >
      <div className="relative h-72 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
        <motion.img
          loading="lazy"
          src={category.thumbnail_image}
          alt={type == "subcategory" ? category.category : category.subcategory}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {type == "subcategory" ? category.category : category.subcategory}
            </h3>
            <div className="flex items-center gap-2 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium">Explore Collection</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Accent border on hover */}
        <div className="absolute inset-0 border-2 border-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default CategoryCard;
