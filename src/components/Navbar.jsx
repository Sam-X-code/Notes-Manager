import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-700 shadow-lg px-6 py-4">
      
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
          Notes-Manager
        </h1>

        {/* Links */}
        <div className="flex gap-4">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            Notes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
