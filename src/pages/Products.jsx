import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";
import axios from "axios";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [spinner, setspinner] = useState(false);

  const fetchProductsFromDb = () => {
    setspinner(true);

    axios
      .post(
        "https://rsglobalsolutions.in/api/routes.php?action=addproduct",
        {
          type: "get",
          offset: 0,
          limit: 1000,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setProductList(res.data.data);
          setspinner(false);
        } else {
          setProductList([]);
          setspinner(false);
        }
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setspinner(false);
      });
  };

  const getSubCategoriesFromDb = () => {
    axios
      .get("https://rsglobalsolutions.in/api/routes.php?action=getsubcategory")
      .then((res) => {
        if (res.data.success) {
          setCategories(res.data.data);
        } else {
          setCategories([]);
        }
      })
      .catch((err) => {
        console.error("Category fetch error:", err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductsFromDb();
    getSubCategoriesFromDb();
  }, []);

  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      product.subcategory?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

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
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 h-10 text-sm px-4 border border-gray-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 hover:shadow-md appearance-none"
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category.subcategory}>
                  {category.subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`px-12 ${
            filteredProducts && filteredProducts.length > 0
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex items-center justify-center h-56"
          }`}
        >
          {spinner ? (
            <div className="flex items-center justify-center h-64">
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product._id} product={product} index={index} />
            ))
          ) : (
            <div className="text-center max-w-xs">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No Product found
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We couldn’t find any product here. Try adjusting your filters or
                come back later.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
