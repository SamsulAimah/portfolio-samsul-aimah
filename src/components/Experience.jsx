import React, { useRef, useState, useEffect } from "react";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experienceRef = useRef(null);
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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Panaceamed.id",
      role: " UI/UX Designer",
      period: "Desember 2024 - Mei 2025",
      location: "Jakarta",
      highlights: [
        "Designed and developed innovative, functional web designs for the company platform.",
        "Created engaging User Interfaces (UI) and intuitive User Experiences (UX) with a focus on usability.",
        "Ensured consistent visual aesthetics and smooth navigation across all pages.",
        "Collaborated with developers to ensure seamless implementation and adherence to technical standards.",
        "Supported the company’s mission to deliver high-quality healthcare solutions through effective design.",
      ],
    },
    {
      company: "PT. GreatEdu Global Mahardika",
      role: "UI/UX Designer",
      period: "2024",
      location: "Jakarta",
      highlights: [
        "Leading the team for mobile application design in developing a donation and cinema ticket booking application (XXI).",
        "Oversaw the entire design process from user research, wireframing, prototyping, to usability testing.",
        "Ensured the final design met user needs, had a seamless flow, and aligned with the company’s goals.",
        "Collaborated closely with developers to ensure smooth handoff and implementation.",
      ],
    },
    {
      company: "PT. Lentera Bangsa Benderang (Binar Academy)",
      role: "UI/UX Reseach and Design",
      period: "2023",
      location: "Jakarta",
      highlights: [
        "Designed a mental health application from concept to final testing.",
        "Conducted user research and competitive analysis to identify user pain points and opportunities.",
        "Created user flows, wireframes, and high-fidelity prototypes for key features.",
        "Performed usability testing to refine and improve the overall user experience.",
        
      ],
    },
  ];

  return (
    <section
      ref={experienceRef}
      className="py-20 px-6 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center text-purple-600 dark:text-purple-400 mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          🏢 Experience
        </h2>

        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${
                        index % 2 === 0 ? "-translate-x-10" : "translate-x-10"
                      }`
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Experience Card */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
