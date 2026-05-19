import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Home,
  User,
  Folder,
  Award,
  Briefcase,
  BookOpen,
  Mail,
} from "lucide-react";

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState();
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero", icon: <Home size={18} /> },
    { name: "About", href: "#about", id: "about", icon: <User size={18} /> },
    { name: "Skills", href: "#skills", id: "skills", icon: <User size={18} /> },
    {
      name: "Projects",
      href: "#project",
      id: "project",
      icon: <Folder size={18} />,
    },
    {
      name: "Certificates",
      href: "#certificates",
      id: "certificates",
      icon: <Award size={18} />,
    },
    {
      name: "Experience",
      href: "#experience",
      id: "experience",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Highlight",
      href: "#blog",
      id: "blog",
      icon: <BookOpen size={18} />,
    },
    {
      name: "Contact",
      href: "#contact",
      id: "contact",
      icon: <Mail size={18} />,
    },
  ];

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar blur effect on scroll
  useEffect(() => {
    const handleNavbarScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleNavbarScroll);

    return () => window.removeEventListener("scroll", handleNavbarScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div
  className={`flex items-center space-x-6 px-6 py-3 rounded-full transition-all duration-300 border ${
    isScrolled
      ? "bg-white/[0.06] dark:bg-gray-900/[0.08] backdrop-blur-2xl shadow-2xl border-white/10"
      : "bg-white/70 dark:bg-gray-900/50 backdrop-blur-md shadow-md border-white/20"
  }`}
>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-indigo-600 dark:text-indigo-500"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-4 right-4 z-50">
        <button
          className="p-2 text-gray-800 dark:text-gray-300"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Samsul{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Aimah
            </span>
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-700 dark:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {link.icon}
              {link.name}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              toggleDarkMode();
              setIsOpen(false);
            }}
            className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}

            <span className="text-gray-800 dark:text-gray-300">
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;