import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ScanEye, X, Package, CheckCircle2, Sparkles, Shield, Star, Zap, Award, TrendingUp } from "lucide-react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setproduct] = useState();

  const GetProductDeatailsFromDb = () => {
    axios
      .post(
        "https://rsglobalsolutions.in/api/routes.php?action=GetProductDeatailsFromDbById",
        {
          id: id,
        }
      )
      .then((res) => {
        if (res.data.success) {
          setproduct(res.data.data);
        } else {
          setsubcategoryList([]);
        }
      })
      .catch((err) => {});
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.imageLinks.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.imageLinks.length - 1 : prev - 1
    );
  };

  // Handlers to open/close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    GetProductDeatailsFromDb();
  }, []);

  return (
    <div className="pt-20 pb-16 flex flex-col px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-cyan-50/20 min-h-screen relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-accent/5 via-primary/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 via-accent/5 to-transparent rounded-full blur-3xl -z-10" />

      {product && (
        <div className="max-w-7xl mx-auto w-full relative">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6 text-sm"
          >
            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-primary transition-all duration-300 group rounded-xl shadow-sm hover:shadow-md border border-gray-200/60"
            >
              <div className="p-0.5 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-accent/10 group-hover:to-primary/10 transition-all">
                <ChevronLeft size={16} strokeWidth={2.5} />
              </div>
              <span className="font-semibold">Back to Products</span>
            </motion.button>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="ml-auto flex items-center gap-2"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 rounded-full border border-emerald-500/20 backdrop-blur-sm">
                <Shield className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
                <span className="text-xs font-bold text-emerald-700">Verified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-full border border-amber-500/20 backdrop-blur-sm">
                <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-600" strokeWidth={2.5} />
                <span className="text-xs font-bold text-amber-700">Premium</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Image Gallery Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square bg-gradient-to-br from-slate-100 via-white to-slate-50 rounded-3xl overflow-hidden group"
                style={{
                  boxShadow: '0 24px 80px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05), inset 0 1px 0 0 rgba(255,255,255,0.8)'
                }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent/80 via-primary/80 via-50% to-accent/80 z-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                </div>
                <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent z-10" />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={product.imageLinks[currentImageIndex]}
                    alt={product.title}
                    initial={{ opacity: 0, scale: 1.08, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Multi-layer Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-white/5 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none opacity-60" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-black/5 to-transparent pointer-events-none" />

                {/* Navigation Buttons */}
                {product.imageLinks.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      whileHover={{ scale: 1.1, x: -4 }}
                      whileTap={{ scale: 0.92 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-white/98 backdrop-blur-2xl hover:bg-gradient-to-br hover:from-accent hover:to-accent/90 hover:text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(31,196,228,0.3)] border border-white/90 hover:border-accent/50 transition-all duration-300 cursor-pointer z-20 flex items-center justify-center group"
                      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)' }}
                    >
                      <ChevronLeft size={20} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      whileHover={{ scale: 1.1, x: 4 }}
                      whileTap={{ scale: 0.92 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-white/98 backdrop-blur-2xl hover:bg-gradient-to-br hover:from-accent hover:to-accent/90 hover:text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(31,196,228,0.3)] border border-white/90 hover:border-accent/50 transition-all duration-300 cursor-pointer z-20 flex items-center justify-center group"
                      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)' }}
                    >
                      <ChevronRight size={20} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                    </motion.button>
                  </>
                )}

                {/* Quick View Button */}
                <motion.button
                  onClick={openModal}
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  whileTap={{ scale: 0.92 }}
                  className="absolute top-5 right-5 p-3 rounded-2xl bg-white/98 backdrop-blur-2xl hover:bg-gradient-to-br hover:from-primary hover:to-primary/90 hover:text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)] border border-white/90 hover:border-primary/50 transition-all duration-300 cursor-pointer z-20 group"
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)' }}
                >
                  <ScanEye size={18} strokeWidth={2.5} className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                </motion.button>

                {/* Image Counter Badge */}
                {product.imageLinks.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-lg border border-white/90 z-20"
                    style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)' }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse" />
                      <span className="text-xs font-bold text-slate-700">
                        {currentImageIndex + 1} <span className="text-slate-400 font-medium">/</span> {product.imageLinks.length}
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Thumbnail Gallery */}
              {product.imageLinks.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-4 gap-3"
                >
                  {product.imageLinks.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className={`aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 relative group ${
                        index === currentImageIndex
                          ? "ring-[3px] ring-accent shadow-xl"
                          : "ring-[2px] ring-slate-200 hover:ring-slate-300 shadow-md hover:shadow-lg"
                      }`}
                      style={
                        index === currentImageIndex
                          ? { boxShadow: '0 8px 24px rgba(31,196,228,0.25), 0 0 0 3px rgba(31,196,228,0.4), inset 0 1px 0 rgba(255,255,255,0.5)' }
                          : { boxShadow: '0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)' }
                      }
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Active indicator */}
                      {index === currentImageIndex && (
                        <motion.div
                          layoutId="activeThumb"
                          className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent pointer-events-none"
                        >
                          <div className="absolute bottom-1 right-1 w-2 h-2 bg-accent rounded-full shadow-lg" />
                        </motion.div>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
            {/* Product Information Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-5"
            >
              {/* Header Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-7 border border-slate-200/60 relative overflow-hidden"
                style={{ boxShadow: '0 20px 60px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.9)' }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent/70 via-primary/70 via-50% to-accent/70">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                </div>
                <div className="absolute top-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

                <div className="flex items-start gap-4 mb-5">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 500, damping: 25 }}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-emerald-400/10 to-emerald-500/5 flex items-center justify-center flex-shrink-0 border border-emerald-500/20"
                    style={{ boxShadow: '0 4px 16px rgba(16,185,129,0.15), inset 0 1px 0 rgba(255,255,255,0.6)' }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" strokeWidth={2.5} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-3 leading-tight"
                    >
                      {product.title}
                    </motion.h1>
                    {product.price && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 400 }}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-accent/15 via-cyan-400/10 to-accent/15 rounded-2xl border-2 border-accent/25 relative group overflow-hidden"
                        style={{ boxShadow: '0 8px 24px rgba(31,196,228,0.15), inset 0 1px 0 rgba(255,255,255,0.7)' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Sparkles className="w-5 h-5 text-accent relative z-10" strokeWidth={2.5} />
                        <div className="flex items-baseline gap-1 relative z-10">
                          <span className="text-sm font-semibold text-accent/70">₹</span>
                          <span className="text-3xl font-bold bg-gradient-to-br from-accent via-cyan-500 to-accent bg-clip-text text-transparent">
                            {product.price}
                          </span>
                        </div>
                        <div className="absolute -right-2 -top-2 w-16 h-16 bg-accent/10 rounded-full blur-2xl" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {product.description && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="relative"
                  >
                    <div className="absolute -left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 via-primary/30 to-accent/40 rounded-full" />
                    <p className="text-slate-600 leading-relaxed text-base pl-0 pt-4 border-t border-slate-200/60">
                      {product.description}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Features Card */}
              {product.features && product.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/95 backdrop-blur-sm rounded-3xl p-7 border border-slate-200/60 relative overflow-hidden"
                  style={{ boxShadow: '0 20px 60px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.9)' }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl" />

                  <div className="flex items-center gap-3 mb-5 relative">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
                      className="w-11 h-11 rounded-2xl bg-gradient-to-br from-accent/20 via-cyan-400/15 to-accent/10 flex items-center justify-center border border-accent/20 relative"
                      style={{ boxShadow: '0 4px 16px rgba(31,196,228,0.15), inset 0 1px 0 rgba(255,255,255,0.6)' }}
                    >
                      <Package className="w-5 h-5 text-accent" strokeWidth={2.5} />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                    </motion.div>
                    <div>
                      <h2 className="text-xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        Key Features
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">Premium specifications</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50/80 via-white to-slate-50/40 rounded-2xl p-5 border border-slate-200/60 relative overflow-hidden"
                    style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.03), 0 1px 2px rgba(255,255,255,0.8)' }}
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] via-transparent to-primary/[0.02] pointer-events-none" />

                    <ul className="space-y-3 relative">
                      {product.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-start gap-3 text-slate-700 group cursor-default"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="w-6 h-6 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-accent/25 group-hover:to-accent/10 transition-all duration-300 border border-accent/20"
                            style={{ boxShadow: '0 2px 8px rgba(31,196,228,0.1), inset 0 1px 0 rgba(255,255,255,0.5)' }}
                          >
                            <Zap className="w-3 h-3 text-accent" strokeWidth={2.5} />
                          </motion.div>
                          <span className="text-sm leading-relaxed flex-1 group-hover:text-slate-900 transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Specifications Card */}
              {product.specification && Object.keys(product.specification).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/95 backdrop-blur-sm rounded-3xl p-7 border border-slate-200/60 relative overflow-hidden"
                  style={{ boxShadow: '0 20px 60px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.9)' }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl" />

                  <div className="flex items-center gap-3 mb-5 relative">
                    <motion.div
                      initial={{ scale: 0, rotate: 90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 400 }}
                      className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/20 via-blue-400/15 to-primary/10 flex items-center justify-center border border-primary/20 relative"
                      style={{ boxShadow: '0 4px 16px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.6)' }}
                    >
                      <svg
                        className="w-5 h-5 text-primary relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                    </motion.div>
                    <div>
                      <h2 className="text-xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        Technical Specifications
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">Detailed product info</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50/80 via-white to-slate-50/40 rounded-2xl p-5 border border-slate-200/60 relative overflow-hidden"
                    style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.03), 0 1px 2px rgba(255,255,255,0.8)' }}
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />

                    <div className="space-y-2.5 relative">
                      {Object.entries(product.specification).map(
                        ([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className={`flex items-center justify-between py-3 px-4 group hover:bg-white/60 rounded-xl transition-all duration-300 ${
                              index !== 0 ? "border-t border-slate-200/50" : ""
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                              <span className="text-sm text-slate-600 font-semibold group-hover:text-slate-900 transition-colors">{key}</span>
                            </div>
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              className="text-sm font-bold bg-gradient-to-br from-primary via-blue-600 to-primary bg-clip-text text-transparent px-3.5 py-1.5 rounded-xl border border-primary/15 relative overflow-hidden"
                              style={{ boxShadow: '0 2px 8px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.5)', backgroundColor: 'rgba(59,130,246,0.05)' }}
                            >
                              <span className="relative z-10 text-slate-600 ">{value}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.span>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Premium Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className="fixed inset-0 z-[999] flex items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeModal}
              >
                {/* Advanced Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-3xl"
                >
                  {/* Animated gradient orbs */}
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </motion.div>

                {/* Modal Content */}
                <motion.div
                  initial={{ scale: 0.92, opacity: 0, y: 40 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.92, opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 max-w-7xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative rounded-3xl overflow-hidden border border-white/10"
                    style={{ boxShadow: '0 32px 128px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)' }}
                  >
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent/80 via-primary/80 via-50% to-accent/80 z-20">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={product.imageLinks[currentImageIndex]}
                        alt={product.title}
                        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-auto max-h-[82vh] object-contain bg-gradient-to-br from-slate-900 to-slate-800"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Navigation Controls */}
                  {product.imageLinks.length > 1 && (
                    <>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        whileHover={{ scale: 1.15, x: -6 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/98 backdrop-blur-2xl hover:bg-gradient-to-br hover:from-accent hover:to-accent/90 hover:text-white border-2 border-white/90 hover:border-accent/50 transition-all duration-300 flex items-center justify-center group"
                        style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)' }}
                      >
                        <ChevronLeft size={26} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                      </motion.button>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        whileHover={{ scale: 1.15, x: 6 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/98 backdrop-blur-2xl hover:bg-gradient-to-br hover:from-accent hover:to-accent/90 hover:text-white border-2 border-white/90 hover:border-accent/50 transition-all duration-300 flex items-center justify-center group"
                        style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)' }}
                      >
                        <ChevronRight size={26} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </>
                  )}

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.15, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="absolute -top-16 right-0 w-12 h-12 bg-white/98 backdrop-blur-2xl rounded-2xl hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 hover:text-white border-2 border-white/90 hover:border-red-500/50 transition-all duration-300 flex items-center justify-center group"
                    style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)' }}
                  >
                    <X size={22} strokeWidth={2.5} />
                  </motion.button>

                  {/* Image Counter Badge */}
                  {product.imageLinks.length > 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -bottom-14 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/98 backdrop-blur-2xl rounded-2xl border-2 border-white/90"
                      style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse" />
                        <span className="text-sm font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                          Image {currentImageIndex + 1} <span className="text-slate-400 font-medium">of</span> {product.imageLinks.length}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
