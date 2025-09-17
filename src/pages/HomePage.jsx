import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Experience from "../components/Experience";
// import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
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

export default App;
