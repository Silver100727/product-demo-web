import { ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FutureImg = [
  {
    key: 1,
    link: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  },
  {
    key: 2,
    link: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
  {
    key: 3,
    link: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  },
  {
    key: 4,
    link: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  },
  {
    key: 5,
    link: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  },
];

const CorporatesGift = (props) => {
  const [selectedFuturePrd, setselectedFuturePrd] = useState(FutureImg[0]);
  const indexRef = useRef(0);

  const Navto = useNavigate();

  const CoperateProductList = props.productsList.filter(
    (p) => p.category == "Corporate Gift"
  );

  const FestivalProductList = props.productsList.filter(
    (p) => p.category == "Festival"
  );
  useEffect(() => {
    let timer = setInterval(() => {
      setselectedFuturePrd(FutureImg[indexRef.current]);
      if (indexRef.current === FutureImg.length - 1) {
        indexRef.current = 0;
      } else {
        indexRef.current = indexRef.current + 1;
      }
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <main className="flex-1">
      <section className="relative bg-[#C27AFF] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            loading="lazy"
            key={selectedFuturePrd.key} // Ensure the key changes with the image
            src={selectedFuturePrd.link} // Dynamic background image
            alt="Corporate gifting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
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
                className="inline-flex flex-row items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105"
              >
                Explore Corporate Collections
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

      <section className="relative bg-[#C27AFF] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            loading="lazy"
            key={selectedFuturePrd.key} // Ensure the key changes with the image
            src={selectedFuturePrd.link} // Dynamic background image
            alt="Corporate gifting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
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
                className="inline-flex flex-row items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105"
              >
                Explore Festival Collections
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Festival Gift</h2>
            <p className="text-neutral-600">
              Browse our curated collections designed for various corporate
              occasions and purposes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
