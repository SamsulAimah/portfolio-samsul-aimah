import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2">
            © Samsul Aimah 
          </p>
          <p className="text-gray-600 dark:text-gray-500">Latest Update: September 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
