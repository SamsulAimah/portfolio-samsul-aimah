import React, { useRef, useState, useEffect } from "react";
import { Calendar, ExternalLink } from "lucide-react";

const Blog = () => {
  const blogRef = useRef(null);
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

    if (blogRef.current) {
      observer.observe(blogRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const articles = [
    {
      title: "Panaceamed.id",
      excerpt:
        "PanaceaMed is a modern health platform that provides trusted medical information, online consultation services, and personal health management to support your healthy lifestyle.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f0eb11221981649.67dd8ff8cae15.jpg",
      date: "Mei, 2025",
      category: "UI/UX Design",
      behanceUrl: "https://www.behance.net/gallery/221981649/panaceamedid",
    },
    {
      title: "DAMAI-Healthtech-Apps",
      excerpt:
        "DAMAI Healthtech is a digital health solution designed to connect patients with doctors, provide reliable medical information, and enable easy online consultations — all in one user-friendly platform.",
      image:
        "https://cdn.dribbble.com/userupload/14639871/file/original-b941ed2d08a3e39e67a8b4a02cde282a.png?resize=752x&vertical=center",
      date: "December, 2023",
      category: "UI/UX Research and Design",
      behanceUrl: "https://www.behance.net/gallery/188315157/DAMAI-Healthtech-Apps",
    },
    {
      title: "EcoCine App",
      excerpt:
        "Ecocine is a modern mobile application that combines charitable giving with entertainment. Users can easily donate to natural disaster relief efforts while seamlessly booking movie tickets in one platform, creating a meaningful and engaging experience.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/439a80201157419.666f874ec083d.png",
      date: "June, 2024",
      category: "UI/UX Research and Design",
      behanceUrl: "https://www.behance.net/gallery/201126205/EcoCine",
    },
  ];

  return (
    <section id="blog" ref={blogRef} className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-6">
            🚀 Design Highlight
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sharing thoughts on design, user experience, and digital innovation exploring the creative process, what makes a product compelling, and how technology and design are shaping the future.
          </p>
        </div>

        {/* Articles Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                {/* Button always at bottom */}
                <div className="mt-auto flex justify-start">
                  <a
                    href={article.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
                  >
                    🔗 Behance
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
