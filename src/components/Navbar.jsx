import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex text-white text-xs p-2 font-serif bg-gray-800 justify-end space-x-4">
        <a
          href="tel:1-325-223-9500"
          className="hover:text-gray-300 transition-colors"
        >
          CALL SALES 1-325-223-9500
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors">
          SUPPORT
        </a>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <img
            className="h-8 w-12 sm:h-12 sm:w-16 transition-transform hover:scale-105"
            src={logo}
            alt="logo"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm font-bold text-white">
            <a href="#" className="hover:text-gray-300 transition-colors">
              PRODUCTS
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              SOLUTIONS
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              RESOURCES
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              COMPANY
            </a>
            <button className="border border-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
              Get a Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-gray-800 text-white text-center py-4">
            <a href="#" className="block py-2 hover:bg-gray-700">
              PRODUCTS
            </a>
            <a href="#" className="block py-2 hover:bg-gray-700">
              SOLUTIONS
            </a>
            <a href="#" className="block py-2 hover:bg-gray-700">
              RESOURCES
            </a>
            <a href="#" className="block py-2 hover:bg-gray-700">
              COMPANY
            </a>
            <button className="mt-2 border border-white px-4 py-2 rounded hover:bg-gray-700">
              Get a Demo
            </button>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
