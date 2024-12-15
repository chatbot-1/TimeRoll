import React, { useState } from "react";
import NavLink from "./NavLink";
import UserDropdown from "./UserDropdown";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <a href="/" className="text-3xl font-semibold tracking-tight">
              <span className="text-indigo-100">Memory</span>
              <span className="text-teal-200">App</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-lg">
            <NavLink href="/" label="Home" />
            <NavLink href="/dashboard" label="Dashboard" />
            <NavLink href="/create-memory" label="Create Memory" />
          </div>

          {/* User Dropdown */}
          <div className="hidden md:flex items-center space-x-6">
            <UserDropdown />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          <NavLink href="/" label="Home" />
          <NavLink href="/dashboard" label="Dashboard" />
          <NavLink href="/create-memory" label="Create Memory" />
          <UserDropdown isMobile />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
