import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Categories from "./pages/Categories.jsx";
import CategoryDetail from "./pages/CategoryDetail.jsx";
import About from "./pages/About.jsx";
import axios from "axios";
const BaseUrl = "https://api.rsgratitudegifts.com/api/addproduct";
function App() {
  const [productsList, setProductsList] = useState([]);

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
          {/* <Route path="/categories" element={<Categories />} /> */}
          {/* <Route path="/categories/:id" element={<CategoryDetail />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="text-center p-4 bg-gray-200 text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} RS Gratitude Gift. All rights
          reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
