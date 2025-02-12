import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "../components/CategoryCard.jsx";

const Categories = (props) => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Categories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our product categories to find exactly what you're looking
            for
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {props.categoryList.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
