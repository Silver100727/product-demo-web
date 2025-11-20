import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";
import axios from "axios";
import {
  Search,
  Filter,
  ShoppingBag,
  Sparkles,
  Package,
  Check,
  ChevronDown,
} from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [spinner, setspinner] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden relative">
      {/* Premium background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/15 via-accent/8 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 via-primary/8 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-10 pb-8 md:pb-16">
        <div className="container px-4 mx-auto max-w-7xl relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-600 to-accent bg-clip-text text-transparent">
                Our Products
              </span>
            </h1>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of premium products designed to enhance
              your lifestyle and celebrate every moment.
            </p>
          </motion.div>

          {/* Search & Filter Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 relative"
          >
            {/* Search Input */}
            <div className="relative w-full sm:w-96 group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <Search className="w-5 h-5 text-gray-400 group-focus-within:text-accent transition-colors" />
                  {searchTerm && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                    />
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3.5 pl-12 pr-12 text-sm font-medium bg-white/80 backdrop-blur-xl border-2 border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(51,68,94,0.1)] focus:outline-none focus:border-accent focus:ring-0 focus:ring-accent/20 transition-all duration-300 hover:border-accent/50 text-gray-700 placeholder:text-gray-400"
                />
                {searchTerm && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 hover:bg-accent hover:text-white flex items-center justify-center transition-colors duration-200"
                    aria-label="Clear search"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Category Filter - Custom Dropdown */}
            <div ref={dropdownRef} className="relative w-full sm:w-72 group ">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Dropdown Button */}
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="relative w-full px-5 py-3.5 pl-12 pr-12 text-sm font-medium bg-white/80 backdrop-blur-xl border-2 border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(51,68,94,0.1)] focus:outline-none focus:border-accent focus:ring-0 focus:ring-accent/20 transition-all duration-300 hover:border-accent/50 text-gray-700 text-left"
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400 transition-colors" />
                  {selectedCategory && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                    />
                  )}
                </div>

                <span
                  className={
                    selectedCategory ? "text-gray-700" : "text-gray-400"
                  }
                >
                  {selectedCategory || "All Categories"}
                </span>

                {/* Right Icons */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  {selectedCategory && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory("");
                        setIsDropdownOpen(false);
                      }}
                      className="w-5 h-5 rounded-full bg-gray-200 hover:bg-accent hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.div>
                  )}
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full mt-2 w-full bg-white/95 backdrop-blur-2xl border-2 border-white/50 rounded-2xl shadow-[0_16px_48px_rgba(51,68,94,0.2)] overflow-hidden z-[80]"
                  >
                    <div className="max-h-[280px] overflow-y-auto overflow-x-hidden custom-scrollbar">
                      {/* All Categories Option */}
                      <motion.button
                        onClick={() => {
                          setSelectedCategory("");
                          setIsDropdownOpen(false);
                        }}
                        whileHover={{
                          backgroundColor: "rgba(10, 174, 95, 0.08)",
                        }}
                        className={`w-full px-5 py-3 text-sm text-left transition-colors duration-200 flex items-center justify-between group ${
                          !selectedCategory ? "bg-accent/5" : ""
                        }`}
                      >
                        <span
                          className={`font-medium ${
                            !selectedCategory ? "text-accent" : "text-gray-700"
                          }`}
                        >
                          All Categories
                        </span>
                        {!selectedCategory && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 25,
                            }}
                          >
                            <Check className="w-4 h-4 text-accent" />
                          </motion.div>
                        )}
                      </motion.button>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                      {/* Category Options */}
                      {categories.map((category, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            setSelectedCategory(category.subcategory);
                            setIsDropdownOpen(false);
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                          whileHover={{
                            backgroundColor: "rgba(10, 174, 95, 0.08)",
                          }}
                          className={`w-full px-5 py-3 text-sm text-left transition-colors duration-200 flex items-center justify-between group ${
                            selectedCategory === category.subcategory
                              ? "bg-accent/5"
                              : ""
                          }`}
                        >
                          <span
                            className={`font-medium ${
                              selectedCategory === category.subcategory
                                ? "text-accent"
                                : "text-gray-700"
                            }`}
                          >
                            {category.subcategory}
                          </span>
                          {selectedCategory === category.subcategory && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 25,
                              }}
                            >
                              <Check className="w-4 h-4 text-accent" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Results count */}
          {!spinner && filteredProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold text-accent">
                  {filteredProducts.length}
                </span>{" "}
                product{filteredProducts.length !== 1 ? "s" : ""}
                {selectedCategory && ` in ${selectedCategory}`}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="pb-16 relative">
        <div className="container px-4 mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            {spinner ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-32"
              >
                <div className="relative">
                  {/* Outer rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-20 h-20 border-4 border-accent/20 border-t-accent rounded-full"
                  />
                  {/* Inner pulsing circle */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 m-auto w-12 h-12 bg-accent/20 rounded-full"
                  />
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-primary-600 font-medium"
                >
                  Loading products...
                </motion.p>
              </motion.div>
            ) : (
              <>
                {filteredProducts.length > 0 ? (
                  <motion.div
                    key="products"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                  >
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product._id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-32"
                  >
                    <div className="relative mb-8">
                      {/* Animated background glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl"
                      />

                      {/* Icon container */}
                      <div className="relative w-24 h-24 bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(51,68,94,0.12)] flex items-center justify-center border border-white/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl" />
                        <Package className="w-12 h-12 text-primary-300 relative z-10" />
                      </div>
                    </div>

                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        No Products Found
                      </h3>
                      <p className="text-primary-600 max-w-md mb-6 leading-relaxed">
                        We couldn't find any products matching your criteria.
                        Try adjusting your filters or search terms.
                      </p>

                      {/* Action button */}
                      <motion.button
                        onClick={() => {
                          setSearchTerm("");
                          setSelectedCategory("");
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                      >
                        <Sparkles className="w-5 h-5" />
                        Clear Filters
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Products;
