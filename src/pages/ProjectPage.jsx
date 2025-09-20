import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, X, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("IntersectionObserver:", entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" } // lebih sensitif di mobile
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
    {
      id: 4,
      title: "Redesign App WhatsApp",
      description:
        "I redesigned WhatsApp with a modern look and added a new login option using email, making it more flexible and accessible for users who prefer email over phone numbers.",
      image:
        "https://cdn.dribbble.com/userupload/14553807/file/original-877f4257e8c69048eb4e59420f75015b.png?resize=752x&vertical=center",
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
      behanceUrl:
        "https://www.behance.net/gallery/196861715/Design-App-WhatsApp",
    },
    {
      id: 5,
      title: "Redesign App TIX.ID",
      description:
        "I redesigned TIX ID to simplify the movie ticket booking experience, improving navigation, seat selection, and payment flow to make the process faster and more user-friendly.",
      image:
        "https://cdn.dribbble.com/userupload/14553987/file/original-0a3a726712de189152897030ac15f199.png?resize=752x&vertical=center",
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
      behanceUrl:
        "https://www.behance.net/gallery/183802307/Case-Study-Redesign-App-TIX-ID",
    },
    {
      id: 6,
      title: "Redesign App Cariilmu",
      description:
        "I redesigned CariIlmu, a bootcamp learning platform, to create a more intuitive and seamless user experience. The new design focuses on simplifying navigation, improving course discovery, and making the learning process more engaging and accessible.",
      image:
        "https://cdn.dribbble.com/userupload/14635885/file/original-a4536a2085230a3f63f20fa527eb0e5f.png?resize=752x&vertical=center",
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
        "https://www.behance.net/gallery/183442095/Redesign-Apps-Cariilmu",
    },
    {
      id: 7,
      title: "Design App Ecosync",
      description:
        "I designed EcoSync, a digital waste management app, with a focus on creating a clean, intuitive interface. The app helps users easily sort waste, track collection schedules, and stay engaged with sustainable habits through a simple and user-friendly flow.",
      image:
        "https://cdn.dribbble.com/userupload/14639317/file/original-64873bcfead5c0f88911c6845c3652ea.png?resize=752x&vertical=center",
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
      behanceUrl:
        "https://www.behance.net/gallery/190780059/Sistem-Informasi-Pengolahan-Sampah-EcoSync",
    },
    {
      id: 8,
      title: "Redesign Website HiCollegues (Case Study Magang)",
      description:
        "I redesigned HiCollegues, a course bootcamp website, to improve navigation and streamline the learning experience. The new layout makes it easier for users to browse courses, register, and track their progress with a cleaner and more engaging interface.",
      image:
        "https://cdn.dribbble.com/userupload/14635762/file/original-7f5ba58ea740773616864c0100f61092.png?resize=752x&vertical=center",
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
      behanceUrl:
        "https://www.behance.net/gallery/188067107/Studi-kasus-seleksi-magang-(HiCollegues)",
    },
    {
      id: 9,
      title: "Design App Donasiku (Case Study Magang)",
      description:
        "I designed Donasiku, an app for donations and concert ticket purchases, with a focus on making giving and event participation simple and enjoyable. The design provides a smooth donation flow, easy ticket booking, and a clean interface that encourages users to support causes they care about.",
      image:
        "https://cdn.dribbble.com/userupload/14554171/file/original-9347aec152c7d9df44a0f5fe3933c6ea.png?resize=752x&vertical=center",
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
        "https://www.behance.net/gallery/187694187/Studi-kasus-seleksi-magang-(-Suitmedia-)",
    },
    {
      id: 10,
      title: "Libur.In",
      description:
        "I designed Libur.In, a hotel and villa booking website, with a focus on delivering a smooth and intuitive booking experience. The design makes it easy for users to search accommodations, compare options, and complete reservations with a clean and modern interface.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7abc9c224730363.681088029976a.png",
      timeline: [
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
      behanceUrl: "https://www.behance.net/gallery/224730363/Liburin",
    },
    {
      id: 11,
      title: "Barna Beauty",
      description:
        "I designed Bana Beauty, an e-commerce website for skincare and beauty products, focusing on a clean and elegant interface. The design makes it easy for users to browse products like serums, read details, and complete purchases seamlessly.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b199f5221982183.67dd91e078786.png",
      timeline: [
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
      behanceUrl: "https://www.behance.net/gallery/221982183/Barna-Beauty",
    },
    {
      id: 12,
      title: "Magic Sell Dashboard",
      description:
        "I designed Magic Sell, a modern sales management dashboard, to help users monitor sales performance, track analytics, and manage products efficiently. The layout provides clear data visualization, easy navigation, and an intuitive interface for better decision-making.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/41b368219572357.67b48540e79f6.png",
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
      behanceUrl: "https://www.behance.net/gallery/219572357/Dashboard",
    },
  ];

  return (
    <section
      id="project"
      ref={projectsRef}
      className="py-20 px-6 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button + Title */}
        <div className="flex items-center gap-6 mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            <span>Back</span>
          </button>

          <h2
            className={`text-4xl md:text-5xl font-bold text-center w-full text-gray-900 dark:text-white transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "md:opacity-0 md:-translate-y-10 opacity-100 translate-y-0"
            }`}
          >
            All Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-100 translate-x-0 md:opacity-0 md:translate-x-20"
            }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
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
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4">
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
                    🔗 Behance
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {selectedProject.title}
                </h3>

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
                        <p className="text-gray-600 dark:text-gray-300">
                          {phase.description}
                        </p>
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

export default ProjectsPage;
