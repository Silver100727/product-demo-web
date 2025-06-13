import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
        "https://rsgratitudegifts.com/api/routes.php?action=trendingproducts"
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
      <div className="flex overflow-x-auto gap-3 px-2 pb-2">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="min-w-[70vw] max-w-[90vw] flex-shrink-0"
            onClick={() => Navigate(`/product-details/${brand._id}`)}
          >
            <div className="bg-white rounded-xl p-4 h-40 flex items-center justify-center border border-neutral-200 hover:border-[#C27AFF] transition-all duration-300 hover:shadow">
              <img
                loading="lazy"
                src={brand.imageLinks[0] || "/placeholder.svg"}
                alt={brand.title}
                className="h-39 w-39 object-contain opacity-90"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ---- DESKTOP/TABLET RENDER ----
  return (
    <div className="relative w-full max-w-6xl mx-auto px-1 sm:px-2 md:px-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleBrands)}%)`,
          }}
        >
          {brands.map((brand) => (
            <div
              onClick={() => {
                Navigate(`/product-details/${brand._id}`);
              }}
              key={brand._id}
              className="flex-shrink-0 px-1 sm:px-2 md:px-4"
              style={{ width: `${100 / visibleBrands}%` }}
            >
              <div className="bg-white rounded-lg p-2 sm:p-4 md:p-6 h-24 sm:h-32 flex items-center justify-center border border-neutral-200 hover:border-[#C27AFF] transition-all duration-300 hover:shadow-sm">
                <img
                  loading="lazy"
                  src={brand.imageLinks[0] || "/placeholder.svg"}
                  alt={brand.title}
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-fit md:w-fit object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md border border-neutral-200 p-1 sm:p-2 z-10 disabled:opacity-50"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        className="absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-md border border-neutral-200 p-1 sm:p-2 z-10 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentIndex >= totalSlides}
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
}
