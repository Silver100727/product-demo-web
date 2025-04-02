import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";
import { ChevronDown } from "lucide-react";

const CustomDropdown = ({ category, setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    { label: "All Categories", value: "all" },
    { label: "Electronics", value: "electronics" },
    { label: "T-shirt", value: "T-shirt" },
    { label: "Fashion", value: "fashion" },
    { label: "Home", value: "home" },
    { label: "Beauty", value: "beauty" },
  ];

  return (
    <div className="relative w-full md:w-64">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between h-10 text-sm text-gray-600 items-center p-3 px-7 border border-gray-300 bg-white rounded-full shadow-sm focus:outline-none transition-all duration-300 ease-in-out cursor-pointer"
      >
        {categories.find((c) => c.value === category)?.label}
        <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-300" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full p-3 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {categories.map((item) => (
            <div
              key={item.value}
              onClick={() => {
                setCategory(item.value);
                setIsOpen(false);
              }}
              className={`p-2  cursor-pointer hover:bg-[#C27AFF] text-sm hover:text-white transition duration-300 rounded-lg ${
                category === item.value ? "bg-gray-100" : ""
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Products = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(props.productsList);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredProducts(
      props.productsList.filter(
        (product) =>
          product.isLive &&
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (category === "all" || product.category === category)
      )
    );
  }, [searchTerm, category, props.productsList]);

  return (
    <div className="min-h-screen flex flex-col gap-6 py-24 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
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
            <CustomDropdown category={category} setCategory={setCategory} />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12"
          >
            {filteredProducts.map((product, index) => (
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
