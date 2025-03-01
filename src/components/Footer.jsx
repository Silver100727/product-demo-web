import { FacebookIcon, Gift, InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Whatsapp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
    ></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="text-white relative pt-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="absolute bottom-0 left-0 right-0 top-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:34px_44px]" />
      <div className="max-w-7xl mx-auto px-8 pt-15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Gift className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">RS Gratitude Gifts</span>
            </div>
            <p className="text-gray-400">
              Curating the perfect gifts for every occasion.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", page: "Home" },
                { to: "/products", page: "Products" },
                { to: "/categories", page: "Categories" },
                { to: "/about", page: "About" },
              ].map((item, index) => {
                return (
                  <li key={index} className="text-gray-400 hover:text-white">
                    <Link to={item.to}>{item.page}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                { page: "No. 20, 3rd floor, Shivanand," },
                { page: "Nagar, 6th Phase, JP Nagar," },
                { page: "Bangalore - 560078" },
                { page: "rs.gratitudegifts@gmail.com" },
                { page: "(+91) 123-456-7356" },
              ].map((item, index) => {
                return <li key={index}>{item.page}</li>;
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: <InstagramIcon className="h-6 w-6" />,
                  link: "https://www.instagram.com/rsgratitudegifts/",
                },
                {
                  icon: <FacebookIcon className="h-6 w-6" />,
                  link: "https://www.facebook.com/people/RS-Gratitude-Gifts/61573472153305/",
                },
                {
                  icon: <Whatsapp className="h-6 w-6" />,
                  link: "https://wa.me/919900123901",
                },
                {
                  icon: <LinkedinIcon className="h-6 w-6" />,
                  link: "https://www.linkedin.com/in/rs-gratitude-gifts-642524351/",
                },
              ].map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-15 pb-2 text-center text-[13px] text-gray-400">
          <p>Terms and Conditions Privacy Policy</p>
          <p>
            &copy; {new Date().getFullYear()} RS Gratitude Gifts. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
