// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { Download, Eye } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Profil from "../assets/profil.png";

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Typewriter effect
  const [displayedText] = useTypewriter({
    words: [
      "UI/UX Designer",
      "Mobile App Designer",
      "Web Designer",
      "UI Designer",
      "UX Researcher",
      "Graphic Designer",
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
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen sm:min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 min-w-full min-h-full object-cover -z-0"
      >
        <source src="/videoHero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay biar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

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
          className={`text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <span className="block mb-2">Samsul Aimah</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            {displayedText}
            <Cursor cursorStyle="|" cursorColor="#a78bfa" />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-xl md:text-2xl  text-white mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
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
          <a href="#project">
            <button className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
              <Eye className="w-5 h-5" />
              View My Work
            </button>
          </a>

          <a
            href="/cv.pdf"
            download="CV-Samsul-Aimah.pdf"
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 dark:border-gray-700 text-indigo-700 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
