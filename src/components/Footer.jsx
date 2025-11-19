import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../asset/Image/RSGlobalSolutions.png";

const Whatsapp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
    ></path>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    {
      icon: <InstagramIcon className="h-5 w-5" />,
      link: "https://www.instagram.com/rsgratitudegifts/",
      label: "Instagram",
    },
    {
      icon: <FacebookIcon className="h-5 w-5" />,
      link: "https://www.facebook.com/people/RS-Gratitude-Gifts/61573472153305/",
      label: "Facebook",
    },
    {
      icon: <Whatsapp className="h-5 w-5" />,
      link: "https://wa.me/919900123901",
      label: "WhatsApp",
    },
    {
      icon: <LinkedinIcon className="h-5 w-5" />,
      link: "https://www.linkedin.com/in/rs-gratitude-gifts-642524351/",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { to: "/", page: "Home" },
    { to: "/products", page: "Products" },
    { to: "/categories", page: "Categories" },
    { to: "/about", page: "About" },
    { to: "/Contact-us", page: "Contact" },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0a0e14] via-[#202d3f] to-[#33445E] text-white overflow-hidden">
      {/* Premium background effects */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <motion.img
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                src={logo}
                alt="RS Global Solutions"
                className="h-12 w-42  shadow-lg"
              />
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Curating the perfect gifts for every occasion. Building lasting
              relationships through thoughtful corporate gifting solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center hover:bg-[#0AAE5F] hover:border-[#0AAE5F] transition-all duration-300"
                  aria-label={item.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0AAE5F]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative text-white/60 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-[#0AAE5F] text-sm transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-[#0AAE5F] group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item.page}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#0AAE5F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0AAE5F]/20 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[#0AAE5F]" />
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  No. 20, 3rd floor, Shivanand Nagar, 6th Phase, JP Nagar,
                  Bangalore - 560078
                </p>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#0AAE5F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0AAE5F]/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#0AAE5F]" />
                </div>
                <a
                  href="mailto:contact.us@rsglobalsolutions.in"
                  className="text-white/70 hover:text-[#0AAE5F] text-sm transition-colors duration-300"
                >
                  contact.us@rsglobalsolutions.in
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#0AAE5F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0AAE5F]/20 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#0AAE5F]" />
                </div>
                <a
                  href="tel:+919900123901"
                  className="text-white/70 hover:text-[#0AAE5F] text-sm transition-colors duration-300"
                >
                  +91 990-012-3901
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">
              Business Hours
            </h3>
            <ul className="space-y-3">
              {businessHours.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-white/70">{item.day}:</span>
                  <span className="text-[#0AAE5F] font-semibold">
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6"
            >
              <Link
                to="/Contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0AAE5F] to-[#099950] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-[#0AAE5F]/25 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} RS Global Solutions. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-white/60 hover:text-[#0AAE5F] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-white/60 hover:text-[#0AAE5F] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/shipping-policy"
                className="text-white/60 hover:text-[#0AAE5F] transition-colors duration-300"
              >
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
