import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Categories from "./pages/Categories.jsx";
import About from "./pages/About.jsx";
import axios from "axios";
import NestedProduct from "./pages/NestedProduct.jsx";
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

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <Navbar scrolled={scrolled} />
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
      </div>
    </Router>
  );
}

export default App;
