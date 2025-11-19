import { ChevronRight, Sparkles, Gift, PartyPopper, Award, TrendingUp, Zap, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CorporatesGift = (props) => {
  const Navto = useNavigate();
  const [CoperateProductList, setCoperateProductList] = useState([]);
  const [FestivalProductList, setFestivalProductList] = useState([]);

  // slider state
  const [corpIndex, setCorpIndex] = useState(0);
  const [festIndex, setFestIndex] = useState(0);

  // advance corporate banner every 5s
  useEffect(() => {
    if (!props.coporateBanner?.length) return;
    const timer = setInterval(() => {
      setCorpIndex((idx) => (idx + 1) % props.coporateBanner.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [props.coporateBanner]);

  // advance festival banner every 5s
  useEffect(() => {
    if (!props.festivalBanner?.length) return;
    const timer = setInterval(() => {
      setFestIndex((idx) => (idx + 1) % props.festivalBanner.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [props.festivalBanner]);

  const getcorporateproductsFromDb = () => {
    axios
      .get(
        "https://rsglobalsolutions.in/api/routes.php?action=corporateproducts",
        {}
      )
      .then((res) => {
        if (res.data.success) {
          setCoperateProductList(res.data.data);
        } else {
          setCoperateProductList([]);
        }
      })
      .catch((err) => {});
  };
  const getfestivalproductsFromDb = () => {
    axios
      .get(
        "https://rsglobalsolutions.in/api/routes.php?action=festivalproducts",
        {}
      )
      .then((res) => {
        if (res.data.success) {
          setFestivalProductList(res.data.data);
        } else {
          setcategoryList([]);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getcorporateproductsFromDb();
    getfestivalproductsFromDb();
  }, []);

  return (
    <main className="flex-1 mt-[100px] bg-gradient-to-br from-slate-50 via-white to-cyan-50/20 relative overflow-hidden">
      {/* Background Decorative Elements */}

      {/* Mobile Corporate Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[42vh] text-white sm:hidden overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={corpIndex}
            src={props.coporateBanner?.[corpIndex] || ""}
            alt="Corporate Banner"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />

        <div className="relative z-10 flex flex-col justify-center h-full px-5 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
              <Gift className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Premium Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mb-3 leading-tight"
          >
            Corporate Gifting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm mb-5 text-white/90 leading-relaxed"
          >
            Strengthen business relationships and show appreciation with our
            premium corporate gift collections, customized to reflect your
            brand's values.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={() => {
              Navto(`/categories/subcategory/23/${"Corporate Gifts"}`);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex justify-center items-center gap-2 px-6 py-2 bg-blue/98 backdrop-blur-xl text-primary rounded-2xl font-bold text-sm shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group w-fit"
            style={{ boxShadow: '0 8px 32px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.8)' }}
          >
            Explore Collections
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* Slide Indicators */}
        {props.coporateBanner?.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {props.coporateBanner.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === corpIndex ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </motion.section>

      {/* Desktop Corporate Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[55vh] text-white hidden sm:block overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={corpIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url("${props.coporateBanner?.[corpIndex] || ""}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Multi-layer overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Top decorative bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent/80 via-primary/80 via-50% to-accent/80 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
        </div>

        <div className="container relative px-6 py-20 md:py-28 mx-auto flex flex-col justify-center h-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-2xl border border-white/30 flex items-center justify-center"
                style={{ boxShadow: '0 8px 32px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.4)' }}
              >
                <Gift className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest block">Premium Collection</span>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs text-white/70 font-medium">Curated Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
            >
              Corporate Gifting
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg mb-3 text-white/95 leading-relaxed max-w-2xl"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
            >
              Strengthen business relationships and show appreciation with our
              premium corporate gift collections, customized to reflect your
              brand's values.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => {
                  Navto(`/categories/subcategory/23/${"Corporate Gifts"}`);
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-6 py-2 bg-blue/98 backdrop-blur-2xl text-primary rounded-2xl font-bold text-base shadow-2xl border border-white/60 hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] transition-all duration-300 group"
                style={{ boxShadow: '0 12px 48px rgba(255,255,255,0.35), inset 0 1px 0 rgba(255,255,255,0.9)' }}
              >
                Explore Corporate Collections
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        {props.coporateBanner?.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
            {props.coporateBanner.map((_, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2 }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === corpIndex ? "w-12 bg-white" : "w-6 bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => setCorpIndex(idx)}
              />
            ))}
          </div>
        )}
      </motion.section>

      {/* Corporate Products Section */}
      <section className="py-20 relative">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary/20 via-blue-400/15 to-primary/10 flex items-center justify-center border border-primary/20"
                style={{ boxShadow: '0 4px 16px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.6)' }}
              >
                <Award className="w-5 h-5 text-primary" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Corporate Gift Collections
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Browse our curated collections designed for various corporate
              occasions and purposes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CoperateProductList.filter((_, idx) => idx < 9).map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => {
                  Navto(`/product-details/${item._id}`);
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-[32px] overflow-hidden cursor-pointer relative"
                style={{ boxShadow: '0 20px 60px -15px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)' }}
              >
                {/* Image Section - Takes up most of the card */}
                <div className="relative h-[380px] overflow-hidden">
                  <motion.img
                    loading="lazy"
                    src={item.imageLinks[0]}
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-start gap-2 mb-2">
                      <h3 className="text-white font-bold text-xl leading-tight flex-1 line-clamp-2">
                        {item.title}
                      </h3>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 400 }}
                        className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                      Premium corporate gift collection
                    </p>
                  </div>
                </div>

                {/* Bottom Action Section */}
                <div className="bg-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Award className="w-4 h-4" strokeWidth={2} />
                      <span className="text-sm font-medium">Premium</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Sparkles className="w-4 h-4" strokeWidth={2} />
                      <span className="text-sm font-medium">New</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-1.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors flex items-center gap-1"
                  >
                    View
                    <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Festival Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[42vh] text-white sm:hidden overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={festIndex}
            src={props.festivalBanner?.[festIndex] || ""}
            alt="Festival Banner"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/30 via-transparent to-amber-900/30" />

        <div className="relative z-10 flex flex-col justify-center h-full px-5 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
              <PartyPopper className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Festive Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mb-3 leading-tight"
          >
            Festival Gifting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm mb-3 text-white/90 leading-relaxed"
          >
            Celebrate special moments with our festive gift collections,
            perfect for spreading joy and creating memorable experiences.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={() => {
              Navto(`/categories/subcategory/24/${"Festival Gifts"}`, {});
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex justify-center items-center gap-2 px-6 py-2 bg-red/98 backdrop-blur-xl text-white rounded-2xl font-bold text-sm shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group w-fit"
            style={{ boxShadow: '0 8px 32px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.8)' }}
          >
            Explore Collections
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* Slide Indicators */}
        {props.festivalBanner?.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {props.festivalBanner.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === festIndex ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </motion.section>

      {/* Desktop Festival Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[55vh] text-white hidden sm:block overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={festIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url("${props.festivalBanner?.[festIndex] || ""}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Multi-layer overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/30 via-transparent to-amber-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Top decorative bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600/80 via-amber-500/80 via-50% to-rose-600/80 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
        </div>

        <div className="container relative px-6 py-20 md:py-28 mx-auto flex flex-col justify-center h-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-2xl border border-white/30 flex items-center justify-center"
                style={{ boxShadow: '0 8px 32px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.4)' }}
              >
                <PartyPopper className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest block">Festive Collection</span>
                <div className="flex items-center gap-2 mt-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span className="text-xs text-white/70 font-medium">Celebrate with Joy</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
            >
              Festival Gifting
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg mb-5 text-white/95 leading-relaxed max-w-2xl"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
            >
              Celebrate special moments with our festive gift collections,
              perfect for spreading joy and creating memorable experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => {
                  Navto(`/categories/subcategory/24/${"Festival Gifts"}`);
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-2 bg-red/98 backdrop-blur-2xl text-white rounded-2xl font-bold text-base shadow-2xl border border-white/60 hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] transition-all duration-300 group"
                style={{ boxShadow: '0 12px 48px rgba(255,255,255,0.35), inset 0 1px 0 rgba(255,255,255,0.9)' }}
              >
                Explore Festival Collections
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        {props.festivalBanner?.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
            {props.festivalBanner.map((_, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2 }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === festIndex ? "w-12 bg-white" : "w-6 bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => setFestIndex(idx)}
              />
            ))}
          </div>
        )}
      </motion.section>

      {/* Festival Products Section */}
      <section className="py-20 pb-24 relative">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500/20 via-rose-400/15 to-rose-500/10 flex items-center justify-center border border-rose-500/20"
                style={{ boxShadow: '0 4px 16px rgba(244,63,94,0.15), inset 0 1px 0 rgba(255,255,255,0.6)' }}
              >
                <PartyPopper className="w-5 h-5 text-rose-600" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Festival Gift Collections
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Discover our festive collections perfect for celebrations,
              traditions, and creating joyful moments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FestivalProductList.filter((_, idx) => idx < 9).map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => {
                  Navto(`/product-details/${item._id}`);
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-[32px] overflow-hidden cursor-pointer relative"
                style={{ boxShadow: '0 20px 60px -15px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)' }}
              >
                {/* Image Section - Takes up most of the card */}
                <div className="relative h-[380px] overflow-hidden">
                  <motion.img
                    loading="lazy"
                    src={item.imageLinks[0]}
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-start gap-2 mb-2">
                      <h3 className="text-white font-bold text-xl leading-tight flex-1 line-clamp-2">
                        {item.title}
                      </h3>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 400 }}
                        className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                      Festive celebration gift collection
                    </p>
                  </div>
                </div>

                {/* Bottom Action Section */}
                <div className="bg-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <PartyPopper className="w-4 h-4" strokeWidth={2} />
                      <span className="text-sm font-medium">Festive</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Sparkles className="w-4 h-4" strokeWidth={2} />
                      <span className="text-sm font-medium">New</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-1.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors flex items-center gap-1"
                  >
                    View
                    <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CorporatesGift;
