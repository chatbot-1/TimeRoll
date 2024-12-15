import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-4">
          <p className="text-lg">© 2024 MemoryApp. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <Link to="/privacy" className="hover:text-teal-500">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-teal-500">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
