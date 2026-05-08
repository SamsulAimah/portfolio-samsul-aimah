import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const skills = [
    {
      name: "Figma",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Adobe XD",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "UX Research",
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Wireframing",
      image:
        "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Prototyping",
      image:
        "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "User Testing",
      image:
        "https://cdn-icons-png.flaticon.com/512/747/747376.png",
      color: "from-red-500 to-pink-600",
    },
    {
      name: "UI Design",
      image:
        "https://cdn-icons-png.flaticon.com/512/1055/1055683.png",
      color: "from-indigo-500 to-violet-600",
    },
    {
      name: "Design System",
      image:
        "https://cdn-icons-png.flaticon.com/512/1688/1688400.png",
      color: "from-cyan-500 to-blue-700",
    },
    {
      name: "Notion",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
      color: "from-gray-700 to-black",
    },
    {
      name: "VS Code",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Miro",
      image:
        "https://cdn.worldvectorlogo.com/logos/miro-2.svg",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Trello",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
      color: "from-sky-500 to-blue-700",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-[#020617]"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-purple-600 dark:text-purple-400 mb-6">
            🤖 My Skills
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Here are some tools, methods, and technologies
            that I use to create modern and user-friendly
            digital experiences.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">

          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={index * 70}
              className="group flex items-center gap-4 bg-[#f8fafc] dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-3xl px-5 py-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[100px]"
            >

              {/* ICON */}
              <div
                className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg flex-shrink-0`}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-5 h-5 object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base leading-snug">
                  {skill.name}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;