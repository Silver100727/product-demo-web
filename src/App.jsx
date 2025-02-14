import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Categories from "./pages/Categories.jsx";
import About from "./pages/About.jsx";
import axios from "axios";
import NestedProduct from "./pages/NestedProduct.jsx";
import { Gift, InstagramIcon, FacebookIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";
const BaseUrl = "https://api.rsgratitudegifts.com/api/addproduct";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const fetchProdutFromDb = () => {
    axios
      .post(
        BaseUrl,
        {
          type: "get",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setProductsList(res.data.data);
          const products = res.data.data;
          const uniqueCategories = new Set();
          products.forEach((product) => {
            if (product.category) {
              uniqueCategories.add(product.category); // Fix: Add only category
            }
          });
          const categoryList = Array.from(uniqueCategories).map((category) => {
            const firstMatchingProduct = products.find(
              (product) => product.category === category
            );

            return {
              id: category,
              name: category,
              description:
                firstMatchingProduct?.description || "No description available",
              image: firstMatchingProduct?.imageLinks[0] || "",
            };
          });
          setCategoryList(categoryList);
        } else {
          setProductsList([]);
        }
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchProdutFromDb();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products productsList={productsList} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetail productsList={productsList} />}
          />
          <Route
            path="/categories"
            element={<Categories categoryList={categoryList} />}
          />

          <Route
            path="/categories/:product"
            element={<NestedProduct productsList={productsList} />}
          />

          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="text-white relative [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:34px_44px]"></div>
          <div className="max-w-7xl mx-auto px-8 pt-15">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Gift className="h-8 w-8 text-purple-400" />
                  <span className="ml-2 text-xl font-bold">
                    RS Gratitude Gifts
                  </span>
                </div>
                <p className="text-gray-400">
                  Curating the perfect gifts for every occasion.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { to: "/", page: "Home" },
                    { to: "/products", page: "Products" },
                    { to: "/categories", page: "Categories" },
                    { to: "/about", page: "About" },
                  ].map((item, index) => {
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.5 }}
                      >
                        <Link
                          to={item.to}
                          className="text-gray-400 hover:text-white"
                        >
                          {item.page}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  {[
                    { page: "301, Khaleel Building," },
                    { page: "Bangalore - Karnataka" },
                    { page: "rs.gratitudegifts@gmail.com" },
                    { page: "(+91) 123-456-7356" },
                  ].map((item, index) => {
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.5 }}
                      >
                        {item.page}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <InstagramIcon className="h-6 w-6" /> },
                    { icon: <FacebookIcon className="h-6 w-6" /> },
                    { icon: <TwitterIcon className="h-6 w-6" /> },
                  ].map((item, index) => {
                    return (
                      <motion.a
                        href="#"
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.5 }}
                        className="text-gray-400 hover:text-white"
                      >
                        {item.icon}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 pb-4 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} RS Gratitude Gifts. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
