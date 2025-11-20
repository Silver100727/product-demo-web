import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ShoppingBag, Sparkles, Award, TrendingUp, Shield } from "lucide-react";
import { brands } from "../utils";
import Dummy from "./dummy";
import Trending from "../components/Trending.component";

const Banner = [
  {
    title: "Tailored Gifting Solutions",
    description:
      "We understand that every business is unique. That's why we offer fully customized gifts that reflect your brand and the relationships you want to nurture, whether it's with clients, employees, or partners.",
    icon: () => (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 15l-2 5l9-9l-9-9l2 5l-5 4l5 4z" />
      </svg>
    ),
  },
  {
    title: "End-to-End Service",
    description:
      "From the initial gift selection to packaging and timely delivery, we handle it all. Our seamless process ensures that your gifting experience is hassle-free and your gifts arrive on time and beautifully presented.",
    icon: () => (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "High-Quality, Thoughtful Gifts",
    description:
      "At RS Global Solutions, we pride ourselves on offering a wide variety of high-quality options from branded merchandise to luxury items and personalized keepsakes. Each gift is carefully curated to create a lasting impression.",
    icon: () => (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Reliability & Timeliness",
    description:
      "We value your time and the importance of timely delivery. Our team ensures that each gift is delivered on schedule, making sure you never miss an important occasion.",
    icon: () => (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Exceptional Customer Service",
    description:
      "We put your needs first. Our customer-centric approach means you’ll receive attentive support and a personalized experience every step of the way.",
    icon: () => (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Building Strong Relationships",
    description:
      "We don't just provide gifts; we help you strengthen your business relationships. Our gifts are designed to reinforce your brand, build loyalty, and foster positive, lasting connections with those who matter most.",
    icon: () => (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const Home = (props) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let startInterval;
    if (props.MainBannerImageList?.length > 1) {
      startInterval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % props.MainBannerImageList?.length
        );
      }, 3000);
    }

    return () => clearInterval(startInterval);
  }, [currentIndex, props.MainBannerImageList?.length]);

  return (
    <>
      <div className="min-h-screen flex gap-0 flex-col pt-16  relative overflow-hidden">
        {/* Mobile Main Banner Slider */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[45vh] text-white sm:hidden overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                {props.MainBannerImageList?.[currentIndex] && (
                  <img
                    src={props.MainBannerImageList[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Multi-layer overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />

          {/* Top decorative bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent/80 via-primary/80 via-50% to-accent/80 z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 py-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-3"
            >
              <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Premium Gifting</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold mb-3 leading-tight"
            >
              Celebrate Every Moment with RS Global Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6 text-sm text-white/90 leading-relaxed max-w-md"
            >
              Discover our exclusive collection of premium gifts designed to
              express appreciation, celebrate milestones, and create lasting
              memories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/98 backdrop-blur-xl text-primary rounded-2xl font-bold text-sm shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group"
                style={{ boxShadow: '0 8px 32px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.8)' }}
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={2.5} />
                Contact Us
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          {props.MainBannerImageList?.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {props.MainBannerImageList.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.section>

        {/* Desktop/Tablet Main Banner Slider */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[60vh] md:h-[75vh] text-white hidden sm:block overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                {props.MainBannerImageList?.[currentIndex] && (
                  <img
                    src={props.MainBannerImageList[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Multi-layer overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/70" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          {/* Top decorative bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent/80 via-primary/80 via-50% to-accent/80 z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white text-center flex flex-col items-center max-w-4xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
              >
                Celebrate Every Moment with RS Global Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8 text-lg md:text-xl leading-relaxed text-white/95"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
              >
                Discover our exclusive collection of premium gifts designed to
                express appreciation, celebrate milestones, and create lasting
                memories.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-[#38B564] backdrop-blur-2xl text-white rounded-2xl font-bold text-base shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] transition-all duration-300 group hover:scale-105"

                >
                  <ShoppingBag className="w-5 h-5" strokeWidth={2.5} />
                  Contact Us Today
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          {props.MainBannerImageList?.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
              {props.MainBannerImageList.map((_, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex ? "w-12 bg-white" : "w-6 bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />

          <div className="container px-2 sm:px-4 mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-accent/20">
                <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary/80 uppercase tracking-widest">Premium Collection</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4 bg-clip-text text-slate-800"
              style={{ backgroundSize: '200% auto' }}
            >
              Our Trending Products
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-slate-800 text-center max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed"
            >
              At RS Global Solutions, we offer premium products from stylish
              apparel to cutting edge electronics. Whether celebrating
              milestones or showing appreciation, find the perfect gift today!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Trending />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-5 py-12 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden "
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/3 to-transparent rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-primary/20">
                <Award className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Trusted Partners</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-center mb-2 bg-clip-text text-slate-800"
            >
              Our Brands
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-800 text-center max-w-4xl mx-auto mb-8"
            >
              We partner with premium brands to bring you exceptional quality
              and unique gifting options.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 p-8 shadow-xl"
            >
              <div className="flex animate-marquee">
                {brands.map((brand, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex-shrink-0 w-1/10 max-sm:w-1/4 p-4"
                  >
                    <div className="bg-white rounded-xl p-4 border border-slate-100 h-24 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <img
                        loading="lazy"
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-b from-white via-cyan-50/20 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-accent/20">
              <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xs font-bold text-accent/80 uppercase tracking-widest">Our Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-slate-800"
          >
            We Are Specialist In
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Dummy />
          </motion.div>
        </div>
      </motion.section>

      <footer className="relative overflow-hidden">
        {/* Grid pattern background */}


        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 pt-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Why Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
            >
              Why Choose RS Global Solutions?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-800 max-w-2xl mx-auto leading-relaxed"
            >
              Choose RS Global Solutions for a gifting experience that reflects
              the value you place on your business relationships. Let us help
              you leave a lasting impression, one gift at a time.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-16">
            {Banner.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden relative"
                style={{ boxShadow: '0 20px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)' }}
              >
          

                <div className="p-6">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 500, damping: 25 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/80 to-primary/90 flex items-center justify-center mb-4 border border-accent/20 group-hover:border-accent/40 transition-colors"
                  >
                    <div className="text-[#111A2E]">
                      {feature.icon()}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#3EB764] mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
