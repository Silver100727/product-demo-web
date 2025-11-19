import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../asset/Image/RSGlobalSolutions.png";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/Corporate-Gifts", label: "Corporate Gifts" },
  { to: "/products", label: "Products" },
  { to: "/categories", label: "Categories" },
  { to: "/Contact-us", label: "Contact" },
  { to: "/about", label: "About" },
];

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        hasScrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(51,68,94,0.12)] border-primary-100/20"
          : "bg-white/90 backdrop-blur-md shadow-[0_2px_16px_rgba(51,68,94,0.06)]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo with premium hover effect */}
          <NavLink to="/" className="flex items-center group relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <img
                src={logo}
                alt="RS Global Solutions"
                className="h-11 w-auto object-contain relative z-10 drop-shadow-sm"
              />
            </motion.div>
          </NavLink>

          {/* Vertical divider */}
          <div className="hidden md:block h-8 w-px bg-gradient-to-b from-transparent via-primary-200 to-transparent absolute left-[200px]" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300 rounded-xl group ${
                    isActive
                      ? "text-accent"
                      : "text-primary-700 hover:text-accent"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 tracking-[0.02em]">
                      {link.label}
                    </span>

                    {/* Active state with gradient background */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 bg-gradient-to-br from-accent-50 via-accent-50/80 to-accent-100/50 rounded-xl border border-accent-200/50 shadow-[0_2px_8px_rgba(10,174,95,0.1)]"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}

                    {/* Hover background with scale effect */}
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}

                    {/* Animated underline from center */}
                    {!isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-accent to-accent-600 rounded-full group-hover:w-1/2 transition-all duration-300" />
                    )}

                    {/* Premium glow on active */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
                        layoutId="navbar-glow"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button with premium effect */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={handleToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-2.5 rounded-xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-accent text-white shadow-[0_4px_16px_rgba(10,174,95,0.3)]"
                  : "bg-primary-50/80 text-primary-700 hover:bg-accent hover:text-white hover:shadow-[0_4px_16px_rgba(10,174,95,0.2)]"
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <X size={22} strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Menu size={22} strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slide from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Premium backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-primary-900/20 backdrop-blur-md md:hidden"
              onClick={handleToggle}
              style={{ top: "72px" }}
            />

            {/* Mobile Menu - Slide from right */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[72px] right-0 bottom-0 w-[280px] bg-white/98 backdrop-blur-2xl shadow-[-8px_0_32px_rgba(51,68,94,0.15)] border-l border-primary-100/30 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-2">
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={handleToggle}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-5 py-3.5 text-[15px] font-semibold rounded-xl tracking-wide transition-all duration-300 ${
                          isActive
                            ? "text-accent bg-gradient-to-br from-accent-50 to-accent-100/50 border border-accent-200/50 shadow-[0_2px_8px_rgba(10,174,95,0.1)]"
                            : "text-primary-700 hover:text-accent hover:bg-gradient-to-br hover:from-primary-50 hover:to-primary-100/30 border border-transparent hover:border-primary-200/30"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="tracking-[0.01em]">{link.label}</span>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                              }}
                              className="w-2 h-2 rounded-full bg-gradient-to-br from-accent to-accent-600 shadow-[0_2px_8px_rgba(10,174,95,0.4)]"
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Premium footer gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-50/50 to-transparent pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
