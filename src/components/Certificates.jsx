import React, { useState, useRef, useEffect } from "react";
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react";
import sertifikat1 from "../assets/sertifikat1.jpg";
import sertifikat3 from "../assets/sertifikat3.png";
import sertifikat4 from "../assets/sertifikat4.jpg";
import sertifikat5 from "../assets/sertifikat5.jpg";
import sertifikat6 from "../assets/sertifikat6.jpg";
import sertifikat2 from "../assets/sertifikat2.jpg";
import sertifikat7 from "../assets/sertifikat7.jpg";
import sertifikat8 from "../assets/sertifikat8.png";
import bnsp from "../assets/bnsp.jpg";
import dbimbing from "../assets/dbimbing.jpg";

const Certificates = () => {
  const certificatesRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (certificatesRef.current) observer.observe(certificatesRef.current);
    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title:
        "For completing UI/UX Research & Design 101: Belajar UI/UX Design & Metode UX Research",
      issuer: "PT. Lentera Bangsa Benderang (Binar Academy)",
      date: "2024",
      image: sertifikat1,
      verified: true,
    },
    {
      title: "UI/UX Designer",
      issuer: "PT Evolver Innovation Center",
      date: "2024",
      image: sertifikat3,
      verified: true,
    },
    {
      title: "UI/UX Research and Design",
      issuer: "PT. Lentera Bangsa Benderang (Binar Academy)",
      date: "2023",
      image: sertifikat4,
      verified: true,
    },
    {
      title: "UI/UX Designer Bootcamp",
      issuer: "PT. GreatEdu Global Mahardika",
      date: "2023",
      image: sertifikat8,
      verified: true,
    },
    {
      title: "Environmental Insights for UI/UX Designer",
      issuer: "Ministry of Environment of Denmark",
      date: "2024",
      image: sertifikat6,
      verified: true,
    },
    {
      title: "Environmental insights for UI/UX Designer training",
      issuer: "Kementrian Lingkungan Hidup dan Kehutanan",
      date: "2023",
      image: sertifikat7,
      verified: true,
    },
    {
      title: "1st place in UI/UX Designer competition",
      issuer: "Technology Festival Activities",
      date: "2024",
      image: sertifikat2,
      verified: true,
    },
    {
      title: "UI/UX Designer Bootcamp",
      issuer: "PT. GreatEdu Global Mahardika",
      date: "2023",
      image: sertifikat5,
      verified: true,
    },
    {
      title: "Junior Graphics Designer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      date: "2024",
      image: bnsp,
      verified: true,
    },
    {
      title: "UI/UX Designer Bootcamp",
      issuer: "PT. Dibimbing Digital Indonesia",
      date: "2023",
      image: dbimbing,
      verified: true,
    },
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      ref={certificatesRef}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center text-purple-600 dark:text-purple-400 mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          🎖️ Certificate
        </h2>

        <div className="relative">
          {/* Tombol Scroll Kiri */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Container Sertifikat */}
          <div
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Gambar Sertifikat */}
                <div className="aspect-video relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {cert.verified && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full">
                      <Award className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Detail Sertifikat */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {cert.issuer}
                  </p>
                  {/* TAHUN DIPINDAH KE BAWAH */}
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                    {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Scroll Kanan */}
          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Modal Preview */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full shadow-xl overflow-hidden">
              <div className="p-8">
                {/* Header Modal */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-indigo-600" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedCert.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                {/* Gambar di Modal */}
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full aspect-video object-cover rounded-2xl mb-6"
                />

                {/* Detail di Modal */}
                <div className="text-center">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                    Issued by <strong>{selectedCert.issuer}</strong>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedCert.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
