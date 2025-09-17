import React, { useEffect, useRef, useState } from "react";
import { Download, Eye } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Profil from "../assets/profil.png";

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Typewriter effect (tanpa cursor di sini)
  const [displayedText] = useTypewriter({
    words: [
      "UI/UX Designer",
      "Mobile App Designer",
      "Web Designer",
      "UI Designer",
      "UX Researcher",
      "Graphic Designer"
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-6"
    >
      {/* Background with glassmorphism style */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Profile Photo */}
        <div
          className={`mb-8 relative transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src={Profil}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {/* Nama */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
            Samsul Aimah
          </span>

          {/* Roles + Cursor */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            {displayedText}
            <Cursor cursorStyle="|" cursorColor="#7c3aed" /> {/* warna ungu */}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          I craft meaningful digital experiences through user-centered design,
          turning complex problems into elegant solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* View Work Button */}
          <a href="#project">
            <button className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
              <Eye className="w-5 h-5" />
              View My Work
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </button>
          </a>

          {/* Download CV Button */}
          <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 flex items-center gap-3">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
