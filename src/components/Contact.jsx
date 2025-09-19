import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Dribbble,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/samsul-aimah-855023348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-600",
    },
    {
      name: "Behance",
      icon: ExternalLink,
      url: "https://www.behance.net/SamsulAimah",
      color: "hover:text-blue-500",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      url: "https://dribbble.com/SAMSUL_AIMAH16",
      color: "hover:text-pink-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/SamsulAimah",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
  ];

  return (
    <section
    id="contact"
      ref={contactRef}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's create something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              impactful together!
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your
            project and discuss how we can create amazing user experiences
            together.
          </p>
        </div>

        <div className="grid max-w-2xl mx-auto gap-16 items-start">
          {/* Contact Form */}
          {/* <div className={`bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-2xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div> */}

          {/* Contact Info & Social */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href="mailto:samsulspeed75@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
                    >
                      samsulspeed75@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Phone
                    </p>
                    <a
                      href="https://wa.me/6285133797200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-300 transition-colors"
                    >
                      +62 851-3379-7200
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-600 rounded-xl hover:shadow-lg transition-all duration-300 ${social.color} transform hover:scale-105`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
