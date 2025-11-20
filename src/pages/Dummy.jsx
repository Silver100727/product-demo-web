import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  UserPlus,
  Gift,
  Package,
  Users,
  BadgeCheck,
  Cake,
  Trophy,
  Coins,
  Rocket,
  Handshake,
  Megaphone,
  Star,
  Ticket,
  Leaf,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: UserPlus,
    label: "New Joiner or Onboarding Kits",
    description:
      "Welcome new employees with curated onboarding kits to make their first day memorable.",
  },
  {
    icon: Gift,
    label: "Annual Day Gifts",
    description:
      "Celebrate annual milestones with thoughtful gifts for your team.",
  },
  {
    icon: Package,
    label: "Festive Gifts and Hampers",
    description:
      "Spread festive cheer with special hampers and gifts for every occasion.",
  },
  {
    icon: Users,
    label: "Departmental Appreciation Gifts",
    description: "Show appreciation to departments with personalized gifts.",
  },
  {
    icon: BadgeCheck,
    label: "Retirement Gifts or Gratitude Gifts",
    description: "Honor retirees and express gratitude with meaningful gifts.",
  },
  {
    icon: Cake,
    label: "Birthdays or Work Anniversary Gifts",
    description:
      "Celebrate birthdays and work anniversaries with special tokens.",
  },
  {
    icon: Trophy,
    label: "Rewards and Recognition",
    description: "Motivate employees through rewards and recognition programs.",
  },
  {
    icon: Coins,
    label: "Dealer Incentive Programs",
    description: "Boost dealer engagement with attractive incentive gifts.",
  },
  {
    icon: Rocket,
    label: "New Product Launches",
    description: "Mark new product launches with memorable gifts.",
  },
  {
    icon: Handshake,
    label: "Distributor Appreciation Awards",
    description: "Recognize distributors for their valuable contributions.",
  },
  {
    icon: Megaphone,
    label: "Brand Promotion Gifts",
    description: "Promote your brand with creative and useful gifts.",
  },
  {
    icon: Star,
    label: "Client Visit Gifts",
    description: "Impress clients during visits with thoughtful gifts.",
  },
  {
    icon: Ticket,
    label: "Gift Vouchers",
    description: "Offer flexible gifting options with vouchers.",
  },
  {
    icon: Leaf,
    label: "Corporate Green Marketing Campaigns",
    description: "Support green initiatives with eco-friendly gifts.",
  },
  {
    icon: Globe,
    label: "CSR Campaigns",
    description: "Enhance CSR campaigns with impactful gifting solutions.",
  },
];

const Dummy = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="px-3 sm:px-6 md:px-8 lg:px-32 py-8 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue/5 to-blue rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-blue/5 to-blue rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        {/* Main timeline line with gradient */}
        {/* <div className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 z-0 hidden md:block overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue via-blue to-blue opacity-30" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-blue"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div> */}

        {categories.map((category, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="relative z-10 mb-4 md:mb-3"
            >
              <div
                className={`flex items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05 + 0.15,
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-accent to-primary opacity-15 blur-sm"
                      animate={{
                        scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <div
                      className="relative w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-[3px] border-white shadow-md"
                      style={{
                        boxShadow:
                          "0 2px 12px rgba(31,196,228,0.35), 0 0 0 3px rgba(255,255,255,1)",
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white"
                        animate={{
                          scale: hoveredIndex === index ? [0, 1.4] : 0,
                          opacity: hoveredIndex === index ? [0.5, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </motion.div>

                <div
                  className={`w-full md:w-5/12 ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    className={`bg-white/95 backdrop-blur-xl p-4 rounded-xl mx-auto max-w-xs md:max-w-full relative overflow-hidden group cursor-pointer ${
                      isLeft ? "md:border-l-[3px]" : "md:border-r-[3px]"
                    } ${
                      hoveredIndex === index
                        ? "border-accent shadow-xl"
                        : "border-primary/30 shadow-md"
                    } transition-all duration-300`}
                    style={{
                      boxShadow:
                        hoveredIndex === index
                          ? "0 12px 40px rgba(31,196,228,0.2), 0 0 0 1px rgba(31,196,228,0.08)"
                          : "0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`absolute top-0 ${
                        isLeft ? "left-0" : "right-0"
                      } ${
                        isLeft ? "right-auto" : "left-auto"
                      } h-0.5 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-250 ${
                        isLeft ? "w-1/3" : "w-1/3"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                    </div>
                    <div
                      className={`absolute top-3 ${
                        isLeft ? "left-3" : "right-3"
                      } opacity-0 group-hover:opacity-100 transition-all duration-250`}
                    >
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center border border-accent/20">
                        <Sparkles
                          className="w-3 h-3 text-accent"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                    <div
                      className={`flex items-start gap-3 mb-2 ${
                        !isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-primary group-hover:text-accent transition-colors duration-250 mb-0.5 leading-tight">
                          {category.label}
                        </h3>
                        <div className="h-0.5 bg-slate-100 rounded-full overflow-hidden mt-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "65%" }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.05 + 0.3,
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    <p
                      className={`text-xs leading-snug text-gray-600 ${
                        !isLeft ? "md:text-left" : "md:text-right"
                      } text-left mt-2`}
                    >
                      {category.description}
                    </p>
                    <div
                      className={`absolute ${
                        isLeft ? "-right-12" : "-left-12"
                      } -bottom-12 w-32 h-32 bg-gradient-to-tl from-accent/8 via-primary/4 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                    />
                    <div
                      className={`absolute ${
                        isLeft ? "bottom-0 right-0" : "bottom-0 left-0"
                      } w-12 h-12 ${
                        isLeft ? "border-r border-b" : "border-l border-b"
                      } border-accent/15 ${
                        isLeft ? "rounded-br-xl" : "rounded-bl-xl"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-250`}
                    />
                  </motion.div>
                </div>
                <div className="w-5/12 hidden md:block" />
              </div>
            </motion.div>
          );
        })}

        {/* Timeline end marker */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 22,
          }}
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
        >
          <div
            className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-blue flex items-center justify-center shadow-lg border-[3px] border-white"
            style={{ boxShadow: "0 4px 20px rgba(31,196,228,0.35)" }}
          >
            <Sparkles className="w-4 h-4 text-blue" strokeWidth={2.5} />
          </div>
          <div className="mt-1.5 px-3 py-0.5 bg-blue rounded-full shadow-md border border-accent/20">
            <span className="text-[10px] font-bold text-accent uppercase tracking-wide">
              Our Expertise
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dummy;
