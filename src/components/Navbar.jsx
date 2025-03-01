import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Gift, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/brands", label: "Brands" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
];

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ borderRadius: "0px" }}
      animate={{
        borderRadius: scrolled ? (isOpen ? "20px" : "20px") : "0px",
        width: scrolled ? "90%" : "100%",
        left: scrolled ? "5%" : "",
        top: scrolled ? "2%" : "",
      }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-xl font-bold text-gray-800 flex items-center"
            >
              <Gift className="h-8 w-8 text-purple-400 mx-2" />
              RS Gratitude Gift
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-blue-400 transition-colors ${
                    isActive ? "font-semibold text-blue-500" : ""
                  }`
                }
                end
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleToggle}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? (
                <X size={24} cursor="pointer" />
              ) : (
                <Menu size={24} cursor="pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
            style={{ borderRadius: isOpen ? "20px" : "0px" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  onClick={handleToggle}
                  className={({ isActive }) =>
                    `block px-3 py-1.5 rounded-md text-base font-medium ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
