import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

// Buat router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
