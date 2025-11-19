import React, { useEffect, useState } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    await axios
      .post(
        "https://rsglobalsolutions.in/api/routes.php?action=addcustomer",
        formData
      )
      .then((response) => {
        setIsSubmitting(false);
        alert("Thank you for your message. We'll get back to you shortly.");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl pt-32 pb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black">CONTACT US</h1>
          <p className="text-gray-600 text-sm md:text-base max-w-md">
            If you have any questions, please feel free to get in touch with us via
            phone, text, email, the form below, or even on social media!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Get In Touch Form */}
          <div className="bg-gray-100 p-8 rounded">
            <h2 className="text-2xl font-bold text-black mb-6">GET IN TOUCH</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-black mb-2 uppercase"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name*"
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-sm placeholder-gray-400 text-black focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-xs font-bold text-black mb-2 uppercase"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    required
                    onChange={handleChange}
                    placeholder="Enter your phone number*"
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-sm placeholder-gray-400 text-black focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-black mb-2 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email*"
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-sm placeholder-gray-400 text-black focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-black mb-2 uppercase"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-sm placeholder-gray-400 text-black focus:outline-none focus:border-gray-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#0AAE5F] text-white py-3 px-8 font-bold text-sm uppercase hover:bg-[#099950] transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="bg-gray-100 p-8 rounded">
            <h2 className="text-2xl font-bold text-black mb-6">CONTACT INFORMATION</h2>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0AAE5F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0AAE5F]" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm mb-1 uppercase">Phone</h3>
                  <a
                    href="tel:+919900123901"
                    className="text-gray-600 text-sm hover:text-[#0AAE5F] transition-colors"
                  >
                    +91 990-012-3901
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0AAE5F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0AAE5F]" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm mb-1 uppercase">Email</h3>
                  <a
                    href="mailto:contact.us@rsglobalsolutions.in"
                    className="text-gray-600 text-sm hover:text-[#0AAE5F] transition-colors"
                  >
                    contact.us@rsglobalsolutions.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0AAE5F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0AAE5F]" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm mb-1 uppercase">Address</h3>
                  <p className="text-gray-600 text-sm">
                    No.20, 3rd floor, Shivananda Nagar, 6th phase, JP Nagar, Bangalore - 560078
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8">
                <h3 className="font-bold text-black text-lg mb-4 uppercase">Business Hours</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="font-bold text-black text-xs mb-1 uppercase">Monday - Friday</p>
                    <p className="text-gray-600 text-sm">9:00 am - 6:00 pm</p>
                  </div>
                  <div>
                    <p className="font-bold text-black text-xs mb-1 uppercase">Saturday</p>
                    <p className="text-gray-600 text-sm">10:00 am - 4:00 pm</p>
                  </div>
                  <div>
                    <p className="font-bold text-black text-xs mb-1 uppercase">Sunday</p>
                    <p className="text-gray-600 text-sm">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[400px] md:h-[500px] rounded overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.0611906207455!2d77.5719814750753!3d12.903786887405312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzEzLjYiTiA3N8KwMzQnMjguNCJF!5e0!3m2!1sen!2sin!4v1749551485058!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

