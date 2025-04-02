import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative group cursor-pointer"
    >
      <Link to={`/categories/${category.id}`}>
        <div className="relative h-64 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] rounded-lg overflow-hidden">
          <img
            loading="lazy"
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-lg font-bold text-white">{category.name}</h3>
            <p className="mt-0.5 text-sm text-white/90 line-clamp-2">
              {category.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
