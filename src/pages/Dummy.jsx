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
  { icon: UserPlus, label: "New Joiner or Onboarding Kits" },
  { icon: Gift, label: "Annual Day Gifts" },
  { icon: Package, label: "Festive Gifts and Hampers" },
  { icon: Users, label: "Departmental Appreciation Gifts" },
  { icon: BadgeCheck, label: "Retirement Gifts or Gratitude Gifts" },
  { icon: Cake, label: "Birthdays or Work Anniversary Gifts" },
  { icon: Trophy, label: "Rewards and Recognition" },
  { icon: Coins, label: "Dealer Incentive Programs" },
  { icon: Rocket, label: "New Product Launches" },
  { icon: Handshake, label: "Distributor Appreciation Awards" },
  { icon: Megaphone, label: "Brand Promotion Gifts" },
  { icon: Star, label: "Client Visit Gifts" },
  { icon: Ticket, label: "Gift Vouchers" },
  { icon: Leaf, label: "Corporate Green Marketing Campaigns" },
  { icon: Globe, label: "CSR Campaigns" },
];

const Dummy = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="px-[70px] py-8 bg-white">
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-300 transform -translate-x-1/2 z-0 hidden md:block" />

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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md hidden md:block" />

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
                        ? "border-blue-500 transform scale-105"
                        : "border-blue-300"
                    } transition-all duration-300`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 rounded-full bg-blue-100 ${
                          !isLeft ? "md:order-last" : ""
                        }`}
                      >
                        <category.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-blue-800">
                        {category.label}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Perfect for expressing appreciation and strengthening
                      relationships.
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
