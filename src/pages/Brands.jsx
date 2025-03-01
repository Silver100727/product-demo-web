import Footer from "../components/Footer";
import { brands } from "../utils";

const Brands = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 pt-24 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-wide">
          Our Premium Brands
        </h1>
        <div className="grid auto-rows-[150px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className={`group relative flex justify-center items-center p-4 bg-transparent rounded-3xl transition-all duration-300 hover: hover:scale-105 
              ${index % 3 === 0 ? "row-span-2" : "row-span-1"}
              ${index % 4 === 0 ? "col-span-2" : "col-span-1"}`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain bg-transparent transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
