import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const NestedProduct = (props) => {
  const { product } = useParams();
  const navigate = useNavigate();
  const NestedProductList = props.productsList.filter(
    (p) => p.category == product
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen pt-24 pb-12 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer mb-3 flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product}</h1>
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
          {NestedProductList.map((product, index) =>
            product.isLive ? (
              <ProductCard key={product._id} product={product} index={index} />
            ) : null
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default NestedProduct;
