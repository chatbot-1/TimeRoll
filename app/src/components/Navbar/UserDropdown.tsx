import React, { useState, useEffect, useRef } from "react";

interface UserDropdownProps {
  isMobile?: boolean;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ isMobile }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    // Function to detect clicks outside the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative ${isMobile ? "block w-full text-left" : "inline-block"}`}
      ref={dropdownRef} // Attach the ref to the dropdown container
    >
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium focus:outline-none transition-all duration-300"
      >
        Profile
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && !isMobile && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-xl rounded-lg py-2">
          <a
            href="/profile"
            className="block px-4 py-2 text-sm hover:bg-teal-100 transition-colors"
          >
            View Profile
          </a>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-teal-100 transition-colors">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
