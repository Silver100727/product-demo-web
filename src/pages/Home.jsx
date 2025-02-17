import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const brands = [
  {
    id: 1,
    name: "nike-logo",
    logo: "https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2",
  },
  {
    id: 2,
    name: "Brand Two",
    logo: "https://www.zarla.com/images/zarla-chanel-combination-logo-2400x2400-20240701.png?crop=1:1,smart&width=150&dpr=2",
  },
  {
    id: 3,
    name: "Brand Three",
    logo: "https://www.zarla.com/images/wwf-logo-2400x2400-20220518-2.png?crop=1:1,smart&width=150&dpr=2",
  },
  {
    id: 4,
    name: "Brand Four",
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30143448/196.png",
  },
  {
    id: 5,
    name: "Brand Five",
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30143416/810.png",
  },
  // Add more brands as needed
];

// Duplicate the brands array for seamless scrolling
const duplicatedBrands = [
  ...brands,
  ...brands,
  ...brands,
  ...brands,
  ...brands,
];
const Banner = [
  {
    title: "Tailored Gifting Solutions",
    description:
      "We understand that every business is unique. That's why we offer fully customized gifts that reflect your brand and the relationships you want to nurture, whether it's with clients, employees, or partners.",
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
    title: "End-to-End Service",
    description:
      "From the initial gift selection to packaging and timely delivery, we handle it all. Our seamless process ensures that your gifting experience is hassle-free and your gifts arrive on time and beautifully presented.",
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
    title: "High-Quality, Thoughtful Gifts",
    description:
      "At RS Gratitude Gifts, we pride ourselves on offering a wide variety of high-quality options—from branded merchandise to luxury items and personalized keepsakes. Each gift is carefully curated to create a lasting impression.",
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
  {
    title: "Reliability & Timeliness",
    description:
      "We value your time and the importance of timely delivery. Our team ensures that each gift is delivered on schedule, making sure you never miss an important occasion.",
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
  {
    title: "Exceptional Customer Service",
    description:
      "We put your needs first. Our customer-centric approach means you’ll receive attentive support and a personalized experience every step of the way.",
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
  {
    title: "Building Strong Relationships",
    description:
      "We don't just provide gifts; we help you strengthen your business relationships. Our gifts are designed to reinforce your brand, build loyalty, and foster positive, lasting connections with those who matter most.",
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

const Home = () => {
  const [selectedFuturePrd, setselectedFuturePrd] = useState(FutureImg[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    let index = 0;

    let timer = setInterval(() => {
      setselectedFuturePrd(FutureImg[index]);
      if (index === FutureImg.length - 1) {
        index = 0;
      } else {
        index++;
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col gap-6 pt-16 ">
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
              className="text-white max-w-full text-center flex flex-col items-center"
            >
              <h1 className="text-5xl font-bold">
                Celebrate Every Moment with RS Gratitude Gifts
              </h1>
              <p className="mb-8 max-w-2xl">
                Discover our exclusive collection of premium gifts designed to
                express appreciation, celebrate milestones, and create lasting
                memories.
              </p>
              <Link
                to="/products"
                className="inline-flex flex-row items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-colors"
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
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured Product
          </h2>
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto">
              At RS Gratitude Gifts, we offer a curated selection of top-quality
              products, from stylish apparel to cutting-edge electronics and
              more. Whether you're celebrating a milestone, showing
              appreciation, or planning a team event, we have the perfect
              solution to make every moment special. Explore our featured
              product and find the ideal gift today!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-3/2 bg-white rounded-lg shadow-md"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full w-full rounded-lg"
                  src={selectedFuturePrd.link}
                  key={selectedFuturePrd.key}
                  alt=""
                />
              </AnimatePresence>
            </motion.div>

            <div className="grid grid-cols-5 gap-4 p-5">
              {FutureImg.map((product) => (
                <div
                  key={product.key}
                  onClick={() => {
                    setselectedFuturePrd(product);
                  }}
                >
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={product.link}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brands Carousel Section */}
      <section className="py-16 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Brands</h2>
          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              {duplicatedBrands.map((brand, index) => (
                <div key={index} className="flex-shrink-0 w-1/10 p-4">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="text-white relative bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:34px_44px]"></div>
        {/* Card Section */}
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
              Choose RS Gratitude Gifts for a gifting experience that reflects
              the value you place on your business relationships. Let us help
              you leave a lasting impression, one gift at a time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8  px-4">
            {Banner.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: index * 0.2 }}
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
      <Footer />
    </>
  );
};

export default Home;
