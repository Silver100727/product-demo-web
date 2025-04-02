"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Trending({ brands }) {
  const Navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBrands, setVisibleBrands] = useState(4);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleBrands(1);
      } else if (window.innerWidth < 1024) {
        setVisibleBrands(2);
      } else if (window.innerWidth < 1280) {
        setVisibleBrands(3);
      } else {
        setVisibleBrands(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(0, brands.length - visibleBrands);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalSlides ? prev + 1 : totalSlides));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleBrands)}%)`,
          }}
        >
          {brands.map((brand) => (
            <div
              onClick={() => {
                Navigate(`/products/${brand._id}`);
              }}
              key={brand._id}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / visibleBrands}%` }}
            >
              <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center border border-neutral-200 hover:border-[#C27AFF] transition-all duration-300 hover:shadow-sm">
                <img
                  loading="lazy"
                  src={brand.imageLinks[0] || "/placeholder.svg"}
                  alt={brand.title}
                  className="h-fit w-fit object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute -left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md border border-neutral-200 p-2 z-10 disabled:opacity-50"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute -right-5 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-md border border-neutral-200 p-2 z-10 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentIndex >= totalSlides}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
