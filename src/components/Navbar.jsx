import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const linkClasses = (isActive) =>
    `px-5 py-2 font-medium relative transition-colors duration-300 ${
      isActive
        ? "text-white border-b-4 border-white rounded-t-md"
        : "text-white hover:text-gray-300"
    }`;

  return (
    <header className="bg-blue-500 w-full h-20 px-8 flex items-center justify-between fixed top-0 z-50 text-white shadow-md">
      {/* Logo */}
      <h1 className="font-logo text-3xl cursor-pointer select-none">
        S<span className="text-xl font-poppins">olanki </span>B
        <span className="text-xl font-poppins">havesh</span>
      </h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-4 text-lg">
        <NavLink to="/" className={({ isActive }) => linkClasses(isActive)}>
          Home
        </NavLink>
        <NavLink to="/project" className={({ isActive }) => linkClasses(isActive)}>
          Project
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => linkClasses(isActive)}>
          Contact Me
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => linkClasses(isActive)}>
          About
        </NavLink>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          className="focus:outline-none"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-blue-600 flex flex-col items-center py-6 md:hidden space-y-4 text-lg overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
        }`}
      >
        <NavLink
          to="/"
          onClick={toggleMenu}
          className={({ isActive }) => linkClasses(isActive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/project"
          onClick={toggleMenu}
          className={({ isActive }) => linkClasses(isActive)}
        >
          Project
        </NavLink>
        <NavLink
          to="/contact"
          onClick={toggleMenu}
          className={({ isActive }) => linkClasses(isActive)}
        >
          Contact Me
        </NavLink>
        <NavLink
          to="/about"
          onClick={toggleMenu}
          className={({ isActive }) => linkClasses(isActive)}
        >
          About
        </NavLink>
      </div>
    </header>
  );
};
