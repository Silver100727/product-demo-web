import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryCard from "../components/CategoryCard.jsx";
import axios from "axios";
import { Package, Sparkles } from "lucide-react";

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
      <section className="relative pt-32 pb-16 md:pb-20">
        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-white/30 shadow-[0_4px_16px_rgba(51,68,94,0.08)] mb-6"
            >
              <Package className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-primary-700 tracking-wide">
                Explore Our Collection
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-600 to-accent bg-clip-text text-transparent">
                Product Categories
              </span>
            </h1>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Browse our carefully curated categories to find exactly what you're looking for.
              From corporate gifts to seasonal collections, we have it all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="pb-16 relative z-10">
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
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
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
                    <Package className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-primary-600 font-medium"
                >
                  Loading categories...
                </motion.p>
              </motion.div>
            ) : (
              <>
                {categoryList && categoryList.length > 0 ? (
                  <motion.div
                    key="categories"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                  >
                    {categoryList.map((category, index) => (
                      <motion.div
                        key={category._id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <CategoryCard category={category} type={"subcategory"} />
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
                        No Categories Found
                      </h3>
                      <p className="text-primary-600 max-w-md mb-6 leading-relaxed">
                        We couldn't find any categories at the moment. Please check back later
                        or contact us for assistance.
                      </p>

                      {/* Action button */}
                      <motion.a
                        href="/Contact-us"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                      >
                        <Sparkles className="w-5 h-5" />
                        Contact Support
                      </motion.a>
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

export default Categories;
