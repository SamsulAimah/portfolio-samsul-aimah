import React, { useRef, useEffect } from "react";
import { Figma, Layers, Search, Zap, Smartphone, Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Profil from "../assets/pp.jpg";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
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
    <section id="about" ref={aboutRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div data-aos="fade-right" className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-3xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img src={Profil} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-40"></div>
          </div>

          {/* Bio Content */}
          <div data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-8">
              About Me
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8">
              <p>
                Hi, I'm <strong className="text-purple-600 dark:text-purple-400">Samsul Aimah</strong> a passionate UI/UX
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <skill.icon className="w-5 h-5 text-white" />
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
