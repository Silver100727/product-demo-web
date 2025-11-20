import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Trending() {
  const [brands, setBrands] = useState([]);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBrands, setVisibleBrands] = useState(4);
  const Navigate = useNavigate();

  // Fetch brands
  useEffect(() => {
    axios
      .get(
        "https://rsglobalsolutions.in/api/routes.php?action=trendingproducts"
      )
      .then((res) => {
        if (res.data.success) setBrands(res.data.data);
        else setBrands([]);
      })
      .catch(() => setBrands([]));
  }, []);

  // Handle responsive layout
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setIsMobile(true);
        setVisibleBrands(1);
      } else if (window.innerWidth < 1024) {
        setIsMobile(false);
        setVisibleBrands(2);
      } else if (window.innerWidth < 1280) {
        setIsMobile(false);
        setVisibleBrands(3);
      } else {
        setIsMobile(false);
        setVisibleBrands(4);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For desktop: how many "pages" can you go
  const totalSlides = Math.max(0, brands.length - visibleBrands);

  // Handlers for arrows
  const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev < totalSlides ? prev + 1 : totalSlides));

  // ---- MOBILE RENDER ----
  if (isMobile) {
    return (
      <div className="flex overflow-x-auto gap-4 px-2 pb-4 scrollbar-hide">
        {brands.map((brand, index) => (
          <motion.div
            key={brand._id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="min-w-[70vw] max-w-[90vw] flex-shrink-0"
            onClick={() => Navigate(`/product-details/${brand._id}`)}
          >
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 relative cursor-pointer group"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)' }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent/70 via-primary/70 to-accent/70 z-20 opacity-0 group-active:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
              </div>

              {/* Premium badge */}
              <div className="absolute top-4 right-4 z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 500, damping: 25 }}
                  className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-xl flex items-center justify-center border border-accent/30 shadow-lg"
                  style={{ boxShadow: '0 4px 12px rgba(31,196,228,0.2)' }}
                >
                  <Sparkles className="w-4 h-4 text-accent" strokeWidth={2.5} />
                </motion.div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-slate-50 via-white to-slate-50/50 p-6">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.015]" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />

                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.img
                    loading="lazy"
                    src={brand.imageLinks[0] || "/placeholder.svg"}
                    alt={brand.title}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-lg"
                    style={{
                      filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.08))'
                    }}
                  />
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent/20 rounded-tl-2xl opacity-0 group-active:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-2xl opacity-0 group-active:opacity-100 transition-opacity" />
              </div>

              {/* Product Title Bar */}
              <div className="relative px-4 py-3 bg-gradient-to-b from-white to-slate-50/50 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 truncate">{brand.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                      className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-accent">Premium</span>
                </div>
              </div>

              {/* Decorative gradient orb */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-tl from-accent/10 via-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-active:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
  }

  // ---- DESKTOP/TABLET RENDER ----
  return (
    <div className="relative w-full max-w-6xl mx-auto px-1 sm:px-2 md:px-4">
      <div className="overflow-hidden rounded-3xl">
        <motion.div
          animate={{
            x: `-${currentIndex * (100 / visibleBrands)}%`,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex"
        >
          {brands.map((brand, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              onClick={() => {
                Navigate(`/product-details/${brand._id}`);
              }}
              key={brand._id}
              className="flex-shrink-0 px-1 sm:px-2 md:px-3"
              style={{ width: `${100 / visibleBrands}%` }}
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 cursor-pointer group relative"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)' }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent/70 via-primary/70 to-accent/70 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                </div>

                {/* Premium badge */}
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/95 backdrop-blur-xl flex items-center justify-center border border-accent/30 shadow-lg"
                    style={{ boxShadow: '0 4px 16px rgba(31,196,228,0.25)' }}
                  >
                    <Sparkles className="w-4 h-4 text-accent" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative aspect-square bg-gradient-to-br from-slate-50 via-white to-slate-50/50 p-4 sm:p-6 md:p-8">
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }} />

                  {/* Radial gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-100/20" />

                  {/* Image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.img
                      loading="lazy"
                      src={brand.imageLinks[0] || "/placeholder.svg"}
                      alt={brand.title}
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.1)) drop-shadow(0 2px 8px rgba(0,0,0,0.06))'
                      }}
                    />
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-accent/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-primary/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Floating particles effect */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full blur-sm"
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full blur-sm"
                    animate={{
                      y: [10, -10, 10],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Product Title Bar */}
                <div className="relative px-3 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-b from-white to-slate-50/50 border-t border-slate-100">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 truncate group-hover:text-accent transition-colors">
                    {brand.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 + 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-wider">Premium</span>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                {/* Decorative gradient orb */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-tl from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.15, x: -3 }}
        whileTap={{ scale: 0.92 }}
        className="absolute left-1 sm:-left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white/98 backdrop-blur-xl shadow-xl border border-slate-200/80 p-2.5 sm:p-3.5 z-20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:text-white hover:border-accent hover:shadow-2xl transition-all duration-300"
        style={{ boxShadow: '0 12px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)' }}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.15, x: 3 }}
        whileTap={{ scale: 0.92 }}
        className="absolute right-1 sm:-right-6 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/98 backdrop-blur-xl shadow-xl border border-slate-200/80 p-2.5 sm:p-3.5 z-20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:text-white hover:border-accent hover:shadow-2xl transition-all duration-300"
        style={{ boxShadow: '0 12px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)' }}
        onClick={handleNext}
        disabled={currentIndex >= totalSlides}
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
      </motion.button>

      {/* Progress Indicators */}
      {totalSlides > 0 && (
        <div className="flex justify-center gap-2.5 mt-8">
          {Array.from({ length: totalSlides + 1 }).map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.85 }}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                idx === currentIndex
                  ? "w-10 bg-gradient-to-r from-accent via-primary to-accent shadow-lg"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400 hover:w-3"
              }`}
              style={idx === currentIndex ? { boxShadow: '0 2px 8px rgba(31,196,228,0.4)' } : {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}
