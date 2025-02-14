import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const features = [
  {
    title: "Luxury & Elegance",
    description:
      "Our gifts are crafted with premium materials and sophisticated design, perfect for any occasion.",
    icon: () => (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 15l-2 5l9-9l-9-9l2 5l-5 4l5 4z" />
      </svg>
    ),
  },
  {
    title: "Thoughtful Selection",
    description:
      "Each item in our collection is handpicked to convey gratitude and appreciation.",
    icon: () => (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Exclusive Packaging",
    description:
      "Our premium gift packaging ensures a luxurious unboxing experience for your loved ones.",
    icon: () => (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <>
      <div className="min-h-screen pt-16 flex flex-col gap-6">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[80vh] bg-gradient-to-r from-blue-600 to-purple-600"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920"
              alt="Hero background"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white max-w-full text-center"
            >
              <h1 className="text-5xl font-bold">
                Celebrate Every Moment with RS Gratitude Gifts
              </h1>
              <p className="text-xl max-w-3xl mb-8">
                Discover our exclusive collection of premium gifts designed to
                express appreciation, celebrate milestones, and create lasting
                memories.
              </p>
              <Link
                to="/products"
                className="inline-flex flex-row items-center justify-center px-6 py-3 bg-[#4D95F8] text-white rounded-lg font-semibold hover:bg-[#FD2DF5] hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mr-1.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Explore Our Collection
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured Product
          </h2>
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-7xl mx-auto">
              At RS Gratitude Gifts, we offer a curated selection of top-quality
              products, from stylish apparel to cutting-edge electronics and
              more. Whether you're celebrating a milestone, showing
              appreciation, or planning a team event, we have the perfect
              solution to make every moment special. Explore our featured
              product and find the ideal gift today!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* {featuredCategories.map((category) => (
            <Link
              key={category.name}
              to={`/categories/${category.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-3xl font-bold text-white tracking-wider">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))} */}
          </div>
        </div>
      </div>

      <footer className="text-white relative bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:34px_44px]"></div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-10"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose RS Gratitude Gifts?
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              We curate exceptional gifts that convey gratitude, elegance, and
              thoughtfulness, ensuring every occasion is truly special.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8  px-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md border-b-2 z-10"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl text-black font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
