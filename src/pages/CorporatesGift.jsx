import { ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";
import CorporateBanner from "../asset/Image/Corporate.png";
import FestivalBanner from "../asset/Image/Festival.png";

const CorporatesGift = (props) => {
  const Navto = useNavigate();

  const CoperateProductList = props.productsList.filter(
    (p) => p.category == "Corporate Gift"
  );

  const FestivalProductList = props.productsList.filter(
    (p) => p.category == "Festival"
  );

  return (
    <main className="flex-1 mt-[60px]">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[47vh] text-white"
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${CorporateBanner})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container relative px-4 py-20 md:py-32 mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Corporate Gifting
            </h1>
            <p className="text-md mb-8">
              Strengthen business relationships and show appreciation with our
              premium corporate gift collections, customized to reflect your
              brand's values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/categories/Corporate%20Gift`}
                className="inline-flex flex-row items-center justify-center px-6 py-2 bg-gradient-to-r from-[#123E85] to-[#1FC4E4] text-white rounded-md font-semibold hover:bg-gradient-to-r hover:from-[#1FC4E4] hover:to-[#123E85] transition-transform transform hover:scale-105"
              >
                Explore Corporate Collections
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Corporate Gift Collections
            </h2>
            <p className="text-neutral-600">
              Browse our curated collections designed for various corporate
              occasions and purposes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
            {CoperateProductList.filter((_, idx) => idx < 4).map((item) => (
              <div
                onClick={() => {
                  Navto(`/products/${item._id}`);
                }}
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden w-full"
              >
                <div className="relative">
                  <img
                    loading="lazy"
                    src={item.imageLinks[0]}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    New Arrival
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-1 hover:text-red-600 cursor-pointer">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[47vh] text-white"
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${FestivalBanner})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container relative px-4 py-20 md:py-32 mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Festival Gifting
            </h1>
            <p className="text-md mb-8">
              Strengthen business relationships and show appreciation with our
              premium corporate gift collections, customized to reflect your
              brand's values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/categories/Festival`}
                className="inline-flex flex-row items-center justify-center px-6 py-2 bg-gradient-to-r from-[#800000] to-[#B22222] text-white rounded-md font-semibold hover:bg-gradient-to-r hover:from-[#B22222] hover:to-[#800000] transition-transform transform hover:scale-105"
              >
                Explore Festival Collections
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Festival Gift</h2>
            <p className="text-neutral-600">
              Browse our curated collections designed for various corporate
              occasions and purposes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
            {FestivalProductList.filter((_, idx) => idx < 4).map((item) => (
              <div
                onClick={() => {
                  Navto(`/products/${item._id}`);
                }}
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden w-full"
              >
                <div className="relative">
                  <img
                    loading="lazy"
                    src={item.imageLinks[0]}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    New Arrival
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1 hover:text-red-600 cursor-pointer">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CorporatesGift;
