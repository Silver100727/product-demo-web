import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Categories from "./pages/Categories.jsx";
import CategoryDetail from "./pages/CategoryDetail.jsx";
import About from "./pages/About.jsx";
import FormModal from "./components/FormModal.jsx";

function App() {
  const [formModalBox, setFormModalBox] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormModalBox(true);
    }, 5000);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {formModalBox && <FormModal onClose={() => setFormModalBox(false)} />}
        <footer className="text-center p-4 bg-gray-200 text-gray-700">
          &copy; {new Date().getFullYear()} RS Gratitude Gift. All rights
          reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
