import React, { useRef, useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";
import Profil from "../assets/Profil.jpg";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 bg-[#f5f5f7] dark:bg-[#0f172a]"
    >
      <div className="w-full max-w-[1500px] mx-auto px-8 lg:px-14">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[48%_52%] gap-14 items-start">

          {/* LEFT SIDE */}
          <div
            data-aos="fade-right"
            className="w-full"
          >

            {/* IMAGE */}
            <div className="relative rounded-[36px] overflow-hidden border-4 border-purple-500 shadow-2xl">

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-yellow-300/20 z-10"></div>

              <img
                src={Profil}
                alt="Profile"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            className="w-full pr-4 lg:pr-10"
          >

            <h2 className="text-5xl md:text-6xl font-bold text-purple-600 dark:text-purple-400 mb-10 leading-tight">
              About Me
            </h2>

            <div className="space-y-7 text-lg leading-relaxed text-gray-600 dark:text-gray-300">

              <p>
                Hi, I'm{" "}
                <strong className="text-purple-600 dark:text-purple-400">
                  Samsul Aimah
                </strong>
                , a passionate UI/UX Designer with three years of
                experience turning complex problems into simple,
                elegant, and meaningful digital experiences.
              </p>

              <p>
                I am currently interning at{" "}
                <strong className="text-gray-800 dark:text-white">
                  PT Ivonesia Solusi Data
                </strong>
                , where I handle several projects such as{" "}
                <strong className="text-purple-600 dark:text-white">
                  Sociomile
                </strong>{" "}
                and{" "}
                <strong className="text-purple-600 dark:text-white">
                  KB AI
                </strong>
                . In these projects, I collaborate closely with
                product and development teams to create
                user-centered interfaces and improve overall
                user experience.
              </p>

              <p>
                I’ve also led the design of a donation and
                cinema ticket booking app at{" "}
                <strong className="text-gray-800 dark:text-white">
                  PT Greatedu Global
                </strong>{" "}
                and crafted a mental health application at{" "}
                <strong className="text-gray-800 dark:text-white">
                  Binar Academy
                </strong>
                , taking each project from user research,
                wireframing, prototyping, to usability testing.
              </p>

              <p>
                I love creating interfaces that not only look
                visually appealing but also solve real user
                problems. My mission is simple: to design
                experiences that feel effortless, accessible,
                modern, and genuinely delightful.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;