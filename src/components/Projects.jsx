import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, X, ArrowRight } from "lucide-react";

const Projects = () => {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Panaceamed.id",
      description:
        "PanaceaMed is a modern health platform that provides trusted medical information, online consultation services, and personal health management to support your healthy lifestyle.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f0eb11221981649.67dd8ff8cae15.jpg",
      timeline: [
        {
          phase: "Research",
          description: "User interviews and competitive analysis",
        },
        {
          phase: "Wireframe",
          description: "Low-fidelity prototypes and user flows",
        },
        {
          phase: "Hi-Fi Design",
          description: "Visual design and component library",
        },
        {
          phase: "Prototype",
          description: "Interactive prototype and user testing",
        },
        {
          phase: "Final Result",
          description: "Delivered product with 40% conversion increase",
        },
      ],
      behanceUrl: "https://www.behance.net/gallery/221981649/panaceamedid",
    },
    {
      id: 2,
      title: "EcoCine App",
      description:
        "Ecocine is a modern mobile application that combines charitable giving with entertainment. Users can easily donate to natural disaster relief efforts while seamlessly booking movie tickets in one platform, creating a meaningful and engaging experience.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/439a80201157419.666f874ec083d.png",
      timeline: [
        {
          phase: "Research",
          description: "Stakeholder interviews and data analysis",
        },
        {
          phase: "Wireframe",
          description: "Information architecture and wireframes",
        },
        {
          phase: "Hi-Fi Design",
          description: "Dashboard UI and data visualization design",
        },
        {
          phase: "Prototype",
          description: "Interactive prototype with micro-interactions",
        },
        {
          phase: "Final Result",
          description: "Reduced task completion time by 60%",
        },
      ],
      behanceUrl: "https://www.behance.net/gallery/201126205/EcoCine",
    },
    {
      id: 3,
      title: "DAMAI-Healthtech-Apps",
      description:
        "DAMAI Healthtech is a digital health solution designed to connect patients with doctors, provide reliable medical information, and enable easy online consultations — all in one user-friendly platform.",
      image:
        "https://cdn.dribbble.com/userupload/14639871/file/original-b941ed2d08a3e39e67a8b4a02cde282a.png?resize=752x&vertical=center",
      timeline: [
        {
          phase: "Research",
          description: "Patient interviews and accessibility audit",
        },
        {
          phase: "Wireframe",
          description: "Accessible design patterns and user flows",
        },
        {
          phase: "Hi-Fi Design",
          description: "High-contrast, accessible visual design",
        },
        {
          phase: "Prototype",
          description: "Tested with screen readers and assistive technology",
        },
        {
          phase: "Final Result",
          description: "Improved accessibility score from 60% to 95%",
        },
      ],
      behanceUrl:
        "https://www.behance.net/gallery/188315157/DAMAI-Healthtech-Apps",
    },
  ];

  return (
    <section
      id="project"
      ref={projectsRef}
      className="py-20 px-6 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center text-purple-600 dark:text-purple-400 mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          🚀 Featured Projects
        </h2>

        {/* Projects Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  {project.description}
                </p>

                {/* Button Container fixed di bawah */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-300 text-base"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Behance
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            View More
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-2xl mb-8"
                />

                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Design Process
                </h4>

                <div className="space-y-6">
                  {selectedProject.timeline.map((phase, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {phase.phase}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
