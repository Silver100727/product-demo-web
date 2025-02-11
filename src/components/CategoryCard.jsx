import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer"
    >
      <Link to={`/categories/${category.id}`}>
        <div className="relative h-64 rounded-lg overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
            <p className="mt-2 text-white/90">{category.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
