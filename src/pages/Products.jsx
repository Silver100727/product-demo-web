import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";

const Products = (props) => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium products designed to enhance your
            lifestyle
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {props.productsList.map((product, index) =>
            product.isLive ? (
              <ProductCard key={product._id} product={product} index={index} />
            ) : null
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
