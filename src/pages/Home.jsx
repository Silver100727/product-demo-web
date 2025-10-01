import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { brands } from "../utils";
import Dummy from "./dummy";
import Trending from "../components/Trending.component";

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
      "At RS Global Solutions, we pride ourselves on offering a wide variety of high-quality options from branded merchandise to luxury items and personalized keepsakes. Each gift is carefully curated to create a lasting impression.",
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

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let startInterval;
    if (props.MainBannerImageList?.length > 1) {
      startInterval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % props.MainBannerImageList?.length
        );
      }, 3000);
    }

    return () => clearInterval(startInterval);
  }, [currentIndex, props.MainBannerImageList?.length]);

  return (
    <>
      <div className="min-h-screen flex gap-7 flex-col pt-16 bg-[#FFFFFF]">
        {/* Mobile Main Banner Slider */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[38vh] text-white sm:hidden"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.div
              className="w-full h-full"
              initial={{ x: 0 }}
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ duration: 0.5 }}
              style={{ whiteSpace: "nowrap" }}
            >
              {props.MainBannerImageList?.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover inline-block"
                />
              ))}
            </motion.div>
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-6 text-center">
            <h1 className="text-lg font-bold mb-2">
              Celebrate Every Moment with RS Global Solutions
            </h1>
            <p className="mb-5 text-xs">
              Discover our exclusive collection of premium gifts designed to
              express appreciation, celebrate milestones, and create lasting
              memories.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex flex-row items-center justify-center px-4 py-2 bg-gradient-to-r from-[#123E85] to-[#1FC4E4] text-white rounded-md font-semibold text-sm hover:scale-105 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Contact Us
            </Link>
          </div>
        </motion.section>

        {/* Desktop/Tablet Main Banner Slider */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] text-white hidden sm:block"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.div
              className="w-full h-full"
              initial={{ x: 0 }}
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ duration: 0.5 }}
              style={{ whiteSpace: "nowrap" }}
            >
              {props.MainBannerImageList?.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover inline-block"
                />
              ))}
            </motion.div>
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative max-w-5xl mx-auto px-2 sm:px-4 h-full flex items-center justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white max-w-full text-center flex flex-col items-center"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Celebrate Every Moment with RS Global Solutions
              </h1>
              <p className="mb-8 max-w-2xl text-base sm:text-lg">
                Discover our exclusive collection of premium gifts designed to
                express appreciation, celebrate milestones, and create lasting
                memories.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex flex-row items-center justify-center px-4 sm:px-6 py-2 bg-gradient-to-r from-[#123E85] to-[#1FC4E4] text-white rounded-md font-semibold hover:bg-gradient-to-r transition-transform transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="container px-2 sm:px-4 mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4">
              Our Trending Product
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 text-center max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12">
              At RS Global Solutions, we offer premium products from stylish
              apparel to cutting edge electronics. Whether celebrating
              milestones or showing appreciation, find the perfect gift today!
            </p>
            <Trending />
          </div>
        </section>

        <section className="mb-12 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-2">Our Brands</h2>
            <p className="text-neutral-600 text-center max-w-4xl mx-auto mb-4">
              We partner with premium brands to bring you exceptional quality
              and unique gifting options.
            </p>

            <div className="overflow-hidden">
              <div className="flex animate-marquee">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-1/10  max-sm:w-1/4 p-4"
                  >
                    <img
                      loading="lazy"
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-24 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mb-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">
            We Are Specialist In
          </h2>
          <p className="text-neutral-600 text-center max-w-4xl mx-auto mb-4"></p>
          <Dummy />
        </div>
      </section>

      <footer className="text-white relative bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:34px_44px]"></div>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-10"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose RS Global Solutions?
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Choose RS Global Solutions for a gifting experience that reflects
              the value you place on your business relationships. Let us help
              you leave a lasting impression, one gift at a time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {Banner.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-4 rounded-lg shadow-md border-b-2 z-10"
              >
                <h3 className="text-lg text-black font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
