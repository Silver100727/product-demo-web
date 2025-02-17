import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  HeartHandshake,
  Lightbulb,
  Handshake,
  History,
  Flower2,
} from "lucide-react";
import { Building2, Award } from "lucide-react";
import Footer from "../components/Footer";
const values = [
  {
    title: "Appreciation",
    description:
      "We value the power of gratitude and believe that thoughtful gifting is a powerful way to recognize and strengthen relationships with clients, employees, and partners",
    icon: HeartHandshake,
  },
  {
    title: "Quality",
    description:
      "We are committed to delivering high-quality, customized gifts that reflect the care and attention our clients deserve, ensuring every detail is perfect.",
    icon: Shield,
  },
  {
    title: "Creativity",
    description:
      "We embrace creativity and innovation, offering unique and personalized gifting solutions that leave a lasting impression and reflect each brand’s identity.",
    icon: Lightbulb,
  },

  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and a strong ethical foundation in all our interactions with clients, partners, and employees.",
    icon: Handshake,
  },

  {
    title: "Customer-Centric",
    description:
      "We prioritize our clients' needs, providing exceptional customer service, tailored solutions, and ensuring that every experience with us is seamless and memorable.",
    icon: Users,
  },

  {
    title: "Timeliness",
    description:
      "We understand the importance of timely delivery and work diligently to ensure that every gift reaches its recipient on schedule, maintaining reliability in every aspect of our service.",
    icon: History,
  },
  {
    title: "Sustainability",
    description:
      "We strive to minimize our environmental impact by offering sustainable gifting options and packaging solutions, contributing to a greener future.",
    icon: Flower2,
  },
];

const work = [
  {
    title: "10,000+",
    description: "Happy Customers",
    icon: Users,
  },
  {
    title: "50+",
    description: "Partner Organizations",
    icon: Building2,
  },
  {
    title: "15+",
    description: "Years of Excellence",
    icon: Award,
  },
];

const team = [
  {
    name: "Sarah Johnson",
    position: "Founder & Creative Director",
    description:
      "With a keen eye for detail and a passion for meaningful gifting, Sarah leads our creative vision.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "Michael Chen",
    position: "Head of Gifting Strategy",
    description:
      "Michael curates our exclusive collection, ensuring each gift tells its own unique story.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    name: "Emily Rodriguez",
    position: "Customer Happiness Manager",
    description:
      "Emily is dedicated to providing exceptional service, making every experience unforgettable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
];
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col gap-6 pt-24 bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <div className="absolute bottom-auto left-0 right-auto top-200 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <div className="absolute bottom-auto left-auto right-0 top-400 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About RS Gratitude Gifts
          </h1>
          <p className="text-gray-600 max-w-5xl text-justify max-sm:text-start  mx-auto">
            At RS Gratitude Gifts, we specialize in crafting memorable and
            meaningful corporate gifts designed to strengthen and enhance
            business relationships. Whether you're looking to recognize a valued
            employee, impress a client, or celebrate a partnership, we offer a
            wide range of high-quality, customized gifting solutions to suit any
            occasion. From branded merchandise to luxury items and personalized
            gifts, we tailor each selection to reflect the unique needs of your
            business. Our end-to-end services include gift selection,
            customization, beautiful packaging, and on-time delivery, ensuring a
            seamless experience from start to finish. We understand that every
            gift you send is an extension of your brand and values. That's why
            we are committed to providing thoughtful and distinctive gifts that
            help reinforce your brand, foster loyalty, and leave a lasting
            impression on those who matter most to your business. At RS
            Gratitude Gifts, we are more than just a gifting service we are your
            trusted partner in creating positive, long-lasting business
            connections that go beyond the transaction.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-md z-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 ">
              Our Mission
            </h2>
            <p className="text-gray-600 text-justify max-sm:text-start ">
              At RS Gratitude Gifts, our mission is to create meaningful
              connections by offering thoughtfully designed, personalized gifts
              that express appreciation and strengthen relationships between
              businesses, clients, employees, and partners. We provide
              end-to-end solutions, from gift selection to customization,
              packaging, and timely delivery, ensuring each gift enhances brand
              loyalty, fosters positive business interactions, and leaves a
              lasting impact
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-md z-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-justify max-sm:text-start">
              To become the leading provider of customized corporate gifts,
              known for our creativity, attention to detail, and commitment to
              delivering exceptional service. We envision a world where every
              business relationship is celebrated through thoughtful gifting,
              and where RS Gratitude Gifts plays a pivotal role in building
              trust, loyalty, and success for organizations across industries
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`text-center ${index === 6 ? "md:col-start-2" : ""}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <value.icon size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {work.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center bg-white rounded-lg shadow-md p-6 z-10"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-3xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center "
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md z-10"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
