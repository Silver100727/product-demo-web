import { FacebookIcon, Gift, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="text-white relative pt-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:34px_44px]"></div>
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
                  <li
                    key={index}
                    className="text-gray-400 hover:text-white"
                    onClick={() => {
                      navigate(item.to);
                    }}
                  >
                    {item.page}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                { page: "301, Khaleel Building," },
                { page: "Bangalore - Karnataka" },
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
                { icon: <InstagramIcon className="h-6 w-6" /> },
                { icon: <FacebookIcon className="h-6 w-6" /> },
                { icon: <TwitterIcon className="h-6 w-6" /> },
              ].map((item, index) => {
                return (
                  <a
                    href="#"
                    key={index}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.icon}
                  </a>
                );
              })}
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
