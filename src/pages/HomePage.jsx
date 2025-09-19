import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Experience from "../components/Experience";
// import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  const [isDark, setIsDark] = useState(false);

  // Ambil tema dari localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      {/* Navbar di paling atas + pass props */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      {/* Section lain */}
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Experience />
      {/* <Testimonials /> */}
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
