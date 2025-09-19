import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const Layout = ({ isDark, toggleDarkMode, children }) => {
  const location = useLocation();

  // Hanya tampilkan navbar jika tidak sedang di halaman /projects
  const showNavbar = location.pathname !== "/projects";

  return (
    <>
      {showNavbar && <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />}
      <div className={showNavbar ? "pt-16" : ""}>{children}</div>
    </>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout isDark={isDark} toggleDarkMode={toggleDarkMode}>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "/projects",
      element: (
        <Layout isDark={isDark} toggleDarkMode={toggleDarkMode}>
          <ProjectPage />
        </Layout>
      ),
    },
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
