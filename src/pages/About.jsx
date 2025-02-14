import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, HeartHandshake } from "lucide-react";

const values = [
  {
    title: "Heartfelt Appreciation",
    description:
      "We believe in the power of gratitude and strive to help you express it in every gesture.",
    icon: HeartHandshake,
  },
  {
    title: "Premium Quality",
    description:
      "Our gifts are carefully curated using only the finest materials and craftsmanship.",
    icon: Shield,
  },
  {
    title: "Thoughtful Service",
    description:
      "Our dedicated team goes above and beyond to ensure a personalized gifting experience.",
    icon: Users,
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
  return (
    <div className="min-h-screen pt-24 pb-12 bg-white top-0">
      <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <div class="absolute top-100 right-auto left-0 bottom-auto h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 ">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About RS Gratitude Gifts
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At RS Gratitude Gifts, we believe that every gift carries a story.
            Our passion lies in curating premium, thoughtful gifts that
            celebrate relationships, honor milestones, and express heartfelt
            gratitude.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md z-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 ">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to spread joy and gratitude by offering a
              handpicked selection of premium gifts. Every item is chosen to
              make your moments of appreciation even more special.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md z-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              Our vision is to be the leading name in thoughtful gifting,
              recognized for our unwavering commitment to quality, innovation,
              and creating moments of true connection.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
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
                viewport={{ once: true }}
                transition={{ delay: index * 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.6 }}
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
    </div>
  );
};

export default About;
