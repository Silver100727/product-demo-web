import React from "react";

import { 
    UserPlus, Gift, Package, Users, BadgeCheck, Cake, Trophy, Coins, Rocket, 
    Handshake, Megaphone, Star, Ticket, Leaf, Globe
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
  return (
    <div className="max-w-7xl mx-auto bg-white px-6 py-10">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-10 text-center">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center px-5 space-y-3">
          <category.icon className="w-10 h-13 text-gray-500" />
          <p className="text-sm text-gray-700">{category.label}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Dummy;
