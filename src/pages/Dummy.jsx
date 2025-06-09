import React, { useState } from "react";

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
    <div className="px-[70px] py-8 bg-white">
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#1FC4E4] transform -translate-x-1/2 z-0 hidden md:block" />

        {categories.map((category, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className="relative z-10 mb-2">
              <div
                className={`flex items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#123E85] border-4 border-white shadow-md hidden md:block" />

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div
                    className={`bg-white p-4 rounded-lg shadow-md mx-auto max-w-xs md:max-w-full ${
                      isLeft ? "md:border-l-4" : "md:border-r-4"
                    }  ${
                      hoveredIndex === index
                        ? "border-[#123E85] transform scale-105"
                        : "border-[#123E85]"
                    } transition-all duration-300`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 rounded-full bg-[#123E85] ${
                          !isLeft ? "md:order-last" : ""
                        }`}
                      >
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-bold text-[#123E85]">
                        {category.label}
                      </h3>
                    </div>
                    <p className="text-sm flex items-start justify-start text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Empty space on the other side */}
                <div className="w-5/12 hidden md:block" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dummy;
