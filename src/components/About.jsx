import React, { useRef, useState, useEffect } from "react";
import { Figma, Layers, Search, Zap, Smartphone, Users } from "lucide-react";
import Profil from "../assets/pp.jpg";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Figma", icon: Figma, color: "from-pink-500 to-purple-600" },
    { name: "Adobe XD", icon: Layers, color: "from-purple-500 to-indigo-600" },
    { name: "UX Research", icon: Search, color: "from-blue-500 to-cyan-600" },
    { name: "Wireframing", icon: Zap, color: "from-yellow-500 to-orange-600" },
    { name: "Prototyping", icon: Smartphone, color: "from-green-500 to-emerald-600" },
    { name: "User Testing", icon: Users, color: "from-red-500 to-pink-600" },
  ];

  return (
    <section
      id="about" // ✅ Tambahkan id agar Navbar bisa scrollspy
      ref={aboutRef}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-3xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src={Profil}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-40"></div>
          </div>

          {/* Bio Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-8">
              About Me
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8">
              <p>
                Hi, I'm <strong>Samsul Aimah</strong> — a passionate UI/UX
                Designer with three years of experience turning complex problems
                into simple, elegant, and meaningful digital experiences.
              </p>
              <p>
                I’ve led the design of a donation and cinema ticket booking app
                at <strong>PT Greatedu Global</strong> and crafted a mental health
                app at <strong>Binar Academy</strong>, taking each project from user
                research all the way to testing. I love creating interfaces that
                not only look good but also make people’s lives easier.
              </p>
              <p>
                My favorite tools are <strong>Figma</strong>,{" "}
                <strong>FigJam</strong>, <strong>Miro</strong>,{" "}
                <strong>Adobe XD</strong>, and <strong>Trello</strong> — the
                perfect companions for turning ideas into reality. My mission is
                simple: to design experiences that feel effortless, accessible,
                and genuinely delightful.
              </p>
            </div>

            {/* Skills Grid */}
            <div
              className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
