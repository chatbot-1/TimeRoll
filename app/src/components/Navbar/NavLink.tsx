import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-gray-200 hover:text-teal-300 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
    >
      {label}
    </a>
  );
};

export default NavLink;
