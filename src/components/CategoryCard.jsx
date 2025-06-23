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
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative group cursor-pointer"
    >
      <div
        className="relative h-64 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] rounded-lg overflow-hidden"
        onClick={() => {
          handleNavigation(category);
        }}
      >
        <img
          loading="lazy"
          src={category.thumbnail_image}
          alt={type == "subcategory" ? category.category : category.subcategory}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-lg font-bold text-white">
            {type == "subcategory" ? category.category : category.subcategory}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
