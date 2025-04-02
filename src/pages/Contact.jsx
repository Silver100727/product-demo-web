import React, { useEffect, useState } from "react";
import {
  MapPin,
  Clock,
  Send,
  Phone,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
    supportType: "order-status",
    company: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Show toast notification
      alert("Thank you for your message. We'll get back to you shortly.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
        supportType: "order-status",
        company: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#C27AFF] text-white py-16 md:py-24">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions about our
            products, services, or custom gifting solutions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow-md">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-burgundy-50 rounded-full flex items-center justify-center mx-auto">
                    {item.icon && <item.icon className="h-8 w-8 " />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  {item.links ? (
                    <ul className="space-y-1">
                      {item.links.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="text-neutral-600 text-sm hover:text-burgundy-700 transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-neutral-600 text-sm">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
              <p className="text-neutral-600 text-sm mb-8">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>

              <div className="w-full">
                {/* Tabs */}
                <div className="flex border-b mb-8">
                  <button
                    onClick={() => setActiveTab("contact")}
                    className={`py-2 px-4 font-medium text-sm ${
                      activeTab === "contact"
                        ? "border-b-2 border-burgundy-700 text-burgundy-700"
                        : "text-neutral-500 hover:text-neutral-700"
                    }`}
                  >
                    Contact
                  </button>
                </div>

                {/* Contact Tab Content */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full h-7 text-xs px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-0 focus:ring-burgundy-500 focus:border-burgundy-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email"
                        className="w-full h-7 text-xs px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-0 focus:ring-burgundy-500 focus:border-burgundy-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full h-7 text-xs px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-burgundy-500 focus:border-burgundy-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-xs font-medium text-neutral-700 mb-1"
                      >
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleSelectChange}
                        className="w-full px-3 h-7 text-xs text-neutral-700  border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-0 focus:ring-burgundy-500 focus:border-burgundy-500"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Question</option>
                        <option value="product">Product Information</option>
                        <option value="corporate">Corporate Gifting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-neutral-700 mb-1"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject of your message"
                      className="w-full h-7 text-xs px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-burgundy-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message"
                      rows={5}
                      className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-0 focus:ring-burgundy-500 focus:border-burgundy-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C27AFF] text-xs text-white py-2 px-4 rounded-md font-medium hover:bg-burgundy-800 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-burgundy-500 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-3">Visit Our Store</h2>
              <p className="text-neutral-600 text-sm mb-8">
                Come experience our gift collections in person at our flagship
                store.
              </p>

              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.59!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzIxLjAiTiA3N8KwMzUnMzEuMCJF!5e0!3m2!1sen!2sin!4v1617010000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    RS Gratitude Gifts Flagship Store
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    No. 20, 3rd floor, Shivanand, Nagar, 6th Phase, JP Nagar,
                    Bangalore - 560078
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-neutral-500 mr-2" />
                      <span className="text-sm text-neutral-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-neutral-500 mr-2" />
                      <span className="text-sm text-neutral-600">
                        Saturday: 10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-neutral-500 mr-2" />
                      <span className="text-sm text-neutral-600">
                        Sunday: Closed
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=12.905826,77.586386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm px-4 py-2 border border-neutral-300 rounded-md text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-burgundy-500 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Sample data
const contactInfo = [
  {
    title: "Visit Us",
    content: `
    No. 20, 3rd floor, Shivanand,
    Nagar, 6th Phase, JP Nagar,
    Bangalore - 560078
    `,
    icon: MapPinIcon,
  },
  {
    title: "Contact Us",
    links: [
      {
        label: "@rsgratitudegifts.com",
        href: "mailto:@rsgratitudegifts.com",
      },
      { label: "+91 990-012-3901", href: "tel:+15551234567" },
    ],
    icon: PhoneIcon,
  },
  {
    title: "Business Hours",
    content:
      "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
    icon: Clock,
  },
];
