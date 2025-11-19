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
    <div className="min-h-screen flex flex-col gap-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Our Products
          </h1>
          <p className="text-lg text-primary-400 max-w-3xl mx-auto">
            Discover our collection of premium products designed to enhance your
            lifestyle.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search for a product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 text-sm bg-white border-2 border-gray-200 rounded-full shadow-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="relative w-full sm:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-5 py-3 pr-10 text-sm bg-white border-2 border-gray-200 rounded-full shadow-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category.subcategory}>
                  {category.subcategory}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`${
            filteredProducts && filteredProducts.length > 0
              ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              : "flex items-center justify-center min-h-[400px]"
          }`}
        >
          {spinner ? (
            <div className="col-span-full flex flex-col items-center justify-center h-96">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-primary-400 font-medium">Loading products...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product._id} product={product} index={index} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-20 h-20 mb-6 rounded-full bg-primary-50 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                No Products Found
              </h3>
              <p className="text-primary-400 max-w-sm">
                We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
