import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";
import axios from "axios";

const Products = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setproductList] = useState([]);
  const [categories, setcategories] = useState([]);

  const fetchProdutFromDb = () => {
    axios
      .post(
        "https://rsgratitudegifts.com/api/routes.php?action=addproduct",
        {
          type: "get",
          offset: 0,
          limit: 10,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setproductList(res.data.data);
        } else {
          setproductList([]);
        }
      })
      .catch((err) => {});
  };
  const getsubCategoryFromDb = () => {
    axios
      .get(
        "https://rsgratitudegifts.com/api/routes.php?action=getsubcategory",
        {}
      )
      .then((res) => {
        if (res.data.success) {
          setcategories(res.data.data);
        } else {
          setcategories([]);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchProdutFromDb();
    getsubCategoryFromDb();
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium products designed to enhance your
            lifestyle.
          </p>
        </motion.div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          <input
            type="text"
            placeholder="🔍 Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-80 p-2 h-10 text-sm px-4 border border-gray-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300 transition-all duration-300 ease-in-out"
          />
          <div className="relative w-full md:w-56">
            <select className="w-full p-2 h-10 text-sm px-4 border  border-gray-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 hover:shadow-md appearance-none">
              <option value="">All Categories</option>
              {categories?.map((category, index) => (
                <option key={index} value={category._id}>
                  {category.subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>

        {productList?.length > 0 ? (
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12"
          >
            {productList?.map((product, index) => (
              <ProductCard key={product._id} product={product} index={index} />
            ))}
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-600">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
