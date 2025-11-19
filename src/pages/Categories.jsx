import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CategoryCard from "../components/CategoryCard.jsx";
import axios from "axios";

const Categories = () => {
  const [categoryList, setcategoryList] = useState([]);
  const [spinner, setspinner] = useState(false);

  const getCategoryFromDb = () => {
    setspinner(true);

    axios
      .get("https://rsglobalsolutions.in/api/routes.php?action=getcategory", {})
      .then((res) => {
        if (res.data.success) {
          setcategoryList(res.data.data);
          setspinner(false);
        } else {
          setspinner(false);
          setcategoryList([]);
        }
      })
      .catch((err) => {
        setspinner(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategoryFromDb();
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Categories
          </h1>
          <p className="text-lg text-primary-400 max-w-3xl mx-auto">
            Browse our product categories to find exactly what you're looking
            for
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`${
            categoryList && categoryList.length > 0
              ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              : "flex items-center justify-center min-h-[400px]"
          }`}
        >
          {spinner ? (
            <div className="col-span-full flex flex-col items-center justify-center h-96">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-primary-400 font-medium">Loading categories...</p>
            </div>
          ) : (
            <>
              {categoryList && categoryList.length > 0 ? (
                categoryList.map((category) => (
                  <CategoryCard
                    key={category._id}
                    category={category}
                    type={"subcategory"}
                  />
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    No Categories Found
                  </h3>
                  <p className="text-primary-400 max-w-sm">
                    We couldn't find any categories at the moment. Please check back later.
                  </p>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
