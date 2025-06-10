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
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CorporatesGift from "./pages/CorporatesGift.jsx";
import SubCategory from "./pages/SubCategory.jsx";
const BaseUrl = "https://rsgratitudegifts.com/api/routes.php?action=addproduct";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [BannerList, setBannerList] = useState([]);

  const fetchBannerFromDb = () => {
    axios
      .post(
        "https://rsgratitudegifts.com/api/routes.php?action=addbanner",
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
          setBannerList(res.data.data);
        } else {
          setBannerList([]);
        }
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchBannerFromDb();
  }, []);

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
          <Route
            path="/"
            element={<Home MainBannerImageList={BannerList[2]?.imageLinks} />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route
            path="/Corporate-Gifts"
            element={
              <CorporatesGift
                FestivalBannerImageList={BannerList[1]?.imageLinks}
                CorporateBannerImageList={BannerList[0]?.imageLinks}
              />
            }
          />
          <Route path="/product-details/:id" element={<ProductDetail />} />

          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/subcategory/:subcategoryname"
            element={<SubCategory />}
          />
          <Route
            path="/categories/subcategory/product/:productName"
            element={<NestedProduct />}
          />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
