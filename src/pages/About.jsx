import React, { useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import person1 from "../asset/Image/pic1.jpeg";
import person2 from "../asset/Image/pic2.jpeg";
import {
  Users,
  Shield,
  HeartHandshake,
  Lightbulb,
  Handshake,
  History,
  Flower2,
  Sparkles,
  Target,
} from "lucide-react";
import { Building2, Award } from "lucide-react";
const values = [
  {
    title: "Appreciation",
    description:
      "We value the power of gratitude and believe that thoughtful gifting is a powerful way to recognize and strengthen relationships with clients, employees, and partners",
    icon: HeartHandshake,
  },
  {
    title: "Quality",
    description:
      "We are committed to delivering high-quality, customized gifts that reflect the care and attention our clients deserve, ensuring every detail is perfect.",
    icon: Shield,
  },
  {
    title: "Creativity",
    description:
      "We embrace creativity and innovation, offering unique and personalized gifting solutions that leave a lasting impression and reflect each brand’s identity.",
    icon: Lightbulb,
  },

  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and a strong ethical foundation in all our interactions with clients, partners, and employees.",
    icon: Handshake,
  },

  {
    title: "Customer-Centric",
    description:
      "We prioritize our clients' needs, providing exceptional customer service, tailored solutions, and ensuring that every experience with us is seamless and memorable.",
    icon: Users,
  },

  {
    title: "Timeliness",
    description:
      "We understand the importance of timely delivery and work diligently to ensure that every gift reaches its recipient on schedule, maintaining reliability in every aspect of our service.",
    icon: History,
  },
  {
    title: "Sustainability",
    description:
      "We strive to minimize our environmental impact by offering sustainable gifting options and packaging solutions, contributing to a greener future.",
    icon: Flower2,
  },
];

const work = [
  {
    title: "10,000+",
    description: "Happy Customers",
    icon: Users,
  },
  {
    title: "50+",
    description: "Partner Organizations",
    icon: Building2,
  },
  {
    title: "15+",
    description: "Years of Excellence",
    icon: Award,
  },
];

const team = [
  {
    name: "Damodar reddy",
    position: "Business Development Analyst",
    description:
      "Strategic thinker who curates our premium collection, ensuring each gift perfectly aligns with client branding while creating lasting impressions.",
    image: person2,
  },
  {
    name: "Dalavatam Ashok",
    position: "Managing Director",
    description:
      "A visionary leader with expertise in corporate gifting, dedicated to creating meaningful business connections through thoughtful and impactful gift solutions.",
    image: person1,
  },
];
const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [person1, person2];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageInterval);
  }, [heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Premium background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(10,174,95,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(51,68,94,0.08)_0%,transparent_50%),radial-gradient(circle_at_50%_80%,rgba(10,174,95,0.06)_0%,transparent_50%)]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,68,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(51,68,94,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/15 via-accent/8 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 via-primary/8 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />

        {/* Animated floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/30 rounded-full blur-sm"
        />

        {/* Additional floating particles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-accent/25 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 35, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-2/3 left-1/5 w-2 h-2 bg-primary/25 rounded-full blur-sm"
        />

        {/* Animated subtle lines */}
        <motion.div
          animate={{
            width: ["8rem", "10rem", "8rem"],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        />
        <motion.div
          animate={{
            width: ["6rem", "8rem", "6rem"],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-20 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45"
        />
        <motion.div
          animate={{
            width: ["7rem", "9rem", "7rem"],
            opacity: [0.2, 0.32, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-32 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent -rotate-45"
        />

        {/* Geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/5 w-32 h-32 border border-accent/10 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: [0, -360],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 left-1/6 w-40 h-40 border border-primary/10 rounded-full"
        />

        {/* Corner accents with animation */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/8 to-transparent"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/8 to-transparent"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/8 to-transparent"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary/8 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20 pt-8"
        >
          {/* Left - Heading */}
          <div>
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-primary mb-6"
            >
              Our Story, Vision, <span className="block">and Values</span>
            </motion.h1>
          </div>

          {/* Right - Image Card with Slideshow */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-3xl border border-primary-100/50 shadow-[0_8px_32px_rgba(51,68,94,0.1)] hover:shadow-[0_16px_48px_rgba(51,68,94,0.15)] transition-all duration-500">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex]}
                    alt="RS Global Solutions Team"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-accent/60 opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-48 h-48 bg-gradient-to-br from-white/20 to-accent/20 rounded-full blur-3xl"
                  />
                </div>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-primary-600 leading-relaxed px-2">
                Learn about our commitment to excellence, innovation and the
                strategies that guide our work every day.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* About Description & Card Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left - Description */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center"
          >
            <p className="text-primary-600 leading-relaxed text-lg">
              At RS Global Solutions, we specialize in crafting memorable and
              meaningful corporate gifts designed to strengthen and enhance
              business relationships. Whether you're looking to recognize a
              valued employee, impress a client, or celebrate a partnership, we
              offer a wide range of high-quality, customized gifting solutions
              to suit any occasion.
            </p>
          </motion.div>

          {/* Right - About Us Card */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-[#4BBC63]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-[#4BBC63] p-8 sm:p-10 rounded-2xl shadow-[0_16px_48px_rgba(75,188,99,0.25)] text-white">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-2xl font-bold tracking-wide">ABOUT US</h3>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="leading-relaxed opacity-95">
                We deliver end-to-end solutions, from gift selection to
                customization, packaging, and timely delivery. Our understanding
                of high-value gifts and attention to detail ensures each gift
                reflects your brand values, fosters loyalty, and creates lasting
                impressions with clients, employees, and partners.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {/* VISION Card - Centered Icon Design */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#33445E]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative bg-[#33445E] p-8 rounded-2xl shadow-[0_8px_32px_rgba(51,68,94,0.2)] hover:shadow-[0_16px_48px_rgba(51,68,94,0.3)] transition-all duration-500 h-full overflow-hidden">
              {/* Large background icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Target className="w-40 h-40" />
              </div>

              <div className="relative flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center mb-6 shadow-lg shadow-accent/25"
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">VISION</h3>
                <p className="text-white/90 leading-relaxed">
                  To become the leading provider of customized corporate gifts,
                  known for our creativity, attention to detail, and commitment
                  to delivering exceptional service.
                </p>
              </div>
            </div>
          </motion.div>

          {/* MISSION Card - Centered Icon Design */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#33445E]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative bg-[#33445E] p-8 rounded-2xl shadow-[0_8px_32px_rgba(51,68,94,0.2)] hover:shadow-[0_16px_48px_rgba(51,68,94,0.3)] transition-all duration-500 h-full overflow-hidden">
              {/* Large background icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Sparkles className="w-40 h-40" />
              </div>

              <div className="relative flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center mb-6 shadow-lg shadow-accent/25"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">MISSION</h3>
                <p className="text-white/90 leading-relaxed">
                  To create meaningful connections by offering thoughtfully
                  designed, personalized gifts that express appreciation and
                  strengthen relationships between businesses, clients,
                  employees, and partners.
                </p>
              </div>
            </div>
          </motion.div>

          {/* OUR TEAM Card - Centered Icon Design */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative sm:col-span-2 lg:col-span-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#33445E]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative bg-[#33445E] p-8 rounded-2xl shadow-[0_16px_48px_rgba(51,68,94,0.2)] hover:shadow-[0_20px_56px_rgba(51,68,94,0.25)] transition-all duration-500 h-full overflow-hidden">
              {/* Large background icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Users className="w-40 h-40" />
              </div>

              <div className="relative flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center mb-6 shadow-lg shadow-accent/25"
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">OUR TEAM</h3>
                <p className="text-white/90 leading-relaxed">
                  Our team of experts works tirelessly to bring your vision to
                  life, ensuring every project exceeds expectations through
                  dedicated service and exceptional craftsmanship.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
              Our Core Values
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className={`group relative ${
                  index === 6
                    ? "md:col-span-2 lg:col-span-3 max-w-2xl mx-auto"
                    : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-primary-100/50 shadow-[0_4px_24px_rgba(51,68,94,0.08)] hover:shadow-[0_16px_48px_rgba(51,68,94,0.15)] transition-all duration-500">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-accent/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <value.icon size={32} className="text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-primary-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="mb-20 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-primary-100/50 shadow-[0_8px_32px_rgba(51,68,94,0.08)] hover:shadow-[0_16px_48px_rgba(51,68,94,0.12)] transition-all duration-500 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-primary-100">
                {work.map((item, index) => (
                  <motion.div
                    key={item.title}
                    onHoverStart={() => setHoveredStat(index)}
                    onHoverEnd={() => setHoveredStat(null)}
                    className="flex flex-col items-center text-center px-4 sm:px-8 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      animate={{
                        scale: hoveredStat === index ? 1.1 : 1,
                        rotate: hoveredStat === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon
                        className={`w-10 h-10 mb-3 transition-colors duration-300 ${
                          hoveredStat === index ? "text-accent" : "text-primary"
                        }`}
                      />
                    </motion.div>
                    <h3
                      className={`text-4xl sm:text-5xl font-bold mb-2 transition-all duration-300 ${
                        hoveredStat === index
                          ? "bg-gradient-to-r from-accent to-accent-600 bg-clip-text text-[#3DB764]"
                          : "text-primary"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary-600">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Member Highlight */}
        {team.length > 0 && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="flex justify-center space-x-2">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -6 }}
                  className="group relative max-w-3xl w-full"
                >
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-primary-100/50 shadow-[0_4px_24px_rgba(51,68,94,0.06)] hover:shadow-[0_12px_40px_rgba(51,68,94,0.1)] transition-all duration-500">
                    <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {member.name}
                        </h3>
                        <p className="text-accent font-semibold text-sm mb-3 tracking-wide">
                          {member.position}
                        </p>
                        <p className="text-primary-600 leading-relaxed text-sm">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;
